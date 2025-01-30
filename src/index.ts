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
import AppLink from './components/ui/Link'
import { registerAdapter } from './Adapters'

// exports
export { Alert, AlertDescription, AlertTitle } from './components/ui/alert'

export { Button, type ButtonProps }
export { ButtonIcon, type ButtonIconProps }
export { ButtonPrimary, type ButtonPrimaryProps }
export { ButtonSecondary, type ButtonSecondaryProps }
export { ButtonText, type ButtonTextProps }
export { ButtonUnique, type ButtonUniqueProps }

export { AppLink }

export { registerAdapter }

// ui
import { Input } from './components/ui/input/Input'
import { InputWithLabel } from './components/ui/input/InputWithLabel'
import { Textarea } from './components/ui/textarea'
import { TextareaWithLabel } from './components/ui/textarea'
import { Label } from './components/ui/label'
import Informer from './components/Informer'
import SafeHtmlRenderer from './components/SafeHtml'
import { Checkbox } from './components/ui/checkbox'
import { CheckboxWithLabel } from './components/ui/checkbox'
import { Tag } from './components/ui/Tag'

export { Input, InputWithLabel }
export { Textarea, TextareaWithLabel }
export { Label }
export { Informer }
export { SafeHtmlRenderer }
export { Checkbox, CheckboxWithLabel }
export { Tag }

// sections

import CTA from './sections/CTA'
import Hero from './sections/Hero'
import Partners from './sections/Partners'
import Section from './sections/Section'
import CardsGridSection from './sections/CardsGridSection'

export { CTA }
export { Hero }
export { Partners }
export { Section }
export { CardsGridSection }

import Heading from './components/core/typography/Heading'
import Text from './components/core/typography/Text'

export { Heading, Text }

// import { useFormField, Form, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from './components/ui/form'
export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from '@/components/ui/form'
