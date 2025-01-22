import type { Meta, StoryObj } from '@storybook/react'

import { CheckboxWithLabel } from './CheckboxWithLabel'

const meta: Meta<typeof CheckboxWithLabel> = {
  title: 'Components/CheckboxWithLabel',
  component: CheckboxWithLabel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    id: {
      control: { type: 'text' },
      description: 'The unique identifier for the checkbox input.',
    },
    children: {
      control: { type: 'text' },
      description: 'The label text for the checkbox.',
    },
    desc: {
      control: { type: 'text' },
      description: 'Additional descriptive text for the checkbox.',
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'white'],
      description: 'The visual style variant of the checkbox with label.',
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const DefaultCheckboxWithLabel: Story = {
  args: {
    children: 'Subscribe to newsletter',
    desc: 'Receive the latest updates and promotions.',
    variant: 'default',
  },
}

export const WhiteVariantCheckboxWithLabel: Story = {
  args: {
    children: 'Enable dark mode',
    desc: 'Switch to the dark theme for better readability at night.',
    variant: 'white',
  },
}

export const CheckboxWithLabelWithoutDescription: Story = {
  args: {
    children: 'I agree to the terms and conditions',
    variant: 'default',
  },
}

export const DisabledCheckboxWithLabel: Story = {
  args: {
    children: 'I accept cookies',
    desc: 'This setting cannot be changed at the moment.',
    variant: 'default',
    id: 'disabled-checkbox',
  },
}
