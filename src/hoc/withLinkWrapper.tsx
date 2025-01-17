// ui-library/src/hoc/withLinkWrapper.tsx

import React, { ComponentType } from 'react'

// interface WithLinkWrapperProps {
//   LinkWrapper: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement>>;
// }

const withLinkWrapper = <P extends object>(
  WrappedComponent: ComponentType<P>,
  LinkWrapper: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement>>
): ComponentType<P> => {
  return (props: P) => <WrappedComponent {...props} LinkWrapper={LinkWrapper} />
}

export default withLinkWrapper
