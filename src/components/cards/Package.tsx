import { RateButton, RateButtonProps } from './Rate'
import { Tag, TagItemProps } from '../ui/Tag'
import { VariantProps, cva } from 'class-variance-authority'

import AppLink from '../ui/Link'
import Heading from '../core/typography/Heading'
import Informer from '../Informer'
import React from 'react'
import SafeHtmlRenderer from '../SafeHtml'
import Text from '../core/typography/Text'
import { cn } from '@/lib/utils/cn'

const packageCardVariants = cva(
  'group p-6 rounded-lg min-h-[360px] flex flex-col justify-between',
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
  },
)

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

const dividerVariants = cva('w-full h-[1px]', {
  variants: {
    variant: {
      default: 'bg-grey-1',
      navy: 'bg-whitish-opacity-16',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

export interface PackageCardProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof packageCardVariants> {
  className?: string
  title: string
  oldPrice?: string
  price: string
  priceDesc?: string
  desc?: string
  link?: string
  onClickBuyButton?: (title: string) => void
  buttons?: RateButtonProps[]
  tags?: TagItemProps[]
  titleInformer?: string
  colSize?: 1 | 2 | 3 | 4
}

export interface PackageCardPropsWithoutHTMLAttributes extends Omit<
  PackageCardProps,
  keyof React.HTMLAttributes<HTMLDivElement>
> {
  className?: string
  title: string
}

const PackageCard: React.FC<PackageCardProps> = ({
  variant,
  className,
  title,
  oldPrice,
  price,
  priceDesc,
  desc,
  link,
  onClickBuyButton,
  buttons,
  tags,
  titleInformer,
  colSize,
}) => {
  const itemSizeClass =
    colSize === 1
      ? 'lg:col-span-1'
      : colSize === 2
        ? 'lg:col-span-2'
        : colSize === 3
          ? 'col-span-1 lg:col-span-3'
          : colSize === 4
            ? 'col-span-1 sm:col-span-3 xl:col-span-4'
            : ''
  return (
    <div
      className={cn(packageCardVariants({ variant, className }), itemSizeClass)}
    >
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

        <div className="space-y-12 mb-12">
          <div className="space-y-6">
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
                <Heading
                  level={4}
                  as={'span'}
                  className={variant === 'navy' ? 'text-whitish' : 'text-navy'}
                >
                  {title}
                </Heading>
              )}
              {titleInformer && <Informer content={titleInformer} />}
            </div>
            <Text
              variant="small-body"
              as="div"
              className={cn(descVariants({ variant }), 'content')}
            >
              {desc && <SafeHtmlRenderer html={desc} />}
            </Text>
          </div>

          {/* <div className="space-y-6">
            <div className={cn(dividerVariants({ variant }))}></div>
            <div className="space-y-3">
              <div className="flex space-x-4 items-baseline">
                {oldPrice && (
                  <Text
                    variant="caption"
                    className="text-navy-opacity-40 line-through"
                  >
                    {oldPrice}
                  </Text>
                )}
                <Heading level={5} as={"div"}>
                  {price}
                </Heading>
              </div>
              {priceDesc && (
                <Text
                  variant="small-body"
                  as="div"
                  className={cn(descVariants({ variant }), "content")}
                >
                  <SafeHtmlRenderer html={priceDesc} />
                </Text>
              )}
            </div>
          </div> */}
        </div>
      </div>

      <div>
        <div className="space-y-6 mb-6">
          <div className={cn(dividerVariants({ variant }))}></div>
          <div className="space-y-3">
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
            {priceDesc && (
              <Text
                variant="small-body"
                as="div"
                className={cn(descVariants({ variant }), 'content')}
              >
                <SafeHtmlRenderer html={priceDesc} />
              </Text>
            )}
          </div>
        </div>
        <div className="w-full gap-2 flex">
          {buttons?.map((button, index) => (
            <RateButton
              key={index}
              variant={button.variant}
              title={button.title}
              link={button.link}
              onClick={() => button.isBuyButton && onClickBuyButton?.(title)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default PackageCard
