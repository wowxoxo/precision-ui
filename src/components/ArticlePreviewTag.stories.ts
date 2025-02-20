import type { Meta, StoryObj } from '@storybook/react'

import ArticlePreviewTag from './ArticlePreviewTag'

const meta: Meta<typeof ArticlePreviewTag> = {
  title: 'Components/ArticlePreviewTag',
  component: ArticlePreviewTag,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    icon: {
      options: ['date', 'timeToRead', 'views'],
      control: { type: 'select' },
      description: 'The icon to display.',
    },
    label: {
      control: { type: 'text' },
      description: 'The label to display next to the icon.',
    },
    className: {
      control: { type: 'text' },
      description: 'Additional CSS classes for custom styling.',
    },
    iconClassName: {
      control: { type: 'text' },
      description: 'Additional CSS classes for icon styling.',
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const DefaultArticlePreviewTag: Story = {
  args: {
    icon: 'date',
    label: 'Published on 2023-10-01',
  },
}

export const TimeToReadArticlePreviewTag: Story = {
  args: {
    icon: 'timeToRead',
    label: '5 min read',
  },
}

export const ViewsArticlePreviewTag: Story = {
  args: {
    icon: 'views',
    label: '1.2k views',
  },
}

export const CustomStyledArticlePreviewTag: Story = {
  args: {
    icon: 'date',
    label: 'Custom Styled Date',
    className: 'custom-class',
    iconClassName: 'custom-icon-class',
  },
}
