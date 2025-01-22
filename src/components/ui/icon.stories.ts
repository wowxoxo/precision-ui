import { IconName, iconDefiner } from './icon'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta = {
  title: 'Components/ui/IconDefiner',
  component: iconDefiner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: { type: 'select' },
      options: [
        'chevronLeft',
        'chevronRight',
        'plus',
        'minus',
        'like',
        'dislike',
      ] as IconName[],
      description: 'The icon to be displayed.',
    },
    width: {
      control: { type: 'text' },
      description: 'Width of the icon (e.g., "24px" or 24).',
    },
    height: {
      control: { type: 'text' },
      description: 'Height of the icon (e.g., "24px" or 24).',
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const ChevronLeftIcon: Story = {
  args: {
    icon: 'chevronLeft',
    width: '32px',
    height: '32px',
  },
}

export const ChevronRightIcon: Story = {
  args: {
    icon: 'chevronRight',
    width: '32px',
    height: '32px',
  },
}

export const PlusIcon: Story = {
  args: {
    icon: 'plus',
    width: '40px',
    height: '40px',
  },
}

export const MinusIcon: Story = {
  args: {
    icon: 'minus',
    width: '40px',
    height: '40px',
  },
}

export const LikeIcon: Story = {
  args: {
    icon: 'like',
    width: '48px',
    height: '48px',
  },
}

export const DislikeIcon: Story = {
  args: {
    icon: 'dislike',
    width: '48px',
    height: '48px',
  },
}

export const NoIcon: Story = {
  args: {
    icon: undefined,
    width: '32px',
    height: '32px',
  },
}
