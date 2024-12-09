import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { IoLocationOutline } from 'react-icons/io5'

const Footer = () => {
  return (
    <div>
      
      <footer className="text-white body-font bg-black">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap md:text-left text-center -mb-10 -mx-4">
      <div className="lg:w-1/6 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-[#fafafa] tracking-widest text-sm mb-3">
         Find a Store
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-white">become a member</a>
          </li>
          <li>
            <a className="text-white">Sign up</a>
          </li>
          <li>
            <a className="text-white">student discount</a>
          </li>
          <li>
            <a className="text-white">send us feedback</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/6 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
          Get Help
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-white">order status</a>
          </li>
          <li>
            <a className="text-white">returns</a>
          </li>
          <li>
            <a className="text-white">delivery</a>
          </li>
          <li>
            <a className="text-white">payment options</a>
          </li>
          <li>
            <a className="text-white">Contact us on Nike.comInquiries</a>
          </li>
          <li>
            <a className="text-white">Contact us on all other inquiries</a>
          </li>
        </nav>
      </div>
     
      <div className="lg:w-1/6 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
         about me
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-white">news</a>
          </li>
          <li>
            <a className="text-white">carrer</a>
          </li>
          <li>
            <a className="text-white">investors</a>
          </li>
          <li>
            <a className="text-white">sustainablity</a>
          </li>
        </nav>
      </div>
     
      <div className="lg:w-1/6 md:w-1/2 w-full px-4">
       
       
      </div>
    </div>
  </div>
  
  <div className="bg-gray-100">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row items-center justify-center">
      <p className="text-gray-500 text-sm text-center sm:text-left">
        © 2020 Tailblocks —
        
      </p>
      
    </div>
  </div>


</footer>

    </div>  
    




  )
}

export default Footer