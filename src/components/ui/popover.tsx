import * as PopoverPrimitive from '@radix-ui/react-popover'
import * as React from 'react'

import { cn } from '@/lib/utils/cn'

const Popover = PopoverPrimitive.Root

const PopoverTrigger = PopoverPrimitive.Trigger

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = 'center', sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        'pui-z-50 pui-w-72 pui-rounded-md pui-border pui-bg-popover pui-p-4 pui-text-popover-foreground pui-shadow-md pui-outline-none data-[state=open]:pui-animate-in data-[state=closed]:pui-animate-out data-[state=closed]:pui-fade-out-0 data-[state=open]:pui-fade-in-0 data-[state=closed]:pui-zoom-out-95 data-[state=open]:pui-zoom-in-95 data-[side=bottom]:pui-slide-in-from-top-2 data-[side=left]:pui-slide-in-from-right-2 data-[side=right]:pui-slide-in-from-left-2 data-[side=top]:pui-slide-in-from-bottom-2',
        className
      )}
      {...props}
    />
  </PopoverPrimitive.Portal>
))
PopoverContent.displayName = PopoverPrimitive.Content.displayName

export { Popover, PopoverTrigger, PopoverContent }
