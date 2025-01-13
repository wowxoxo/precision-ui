import {
  ArrowSliderNext16X16,
  ArrowSliderPrev16X16,
  LessLink16X16,
  MoreLink16X16,
} from '@iit/precision-ui-icons'
import { ThumbsDown, ThumbsUp } from 'lucide-react'

import React from 'react'

const DEFAULT_ICON_SIZE = '1em'

export type IconName =
  | 'chevronLeft'
  | 'chevronRight'
  | 'plus'
  | 'minus'
  | 'like'
  | 'dislike'

// TODO: move to separate file
// type IconMap = {
//   [key in IconName]: (props: {
//     width?: number | string
//     height?: number | string
//   }) => React.ReactElement
// }

interface IconProps {
  width?: number | string
  height?: number | string
}

const generateIconMap = (
  icons: Record<IconName, React.ComponentType<React.SVGProps<SVGSVGElement>>>
) => {
  return Object.keys(icons).reduce<
    Record<IconName, (props: IconProps) => React.ReactElement>
  >((acc, key) => {
    acc[key as IconName] = ({
      width = DEFAULT_ICON_SIZE,
      height = DEFAULT_ICON_SIZE,
    }: IconProps) =>
      React.createElement(icons[key as IconName], { width, height })
    return acc
  }, {} as Record<IconName, (props: IconProps) => React.ReactElement>)
}

const icons: Record<
  IconName,
  React.ComponentType<React.SVGProps<SVGSVGElement>>
> = {
  chevronLeft: ArrowSliderPrev16X16,
  chevronRight: ArrowSliderNext16X16,
  plus: MoreLink16X16,
  minus: LessLink16X16,
  like: ThumbsUp,
  dislike: ThumbsDown,
}

const iconMap = generateIconMap(icons)
export const iconDefiner = (
  icon?: IconName,
  width?: number | string,
  height?: number | string
): React.ReactElement => {
  if (icon) {
    const selectedIcon = iconMap[icon]
    if (selectedIcon) {
      return selectedIcon({ width, height })
    }
  }
  return <></>
}
