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
      <div className="grid 2xs:grid-cols-2 2xs:auto-rows-[222px] sm:grid-cols-3 lg:grid-cols-6 gap-3 mt-4">
        <div className="p-6 bg-whitish rounded-lg 2xs:col-span-2 sm:col-span-3 row-start-1 row-end-3 flex flex-col justify-between">
          <Heading level={2}>
            Более 50 000{' '}
            <span className="text-navy-opacity-40">
              компаний работают с нами
            </span>
          </Heading>

          <Text variant="body" className="w-[87.5%]">
            Среди наших клиентов — крупнейшие холдинги, государственные
            учреждения, финансовые и производственные компании, а также
            более&nbsp;50&nbsp;000 представителей малого и среднего бизнеса.
          </Text>
        </div>
        {partners.map((partner, index) => (
          <div
            key={index}
            className="rounded-lg border border-solid border-navy-opacity-16 flex align-middle justify-center items-center min-h-[120px] 2xs:min-h-0"
          >
            <ImageWrapper src={partner} width={160} height={64} alt={partner} />
          </div>
        ))}
        <div className="bg-whitish rounded-lg flex items-center justify-center min-h-[120px] 2xs:min-h-0">
          <Text variant="body" className="text-navy-opacity-40 py-6 sm:py-0">
            50 000+
          </Text>
        </div>
      </div>
    </Section>
  )
}

export default Partners
