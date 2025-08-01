import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'

import SafeHtmlRenderer from './SafeHtml'

describe('SafeHtmlRenderer Component', () => {
  it('renders valid HTML content correctly', () => {
    const validHtml = '<p style="color:blue;">Valid content</p>'

    render(<SafeHtmlRenderer html={validHtml} />)

    expect(screen.getByText('Valid content')).toBeInTheDocument()
    expect(screen.queryByText('Invalid HTML content')).not.toBeInTheDocument()
  })

  it('renders error for invalid HTML with unclosed tag', () => {
    const invalidHtml = '<div><span>Invalid HTML content</div>'

    render(<SafeHtmlRenderer html={invalidHtml} />)

    expect(screen.getByText('Invalid HTML content')).toBeInTheDocument()
    expect(screen.getByText('Invalid HTML content')).toHaveStyle({
      color: 'red',
    })
  })

  it('rejects incorrect self-closing tag usage like </br>', () => {
    const invalidHtml = '<br></br>'

    render(<SafeHtmlRenderer html={invalidHtml} />)

    expect(screen.getByText('Invalid HTML content')).toBeInTheDocument()
  })

  it('rejects missing closing quote in attribute', () => {
    const invalidHtml = '<a href="https://example.com  >Link</a>'

    render(<SafeHtmlRenderer html={invalidHtml} />)

    expect(screen.getByText('Invalid HTML content')).toBeInTheDocument()
  })

  it('rejects unescaped quotes inside attribute value', () => {
    const invalidHtml =
      '<a href="https://example.com" title="invalid "title"">Link</a>'

    render(<SafeHtmlRenderer html={invalidHtml} />)

    expect(screen.getByText('Invalid HTML content')).toBeInTheDocument()
  })

  it('rejects unclosed attribute', () => {
    const invalidHtml = '<img src="image.jpg alt="Unclosed attribute">'

    render(<SafeHtmlRenderer html={invalidHtml} />)

    expect(screen.getByText('Invalid HTML content')).toBeInTheDocument()
  })

  it('renders valid HTML with self-closing tag', () => {
    const validHtml =
      '<img src="https://via.placeholder.com/150" alt="Sample Image" />'

    render(<SafeHtmlRenderer html={validHtml} />)

    expect(screen.getByRole('img')).toBeInTheDocument()
    expect(screen.getByRole('img')).toHaveAttribute(
      'src',
      'https://via.placeholder.com/150'
    )
  })

  it('renders valid HTML with inline styles', () => {
    const validHtml =
      '<div style="color:red; padding:10px;">Styled content</div>'

    render(<SafeHtmlRenderer html={validHtml} />)

    expect(screen.getByText('Styled content')).toBeInTheDocument()
  })

  it('rejects malformed inline style (missing colon)', () => {
    const invalidHtml =
      '<div style="color red; padding 10px;">Invalid styles</div>'

    render(<SafeHtmlRenderer html={invalidHtml} />)

    expect(screen.getByText('Invalid HTML content')).toBeInTheDocument()
  })

  it('handles empty HTML string safely', () => {
    render(<SafeHtmlRenderer html="" />)

    expect(screen.getByText('Invalid HTML content')).toBeInTheDocument()
  })

  it('renders valid HTML with attributes correctly', () => {
    const validHtml =
      '<a href="https://example.com" target="_blank">Visit Example</a>'

    render(<SafeHtmlRenderer html={validHtml} />)

    const link = screen.getByRole('link', { name: /visit example/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', 'https://example.com')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('truncates text content when truncateLength is provided', () => {
    const longHtml =
      '<p>This is a long description that should be truncated.</p>'
    const truncateLength = 20

    render(<SafeHtmlRenderer html={longHtml} truncateLength={truncateLength} />)

    const truncatedText = screen.getByText('This is a long descr...')
    expect(truncatedText).toBeInTheDocument()
    expect(truncatedText.tagName).toBe('DIV') // rendered inside div
  })

  it('does not truncate when truncateLength is not reached', () => {
    const shortHtml = '<p>Short text</p>'
    const truncateLength = 50

    render(
      <SafeHtmlRenderer html={shortHtml} truncateLength={truncateLength} />
    )

    expect(screen.getByText('Short text')).toBeInTheDocument()
  })

  it('applies className and omits content class when withoutContentClass is true', () => {
    const validHtml = '<p>Styled content</p>'

    render(
      <SafeHtmlRenderer
        html={validHtml}
        className="custom-class"
        withoutContentClass={true}
      />
    )

    const container = screen.getByRole('document').firstChild as HTMLElement
    expect(container).toHaveClass('custom-class')
    expect(container).not.toHaveClass('content')
  })

  it('applies both content class and custom className by default', () => {
    const validHtml = '<p>Styled content</p>'

    render(<SafeHtmlRenderer html={validHtml} className="custom-class" />)

    const container = screen.getByRole('document').firstChild as HTMLElement
    expect(container).toHaveClass('content')
    expect(container).toHaveClass('custom-class')
  })
})
