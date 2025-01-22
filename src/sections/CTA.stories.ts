import type { Meta, StoryObj } from '@storybook/react'

import CTA from './CTA'
import { CommonButtonProps } from './common'

const meta: Meta<typeof CTA> = {
  title: 'Sections/CTA',
  component: CTA,
  parameters: {
    layout: 'centered',
  },
  globals: {
    backgrounds: { value: '#333', grid: false },
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: { type: 'text' },
      description: 'The title of the CTA section.',
    },
    desc: {
      control: { type: 'text' },
      description: 'The description of the CTA section.',
    },
    img: {
      control: { type: 'text' },
      description: 'The image URL of the CTA section.',
    },
    buttons: {
      control: { type: 'object' },
      description: 'The buttons of the CTA section.',
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

const defaultButtons: CommonButtonProps[] = [
  { text: 'Primary Button', theme: 'default' },
  { text: 'Secondary Button', theme: 'opacity' },
]

export const Default: Story = {
  args: {
    title: 'Default CTA Section',
    desc: 'This is a default CTA section description.',
    img: '/slides/crossed-circles.svg',
    buttons: defaultButtons,
  },
}

export const CustomCTA: Story = {
  args: {
    title: 'Custom CTA Section',
    desc: 'This is a custom CTA section description with different buttons.',
    img: 'https://via.placeholder.com/654x570',
    buttons: [
      { text: 'Custom Button 1', theme: 'default' },
      { text: 'Custom Button 2', theme: 'opacity' },
    ],
  },
}

export const NoImageCTA: Story = {
  args: {
    title: 'CTA Section Without Image',
    desc: 'This is a CTA section description without an image.',
    img: '',
    buttons: defaultButtons,
  },
}

export const DefaultCTA: Story = {
  args: {
    title: 'Join Our Community',
    desc: 'Become a part of our vibrant community and enjoy exclusive benefits.',
    img: '/path/to/image.jpg', // Replace with actual image path
    buttons: [
      { text: 'Sign Up', href: '#', theme: 'default' },
      { text: 'Learn More', href: '#', theme: 'opacity' },
    ],
  },
}

export const CTAWithLongDescription: Story = {
  args: {
    title: 'Unlock Premium Features',
    desc: `
      Experience the best of our service with premium features that enhance your productivity.
      Join us today and take your experience to the next level!
    `,
    img: '/path/to/premium-image.jpg', // Replace with actual image path
    buttons: [
      { text: 'Get Started', href: '#', theme: 'default' },
      { text: 'Contact Us', href: '#', theme: 'opacity' },
    ],
  },
}

export const CTAWithoutImage: Story = {
  args: {
    title: 'Limited Time Offer!',
    desc: 'Sign up now to take advantage of our exclusive deal before it expires.',
    img: '', // No image provided
    buttons: [{ text: 'Claim Offer', href: '#', theme: 'default' }],
  },
}
