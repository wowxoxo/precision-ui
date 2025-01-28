import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils/cn'

const alertVariants = cva(
  'pui-relative pui-w-full pui-rounded-lg pui-border pui-p-4 [&>svg~*]:pui-pl-7 [&>svg+div]:pui-translate-y-[-3px] [&>svg]:pui-absolute [&>svg]:pui-left-4 [&>svg]:pui-top-4 [&>svg]:pui-text-foreground',
  {
    variants: {
      variant: {
        default: 'pui-bg-background pui-text-foreground',
        destructive:
          'pui-border-destructive/50 pui-text-destructive dark:pui-border-destructive [&>svg]:pui-text-destructive',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
))
Alert.displayName = 'Alert'

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn(
      'pui-mb-1 pui-font-medium pui-leading-none pui-tracking-tight',
      className
    )}
    {...props}
  />
))
AlertTitle.displayName = 'AlertTitle'

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('pui-text-sm [&_p]:pui-leading-relaxed', className)}
    {...props}
  />
))
AlertDescription.displayName = 'AlertDescription'

export { Alert, AlertTitle, AlertDescription }
