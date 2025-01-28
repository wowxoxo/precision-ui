import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

import React from 'react'
import { cn } from '@/lib/utils/cn'

export const CarouselWrapper: React.FC<{
  items: unknown[]
  renderItem: (item: unknown, index: number) => React.ReactNode
  columns: number
  showControlsOnDesktop: boolean
  className?: string
}> = ({ items, renderItem, columns, showControlsOnDesktop, className }) => {
  const carouselColumnsClasses = (columns: number = 3) => {
    switch (columns) {
      case 2:
        return 'md:basis-1/2 lg:basis-1/2'
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
    <Carousel
      opts={{
        align: 'start',
      }}
      className={cn('my-carousel w-full', className)}
    >
      <CarouselContent className="-ml-4">
        {items.map((item, index) => (
          <CarouselItem key={index} className={carouselGridClasses}>
            {renderItem(item, index)}
          </CarouselItem>
        ))}
      </CarouselContent>

      {showControlsOnDesktop && (
        <div className="flex justify-center mt-4">
          <CarouselPrevious className="relative left-auto top-auto right-auto translate-y-0" />
          <CarouselNext className="relative left-auto top-auto right-auto translate-y-0" />
        </div>
      )}
    </Carousel>
  )
}
