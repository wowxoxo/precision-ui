import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion'
import React, { useId } from 'react'

import Heading from '../core/typography/Heading'
import SafeHtmlRenderer from '../SafeHtml'
import { cn } from '@/lib/utils/cn'
import { getAdapter } from '@/Adapters'

export interface AdvantageWithAccordionProps {
  title: string
  desc?: string
  icon: string
  heightMode?: 'fit' | 'full'
  className?: string
}

const AdvantageWithAccordion: React.FC<AdvantageWithAccordionProps> = ({
  title,
  desc,
  icon,
  heightMode,
  className,
}) => {
  const uniqueId = useId()

  const heightModeClass =
    heightMode === 'full' ? 'h-full flex flex-col justify-between' : 'h-fit'

  const ImageWrapper = getAdapter('ImageWrapper')

  const image = (
    <div className="p-4 bg-turquoise-opacity-20 rounded-lg mb-6 inline-flex self-start">
      <ImageWrapper
        src={icon}
        alt={`Изображение для ${title}`}
        width={32}
        height={32}
        className="object-contain"
      />
    </div>
  )

  return (
    <div
      className={cn(
        `p-6 bg-whitish text-navy rounded-lg`,
        heightModeClass,
        className
      )}
    >
      {heightMode === 'full' ? (
        <div>
          {image}
          <Heading level={5} as="div" className="mb-5">
            {title}
          </Heading>
        </div>
      ) : (
        image
      )}

      <div className="space-y-6">
        {heightMode !== 'full' && (
          <Heading level={5} as="div">
            {title}
          </Heading>
        )}

        {desc && (
          <Accordion type="single" collapsible>
            <AccordionItem value={uniqueId} className="p-0">
              <AccordionContent className="p-0 pb-6 text-navy-opacity-60 typo_variant_small-body">
                <SafeHtmlRenderer html={desc} />
              </AccordionContent>
              <AccordionTrigger className="border-none flex-initial [&[data-state=open]]:bg-transparent p-0 [&>.icon-wrapper>svg]:hover:bg-navy-opacity-8"></AccordionTrigger>
            </AccordionItem>
          </Accordion>
        )}
      </div>
    </div>
  )
}

export default AdvantageWithAccordion
