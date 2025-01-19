"use client"
import React from 'react'
import Navbar from '../components/Navbar'
import {InlineWidget} from "react-calendly"

const Book = () => {
  return (
    <div className="flex flex-col bg-black/[0.96] bg-grid-white/[0.02]">
       <Navbar
        scrollToWebsiteDesign={() => {}}
        scrollToGraphicDesign={() => {}}
        scrollToSocialMedia={() => {}}
        scrollToBrand={() => {}}
      />
      <div className="text-5xl pb-10 md:pb-20 text-slate-300 px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-500 bg-opacity-50">
            Book a meeting!
          </div>

          <InlineWidget
          url='https://calendly.com/kushsrivastava53021/new-meeting' />
    </div>
  )
}

export default Book
