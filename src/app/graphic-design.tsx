"use client"
import React from 'react'
import { motion } from 'framer-motion';
import { ThreeDCardExample } from './snippits/3d-card-snippets';
import { EvervaultCardSnippets } from './snippits/evervault-card-snippets';

const GraphicDesign = () => {
  return (
    <div className='text-white'>
       <div className='p-4 mx-auto relative z-10 w-full pt-10 md:pt-32 px-2'>
        <div className='text-4xl pb-5 md:text-7xl px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50'>
          Custom UX/UI <br /> Designing.
        </div>
        <p className='mt-4 text-lg font-medium text-neutral-300 max-w-lg text-center mx-auto px-4'>
          Custom tailord solution for your business, we are a team. We are a team of creating who are excited to help you grow your business.
        </p>

        <div className='md:flex items-center justify-center md:mx-auto md:space-x-10'>
            <motion.div
            initial={{y:100, opacity: 0}}
            animate={{y:0, opacity: 1}}
            className='px-10 md:px-0'
            >
                <ThreeDCardExample />
            </motion.div>

            <motion.div
            initial={{y:100, opacity: 0}}
            animate={{y:0, opacity: 1}}
            className='px-10 md:px-0'
            >
                <EvervaultCardSnippets />
            </motion.div>
        </div>
        </div>
    </div>
  )
}

export default GraphicDesign
