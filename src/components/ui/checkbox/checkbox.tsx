import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import * as React from 'react'

import { Check16X16 } from '@iit/precision-ui-icons'

import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils/cn'

const checkboxVariants = cva(
  'peer h-[18px] w-[18px] shrink-0 rounded-sm border ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 duration-200 aria-invalid:border-red-500',
  {
    variants: {
      variant: {
        default:
          'border-navy hover:bg-navy-opacity-8 hover:data-[state=checked]:bg-navy-opacity-80 data-[state=checked]:bg-navy data-[state=checked]:text-whitish',
        white:
          'border-whitish hover:bg-whitish-opacity-16 text-whitish hover:data-[state=checked]:bg-whitish-opacity-80 data-[state=checked]:bg-whitish data-[state=checked]:text-navy',
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
      className={cn('flex items-center justify-center text-current')}
    >
      <Check16X16 className="h-[18px] w-[18px] relative bottom-[1px]" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
