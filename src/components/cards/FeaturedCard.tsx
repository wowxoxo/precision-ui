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
    'pui-p-6 pui-pb-4 pui-bg-whitish pui-rounded-lg pui-transition-all pui-bottom-0 pui-transform pui-duration-300 hover:pui-scale1-[1.015] pui-border pui-border-transparent hover:pui-border-sapphire1 pui-relative hover:pui-bottom-1 pui-cursor-pointer pui-col-span-1 pui-flex pui-flex-col pui-justify-between pui-items-start sm:pui-min-h-[264px] pui-h-full',
    {
      variants: {
        size: {
          1: 'sm:pui-col-span-1',
          2: 'sm:pui-col-span-2',
          3: 'sm:pui-col-span-3',
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
        <div className="pui-flex pui-space-x-2">
          {tags.map((tag, index) => (
            <Tag key={index} variant={tag.color}>
              {tag.title}
            </Tag>
          ))}
        </div>
        <div className="pui-space-y-2">
          <Heading level={5} className="pui-mt-6" as={'div'}>
            {title}
          </Heading>
          {desc && (
            <Text variant="small-body" className="pui-text-navy-opacity-60">
              {desc}
            </Text>
          )}
        </div>
      </div>
      {/* TODO: here is the button, should be a link */}
      <div className="pui-mt-2 sm:pui-mt-6 pui-space-y-6 pui-w-full">
        {showDivider && (
          <div className="pui-border-t pui-border-navy-opacity-16"></div>
        )}
        <div className="pui-flex pui-space-x-4 pui-items-baseline">
          {oldPrice && (
            <Text
              variant="caption"
              className="pui-text-navy-opacity-40 pui-line-through"
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
