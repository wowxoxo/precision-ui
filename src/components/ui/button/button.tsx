import React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils/cn'

const buttonVariants = cva(
  'pui-inline-flex pui-items-center pui-justify-center pui-whitespace-nowrap pui-rounded-full typo_variant_button pui-ring-offset-background pui-transition-colors focus-visible:pui-outline-none focus-visible:pui-ring-2 focus-visible:pui-ring-ring focus-visible:pui-ring-offset-2 pui-disabled:pointer-events-none pui-disabled:opacity-50 pui-disabled:cursor-not-allowed pui-border-none',
  {
    variants: {
      variant: {
        default: 'pui-bg-white pui-text-navy hover:pui-bg-navy-opacity-4',
        destructive:
          'pui-bg-destructive pui-text-destructive-foreground hover:pui-bg-destructive/90',
        outline:
          'pui-border pui-border-input pui-bg-background hover:pui-bg-accent hover:pui-text-accent-foreground',
        ghost: 'hover:pui-bg-accent hover:pui-text-accent-foreground',
        link: 'pui-text-primary pui-underline-offset-4 hover:pui-underline',
      },
      size: {
        default: 'pui-h-10 pui-px-4 pui-py-2',
        sm: 'pui-h-9 pui-rounded-md pui-px-3',
        lg: 'pui-h-11 pui-rounded-md pui-px-8',
        icon: 'pui-h-10 pui-w-10',
      },
    },
    defaultVariants: {
      // variant: "default",
      // size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
