import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion'

import { ButtonText } from '../ui/button'
import React from 'react'
import SafeHtmlRenderer from '../SafeHtml'

export interface FAQItem {
  question: string
  answer: string
  linkToFull?: string
}

export interface FAQCardProps {
  questions: FAQItem[]
  type: 'single' | 'multiple'
}

const FAQCard: React.FC<FAQCardProps> = ({ questions, type }) => {
  return (
    <div>
      <Accordion type={type} collapsible={true} className="space-y-3">
        {questions.map((question, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger size="small">
              {question.question}
            </AccordionTrigger>
            <AccordionContent>
              <SafeHtmlRenderer html={question.answer} truncateLength={300} />

              {question.linkToFull && (
                <div className="pt-6 no-content-rules">
                  <ButtonText icon="arrowRight" asChild>
                    <a href={question.linkToFull} className="more-link">
                      Читать полностью
                    </a>
                  </ButtonText>
                </div>
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}

export default FAQCard
