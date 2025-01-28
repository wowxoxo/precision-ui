import type { Meta, StoryObj } from '@storybook/react'

import CardsGridSection from './CardsGridSection'

const meta: Meta<typeof CardsGridSection> = {
  title: 'Sections/CardsGridSection',
  component: CardsGridSection,
  parameters: {
    layout: 'centered',
  },
  globals: {
    backgrounds: { value: '#333', grid: false },
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: { type: 'text' },
      description: 'The title of the cards grid section.',
    },
    desc: {
      control: { type: 'text' },
      description: 'The description of the cards grid section.',
    },
    items: {
      control: { type: 'object' },
      description: 'The items to be displayed in the cards grid section.',
    },
    component: {
      options: [
        'Advantage',
        'Advantage2',
        'Rate',
        'Product',
        'FeaturedCard',
        'Plate',
      ],
      control: { type: 'select' },
      description: 'The type of card component to render.',
    },
    withoutTopPadding: {
      control: { type: 'boolean' },
      description: 'Whether to remove the top padding.',
    },
    withTopMargin: {
      control: { type: 'boolean' },
      description: 'Whether to add a top margin.',
    },
    withBottomMargin: {
      control: { type: 'boolean' },
      description: 'Whether to add a bottom margin.',
    },
    withoutBottomPadding: {
      control: { type: 'boolean' },
      description: 'Whether to remove the bottom padding.',
    },
    variant: {
      options: ['default', 'secondary'],
      control: { type: 'radio' },
      description: 'The variant of the section.',
    },
    corners: {
      options: ['default', 'rounded'],
      control: { type: 'radio' },
      description: 'The corner style of the section.',
    },
    columns: {
      control: { type: 'number' },
      description: 'The number of columns in the grid.',
    },
    showControlsOnDesktop: {
      control: { type: 'boolean' },
      description: 'Whether to show controls on desktop.',
    },
    withoutCarousel: {
      control: { type: 'boolean' },
      description: 'Whether to disable the carousel.',
    },
    footnote: {
      control: { type: 'text' },
      description: 'The footnote of the cards grid section.',
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

const defaultItems = [
  { title: 'Item 1', description: 'Description for item 1' },
  { title: 'Item 2', description: 'Description for item 2' },
  { title: 'Item 3', description: 'Description for item 3' },
]

export const Default: Story = {
  args: {
    title: 'Default Cards Grid Section',
    desc: 'This is a default cards grid section description.',
    items: defaultItems,
    component: 'Advantage',
    withoutTopPadding: false,
    withTopMargin: false,
    withBottomMargin: false,
    withoutBottomPadding: false,
    variant: 'default',
    corners: 'default',
    columns: 3,
    showControlsOnDesktop: false,
    withoutCarousel: false,
    footnote: 'This is a footnote.',
  },
}

export const Advantage2Section: Story = {
  args: {
    title: 'Advantage2 Cards Grid Section',
    desc: 'This is an Advantage2 cards grid section description.',
    items: defaultItems,
    component: 'Advantage2',
    withoutTopPadding: false,
    withTopMargin: false,
    withBottomMargin: false,
    withoutBottomPadding: false,
    variant: 'default',
    corners: 'default',
    columns: 3,
    showControlsOnDesktop: false,
    withoutCarousel: false,
    footnote: 'This is a footnote.',
  },
}

export const RateSection: Story = {
  args: {
    title: 'Rate Cards Grid Section',
    desc: 'This is a Rate cards grid section description.',
    items: defaultItems,
    component: 'Rate',
    withoutTopPadding: false,
    withTopMargin: false,
    withBottomMargin: false,
    withoutBottomPadding: false,
    variant: 'default',
    corners: 'default',
    columns: 3,
    showControlsOnDesktop: false,
    withoutCarousel: false,
    footnote: 'This is a footnote.',
  },
}

export const DefaultCardsGridSection: Story = {
  args: {
    title: 'Our Advantages',
    desc: 'Discover what sets us apart from the competition.',
    items: [
      { title: 'Advantage 1', description: 'Description for advantage 1' },
      { title: 'Advantage 2', description: 'Description for advantage 2' },
    ],
    component: 'Advantage',
  },
}

export const CardsGridWithRateComponent: Story = {
  args: {
    title: 'Customer Ratings',
    desc: 'See what our customers have to say about us.',
    items: [
      { rating: '5', comment: 'Excellent service!', author: 'John Doe' },
      { rating: '4', comment: 'Very satisfied.', author: 'Jane Smith' },
    ],
    component: 'Rate',
  },
}

export const CardsGridWithProductComponentAndMarginsAndPaddingOptions: Story = {
  args: {
    title: 'Featured Products',
    desc: 'Check out our latest products available for purchase.',
    items: [
      { name: 'Product A', price: '$99.99' },
      { name: 'Product B', price: '$79.99' },
    ],
    component: 'Product',
    withoutTopPadding: true,
    withBottomMargin: true,
    columns: 2,
    showControlsOnDesktop: true,
    footnote: '*All prices are subject to change.',
  },
}

export const CardsGridWithoutCarousel: Story = {
  args: {
    title: 'Our Services',
    desc: 'Explore our range of services designed to meet your needs.',
    items: [
      {
        serviceName: 'Service A',
        details: 'Details about Service A',
        tags: [{ title: 'New', color: 'default' }],
      },
      {
        serviceName: 'Service B',
        details: 'Details about Service B',
        tags: [{ title: 'Popular', color: 'turquoise' }],
      },
      {
        serviceName: 'Service B',
        details: 'Details about Service B',
        tags: [{ title: 'Popular', color: 'turquoise' }],
      },
      {
        serviceName: 'Service B',
        details: 'Details about Service B',
        tags: [{ title: 'Popular', color: 'turquoise' }],
      },
      {
        serviceName: 'Service B',
        details: 'Details about Service B',
        tags: [{ title: 'Popular', color: 'turquoise' }],
      },
      {
        serviceName: 'Service B',
        details: 'Details about Service B',
        tags: [{ title: 'Popular', color: 'turquoise' }],
      },
    ],
    component: 'FeaturedCard',
    withoutCarousel: false,
  },
}
