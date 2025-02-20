import type { Meta, StoryObj } from '@storybook/react'

import DocCard from './Doc'

const meta: Meta<typeof DocCard> = {
  title: 'Components/cards/DocCard',
  component: DocCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: { type: 'text' },
      description: 'The title of the document.',
    },
    format: {
      control: { type: 'text' },
      description: 'The format of the document (e.g., PDF, DOCX).',
    },
    link: {
      control: { type: 'text' },
      description: 'The download link for the document.',
    },
    date: {
      control: { type: 'text' },
      description: 'The date associated with the document.',
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const DefaultDocCard: Story = {
  args: {
    title: 'Sample Document',
    format: 'PDF',
    link: '#',
    date: '2023-10-01',
  },
}

export const DocCardWithLongTitle: Story = {
  args: {
    title: 'Comprehensive Guide to Document Management and Best Practices',
    format: 'DOCX',
    link: '#',
    date: '2023-09-15',
  },
}

export const DocCardWithDifferentFormat: Story = {
  args: {
    title: 'Annual Report',
    format: 'XLSX',
    link: '#',
    date: '2023-08-20',
  },
}

export const DocCardWithOldDate: Story = {
  args: {
    title: 'Archived Document',
    format: 'PDF',
    link: '#',
    date: '2020-01-01',
  },
}
