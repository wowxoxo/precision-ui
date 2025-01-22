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
    html: `<div><span>Invalid HTML example<div>`, // Missing closing span tag
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
