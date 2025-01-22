import type { Meta, StoryObj } from '@storybook/react'

import Breadcrumb from './Breadcrumb'

const meta: Meta<typeof Breadcrumb> = {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
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
      description: 'The title of the breadcrumb link.',
    },
    href: {
      control: { type: 'text' },
      description: 'The URL the breadcrumb should link to.',
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const DefaultBreadcrumb: Story = {
  args: {
    title: 'Home',
    href: '/',
  },
}

export const LongBreadcrumb: Story = {
  args: {
    title:
      'This is a very long breadcrumb title that should be truncated properly to fit within the design',
    href: '/long-title',
  },
}

export const BreadcrumbWithoutLink: Story = {
  args: {
    title: 'Current Page',
  },
}

export const ShortBreadcrumb: Story = {
  args: {
    title: 'Blog',
    href: '/blog',
  },
}
