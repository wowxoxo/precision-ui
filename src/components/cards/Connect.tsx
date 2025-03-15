import { ButtonSecondary } from '../ui/button'
import { ConsultButtonProps } from '@/sections/common'
import Heading from '../core/typography/Heading'
import React from 'react'
import Text from '../core/typography/Text'
import { cn } from '@/lib/utils/cn'
import { getAdapter } from '@/Adapters'

interface Content {
  title: string
  content: string[]
}

export interface ConnectCardProps {
  topContent: Content
  bottomContent?: Content
  withLogo?: boolean
  className?: string
  size?: 1 | 2
  onClickConsultButton?: (uniqId?: string) => void
  buttons?: ConsultButtonProps[]
  uniqId?: string
}

const ConnectCard: React.FC<ConnectCardProps> = ({
  topContent,
  bottomContent,
  withLogo,
  className,
  size,
  onClickConsultButton,
  buttons,
  uniqId,
}) => {
  let sizeClass = ''
  switch (size) {
    case 1:
      sizeClass = 'col-span-1'
      break

    case 2:
      sizeClass = 'col-span-2' // FIXME: check - works in prod?
  }

  const ImageWrapper = getAdapter('ImageWrapper')

  return (
    <div
      className={cn(
        'bg-whitish p-6 rounded-lg flex flex-col justify-between relative',
        className,
        sizeClass
      )}
    >
      <div className="space-y-4">
        <Text variant="overline" className="text-navy-opacity-40">
          {topContent.title}
        </Text>
        <div className="space-y-2">
          {topContent.content.map((content, index) => (
            <Heading level={5} key={index} as="div">
              {content}
            </Heading>
          ))}
        </div>
      </div>

      {bottomContent && (
        <div className="space-y-1">
          <Heading level={6} as="div" className="text-navy-opacity-40">
            {bottomContent.title}
          </Heading>
          {bottomContent.content.map((content, index) => (
            <Text key={index} variant="small-body">
              {content}
            </Text>
          ))}
        </div>
      )}

      {buttons && (
        <div className="flex space-x-3">
          {buttons?.map((button, index) => (
            <div key={index}>
              {button.href ? (
                <ButtonSecondary asChild variant={'outline'}>
                  <a href={button.href} target={button.target}>
                    {button.text}
                  </a>
                </ButtonSecondary>
              ) : (
                <ButtonSecondary
                  onClick={() =>
                    button.isConsultButton
                      ? onClickConsultButton?.(uniqId)
                      : undefined
                  }
                >
                  {button.text}
                </ButtonSecondary>
              )}
            </div>
          ))}
        </div>
      )}

      {withLogo && (
        <div className="absolute right-6 top-6">
          <ImageWrapper
            src="/icons/comet.svg"
            alt="logo"
            width={25}
            height={20}
          />
        </div>
      )}
    </div>
  )
}

export default ConnectCard
