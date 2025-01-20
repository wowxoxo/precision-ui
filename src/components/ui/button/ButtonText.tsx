import React from 'react'
import { Button } from './button'
import {
  ArrowLinkRight16X16,
  MoreLink16X16,
  LessLink16X16,
} from '@iit/precision-ui-icons'

import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils/cn'
import { ArrowDownToLine } from 'lucide-react'

const buttonVariants = cva('bg-link-gradient-container hover:cursor-pointer', {
  variants: {
    variant: {
      default: 'text-navy',
      white: 'text-white',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

const iconContainerVariants = cva('rounded-full p-[5px]', {
  variants: {
    variant: {
      default: 'bg-navy-opacity-4',
      // default: "bg-red-500",
      white: 'bg-whitish-opacity-8',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

const textContainerVariants = cva('', {
  variants: {
    variant: {
      default: 'bg-link-gradient',
      white: 'bg-link-white-gradient',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

export type ButtonTextIconName = 'arrowRight' | 'plus' | 'minus' | 'download'

const iconDefiner = (icon?: ButtonTextIconName) => {
  switch (icon) {
    case 'arrowRight':
      return <ArrowLinkRight16X16 />

    case 'plus':
      return <MoreLink16X16 />

    case 'minus':
      return <LessLink16X16 />

    case 'download':
      return <ArrowDownToLine size={18} />

    default:
      return null
  }
}

interface NewProps {
  className?: string
  children?: React.ReactNode
  icon?: ButtonTextIconName
  asChild?: boolean
}

export interface ButtonTextProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants>,
    NewProps {}

export interface ButtonTextPropsWithoutHTMLAttributes
  extends Omit<NewProps, 'children' | 'className'> {
  text: string
}

const ButtonText: React.FC<ButtonTextProps> = ({
  className,
  children,
  variant,
  icon,
  // asChild = false,
  ...props
}) => {
  return (
    <Button
      className={cn(buttonVariants({ variant, className }))}
      asChild
      {...props}
    >
      <div className="gap-2 flex items-center">
        {icon && (
          <div className={cn(iconContainerVariants({ variant }))}>
            {iconDefiner(icon)}
          </div>
        )}
        <div className={cn(textContainerVariants({ variant }))}>{children}</div>
      </div>
    </Button>
  )
}

export default ButtonText
