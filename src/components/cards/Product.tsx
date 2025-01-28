import {
  ButtonTextIconName,
  ButtonTextPropsWithoutHTMLAttributes,
} from '../ui/button/ButtonText'
import { VariantProps, cva } from 'class-variance-authority'

import { ButtonText } from '../ui/button'
import Heading from '../core/typography/Heading'
import React from 'react'
import Text from '../core/typography/Text'
import { cn } from '@/lib/utils/cn'
import { getAdapter } from '@/Adapters'

const productCardVariants = cva(
  'pui-group pui-p-6 pui-rounded-lg pui-min-h-[300px] pui-flex pui-flex-col pui-justify-between pui-gap-12 pui-items-start pui-relative hover:pui-scale1-[1.005] pui-h-full',
  {
    variants: {
      variant: {
        default:
          'pui-text-navy pui-bg-whitish hover1:pui-bg-navy-opacity-4 hover1:pui-text-navy',
        // navy: "pui-text-whitish pui-bg-gradient-to-b pui-from-navy pui-to-sapphire hover:pui-from-sapphire hover:pui-to-navy",
        navy: 'pui-text-whitish pui-primary-gradient',
      },
      size: {
        1: 'pui-sm:col-span-1',
        2: 'pui-sm:col-span-2',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 1,
    },
  }
)

const descVariants = cva('', {
  variants: {
    variant: {
      default: 'pui-text-navy-opacity-60',
      navy: 'pui-text-whitish-opacity-60',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

export interface ProductCardButtonProps
  extends ButtonTextPropsWithoutHTMLAttributes {
  href?: string
  target?: '_blank' | '_self'
  icon?: ButtonTextIconName
  download?: boolean
}

export interface ProductCardProps
  extends React.HTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof productCardVariants> {
  title: string
  desc: string
  icon: string
  link?: string
  size?: 1 | 2
  buttons?: ProductCardButtonProps[]
}

export interface ProductCardPropsWithoutHtmlAttributes
  extends Omit<ProductCardProps, keyof React.HTMLAttributes<HTMLDivElement>> {
  title: string
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  desc,
  icon,
  link,
  variant,
  size,
  buttons,
}) => {
  const LinkWrapper = getAdapter('LinkWrapper')
  const ImageWrapper = getAdapter('ImageWrapper')

  let component = (
    <div className={cn(productCardVariants({ variant, size }))}>
      <div className="pui-rounded-lg pui-p-4 pui-bg-turquoise-opacity-20">
        <ImageWrapper
          src={icon}
          alt={`Изображение для ${title}`}
          width={32}
          height={32}
          className="pui-object-contain"
        />
      </div>
      <div className="pui-space-y-2">
        <Heading level={5} className="pui-mt-4 pui-mb-2">
          {title}
        </Heading>
        <Text variant="small-body" className={cn(descVariants({ variant }))}>
          {desc}
        </Text>
      </div>
      {/* TODO: here is the button, should be a link */}

      {!(buttons && buttons.length) && (
        <ButtonText
          icon="arrowRight"
          variant={variant === 'navy' ? 'white' : 'default'}
        >
          Подробнее
        </ButtonText>
      )}

      {buttons && (
        <div className="pui-flex pui-space-x-3">
          {buttons?.map((button, index) => (
            <div key={index}>
              <ButtonText
                variant={variant === 'navy' ? 'white' : 'default'}
                icon={button.icon}
                asChild
              >
                <a
                  href={button.href}
                  target={button.target || '_self'}
                  download={button.download}
                >
                  {button.text}
                </a>
              </ButtonText>
              {/* <ButtonSecondary asChild variant={"outline"}>
                <a href={button.href} target={button.target}>
                  {button.text}
                </a>
              </ButtonSecondary> */}
            </div>
          ))}
        </div>
      )}
    </div>
  )

  if (link) {
    component = (
      <LinkWrapper
        href={link}
        className={cn(
          'pui-relative pui-transition-all pui-bottom-0 hover:pui-bottom-2 pui-transform pui-duration-300 pui-border pui-border-transparent pui-rounded-lg hover1:pui-border-navy-opacity-16',
          size === 2 ? 'pui-sm:col-span-2' : 'pui-sm:col-span-1'
        )}
      >
        {component}
      </LinkWrapper>
    )
  }

  return component
}

export default ProductCard
