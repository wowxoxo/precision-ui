import type { Meta, StoryObj } from '@storybook/react'

import SafeHtmlRenderer from './SafeHtml'

const meta: Meta<typeof SafeHtmlRenderer> = {
  title: 'Utils/SafeHtmlRenderer',
  component: SafeHtmlRenderer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    html: {
      control: { type: 'text' },
      description: 'The HTML content to be validated and rendered.',
    },
    className: {
      control: { type: 'text' },
      description: 'Additional class names for styling the rendered content.',
    },
    truncateLength: {
      control: { type: 'number', min: 0 },
      description:
        'If set, truncates the text content to this length and appends "..."',
    },
    withoutContentClass: {
      control: { type: 'boolean' },
      description: 'If true, omits the default "content" class.',
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const ValidHtml: Story = {
  args: {
    html: `<p style="color:blue;">This is a valid paragraph with a style.</p>`,
    className: 'text-center',
  },
}

export const InvalidHtml: Story = {
  args: {
    html: `<div><span>Invalid HTML example<div>`, // Missing closing span
  },
}

export const HtmlWithSelfClosingTags: Story = {
  args: {
    html: `<img src="https://via.placeholder.com/150" alt="Sample Image" />`,
  },
}

export const HtmlWithAttributes: Story = {
  args: {
    html: `<a href="https://example.com" target="_blank">Visit Example</a>`,
  },
}

export const HtmlWithInlineStyles: Story = {
  args: {
    html: `<div style="background-color: lightgrey; padding: 10px;">Styled content</div>`,
  },
}

export const TruncatedHtml: Story = {
  args: {
    html: `<p>This is a very long description that should be truncated when the truncateLength is set.</p>`,
    truncateLength: 50,
  },
}

export const TruncatedWithValidHtml: Story = {
  args: {
    html: 'The quick brown fox jumps over the lazy dog.',
    truncateLength: 20,
  },
}
