import React, { useEffect, useRef, useState } from 'react'

import { Button } from '../button'
import { Close16X16 } from '@iit/precision-ui-icons'
import { Input } from '@/components/ui/input'
import { SearchIcon } from 'lucide-react'
import { cn } from '@/lib/utils/cn'

interface SearchInputWithButtonProps {
  id?: string
  placeholder?: string
  className?: string
  containerClassName?: string
  value?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void
  onClickSubmitButton?: () => void
  onClickClearButton?: () => void
  withoutBottomBorder?: boolean
}

const SearchInputWithButton: React.FC<SearchInputWithButtonProps> = ({
  id,
  placeholder,
  className,
  containerClassName,
  value = '',
  onChange,
  onKeyDown,
  onClickSubmitButton,
  onClickClearButton,
  withoutBottomBorder,
  ...props
}) => {
  const [inputValue, setInputValue] = useState(value)
  const [isHovered, setIsHovered] = useState(false) // Track hover state
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    setInputValue(value)
  }, [value])

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
    if (onChange) {
      onChange(event)
    }
  }

  const handleClearClick = () => {
    setInputValue('')
    if (inputRef.current) {
      inputRef.current.focus()
    }
    if (onChange) {
      onChange({
        target: { value: '' },
      } as React.ChangeEvent<HTMLInputElement>)
    }
    if (onClickClearButton) {
      onClickClearButton()
    }
  }

  return (
    <div
      className={cn(
        'pui-relative pui-w-full pui-max-w-2xl',
        containerClassName
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Input
        ref={inputRef}
        id={id}
        placeholder={placeholder}
        className={cn(
          'pui-w-full pui-pl-8 pui-pr-20 hover:pui-bg-navy-opacity-4-absolute pui-rounded-full pui-bg-whitish pui-h-14',
          className,
          withoutBottomBorder && 'pui-border-b pui-border-transparent'
        )}
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={onKeyDown}
        {...props}
      />
      <Button
        type="button"
        variant="ghost"
        size="icon"
        className={cn(
          'pui-absolute pui-right-14 pui-top-1/2 -pui-translate-y-1/2 pui-h-5 pui-w-5 pui-text-muted-foreground pui-p-0 hover:pui-bg-navy pui-group',
          isHovered ? 'pui-bg-white' : 'pui-bg-navy-opacity-8'
        )}
        onClick={handleClearClick}
        style={{ display: inputValue ? 'block' : 'none' }}
      >
        <Close16X16 className="pui-h-[10px] pui-w-[10px] pui-left-[5px] pui-top-0 pui-relative pui-text-navy pui-group-hover:text-whitish" />
        <span className="pui-sr-only">Очистить</span>
      </Button>

      <Button
        className={cn(
          'pui-absolute pui-right-2 pui-top-1/2 -pui-translate-y-1/2 pui-text-navy pui-h-10 pui-w-10 hover:pui-bg-navy pui-group/submit pui-disabled:pointer-events-auto pui-active:transform pui-active:scale-90',
          isHovered ? 'pui-bg-white' : 'pui-bg-navy-opacity-8'
        )}
        disabled={!inputValue}
        onClick={onClickSubmitButton || undefined}
      >
        <SearchIcon className="pui-h-4 pui-w-4 pui-group-hover/submit:text-whitish" />
      </Button>
    </div>
  )
}

export default SearchInputWithButton
