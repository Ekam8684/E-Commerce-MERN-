import React from 'react'
import Logo from './Logo'
import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header className=' bg-white h-24 shadow-sm'>
        <div className='h-full container mx-auto flex items-center justify-between px-16'>
          <div className=''>
            <Link to={"/"}>
              <Logo w={100} h={80} />
            </Link>
          </div>
          <div className=' flex items-center justify-between '>
            <div className='  flex items-center justify-between border rounded-full focus-within:shadow '>
              <div className=' h-14 px-3 outline-none flex items-center justify-center bg-black rounded-l-full text-white' >
                <FaSearch className='h-6 w-6' />
              </div>
              <input className=' mx-1 px-3 outline-none ' type='text' placeholder='Search Stock ' />
            </div>
            <Link to={"/cart"}>
              <div type="button" className='hover:bg-gray-100 flex items-center justify-between h-14 mx-2 w-45  border rounded-full focus-within:shadow '>
                <div className=' relative h-14 px-3 outline-none flex items-center justify-center bg-black rounded-l-full text-white' >
                  <span> <FaCartShopping className='h-6 w-6' /></span>
                  <div className=' m-1 absolute top-1 right-1 bg-white rounded-full flex justify-center items-center text-black w-5 h-5 '>
                    <p className='flex justify-center items-center '>0</p>
                  </div>
                </div>
                <div className='mx-3'>
                  <h2>Cart</h2>
                </div>
              </div>
            </Link>
            <div type="button" className='hover:bg-gray-100 flex items-center justify-between h-14 mx-2 w-45  border rounded-full focus-within:shadow '>
              <div className=' h-14 px-3 outline-none flex items-center justify-center bg-black rounded-l-full text-white' >

                <FaLocationDot className='h-6 w-6' />

              </div>
              <div className='mx-3'>
                <p>Address</p>
                <p>Update Location</p>
              </div>
            </div>
            <Link to={"/login"}>
              <div type="button" className=' hover:bg-gray-100   flex items-center justify-between h-14 mx-2 w-45  border rounded-full focus-within:shadow '>
                <div className=' h-14 px-3 outline-none flex items-center justify-center bg-black rounded-l-full text-white' >

                  <CgProfile className='h-7 w-7' />
                </div>
                <div className='mx-3 '>
                  <div className='flex items-center justify-items-start'>
                    Hello, <p>Sign In</p>
                  </div>
                  <p>Account & Lists</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </header >
    </>
  )
}

export default Header