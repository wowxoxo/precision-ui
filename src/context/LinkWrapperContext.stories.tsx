import { LinkWrapperProvider, useLinkWrapper } from './LinkWrapperContext'

import { Meta } from '@storybook/react'
import React from 'react'

const SimpleLink: React.FC<{ href: string; children: React.ReactNode }> = ({
  href,
  children,
}) => {
  const LinkWrapper = useLinkWrapper()
  return <LinkWrapper href={href}>{children}</LinkWrapper>
}

const meta: Meta<typeof SimpleLink> = {
  title: 'Components/LinkWrapper',
  component: SimpleLink,
  decorators: [
    (Story) => (
      <LinkWrapperProvider
        LinkWrapper={({ href, children }) => (
          <a href={href} style={{ color: 'blue', textDecoration: 'underline' }}>
            {children}
          </a>
        )}
      >
        <Story />
      </LinkWrapperProvider>
    ),
  ],
}

export default meta

const Template = (args) => <SimpleLink {...args} />

export const Default = Template.bind({})
Default.args = {
  href: 'https://example.com',
  children: 'Visit Example',
}

export const AnotherExample = Template.bind({})
AnotherExample.args = {
  href: 'https://storybook.js.org',
  children: 'Visit Storybook',
}
