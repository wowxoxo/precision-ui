import type { Meta, StoryObj } from '@storybook/react'

import { Input } from './Input'

const meta: Meta<typeof Input> = {
  title: 'Components/ui/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder text for the input field.',
    },
    type: {
      control: { type: 'text' },
      description: 'The type of the input (text, password, email, etc.).',
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'blue'],
      description: 'Visual style variant of the input.',
    },
    className: {
      control: { type: 'text' },
      description: 'Additional class names for styling the input field.',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disables the input field.',
    },
    onChange: {
      action: 'changed',
      description: 'Function triggered when the input value changes.',
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const DefaultInput: Story = {
  args: {
    placeholder: 'Enter text...',
    type: 'text',
    variant: 'default',
  },
}

export const BlueInput: Story = {
  args: {
    placeholder: 'Enter text...',
    type: 'text',
    variant: 'blue',
  },
}

export const PasswordInput: Story = {
  args: {
    placeholder: 'Enter password...',
    type: 'password',
    variant: 'default',
  },
}

export const DisabledInput: Story = {
  args: {
    placeholder: 'Disabled input',
    type: 'text',
    variant: 'default',
    disabled: true,
  },
}

export const CustomStyledInput: Story = {
  args: {
    placeholder: 'Custom styled input',
    type: 'text',
    className: 'border border-red-500',
  },
}

export const InputWithHandlers: Story = {
  args: {
    placeholder: 'Type something...',
    type: 'text',
    onChange: (event) => alert(`Input changed to: ${event.target.value}`),
  },
}
