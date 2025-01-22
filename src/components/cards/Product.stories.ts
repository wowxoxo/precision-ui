import type { Meta, StoryObj } from '@storybook/react'
import ProductCard, { ProductCardButtonProps } from './Product'

const meta: Meta<typeof ProductCard> = {
  title: 'Components/cards/Product',
  component: ProductCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: { type: 'text' },
      description: 'The title of the product card.',
    },
    desc: {
      control: { type: 'text' },
      description: 'A description that provides details about the product.',
    },
    icon: {
      control: { type: 'text' },
      description: 'The URL of the product icon.',
    },
    link: {
      control: { type: 'text' },
      description: 'The URL to navigate when the card is clicked.',
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'navy'],
      description: 'The visual style variant of the product card.',
    },
    size: {
      control: { type: 'select' },
      options: [1, 2],
      description: 'Defines the size of the card.',
    },
    buttons: {
      control: { type: 'object' },
      description: 'Array of button configurations for the card.',
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

const sampleButtons: ProductCardButtonProps[] = [
  { text: 'Buy Now', href: 'https://example.com', icon: 'arrowRight' },
  { text: 'Learn More', href: 'https://example.com', icon: 'download' },
]

export const DefaultProductCard: Story = {
  args: {
    title: 'Standard Product',
    desc: 'This product offers great value and features.',
    icon: '/icons/product.svg',
    variant: 'default',
    size: 1,
  },
}

export const NavyProductCard: Story = {
  args: {
    title: 'Premium Product',
    desc: 'Experience the premium quality of our product.',
    icon: '/icons/premium.svg',
    variant: 'navy',
    size: 1,
  },
}

export const ProductCardWithButtons: Story = {
  args: {
    title: 'Feature-Rich Product',
    desc: 'This product comes with multiple options.',
    icon: '/icons/feature.svg',
    variant: 'default',
    size: 2,
    buttons: sampleButtons,
  },
}

export const ClickableProductCard: Story = {
  args: {
    title: 'Clickable Card',
    desc: 'Click this card to navigate to the product page.',
    icon: '/icons/clickable.svg',
    link: 'https://example.com',
    variant: 'navy',
    size: 1,
  },
}

export const LargeProductCard: Story = {
  args: {
    title: 'Enterprise Solution',
    desc: 'A solution designed for large-scale businesses.',
    icon: '/icons/enterprise.svg',
    variant: 'default',
    size: 2,
  },
}

export const ProductCardWithoutDescription: Story = {
  args: {
    title: 'No Description Card',
    icon: '/icons/simple.svg',
    variant: 'default',
    size: 1,
  },
}
