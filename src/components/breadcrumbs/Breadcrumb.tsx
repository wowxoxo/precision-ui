import React from 'react'
import Text from '../core/typography/Text'
import { getAdapter } from '@/Adapters'
import truncateText from '@/lib/utils/truncateText'

export interface BreadcrumbProps {
  title: string
  href?: string
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ title, href }) => {
  const LinkWrapper = getAdapter('LinkWrapper')

  if (!href)
    return (
      <Text variant="link" className="pui-text-whitish breadcrumb">
        {truncateText(title, 55)}
      </Text>
    )

  return (
    <Text variant="small-body" className="pui-text-whitish-opacity-32">
      <LinkWrapper
        href={href}
        className="breadcrumb hover:pui-text-whitish-opacity-60 pui-duration-200"
      >
        {truncateText(title, 55)}
      </LinkWrapper>
    </Text>
  )
}

export default Breadcrumb
