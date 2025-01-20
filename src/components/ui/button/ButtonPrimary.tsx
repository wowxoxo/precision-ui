import React from 'react'
import { Button } from './button'
import { ArrowRight16X16 } from '@iit/precision-ui-icons'

import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils/cn'

const buttonVariants = cva(
  'bg-white text-navy hover:bg-whitish-opacity-80 cursor-pointer',
  {
    variants: {
      theme: {
        default: '',
        opacity: 'bg-whitish-opacity-16 text-white hover:bg-whitish-opacity-24',
        sapphire: 'bg-sapphire text-white hover:bg-sapphire-hover',
      },
      size: {
        default: 'h-14 px-8 py-4 pr-2 gap-8 group',
        defaultWithoutIcon: 'h-14 px-4 py-4',
      },
    },
    defaultVariants: {
      theme: 'default',
      size: 'default',
    },
  }
)

const arrowContainerVariants = cva(
  'rounded-full bg-navy-opacity-4 h-10 w-10 inline-flex items-center justify-center group-hover:bg-transparent duration-200',
  {
    variants: {
      theme: {
        default: '',
        opacity: 'bg-whitish-opacity-8',
        sapphire: 'bg-whitish-opacity-32',
      },
      iconDirection: {
        default: '',
        down: 'rotate-90',
      },
    },
    defaultVariants: {
      theme: 'default',
      iconDirection: 'default',
    },
  }
)

interface ArrowContainerPropsToButton {
  iconDirection?: VariantProps<typeof arrowContainerVariants>['iconDirection']
}

export interface ButtonPrimaryProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants>,
    ArrowContainerPropsToButton {
  className?: string
  linkClassName?: string
  children?: React.ReactNode
  // as?: 'button' | 'a'
  href?: string
  asChild?: boolean
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
  className,
  linkClassName,
  children,
  theme,
  iconDirection,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  size,
  href,
  // asChild = false,
  ...props
}) => {
  const containerStyles = 'flex justify-between items-center gap-8 w-full'
  if (href) {
    return (
      <a href={href} className={linkClassName}>
        <Button className={cn(buttonVariants({ theme, className }))} {...props}>
          <div className={containerStyles}>
            {children}
            <div
              className={cn(arrowContainerVariants({ theme, iconDirection }))}
            >
              <ArrowRight16X16 />
            </div>
          </div>
        </Button>
      </a>
    )
  }

  return (
    <Button
      className={cn(buttonVariants({ theme, className }))}
      asChild
      {...props}
    >
      <div className={containerStyles}>
        {children}
        <div className={cn(arrowContainerVariants({ theme, iconDirection }))}>
          <ArrowRight16X16 />
        </div>
      </div>
    </Button>
  )
}

export default ButtonPrimary
