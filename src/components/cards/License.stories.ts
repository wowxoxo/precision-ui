import type { Meta, StoryObj } from '@storybook/react'

import LicenseCard from './License'

const meta: Meta<typeof LicenseCard> = {
  title: 'Components/cards/LicenseCard',
  component: LicenseCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: { type: 'text' },
      description: 'The title of the license card.',
    },
    date: {
      control: { type: 'text' },
      description: 'The date associated with the license.',
    },
    img: {
      control: { type: 'text' },
      description: 'The URL of the image to display.',
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const DefaultLicenseCard: Story = {
  args: {
    title: 'Sample License',
    date: '2023-10-01',
    img: '/path/to/license-image.png',
  },
}

export const LicenseCardWithoutDate: Story = {
  args: {
    title: 'No Date License',
    img: '/path/to/license-image.png',
  },
}

export const LicenseCardWithLongTitle: Story = {
  args: {
    title:
      'This is a very long title for a license card that should be truncated in the dialog.',
    date: '2023-09-15',
    img: '/path/to/license-image.png',
  },
}

export const LicenseCardWithCustomImage: Story = {
  args: {
    title: 'Custom Image License',
    date: '2023-08-20',
    img: '/path/to/custom-license-image.png',
  },
}
