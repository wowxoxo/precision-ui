import React, { createContext, useContext } from 'react'

// Define the context type
type LinkWrapperType = React.FC<{
  href: string
  children: React.ReactNode
  className?: string
  target?: string
  rel?: string
}>

// Create the context
const LinkContext = createContext<LinkWrapperType | null>(null)

// Define a provider component
export const LinkProvider2: React.FC<{
  LinkWrapper: LinkWrapperType
  children: React.ReactNode
}> = ({ LinkWrapper, children }) => {
  console.log('LinkProvider2 initialized with:', LinkWrapper) // Debug log
  return (
    <LinkContext.Provider value={LinkWrapper}>{children}</LinkContext.Provider>
  )
}

// Custom hook to use the context
// export const useLinkWrapper2 = (): LinkWrapperType => {
//   const context = useContext(LinkContext)
//   if (!context) {
//     throw new Error('useLinkWrapper2 must be used within a LinkProvider2.')
//   }
//   return context
// }

// export const useLinkWrapper2 = (): LinkWrapperType => {
//   const context = useContext(LinkContext)

//   if (!context) {
//     if (typeof window === 'undefined') {
//       // Handle server-side rendering gracefully
//       console.warn('useLinkWrapper2 accessed outside LinkProvider2 during SSR.')
//       return () => {
//         throw new Error('LinkWrapper is not available on the server.')
//       }
//     }

//     throw new Error('useLinkWrapper2 must be used within a LinkProvider2.')
//   }

//   return context
// }

const DefaultLinkWrapper: LinkWrapperType = ({ href, children, ...props }) => (
  <a href={href} {...props}>
    {children}
  </a>
)

// export const useLinkWrapper2 = (): LinkWrapperType => {
//   const context = useContext(LinkContext)

//   if (!context) {
//     if (typeof window === 'undefined') {
//       console.warn('useLinkWrapper2 accessed outside LinkProvider2 during SSR.')
//       return DefaultLinkWrapper
//     }

//     throw new Error('useLinkWrapper2 must be used within a LinkProvider2.')
//   }

//   return context
// }

export const useLinkWrapper2 = (): LinkWrapperType => {
  if (!useContext) {
    console.warn('useContext is not available on the server.')
    throw new Error('useContext is not available on the server.')
  }

  if (!LinkContext) {
    console.warn('LinkContext is not available on the server.')
    throw new Error('LinkContext is not available on the server.')
  }

  if (!React.useContext || !React.useContext(LinkContext)) {
    console.warn('LinkContext is not available on the server.')
    throw new Error('LinkContext is not available on the server.')
  }

  console.log(
    'useLinkWrapper2 called during',
    typeof window === 'undefined' ? 'SSR' : 'CSR'
  )
  const context = useContext(LinkContext)
  if (!context) {
    console.warn(
      'No context found during',
      typeof window === 'undefined' ? 'SSR' : 'CSR'
    )
    if (typeof window === 'undefined') {
      return DefaultLinkWrapper
    }
    throw new Error('useLinkWrapper2 must be used within a LinkProvider2.')
  }
  return context
}
