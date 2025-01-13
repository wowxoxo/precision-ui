import type { Meta, StoryObj } from '@storybook/react'

import ButtonUnique from './ButtonUnique'
import React from 'react'

const meta: Meta<typeof ButtonUnique> = {
  title: 'Components/ButtonUnique',
  component: ButtonUnique,
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
      options: ['login', 'services'],
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
    onClick: { action: 'clicked' }, // Action logging for clicks
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    variant: 'default',
    icon: 'login',
    children: 'Login',
  },
}

export const WhiteButtonUnique: Story = {
  args: {
    variant: 'white',
    icon: 'services',
    children: 'Services',
  },
}

// export const LoginButtonUnique = () => (
//   <ButtonUnique variant="default" icon="login">
//     Login
//   </ButtonUnique>
// );

// export const ServicesButtonUnique = () => (
//   <ButtonUnique variant="white" icon="services">
//     Services
//   </ButtonUnique>
// );

// TODO: Add disabled button for each variant
export const DisabledButtonUnique = () => (
  <ButtonUnique variant="default" icon="login" disabled>
    Disabled Button
  </ButtonUnique>
)
// DisabledButtonUnique.parameters = {
//   docs: {
//     disable: true,
//   },
// }
