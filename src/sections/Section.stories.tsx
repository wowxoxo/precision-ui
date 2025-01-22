import type { Meta, StoryObj } from '@storybook/react'

import Section from './Section'

const meta: Meta<typeof Section> = {
  title: 'Sections/Section',
  component: Section,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: { type: 'text' },
      description: 'The title of the section.',
    },
    desc: {
      control: { type: 'text' },
      description: 'The description of the section.',
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'muted'],
      description: 'Styling variant of the section.',
    },
    corners: {
      control: { type: 'select' },
      options: ['default', 'onlyTop', 'onlyBottom'],
      description: 'Corner styling options for the section.',
    },
    moreLink: {
      control: { type: 'text' },
      description: 'The URL for the "more" link button.',
    },
    moreText: {
      control: { type: 'text' },
      description: 'Text for the "more" link button.',
    },
    withTopMargin: {
      control: { type: 'boolean' },
      description: 'Adds top margin to the section.',
    },
    withBottomMargin: {
      control: { type: 'boolean' },
      description: 'Adds bottom margin to the section.',
    },
    withoutTopPadding: {
      control: { type: 'boolean' },
      description: 'Removes top padding from the section.',
    },
    withoutBottomPadding: {
      control: { type: 'boolean' },
      description: 'Removes bottom padding from the section.',
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const DefaultSection: Story = {
  args: {
    title: 'Default Section',
    desc: 'This is a default section with all default settings.',
    variant: 'default',
    corners: 'default',
    withTopMargin: false,
    withBottomMargin: false,
    withoutTopPadding: false,
    withoutBottomPadding: false,
  },
}

export const MutedSection: Story = {
  args: {
    title: 'Muted Section',
    desc: 'This section uses the muted variant for a subdued appearance.',
    variant: 'muted',
    corners: 'onlyTop',
    withTopMargin: true,
    withBottomMargin: true,
  },
}

export const SectionWithoutPadding: Story = {
  args: {
    title: 'No Padding Section',
    desc: 'This section has no top or bottom padding for a compact layout.',
    variant: 'default',
    withoutTopPadding: true,
    withoutBottomPadding: true,
  },
}

export const SectionWithMoreLink: Story = {
  args: {
    title: 'Section with More Link',
    desc: 'This section includes a call-to-action button.',
    variant: 'default',
    moreLink: 'https://example.com',
    moreText: 'Discover More',
  },
}
