import React, { ElementType, ReactNode, forwardRef } from 'react'

import { typeVariants } from './typeVariants'

interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6
  as?: ElementType
  className?: string
  children: ReactNode
}

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ level, as, className = '', children, ...props }, ref) => {
    const Component = as || `h${level}`
    const variantClass = typeVariants({ variant: `h${level}` })

    return (
      <Component
        ref={ref}
        className={`${variantClass}${className ? ` ${className}` : ''}`}
        {...props}
      >
        {children}
      </Component>
    )
  }
)

Heading.displayName = 'Heading'

export default Heading
