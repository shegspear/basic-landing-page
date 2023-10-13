import Image from 'next/image'
import React from 'react'
import {BsRobot} from 'react-icons/bs'

const Hero = () => {
  return (
    <div
        className='mt-20 flex flex-row justify-between'
    >
        <div
            className='pt-4'
        >
            <p
                className='text-6xl text-black font-semibold mb-4'
            >
                Uniting the world, <br/> one video call at a time
            </p>

            <p
                className='font-normal text-2xl text-grey500 mb-8 w-9/12'
            >
                Experience the future of communication with ClearLink - 
                where crystal-clear video conferencing meets unparalleled simplicity.  
            </p>

            <div
                className='flex flex-row justify-between items-center w-[420px] mb-8'
            >
                <button
                    className='rounded-3xl w-[221px] h-[60px] text-lg text-white font-semibold bg-blue700 text-center'
                >
                    Start your free trial 
                </button>

                <button
                    className='text-blue700 font-semibold bg-transparent text-center flex flex-row justify-between items-center'
                >
                    <BsRobot />
                   <span
                        className='ml-2'
                   >
                    Discover AI assistant
                   </span> 
                </button>
            </div>

            <Image 
                src={'/assets/reviews.png'}
                alt='reviews picture'
                width={327}
                height={52}
            />

        </div>

        <Image 
            src={'/assets/hero-img.png'}
            alt='hero picture'
            width={584}
            height={488}
        />
    </div>
  )
}

export default Hero