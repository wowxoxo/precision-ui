import type { Meta, StoryObj } from '@storybook/react'

import RateCard from './Rate'
import { TagItemProps } from '../ui/Tag'

const meta: Meta<typeof RateCard> = {
  title: 'Components/cards/Rate',
  component: RateCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: { type: 'text' },
      description: 'The title of the rate card.',
    },
    oldPrice: {
      control: { type: 'text' },
      description: 'The old price to be displayed with a strikethrough effect.',
    },
    price: {
      control: { type: 'text' },
      description: 'The current price of the rate card.',
    },
    desc: {
      control: { type: 'text' },
      description: 'The description of the rate card.',
    },
    link: {
      control: { type: 'text' },
      description: 'The URL to navigate when the title is clicked.',
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'navy'],
      description: 'The visual style variant of the rate card.',
    },
    className: {
      control: { type: 'text' },
      description: 'Additional class names for styling the card.',
    },
    onClickBuyButton: {
      action: 'clicked',
      description: 'Function triggered when the buy button is clicked.',
    },
    buttons: {
      control: { type: 'object' },
      description: 'An array of button configurations.',
    },
    tags: {
      control: { type: 'object' },
      description: 'An array of tags displayed at the top of the card.',
    },
    titleInformer: {
      control: { type: 'text' },
      description: 'Informer text displayed next to the title.',
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

const sampleTags: TagItemProps[] = [
  { title: 'Popular', color: 'default' },
  { title: 'Best Value', color: 'turquoise' },
]

const sampleButtons = [
  { title: 'Buy Now', link: 'https://example.com', isBuyButton: true },
  { title: 'Learn More', link: 'https://example.com' },
]

export const DefaultRateCard: Story = {
  args: {
    title: 'Basic Plan',
    oldPrice: '$50',
    price: '$30',
    desc: 'This plan offers essential features for individuals.',
    link: 'https://example.com',
    variant: 'default',
    tags: sampleTags,
    buttons: sampleButtons,
  },
}

export const NavyRateCard: Story = {
  args: {
    title: 'Premium Plan',
    oldPrice: '$100',
    price: '$75',
    desc: 'A comprehensive plan for businesses and teams.',
    link: 'https://example.com',
    variant: 'navy',
    tags: sampleTags,
    buttons: sampleButtons,
    titleInformer: 'Limited Offer!',
  },
}

export const RateCardWithoutPrice: Story = {
  args: {
    title: 'Enterprise Plan',
    desc: 'Custom solutions for large enterprises with tailored features.',
    link: 'https://example.com',
    variant: 'default',
    tags: sampleTags,
  },
}

export const RateCardWithCustomStyles: Story = {
  args: {
    title: 'Custom Plan',
    oldPrice: '$200',
    price: '$150',
    desc: 'Special features with unique styling for premium customers.',
    link: 'https://example.com',
    variant: 'navy',
    className: 'border border-red-500',
    buttons: sampleButtons,
  },
}

export const RateCardWithoutButtons: Story = {
  args: {
    title: 'Starter Plan',
    price: '$20',
    desc: 'A simple and affordable plan for beginners.',
    link: 'https://example.com',
    variant: 'default',
    tags: sampleTags,
  },
}
