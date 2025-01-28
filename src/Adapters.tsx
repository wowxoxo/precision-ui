type ComponentAdapter<TProps = unknown> = React.FC<TProps>

interface Adapters {
  LinkWrapper?: ComponentAdapter<{
    href: string
    children: React.ReactNode
    className?: string
    target?: string
    rel?: string
  }>
  ImageWrapper?: ComponentAdapter<{
    src: string
    alt: string
    width?: number
    height?: number
    className?: string
    objectFit?: string
  }>
  // CarouselWrapper?: ComponentAdapter<{
  //   items: unknown[]
  //   renderItem: (item: unknown, index: number) => React.ReactNode
  //   columns: number
  //   showControlsOnDesktop: boolean
  //   className?: string
  // }>
}

const adapters: Adapters = {}

export const registerAdapter = <T extends keyof Adapters>(
  key: T,
  adapter: NonNullable<Adapters[T]>
) => {
  adapters[key] = adapter
}

export const getAdapter = <T extends keyof Adapters>(
  key: T
): NonNullable<Adapters[T]> => {
  const adapter = adapters[key]
  if (!adapter) {
    throw new Error(`Adapter for ${key} is not registered.`)
  }
  return adapter
}
