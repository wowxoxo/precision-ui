import type { Meta, StoryObj } from '@storybook/react'

import FeaturedCard from './FeaturedCard'
import { TagItemProps } from '../ui/Tag'

const meta: Meta<typeof FeaturedCard> = {
  title: 'Components/cards/FeaturedCard',
  component: FeaturedCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: [1, 2, 3],
      description: 'Defines the size of the card.',
    },
    tags: {
      control: { type: 'object' },
      description: 'An array of tags displayed at the top of the card.',
    },
    link: {
      control: { type: 'text' },
      description: 'The URL the card should link to.',
    },
    title: {
      control: { type: 'text' },
      description: 'The title of the featured card.',
    },
    desc: {
      control: { type: 'text' },
      description: 'A short description of the featured card.',
    },
    className: {
      control: { type: 'text' },
      description: 'Additional class names for styling the card.',
    },
    showDivider: {
      control: { type: 'boolean' },
      description: 'Whether to show a divider between sections.',
    },
    price: {
      control: { type: 'text' },
      description: 'The price to be displayed on the card.',
    },
    oldPrice: {
      control: { type: 'text' },
      description: 'The old price to be displayed with a strikethrough effect.',
    },
    detailsText: {
      control: { type: 'text' },
      description: 'Text for the details button.',
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

const sampleTags: TagItemProps[] = [
  { title: 'New', color: 'default' },
  { title: 'Popular', color: 'turquoise' },
]

export const DefaultFeaturedCard: Story = {
  args: {
    size: 1,
    tags: sampleTags,
    link: 'https://example.com',
    title: 'Standard Card',
    desc: 'This is a standard featured card with essential details.',
    showDivider: true,
    price: '$199',
    oldPrice: '$249',
    detailsText: 'Learn More',
  },
}

export const LargeFeaturedCard: Story = {
  args: {
    size: 3,
    tags: sampleTags,
    link: 'https://example.com',
    title: 'Premium Featured Card',
    desc: 'A larger featured card suitable for premium products.',
    showDivider: true,
    price: '$399',
    oldPrice: '$499',
    detailsText: 'View Details',
  },
}

export const FeaturedCardWithoutDescription: Story = {
  args: {
    size: 2,
    tags: sampleTags,
    link: 'https://example.com',
    title: 'Card Without Description',
    showDivider: false,
    price: '$99',
  },
}

export const FeaturedCardWithCustomStyles: Story = {
  args: {
    size: 1,
    tags: sampleTags,
    link: 'https://example.com',
    title: 'Custom Styled Card',
    desc: 'This card showcases how custom styles can be applied.',
    className: 'border border-red-500',
    showDivider: true,
    price: '$299',
    detailsText: 'Explore More',
  },
}

export const FeaturedCardNoPrice: Story = {
  args: {
    size: 2,
    tags: sampleTags,
    link: 'https://example.com',
    title: 'Card Without Price',
    desc: 'This card does not include any pricing information.',
    showDivider: false,
    detailsText: 'Find Out More',
  },
}
