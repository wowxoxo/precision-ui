import type { Meta, StoryObj } from '@storybook/react'

import SearchInput from './SearchInput'

const meta: Meta<typeof SearchInput> = {
  title: 'Components/ui/SearchInput',
  component: SearchInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    id: {
      control: { type: 'text' },
      description: 'The ID of the input element.',
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder text for the search input.',
    },
    value: {
      control: { type: 'text' },
      description: 'The current value of the input field.',
    },
    className: {
      control: { type: 'text' },
      description: 'Additional class names for styling the input field.',
    },
    onChange: {
      action: 'changed',
      description: 'Function triggered when the input value changes.',
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const DefaultSearchInput: Story = {
  args: {
    placeholder: 'Search...',
    value: '',
  },
}

export const SearchWithPreFilledValue: Story = {
  args: {
    placeholder: 'Search...',
    value: 'Pre-filled search text',
  },
}

export const SearchWithCustomStyles: Story = {
  args: {
    placeholder: 'Custom Search',
    value: '',
    className: 'border border-red-500',
  },
}

export const SearchWithHandlers: Story = {
  args: {
    placeholder: 'Search with handlers',
    value: '',
    onChange: (event) => alert(`Search input changed: ${event.target.value}`),
  },
}

export const EmptySearchWithClearButton: Story = {
  args: {
    placeholder: 'Type something...',
    value: '',
  },
}
