import type { Meta, StoryObj } from '@storybook/react'

import AppLink from './Link'
import { LinkWrapperProvider } from '../../context/LinkWrapperContext'
import React from 'react'

const meta: Meta<typeof AppLink> = {
  title: 'Components/AppLink',
  component: AppLink,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['default', 'navy', 'white'],
      control: { type: 'radio' },
      description: 'The variant of the link.',
      table: { defaultValue: { summary: 'default' } },
    },
    href: {
      control: { type: 'text' },
      description: 'URL to navigate to when the link is clicked.',
    },
    className: {
      control: { type: 'text' },
      description: 'Additional class names for styling.',
    },
    target: {
      options: ['_self', '_blank'],
      control: { type: 'select' },
      description: 'Defines where to open the linked document.',
    },
    children: {
      control: { type: 'text' },
      description: 'Text or elements to display inside the link.',
    },
  },
  decorators: [
    (Story) => (
      <LinkWrapperProvider
        LinkWrapper={({ href, children, target, ...props }) => (
          <a href={href} target={target} {...props}>
            {children}
          </a>
        )}
      >
        <Story />
      </LinkWrapperProvider>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof meta>

export const DefaultLink: Story = {
  args: {
    variant: 'default',
    href: '#',
    children: 'Default Link',
  },
}

export const NavyLink: Story = {
  args: {
    variant: 'navy',
    href: '#',
    children: 'Navy Link',
  },
}

export const WhiteLink: Story = {
  args: {
    variant: 'white',
    href: '#',
    children: 'White Link',
  },
}

export const ExternalLink: Story = {
  args: {
    variant: 'default',
    href: 'https://www.example.com',
    target: '_blank',
    children: 'External Link',
  },
}
