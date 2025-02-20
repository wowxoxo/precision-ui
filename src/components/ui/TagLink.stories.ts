import type { Meta, StoryObj } from '@storybook/react'

import { TagLink } from './TagLink'

const meta: Meta<typeof TagLink> = {
  title: 'Components/ui/TagLink',
  component: TagLink,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['default', 'turquoise', 'white', 'lightWhite'],
      control: { type: 'radio' },
      description: 'The variant of the tag link.',
    },
    className: {
      control: { type: 'text' },
      description: 'Additional CSS classes for custom styling.',
    },
    href: {
      control: { type: 'text' },
      description: 'The URL the tag link points to.',
    },
    target: {
      options: ['_blank', undefined],
      control: { type: 'radio' },
      description: 'Specifies where to open the linked document.',
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const DefaultTagLink: Story = {
  args: {
    variant: 'default',
    href: '#',
    children: 'Default Link',
  },
}

export const TurquoiseTagLink: Story = {
  args: {
    variant: 'turquoise',
    href: '#',
    children: 'Turquoise Link',
  },
}

export const WhiteTagLink: Story = {
  args: {
    variant: 'white',
    href: '#',
    children: 'White Link',
  },
}

export const LightWhiteTagLink: Story = {
  args: {
    variant: 'lightWhite',
    href: '#',
    children: 'Light White Link',
  },
}

export const TagLinkWithCustomClass: Story = {
  args: {
    variant: 'default',
    href: '#',
    className: 'custom-class',
    children: 'Custom Styled Link',
  },
}

export const TagLinkOpenInNewTab: Story = {
  args: {
    variant: 'turquoise',
    href: '#',
    target: '_blank',
    children: 'Open in New Tab',
  },
}
