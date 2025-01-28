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
        return 'md:pui-basis-1/2 lg:pui-basis-1/2'
      case 3:
        return 'md:pui-basis-1/2 lg:pui-basis-1/3'
      case 4:
        return 'md:pui-basis-1/2 lg:pui-basis-1/4'
      default:
        return 'md:pui-basis-1/2 lg:pui-basis-1/3'
    }
  }

  const carouselGridClasses = `pui-pl-4 md:pui-basis-1/2 ${carouselColumnsClasses(
    columns
  )}`

  return (
    <Carousel className={cn('my-carousel pui-w-full', className)}>
      <CarouselContent className="-pui-ml-4">
        {items.map((item, index) => (
          <CarouselItem key={index} className={carouselGridClasses}>
            {renderItem(item, index)}
          </CarouselItem>
        ))}
      </CarouselContent>

      {showControlsOnDesktop && (
        <div className="pui-flex pui-justify-center pui-mt-4">
          <CarouselPrevious className="pui-relative pui-left-auto pui-top-auto pui-right-auto pui-translate-y-0" />
          <CarouselNext className="pui-relative pui-left-auto pui-top-auto pui-right-auto pui-translate-y-0" />
        </div>
      )}
    </Carousel>
  )
}
