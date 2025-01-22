import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

import { Button } from '@/components/ui/button'
import { Info } from 'lucide-react'
import React from 'react'

interface InformerProps {
  content: string
}

const Informer = ({ content }: InformerProps) => {
  return (
    <TooltipProvider delayDuration={0}>
      <div className="hidden xl:block">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full group/informer h-8 w-8"
            >
              <Info className="w-5 h-5 text-navy-opacity-40 group-hover/informer:text-navy transition-colors" />
              <span className="sr-only">Warning</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <div>{content}</div>
          </TooltipContent>
        </Tooltip>
      </div>
      <div className="block xl:hidden">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full group/informer h-8 w-8"
            >
              <Info className="w-5 h-5 text-navy-opacity-40 group-hover/informer:text-navy transition-colors" />
              <span className="sr-only">Warning</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="px-3 py-1.5">
            <div>{content}</div>
          </PopoverContent>
        </Popover>
      </div>
    </TooltipProvider>
  )
}

export default Informer
