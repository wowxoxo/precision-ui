import type { Meta, StoryObj } from '@storybook/react'

import SearchInputWithButton from './SearchInputWithButton'

const meta: Meta<typeof SearchInputWithButton> = {
  title: 'Components/ui/SearchInputWithButton',
  component: SearchInputWithButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: { type: 'text' },
      description: 'The placeholder text for the search input.',
    },
    value: {
      control: { type: 'text' },
      description: 'The value of the input field.',
    },
    withoutBottomBorder: {
      control: { type: 'boolean' },
      description: 'Removes the bottom border of the input field.',
    },
    className: {
      control: { type: 'text' },
      description: 'Additional class names for styling the input field.',
    },
    containerClassName: {
      control: { type: 'text' },
      description: 'Additional class names for styling the container.',
    },
    onClickSubmitButton: {
      action: 'clicked',
      description: 'Callback function triggered on submit button click.',
    },
    onClickClearButton: {
      action: 'clicked',
      description: 'Callback function triggered on clear button click.',
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

export const SearchWithValue: Story = {
  args: {
    placeholder: 'Search...',
    value: 'Pre-filled value',
  },
}

export const SearchWithoutBottomBorder: Story = {
  args: {
    placeholder: 'Search...',
    value: '',
    withoutBottomBorder: true,
  },
}

export const SearchWithCustomStyles: Story = {
  args: {
    placeholder: 'Custom Styled Search',
    value: '',
    className: 'bg-gray-200 text-black',
    containerClassName: 'border border-red-500',
  },
}

export const SearchWithHandlers: Story = {
  args: {
    placeholder: 'Search with handlers',
    value: '',
    onClickSubmitButton: () => alert('Search button clicked'),
    onClickClearButton: () => alert('Clear button clicked'),
  },
}
