import React from 'react'

import { MdOutlineShoppingCart } from 'react-icons/md'

const ProductDetail = () => {
  return (
    <div>
         <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">

    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <img
        alt="ecommerce"
        className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
        src="/Rectangle (6).png"
      />


      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
        Nike Air Force 1 
        PLT.AF.ORM
        </h1>
       
        <p className="leading-relaxed mt-5">
        Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its "inside out"-inspired construction,
         including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette.
          Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of 
          materials and aged midsole aesthetic give this release an artisan finish.
        </p>
       
       <div className='flex justify-between mt-7'>
        <span>
            <p className=' font-bold text-black'>₹ 8 695.00</p>
          </span>
          
          <button className="flex ml-auto  text-white text-center  bg-black border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-full">
          <MdOutlineShoppingCart />
          Add to Cart
          </button>
          </div>
       
      

      
          
         
        </div>
     
    </div>
  </div>
</section>

    </div>
  )
}

export default ProductDetail