import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './button'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  globals: {
    backgrounds: { value: '#333', grid: false },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['default', 'destructive', 'outline', 'ghost', 'link'],
      control: { type: 'radio' },
      description: 'The variant of the button.',
    },
    size: {
      options: ['default', 'sm', 'lg', 'icon'],
      control: { type: 'radio' },
      description: 'The size of the button.',
      // table: { defaultValue: { summary: 'sm' } },
    },
    asChild: {
      control: {
        type: 'boolean',
      },
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
    asChild: false,
  },
}

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    size: 'default',
    children: 'Destructive Action',
    asChild: false,
  },
}

export const Outline: Story = {
  args: {
    variant: 'outline',
    size: 'default',
    children: 'Outline Button',
    asChild: false,
  },
}

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    size: 'default',
    children: 'Ghost Button',
    asChild: false,
  },
}

export const LinkButton: Story = {
  args: {
    variant: 'link',
    size: 'default',
    children: 'Link Style Button',
    asChild: false,
  },
}

export const SmallButton: Story = {
  args: {
    variant: 'default',
    size: 'sm',
    children: 'Small Button',
    asChild: false,
  },
}

export const LargeButton: Story = {
  args: {
    variant: 'default',
    size: 'lg',
    children: 'Large Button',
    asChild: false,
  },
}
