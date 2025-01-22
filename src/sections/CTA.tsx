import { CommonButtonProps } from './common'
import Heading from '@/components/core/typography/Heading'
import { HeroButton } from './Hero'
import React from 'react'
import SafeHtmlRenderer from '@/components/SafeHtml'
import Text from '@/components/core/typography/Text'
import { getAdapter } from '@/Adapters'

export interface CTAProps {
  title: string
  desc: string
  img: string
  buttons: CommonButtonProps[]
}

const CTA: React.FC<CTAProps> = ({ title, desc, img, buttons }) => {
  const ImageWrapper = getAdapter('ImageWrapper')

  return (
    <section className="container">
      <div className="mx-auto w-full h-[606px]1 bg-gradient-to-b from-navy to-sapphire text-white rounded-2xl px-6 relative xl:min-h-[500px]">
        <div className="space-y-12 relative z-10">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2">
            <div></div>
            <div className="space-y-12 mb-24 mt-[128px] pr-8 lg:pr-8 xl:pr-28">
              <div className=" space-y-6">
                <Heading level={2}>{title}</Heading>
                <Text
                  variant="body"
                  className="text-whitish-opacity-60"
                  as="div"
                >
                  <SafeHtmlRenderer html={desc} />
                </Text>
              </div>

              <div className="flex space-x-4">
                {buttons.map((button, index) => (
                  <HeroButton key={index} {...button} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {img && (
          <div className="absolute bottom-0 left-0 z-0">
            <ImageWrapper
              src={img}
              alt={title}
              width={654}
              height={570}
              objectFit="contain"
            />
          </div>
        )}
      </div>
    </section>
  )
}

export default CTA
