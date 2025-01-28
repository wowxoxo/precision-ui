import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import React, { useState } from 'react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

import { Button } from '@/components/ui/button'
import { Info } from 'lucide-react'

interface InformerProps {
  content: string
}

const Informer = ({ content }: InformerProps) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <TooltipProvider delayDuration={0}>
      <div className="pui-hidden xl:pui-block">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="pui-rounded-full pui-h-8 pui-w-8"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Info
                className={`pui-w-5 pui-h-5 pui-text-navy-opacity-40 ${
                  isHovered ? '!pui-text-navy' : ''
                } pui-transition-colors`}
              />
              <span className="pui-sr-only">Warning</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <div>{content}</div>
          </TooltipContent>
        </Tooltip>
      </div>
      <div className="pui-block xl:pui-hidden">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="pui-rounded-full pui-h-8 pui-w-8"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Info
                className={`pui-w-5 pui-h-5 pui-text-navy-opacity-40 ${
                  isHovered ? '!pui-text-navy' : ''
                } pui-transition-colors`}
              />
              <span className="pui-sr-only">Warning</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="pui-px-3 pui-py-1.5">
            <div>{content}</div>
          </PopoverContent>
        </Popover>
      </div>
    </TooltipProvider>
  )
}

export default Informer
