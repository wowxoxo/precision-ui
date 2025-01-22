import type { Meta, StoryObj } from '@storybook/react'

import Advantage from './Advantage'

const meta: Meta<typeof Advantage> = {
  title: 'Components/cards/Advantage',
  component: Advantage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: { type: 'text' },
      description: 'The title of the advantage section.',
    },
    desc: {
      control: { type: 'text' },
      description: 'A description that supports the title.',
    },
    icon: {
      control: { type: 'text' },
      description: 'The URL of the icon to display.',
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const DefaultAdvantage: Story = {
  args: {
    title: 'Fast Performance',
    desc: 'Our system provides lightning-fast performance to enhance user experience.',
    icon: '/icons/performance.svg',
  },
}

export const AdvantageWithoutDescription: Story = {
  args: {
    title: 'Secure System',
    icon: '/icons/security.svg',
  },
}

export const AdvantageWithLongDescription: Story = {
  args: {
    title: 'Scalability',
    desc: 'Our platform can scale efficiently, handling increased loads and users without performance degradation.',
    icon: '/icons/scalability.svg',
  },
}

export const CustomStyledAdvantage: Story = {
  args: {
    title: 'Custom Styled Advantage',
    desc: 'You can apply additional styles using custom classes.',
    icon: '/icons/custom.svg',
  },
}
