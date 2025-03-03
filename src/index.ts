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
import { ConsultButtonProps, CommonButtonProps } from './sections/common'
export type { ConsultButtonProps, CommonButtonProps }

export { AppLink }

export { registerAdapter }

// ui
import { Input } from './components/ui/input/Input'
import { InputWithLabel } from './components/ui/input/InputWithLabel'
import SearchInput from './components/ui/input/SearchInput'
import SearchInputWithButton from './components/ui/input/SearchInputWithButton'
import { Textarea } from './components/ui/textarea'
import { TextareaWithLabel } from './components/ui/textarea'
import { Label } from './components/ui/label'
import Informer from './components/Informer'
import SafeHtmlRenderer from './components/SafeHtml'
import { Checkbox } from './components/ui/checkbox'
import { CheckboxWithLabel } from './components/ui/checkbox'
import { Tag, type TagProps, type TagItemProps } from './components/ui/Tag'

export { Input, InputWithLabel, SearchInput, SearchInputWithButton }
export { Textarea, TextareaWithLabel }
export { Label }
export { Informer }
export { SafeHtmlRenderer }
export { Checkbox, CheckboxWithLabel }
export { Tag, type TagProps, type TagItemProps }

// small blocks

export { Breadcrumbs, type BreadcrumbProps } from './components/breadcrumbs'

// cards
import Advantage, { AdvantageProps } from './components/cards/Advantage'
import Advantage2, { Advantage2Props } from './components/cards/Advantage2'
import AdvantageWithAccordion, {
  AdvantageWithAccordionProps,
} from './components/cards/AdvantageWithAccordion'
import ConnectCard, { ConnectCardProps } from './components/cards/Connect'
import DocCard, { DocCardProps } from './components/cards/Doc'
import FAQCard, { FAQItem, FAQCardProps } from './components/cards/FAQ'
import FeaturedCard, {
  FeaturedCardProps,
} from './components/cards/FeaturedCard'
import LicenseCard, { LicenseCardProps } from './components/cards/License'
import PackageCard, {
  PackageCardProps,
  PackageCardPropsWithoutHTMLAttributes,
} from './components/cards/Package'
// import GridIterator from './components/GridIterator'
import Plate, { PlateCardProps } from './components/cards/Plate'
import Product, {
  ProductCardProps,
  ProductCardPropsWithoutHtmlAttributes,
} from './components/cards/Product'
import Rate, {
  RateCardProps,
  RateCardPropsWithoutHTMLAttributes,
  RateButtonProps,
} from './components/cards/Rate'

export {
  Advantage,
  Advantage2,
  AdvantageWithAccordion,
  ConnectCard,
  DocCard,
  FAQCard,
  FeaturedCard,
  LicenseCard,
  PackageCard,
  Plate,
  Product,
  Rate,
  type AdvantageProps,
  type Advantage2Props,
  type AdvantageWithAccordionProps,
  type ConnectCardProps,
  type DocCardProps,
  type FAQCardProps,
  type FAQItem,
  type FeaturedCardProps,
  type LicenseCardProps,
  type PackageCardProps,
  type PackageCardPropsWithoutHTMLAttributes,
  type PlateCardProps,
  type ProductCardProps,
  type ProductCardPropsWithoutHtmlAttributes,
  type RateCardProps,
  type RateCardPropsWithoutHTMLAttributes,
  type RateButtonProps,
}

import ShowMoreAccordionTrigger from './components/pieces/ShowMoreAccordionTrigger'
export { ShowMoreAccordionTrigger }

export { TagLink, type TagLinkProps } from './components/ui/TagLink'

import ArticlePreviewTag from './components/ArticlePreviewTag'
export { ArticlePreviewTag }

// sections

import GridIterator from './components/GridIterator'
import CTA, { CTAProps } from './sections/CTA'
import Hero, { HeroButton, HeroProps } from './sections/Hero'
import Partners, { PartnersProps } from './sections/Partners'
import Section, { SectionProps } from './sections/Section'
import CardsGridSection from './sections/CardsGridSection'
export { CarouselWrapper } from './decorators/CarouselWrapper'
export {
  Combobox,
  type ComboboxProps,
  type ComboboxOption,
} from './components/ui/combobox'

export { GridIterator }
export { CTA, type CTAProps }
export { Hero, HeroButton, type HeroProps }
export { Partners, type PartnersProps }
export { Section, type SectionProps }
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
  FormField,
} from '@/components/ui/form'

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  // DialogContent, // animation bug, should be implemented in consumer app
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from './components/ui/dialog'

export { ScrollArea, ScrollBar } from './components/ui/scroll-area'

export {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from './components/ui/accordion'

export { Tabs, TabsList, TabsTrigger, TabsContent } from './components/ui/tabs'

export { useFetch } from '@/hooks/useFetch'
