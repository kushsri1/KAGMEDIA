"use client"

import Image from "next/image"

const stores = [
    {
        image: "/img/rb_2147819530.png",
        quote: "Building your social meida",
        name: "Store 1",
    },
    {
        image: "/img/rb_2148413411.png",
        quote: "Social media Managemnet",
        name: "Store 2",
    },
    {
        image: "/img/rb_2148008386.png",
        quote: "Running Advertising",
        name: "Store 3",
    },
]

const SocialMedia = () => {
  return (
    <section className='md:mt-24 mt-36 p-4  bg-[#f6f5f4] rounded-2xl'>
        <div className="text-4xl py-10 md: pb-8 md:text-7xl text-center text-black">Social Media Management <br /></div>
        <p className="mt-4 text-lg font-normal text-neutral-800 max-w-lg text-center mx-auto">We Create stunning social Media Account Design tp <br /> Convert</p>
        <div className="md:flex items-center justify-center px-10">
            {stores.map((store, index)=> (
                <div key={index}
                className="flex flex-col items-center justify-center mt-10 md:w-2/3 mx-auto">
                    <div className="flex flex-col items-center justify-center">
                        <Image
                        src={store.image}
                        alt="img" 
                        width={400}
                        height={400}
                        className="rounded-lg mx-5"
                        />
                        <p className="text-neutral-800 font-bold text-lg mt-4 text-center">
                            {store.quote}
                        </p>
                        <p className='text-nutral-800 font-bold text-lg mt-4'>{" "}-{store.name}</p>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default SocialMedia
