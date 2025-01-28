import Section, { SectionProps } from './Section'

import Heading from '@/components/core/typography/Heading'
import React from 'react'
import Text from '@/components/core/typography/Text'
import { getAdapter } from '@/Adapters'

const partners = [
  '/partners/rostelekom.svg',
  '/partners/mts.svg',
  '/partners/uralsib.svg',
  '/partners/sberbank.svg',
  '/partners/rosbank.svg',
  '/partners/pochtabank.svg',
  '/partners/vtb.svg',
  '/partners/alfa.svg',
  '/partners/otkrytie.svg',
  // "МТС",
  // "Уралсиб",
  // "Сбербанк",
  // "Росбанк",
  // "Почта Банк",
  // "ВТБ",
  // "РосБанк",
  // "Открытие",
]

export interface PartnersProps {
  variant?: SectionProps['variant']
  withoutTopPadding?: boolean
  withoutBottomPadding?: boolean
  withTopMargin?: boolean
  withBottomMargin?: boolean
}

const Partners: React.FC<PartnersProps> = ({
  variant,
  withoutTopPadding,
  withoutBottomPadding,
  withTopMargin,
  withBottomMargin,
}) => {
  const ImageWrapper = getAdapter('ImageWrapper')

  return (
    <Section
      title=""
      variant={variant}
      withoutTopPadding={withoutTopPadding}
      withoutBottomPadding={withoutBottomPadding}
      withTopMargin={withTopMargin}
      withBottomMargin={withBottomMargin}
    >
      <div className="pui-grid pui-grid-cols-2 pui-auto-rows-[222px] sm:pui-grid-cols-3 lg:pui-grid-cols-6 pui-gap-3 pui-mt-4">
        <div className="pui-p-6 pui-bg-whitish pui-rounded-lg pui-col-span-3 pui-row-start-1 pui-row-end-3 pui-flex pui-flex-col pui-justify-between">
          <Heading level={2}>
            Более 500{' '}
            <span className="pui-text-navy-opacity-40">
              компаний работают с нами
            </span>
          </Heading>

          <Text variant="body" className="pui-w-[87.5%]">
            Среди наших клиентов — крупнейшие холдинги, государственные
            учреждения, финансовые и производственные компании, а также более 50
            000 представителей малого и среднего бизнеса.
          </Text>
        </div>
        {partners.map((partner, index) => (
          <div
            key={index}
            className="pui-rounded-lg pui-border pui-border-navy-opacity-16 pui-flex pui-align-middle pui-justify-center"
          >
            <ImageWrapper src={partner} width={160} height={64} alt={partner} />
          </div>
        ))}
        <div className="pui-bg-whitish pui-rounded-lg pui-flex pui-items-center pui-justify-center">
          <Text variant="body" className="pui-text-navy-opacity-40">
            500+
          </Text>
        </div>
      </div>
    </Section>
  )
}

export default Partners
