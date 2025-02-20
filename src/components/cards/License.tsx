import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '../ui/dialog'

import ArticlePreviewTag from '../ArticlePreviewTag'
import React from 'react'
import Text from '../core/typography/Text'

export interface LicenseCardProps {
  title: string
  date?: string
  img: string
}

const LicenseCard: React.FC<LicenseCardProps> = ({ title, date, img }) => {
  return (
    <div data-test-id="license-card" className="bg-whitish rounded-lg">
      {date && (
        <ArticlePreviewTag
          icon="date"
          label={date}
          className="p-4 border-b border-navy-opacity-16"
        />
      )}

      <Dialog>
        <DialogTrigger asChild>
          <div className="p-8 gap-4 flex flex-col hover:cursor-pointer">
            <Text variant="small-body">{title}</Text>
            <div className="bg-navy-opacity-4 rounded-sm">
              <div className="relative mx-auto w-1/3 my-4 max-w-32 bg-sapphire">
                {/* <div
                  className={`bg-[url('/licenses/license-1.png')] bg-cover w-[130px] h-[180px] bg-no-repeat background-tint mx-auto`}
                /> */}
                <img
                  src={img}
                  alt={title}
                  className="grayscale1 mix-blend-luminosity min-h-[150px] w-full"
                />
                {/* <div className="absolute top-0 left-0 w-full h-full bg-navy-opacity-401"></div> */}
              </div>
            </div>
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[480px]">
          <DialogTitle>{title.slice(0, 50).concat('...')}</DialogTitle>
          <img
            src={img}
            alt={`Изображение для ${title}`}
            className="max-w-full"
          />
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default LicenseCard
