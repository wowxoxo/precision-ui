import * as React from 'react'

import { VariantProps, cva } from 'class-variance-authority'

import { cn } from '@/lib/utils/cn'

const textareaVariants = cva(
  'flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible0:ring-2 focus-visible0:ring-ring focus-visible0:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-red-500',
  {
    variants: {
      variant: {
        default:
          'bg-navy-opacity-4 text-navy focus:border-navy hover:bg-navy-opacity-8 border-b-navy-opacity-32 aria-invalid:bg-red-50',
        blue: 'bg-whitish-opacity-8 text-white focus:border-white hover:bg-whitish-opacity-16 border-b-whitish-opacity-32',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {
  // className?: string
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, variant, maxLength, value, onChange, ...props }, ref) => {
    const [charCount, setCharCount] = React.useState(
      typeof value === 'string' ? value.length : 0
    )

    React.useEffect(() => {
      if (typeof value === 'string') {
        setCharCount(value.length)
      }
    }, [value])

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const newValue = e.target.value
      setCharCount(newValue.length)
      if (onChange) {
        onChange(e)
      }
    }

    return (
      <div className="relative w-full">
        <textarea
          className={cn(textareaVariants({ variant, className }))}
          ref={ref}
          maxLength={maxLength}
          value={value}
          onChange={handleChange}
          {...props}
        />
        {maxLength !== undefined && (
          <span
            className={cn(
              'absolute bottom-1 right-2 text-xs pointer-events-none',
              variant === 'blue'
                ? 'text-white opacity-70'
                : 'text-navy opacity-70'
            )}
          >
            {charCount}/{maxLength}
          </span>
        )}
      </div>
    )
  }
)

Textarea.displayName = 'Textarea'

export { Textarea }
