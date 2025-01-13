import type { Meta, StoryObj } from '@storybook/react'

import ButtonSecondary from './ButtonSecondary'

const meta: Meta<typeof ButtonSecondary> = {
  title: 'Components/ButtonSecondary',
  component: ButtonSecondary,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['default', 'white', 'outline', 'outlineWhite'],
      control: { type: 'radio' },
      description: 'The variant of the button.',
      table: { defaultValue: { summary: 'default' } },
    },
    size: {
      options: ['default', 'sm'],
      control: { type: 'radio' },
      description: 'The size of the button. Changes the hover effect.',
    },
    className: {
      control: { type: 'text' },
      description: 'Additional class names for styling.',
    },
    children: {
      control: { type: 'text' },
      description: 'Text or elements to display inside the button.',
    },
    asChild: {
      control: { type: 'boolean' },
      description: 'Render as a child component (useful for custom elements)',
    },
    onClick: { action: 'clicked' },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    variant: 'default',
    size: 'default',
    children: 'Default Button',
  },
}

export const WhiteButtonSecondary: Story = {
  args: {
    variant: 'white',
    size: 'default',
    children: 'White Button',
  },
}

export const OutlineButtonSecondary: Story = {
  args: {
    variant: 'outline',
    size: 'default',
    children: 'Outline Button',
  },
}

export const OutlineWhiteButtonSecondary: Story = {
  args: {
    variant: 'outlineWhite',
    size: 'default',
    children: 'Outline White Button',
  },
}
