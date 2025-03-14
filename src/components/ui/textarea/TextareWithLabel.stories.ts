import type { Meta, StoryObj } from '@storybook/react'

import { TextareaWithLabel } from './TextareaWithLabel'

const meta: Meta<typeof TextareaWithLabel> = {
  title: 'Components/ui/TextareaWithLabel',
  component: TextareaWithLabel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: { type: 'text' },
      description: 'Text to display as the label above the textarea.',
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'blue'],
      description: 'Visual style variant for both label and textarea.',
    },
    id: {
      control: { type: 'text' },
      description:
        'Custom ID for the textarea (defaults to generated ID if not provided).',
    },
    className: {
      control: { type: 'text' },
      description: 'Additional class names for the container div.',
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const DefaultTextareaWithLabel: Story = {
  args: {
    label: 'Description',
    variant: 'default',
  },
}

export const BlueTextareaWithLabel: Story = {
  args: {
    label: 'Message',
    variant: 'blue',
  },
}

export const NoLabelTextarea: Story = {
  args: {
    variant: 'default',
  },
}

export const CustomIdTextareaWithLabel: Story = {
  args: {
    label: 'Notes',
    variant: 'default',
    id: 'custom-textarea-id',
  },
}

export const CustomStyledTextareaWithLabel: Story = {
  args: {
    label: 'Feedback',
    variant: 'default',
    className: 'max-w-md border border-dashed border-gray-300 p-4',
  },
}

export const BlueCustomStyledTextareaWithLabel: Story = {
  args: {
    label: 'Comments',
    variant: 'blue',
    className: 'max-w-sm bg-blue-900/10 p-3 rounded-lg',
  },
}
