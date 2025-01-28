import * as React from 'react'

import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils/cn'

const inputVariants = cva(
  'pui-flex pui-h-11 pui-w-full pui-rounded-lg pui-border pui-border-transparent pui-border-b pui-bg-background pui-px-3 pui-pt-[14px] pui-pb-[11px] typo_variant_small-body pui-ring-offset-background pui-file:border-0 pui-file:bg-transparent pui-file:text-sm pui-file:font-medium pui-placeholder:text-muted-foreground focus-visible:pui-outline-none pui-disabled:cursor-not-allowed pui-disabled:opacity-50 pui-duration-200 pui-transition-colors',
  {
    variants: {
      variant: {
        default:
          'pui-bg-navy-opacity-4 pui-text-navy focus:pui-border-navy hover:pui-bg-navy-opacity-8 pui-border-b-navy-opacity-32',
        blue: 'pui-bg-whitish-opacity-8 pui-text-white focus:pui-border-white hover:pui-bg-whitish-opacity-16 pui-border-b-whitish-opacity-32',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  className?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, type, ...props }, ref) => {
    // const containerStyles =
    //   variant === "default"
    //     ? "input-container_variant_default"
    //     : "input-container_variant_blue";
    return (
      // <span className={`input-container ${containerStyles}`}>
      <span>
        <input
          type={type}
          className={cn(inputVariants({ variant, className }))}
          ref={ref}
          {...props}
        />
      </span>
    )
  }
)
Input.displayName = 'Input'

export { Input }
