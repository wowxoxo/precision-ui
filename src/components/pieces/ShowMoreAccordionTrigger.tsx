import { AccordionTrigger } from '../ui/accordion'
import React from 'react'

interface ShowMoreAccordionTriggerProps {
  children: React.ReactNode
}

const ShowMoreAccordionTrigger: React.FC<ShowMoreAccordionTriggerProps> = ({
  children,
}) => {
  return (
    <AccordionTrigger
      icons="arrows"
      className="border-none flex-initial flex-row-reverse1 gap-2 [&[data-state=open]]:bg-whitish1 [&>.icon-wrapper>svg]:hover:bg-whitish [&[data-state=open]>.icon-wrapper>svg]:hover:bg-navy-opacity-81 [&>.icon-wrapper>svg]:rounded-3xl  11 bg-whitish p-2 pr-2 pl-8 rounded-full hover:bg-navy-opacity-4"
    >
      {children}
    </AccordionTrigger>
  )
}

export default ShowMoreAccordionTrigger
