import type { Meta, StoryObj } from '@storybook/react'

import ButtonIcon from './ButtonIcon'

const meta: Meta<typeof ButtonIcon> = {
  title: 'Components/ButtonIcon',
  component: ButtonIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['default', 'outline', 'white', 'outlineWhite'],
      control: { type: 'radio' },
      description: 'The variant of the button.',
      table: { defaultValue: { summary: 'default' } },
    },
    icon: {
      control: { type: 'select' },
      description: 'The icon to display in the button.',
    },
    width: {
      control: { type: 'number' },
      description: 'Width of the icon.',
    },
    height: {
      control: { type: 'number' },
      description: 'Height of the icon.',
    },
    onClick: { action: 'clicked' },
    children: {
      control: { type: 'text' },
      description: 'Text to display in the button.',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    variant: 'default',
    icon: 'like',
    width: 20,
    height: 20,
    children: 'Default Button',
  },
}

export const OutlineButtonIcon: Story = {
  args: {
    variant: 'outline',
    icon: 'like',
    width: 20,
    height: 20,
    children: 'Outline Button',
  },
}

export const WhiteButtonIcon: Story = {
  args: {
    variant: 'white',
    icon: 'like',
    width: 20,
    height: 20,
    children: 'White Button',
  },
}

export const OutlineWhiteButtonIcon: Story = {
  args: {
    variant: 'outlineWhite',
    icon: 'like',
    width: 20,
    height: 20,
    children: 'Outline White Button',
  },
}
