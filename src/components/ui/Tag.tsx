import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils/cn'

const tagVariants = cva(
  'inline-flex items-center rounded-sm pt-[9px] pb-[4px] px-[13px] typo_variant_caption',
  {
    variants: {
      variant: {
        default: 'bg-navy-opacity-4 text-navy',
        turquoise: 'bg-turquoise-opacity-16 text-turquoise',
        white: 'bg-white text-navy',
        lightWhite: 'bg-whitish-opacity-8 text-white',
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
