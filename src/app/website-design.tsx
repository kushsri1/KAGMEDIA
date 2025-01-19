"usec client"
import Image from "next/image"

const WebsiteDesign = () => {
  return (
    <div className='text-white'>
        <div className='p-4 mx-auto relative z-10 w-full pt-10 md:pt-32 px-2'>
        <div className='text-4xl pb-5 md:text-7xl px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to bg-sky-50 bg-opacity-50'>
Web Design<br /> that works        </div>
        <p className='mt-4 text-lg font-medium text-neutral-300 max-w-lg text-center mx-auto px-4'>
          Custom tailord solution for your business, we are a team. We are a team of creating who are excited to help you grow your business.
        </p>
        </div>

        

<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    <div className="grid gap-4">
        <div>
            <Image className="h-auto max-w-full rounded-lg" width={500} height={500} priority src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt="" />
        </div>
        <div>
            <Image className="h-auto max-w-full rounded-lg" width={500} height={500} priority src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt="" />
        </div>
        <div>
            <Image className="h-auto max-w-full rounded-lg" width={500} height={500} priority src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt="" />
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <Image className="h-auto max-w-full rounded-lg" width={500} height={500} priority src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt="" />
        </div>
        <div>
            <Image className="h-auto max-w-full rounded-lg" width={500} height={500} priority src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt="" />
        </div>
        <div>
            <Image className="h-auto max-w-full rounded-lg" width={500} height={500} priority src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt="" />
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <Image className="h-auto max-w-full rounded-lg" width={500} height={500} priority src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt="" />
        </div>
        <div>
            <Image className="h-auto max-w-full rounded-lg" width={500} height={500} priority src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt="" />
        </div>
        <div>
            <Image className="h-auto max-w-full rounded-lg" width={500} height={500} priority src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt="" />
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <Image className="h-auto max-w-full rounded-lg" width={500} height={500} priority src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt="" />
        </div>
        <div>
            <Image className="h-auto max-w-full rounded-lg" width={500} height={500} priority src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt="" />
        </div>
        <div>
            <Image className="h-auto max-w-full rounded-lg" width={500} height={500} priority src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt="" />
        </div>
    </div>
</div>


    </div>
  )
}

export default WebsiteDesign
