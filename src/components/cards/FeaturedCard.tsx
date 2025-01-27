import { Tag, TagItemProps } from '../ui/Tag'

import { ButtonText } from '../ui/button'
import Heading from '../core/typography/Heading'
import React from 'react'
import Text from '../core/typography/Text'
import { cn } from '@/lib/utils/cn'
import { cva } from 'class-variance-authority'
import { getAdapter } from '@/Adapters'

export interface FeaturedCardProps {
  size: 1 | 2 | 3
  tags: TagItemProps[]
  link: string
  title: string
  desc?: string
  className?: string
  showDivider?: boolean
  price?: string
  oldPrice?: string
  detailsText?: string
}

const FeaturedCard: React.FC<FeaturedCardProps> = ({
  size,
  tags,
  link,
  title,
  desc,
  className,
  showDivider,
  price,
  oldPrice,
  detailsText,
}) => {
  const cardStyles = cva(
    'p-6 pb-4 bg-whitish rounded-lg transition-all bottom-0 transform duration-300 hover:scale1-[1.015] border border-transparent hover:border-sapphire1 relative hover:bottom-1 cursor-pointer col-span-1 flex flex-col justify-between items-start sm:min-h-[264px] h-full',
    {
      variants: {
        size: {
          1: 'sm:col-span-1',
          2: 'sm:col-span-2',
          3: 'sm:col-span-3',
        },
      },
      defaultVariants: {
        size: 1,
      },
    }
  )

  const LinkWrapper = getAdapter('LinkWrapper')

  return (
    <LinkWrapper href={link} className={cn(cardStyles({ size, className }))}>
      <div data-test-id="content-container">
        <div className="flex space-x-2">
          {tags.map((tag, index) => (
            <Tag key={index} variant={tag.color}>
              {tag.title}
            </Tag>
          ))}
        </div>
        <div className="space-y-2">
          <Heading level={5} className="mt-6" as={'div'}>
            {title}
          </Heading>
          {desc && (
            <Text variant="small-body" className="text-navy-opacity-60">
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
        <ButtonText icon="arrowRight">{detailsText || 'Подробнее'}</ButtonText>
      </div>
    </LinkWrapper>
  )
}

export default FeaturedCard
