import { BreadcrumbProps, Breadcrumbs } from '@/components/breadcrumbs'

import { ButtonPrimary } from '@/components/ui/button'
import { CommonButtonProps } from './common'
import Heading from '@/components/core/typography/Heading'
import React from 'react'
import SafeHtmlRenderer from '@/components/SafeHtml'
import SearchInputWithButton from '@/components/ui/input/SearchInputWithButton'
import Text from '@/components/core/typography/Text'
import { cn } from '@/lib/utils/cn'
import { cva } from 'class-variance-authority'
import { getAdapter } from '@/Adapters'

// import { SearchInput } from '@/components/ui/input'

const contentContainerVariants = cva('', {
  variants: {
    size: {
      default: 'pui-pb-32',
      medium: 'pui-pb-[116px]',
      small: 'pui-pb-10',
    },
  },
  defaultVariants: {
    size: 'default',
  },
})

const sliderContentVariants = cva('', {
  variants: {
    size: {
      default: 'pui-pb-[76px]',
      medium: 'pui-pb-6',
      small: 'pui-pb-6',
    },
  },
  defaultVariants: {
    size: 'default',
  },
})

const titleVariants = cva('', {
  variants: {
    size: {
      default: 'pui-mb-5',
      medium: '',
      small: '',
    },
  },
  defaultVariants: {
    size: 'default',
  },
})

export interface HeroProps {
  title: string
  desc?: string
  price?: string
  oldPrice?: string
  image?: string
  buttons?: CommonButtonProps[]
  childrenComponentType?: 'search-news'
  breadcrumbs?: BreadcrumbProps[]
  bottomButtons?: CommonButtonProps[]
  size?: 'default' | 'small' | 'medium'
  imageSize?: 'default' | 'small' | 'medium'
}

export const HeroButton: React.FC<CommonButtonProps> = ({
  text,
  href,
  target,
  anchor,
  theme,
  className,
  linkClassName,
  iconDirection,
}) => {
  if (href) {
    return (
      <ButtonPrimary
        href={href}
        theme={theme}
        className={className}
        linkClassName={linkClassName}
        iconDirection={iconDirection}
      >
        {text}
      </ButtonPrimary>
    )
  }

  if (anchor) {
    // TODO: the whole button is not clickable, but it should be
    return (
      <ButtonPrimary asChild theme={theme} iconDirection={iconDirection}>
        <a href={href}>{text}</a>
      </ButtonPrimary>
    )
  }

  if (target) {
    return (
      <ButtonPrimary asChild theme={theme} iconDirection={iconDirection}>
        <a href={href} target={target} rel="noopener noreferrer">
          {text}
        </a>
      </ButtonPrimary>
    )
  }

  return (
    <ButtonPrimary theme={theme} iconDirection={iconDirection}>
      {text}
    </ButtonPrimary>
  )
}

const childrenComponent = (componentType: 'search-news') => {
  switch (componentType) {
    case 'search-news':
      return (
        <div
          data-test-id="search-news"
          className="pui-w-full pui-h-full pui-flex pui-justify-center pui-items-center"
        >
          <SearchInputWithButton
            placeholder="Фильтр по тарифам"
            onChange={(event) => {
              console.log(event.target.value)
            }}
            className="pui-w-[456px]"
            // className="h-16 w-72 mt-2 bg-whitish"
          />
        </div>
      )

    default:
      return null
  }
}

const Hero: React.FC<HeroProps> = ({
  title,
  desc,
  price,
  oldPrice,
  image,
  buttons,
  childrenComponentType,
  breadcrumbs,
  bottomButtons,
  size = 'default',
  imageSize,
}) => {
  const imageWidth = (size: 'small' | 'medium' | 'default') => {
    switch (size) {
      case 'small':
        return 448
      case 'medium':
        return 552
      default:
        return 664
    }
  }
  const imageHeight = (size: 'small' | 'medium' | 'default') => {
    switch (size) {
      case 'small':
        return 336
      case 'medium':
        return 456
      default:
        return 544
    }
  }

  const ImageWrapper = getAdapter('ImageWrapper')

  return (
    <section className="pui-container pui-relative">
      <div className="pui-mx-auto pui-w-full pui-h-[606px]1 pui-bg-gradient-to-b pui-from-navy pui-to-sapphire pui-text-white pui-rounded-2xl pui-px-6 pui-relative pui-overflow-hidden">
        <div
          data-test-id="content-container"
          className={cn(
            'pui-w-full pui-relative pui-z-20 pui-grid pui-grid-cols-1 sm:pui-grid-cols-9 pui-pb-32',
            contentContainerVariants({ size })
          )}
        >
          {/* Navigation */}
          <div className="right-divider_with-tongue1 pui-col-span-2 pui-mt-6 pui-pr-4 pui-relative">
            {breadcrumbs && <Breadcrumbs list={breadcrumbs} />}
          </div>

          {/* Slider Content */}
          <div
            className={cn(
              'pui-w-auto pui-p-10 pui-pt-32 pui-flex pui-flex-col pui-justify-center pui-items-start pui-max-w-[800px] pui-col-span-7 pui-border-[1px] pui-border-t-0 pui-border-r-0 pui-border-b-0 pui-border-whitish-opacity-16 pui-border-solid',
              sliderContentVariants({ size })
            )}
          >
            <Heading
              level={1}
              as={'h1'}
              className={cn('pui-max-w-[694px]', titleVariants({ size }))}
            >
              <SafeHtmlRenderer html={title} />
            </Heading>

            <div className="pui-space-y-10">
              <Text
                variant="body"
                className={`pui-text-whitish-opacity-60 pui-max-w-[460px] ${
                  size === 'medium' ? 'pui-mt-5' : ''
                }`}
              >
                {desc}
              </Text>

              {(price || oldPrice) && (
                <div className="pui-flex pui-space-x-5 pui-items-baseline">
                  {oldPrice && (
                    <Text
                      variant="lead-text"
                      className="pui-text-whitish-opacity-32 pui-line-through"
                    >
                      {oldPrice}
                    </Text>
                  )}
                  <Heading level={3} as={'div'}>
                    {price}
                  </Heading>
                </div>
              )}

              {buttons && (
                <div className="pui-flex pui-gap-4 pui-mt-12">
                  {buttons.map((button) => (
                    <HeroButton key={button.text} {...button} />
                  ))}
                </div>
              )}
            </div>

            {childrenComponentType && (
              <div className="pui-mt-5">
                {childrenComponent(childrenComponentType)}
              </div>
            )}
          </div>
        </div>

        {bottomButtons && (
          <div className="pui-flex pui-gap-4 pui-absolute pui-bottom-8 pui-z-30 pui-w-[96%] pui-mx-auto">
            {bottomButtons.map((button) => (
              <HeroButton
                key={button.text}
                theme="opacity"
                {...button}
                className="pui-w-full pui-backdrop-blur-[8px]"
                linkClassName="pui-w-full"
              />
            ))}
          </div>
        )}

        {image && (
          <div className="pui-absolute pui-bottom-0 pui-right-6 floating">
            <ImageWrapper
              src={image}
              alt={title}
              // width={size === "default" ? 664 : 448}
              // height={size === "default" ? 544 : 336}
              width={imageWidth(imageSize || size)}
              height={imageHeight(imageSize || size)}
              objectFit="contain"
            />
          </div>
        )}
      </div>
    </section>
  )
}

export default Hero
