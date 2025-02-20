import FAQCard, { FAQItem } from './FAQ'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof FAQCard> = {
  title: 'Components/cards/FAQCard',
  component: FAQCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    questions: {
      control: { type: 'object' },
      description:
        'Array of FAQ items, each containing a question, answer, and optional link.',
    },
    type: {
      options: ['single', 'multiple'],
      control: { type: 'radio' },
      description: 'Type of accordion behavior.',
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

const defaultQuestions: FAQItem[] = [
  {
    question: 'What is the return policy?',
    answer: 'You can return items within 30 days of purchase.',
    linkToFull: '#',
  },
  {
    question: 'How do I track my order?',
    answer:
      'Use the tracking number provided in your order confirmation email.',
  },
  {
    question: 'What payment methods are accepted?',
    answer: 'We accept credit cards, PayPal, and Apple Pay.',
  },
]

export const DefaultFAQCard: Story = {
  args: {
    questions: defaultQuestions,
    type: 'single',
  },
}

export const FAQCardMultiple: Story = {
  args: {
    questions: defaultQuestions,
    type: 'multiple',
  },
}

export const FAQCardWithoutLinks: Story = {
  args: {
    questions: [
      {
        question: 'What is your privacy policy?',
        answer:
          'Your data is secure with us. Read our full privacy policy for details.',
      },
      {
        question: 'How can I contact support?',
        answer: 'You can reach us via email or phone during business hours.',
      },
    ],
    type: 'single',
  },
}

export const FAQCardWithLongAnswers: Story = {
  args: {
    questions: [
      {
        question: 'What are the benefits of your service?',
        answer:
          'Our service offers numerous benefits including convenience, cost savings, and excellent customer support.',
        linkToFull: '#',
      },
      {
        question: 'How do I cancel my subscription?',
        answer:
          'You can cancel your subscription at any time by logging into your account and navigating to the subscription settings.',
      },
    ],
    type: 'multiple',
  },
}
