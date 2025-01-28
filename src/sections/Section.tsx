import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils/cn'
import Heading from '@/components/core/typography/Heading'
import Text from '@/components/core/typography/Text'
import ButtonPrimary from '@/components/ui/button/ButtonPrimary'

const sectionVariants = cva('pui-space-y-12', {
  variants: {
    variant: {
      default: 'pui-py-[120px]',
      muted: 'pui-bg-grey-2 pui-py-[88px] pui-px-6',
    },
    corners: {
      default: 'pui-rounded-2xl',
      onlyTop: 'pui-rounded-t-2xl',
      onlyBottom: 'pui-rounded-b-2xl',
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
    'pui-container',
    withTopMargin && 'pui-mt-6',
    withBottomMargin && 'pui-mb-6',
  ]
    .filter(Boolean)
    .map((item) => item)
    .join(' ')
    .trim()

  return (
    <section className={sectionClasses}>
      <div
        className={cn(
          sectionVariants({ variant, corners }),
          withoutTopPadding && 'pui-pt-0',
          withoutBottomPadding && 'pui-pb-0',
          className
        )}
      >
        {title && (
          <div className="pui-space-y-4 pui-flex pui-flex-col pui-items-center">
            <Heading level={2} className="pui-text-center pui-max-w-[900px]">
              {title}
            </Heading>
            {desc && (
              <Text className="pui-text-center pui-max-w-6xl">{desc}</Text>
            )}
          </div>
        )}
        {children}
        {moreLink && (
          <div className="pui-flex pui-justify-center">
            <ButtonPrimary href={moreLink}>{moreText}</ButtonPrimary>
          </div>
        )}
      </div>
    </section>
  )
}

export default Section
