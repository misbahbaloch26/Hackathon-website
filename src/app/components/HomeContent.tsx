import React from 'react'
import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from 'react-icons/hi'
import HelloNike from './HelloNike'
import Feature from './Feature'
import Image from 'next/image'



const HomeContent = () => {
  return (
    <div>

      <HelloNike/>     {/*3 header only on home page*/}

                      {/*hero section*/}
       <section className="text-gray-600 body-font">
  <div className="container mx-auto flex pt-2 px-4  items-center justify-center flex-col w-full">
    
<Image src="/Image.png" alt=""  width={1344} height={700}/>    {/*background image*/}

    <div className="text-center lg:w-2/3 w-full">   {/* */}
      <h1 className="title-font sm:text-4xl text-3xl  pt-5 mb-4 font-medium text-gray-900">
      Nike Air Max Pulse
      </h1>
      <p className="mb-8 leading-relaxed">
      Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse
      —designed to push you past your limits and help you go to the max.
      </p>
      <div className="flex justify-center">
        <button className="inline-flex   text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-full text-lg">
          Notify me
        </button>
        <button className="ml-4 inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-full text-lg">
          Shop Air Max
        </button>
      </div>
    </div>
  </div>
</section>

    </div>
  )


  
}
 export default HomeContent




                           {/*home page - best of Air Max */}
export const BestProducts = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">

      <div className="flex items-center justify-between px-4 mx-11 gap-4">
    <h3 className=" text-lg font-semibold pl-11 ">Best of Air Max</h3>
    <div className="flex items-center gap-2">
        <p className=" text-sm cursor-pointer hover:underline">shop</p>
        <HiOutlineArrowSmLeft  />
        <HiOutlineArrowSmRight  />
    </div>
</div>
       
      

  <div className="container px-4 py-24 mx-auto bg-slate-100 w-full">
    
    <div className="flex flex-wrap -m-4 justify-center items-center  ">
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">

      

        <a className="block relative h-48 rounded overflow-hidden">
          <Image
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src="/Image (1).png"
            width={1344}
            height={500}
          />
        </a>
        <div className="mt-4">
          <h3 className="text-black text-xs tracking-widest title-font mb-1">
            Nike Air Max Pulse
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            Women Shoe&apos;s
          </h2>
          <p className="mt-1">$13.995</p>
        </div>
      </div>
     
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <Image
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src="/Image (2).png"
            width={441}
            height={500}
          />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
          Nike Air Max Pulse
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
          Men Shoe&apos;s
          </h2>
          <p className="mt-1">$13.995</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <Image
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src="/Image (3).png"
            width={1344}
            height={500}
          />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
          Nike Air Max 97 SE
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            Men&apos;s Shoe
          </h2>
          <p className="mt-1">$16.995</p>
        </div>
      </div>
     
     
    </div>
  </div>
</section>

    </div>
   
  )
}
 {/*feature section's code is in feature.tsx component */}
<Feature/>





