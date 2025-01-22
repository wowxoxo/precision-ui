import type { Meta, StoryObj } from '@storybook/react'

import Partners from './Partners'

const meta: Meta<typeof Partners> = {
  title: 'Sections/Partners',
  component: Partners,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'text' },
      description: 'The variant of the section.',
    },
    withoutTopPadding: {
      control: { type: 'boolean' },
      description: 'Removes top padding from the section.',
    },
    withoutBottomPadding: {
      control: { type: 'boolean' },
      description: 'Removes bottom padding from the section.',
    },
    withTopMargin: {
      control: { type: 'boolean' },
      description: 'Adds top margin to the section.',
    },
    withBottomMargin: {
      control: { type: 'boolean' },
      description: 'Adds bottom margin to the section.',
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    variant: 'default',
    withoutTopPadding: false,
    withoutBottomPadding: false,
    withTopMargin: true,
    withBottomMargin: true,
  },
}

export const NoPadding: Story = {
  args: {
    variant: 'default',
    withoutTopPadding: true,
    withoutBottomPadding: true,
    withTopMargin: false,
    withBottomMargin: false,
  },
}

export const CustomVariant: Story = {
  args: {
    variant: 'default',
    withoutTopPadding: false,
    withoutBottomPadding: false,
    withTopMargin: true,
    withBottomMargin: true,
  },
}

export const Minimal: Story = {
  args: {
    variant: 'default',
    withoutTopPadding: true,
    withoutBottomPadding: true,
    withTopMargin: false,
    withBottomMargin: false,
  },
}
