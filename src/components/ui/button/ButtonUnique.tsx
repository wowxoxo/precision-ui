import React from 'react'
import { Button } from './button'
import { Login16X16, ServicesModal16X16 } from '@iit/precision-ui-icons'

import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils/cn'

const buttonVariants = cva('bg-link-gradient-container group cursor-pointer', {
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

const iconDefiner = (icon?: string) => {
  switch (icon) {
    case 'login':
      return <Login16X16 />

    case 'services':
      return <ServicesModal16X16 />

    default:
      return null
  }
}

export interface ButtonUniqueProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  className?: string
  children?: React.ReactNode
  icon?: string
  asChild?: boolean
}

const ButtonUnique: React.FC<ButtonUniqueProps> = ({
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
          <div className="group-hover:transform group-hover:scale-125 duration-200">
            {iconDefiner(icon)}
          </div>
        )}
        <div className={cn(textContainerVariants({ variant }))}>{children}</div>
      </div>
    </Button>
  )
}

export default ButtonUnique
