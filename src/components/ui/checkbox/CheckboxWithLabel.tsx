import { useId } from 'react'

import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils/cn'
import { Checkbox } from './checkbox'
import React from 'react'

const CheckboxWithLabelVariants = cva('items-top flex space-x-2', {
  variants: {
    variant: {
      default: 'text-navy-opacity-60',
      white: 'text-whitish-opacity-60',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

interface CheckboxWithLabelProps
  extends VariantProps<typeof CheckboxWithLabelVariants> {
  id?: string
  children?: React.ReactNode
  desc?: string
}

export function CheckboxWithLabel({
  id,
  children,
  desc,
  variant,
}: CheckboxWithLabelProps) {
  const generatedId = useId()
  const inputId = id || generatedId

  return (
    <div className={cn(CheckboxWithLabelVariants({ variant }))}>
      <Checkbox id={inputId} variant={variant} />
      {children && (
        <div className="grid gap-1 leading-none">
          <label
            htmlFor={inputId}
            className="typo_variant_small-body leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
          >
            {children}
          </label>
          {desc && <p className="text-sm text-muted-foreground">{desc}</p>}
        </div>
      )}
    </div>
  )
}
