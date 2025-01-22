import { Input } from '@/components/ui/input'
import { InputVariant } from './types'
import { Label } from '@/components/ui/label'
import React from 'react'
import { useId } from 'react'

interface InputWithLabelProps {
  variant?: InputVariant
  label?: string
  type?: string
  id?: string
  placeholder?: string
  className?: string
}

export function InputWithLabel({
  variant = 'default',
  label,
  type = 'text',
  id,
  placeholder,
  className,
}: InputWithLabelProps) {
  const generatedId = useId()
  const inputId = id || generatedId

  const labelClasses =
    variant === 'default'
      ? 'group-focus-within:text-navy-opacity-40'
      : 'group-focus-within:text-whitish-opacity-60'

  return (
    <div className={`grid w-full items-center gap-1 group ${className}`}>
      {label && (
        <Label variant={variant} htmlFor={inputId} className={labelClasses}>
          {label}
        </Label>
      )}
      <Input
        variant={variant}
        type={type}
        id={inputId}
        placeholder={placeholder}
        className="focus:outline-none"
      />
    </div>
  )
}
