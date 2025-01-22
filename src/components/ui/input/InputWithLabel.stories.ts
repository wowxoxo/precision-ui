import type { Meta, StoryObj } from '@storybook/react'

import { InputWithLabel } from './InputWithLabel'

const meta: Meta<typeof InputWithLabel> = {
  title: 'Components/ui/InputWithLabel',
  component: InputWithLabel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'blue'],
      description: 'The visual style variant of the input field.',
    },
    label: {
      control: { type: 'text' },
      description: 'The label text for the input field.',
    },
    type: {
      control: { type: 'text' },
      description: 'The type of the input field (text, email, password, etc.).',
    },
    id: {
      control: { type: 'text' },
      description: 'Unique identifier for the input field.',
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder text displayed inside the input field.',
    },
    className: {
      control: { type: 'text' },
      description: 'Additional class names for styling the input container.',
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const DefaultInputWithLabel: Story = {
  args: {
    variant: 'default',
    label: 'Full Name',
    type: 'text',
    placeholder: 'Enter your full name',
  },
}

export const BlueInputWithLabel: Story = {
  args: {
    variant: 'blue',
    label: 'Email Address',
    type: 'email',
    placeholder: 'Enter your email',
  },
}

export const InputWithoutLabel: Story = {
  args: {
    variant: 'default',
    type: 'password',
    placeholder: 'Enter your password',
  },
}

export const InputWithCustomStyles: Story = {
  args: {
    variant: 'default',
    label: 'Custom Styled Input',
    type: 'text',
    placeholder: 'Custom placeholder',
    className: 'border border-red-500',
  },
}

export const DisabledInputWithLabel: Story = {
  args: {
    variant: 'default',
    label: 'Disabled Input',
    type: 'text',
    placeholder: 'Cannot be edited',
    className: 'opacity-50 cursor-not-allowed',
  },
}
