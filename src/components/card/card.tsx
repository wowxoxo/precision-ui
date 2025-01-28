import React from 'react'

type CardProps = {
  title: string
  description: string
}
export const Card = ({ title, description }: CardProps) => {
  return (
    <div className="ui">
      <div className="ui pui-bg-white pui-rounded-lg pui-shadow-lg pui-overflow-hidden sm:pui-max-w-xs lg:pui-max-w-sm xl:pui-max-w-md">
        <div className="ui pui-px-6 pui-py-4">
          <h2 className="pui-font-sans pui-text-red-700 pui-font-bold pui-text-xl pui-mb-2">
            {title}
          </h2>
          <p className="pui-bg-white pui-border-none pui-rounded-none pui-font-sans pui-text-gray-700 pui-text-base">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}
