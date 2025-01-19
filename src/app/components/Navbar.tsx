"use client"
import { motion } from 'framer-motion'
import { AlignJustify, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import DropDownMenu from './drop-down-menu'

interface NavbarProps {
    scrollToWebsiteDesign: () => void;
    scrollToGraphicDesign: () => void;
    scrollToSocialMedia: () => void;
    scrollToBrand: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
    scrollToWebsiteDesign,
    scrollToGraphicDesign,
    scrollToSocialMedia,
    scrollToBrand
}) => {

    const [isDropDownVisible, setIsDropDownVisible] = useState(false);

    const toggleDropDown=()=> {
        setIsDropDownVisible(!isDropDownVisible);
    }

    const closeDropDown = ()=> {
        setIsDropDownVisible(false);
    }


  return (
    <div className='w-full'>
<div className='p-6 md:p-10 w-full flex justify-between items-center z-50 border-none'>
            <div>
                <Link className='cursor-pointer' href="/">
                    <Image
                    priority
                    src="/img/logo/Black___White_Minimalist_Business_Logo-removebg-preview.png"
                    alt='logo'
                    height={100}
                    width={100}
                    className='w-10 h-10 md:w-28 md:h-28'
                    />
                </Link>
            </div>
            <div className='cursor-pointer hidden md:flex space-x-10 items-center text-slate-300 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50'>
                <div onClick={scrollToWebsiteDesign} className='hover:text-gray-50'> Website Design</div>
                <div onClick={scrollToGraphicDesign} className='hover:text-gray-50'> UI/UX Design</div>
                <div onClick={scrollToSocialMedia} className='hover:text-gray-50'> Social Media Management</div>
                <div onClick={scrollToBrand} className='hover:text-gray-50'> Social Marketing</div>

                <Link href="/pricing" className='hover:text-gray-50'>
                    Pricing
                </Link>
            </div>

            <div className='flex md:hidden'>
                {
                    isDropDownVisible ? (
                        <div
                        onClick={toggleDropDown}
                        className='w-8 h-8 text-slate-300 cursor-pointer'
                        >
                            <X />
                            <DropDownMenu onClose={closeDropDown} />
                        </div>
                    ) : (
                        <AlignJustify
                        onClick={toggleDropDown}
                        className='w-8 h-8 text-slate-300 cursor-pointer'
                        />
                    )
                }
            </div>

            <div className='hidden md:flex'>
            <Link href="/contact" 
            className='inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50'>
                    Contact
                </Link>
            </div>
        </div>
      
    </div>
  )
}

export default Navbar
