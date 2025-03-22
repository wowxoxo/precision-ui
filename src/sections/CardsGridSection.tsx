import Section, { SectionProps } from './Section'

import Advantage from '@/components/cards/Advantage'
import Advantage2 from '@/components/cards/Advantage2'
import FeaturedCard from '@/components/cards/FeaturedCard'
import GridIterator from '@/components/GridIterator'
import Plate from '@/components/cards/Plate'
import Product from '@/components/cards/Product'
import Rate from '@/components/cards/Rate'
import React from 'react'

// Map component names to actual components
const componentMap: { [key: string]: React.ElementType } = {
  Advantage,
  Advantage2,
  Rate,
  Product,
  FeaturedCard,
  Plate,
}

interface CardsGridSectionProps<T> {
  title: string
  sectionId?: string
  desc?: string
  items: T[]
  component?: string
  withoutTopPadding?: boolean
  withoutBottomPadding?: boolean
  withTopMargin?: boolean
  withBottomMargin?: boolean
  variant?: SectionProps['variant']
  corners?: SectionProps['corners']
  columns?: number
  hideControlsOnDesktop?: boolean
  withoutCarousel?: boolean
  footnote?: string
  onButtonClick?: ({
    uniqId,
    title,
  }: {
    uniqId?: string
    title?: string
  }) => void
}

const CardsGridSection = <T,>({
  title,
  sectionId,
  desc,
  items,
  component = 'Advantage',
  withoutTopPadding = false,
  withTopMargin = false,
  withBottomMargin = false,
  withoutBottomPadding = false,
  variant,
  corners,
  columns,
  hideControlsOnDesktop,
  withoutCarousel,
  footnote,
  onButtonClick,
}: CardsGridSectionProps<T>) => {
  const Component = componentMap[component] || Advantage

  return (
    <Section
      title={title}
      sectionId={sectionId}
      desc={desc}
      variant={variant}
      corners={corners}
      withoutTopPadding={withoutTopPadding}
      withTopMargin={withTopMargin}
      withBottomMargin={withBottomMargin}
      withoutBottomPadding={withoutBottomPadding}
    >
      <GridIterator
        items={items}
        columns={columns}
        hideControlsOnDesktop={hideControlsOnDesktop}
        withoutCarousel={withoutCarousel}
        renderItem={(item, index) => (
          <Component key={index} {...item} onButtonClick={onButtonClick} />
        )}
        footnote={footnote}
      />
    </Section>
  )
}

export default CardsGridSection
