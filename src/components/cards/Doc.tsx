import { FileDownIcon } from 'lucide-react'
import React from 'react'
import Text from '../core/typography/Text'

export interface DocCardProps {
  title: string
  format?: string
  link: string
  date?: string
}

const DocCard: React.FC<DocCardProps> = ({ title, format, link, date }) => {
  return (
    <a
      href={link}
      download
      className="flex bg-whitish p-4 pr-8 rounded-lg space-x-2 transition-colors border border-transparent hover:bg-navy-opacity-41 hover:border-navy-opacity-16"
    >
      {/* TODO: Add correct icon from ui kit */}
      <FileDownIcon className="w-8 h-8 shrink-0" />
      <div className="space-y-1">
        <Text variant="body" as="div">
          {title}
        </Text>
        {(format || date) && (
          <Text variant="caption" className="text-navy-opacity-40">
            {format && date ? `${format} · ${date}` : format || date}
          </Text>
        )}
      </div>
    </a>
  )
}

export default DocCard
