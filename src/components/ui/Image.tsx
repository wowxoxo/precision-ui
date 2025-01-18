import React from 'react'
import { getAdapter } from '@/Adapters'

const AppImage: React.FC<{
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
}> = ({ src, alt, width, height, className, ...props }) => {
  const ImageWrapper = getAdapter('ImageWrapper')

  return (
    <ImageWrapper
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      {...props}
    />
  )
}

export default AppImage
