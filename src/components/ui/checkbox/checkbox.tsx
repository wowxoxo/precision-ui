import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import * as React from 'react'

import { Check16X16 } from '@iit/precision-ui-icons'

import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils/cn'

const checkboxVariants = cva(
  'pui-peer pui-h-[18px] pui-w-[18px] pui-shrink-0 pui-rounded-sm pui-border pui-ring-offset-background focus-visible:pui-outline-none focus-visible:pui-ring-2 focus-visible:pui-ring-ring focus-visible:pui-ring-offset-2 pui-disabled:cursor-not-allowed pui-disabled:opacity-50 pui-duration-200',
  {
    variants: {
      variant: {
        default:
          'pui-border-navy hover:pui-bg-navy-opacity-8 hover:data-[state=checked]:pui-bg-navy-opacity-80 data-[state=checked]:pui-bg-navy data-[state=checked]:pui-text-whitish',
        white:
          'pui-border-whitish hover:pui-bg-whitish-opacity-16 pui-text-whitish hover:data-[state=checked]:pui-bg-whitish-opacity-80 data-[state=checked]:pui-bg-whitish data-[state=checked]:pui-text-navy',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
    VariantProps<typeof checkboxVariants> {
  className?: string
}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, variant, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(checkboxVariants({ variant }), className)}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn(
        'pui-flex pui-items-center pui-justify-center pui-text-current'
      )}
    >
      <Check16X16 className="pui-h-[18px] pui-w-[18px] pui-relative pui-bottom-[1px]" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
