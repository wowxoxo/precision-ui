import React from 'react'

export const LinkWrapper: React.FC<{
  href: string
  children: React.ReactNode
  className?: string
  target?: string
  rel?: string
}> = ({ href, children, className, target, rel, ...props }) => {
  return (
    <a
      href={href}
      daa-test="link-wrapper"
      target={target}
      rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
      className={className}
      {...props}
    >
      {children}
    </a>
  )
}
