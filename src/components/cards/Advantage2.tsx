import React, { Fragment } from 'react'
import { Tag, TagItemProps } from '../ui/Tag'

import { ButtonText } from '../ui/button'
import Heading from '../core/typography/Heading'
import SafeHtmlRenderer from '../SafeHtml'
import Text from '../core/typography/Text'
import { cn } from '@/lib/utils/cn'
import { getAdapter } from '@/Adapters'

export interface Advantage2Props {
  title: string
  desc?: string
  icon?: string
  tags: TagItemProps[]
  link?: string
  size?: 1 | 2
}

const Advantage2: React.FC<Advantage2Props> = ({
  title,
  desc,
  icon,
  tags,
  link,
  size,
}) => {
  const sizeCls = size === 2 ? 'sm:col-span-2' : 'sm:col-span-1'
  const classes = `${sizeCls} p-6 bg-whitish rounded-lg h-full`

  const LinkWrapper = getAdapter('LinkWrapper')
  const ImageWrapper = getAdapter('ImageWrapper')

  const component = (
    <Fragment>
      <div className="flex space-x-2">
        {tags.map((tag, index) => (
          <Tag key={index} variant={tag.color}>
            {tag.title}
          </Tag>
        ))}
      </div>

      {icon && (
        <div className="flex justify-center mt-12">
          <ImageWrapper
            src={icon}
            alt={`Изображение для ${title}`}
            width={64}
            height={64}
            // className="object-contain"
          />
        </div>
      )}

      <div className="space-y-2 mt-[88px]">
        <Heading level={4} as="div">
          {title}
        </Heading>
        {desc && (
          <Text variant="small-body" className="text-navy-opacity-60" as="div">
            <SafeHtmlRenderer html={desc} className="inline" />
          </Text>
        )}
      </div>
    </Fragment>
  )

  if (link) {
    return (
      <LinkWrapper
        href={link}
        className={cn(
          classes,
          'flex flex-col h-full justify-between items-start transition-all bottom-0 hover:bottom-1 transform duration-300 relative'
        )}
      >
        <div>{component}</div>
        {/* TODO: here is the button, should be a link */}
        <ButtonText
          icon="arrowRight"
          className="mt-6"
          // variant={variant === "navy" ? "white" : "default"}
        >
          Подробнее
        </ButtonText>
      </LinkWrapper>
    )
  }

  return <div className={classes}>{component}</div>
}

export default Advantage2
