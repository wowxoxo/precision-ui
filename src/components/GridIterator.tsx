import { CarouselWrapper } from '@/decorators/CarouselWrapper'
import React from 'react'
import Text from './core/typography/Text'

// import { getAdapter } from '@/Adapters'

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
        return 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3'
      default:
        return 'grid grid-cols-1 gap-3'
    }
  }
  // const CarouselWrapper = getAdapter('CarouselWrapper')

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
        <CarouselWrapper
          items={items}
          // renderItem={renderItem}
          renderItem={(item, index) => renderItem(item as T, index)}
          columns={columns}
          showControlsOnDesktop={showControlsOnDesktop}
        />
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
