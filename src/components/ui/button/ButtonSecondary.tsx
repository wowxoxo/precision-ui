import React from 'react'
import { Button } from './button'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils/cn'

const buttonVariants = cva(
  'pui-rounded-lg hover:pui-rounded-[24px] pui-duration-500 pui-border pui-transition-all util_trans_500',
  {
    variants: {
      variant: {
        default: 'pui-bg-navy pui-text-white',
        white: 'pui-bg-white pui-text-navy',
        outline:
          'pui-bg-transparent pui-text-navy pui-border pui-border-solid pui-border-navy-opacity-32',
        outlineWhite:
          'pui-bg-transparent pui-text-white pui-border pui-border-solid pui-border-whitish-opacity-32',
      },
      size: {
        default: 'pui-px-[18px] pui-py-[15px]',
        sm: 'pui-px-[13.5px] pui-py-[11px] hover:pui-bg-white hover:pui-text-navy',
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
