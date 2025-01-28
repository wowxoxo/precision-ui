import '@/index.scss'

import { ImageWrapper } from '../src/decorators/ImageWrapper'
import { LinkWrapper } from '../src/decorators/LinkWrapper'
import type { Preview } from '@storybook/react'
import { registerAdapter } from '../src/Adapters'
import { withThemeByClassName } from '@storybook/addon-themes'

// import { CarouselWrapper } from '../src/decorators/CarouselWrapper'

registerAdapter('LinkWrapper', LinkWrapper)
registerAdapter('ImageWrapper', ImageWrapper)
// registerAdapter('CarouselWrapper', CarouselWrapper)

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      values: [
        // 👇 Default values
        { name: 'Dark', value: '#333' },
        { name: 'Light', value: '#F7F9F2' },
        // 👇 Add your own
        { name: 'Navy', value: '#012b79' },
      ],
      // 👇 Specify which background is shown by default
      default: 'Light',
    },
  },

  decorators: [
    withThemeByClassName({
      themes: {
        // nameOfTheme: 'classNameForTheme',
        light: '',
        dark: 'dark',
      },
      defaultTheme: 'light',
    }),
  ],
}

export default preview
