import type { Meta, StoryObj } from '@storybook/react'

import { ChevronsUpDown } from 'lucide-react'
import { Combobox } from './combobox'
import React from 'react'

const meta: Meta<typeof Combobox> = {
  title: 'Components/Combobox',
  component: Combobox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    options: {
      control: { type: 'object' },
      description: 'Array of options to display in the combobox.',
    },
    defaultValue: {
      control: { type: 'text' },
      description: 'The default value of the combobox.',
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder text for the combobox.',
    },
    buttonClassName: {
      control: { type: 'text' },
      description: 'Additional CSS classes for the button.',
    },
    popoverContentClassName: {
      control: { type: 'text' },
      description: 'Additional CSS classes for the popover content.',
    },
    commandClassName: {
      control: { type: 'text' },
      description: 'Additional CSS classes for the command component.',
    },
    onSelect: {
      action: 'selected',
      description: 'Callback function when an option is selected.',
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

const defaultOptions = [
  { value: 'next.js', label: 'Next.js' },
  { value: 'sveltekit', label: 'SvelteKit' },
  { value: 'nuxt.js', label: 'Nuxt.js' },
  { value: 'remix', label: 'Remix' },
  { value: 'astro', label: 'Astro' },
]

export const DefaultCombobox: Story = {
  args: {
    options: defaultOptions,
    placeholder: 'Select framework...',
    onSelect: (value) => console.log('Selected:', value),
  },
}

export const ComboboxWithDefaultValue: Story = {
  args: {
    options: defaultOptions,
    defaultValue: 'next.js',
    placeholder: 'Select framework...',
    onSelect: (value) => console.log('Selected:', value),
  },
}

export const ComboboxWithCustomClasses: Story = {
  args: {
    options: defaultOptions,
    placeholder: 'Select framework...',
    buttonClassName: 'custom-button-class',
    popoverContentClassName: 'custom-popover-class',
    commandClassName: 'custom-command-class',
    onSelect: (value) => console.log('Selected:', value),
    iconComponent: <ChevronsUpDown className="opacity-50" />,
  },
}
