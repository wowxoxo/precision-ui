import React, { Fragment } from 'react'
import { Button } from './button'

import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils/cn'
import { iconDefiner, IconName } from '../icon'

const buttonVariants = cva(
  'pui-rounded-lg pui-p-[10px] pui-transition-all hover:pui-rounded-[24px]',
  {
    variants: {
      variant: {
        default: 'pui-text-navy pui-bg-navy-opacity-4',
        outline:
          'pui-text-navy pui-border pui-border-navy-opacity-32 hover:pui-bg-white',
        white:
          'pui-text-white pui-bg-whitish-opacity-8 hover:pui-bg-whitish-opacity-16',
        outlineWhite:
          'pui-text-white pui-border pui-border-whitish-opacity-32 hover:pui-bg-white hover:pui-text-navy',
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
