import type { Meta, StoryObj } from '@storybook/react'

import { Textarea } from './Textarea'

const meta: Meta<typeof Textarea> = {
  title: 'Components/ui/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder text for the textarea.',
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'blue'],
      description: 'Visual style variant of the textarea.',
    },
    maxLength: {
      control: { type: 'number' },
      description: 'Maximum number of characters allowed.',
    },
    className: {
      control: { type: 'text' },
      description: 'Additional class names for styling the textarea.',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disables the textarea.',
    },
    onChange: {
      action: 'changed',
      description: 'Function triggered when the textarea value changes.',
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const DefaultTextarea: Story = {
  args: {
    placeholder: 'Enter text...',
    variant: 'default',
    maxLength: 100,
  },
}

export const BlueTextarea: Story = {
  args: {
    placeholder: 'Enter text...',
    variant: 'blue',
    maxLength: 100,
  },
}

export const NoMaxLengthTextarea: Story = {
  args: {
    placeholder: 'Enter text without limit...',
    variant: 'default',
  },
}

export const DisabledTextarea: Story = {
  args: {
    placeholder: 'Disabled textarea',
    variant: 'default',
    maxLength: 50,
    disabled: true,
  },
}

export const CustomStyledTextarea: Story = {
  args: {
    placeholder: 'Custom styled textarea',
    variant: 'default',
    maxLength: 200,
    className: 'border border-green-500 min-h-[120px]',
  },
}

export const TextareaWithHandlers: Story = {
  args: {
    placeholder: 'Type something...',
    variant: 'default',
    maxLength: 150,
    onChange: (event) => alert(`Textarea changed to: ${event.target.value}`),
  },
}
