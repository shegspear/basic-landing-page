import Image from 'next/image'
import React from 'react'

const Section1 = () => {
  return (
    <div
        className='my-40 w-full flex flex-col items-center px-24'
    >
        <p
            className='font-medium text-xl text-grey600 mb-8'
        >
            Join 1,500+ companies already video conferencing the ClearLink way  
        </p>

        <div
            className='w-full flex flex-row justify-between items-center'
        >
            <Image 
                src={'/assets/shopify.png'}
                alt='shopify'
                height={43}
                width={152}
            />

            <Image 
                src={'/assets/coinbase.png'}
                alt='coinbase'
                height={32}
                width={178}
            />

            <Image 
                src={'/assets/dropbox.png'}
                alt='dropbox'
                height={38}
                width={183}
            />

            <Image 
                src={'/assets/intercom.png'}
                alt='intercom'
                height={38}
                width={183}
            />

            <Image 
                src={'/assets/marvel.png'}
                alt='marvel'
                height={40}
                width={100}
            />

            <Image 
                src={'/assets/auto.png'}
                alt='marvel'
                height={16}
                width={240}
            />
        </div>
    </div>
  )
}

export default Section1