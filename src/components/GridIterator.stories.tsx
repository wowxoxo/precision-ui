import type { Meta, StoryObj } from '@storybook/react'

import GridIterator from './GridIterator'
import React from 'react'
import Text from './core/typography/Text'

const meta: Meta<typeof GridIterator> = {
  title: 'Utils/GridIterator',
  component: GridIterator,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    items: {
      control: { type: 'object' },
      description: 'Array of items to render within the grid or carousel.',
    },
    columns: {
      control: { type: 'number' },
      description: 'Number of columns in the grid (default is 4).',
    },
    hideControlsOnDesktop: {
      control: { type: 'boolean' },
      description: 'Whether to hide carousel controls on desktop view.',
    },
    withoutCarousel: {
      control: { type: 'boolean' },
      description: 'If true, the grid will render without the carousel.',
    },
    footnote: {
      control: { type: 'text' },
      description: 'Optional footnote text displayed below the grid.',
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

const sampleItems = [
  { id: 1, content: 'Item 1' },
  { id: 2, content: 'Item 2' },
  { id: 3, content: 'Item 3' },
  { id: 4, content: 'Item 4' },
]

export const DefaultGrid: Story = {
  args: {
    items: sampleItems,
    columns: 4,
    withoutCarousel: true,
    // @ts-expect-error Argument of type '(item: { id: number; content: string; }) => JSX.Element' is not assignable to parameter of type 'RenderItem'.
    renderItem: (item) => <Text key={item.id}>{item.content}</Text>,
  },
}

export const GridWithThreeColumns: Story = {
  args: {
    items: sampleItems,
    columns: 3,
    withoutCarousel: true,
    // @ts-expect-error Argument of type '(item: { id: number; content: string; }) => JSX.Element' is not assignable to parameter of type 'RenderItem'.
    renderItem: (item) => <Text key={item.id}>{item.content}</Text>,
  },
}

export const CarouselView: Story = {
  args: {
    items: sampleItems,
    columns: 3,
    withoutCarousel: false,
    hideControlsOnDesktop: true,
    // @ts-expect-error Argument of type '(item: { id: number; content: string; }) => JSX.Element' is not assignable to parameter of type 'RenderItem'.
    renderItem: (item) => <Text key={item.id}>{item.content}</Text>,
  },
}

export const GridWithFootnote: Story = {
  args: {
    items: sampleItems,
    columns: 4,
    withoutCarousel: true,
    footnote: 'This is an example footnote text.',
    // @ts-expect-error Argument of type '(item: { id: number; content: string; }) => JSX.Element' is not assignable to parameter of type 'RenderItem'.
    renderItem: (item) => <Text key={item.id}>{item.content}</Text>,
  },
}
