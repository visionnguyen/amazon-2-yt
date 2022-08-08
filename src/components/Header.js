import React from 'react';
import Image from 'next/image';
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <header>
      {/* Top nav */}
      <div className='flex items-center bg-amazon_blue p-1 flex-grow py-2'>
        <div className='mt-2 flex flex-grow items-center sm:flex-grow-0'>
            <Image 
              src="https://links.papareact.com/f90"
              width={150}
              height={40}
              objectFit="contain"
              className='cursor-pointer'
            />
          
        </div>

        {/* Search */}
        <div className='hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500'>
          <input className='p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none' type="text" />
          <SearchIcon className='h-12 p-4' />
        </div>

        {/* Right */}
        <div className='text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap'>
          <div className='link'>
            <p>Hello sunny sangha</p>
            <p className='font-extrabold md:text-sm'>Account & Lists</p>
          </div>

          <div className='link'>
            <p>Returns</p>
            <p className='font-extrabold md:text-sm'>Orders</p>
          </div>

          <div className='link relative flex items-center'>
            <span className='absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center text-black rounded-full font-bold'>4</span>

            <ShoppingCartIcon className='h-10'/>
            <p className=' sm:inline font-extrabold md:text-sm mt-2'>Basket</p>
          </div>          
        </div>

      </div>

      

      {/* Bottom nav */} 
      <div className='flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white'>
        <p className='link flex items-center'>
          <MenuIcon className='h-6 mr-1' />
          All 
        </p>
        <p className='link'>Prime Video</p>
        <p className='link'>Amazon Business</p>
        <p className='link'>Today's Deals</p>
        <p className='link hidden lg:flex'>Electronics</p>
        <p className='link hidden lg:flex'>Food & Grocery</p>
        <p className='link hidden lg:flex'>Prime</p>
        <p className='link hidden lg:flex'>Buy Again</p>
        <p className='link hidden lg:flex'>Shopper Toolkit</p>
        <p className='link hidden lg:flex'>Health & Personal Care</p>
      </div>
    </header>
  )
}

export default Header