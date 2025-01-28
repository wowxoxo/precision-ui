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
    <section className="pui-container">
      <div className="pui-mx-auto pui-w-full pui-h-[606px] pui-bg-gradient-to-b pui-from-navy pui-to-sapphire pui-text-white pui-rounded-2xl pui-px-6 pui-relative xl:pui-min-h-[500px]">
        <div className="pui-space-y-12 pui-relative pui-z-10">
          <div className="pui-w-full pui-grid pui-grid-cols-1 lg:pui-grid-cols-2">
            <div></div>
            <div className="pui-space-y-12 pui-mb-24 pui-mt-[128px] pui-pr-8 lg:pui-pr-8 xl:pui-pr-28">
              <div className="pui-space-y-6">
                <Heading level={2}>{title}</Heading>
                <Text
                  variant="body"
                  className="pui-text-whitish-opacity-60"
                  as="div"
                >
                  <SafeHtmlRenderer html={desc} />
                </Text>
              </div>

              <div className="pui-flex pui-space-x-4">
                {buttons.map((button, index) => (
                  <HeroButton key={index} {...button} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {img && (
          <div className="pui-absolute pui-bottom-0 pui-left-0 pui-z-0">
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
