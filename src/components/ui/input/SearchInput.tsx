import React, { useEffect, useRef, useState } from 'react'

import { Button } from '../button'
import { Close16X16 } from '@iit/precision-ui-icons'
import { Input } from '@/components/ui/input'
import { SearchIcon } from 'lucide-react'

interface SearchInputProps {
  id?: string
  placeholder?: string
  className?: string
  value?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const SearchInput: React.FC<SearchInputProps> = ({
  id,
  placeholder,
  className,
  value = '',
  onChange,
  ...props
}) => {
  const [inputValue, setInputValue] = useState(value)
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
  }

  return (
    <div className="pui-relative pui-w-full pui-max-w-md">
      {/* TODO: replace with icon from icon lib */}
      <SearchIcon className="pui-absolute pui-left-3 pui-top-1/2 -pui-translate-y-1/2 pui-h-5 pui-w-5 pui-text-muted-foreground" />
      <Input
        ref={inputRef}
        id={id}
        placeholder={placeholder}
        className={`pui-w-full pui-pl-10 pui-pr-10 ${className}`}
        value={inputValue}
        onChange={handleInputChange}
        {...props}
      />
      <Button
        type="button"
        variant="ghost"
        size="icon"
        className="pui-absolute pui-right-3 pui-top-1/2 -pui-translate-y-1/2 pui-h-5 pui-w-5 pui-text-muted-foreground pui-bg-navy-opacity-8 pui-p-0 hover:pui-bg-navy pui-group"
        onClick={handleClearClick}
        style={{ display: inputValue ? 'block' : 'none' }}
      >
        {/* <XIcon className="h-4 w-4 left-[2px] top-0 relative group-hover:text-whitish" /> */}
        <Close16X16 className="pui-h-[10px] pui-w-[10px] pui-left-[5px] pui-top-0 pui-relative pui-group-hover:text-whitish" />
        <span className="sr-only">Очистить</span>
      </Button>
    </div>
  )
}

export default SearchInput
