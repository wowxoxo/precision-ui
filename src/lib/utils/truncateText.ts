function truncateText(text: string, maxLength: number): string {
  if (!text) return ''
  if (text.length <= maxLength) {
    return text
  }
  return text.slice(0, maxLength) + '...'
}

export default truncateText
