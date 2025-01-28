import { VariantProps, cva } from 'class-variance-authority'

import { ButtonText } from '../ui/button'
import Heading from '../core/typography/Heading'
import React from 'react'
import SafeHtmlRenderer from '../SafeHtml'
import Text from '../core/typography/Text'
import { cn } from '@/lib/utils/cn'
import { getAdapter } from '@/Adapters'

const plateCardVariants = cva(
  'pui-rounded-lg pui-p-6 pui-min-h-[190px] pui-h-full',
  {
    variants: {
      variant: {
        default: 'pui-bg-white',
        sapphire: 'pui-bg-sapphire pui-text-whitish',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

const descVariants = cva('', {
  variants: {
    variant: {
      default: 'pui-text-navy-opacity-60',
      sapphire: 'pui-text-whitish-opacity-60',
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
    <div className="pui-space-y-2">
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
        'pui-transition-all pui-bottom-0 hover:pui-bottom-1 pui-transform pui-duration-300 pui-relative hover:pui-scale1-[1.005]'
      )}
    >
      <div className="pui-flex pui-flex-col pui-justify-between pui-h-full pui-items-start">
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
