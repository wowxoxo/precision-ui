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
      default: 'sm:pb-32',
      medium: 'sm:pb-[116px]',
      small: 'sm:pb-10',
    },
  },
  defaultVariants: {
    size: 'default',
  },
})

const sliderContentVariants = cva('', {
  variants: {
    size: {
      default: 'sm:pb-[76px]',
      medium: 'sm:pb-6',
      small: 'sm:pb-6',
    },
  },
  defaultVariants: {
    size: 'default',
  },
})

const titleVariants = cva('', {
  variants: {
    contentContainerSize: {
      default: 'mb-5 lg:max-w-[700px]',
      medium: 'lg:max-w-[590px]',
      large: 'lg:max-w-5xl',
      // small: "",
    },
  },
  defaultVariants: {
    contentContainerSize: 'default',
  },
})

const descVariants = cva('', {
  variants: {
    contentContainerSize: {
      default: 'lg:max-w-[460px]',
      medium: 'lg:max-w-[370px]',
      large: 'lg:max-w-2xl',
      // small: "",
    },
  },
  defaultVariants: {
    contentContainerSize: 'default',
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
  contentContainerSize?: 'default' | 'medium' | 'large'
  imageSize?: 'default' | 'small' | 'medium'
  linesImage?: string
  onButtonClick?: (uniqId?: string) => void
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
  onClick,
}) => {
  if (href) {
    return (
      <ButtonPrimary
        href={href}
        theme={theme}
        className={cn(className)}
        linkClassName={linkClassName}
        iconDirection={iconDirection}
        target={target}
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
    <ButtonPrimary
      theme={theme}
      iconDirection={iconDirection}
      onClick={onClick}
      className={cn(className)}
    >
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
          className="w-full h-full flex justify-center items-center"
        >
          <SearchInputWithButton
            placeholder="Фильтр по тарифам"
            onChange={(event) => {
              console.log(event.target.value)
            }}
            className="w-[456px]"
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
  contentContainerSize,
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
  linesImage,
  onButtonClick,
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
    <section className="container relative">
      <div className="mx-auto w-full h-[606px]1 bg-gradient-to-b from-navy to-sapphire text-white rounded-2xl px-6 relative overflow-hidden">
        <div
          data-test-id="content-container"
          className={cn(
            'w-full relative z-20 grid grid-cols-1 sm:grid-cols-9 pb-12',
            contentContainerVariants({ size })
          )}
        >
          {/* Navigation */}
          <div className="right-divider_with-tongue1 col-span-2 mt-6 pr-4 relative hidden lg:block">
            {breadcrumbs && <Breadcrumbs list={breadcrumbs} />}
          </div>

          {/* Slider Content */}
          <div
            className={cn(
              'w-auto sm:p-10 pt-10 sm:pt-32 flex flex-col justify-center items-start col-span-7 border-[1px] border-t-0 border-r-0 border-b-0 border-l-0 lg:border-l-[1px] border-whitish-opacity-16 border-solid pb-4',
              sliderContentVariants({ size })
            )}
          >
            <Heading
              level={1}
              as={'h1'}
              className={cn('', titleVariants({ contentContainerSize }))}
            >
              <SafeHtmlRenderer html={title} />
            </Heading>

            <div className="space-y-10">
              <Text
                variant="body"
                className={cn(
                  descVariants({ contentContainerSize }),
                  'text-whitish-opacity-60 mt-5'
                )}
              >
                {desc}
              </Text>

              {(price || oldPrice) && (
                <div className="flex space-x-5 items-baseline">
                  {oldPrice && (
                    <Text
                      variant="lead-text"
                      className="text-whitish-opacity-32 line-through"
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
                <div className="flex gap-4 mt-12 w-full">
                  {buttons.map((button) => (
                    <HeroButton
                      key={button.text}
                      className="w-fit"
                      target={button.target}
                      {...button}
                      onClick={() => onButtonClick?.(button.uniqId)}
                    />
                  ))}
                </div>
              )}
            </div>

            {childrenComponentType && (
              <div className="mt-5">
                {childrenComponent(childrenComponentType)}
              </div>
            )}
          </div>
        </div>

        {bottomButtons && (
          <div className="flex gap-4 absolute bottom-8 z-30 w-[96%] mx-auto">
            {bottomButtons.map((button) => (
              <HeroButton
                key={button.text}
                theme="opacity"
                {...button}
                className="w-full backdrop-blur-[8px]"
                linkClassName="w-full"
                onClick={() => onButtonClick?.(button.uniqId)}
                // target={button.target}
                target="_blank"
              />
            ))}
          </div>
        )}

        {image && (
          <div className="hidden sm:block absolute bottom-0 right-6 floating">
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

        {linesImage && (
          <div className="absolute bottom-0 right-6 fadeLines">
            <ImageWrapper
              src={linesImage}
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
