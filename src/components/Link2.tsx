import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { useLinkWrapper2 } from '@/context/LinkContext2'
import { cn } from '@/lib/utils/cn'
import { getLinkWrapper } from './LinkWrapper3'

// Define variants for styling
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

// Define props for AppLink2
interface AppLink2Props
  extends React.HTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {
  href: string
  children: React.ReactNode
  className?: string
  target?: string
}

const AppLink2: React.FC<AppLink2Props> = ({
  href,
  children,
  className,
  variant,
  target,
  rel,
  ...props
}) => {
  //   const LinkWrapper = useLinkWrapper2() // Get LinkWrapper from context
  const LinkWrapper = getLinkWrapper()

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

export default AppLink2
