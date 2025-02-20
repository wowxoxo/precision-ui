import * as AccordionPrimitive from '@radix-ui/react-accordion'
import * as React from 'react'

import { ArrowDown, ArrowUp, Minus, Plus } from 'lucide-react'

import { cn } from '@/lib/utils/cn'

// import { LessLink16X16, MoreLink16X16 } from "@iit/precision-ui-icons";

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn('border-b1 p-2 bg-whitish  rounded-2xl', className)}
    {...props}
  />
))
AccordionItem.displayName = 'AccordionItem'

interface AccordionTriggerProps {
  icons?: 'math' | 'arrows'
  size?: 'default' | 'small'
}

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> &
    AccordionTriggerProps
>(
  (
    { className, children, icons = 'math', size = 'default', ...props },
    ref
  ) => {
    const iconSize = size === 'default' ? 'h-10 w-10 p-2' : 'w-10 h-10 p-[10px]'
    return (
      <AccordionPrimitive.Header className="flex">
        <AccordionPrimitive.Trigger
          ref={ref}
          className={cn(
            'flex flex-1 items-center text-left justify-between py1-4 p-4 typo_variant_body transition-all  [&[data-state=open]>svg]:rotate-1801 [&[data-state=open]>.icon-wrapper>.plus]:hidden [&[data-state=open]>.icon-wrapper>.minus]:block text-navy  duration-200 [&[data-state=open]]:bg-navy-opacity-4 rounded-xl hover:bg-navy-opacity-41 border border-transparent hover:border-navy-opacity-16',
            className
          )}
          {...props}
        >
          {children && (
            <span className="text-wrapper transition-all pr-3 leading-none">
              {children}
            </span>
          )}
          {icons === 'math' && (
            <span className="relative icon-wrapper">
              <Plus
                className={`${iconSize} bg-navy-opacity-4 rounded-lg shrink-0 transition-all duration-200 visible plus`}
              />
              <Minus
                className={`${iconSize} bg-navy-opacity-4 rounded-lg shrink-0 transition-all duration-200 hidden minus`}
              />
              {/* <MoreLink16X16 className="h-4 w-4 shrink-0 transition-transform duration-200 visible plus" /> */}
              {/* <LessLink16X16 className="h-4 w-4 shrink-0 transition-transform duration-200 hidden minus" /> */}
            </span>
          )}
          {icons === 'arrows' && (
            <span className="relative icon-wrapper">
              <ArrowDown
                className={`${iconSize} bg-navy-opacity-4 rounded-lg shrink-0 transition-all duration-200 visible plus`}
              />
              <ArrowUp
                className={`${iconSize} bg-navy-opacity-4 rounded-lg shrink-0 transition-all duration-200 hidden minus`}
              />
            </span>
          )}
        </AccordionPrimitive.Trigger>
      </AccordionPrimitive.Header>
    )
  }
)
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

interface AccordionContentProps
  extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content> {
  withoutContent?: boolean
}

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  AccordionContentProps
>(({ className, children, withoutContent, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div
      className={cn(
        'px-4 py-6 pt-7 typo_variant_body',
        className,
        !withoutContent && 'content'
      )}
    >
      {children}
    </div>
  </AccordionPrimitive.Content>
))

AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
