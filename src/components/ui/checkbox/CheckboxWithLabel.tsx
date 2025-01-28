import { useId } from 'react'

import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils/cn'
import { Checkbox } from './checkbox'
import React from 'react'

const CheckboxWithLabelVariants = cva('pui-items-top pui-flex pui-space-x-2', {
  variants: {
    variant: {
      default: 'pui-text-navy-opacity-60',
      white: 'pui-text-whitish-opacity-60',
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
        <div className="pui-grid pui-gap-1 pui-leading-none">
          <label
            htmlFor={inputId}
            className="typo_variant_small-body pui-leading-none pui-peer-disabled:cursor-not-allowed pui-peer-disabled:opacity-70 pui-cursor-pointer"
          >
            {children}
          </label>
          {desc && (
            <p className="pui-text-sm pui-text-muted-foreground">{desc}</p>
          )}
        </div>
      )}
    </div>
  )
}
