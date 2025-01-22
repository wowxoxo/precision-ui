import type { Meta, StoryObj } from '@storybook/react'

import Advantage2 from './Advantage2'
import { TagItemProps } from '../ui/Tag'

const meta: Meta<typeof Advantage2> = {
  title: 'Components/cards/Advantage2',
  component: Advantage2,
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
    tags: {
      control: { type: 'object' },
      description: 'An array of tags to be displayed.',
    },
    link: {
      control: { type: 'text' },
      description: 'A link to navigate when the component is clicked.',
    },
    size: {
      control: { type: 'select' },
      options: [1, 2],
      description: 'Defines the size of the component.',
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

const sampleTags: TagItemProps[] = [
  { title: 'Feature', color: 'default' },
  { title: 'New', color: 'turquoise' },
]

export const DefaultAdvantage: Story = {
  args: {
    title: 'Fast Performance',
    desc: 'Experience blazing fast speeds with our platform.',
    icon: '/icons/performance.svg',
    tags: sampleTags,
    size: 1,
  },
}

export const AdvantageWithLink: Story = {
  args: {
    title: 'Secure System',
    desc: 'Our platform ensures top-notch security.',
    icon: '/icons/security.svg',
    tags: sampleTags,
    link: 'https://example.com',
    size: 2,
  },
}

export const AdvantageWithoutIcon: Story = {
  args: {
    title: 'No Icon Example',
    desc: 'This example does not include an icon.',
    tags: sampleTags,
    size: 1,
  },
}

export const LargeAdvantage: Story = {
  args: {
    title: 'Scalable Infrastructure',
    desc: 'Easily scale your applications as your business grows.',
    icon: '/icons/scalability.svg',
    tags: sampleTags,
    size: 2,
  },
}

export const AdvantageWithCustomTags: Story = {
  args: {
    title: 'Custom Tags',
    desc: 'You can customize tags with different styles.',
    icon: '/icons/custom.svg',
    tags: [
      { title: 'Custom', color: 'white' },
      { title: 'Important', color: 'lightWhite' },
    ],
    size: 1,
  },
}
