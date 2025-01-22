import type { Meta, StoryObj } from '@storybook/react'

import { Tag } from './Tag'

const meta: Meta<typeof Tag> = {
  title: 'Components/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: { type: 'text' },
      description: 'The content of the tag.',
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'turquoise', 'white', 'lightWhite'],
      description: 'The visual style of the tag.',
    },
    className: {
      control: { type: 'text' },
      description: 'Additional class names for the tag.',
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const DefaultTag: Story = {
  args: {
    children: 'Default Tag',
    variant: 'default',
  },
}

export const TurquoiseTag: Story = {
  args: {
    children: 'Turquoise Tag',
    variant: 'turquoise',
  },
}

export const WhiteTag: Story = {
  args: {
    children: 'White Tag',
    variant: 'white',
  },
}

export const LightWhiteTag: Story = {
  args: {
    children: 'Light White Tag',
    variant: 'lightWhite',
  },
}

export const CustomClassTag: Story = {
  args: {
    children: 'Custom Styled Tag',
    variant: 'default',
    className: 'border border-red-500',
  },
}
