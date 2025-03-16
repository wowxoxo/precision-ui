export interface CommonButtonProps {
  text: string
  href?: string
  target?: '_blank'
  anchor?: boolean
  theme?: 'default' | 'opacity' | 'sapphire' // sapphire is for primary button
  className?: string
  linkClassName?: string
  iconDirection?: 'default' | 'down'
  onClick?: () => void
  uniqId?: string
}

export interface ConsultButtonProps extends CommonButtonProps {
  isConsultButton?: boolean
}
