import React from "react"
import Image from "next/image";

export default function TopHeader() {
    return (
      <header className="bg-white border-b border-gray-300 px-4 md:px-8 py-2">
        <div className="container mx-auto flex items-center justify-between">
                {/* top header logo */}
          <div className="flex items-center">
            <Image
              src="/Frame.png" 
              alt="Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
  
          {/* top header Skip to main content */}
          <div className="hidden sm:block">
            <a
              href="/Home"
              className="text-xs md:text-sm  text-black hover:text-gray-800 focus:text-gray-800"
            >
              Skip to main content
            </a>
          </div>
  
          {/* top header  Links */}
          <div className="flex items-center space-x-3 md:space-x-4 text-xs md:text-sm text-black">
            <a
              href="/FindUs"
              className="hover:text-gray-800 focus:text-gray-800 transition"
            >
              Find a Store
            </a>
            <span className="hidden sm:block">|</span>
            <a
              href="/JoinUs"
              className="hover:text-gray-800 focus:text-gray-800 transition"
            >
              Help
            </a>
            <span className="hidden sm:block">|</span>
            <a
              href="/JoinUs"
              className="hover:text-gray-800 focus:text-gray-800 transition"
            >
              Join Us
            </a>
            <span className="hidden sm:block">|</span>
            <a
              href="/SignIn"
              className="hover:text-gray-800 focus:text-gray-800 transition"
            >
              Sign In
            </a>
          </div>
        </div>
      </header>
    );
  }
  