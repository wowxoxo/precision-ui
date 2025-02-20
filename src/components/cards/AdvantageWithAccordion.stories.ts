import type { Meta, StoryObj } from '@storybook/react'

import AdvantageWithAccordion from './AdvantageWithAccordion'

const meta: Meta<typeof AdvantageWithAccordion> = {
  title: 'Components/cards/AdvantageWithAccordion',
  component: AdvantageWithAccordion,
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
    heightMode: {
      options: ['fit', 'full'],
      control: { type: 'radio' },
      description: 'Height mode of the component.',
    },
    className: {
      control: { type: 'text' },
      description: 'Additional CSS classes for custom styling.',
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const DefaultAdvantageWithAccordion: Story = {
  args: {
    title: 'Fast Performance',
    desc: 'Our system provides lightning-fast performance to enhance user experience.',
    icon: '/icons/performance.svg',
    heightMode: 'fit',
  },
}

export const AdvantageWithAccordionWithoutDescription: Story = {
  args: {
    title: 'Secure System',
    icon: '/icons/security.svg',
    heightMode: 'fit',
  },
}

export const AdvantageWithAccordionLongDescription: Story = {
  args: {
    title: 'Scalability',
    desc: 'Our platform can scale efficiently, handling increased loads and users without performance degradation.',
    icon: '/icons/scalability.svg',
    heightMode: 'full',
  },
}

export const CustomStyledAdvantageWithAccordion: Story = {
  args: {
    title: 'Custom Styled Advantage',
    desc: 'You can apply additional styles using custom classes.',
    icon: '/icons/custom.svg',
    heightMode: 'fit',
    className: 'text-red-500',
  },
}
