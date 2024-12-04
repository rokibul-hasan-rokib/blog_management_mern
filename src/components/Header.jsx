'use client'
import { useState } from "react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <>
       <nav className="bg-white shadow-md">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
  
          <a href="#" className="text-xl font-bold text-gray-800">
            MyBrand
          </a>

          <div className="hidden space-x-6 md:flex">
            <a href="#" className="text-gray-600 hover:text-gray-800">
              Home
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              About
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              Services
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              Contact
            </a>
          </div>

          <div className="hidden space-x-4 md:flex">
            <a
              href="#"
              className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
            >
              Sign In
            </a>
            <a
              href="#"
              className="px-4 py-2 text-blue-500 border border-blue-500 rounded hover:bg-blue-100"
            >
              Sign Up
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden focus:outline-none"
          >
            <svg
              className="w-6 h-6 text-gray-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="flex flex-col py-4 space-y-4 md:hidden">
            <a href="#" className="text-gray-600 hover:text-gray-800">
              Home
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              About
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              Services
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              Contact
            </a>
            <div className="space-y-2">
              <a
                href="#"
                className="block px-4 py-2 text-center text-white bg-blue-500 rounded hover:bg-blue-600"
              >
                Sign In
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-center text-blue-500 border border-blue-500 rounded hover:bg-blue-100"
              >
                Sign Up
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
    </>
  )
}
