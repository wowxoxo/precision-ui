import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel'

import React from 'react'
import Text from './core/typography/Text'

interface GridIteratorProps<T> {
  items: T[]
  renderItem: (item: T, index: number) => React.ReactNode
  columns?: number
  showControlsOnDesktop?: boolean
  withoutCarousel?: boolean
  footnote?: string
}

const GridIterator = <T,>({
  items,
  renderItem,
  columns = 4,
  showControlsOnDesktop = false,
  withoutCarousel = true, // TODO: add to props chain
  footnote,
}: GridIteratorProps<T>) => {
  const getGridClasses = (columns: number) => {
    switch (columns) {
      case 1:
        return 'grid grid-cols-1 gap-3'
      case 2:
        return 'grid grid-cols-1 sm:grid-cols-2 gap-3'
      case 3:
        return 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3'
      case 4:
        return 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3'
      default:
        return 'grid grid-cols-1 gap-3'
    }
  }
  const carouselColumnsClasses = (columns: number = 3) => {
    switch (columns) {
      case 2:
        return 'md:basis-1/2 lg:basis-1/2' // FIXME: md sizes
      case 3:
        return 'md:basis-1/2 lg:basis-1/3'
      case 4:
        return 'md:basis-1/2 lg:basis-1/4'
      default:
        return 'md:basis-1/2 lg:basis-1/3'
    }
  }
  const carouselGridClasses = `pl-4 md:basis-1/2 ${carouselColumnsClasses(
    columns
  )}`

  return (
    <div>
      {withoutCarousel ? (
        <div className={getGridClasses(columns)}>
          {items.map((item, index) => (
            <React.Fragment key={index}>
              {renderItem(item, index)}
            </React.Fragment>
          ))}
        </div>
      ) : (
        <Carousel className="my-carousel w-full">
          <CarouselContent className="-ml-4">
            {items.map((item, index) => (
              <CarouselItem key={index} className={carouselGridClasses}>
                {renderItem(item, index)}
              </CarouselItem>
            ))}
          </CarouselContent>

          {showControlsOnDesktop && (
            <div className="flex justify-center mt-4">
              {/* <CarouselPrevious />
              <CarouselNext /> */}
              <CarouselPrevious className="relative left-auto top-auto right-auto translate-y-0" />
              <CarouselNext className="relative left-auto top-auto right-auto translate-y-0" />
            </div>
          )}
        </Carousel>
      )}

      {footnote && (
        <div className="mt-6">
          <Text variant="small-body" as="div">
            {footnote}
          </Text>
        </div>
      )}
    </div>
  )
}

export default GridIterator
