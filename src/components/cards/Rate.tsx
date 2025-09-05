import React from 'react'

import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils/cn'
import Heading from '../core/typography/Heading'
import Text from '../core/typography/Text'
import { ButtonSecondary } from '../ui/button'
import AppLink from '../ui/Link'
import { ButtonSecondaryProps } from '../ui/button/ButtonSecondary'
import { Tag, TagItemProps } from '../ui/Tag'

import SafeHtmlRenderer from '../SafeHtml'
import { getAdapter } from '@/Adapters'
import Informer from '../Informer'

const rateCardVariants = cva(
  'group p-6 rounded-lg min-h-[360px] flex flex-col justify-between h-full',
  {
    variants: {
      variant: {
        default:
          'text-navy bg-whitish hover1:bg-navy-opacity-4 hover1:text-navy',
        navy: 'text-whitish bg-gradient-to-b from-navy to-sapphire hover1:from-sapphire hover1:to-navy',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

const dividerVariants = cva('w-full h-[1px]', {
  variants: {
    variant: {
      default: 'bg-grey-3',
      navy: 'bg-whitish-opacity-16',
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
      navy: 'text-whitish-opacity-60',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

export interface RateButtonProps {
  variant?: ButtonSecondaryProps['variant']
  title?: string
  link?: string
  isBuyButton?: boolean
  uniqId?: string
  onClick?: (uniqId?: string) => void
}

export const RateButton: React.FC<RateButtonProps> = ({
  variant,
  title,
  link,
  uniqId,
  onClick,
}) => {
  const LinkWrapper = getAdapter('LinkWrapper')

  const button = (
    <ButtonSecondary variant={variant} onClick={() => onClick?.(uniqId)}>
      {title || 'Подробнее'}
    </ButtonSecondary>
  )

  if (link) {
    return <LinkWrapper href={link}>{button}</LinkWrapper>
  }

  return button
}

export interface RateCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof rateCardVariants> {
  className?: string
  title: string
  oldPrice?: string
  price: string
  desc: string
  link?: string
  onClickBuyButton?: ({
    title,
    uniqId,
  }: {
    title: string
    uniqId?: string
  }) => void
  buttons?: RateButtonProps[]
  tags?: TagItemProps[]
  titleInformer?: string
}

export interface RateCardPropsWithoutHTMLAttributes
  extends Omit<RateCardProps, keyof React.HTMLAttributes<HTMLDivElement>> {
  className?: string
  title: string
}

const RateCard: React.FC<RateCardProps> = ({
  variant,
  className,
  title,
  oldPrice,
  price,
  desc,
  link,
  onClickBuyButton,
  buttons,
  tags,
  titleInformer,
}) => {
  return (
    <div className={cn(rateCardVariants({ variant, className }))}>
      <div>
        {tags && (
          <div className="flex space-x-2 mb-6">
            {tags.map((tag, index) => (
              <Tag key={index} variant={tag.color}>
                {tag.title}
              </Tag>
            ))}
          </div>
        )}
        <div className="space-y-12 mb-6">
          <div className="space-y-4">
            <div className="flex space-x-2 items-center relative">
              {link ? (
                <AppLink
                  href={link}
                  variant={variant === 'navy' ? 'white' : 'navy'}
                >
                  <Heading level={4} as={'span'}>
                    {title}
                  </Heading>
                </AppLink>
              ) : (
                <Heading level={4} as={'div'}>
                  {title}
                </Heading>
              )}
              {titleInformer && <Informer content={titleInformer} />}
            </div>
            <div className="flex space-x-4 items-baseline">
              {oldPrice && (
                <Text
                  variant="caption"
                  className="text-navy-opacity-40 line-through"
                >
                  {oldPrice}
                </Text>
              )}
              <Heading level={5} as={'div'}>
                {price}
              </Heading>
            </div>
          </div>
          <div className="space-y-4">
            <div className={cn(dividerVariants({ variant }))}></div>
            <Text
              variant="small-body"
              as="div"
              className={cn(descVariants({ variant }), 'content')}
            >
              <SafeHtmlRenderer html={desc} />
            </Text>
          </div>
        </div>
      </div>

      <div className="w-full gap-2 flex">
        {buttons?.map((button, index) => (
          <RateButton
            key={index}
            variant={button.variant}
            title={button.title}
            link={button.link}
            onClick={() =>
              button.isBuyButton &&
              onClickBuyButton?.({ title, uniqId: button.uniqId })
            }
          />
        ))}
      </div>
    </div>
  )
}

export default RateCard
