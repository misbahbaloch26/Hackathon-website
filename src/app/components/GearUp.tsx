'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Product } from '../../../types/products'
import { client } from '@/sanity/lib/client'
import {  threeProducts } from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/image'


const GearUp = () => {
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
      <h2 className="ml-2 text-3xl text-black">Gear up </h2>
      
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

export default GearUp

