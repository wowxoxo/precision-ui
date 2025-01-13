// Filename: ButtonText.stories.tsx

import type { Meta, StoryObj } from '@storybook/react'

import ButtonText from './ButtonText'

const meta: Meta<typeof ButtonText> = {
  title: 'Components/ButtonText',
  component: ButtonText,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['default', 'white'],
      control: { type: 'radio' },
      description: 'The variant of the button.',
      table: { defaultValue: { summary: 'default' } },
    },
    icon: {
      options: ['arrowRight', 'plus', 'minus', 'download'],
      control: { type: 'select' },
      description: 'Icon to display in the button.',
    },
    className: {
      control: { type: 'text' },
      description: 'Additional class names for styling.',
    },
    children: {
      control: { type: 'text' },
      description: 'Text or elements to display inside the button.',
    },
    asChild: {
      control: { type: 'boolean' },
      description: 'Render as a child component (useful for custom elements)',
    },
    onClick: { action: 'clicked' },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    variant: 'default',
    icon: 'arrowRight',
    children: 'Default Button with Arrow',
  },
}

export const WhiteButtonText: Story = {
  args: {
    variant: 'white',
    icon: 'plus',
    children: 'White Button with Plus',
  },
}

export const DownloadButtonText: Story = {
  args: {
    variant: 'default',
    icon: 'download',
    children: 'Download Button',
  },
}

// export const MinusButtonText = () => (
//   <ButtonText variant="default" icon="minus">
//     Minus Button
//   </ButtonText>
// );
