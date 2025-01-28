import React from 'react'
import { Button } from './button'
import { ArrowRight16X16 } from '@iit/precision-ui-icons'

import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils/cn'

const buttonVariants = cva(
  'pui-bg-white pui-text-navy hover:pui-bg-whitish-opacity-80 pui-cursor-pointer',
  {
    variants: {
      theme: {
        default: '',
        opacity:
          'pui-bg-whitish-opacity-16 pui-text-white hover:pui-bg-whitish-opacity-24',
        sapphire: 'pui-bg-sapphire pui-text-white hover:pui-bg-sapphire-hover',
      },
      size: {
        default: 'pui-h-14 pui-px-8 pui-py-4 pui-pr-2 pui-gap-8 pui-group',
        defaultWithoutIcon: 'pui-h-14 pui-px-4 pui-py-4',
      },
    },
    defaultVariants: {
      theme: 'default',
      size: 'default',
    },
  }
)

const arrowContainerVariants = cva(
  'pui-rounded-full pui-bg-navy-opacity-4 pui-h-10 pui-w-10 pui-inline-flex pui-items-center pui-justify-center pui-group-hover:bg-transparent pui-duration-200',
  {
    variants: {
      theme: {
        default: '',
        opacity: 'pui-bg-whitish-opacity-8',
        sapphire: 'pui-bg-whitish-opacity-32',
      },
      iconDirection: {
        default: '',
        down: 'pui-rotate-90',
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
  const containerStyles =
    'pui-flex pui-justify-between pui-items-center pui-gap-8 pui-w-full'
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
