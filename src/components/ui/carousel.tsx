import React from 'react'
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from 'embla-carousel-react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

import { cn } from '@/lib/utils/cn'
// import { Button } from './button'

// Button here to reuse
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

const buttonVariants = cva(
  'pui-inline-flex pui-items-center pui-justify-center pui-whitespace-nowrap pui-rounded-full typo_variant_button pui-ring-offset-background pui-transition-colors focus-visible:pui-outline-none focus-visible:pui-ring-2 focus-visible:pui-ring-ring focus-visible:pui-ring-offset-2 pui-disabled:pointer-events-none pui-disabled:opacity-50 pui-disabled:cursor-not-allowed pui-border-none',
  {
    variants: {
      variant: {
        default: 'pui-bg-white pui-text-navy hover:pui-bg-navy-opacity-4',
        destructive:
          'pui-bg-destructive pui-text-destructive-foreground hover:pui-bg-destructive/90',
        outline:
          'pui-border pui-border-input pui-bg-background hover:pui-bg-accent hover:pui-text-accent-foreground',
        ghost: 'hover:pui-bg-accent hover:pui-text-accent-foreground',
        link: 'pui-text-primary pui-underline-offset-4 hover:pui-underline',
      },
      size: {
        default: 'pui-h-10 pui-px-4 pui-py-2',
        sm: 'pui-h-9 pui-rounded-md pui-px-3',
        lg: 'pui-h-11 pui-rounded-md pui-px-8',
        icon: 'pui-h-10 pui-w-10',
      },
    },
    defaultVariants: {
      // variant: "default",
      // size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

// end of Button

type CarouselApi = UseEmblaCarouselType[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]

type CarouselProps = {
  opts?: CarouselOptions
  plugins?: CarouselPlugin
  orientation?: 'horizontal' | 'vertical'
  setApi?: (api: CarouselApi) => void
}

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]
  api: ReturnType<typeof useEmblaCarousel>[1]
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
} & CarouselProps

const CarouselContext = React.createContext<CarouselContextProps | null>(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)

  if (!context) {
    throw new Error('useCarousel must be used within a <Carousel />')
  }

  return context
}

