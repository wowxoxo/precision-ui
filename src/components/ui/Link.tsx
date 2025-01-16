import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils/cn'
import { useLinkWrapper } from '@/context/LinkWrapperContext'

const linkVariants = cva('duration-2001 transition-colors1', {
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
  extends React.HTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {
  href: string
  children: React.ReactNode
  className?: string
  target?: string
}

const AppLink: React.FC<AppLinkProps> = ({
  href,
  children,
  className,
  variant,
  target,
  ...props
}) => {
  const LinkWrapper = useLinkWrapper()

  return (
    <LinkWrapper
      href={href}
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      className={cn(linkVariants({ variant, className }))}
      {...props}
    >
      {children}
    </LinkWrapper>
  )
}

export default AppLink
