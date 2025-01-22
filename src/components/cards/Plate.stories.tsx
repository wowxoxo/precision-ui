import type { Meta, StoryObj } from '@storybook/react'

import PlateCard from './Plate'

const meta: Meta<typeof PlateCard> = {
  title: 'Components/cards/Plate',
  component: PlateCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: { type: 'text' },
      description: 'The title of the plate card.',
    },
    desc: {
      control: { type: 'text' },
      description: 'The description of the plate card.',
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'sapphire'],
      description: 'The variant style of the card.',
    },
    link: {
      control: { type: 'text' },
      description: 'A link to navigate when the card is clicked.',
    },
    detailsText: {
      control: { type: 'text' },
      description: 'The text for the details button.',
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const DefaultPlateCard: Story = {
  args: {
    title: 'Standard Plate Card',
    desc: 'This is a standard plate card with a basic description.',
    variant: 'default',
  },
}

export const SapphirePlateCard: Story = {
  args: {
    title: 'Sapphire Plate Card',
    desc: 'This is a sapphire-themed plate card.',
    variant: 'sapphire',
  },
}

export const PlateCardWithLink: Story = {
  args: {
    title: 'Clickable Plate Card',
    desc: 'Click this plate card to learn more about the topic.',
    link: 'https://example.com',
    detailsText: 'Learn More',
    variant: 'default',
  },
}

export const PlateCardWithCustomDetailsText: Story = {
  args: {
    title: 'Custom Details Text',
    desc: 'This plate card has a customized details text.',
    link: 'https://example.com',
    detailsText: 'Discover More',
    variant: 'sapphire',
  },
}

export const PlateCardWithoutLink: Story = {
  args: {
    title: 'Static Plate Card',
    desc: 'This plate card is not clickable and used for display purposes.',
    variant: 'default',
  },
}