const Carousel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(
  (
    {
      orientation = 'horizontal',
      opts,
      setApi,
      plugins,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === 'horizontal' ? 'x' : 'y',
      },
      plugins
    )
    const [canScrollPrev, setCanScrollPrev] = React.useState(false)
    const [canScrollNext, setCanScrollNext] = React.useState(false)
    const [scrollProgress, setScrollProgress] = React.useState(0)

    const onScroll = React.useCallback(() => {
      if (!api) return
      const progress = api.scrollProgress()
      console.log('progress', progress)
      setScrollProgress(progress * 100) // Convert to percentage
    }, [api])

    const onSelect = React.useCallback(
      (api: CarouselApi) => {
        if (!api) return
        setCanScrollPrev(api.canScrollPrev())
        setCanScrollNext(api.canScrollNext())
        onScroll() // Update scroll progress when selection changes
      },
      [onScroll]
    )

    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev()
    }, [api])

    const scrollNext = React.useCallback(() => {
      api?.scrollNext()
    }, [api])

    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'ArrowLeft') {
          event.preventDefault()
          scrollPrev()
        } else if (event.key === 'ArrowRight') {
          event.preventDefault()
          scrollNext()
        }
      },
      [scrollPrev, scrollNext]
    )

    React.useEffect(() => {
      if (!api || !setApi) return
      setApi(api)
    }, [api, setApi])

    React.useEffect(() => {
      if (!api) return
      onSelect(api)
      api.on('reInit', onSelect)
      api.on('select', onSelect)
      api.on('scroll', onScroll) // Update on scroll events

      return () => {
        api?.off('reInit', onSelect)
        api?.off('select', onSelect)
        api?.off('scroll', onScroll)
      }
    }, [api, onSelect, onScroll])

    // const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(api)

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api: api,
          opts,
          orientation:
            orientation || (opts?.axis === 'y' ? 'vertical' : 'horizontal'),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
        }}
      >
        <div
          ref={ref}
          onKeyDownCapture={handleKeyDown}
          className={cn('pui-relative', className)}
          role="region"
          aria-roledescription="carousel"
          {...props}
        >
          {children}

          {/* Scroll Progress Indicator */}
          <div className="pui-relative pui-w-full pui-mt-4 pui-h-1 pui-bg-gray-300 pui-rounded-full pui-overflow-hidden md:pui-max-w-3xl pui-mx-auto">
            <div
              className="pui-absolute pui-top-0 pui-left-0 pui-h-full pui-w-full pui-bg-navy pui-rounded-full pui-transition-transform pui-duration-0"
              style={{
                transform: `translateX(${scrollProgress - 100}%)`,
              }}
            ></div>
          </div>

          <div className="embla__controls pui-max-w-sm pui-mx-auto pui-mt-6 pui-flex pui-justify-center pui-gap-4">
            <div className="embla__buttons">
              <CarouselPrevious className="pui-relative pui-left-auto pui-top-auto pui-right-auto pui-translate-y-0" />
              <CarouselNext className="pui-relative pui-left-auto pui-top-auto pui-right-auto pui-translate-y-0" />
            </div>

            <div className="embla__progress">
              <div
                className="embla__progress__bar"
                style={{ transform: `translate3d(${scrollProgress}%,0px,0px)` }}
              />
            </div>
          </div>

          {/* Dots: not used */}
          {/* <div className="embla__controls">
            <div className="embla__buttons">
              <CarouselPrevious className="relative left-auto top-auto right-auto translate-y-0" />
              <CarouselNext className="relative left-auto top-auto right-auto translate-y-0" />
            </div>

            <div className="embla__dots">
              {scrollSnaps.map((_, index) => (
                <DotButton
                  key={index}
                  onClick={() => onDotButtonClick(index)}
                  className={"embla__dot".concat(
                    index === selectedIndex ? " embla__dot--selected" : ""
                  )}
                />
              ))}
            </div>
          </div> */}
        </div>
      </CarouselContext.Provider>
    )
  }
)
Carousel.displayName = 'Carousel'

const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel()

  return (
    <div ref={carouselRef} className="pui-overflow-hidden">
      <div
        ref={ref}
        className={cn(
          'pui-flex',
          orientation === 'horizontal' ? '-pui-ml-4' : '-pui-mt-4 pui-flex-col',
          className
        )}
        {...props}
      />
    </div>
  )
})
CarouselContent.displayName = 'CarouselContent'

const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { orientation } = useCarousel()

  return (
    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={cn(
        'pui-min-w-0 pui-shrink-0 pui-grow-0 pui-basis-full',
        orientation === 'horizontal' ? 'pui-pl-4' : 'pui-pt-4',
        className
      )}
      {...props}
    />
  )
})
CarouselItem.displayName = 'CarouselItem'

const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = 'outline', size = 'icon', ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel()

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        'pui-absolute pui-h-8 pui-w-8 pui-rounded-full',
        orientation === 'horizontal'
          ? '-left-12 top-1/2 -translate-y-1/2'
          : '-top-12 left-1/2 -translate-x-1/2 rotate-90',
        className
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <ArrowLeft className="h-4 w-4" />
      <span className="sr-only">Previous slide</span>
    </Button>
  )
})
CarouselPrevious.displayName = 'CarouselPrevious'

const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = 'outline', size = 'icon', ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel()

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        'pui-absolute pui-h-8 pui-w-8 pui-rounded-full',
        orientation === 'horizontal'
          ? '-right-12 top-1/2 -translate-y-1/2'
          : '-bottom-12 left-1/2 -translate-x-1/2 rotate-90',
        className
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <ArrowRight className="h-4 w-4" />
      <span className="sr-only">Next slide</span>
    </Button>
  )
})
CarouselNext.displayName = 'CarouselNext'

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
}
