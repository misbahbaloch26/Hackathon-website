import Image from 'next/image'
import React from 'react'

const TheEssentials = () => {
  return (
    <div>
        <section className="text-gray-600 body-font container mx-auto p-5 h-[540]flex justify-center text-center  mt-9 ">
  <div>
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4  ">
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className=" h-64 overflow-hidden ml-[20]">
          <Image
            alt="content"
            className="object-cover object-center h-full w-full"
            src="/Image (10).png"
            width={1344}
            height={700}
          />
        </div>
        </div>
        
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className=" h-64 overflow-hidden object-cover">
          <Image
            alt="content"
            className="object-cover object-center h-full w-full"
            src="/Image (11).png"
            width={1344}
            height={700}
          />
        </div>
       
        
      </div>
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className=" h-64 overflow-hidden  object-cover">
          <Image
            alt="content"
            className="object-cover object-center h-full w-full"
            src="/Image (12).png"
            width={1344}
            height={700}
            />
         </div>
      </div>

    </div>
  </div>
</section>

    </div>
  )
}

export default TheEssentials





