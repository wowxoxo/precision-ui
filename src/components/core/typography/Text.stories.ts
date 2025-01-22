import type { Meta, StoryObj } from '@storybook/react'

import Text from './Text'

const meta: Meta<typeof Text> = {
  title: 'Components/core/typo/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        'factoid',
        'subtitle-1',
        'subtitle-2',
        'overline',
        'lead-text',
        'body',
        'small-body',
        'caption',
        'button',
        'link',
      ],
      description: 'Typography variant to be applied.',
    },
    as: {
      control: { type: 'text' },
      description:
        'Allows rendering as a different HTML element (e.g., div, span).',
    },
    className: {
      control: { type: 'text' },
      description: 'Additional class names for styling the text.',
    },
    children: {
      control: { type: 'text' },
      description: 'The text content to display.',
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Factoid: Story = {
  args: {
    variant: 'factoid',
    children: 'Factoid: Interesting statistical data.',
  },
}

export const Subtitle1: Story = {
  args: {
    variant: 'subtitle-1',
    children: 'Subtitle 1: A descriptive subheading.',
  },
}

export const Subtitle2: Story = {
  args: {
    variant: 'subtitle-2',
    children: 'Subtitle 2: A smaller descriptive subheading.',
  },
}

export const Overline: Story = {
  args: {
    variant: 'overline',
    children: 'OVERLINE TEXT',
  },
}

export const LeadText: Story = {
  args: {
    variant: 'lead-text',
    children: 'Lead text: Highlighting key points.',
  },
}

export const Body: Story = {
  args: {
    variant: 'body',
    children: 'Body text: This is a standard paragraph.',
  },
}

export const SmallBody: Story = {
  args: {
    variant: 'small-body',
    children: 'Small body text: Used for additional details.',
  },
}

export const Caption: Story = {
  args: {
    variant: 'caption',
    children: 'Caption: Used for image descriptions.',
  },
}

export const ButtonText: Story = {
  args: {
    variant: 'button',
    children: 'Button text',
  },
}

export const LinkText: Story = {
  args: {
    variant: 'link',
    children: 'Link: Click here for more information.',
    className: 'text-blue-500 underline',
  },
}
