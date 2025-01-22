import { Alert, AlertDescription, AlertTitle } from './alert'
import type { Meta, StoryObj } from '@storybook/react'

import React from 'react'

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'destructive'],
      description: 'The visual style of the alert component.',
    },
    className: {
      control: { type: 'text' },
      description: 'Additional class names for styling the alert.',
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const DefaultAlert: Story = {
  args: {
    variant: 'default',
    children: (
      <>
        <AlertTitle>Default Alert</AlertTitle>
        <AlertDescription>
          This is a default alert. It provides basic information.
        </AlertDescription>
      </>
    ),
  },
}

export const DestructiveAlert: Story = {
  args: {
    variant: 'destructive',
    children: (
      <>
        <AlertTitle>Destructive Alert</AlertTitle>
        <AlertDescription>
          This is a destructive alert. It indicates something critical.
        </AlertDescription>
      </>
    ),
  },
}

export const CustomStyledAlert: Story = {
  args: {
    variant: 'default',
    className: 'border-blue-500 bg-blue-100 text-blue-900',
    children: (
      <>
        <AlertTitle>Custom Styled Alert</AlertTitle>
        <AlertDescription>
          This alert has a custom style applied for a unique appearance.
        </AlertDescription>
      </>
    ),
  },
}

export const AlertWithLongText: Story = {
  args: {
    variant: 'default',
    children: (
      <>
        <AlertTitle>Important Notice</AlertTitle>
        <AlertDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          commodo risus nec mi vehicula, ac posuere purus hendrerit. Duis sed
          urna at ligula ullamcorper.
        </AlertDescription>
      </>
    ),
  },
}
