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
  'group p-6 rounded-lg min-h-[300px] flex flex-col justify-between gap-12 items-start relative hover:scale1-[1.005] h-full',
  {
    variants: {
      variant: {
        default:
          'text-navy bg-whitish hover1:bg-navy-opacity-4 hover1:text-navy',
        // navy: "text-whitish bg-gradient-to-b from-navy to-sapphire hover:from-sapphire hover:to-navy",
        navy: 'text-whitish primary-gradient',
      },
      size: {
        1: 'sm:col-span-1',
        2: 'sm:col-span-2',
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
      default: 'text-navy-opacity-60',
      navy: 'text-whitish-opacity-60',
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
  target?: '_blank' | '_self'
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
  target,
  variant,
  size,
  buttons,
}) => {
  const LinkWrapper = getAdapter('LinkWrapper')
  const ImageWrapper = getAdapter('ImageWrapper')

  let component = (
    <div className={cn(productCardVariants({ variant, size }), 'h-full')}>
      <div className="rounded-lg p-4 bg-turquoise-opacity-20">
        <ImageWrapper
          src={icon}
          alt={`Изображение для ${title}`}
          width={32}
          height={32}
          className="object-contain"
        />
      </div>
      <div className="space-y-2">
        <Heading level={5} className="mt-4 mb-2">
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
        <div className="flex space-x-3">
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
        target={target}
        className={cn(
          'block h-full relative transition-all bottom-0 hover:bottom-2 transform duration-300 border border-transparent rounded-lg hover1:border-navy-opacity-16',
          size === 2 ? 'sm:col-span-2' : 'sm:col-span-1'
        )}
      >
        {component}
      </LinkWrapper>
    )
  }

  return component
}

export default ProductCard
