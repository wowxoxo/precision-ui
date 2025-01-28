import * as React from 'react'
import * as LabelPrimitive from '@radix-ui/react-label'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils/cn'

const labelVariants = cva(
  'typo_variant_h6 pui-leading-none pui-peer-disabled:cursor-not-allowed pui-peer-disabled:opacity-70 pui-duration-200',
  {
    variants: {
      variant: {
        default: 'pui-text-navy',
        blue: 'pui-text-whitish',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants>
>(({ className, variant, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants({ variant }), className)}
    {...props}
  />
))
Label.displayName = LabelPrimitive.Root.displayName

export { Label }
