import React, { useId } from 'react'

import { InputVariant } from '../input/types'
import { Label } from '../label'
import { Textarea } from './Textarea'

interface TextareaWithLabelProps {
  variant?: InputVariant
  label?: string
  id?: string
  className?: string
  maxLength?: number
}

export function TextareaWithLabel({
  id,
  variant = 'default',
  label,
  className,
  maxLength,
}: TextareaWithLabelProps) {
  const generatedId = useId()
  const textareaId = id || generatedId

  const textareaClasses =
    variant === 'default'
      ? 'group-focus-within:text-navy-opacity-40'
      : 'group-focus-within:text-whitish-opacity-60'

  return (
    <div className={`grid w-full items-center gap-1 group ${className}`}>
      {label && (
        <Label
          variant={variant}
          htmlFor={textareaId}
          className={textareaClasses}
        >
          {label}
        </Label>
      )}

      <Textarea
        id={textareaId}
        variant={variant}
        maxLength={maxLength}
        className={`focus:outline-none ${textareaClasses}`}
      />
    </div>
  )
}
