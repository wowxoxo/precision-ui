import type { Meta, StoryObj } from '@storybook/react'

import { CommonButtonProps } from './common'
import Hero from './Hero'

// import { getAdapter } from '@/Adapters'

// const ImageWrapper = getAdapter('ImageWrapper')

const meta: Meta<typeof Hero> = {
  title: 'Sections/Hero',
  component: Hero,
  parameters: {
    layout: 'centered',
  },
  // globals: {
  //   backgrounds: { value: '#333', grid: false },
  // },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: { type: 'text' },
      description: 'The title of the hero section.',
    },
    desc: {
      control: { type: 'text' },
      description: 'The description of the hero section.',
    },
    price: {
      control: { type: 'text' },
      description: 'The price of the hero section.',
    },
    oldPrice: {
      control: { type: 'text' },
      description: 'The old price of the hero section.',
    },
    image: {
      control: { type: 'text' },
      description: 'The image URL of the hero section.',
    },
    buttons: {
      control: { type: 'object' },
      description: 'The buttons of the hero section.',
    },
    childrenComponentType: {
      options: ['search-news'],
      control: { type: 'select' },
      description: 'The type of child component to render.',
    },
    breadcrumbs: {
      control: { type: 'object' },
      description: 'The breadcrumbs of the hero section.',
    },
    bottomButtons: {
      control: { type: 'object' },
      description: 'The bottom buttons of the hero section.',
    },
    size: {
      options: ['default', 'small', 'medium'],
      control: { type: 'radio' },
      description: 'The size of the hero section.',
    },
    imageSize: {
      options: ['default', 'small', 'medium'],
      control: { type: 'radio' },
      description: 'The size of the image in the hero section.',
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

const defaultButtons: CommonButtonProps[] = [
  { text: 'Primary Button', theme: 'default' },
  { text: 'Secondary Button', theme: 'opacity' },
]

const defaultBreadcrumbs = [
  { title: 'Home', href: '/' },
  { title: 'Products', href: '/products' },
  { title: 'Hero Section', href: '/hero' },
]

export const Default: Story = {
  args: {
    title: 'Default Hero Section',
    desc: 'This is a default hero section description.',
    price: '$99.99',
    oldPrice: '$129.99',
    image: 'https://via.placeholder.com/664x544',
    buttons: defaultButtons,
    childrenComponentType: 'search-news',
    breadcrumbs: defaultBreadcrumbs,
    bottomButtons: defaultButtons,
    size: 'default',
    imageSize: 'default',
  },
}

export const SmallHero: Story = {
  args: {
    title: 'Small Hero Section',
    desc: 'This is a small hero section description.',
    price: '$49.99',
    oldPrice: '$69.99',
    image: 'https://via.placeholder.com/448x336',
    buttons: defaultButtons,
    childrenComponentType: 'search-news',
    breadcrumbs: defaultBreadcrumbs,
    bottomButtons: defaultButtons,
    size: 'small',
    imageSize: 'small',
  },
}

export const MediumHero: Story = {
  args: {
    title: 'Medium Hero Section',
    desc: 'This is a medium hero section description.',
    price: '$79.99',
    oldPrice: '$99.99',
    image: 'https://via.placeholder.com/552x456',
    buttons: defaultButtons,
    childrenComponentType: 'search-news',
    breadcrumbs: defaultBreadcrumbs,
    bottomButtons: defaultButtons,
    size: 'medium',
    imageSize: 'medium',
  },
}

//

export const DefaultHero: Story = {
  args: {
    title: 'Welcome to Our Service',
    desc: 'Discover amazing features and benefits tailored for you.',
    price: '$99.99',
    oldPrice: '$129.99',
    image: '/slides/crossed-circles.svg', // Replace with actual image path
    buttons: [
      { text: 'Get Started', href: '#', theme: 'default' },
      { text: 'Learn More', href: '#', theme: 'opacity' },
    ],
    breadcrumbs: [
      { title: 'Home', href: '/' },
      { title: 'Services', href: '/services' },
    ],
  },
}

export const HeroWithSearchInput: Story = {
  args: {
    title: 'Search Our Services',
    desc: 'Find exactly what you need with our search feature.',
    buttons: [{ text: 'Search', href: '#', theme: 'default' }],
    childrenComponentType: 'search-news', // Assuming this will render a search input
  },
}

export const HeroWithImageAndButtons: Story = {
  args: {
    title: 'Limited Time Offer!',
    desc: 'Sign up now to take advantage of our exclusive deal.',
    price: '$49.99',
    oldPrice: '$79.99',
    image: '/path/to/offer-image.jpg', // Replace with actual image path
    buttons: [{ text: 'Claim Offer', href: '#', theme: 'default' }],
  },
}
