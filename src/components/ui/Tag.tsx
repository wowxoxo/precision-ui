import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils/cn'

const tagVariants = cva(
  'pui-inline-flex pui-items-center pui-rounded-sm pui-pt-[9px] pui-pb-[4px] pui-px-[13px] typo_variant_caption',
  {
    variants: {
      variant: {
        default: 'pui-bg-navy-opacity-4 pui-text-navy',
        turquoise: 'pui-bg-turquoise-opacity-16 pui-text-turquoise',
        white: 'pui-bg-white pui-text-navy',
        lightWhite: 'pui-bg-whitish-opacity-8 pui-text-white',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export interface TagProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof tagVariants> {
  className?: string
}

export interface TagItemProps {
  title: string
  color?: TagProps['variant']
}

const Tag = React.forwardRef<HTMLSpanElement, TagProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <span
        className={cn(tagVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Tag.displayName = 'Tag'

export { Tag }
