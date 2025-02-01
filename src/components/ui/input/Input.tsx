import * as React from 'react'

import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils/cn'

const inputVariants = cva(
  'flex h-11 w-full rounded-lg border border-transparent border-b bg-background px-3 pt-[14px] pb-[11px] typo_variant_small-body ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none  disabled:cursor-not-allowed disabled:opacity-50 duration-200 transition-colors aria-invalid:border-red-500 aria-invalid:bg-red-50',
  {
    variants: {
      variant: {
        default:
          'bg-navy-opacity-4 text-navy focus:border-navy hover:bg-navy-opacity-8 border-b-navy-opacity-32',
        blue: 'bg-whitish-opacity-8 text-white focus:border-white hover:bg-whitish-opacity-16 border-b-whitish-opacity-32',
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
