import type { Meta, StoryObj } from '@storybook/react'

import PackageCard from './Package'
import { RateButtonProps } from './Rate'
import { TagItemProps } from '../ui/Tag'

const meta: Meta<typeof PackageCard> = {
  title: 'Components/cards/PackageCard',
  component: PackageCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['default', 'navy'],
      control: { type: 'radio' },
      description: 'The variant of the package card.',
    },
    className: {
      control: { type: 'text' },
      description: 'Additional CSS classes for custom styling.',
    },
    title: {
      control: { type: 'text' },
      description: 'The title of the package card.',
    },
    oldPrice: {
      control: { type: 'text' },
      description: 'The old price of the package.',
    },
    price: {
      control: { type: 'text' },
      description: 'The current price of the package.',
    },
    priceDesc: {
      control: { type: 'text' },
      description: 'A description of the price.',
    },
    desc: {
      control: { type: 'text' },
      description: 'A description of the package.',
    },
    link: {
      control: { type: 'text' },
      description: 'The link associated with the package.',
    },
    onClickBuyButton: {
      action: 'clicked',
      description: 'Callback function for buy button click.',
    },
    buttons: {
      control: { type: 'object' },
      description: 'Array of button configurations.',
    },
    tags: {
      control: { type: 'object' },
      description: 'Array of tag configurations.',
    },
    titleInformer: {
      control: { type: 'text' },
      description: 'Informer content for the title.',
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

const defaultButtons: RateButtonProps[] = [
  { title: 'Buy Now', link: '#', variant: 'default', isBuyButton: true },
  { title: 'Learn More', link: '#', variant: 'outline' },
]

const defaultTags: TagItemProps[] = [
  { title: 'New', color: 'default' },
  { title: 'Popular', color: 'turquoise' },
]

export const DefaultPackageCard: Story = {
  args: {
    variant: 'default',
    title: 'Basic Package',
    oldPrice: '$199',
    price: '$149',
    priceDesc: 'Save $50!',
    desc: 'Get started with our basic package.',
    link: '#',
    buttons: defaultButtons,
    tags: defaultTags,
  },
}

export const NavyPackageCard: Story = {
  args: {
    variant: 'navy',
    title: 'Premium Package',
    oldPrice: '$299',
    price: '$249',
    priceDesc: 'Save $50!',
    desc: 'Upgrade to our premium package.',
    link: '#',
    buttons: defaultButtons,
    tags: defaultTags,
  },
}

export const PackageCardWithoutOldPrice: Story = {
  args: {
    variant: 'default',
    title: 'Standard Package',
    price: '$99',
    desc: 'A standard package with no old price.',
    link: '#',
    buttons: defaultButtons,
    tags: defaultTags,
  },
}

export const PackageCardWithTitleInformer: Story = {
  args: {
    variant: 'navy',
    title: 'Limited Offer',
    oldPrice: '$399',
    price: '$299',
    priceDesc: 'Save $100!',
    desc: 'Limited time offer. Act now!',
    link: '#',
    buttons: defaultButtons,
    tags: defaultTags,
    titleInformer: 'Limited Time Only',
  },
}
