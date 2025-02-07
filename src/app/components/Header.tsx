import React from "react"
import { CiHeart, CiSearch } from "react-icons/ci";

import Image from "next/image";
import { BiShoppingBag } from "react-icons/bi";
import Link from "next/link";

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
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center  text-black text-lg justify-center gap-2 ">
      <a href="/ProductList" className="mr-5 hover:text-gray-700">New and Feathure</a>
      <a  href="/ProductList" className="mr-5 hover:text-gray-700">Men</a>
      <a href="/ProductList" className="mr-5 hover:text-gray-700">Women</a>
      <a href="/ProductList" className="mr-5 hover:text-gray-700">kids</a>
      <a href="/cart" className="mr-5 hover:text-gray-700">Sale</a>
      <a href="/cart" className="mr-5 hover:text-gray-700">SNKRS</a>
    </nav>

    <span className="flex justify-center bg-slate-100 items-center px-4 py-3  border-b-2 rounded-full w-[15%] bg-light-gray">
    <CiSearch  className="text-2xl"/>
            <input
              className="pl-4 w-[75%] bg-slate-100 "
              type="text"
              placeholder="Search"

            />
        
          </span>


  {/**header left side input*/}
          <ul className="flex justify-center items-center text-2xl gap-4">
            <li className=" ml-3">  <CiHeart/></li>

            <li className="fle"> 
            <Link href={'/cart'}>
            <button className=" bg-slate-100 text-black rounded-full px-4 py-1 flex hover:bg-black hover:text-white">
            <BiShoppingBag className="m-2 text-black hover:text-white"/>your cart!
            </button>
            </Link>
            </li>

          </ul>
         
        
    
    
  </div>
</header>

    </div>
  )
}

