import React from 'react'
import { Button } from './button'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils/cn'

const buttonVariants = cva(
  'transition-all rounded-lg hover:rounded-[24px] border',
  {
    variants: {
      variant: {
        default: 'bg-navy text-white',
        white: 'bg-white text-navy',
        outline:
          'bg-transparent text-navy border border-solid border-navy-opacity-32',
        outlineWhite:
          'bg-transparent text-white border border-solid border-whitish-opacity-32',
      },
      size: {
        default: 'px-[18px] py-[15px]',
        sm: 'px-[13.5px] py-[11px] hover:text-navy',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonSecondaryProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  className?: string
  children?: React.ReactNode
  asChild?: boolean
}

const ButtonSecondary = React.forwardRef<
  HTMLButtonElement,
  ButtonSecondaryProps
>(({ className, children, variant, size, asChild = false, ...props }, ref) => {
  return (
    <Button
      className={cn(buttonVariants({ variant, size, className }))}
      asChild={asChild}
      ref={ref}
      {...props}
    >
      {children}
    </Button>
  )
})

ButtonSecondary.displayName = 'ButtonSecondary'

export default ButtonSecondary
