import React, { Fragment } from 'react'
import { Tag, TagItemProps } from '../ui/Tag'

import { ButtonText } from '../ui/button'
import Heading from '../core/typography/Heading'
import Text from '../core/typography/Text'
import { cn } from '@/lib/utils/cn'
import { cva } from 'class-variance-authority'
import { getAdapter } from '@/Adapters'

export interface FeaturedCardProps {
  size: 1 | 2 | 3 | 4
  tags: TagItemProps[]
  link?: string
  withButton?: boolean
  title: string
  desc?: string
  className?: string
  showDivider?: boolean
  price?: string
  oldPrice?: string
  detailsText?: string
  withWidthLimit?: boolean
  uniqId?: string
  onButtonClick?: ({
    uniqId,
    title,
  }: {
    uniqId?: string
    title?: string
  }) => void
}

const FeaturedCard: React.FC<FeaturedCardProps> = ({
  size,
  tags,
  link,
  withButton,
  title,
  desc,
  className,
  showDivider,
  price,
  oldPrice,
  detailsText,
  withWidthLimit,
  uniqId,
  onButtonClick,
}) => {
  const cardStyles = cva(
    'p-6 pb-4 bg-whitish rounded-lg transition-all bottom-0 transform duration-300 hover:scale1-[1.015] border border-transparent hover:border-sapphire1 relative col-span-1 !flex flex-col justify-between items-start sm:min-h-[264px] h-full',
    {
      variants: {
        size: {
          1: 'sm:col-span-1',
          2: 'sm:col-span-2',
          3: 'sm:col-span-3',
          4: 'sm:col-span-4',
        },
      },
      defaultVariants: {
        size: 1,
      },
    }
  )

  const LinkWrapper = getAdapter('LinkWrapper')

  const component = (
    <Fragment>
      <div data-test-id="content-container">
        <div className="flex space-x-2">
          {tags.map((tag, index) => (
            <Tag key={index} variant={tag.color}>
              {tag.title}
            </Tag>
          ))}
        </div>
        <div className="space-y-2">
          <Heading
            level={5}
            className={cn('mt-6', withWidthLimit && 'lg:max-w-sm')}
            as={'div'}
          >
            {title}
          </Heading>
          {desc && (
            <Text
              variant="small-body"
              className={cn(
                'text-navy-opacity-60',
                withWidthLimit && ' lg:max-w-sm'
              )}
            >
              {desc}
            </Text>
          )}
        </div>
      </div>
      {/* TODO: here is the button, should be a link */}
      <div className="mt-2 sm:mt-6 space-y-6 w-full">
        {showDivider && <div className="border-t border-navy-opacity-16"></div>}
        <div className="flex space-x-4 items-baseline">
          {oldPrice && (
            <Text
              variant="caption"
              className="text-navy-opacity-40 line-through"
            >
              {oldPrice}
            </Text>
          )}
          <Heading level={4} as={'div'}>
            {price}
          </Heading>
        </div>
        {(withButton || link) && (
          <ButtonText icon="arrowRight" onClick={() => withButton && onButtonClick?.({ uniqId, title })}>
            {detailsText || 'Подробнее'}
          </ButtonText>
        )}
      </div>
    </Fragment>
  )

  if (link) {
    return (
      <LinkWrapper
        href={link}
        className={cn(
          cardStyles({ size, className }),
          'cursor-pointer hover:bottom-1'
        )}
      >
        {component}
      </LinkWrapper>
    )
  }

  return (
    <div
      className={cn(cardStyles({ size, className }))}
    >
      {component}
    </div>
  )
}

export default FeaturedCard
