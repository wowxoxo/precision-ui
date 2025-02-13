import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'

import React from 'react'
import { cn } from '@/lib/utils/cn'

export const CarouselWrapper = <T,>({
  items,
  renderItem,
  columns,
  hideControlsOnDesktop,
  className,
  variant,
}: {
  items: T[]
  renderItem: (item: T, index: number) => React.ReactNode
  columns: number
  hideControlsOnDesktop: boolean
  className?: string
  variant?: 'default' | 'white'
}) => {
  const carouselColumnsClasses = (size?: number) => {
    switch (size ?? columns) {
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

  return (
    <Carousel
      opts={{
        align: 'start',
      }}
      className={cn('my-carousel w-full -mt-3', className)}
      hideControlsOnDesktop={hideControlsOnDesktop}
      variant={variant}
    >
      <CarouselContent className="-ml-4 pt-3">
        {items.map((item, index) => (
          <CarouselItem
            key={index}
            className={`pl-4 ${carouselColumnsClasses(
              (item as { size?: number }).size // Safely access `size` property
            )}`}
          >
            {renderItem(item, index)}
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
