import * as React from 'react'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'

import { cn } from '@/lib/utils/cn'

const TooltipProvider = TooltipPrimitive.Provider

const Tooltip = TooltipPrimitive.Root

const TooltipTrigger = TooltipPrimitive.Trigger

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      'pui-z-50 pui-overflow-hidden pui-rounded-md pui-border pui-bg-popover pui-px-3 pui-py-1.5 pui-text-sm pui-text-popover-foreground pui-shadow-md pui-animate-in pui-fade-in-0 pui-zoom-in-95 data-[state=closed]:pui-animate-out data-[state=closed]:pui-fade-out-0 data-[state=closed]:pui-zoom-out-95 data-[side=bottom]:pui-slide-in-from-top-2 data-[side=left]:pui-slide-in-from-right-2 data-[side=right]:pui-slide-in-from-left-2 data-[side=top]:pui-slide-in-from-bottom-2',
      className
    )}
    {...props}
  />
))
TooltipContent.displayName = TooltipPrimitive.Content.displayName

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
