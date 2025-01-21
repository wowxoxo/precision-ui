import React from 'react'

export const ImageWrapper: React.FC<{
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  objectFit?: string
}> = ({ src, alt, width, height, className, ...props }) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      {...props}
    />
  )
}
