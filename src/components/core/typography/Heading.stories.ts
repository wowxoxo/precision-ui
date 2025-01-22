import type { Meta, StoryObj } from '@storybook/react'

import Heading from './Heading'

const meta: Meta<typeof Heading> = {
  title: 'Components/core/typo/Heading',
  component: Heading,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    level: {
      control: { type: 'select' },
      options: [1, 2, 3, 4, 5, 6],
      description: 'Defines the heading level (h1 to h6).',
    },
    as: {
      control: { type: 'text' },
      description:
        'Allows rendering as a different HTML element (e.g., span, div).',
    },
    className: {
      control: { type: 'text' },
      description: 'Additional class names for custom styling.',
    },
    children: {
      control: { type: 'text' },
      description: 'The content inside the heading.',
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const HeadingH1: Story = {
  args: {
    level: 1,
    children: 'This is a Heading H1',
  },
}

export const HeadingH2: Story = {
  args: {
    level: 2,
    children: 'This is a Heading H2',
  },
}

export const HeadingH3WithClass: Story = {
  args: {
    level: 3,
    className: 'text-red-500',
    children: 'This is a red Heading H3',
  },
}

export const HeadingAsSpan: Story = {
  args: {
    level: 4,
    as: 'span',
    children: 'This heading is rendered as a span',
  },
}

export const HeadingWithLongText: Story = {
  args: {
    level: 5,
    children:
      'This is a longer heading that provides more context and wraps properly.',
  },
}

export const HeadingH6: Story = {
  args: {
    level: 6,
    children: 'This is a Heading H6',
  },
}
