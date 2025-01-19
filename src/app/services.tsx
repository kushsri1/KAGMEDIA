"use client"
import React from 'react'
import { CardHoverEffectDemo } from './snippits/card-hover-effect-snippets'

const Services = () => {
  return (
    <div className=' max-w-5xl mx-auto py-20'>
        <div className="text-4xl md:text-7xl text-center text-transparent bg-clip-text bg-gradient-to-b from-blue-500 to-neutral-200 mt-20">
            Streamline your business with our services
        </div>
      <p className='text-xl font-medium text-neutral-300 text-center'>
        From website design to social media management, we offer a wide range of services to help to grow your business.
      </p>

      <CardHoverEffectDemo />
    </div>
  )
}

export default Services
