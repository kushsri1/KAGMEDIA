import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/app/components/ui/accordion"
import React from 'react'

const Faq = () => {
  return (
    <div className="mt-10 md:py-10 bg-[#f6f5f4] w-full rounded-3xl">
      <div className="p-10 md:p-4 md:px-20">
        <div className="text-3xl md:text-7xl fonr bold text-start">
            Have Questions ?
        </div>
        <div className="font-semibold text-3xl md:text-7xl text-transparent bg-clip-text text-gradient bg-gradient-to-r from-emerald-600 to-blue-400">
            Get Answers.
        </div>
        <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
            <AccordionTrigger>What is Bird ?</AccordionTrigger>
            <AccordionContent>
                Bird is full FLedge marketing agency that specializes in branding.
            </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
            <AccordionTrigger>How to start ?</AccordionTrigger>
            <AccordionContent>
                You can start by contacting us. You will get back to you within 24 hours.
            </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
            <AccordionTrigger>Pricing ?</AccordionTrigger>
            <AccordionContent>
                We Offer custom tailored solution for your business. COntact us to get quote.
            </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
            <AccordionTrigger>Support ?</AccordionTrigger>
            <AccordionContent>
                We offer Monday-Friday support for all our client.
            </AccordionContent>
            </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}

export default Faq
