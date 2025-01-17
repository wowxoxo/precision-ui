let LinkWrapper: React.FC<{
  href: string
  children: React.ReactNode
  className?: string
  target?: string
  rel?: string
}> | null = null

export const setLinkWrapper = (
  wrapper: React.FC<{
    href: string
    children: React.ReactNode
    className?: string
    target?: string
    rel?: string
  }>
) => {
  LinkWrapper = wrapper
}

export const getLinkWrapper = () => {
  if (!LinkWrapper) {
    throw new Error(
      'LinkWrapper is not set. Please set it using setLinkWrapper() before using it.'
    )
  }
  return LinkWrapper
}
