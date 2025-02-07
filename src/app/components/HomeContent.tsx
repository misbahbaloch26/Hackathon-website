'use client'
import React, { useEffect, useState } from 'react'
import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from 'react-icons/hi'
import HelloNike from './HelloNike'
import Feature from './Feature'
import Image from 'next/image'
import {  threeProducts } from '@/sanity/lib/queries'
import { Product } from '../../../types/products'
import { client } from '@/sanity/lib/client'
import Link from 'next/link'
import { urlFor } from '@/sanity/lib/image'



const HomeContent = () => {
  return (
    <div>

      <HelloNike/>     {/*3 header only on home page*/}

                      {/*hero section*/}
       <section className="text-gray-600 body-font ">
  <div className="container mx-auto flex px-4  items-center justify-center flex-col w-full">
    
<Image src="/Image.png" alt="background-image"  width={1344} height={700}/>    {/*background image*/}

    <div className="text-center lg:w-2/3 w-full mt-11 ">   {/* */}
      <h1 className="title-font sm:text-4xl text-3xl  pt-5 mb-5 font-medium text-gray-900">
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


  const[product , setProduct]= useState<Product[]>([])
  
    useEffect(()=>{
      async  function fetchproduct(){
            const fetchedProduct:Product[] = await client.fetch(threeProducts)
            setProduct(fetchedProduct)
        }
        fetchproduct()
    },[])


  return (
  
<div>
<section className="text-gray-600 body-font mt-11">
  <div className="container px-4 py-24 mx-auto w-full">
    <div className="flex justify-between mb-4 items-center m-8">
      <h2 className="ml-2 text-3xl text-black">Best of Air Max</h2>
      <div className="flex items-center gap-4 ">
        <p className="text-black">Shop</p>
        <div className="bg-[#F5F5F5] px-5 py-4 rounded-full cursor-pointer">
          <HiOutlineArrowSmLeft />
        </div>
        <div className="bg-[#E5E5E5] px-5 py-4 rounded-full cursor-pointer">
          <HiOutlineArrowSmRight />
        </div>
      </div>
    </div>
    
    <div className="flex flex-wrap justify-between gap-2">
      {product.map((product) => (
        <div key={product._id} className="lg:w-1/4 md:w-1/3 sm:w-1/2 p-4">
          <Link href={`/product/${product._id}`} className="block relative h-50 rounded overflow-hidden">
            {product.image && (
              <Image
                alt="ecommerce"
                className="object-cover object-center h-full block"
                src={urlFor(product.image).url()}
                width={1344}
                height={500}
              />
            )}
          </Link>
          <div className="mt-4">
            <h2 className="text-gray-900 title-font text-lg font-medium">
              {product.productName}
            </h2>
            <p className="mt-1">price: ${product.price}</p>
            <Link href={`/product/${product._id}`}>
                  <button className="bg-black text-white  mt-4 py-2 ml-0 px-4 rounded-md hover:bg-green-600 transition"
                
                  >
                    product detail
                  </button>
                  </Link>
           
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
</div>

  )
}
 {/*feature section's code is in feature.tsx component */}
<Feature/>










   


