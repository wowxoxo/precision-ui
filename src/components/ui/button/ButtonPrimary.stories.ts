// Filename: ButtonPrimary.stories.tsx

import type { Meta, StoryObj } from '@storybook/react'

import ButtonPrimary from './ButtonPrimary' // Adjust the import path as necessary

const meta: Meta<typeof ButtonPrimary> = {
  title: 'Components/ButtonPrimary',
  component: ButtonPrimary,
  parameters: {
    layout: 'centered',
    // backgrounds: {
    //   default: 'dark',
    // },
  },
  globals: {
    // 👇 Set background value for all component stories
    backgrounds: { value: '#333', grid: false },
  },
  tags: ['autodocs'],
  argTypes: {
    theme: {
      options: ['default', 'opacity', 'sapphire'],
      control: { type: 'radio' },
      description: 'The theme of the button.',
      table: { defaultValue: { summary: 'default' } },
    },
    size: {
      options: ['default', 'defaultWithoutIcon'],
      control: { type: 'radio' },
      description: 'The size of the button.',
      table: { defaultValue: { summary: 'default' } },
    },
    iconDirection: {
      options: ['default', 'down'],
      control: { type: 'radio' },
      description: 'Direction of the icon.',
    },
    href: {
      control: { type: 'text' },
      description: 'URL to link to when the button is clicked.',
    },
    className: {
      control: { type: 'text' },
      description: 'Additional class names for styling.',
    },
    linkClassName: {
      control: { type: 'text' },
      description: 'Class names for the Link component.',
    },
    children: {
      control: { type: 'text' },
      description: 'Text or elements to display inside the button.',
    },
    onClick: { action: 'clicked' }, // Action logging for clicks
  },
}

export default meta
type Story = StoryObj<typeof meta>

// Default ButtonPrimary story
export const Default: Story = {
  args: {
    theme: 'default',
    size: 'default',
    iconDirection: 'down',
    // href: '#', // Example link
    children: 'Default Button',
  },
}

// Opacity ButtonPrimary story
export const OpacityButtonPrimary: Story = {
  args: {
    theme: 'opacity',
    size: 'default',
    iconDirection: 'default',
    href: '#', // Example link
    children: 'Opacity Button',
  },
}

// Sapphire ButtonPrimary story
export const SapphireButtonPrimary: Story = {
  args: {
    theme: 'sapphire',
    size: 'default',
    iconDirection: 'default',
    href: '#', // Example link
    children: 'Sapphire Button',
  },
}
