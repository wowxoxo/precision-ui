import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'
import React from 'react'
import { ScrollArea } from './scroll-area'
import { cn } from '@/lib/utils/cn'

export interface ComboboxOption {
  value: string
  label: string
}

export interface ComboboxProps {
  options: ComboboxOption[]
  defaultValue?: string
  placeholder?: string
  searchPlaceholder?: string
  buttonClassName?: string
  popoverContentClassName?: string
  commandClassName?: string
  onSelect: (value: string) => void
  iconComponent?: React.ReactNode
}

export const Combobox: React.FC<ComboboxProps> = ({
  options,
  defaultValue = '',
  placeholder = 'Select an option...',
  searchPlaceholder = 'Search...',
  buttonClassName = 'w-[200px] justify-between',
  popoverContentClassName = 'w-[200px] p-0',
  commandClassName = '',
  onSelect,
  iconComponent,
}) => {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState(defaultValue)

  const handleSelect = (currentValue: string) => {
    const newValue = currentValue === value ? '' : currentValue
    setValue(newValue)
    onSelect(newValue)
    setOpen(false)
  }

  return (
    <Popover open={open} onOpenChange={setOpen} modal={true}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn('justify-between px-4 py-2', buttonClassName)}
        >
          {value
            ? options.find((option) => option.value === value)?.label
            : placeholder}
          {iconComponent}
        </Button>
      </PopoverTrigger>
      <PopoverContent className={cn(popoverContentClassName)}>
        <Command className={cn(commandClassName)}>
          <CommandInput placeholder={searchPlaceholder} className="h-9" />
          <CommandList>
            <ScrollArea
              className={cn(
                'max-h-[calc(100dvh-1rem)]',
                options.length > 12 ? 'h-96' : ''
              )}
            >
              <div className="p-0">
                <CommandEmpty>Результаты не найдены.</CommandEmpty>
                <CommandGroup>
                  {options.map((option) => (
                    <CommandItem
                      key={option.value}
                      value={option.value}
                      onSelect={() => handleSelect(option.value)}
                    >
                      {option.label}
                      <Check
                        className={cn(
                          'ml-auto',
                          value === option.value ? 'opacity-100' : 'opacity-0'
                        )}
                      />
                    </CommandItem>
                  ))}
                </CommandGroup>
              </div>
            </ScrollArea>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
