"use client"
import React, { useRef } from 'react'
import Navbar from './components/Navbar'
import { Spotlight } from './components/ui/spotlight'
import Link from 'next/link'
import SliderOne from './components/ui/slider'
import WebsiteDesign from './website-design'
import GraphicDesign from './graphic-design'
import SocialMedia from './social-management'
import Brand from './brand';
import Services from './services'
import Faq from './faq'
import FreeTraial from './FreeTraial'

export default function Home() {
  const websiteDesignRef = useRef<HTMLDivElement>(null)
  const graphicDesignRef = useRef<HTMLDivElement>(null)
  const socialMediaRef = useRef<HTMLDivElement>(null)
  const brandRef = useRef<HTMLDivElement>(null)


  const scrollToWebsiteDesign = () => {
    websiteDesignRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  const scrollToGraphicDesign = () => {
    graphicDesignRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToSocialMedia = () => {
    socialMediaRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToBrand = () => {
    brandRef.current?.scrollIntoView({ behavior: "smooth" });
  };










  return ( 
    <div className='w-full bg-black/[0.96] antialised bg-grid-white/[0.02] relative overflow-visible'>
      <Navbar 
      scrollToWebsiteDesign={scrollToWebsiteDesign}
      scrollToGraphicDesign={scrollToGraphicDesign}
      scrollToSocialMedia={scrollToSocialMedia}
      scrollToBrand={scrollToBrand}
      />
      <Spotlight 
      className=' md:flex md:left-80 md:-top-10 fill-white'
      />
      <div className='p-4 mx-auto relative z-10 w-full pt-10 md:pt-32 px-2'>
        <div className='text-4xl pb-5 md:text-7xl px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50'>
          Create, grow, and <br /> scale your buisness
        </div>
        <p className='mt-4 text-lg font-medium text-neutral-300 max-w-lg text-center mx-auto px-4'>
          Custom tailord solution for your business, we are a team. We are a team of creating who are excited to help you grow your business.
        </p>
        <Link href='/book'
        className='cursor-pointer flex items-center justify-center border rounded-full w-48 p-2 mx-auto my-6 text-white'
        >Book a call</Link>

        <div className='w-full pt-20 '>
          <SliderOne />
          </div>

          <div ref={websiteDesignRef}>
          <WebsiteDesign />
          </div>

          <div ref={graphicDesignRef}>
          <GraphicDesign />
          </div>

          <div ref={socialMediaRef}>
            <FreeTraial />
          <SocialMedia />
          </div>

          <div ref={brandRef}>
          <Brand />
          </div>

          <Services />
          <Faq />
        </div>
      </div>    
  )}
