import type { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from './checkbox'

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  // globals: {
  //   backgrounds: { value: '#333', grid: false },
  // },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'white'],
      description: 'Defines the visual style of the checkbox.',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disables the checkbox.',
    },
    checked: {
      control: { type: 'boolean' },
      description: 'Sets the checked state of the checkbox.',
    },
    className: {
      control: { type: 'text' },
      description: 'Additional class names for styling.',
    },
    onCheckedChange: {
      action: 'checkedChange',
      description: 'Callback function triggered on checkbox state change.',
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const DefaultCheckbox: Story = {
  args: {
    variant: 'default',
    checked: false,
  },
}

export const CheckedCheckbox: Story = {
  args: {
    variant: 'default',
    checked: true,
  },
}

export const WhiteVariantCheckbox: Story = {
  args: {
    variant: 'white',
    checked: false,
  },
}

export const DisabledCheckbox: Story = {
  args: {
    variant: 'default',
    disabled: true,
  },
}

export const CheckboxWithCustomClass: Story = {
  args: {
    variant: 'default',
    checked: false,
    className: 'border-red-500',
  },
}
