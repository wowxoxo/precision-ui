import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'

import SafeHtmlRenderer from './SafeHtml'

describe('SafeHtmlRenderer Component', () => {
  it('renders valid HTML content correctly', () => {
    const validHtml = '<p style="color:blue;">Valid content</p>'

    render(<SafeHtmlRenderer html={validHtml} />)

    expect(screen.getByText('Valid content')).toBeInTheDocument()
  })

  it('renders invalid HTML with unclosed tag', () => {
    const invalidHtml = '<div><span>Invalid HTML content</div>'

    render(<SafeHtmlRenderer html={invalidHtml} />)

    expect(screen.getByText('Invalid HTML content')).toBeInTheDocument()
    expect(screen.getByText('Invalid HTML content')).toHaveStyle({
      color: 'red',
    })
  })

  it('renders invalid HTML with incorrect self-closing tag', () => {
    const invalidHtml = '<br></br>'

    render(<SafeHtmlRenderer html={invalidHtml} />)

    expect(screen.getByText('Invalid HTML content')).toBeInTheDocument()
  })

  it('renders invalid HTML with missing closing quote', () => {
    const invalidHtml = '<a href="https://example.com>Link</a>'

    render(<SafeHtmlRenderer html={invalidHtml} />)

    expect(screen.getByText('Invalid HTML content')).toBeInTheDocument()
  })

  it('renders invalid HTML with double quotes inside double quotes', () => {
    const invalidHtml =
      '<a href="https://example.com" title="invalid "title"">Link</a>'

    render(<SafeHtmlRenderer html={invalidHtml} />)

    expect(screen.getByText('Invalid HTML content')).toBeInTheDocument()
  })

  it('renders invalid HTML with unclosed attribute', () => {
    const invalidHtml = '<img src="image.jpg alt="Unclosed attribute">'

    render(<SafeHtmlRenderer html={invalidHtml} />)

    expect(screen.getByText('Invalid HTML content')).toBeInTheDocument()
  })

  it('renders valid HTML with self-closing tag', () => {
    const validHtml =
      '<img src="https://via.placeholder.com/150" alt="Sample Image" />'

    render(<SafeHtmlRenderer html={validHtml} />)

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

  it('renders invalid HTML with malformed inline style', () => {
    const invalidHtml =
      '<div style="color red padding 10px;">Invalid styles</div>'

    render(<SafeHtmlRenderer html={invalidHtml} />)

    expect(screen.getByText('Invalid HTML content')).toBeInTheDocument()
  })

  it('renders invalid HTML with unescaped quotes in attribute value', () => {
    const invalidHtml =
      '<div title="Title with "unescaped" quotes">Content</div>'

    render(<SafeHtmlRenderer html={invalidHtml} />)

    expect(screen.getByText('Invalid HTML content')).toBeInTheDocument()
  })

  it('renders empty content safely', () => {
    const emptyHtml = ''

    render(<SafeHtmlRenderer html={emptyHtml} />)

    expect(screen.getByText('Invalid HTML content')).toBeInTheDocument()
  })

  it('renders valid HTML with attributes correctly', () => {
    const validHtml =
      '<a href="https://example.com" target="_blank">Visit Example</a>'

    render(<SafeHtmlRenderer html={validHtml} />)

    expect(screen.getByText('Visit Example')).toBeInTheDocument()
    expect(screen.getByRole('link')).toHaveAttribute(
      'href',
      'https://example.com'
    )
  })
})
