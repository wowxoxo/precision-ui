import Heading from '@/components/core/typography/Heading'
import React from 'react'
import SafeHtmlRenderer from '../SafeHtml'
import Text from '@/components/core/typography/Text'
import { getAdapter } from '@/Adapters'

export interface AdvantageProps {
  title: string
  desc?: string
  icon: string
}

const Advantage: React.FC<AdvantageProps> = ({ title, desc, icon }) => {
  const ImageWrapper = getAdapter('ImageWrapper')

  return (
    <div className="p-6 bg-whitish rounded-lg">
      <div className="p-4 bg-turquoise-opacity-20 rounded-lg mb-12 inline-flex">
        <ImageWrapper
          src={icon}
          alt={`Изображение для ${title}`}
          width={32}
          height={32}
          className="object-contain"
        />
      </div>
      <Heading level={5} className="mb-2">
        {title}
      </Heading>
      {desc && (
        <Text variant="small-body" className="text-navy-opacity-60" as={'div'}>
          <SafeHtmlRenderer html={desc} />
        </Text>
      )}
    </div>
  )
}

export default Advantage
