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
  variant?: 'default' | 'white'
}

const SearchInput: React.FC<SearchInputProps> = ({
  id,
  placeholder,
  className,
  value = '',
  onChange,
  variant = 'default',
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

  if (variant === 'white') {
    return (
      <div className="relative w-full max-w-md">
        {/* TODO: replace with icon from icon lib */}
        {/* <div className="bg-navy-opacity-16 p-1 rounded-full">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        </div> */}

        {/* <SearchIcon className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 text-muted-foreground bg-navy-opacity-8 p-3 rounded-full" /> */}
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 text-muted-foreground bg-navy-opacity-8 p-3 rounded-full"
        >
          <SearchIcon className="" />
        </Button>
        <Input
          ref={inputRef}
          id={id}
          placeholder={placeholder}
          className={`w-full pl-4 pr-16 ${className} bg-whitish rounded-full border-b-transparent h-14`}
          value={inputValue}
          onChange={handleInputChange}
          {...props}
        />
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="absolute right-14 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground bg-navy-opacity-8 p-0 hover:bg-navy group"
          onClick={handleClearClick}
          style={{ display: inputValue ? 'block' : 'none' }}
        >
          {/* <XIcon className="h-4 w-4 left-[2px] top-0 relative group-hover:text-whitish" /> */}
          <Close16X16 className="h-[10px] w-[10px] left-[5px] top-0 relative group-hover:text-whitish" />
          <span className="sr-only">Очистить</span>
        </Button>
      </div>
    )
  }

  return (
    <div className="relative w-full max-w-md">
      {/* TODO: replace with icon from icon lib */}
      <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
      <Input
        ref={inputRef}
        id={id}
        placeholder={placeholder}
        className={`w-full pl-10 pr-10 ${className}`}
        value={inputValue}
        onChange={handleInputChange}
        {...props}
      />
      <Button
        type="button"
        variant="ghost"
        size="icon"
        className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground bg-navy-opacity-8 p-0 hover:bg-navy group"
        onClick={handleClearClick}
        style={{ display: inputValue ? 'block' : 'none' }}
      >
        {/* <XIcon className="h-4 w-4 left-[2px] top-0 relative group-hover:text-whitish" /> */}
        <Close16X16 className="h-[10px] w-[10px] left-[5px] top-0 relative group-hover:text-whitish" />
        <span className="sr-only">Очистить</span>
      </Button>
    </div>
  )
}

export default SearchInput
