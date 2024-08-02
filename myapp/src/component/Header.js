import React from 'react'
import Logo from './Logo'
import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { FaLocationDot } from "react-icons/fa6";
const Header = () => {
  return (
    <>
      <header className=' h-24 shadow-sm'>
        <div className='h-full container mx-auto flex items-center justify-between px-32'>
          <div className=''>
            <Logo w={100} h={80} />
          </div>



          <div className='  flex items-center justify-between border rounded-full focus-within:shadow '>
            <div className=' h-14 px-3 outline-none flex items-center justify-center bg-black rounded-l-full text-white' >
              <FaSearch className='h-6 w-6' />
            </div>
            <input className=' mx-1 px-3 outline-none ' type='text' placeholder='Search Stock ' />
          </div>
          <div className=' flex items-center justify-between '>
            <div type="button" className=' flex items-center justify-between h-14 mx-2 w-45  border rounded-full focus-within:shadow '>
              <div className=' h-14 px-3 outline-none flex items-center justify-center bg-black rounded-l-full text-white' >
                <FaCartShopping className='h-6 w-6' />
              </div>
              <div className='mx-3'>
                <h2>Cart</h2>
              </div>
            </div>

            <div type="button" className=' flex items-center justify-between h-14 mx-2 w-45  border rounded-full focus-within:shadow '>
              <div className=' h-14 px-3 outline-none flex items-center justify-center bg-black rounded-l-full text-white' >
                <FaLocationDot className='h-6 w-6' />
              </div>
              <div className='mx-3'>
                <h1>Address </h1>
                <h2>Update Location</h2>
              </div>
            </div>

            <div type="button" className=' flex items-center justify-between h-14 mx-2 w-45  border rounded-full focus-within:shadow '>
              <div className=' h-14 px-3 outline-none flex items-center justify-center bg-black rounded-l-full text-white' >
                <CgProfile className='h-7 w-7' />
              </div>
              <div className='mx-3 '>
                <h1>Hello, Sign In</h1>
                <h2>Account & Lists</h2>
              </div>
            </div>
          </div>
        </div>
      </header >
    </>
  )
}

export default Header