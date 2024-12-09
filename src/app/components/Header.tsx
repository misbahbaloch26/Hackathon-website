import React from "react"
import { CiHeart } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import Image from "next/image";
import { BiShoppingBag } from "react-icons/bi";

  {/*header*/}
export const Header = () => {
  return (
    <div>
        <header className="text-gray-600 body-font">
          {/*nike logo */}
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      
    <Image
            src="/nike-logo.png" 
            alt="Logo"
            width={40}
            height={78}
            className="rounded-full"
          />
    
    {/**header center links  */}
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center gap-9">
      <a href="/ProductDetail" className="mr-5 hover:text-gray-900">New and Feathure</a>
      <a  href="/ProductDetail" className="mr-5 hover:text-gray-900">Men</a>
      <a href="/ProductDetail" className="mr-5 hover:text-gray-900">Women</a>
      <a href="/ProductDetail" className="mr-5 hover:text-gray-900">kids</a>
      <a href="/ProductDetail" className="mr-5 hover:text-gray-900">Sale</a>
      <a href="/ProductDetail" className="mr-5 hover:text-gray-900">SNKRS</a>
    </nav>


     {/**header left side input*/}
    <button className="rounded"><FaSearch className="text-black inline-block"  />
    <input type="text" placeholder="what are you looking for? " className="w-[200px] bg-slate-100 text-black"/></button>
  
    <CiHeart className="text-black size-5 mx-4 font-bold"/>
    <BiShoppingBag className="text-black size-5 mx-4 font-bold" />
   
  </div>
</header>

    </div>
  )
}

