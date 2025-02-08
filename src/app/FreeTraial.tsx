'use client'
import Image from 'next/image'
import React from 'react'

const FreeTraial = () => {
  return (
    <div className='py-6'>
      <h1 className='text-center text-4xl md:text-7xl px-6 text-transparent bg-clip-text bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50'>Try Our 7 Days <br /> Free Trail</h1>
      <p className='mt-4 text-lg font-medium text-neutral-300 max-w-lg text-center mx-auto px-4'>Want to grow your Instagram effortlessly? We Provide you 7-Days free trial to grow your business building your social presence, and incerease leads </p>
      <div className='flex flex-col md:flex-row md:justify-center px-4 md:px-8'>
      <Image src='/img/—Pngtree—vector of instagram profile interface_8434339.png' alt='insta-img' width={500} height={500} className='w-full md:w-1/2 bg-cover' />
      <Image src='/img/rb_2147819530.png' alt='insta-img' width={500} height={500} className='w-full md:w-1/2 bg-cover' />
      </div>
    </div>
  )
}

export default FreeTraial
