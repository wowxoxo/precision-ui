import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils/cn'
import Heading from '@/components/core/typography/Heading'
import Text from '@/components/core/typography/Text'
import ButtonPrimary from '@/components/ui/button/ButtonPrimary'
import SafeHtmlRenderer from '@/components/SafeHtml'

const sectionVariants = cva('space-y-12', {
  variants: {
    variant: {
      default: 'py-[120px]',
      muted: 'bg-grey-2 py-[88px] px-6',
    },
    corners: {
      default: 'rounded-2xl',
      onlyTop: 'rounded-t-2xl',
      onlyBottom: 'rounded-b-2xl',
    },
  },
  defaultVariants: {
    variant: 'default',
    corners: 'default',
  },
})

export interface SectionProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof sectionVariants> {
  title: string
  sectionId?: string
  desc?: string
  children?: React.ReactNode
  moreLink?: string
  moreText?: string
  withTopMargin?: boolean
  withBottomMargin?: boolean
  withoutTopPadding?: boolean
  withoutBottomPadding?: boolean
  className?: string
}

const Section: React.FC<SectionProps> = ({
  title,
  sectionId,
  desc,
  children,
  moreLink,
  moreText = 'Подробнее',
  withTopMargin = false,
  withBottomMargin = false,
  withoutTopPadding = false,
  withoutBottomPadding = false,
  variant,
  corners,
  className,
}) => {
  const sectionClasses = [
    'container',
    withTopMargin && 'mt-6',
    withBottomMargin && 'mb-6',
  ]
    .filter(Boolean)
    .map((item) => item)
    .join(' ')
    .trim()

  return (
    <section className={sectionClasses} id={sectionId}>
      <div
        className={cn(
          sectionVariants({ variant, corners }),
          withoutTopPadding && 'pt-0',
          withoutBottomPadding && 'pb-0',
          className
        )}
      >
        {title && (
          <div className="space-y-4 flex flex-col items-center">
            <Heading level={2} className="text-center max-w-[900px]">
              {title}
            </Heading>
            {desc && (
              <Text className="text-center max-w-5xl" as={'div'}>
                <SafeHtmlRenderer html={desc} />
              </Text>
            )}
          </div>
        )}
        {children}
        {moreLink && (
          <div className="flex justify-center">
            <ButtonPrimary href={moreLink}>{moreText}</ButtonPrimary>
          </div>
        )}
      </div>
    </section>
  )
}

export default Section
