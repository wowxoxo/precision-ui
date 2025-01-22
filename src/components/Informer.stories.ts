import type { Meta, StoryObj } from '@storybook/react'

import Informer from './Informer'

const meta: Meta<typeof Informer> = {
  title: 'Components/Informer',
  component: Informer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    content: {
      control: { type: 'text' },
      description:
        'The informational content displayed in the tooltip/popover.',
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const DefaultInformer: Story = {
  args: {
    content: 'This is an informational tooltip.',
  },
}

export const LongContentInformer: Story = {
  args: {
    content:
      'This is a longer informational message to demonstrate how the content is displayed inside the tooltip and popover components.',
  },
}

export const ShortContentInformer: Story = {
  args: {
    content: 'Short info!',
  },
}
