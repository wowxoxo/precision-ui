import React, { useEffect, useRef, useState } from "react";

import { Button } from "../button";
import { Close16X16 } from "@iit/precision-ui-icons";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { cn } from "@/lib/utils/cn";

interface SearchInputWithButtonProps {
  id?: string;
  placeholder?: string;
  className?: string;
  containerClassName?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onClickSubmitButton?: () => void;
  onClickClearButton?: () => void;
  withoutBottomBorder?: boolean;
}

const SearchInputWithButton: React.FC<SearchInputWithButtonProps> = ({
  id,
  placeholder,
  className,
  containerClassName,
  value = "",
  onChange,
  onKeyDown,
  onClickSubmitButton,
  onClickClearButton,
  withoutBottomBorder,
  ...props
}) => {
  const [inputValue, setInputValue] = useState(value);
  const [isHovered, setIsHovered] = useState(false); // Track hover state
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    if (onChange) {
      onChange(event);
    }
  };

  const handleClearClick = () => {
    setInputValue("");
    if (inputRef.current) {
      inputRef.current.focus();
    }
    if (onChange) {
      onChange({
        target: { value: "" },
      } as React.ChangeEvent<HTMLInputElement>);
    }
    if (onClickClearButton) {
      onClickClearButton();
    }
  };

  return (
    <div
      className={cn("relative w-full max-w-2xl", containerClassName)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Input
        ref={inputRef}
        id={id}
        placeholder={placeholder}
        className={cn(
          "w-full pl-8 pr-20 hover:bg-navy-opacity-4-absolute rounded-full bg-whitish h-14",
          className,
          withoutBottomBorder && "border-b border-transparent"
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
          "absolute right-14 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground p-0 hover:bg-navy group",
          isHovered ? "bg-white" : "bg-navy-opacity-8"
        )}
        onClick={handleClearClick}
        style={{ display: inputValue ? "block" : "none" }}
      >
        <Close16X16 className="h-[10px] w-[10px] left-[5px] top-0 relative text-navy group-hover:text-whitish" />
        <span className="sr-only">Очистить</span>
      </Button>

      <Button
        className={cn(
          "absolute right-2 top-1/2 -translate-y-1/2 text-navy h-10 w-10 hover:bg-navy group/submit disabled:pointer-events-auto active:transform active:scale-90",
          isHovered ? "bg-white" : "bg-navy-opacity-8"
        )}
        disabled={!inputValue}
        onClick={onClickSubmitButton || undefined}
      >
        <SearchIcon className="h-4 w-4 group-hover/submit:text-whitish" />
      </Button>
    </div>
  );
};

export default SearchInputWithButton;
