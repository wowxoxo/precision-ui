import React from 'react'

// Check if tags are correctly opened and closed
const validateTags = (htmlString: string) => {
  // List of known self-closing tags
  const selfClosingTags = new Set(['br', 'img', 'input', 'hr', 'meta', 'link'])

  const tagPattern = /<\/?([a-z]+)(\s[^>]*)?>/gi
  const tagStack: string[] = []
  let match

  while ((match = tagPattern.exec(htmlString)) !== null) {
    const fullTag = match[0]
    const tagName = match[1].toLowerCase()

    // Check for incorrect </br> usage
    if (fullTag === '</br>') {
      return false // </br> is invalid HTML
    }

    if (fullTag.startsWith('</')) {
      // Closing tag
      if (selfClosingTags.has(tagName)) {
        return false // Self-closing tags shouldn't have closing tags
      }
      if (tagStack.length === 0) return false
      const lastTag = tagStack.pop()
      if (lastTag !== tagName) return false
    } else {
      // Opening tag
      if (!selfClosingTags.has(tagName) && !fullTag.endsWith('/>')) {
        tagStack.push(tagName)
      }
    }
  }

  return tagStack.length === 0
}

const validateAttributes = (htmlString: string) => {
  const attributeRegex = /<[a-z]+\s+([^>]+)>/gi
  const matches = htmlString.matchAll(attributeRegex)

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  for (const [fullMatch, attributes] of matches) {
    // Split attributes by space, but keep quoted values together
    const attrs = attributes.match(/\w+\s*=\s*(['"])(.*?)\1|\w+(?!=)/g) || []

    for (const attr of attrs) {
      // Check if attribute has quotes
      if (attr.includes('=')) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const [name, ...rest] = attr.split('=')
        const value = rest.join('=') // Rejoin in case value contains =

        // Check for proper quote matching
        if (
          !(
            (value.startsWith('"') && value.endsWith('"')) ||
            (value.startsWith("'") && value.endsWith("'"))
          )
        ) {
          return false
        }

        // Extract the quote character used
        const quoteChar = value[0]
        // Check if there are any unescaped quotes of the same type inside the value
        const valueContent = value.slice(1, -1)
        if (valueContent.includes(quoteChar)) {
          return false
        }
      }
    }
  }

  // Additional check for unclosed quotes before >
  const unclosedQuoteCheck = /<[^>]*?['"][^'"]*>/g
  const potentiallyUnclosedTags = htmlString.match(unclosedQuoteCheck) || []
  for (const tag of potentiallyUnclosedTags) {
    let inQuote = false
    let quoteChar = ''
    for (let i = 0; i < tag.length; i++) {
      if (tag[i] === "'" || tag[i] === '"') {
        if (!inQuote) {
          inQuote = true
          quoteChar = tag[i]
        } else if (tag[i] === quoteChar) {
          inQuote = false
        }
      }
    }
    if (inQuote) {
      return false
    }
  }

  return true
}

// Check if self-closing tags are valid
const validateSelfClosingTags = (htmlString: string) => {
  const selfClosingTags = [...htmlString.matchAll(/<([a-z]+)(\s[^>]*)\/>/gi)]

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  for (const [_, tag, attributes] of selfClosingTags) {
    if (attributes) {
      const attrRegex = /(\w+)=["']([^"']*)["']/g
      const attrs = [...attributes.matchAll(attrRegex)]

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      for (const [__, attrName, attrValue] of attrs) {
        if (!attrName || !attrValue) {
          return false // Invalid attribute format
        }
      }
      // Check for unclosed attributes
      const unclosedAttrRegex = /(\w+)=["'][^"']*$/g
      const unclosedAttrs = [...attributes.matchAll(unclosedAttrRegex)]
      if (unclosedAttrs.length > 0) {
        return false // Unclosed attribute in self-closing tag
      }
    }
  }

  return true // Self-closing tags are valid
}

// Check for inline styles and ensure they follow a valid format
const validateInlineStyles = (htmlString: string) => {
  const styleRegex = /style=["']([^"']*)["']/gi
  const styles = [...htmlString.matchAll(styleRegex)]

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  for (const [_, styleContent] of styles) {
    // A basic check for properly formatted style declarations (e.g., "property: value;")
    const styleRules = styleContent.split(';')
    for (const rule of styleRules) {
      if (rule.trim()) {
        const [property, value] = rule.split(':').map((s) => s.trim())
        if (!property || !value) {
          return false // Invalid style declaration
        }
      }
    }
  }

  return true // Inline styles are valid
}

// Main function that calls the smaller subfunctions
const validateHtmlBasic = (htmlString: string) => {
  return (
    validateTags(htmlString) &&
    validateAttributes(htmlString) &&
    validateSelfClosingTags(htmlString) &&
    validateInlineStyles(htmlString)
  )
}

// Utility to extract plain text from HTML string
const htmlToText = (html: string): string => {
  const tempDiv = document.createElement('div')
  tempDiv.innerHTML = html
  return tempDiv.textContent || tempDiv.innerText || ''
}

// Utility to truncate text safely
const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength).trim() + '...'
}

const SafeHtmlRenderer = ({
  html,
  className,
  withoutContentClass,
  truncateLength,
}: {
  html: string
  className?: string
  withoutContentClass?: boolean
  truncateLength?: number
}) => {
  const isValid = validateHtmlBasic(html)
  // console.log("isValidHTML", isValid);
  // TODO: add send error to TG

  if (!isValid) {
    console.error('Invalid HTML content:', html)
    return <div style={{ color: 'red' }}>Некорректное HTML содержимое</div>
  }

  // If truncateLength is provided, extract text, truncate, and render as plain HTML-safe text
  const processedHtml = truncateLength
    ? truncateText(htmlToText(html), truncateLength)
    : html

  return (
    <div
      className={[!withoutContentClass && 'content', className]
        .filter(Boolean)
        .join(' ')}
      dangerouslySetInnerHTML={{ __html: processedHtml }}
    />
  )
}

export default SafeHtmlRenderer
