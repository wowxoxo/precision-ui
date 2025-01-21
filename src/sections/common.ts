export interface CommonButtonProps {
  text: string
  href?: string
  target?: string
  anchor?: boolean
  theme?: 'default' | 'opacity' | 'sapphire' // sapphire is for primary button
  className?: string
  linkClassName?: string
  iconDirection?: 'default' | 'down'
}

export interface ConsultButtonProps extends CommonButtonProps {
  isConsultButton?: boolean
}
