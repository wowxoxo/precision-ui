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
      <div className="grid grid-cols-2 auto-rows-[222px] sm:grid-cols-3 lg:grid-cols-6 gap-3 mt-4">
        <div className="p-6 bg-whitish rounded-lg col-span-3 row-start-1 row-end-3 flex flex-col justify-between">
          <Heading level={2}>
            Более 500{' '}
            <span className="text-navy-opacity-40">
              компаний работают с нами
            </span>
          </Heading>

          <Text variant="body" className="w-[87.5%]">
            Среди наших клиентов — крупнейшие холдинги, государственные
            учреждения, финансовые и производственные компании, а также более 50
            000 представителей малого и среднего бизнеса.
          </Text>
        </div>
        {partners.map((partner, index) => (
          <div
            key={index}
            className="rounded-lg border border-navy-opacity-16 flex align-middle justify-center"
          >
            <ImageWrapper src={partner} width={160} height={64} alt={partner} />
          </div>
        ))}
        <div className="bg-whitish rounded-lg flex items-center justify-center">
          <Text variant="body" className="text-navy-opacity-40">
            500+
          </Text>
        </div>
      </div>
    </Section>
  )
}

export default Partners
