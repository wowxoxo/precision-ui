import type { Meta, StoryObj } from '@storybook/react'

import Breadcrumbs from './Breadcrumbs'

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    layout: 'centered',
  },
  globals: {
    backgrounds: { value: '#333', grid: false },
  },
  tags: ['autodocs'],
  argTypes: {
    list: {
      control: { type: 'object' },
      description: 'Array of breadcrumb items with title and href properties.',
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

const breadcrumbList = [
  { title: 'Home', href: '/' },
  { title: 'Products', href: '/products' },
  { title: 'Electronics', href: '/products/electronics' },
  { title: 'Laptops', href: '/products/electronics/laptops' },
]

export const DefaultBreadcrumbs: Story = {
  args: {
    list: breadcrumbList,
  },
}

export const BreadcrumbsWithoutLinks: Story = {
  args: {
    list: [{ title: 'Dashboard' }, { title: 'Settings' }, { title: 'Profile' }],
  },
}

export const SingleBreadcrumb: Story = {
  args: {
    list: [{ title: 'Home', href: '/' }],
  },
}

export const LongBreadcrumbPath: Story = {
  args: {
    list: [
      { title: 'Category', href: '/category' },
      { title: 'Subcategory', href: '/category/subcategory' },
      {
        title: 'A very long breadcrumb title that needs truncation',
        href: '/category/subcategory/long-title',
      },
    ],
  },
}
