import { Date20X20, TimeToRead20X20, Views20X20 } from '@iit/precision-ui-icons'

import React from 'react'
import { ReactNode } from 'react'
import Text from './core/typography/Text'

interface ArticlePreviewTagProps {
  icon: string
  label: string
  className?: string
  iconClassName?: string
}

const getIconComponent = (iconName: string): ReactNode => {
  switch (iconName) {
    case 'date':
      return <Date20X20 />
    case 'timeToRead':
      return <TimeToRead20X20 />
    case 'views':
      return <Views20X20 />
    default:
      return null
  }
}

const ArticlePreviewTag: React.FC<ArticlePreviewTagProps> = ({
  icon,
  label,
  className,
  iconClassName,
}) => {
  const IconComponent = getIconComponent(icon)

  return (
    <div className={`flex gap-1 text-navy-opacity-40 relative ${className}`}>
      <span className={`${iconClassName}`}>{IconComponent}</span>
      <Text variant="caption" as="div" className="relative top-[1px]">
        {label}
      </Text>
    </div>
  )
}

export default ArticlePreviewTag
