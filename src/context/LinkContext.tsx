import React from 'react'

const LinkContext = React.createContext<React.FC<
  React.AnchorHTMLAttributes<HTMLAnchorElement>
> | null>(null)

export const LinkProvider: React.FC<{
  LinkWrapper: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement>>
  children: React.ReactNode
}> = ({ LinkWrapper, children }) => (
  <LinkContext.Provider value={LinkWrapper}>{children}</LinkContext.Provider>
)

export const useLinkWrapper = () => {
  const context = React.useContext(LinkContext)
  if (!context) {
    throw new Error('useLinkWrapper must be used within a LinkProvider')
  }
  return context
}
