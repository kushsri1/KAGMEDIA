"use client"
import Link from 'next/link'
import { PiCheckCircleFill } from "react-icons/pi";
import Navbar from '../components/Navbar';

const plans = [
    {
      index: 0,
      name: "Basic",
      price: " US $299",
      features: [
        "Fully responsive on all screens",
        "Design + Development",
        "1-3 days turnaround time",
        "Onky frontend"
      ],
      style:
        " rounded-3xl  py-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50",
      description:
        "Standalone components tailored to your needs and easily integrated. Perfect for website elements or sections.",
      button: "Buy Now",
    },
    {
      index: 1,
      name: "Premium",
      price: "US $899",
      features: [
        "Fully responsive on all screens",
        "React / Next.js / Tailwind CSS code",
        "Design + Development",
        "24-hour support response time",
        "3-5 days turnaround time",
        "Contact-form with Database"
      ],
      style:
        " rounded-3xl  py-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50",
      description:
        "Best for early-stage startups, businesses, and freelancers that need a marketing side to showcase their work and vision.",
      button: "Buy Now",
    },
    {
      index: 2,
      name: "Enterprise",
      feature: "Contact Us",
      price: "Let's Talk!",
      features: [
        "Fully responsive on all screens",
        "React / Next.js / Tailwind CSS code",
        "Design + Development",
        "Unlimited Revisions",
        "24-hour support response time",
        "Private communication channel",
        "Priority Development Queue",
        "Dedicated Project Manager",
      ],
      style:
        " h-full rounded-3xl py-10 flex flex-col  bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50  ",
      description:
        "Best for small businesses and startups that need a performant website that looks great and converts visitors to customers.",
      button: "Contact Us",
    },
    {
      index: 3,
      name: "Basic(Social Media Management)",
      price: " US $199",
      features: [
        "Instagram Management",
        "High quaity images and reels",
        "12-15 post per month",
        "5-6 stories per week",
        "5-6 reels per month"
      ],
      style:
        " rounded-3xl  py-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50",
      description:
        "Standalone components tailored to your needs and easily integrated. Perfect for website elements or sections.",
      button: "Buy Now",
    },
    {
      index: 4,
      name: "Premium(Social Media Management)",
      price: "US $350",
      features: [
        "Instagram Management + Facebook Management",
        "High quaity images and reels",
        "12-15 post per month",
        "3-4 stories per week",
        "5-6 reels per month"
      ],
      style:
        " rounded-3xl  py-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50",
      description:
        "Best for early-stage startups, businesses, and freelancers that need a marketing side to showcase their work and vision.",
      button: "Buy Now",
    },
  ];

const Pricing = () => {
  return (
    <div className="w-full  md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative">
      <Navbar 
      scrollToWebsiteDesign={()=> {}}
      scrollToGraphicDesign={()=> {}}
      scrollToSocialMedia={()=> {}}
      scrollToBrand={()=> {}}/>

<div className="text-5xl pb-10 md:pb-20 text-slate-300 px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-500 bg-opacity-50">
            Simple Pricing <br /> Choose your plan
          </div>

          <div className="grid md:grid-cols-3 gap-6 px-6  2xl:w-3/4 cursor-pointer pb-20  items-center justify-center ">
            {plans.map((plan, index) => (
              <div
                key={plan.name}
                className="h-full flex flex-col justify-between border rounded-3xl px-6  "
              >
                <div className={plan.style}>
                  <div className="text-4xl flex  items-center font-medium">
                    {plan.name}
                    {/* render feature tag only for enterprise tab*/}
                    {plan.feature === "Contact Us" && (
                      <div className="text-sm font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full ml-4 items-center ">
                        Contact Us
                      </div>
                    )}
                  </div>
                  <div className="text-3xl pt-6 ">{plan.price}</div>
                  <div className="py-6">{plan.description}</div>

                  <ul>
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="text-lg  py-2 flex space-x-2 items-center"
                      >
                        {/* render checkmark only for enterprise tab*/}
                        {plan.feature === "Contact Us" ? (
                          <PiCheckCircleFill className="text-blue-400 mr-2 text-xl" />
                        ) : (
                          <PiCheckCircleFill className="text-green-600 mr-2 text-xl" />
                        )}

                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={plan.button}>
                  {index === 0 && (
                    <Link
                      href="https://www.paypal.com/ncp/payment/345RMU4TYJWFG"
                      className="rounded-3xl my-4  py-2 text-white w-full mx-auto items-center flex justify-center bg-gradient-to-r from-emerald-500 to-blue-300"
                    >
                      Buy Now
                    </Link>
                  )}
                    {index === 1 && (
                      <Link
                        
                        href="https://www.paypal.com/ncp/payment/WW2YD643Q3HW8"  
                        className="rounded-3xl my-4  py-2 text-white w-full mx-auto items-center flex justify-center bg-gradient-to-r from-emerald-500 to-blue-300" 
                      >
                        Buy Now
                        </Link>
                    )}
                    {index === 2 && (

                          <Link
                          href="/contact"
                          className="rounded-3xl my-4  py-2 text-white w-full mx-auto items-center flex justify-center bg-gradient-to-r from-purple-500 to-blue-300"
                        >
                          Contact Us
                        </Link>
                    )}  
                    {index === 3 && (
                    <Link
                      href="https://www.paypal.com/ncp/payment/HZTRY73JT4AUE"
                      className="rounded-3xl my-4  py-2 text-white w-full mx-auto items-center flex justify-center bg-gradient-to-r from-emerald-500 to-blue-300"
                    >
                      Buy Now
                    </Link>
                  )}
                    {index === 4 && (
                      <Link
                        
                        href="https://www.paypal.com/ncp/payment/69E2Z5ARM49EE"  
                        className="rounded-3xl my-4  py-2 text-white w-full mx-auto items-center flex justify-center bg-gradient-to-r from-emerald-500 to-blue-300" 
                      >
                        Buy Now
                        </Link>
                    )}
                </div>
              </div>
            ))}
          </div>
    </div>

    

  )
}

export default Pricing
