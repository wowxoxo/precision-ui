import { Button, ButtonProps } from './components/ui/button/button'
import ButtonIcon, { ButtonIconProps } from './components/ui/button/ButtonIcon'
import ButtonPrimary, {
  type ButtonPrimaryProps,
} from './components/ui/button/ButtonPrimary'
import ButtonSecondary, {
  type ButtonSecondaryProps,
} from './components/ui/button/ButtonSecondary'
import ButtonText, {
  type ButtonTextProps,
} from './components/ui/button/ButtonText'
import ButtonUnique, {
  type ButtonUniqueProps,
} from './components/ui/button/ButtonUnique'
import { AppLink } from './components/ui/Link'

export { Alert, AlertDescription, AlertTitle } from './components/ui/alert'

export { Button, type ButtonProps }
// export { ButtonIcon, type ButtonIconProps }
// export { ButtonPrimary, type ButtonPrimaryProps }
// export { ButtonSecondary, type ButtonSecondaryProps }
// export { ButtonText, type ButtonTextProps }
// export { ButtonUnique, type ButtonUniqueProps }

export { AppLink }

// context
// import {
//   useLinkWrapper,
//   LinkWrapperProvider,
// } from './context/LinkWrapperContext'
import withLinkWrapper from './hoc/withLinkWrapper'

// export { useLinkWrapper, LinkWrapperProvider }

export { withLinkWrapper }

import { LinkProvider, useLinkWrapper } from './context/LinkContext'

export { LinkProvider, useLinkWrapper }

// context, try 2

import AppLink2 from './components/Link2'
import { LinkProvider2, useLinkWrapper2 } from './context/LinkContext2'

export { AppLink2, LinkProvider2, useLinkWrapper2 }

import { setLinkWrapper, getLinkWrapper } from './components/LinkWrapper3'

export { setLinkWrapper, getLinkWrapper }
