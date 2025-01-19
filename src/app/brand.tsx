import { cn } from '@/lib/utils'
import { Lora } from 'next/font/google'
import Image from 'next/image'
import React from 'react'

const font = Lora ({
    subsets: ['latin'],
    weight: ["400"]
})

const logos = [
    {
        image: "/logo/logoipsum-248.svg"
    },
    {
        image: "/logo/logoipsum-245.svg"
    },
    {
        image: "/logo/logoipsum-225.svg"
    },
    {
        image: "/logo/logoipsum-248.svg"
    },
    {
        image: "/logo/logoipsum-249.svg"
    },
    {
        image: "/logo/stripelogo.png"
    },
]

const Brand = () => {
  return (
    <div>
      <div className='p-4 mx-auto relative z-10 w-full pt-20 md:pt-32'>
        <div className='text-4xl md:pb-8 md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-sky-200 bg-opacity-50'>
            The best brand <br /> choose us
        </div>

        <p className='text-xl mt-4 font-medium text-neutral-300 max-w-lg text-center mx-auto'>
            For small business to large corporation, we have helped few brands elevate thier business.
        </p>
        
        <div className='grid grid-cols-3 items-center justify-center mx-auto md:w-3/5 cursor-pointer'>
            {logos.map((logo, i)=> (
                <div key={i}
                className='p-4 md:p-20'>
                    <Image 
                    priority
                    src={logo.image}
                    alt='logo'
                    width={500}
                    height={500}
                    className='w-full h-auto rounded-lg'/>
                </div>
            ))}
        </div>

        <div className={cn('flex items-center justify-center text-xl xl:text-2xl pt-10 md:pt-0 pb-4 px-8 text-center text-white',
            font.className)}
            >&quot;We got rid of nearly a dozen diffrent tools because of what Bird does for us.&quot;
        </div>

        <div className='flex flex-col items-center justify-center text-white'>
            <Image
            src='/img/logo.svg'
            alt='logo'
            width={100}
            height={100}
            className='pt-2 xl:pt-0 w-10 xl:w-14' />

            <div className='text-center'>
                <div className="text-sm font-medium pt-4">Carlos Harnadez</div>
                <div className="text-sm">Marketing Director, Polin software</div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Brand
