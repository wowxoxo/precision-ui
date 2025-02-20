import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils/cn'
import { getAdapter } from '@/Adapters'

const tagLinkVariants = cva(
  'inline-flex items-center rounded-sm pt-[9px] pb-[4px] px-[13px] typo_variant_caption cursor-pointer duration-200 backdrop-blur-[8px]',
  {
    variants: {
      variant: {
        default: 'bg-navy-opacity-4 text-navy hover:bg-navy hover:text-white',
        turquoise:
          'bg-turquoise-opacity-16 text-turquoise hover:bg-turquoise hover:text-white',
        white:
          'bg-white text-navy hover:bg-whitish-opacity-32 hover:text-white',
        lightWhite:
          'bg-whitish-opacity-8 text-white hover:bg-whitish hover:text-navy',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export interface TagLinkProps
  extends React.HTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof tagLinkVariants> {
  className?: string
  href: string
  target?: '_blank'
}

const TagLink: React.FC<TagLinkProps> = ({
  className,
  variant,
  href,
  target,
  ...props
}) => {
  const LinkWrapper = getAdapter('LinkWrapper')

  if (target === '_blank') {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(tagLinkVariants({ variant, className }))}
        {...props}
      />
    )
  }

  return (
    <LinkWrapper href={href} passHref>
      <span
        className={cn(tagLinkVariants({ variant, className }))}
        {...props}
      />
    </LinkWrapper>
  )
}

export { TagLink }
