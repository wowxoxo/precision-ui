import type { Meta, StoryObj } from '@storybook/react'

import ConnectCard from './Connect'

// import { ConsultButtonProps } from '@/sections/common';

const meta: Meta<typeof ConnectCard> = {
  title: 'Components/cards/ConnectCard',
  component: ConnectCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    topContent: {
      control: { type: 'object' },
      description:
        'The top content of the card, including title and content array.',
    },
    bottomContent: {
      control: { type: 'object' },
      description:
        'The bottom content of the card, including title and content array.',
    },
    withLogo: {
      control: { type: 'boolean' },
      description: 'Whether to display the logo.',
    },
    className: {
      control: { type: 'text' },
      description: 'Additional CSS classes for custom styling.',
    },
    size: {
      options: [1, 2],
      control: { type: 'radio' },
      description: 'Size of the card.',
    },
    onClickConsultButton: {
      action: 'clicked',
      description: 'Callback function for consult button click.',
    },
    buttons: {
      control: { type: 'object' },
      description: 'Array of button configurations.',
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const DefaultConnectCard: Story = {
  args: {
    topContent: {
      title: 'Top Title',
      content: ['Content 1', 'Content 2'],
    },
    bottomContent: {
      title: 'Bottom Title',
      content: ['Content A', 'Content B'],
    },
    withLogo: true,
    size: 1,
    buttons: [
      { text: 'Learn More', href: '#' },
      { text: 'Consult', isConsultButton: true },
    ],
  },
}

export const ConnectCardWithoutBottomContent: Story = {
  args: {
    topContent: {
      title: 'Top Title',
      content: ['Content 1', 'Content 2'],
    },
    withLogo: false,
    size: 2,
    buttons: [{ text: 'Learn More', href: '#' }],
  },
}

export const ConnectCardWithCustomClass: Story = {
  args: {
    topContent: {
      title: 'Custom Card',
      content: ['Custom Content 1', 'Custom Content 2'],
    },
    bottomContent: {
      title: 'Custom Bottom',
      content: ['Custom A', 'Custom B'],
    },
    withLogo: true,
    size: 1,
    className: 'custom-class',
    buttons: [
      { text: 'Custom Button', href: '#' },
      { text: 'Custom Consult', isConsultButton: true },
    ],
  },
}

export const ConnectCardWithMultipleButtons: Story = {
  args: {
    topContent: {
      title: 'Multiple Buttons',
      content: ['Button Content 1', 'Button Content 2'],
    },
    bottomContent: {
      title: 'More Buttons',
      content: ['Button A', 'Button B'],
    },
    withLogo: true,
    size: 2,
    buttons: [
      { text: 'Button 1', href: '#' },
      { text: 'Button 2', href: '#' },
      { text: 'Consult', isConsultButton: true },
    ],
  },
}
