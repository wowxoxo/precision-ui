import { VariantProps, cva } from 'class-variance-authority'

import { ButtonText } from '../ui/button'
import Heading from '../core/typography/Heading'
import React from 'react'
import SafeHtmlRenderer from '../SafeHtml'
import Text from '../core/typography/Text'
import { cn } from '@/lib/utils/cn'
import { getAdapter } from '@/Adapters'

const plateCardVariants = cva('rounded-lg p-6 min-h-[190px] h-full', {
  variants: {
    variant: {
      default: 'bg-white',
      sapphire: 'bg-sapphire text-whitish',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

const descVariants = cva('', {
  variants: {
    variant: {
      default: 'text-navy-opacity-60',
      sapphire: 'text-whitish-opacity-60',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

export interface PlateCardProps extends VariantProps<typeof plateCardVariants> {
  title: string
  desc: string
  link?: string
  detailsText?: string
}

const PlateCard: React.FC<PlateCardProps> = ({
  title,
  desc,
  variant,
  link,
  detailsText,
}) => {
  const content = (
    <div className="space-y-2">
      <Heading level={4} as="div">
        {title}
      </Heading>
      <Text className={cn(descVariants({ variant }))} as={'div'}>
        <SafeHtmlRenderer html={desc} />
      </Text>
    </div>
  )

  const LinkWrapper = getAdapter('LinkWrapper')

  return link ? (
    <LinkWrapper
      href={link}
      className={cn(
        plateCardVariants({ variant }),
        'transition-all bottom-0 hover:bottom-1 transform duration-300 relative hover:scale1-[1.005]'
      )}
    >
      <div className="flex flex-col justify-between h-full items-start">
        {content}
        {detailsText && (
          <ButtonText
            icon="arrowRight"
            variant={variant == 'sapphire' ? 'white' : 'default'}
          >
            {detailsText || 'Подробнее'}
          </ButtonText>
        )}
      </div>
    </LinkWrapper>
  ) : (
    <div className={cn(plateCardVariants({ variant }))}>{content}</div>
  )
}

export default PlateCard
