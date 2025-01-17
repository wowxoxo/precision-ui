import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils/cn'

const linkVariants = cva('duration-200 transition-colors', {
  variants: {
    variant: {
      default: 'text-turquoise link',
      navy: 'text-navy link_navy',
      white: 'text-white link_white',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

interface AppLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {
  href: string
  children: React.ReactNode
  LinkWrapper: React.FC<{
    href: string
    children: React.ReactNode
    className?: string
    target?: string
    rel?: string
  }>
}

export const AppLink: React.FC<AppLinkProps> = ({
  href,
  children,
  className,
  variant,
  target,
  rel,
  LinkWrapper,
  ...props
}) => {
  if (!LinkWrapper) {
    throw new Error('AppLink requires a LinkWrapper to be provided.')
  }

  return (
    <LinkWrapper
      href={href}
      target={target}
      rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
      className={cn(linkVariants({ variant, className }))}
      {...props}
    >
      {children}
    </LinkWrapper>
  )
}

// export default AppLink
