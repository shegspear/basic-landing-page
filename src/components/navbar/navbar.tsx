import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {BiChevronDown} from 'react-icons/bi'

const Navbar = () => {
  return (
    <div 
        className='h-[84px] px-6 flex flex-row justify-between items-center rounded-full border-2 border-navBorderColor bg-navBg'
    >
        <Image 
            src={'/assets/logo.png'}
            alt='logo'
            height={28}
            width={152}
        />

        <div
            className='flex flex-row justify-between items-center'
        >
            <Link
                href={'#'}
                className='mr-4 font-semibold text-lg text-linkColor flex flex-row justify-between items-center'
            >
                <span className='mr-2'>
                    Products
                </span>
                <BiChevronDown />
            </Link>

            <Link
                href={'#'}
                className='mr-4 font-semibold text-lg text-linkColor flex flex-row justify-between items-center'
            >
                <span className='mr-2'>
                    Solutions
                </span>
                <BiChevronDown />
            </Link>

            <Link
                href={'#'}
                className='mr-4 font-semibold text-lg text-linkColor flex flex-row justify-between items-center'
            >
                <span className='mr-2'>
                    Resources
                </span>
                <BiChevronDown />
            </Link>

            <Link
                href={'#'}
                className='font-semibold text-lg text-linkColor'
            >
                <span>Pricing</span>
            </Link>
        </div>

        <div 
            className='flex flex-row justify-between items-center w-[320px]'
        >
            <button
              className='rounded-3xl w-[144px] h-[53px] text-lg text-black font-semibold border-2 border-navBorderColor bg-white text-center'  
            >
                Talk to sales
            </button>

            <button
                className='rounded-3xl w-[167px] h-[53px] text-lg text-white font-semibold bg-blue700 text-center'
            >
                Sign up for free 
            </button>
        </div>
    </div>
  )
}

export default Navbar