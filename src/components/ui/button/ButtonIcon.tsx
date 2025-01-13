import React, { Fragment } from 'react'
import { Button } from './button'

import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils/cn'
import { iconDefiner, IconName } from '../icon'

const buttonVariants = cva(
  'rounded-lg p-[10px] transition-all hover:rounded-[24px]',
  {
    variants: {
      variant: {
        default: 'text-navy bg-navy-opacity-4',
        outline: 'text-navy border border-navy-opacity-32 hover:bg-white',
        white: 'text-white bg-whitish-opacity-8 hover:bg-whitish-opacity-16',
        outlineWhite:
          'text-white border border-whitish-opacity-32 hover:bg-white hover:text-navy',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export interface ButtonIconProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  className?: string
  icon?: IconName
  width?: number | string
  height?: number | string
  children?: React.ReactNode
}

const ButtonIcon: React.FC<ButtonIconProps> = ({
  className,
  icon,
  variant,
  width,
  height,
  ...props
}) => {
  return (
    <Button className={cn(buttonVariants({ variant, className }))} {...props}>
      <Fragment>
        {iconDefiner(icon, width, height)} {props.children}
      </Fragment>
    </Button>
  )
}

export default ButtonIcon
