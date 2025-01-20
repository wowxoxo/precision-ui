import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'

import { Button } from './button' // Adjust the import path as needed

describe('Button Component', () => {
  //   it('renders default button correctly', () => {
  //     render(<Button>Click me</Button>)
  //     const button = screen.getByText('Click me')
  //     expect(button).toBeInTheDocument()
  //     expect(button).toHaveClass('bg-white text-navy hover:bg-navy-opacity-4')
  //     expect(button).toHaveClass('h-10 px-4 py-2')
  //   })

  it('renders destructive button correctly', () => {
    render(<Button variant="destructive">Delete</Button>)
    const button = screen.getByText('Delete')
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass(
      'bg-destructive text-destructive-foreground hover:bg-destructive/90'
    )
  })

  it('renders outline button correctly', () => {
    render(<Button variant="outline">Outline</Button>)
    const button = screen.getByText('Outline')
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass(
      'border border-input bg-background hover:bg-accent hover:text-accent-foreground'
    )
  })

  it('renders ghost button correctly', () => {
    render(<Button variant="ghost">Ghost</Button>)
    const button = screen.getByText('Ghost')
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('hover:bg-accent hover:text-accent-foreground')
  })

  it('renders link button correctly', () => {
    render(<Button variant="link">Link</Button>)
    const button = screen.getByText('Link')
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass(
      'text-primary underline-offset-4 hover:underline'
    )
  })

  it('renders small button correctly', () => {
    render(<Button size="sm">Small</Button>)
    const button = screen.getByText('Small')
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('h-9 rounded-md px-3')
  })

  it('renders large button correctly', () => {
    render(<Button size="lg">Large</Button>)
    const button = screen.getByText('Large')
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('h-11 rounded-md px-8')
  })

  it('renders icon button correctly', () => {
    render(<Button size="icon">Icon</Button>)
    const button = screen.getByText('Icon')
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('h-10 w-10')
  })

  //   it('renders asChild button correctly', () => {
  //     render(<Button asChild>Custom</Button>)
  //     const button = screen.getByText('Custom')
  //     expect(button).toBeInTheDocument()
  //     expect(button).toHaveClass(
  //       'inline-flex items-center justify-center whitespace-nowrap rounded-full typo_variant_button ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed border-none'
  //     )
  //   })

  //   it('renders asChild button correctly', () => {
  //     render(<Button asChild>Custom</Button>)
  //     const button = screen.getByText((content, element) => {
  //       return element?.textContent === 'Custom'
  //     })
  //     expect(button).toBeInTheDocument()
  //     expect(button).toHaveClass('inline-flex items-center justify-center whitespace-nowrap rounded-full typo_variant_button ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed border-none')
  //   })
})
