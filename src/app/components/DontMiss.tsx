import Image from "next/image"
import Link from "next/link"
import React from "react"

const DontMiss = () => {
  return (
    <div>
         <section className="text-gray-600 body-font">
      <div className=" h-[17]  container mx-auto flex px-5 mt-9  flex-col">
      <h1 className="text-black text-3xl mb-6">Don&apos;t Miss</h1>
      </div>
  <div className=" mt-6 container mx-auto flex px-5  py-[15px] items-center justify-center flex-col">
    <Image
      className=" object-cover object-center rounded"
      alt="hero"
      src="/Image (9).png"
      width={1344}
      height={700}
    />
    <div className="text-center lg:w-2/3 w-full">
      <h1 className="title-font sm:text-4xl mt-11 text-3xl mb-4 font-medium text-gray-900">
      FLIGHT ESSENTIALS
      </h1>
      <p className="mb-8 leading-relaxed mt-3">
      Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.
      </p>
      <div className="flex justify-center">
    <Link href={'/ProductList'}>
        <button className="ml-4 inline-flex  text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-blue-400 rounded-xl text-lg">
        shop
        </button>
        </Link>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default DontMiss