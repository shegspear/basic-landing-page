import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  const linksA = ['Overview', 'Features', 'Solutions', 'Tutorials', 'Pricing']
  const linksB = ['About us', 'Careers', 'Press', 'News', 'Contact']
  const linksC = ['Blog', 'Events', 'Help center', 'Tutorials', 'Support']
  const linksD = ['Terms', 'Privacy', 'Cookies', 'Licsense', 'Contact']

  return (
    <div
        className='flex flex-row justify-between mt-40 px-24'
    >
        <div className='w-4/12'>
            <Image 
                src={'/assets/logo.png'}
                alt='logo'
                height={28}
                width={152}
                className='mb-4'
            />

            <p
                className='font-normal text-lg text-grey600'
            >
                ClearLink is your gateway to effortless, high-quality video conferencing. 
                Join us in shaping the future of communication!  
            </p>
        </div>

        <div>
            <p
                className='font-semibold text-base text-grey500 mb-4'
            >
                Product
            </p>

            <div
                className='flex flex-col items-start justify-start'
            >
                {
                    linksA.map((cur:string, idx:number) => (
                        <Link
                            key={idx}
                            href={'#'}
                            className='font-semibold text-lg text-grey600 mb-4'
                        >
                            {cur}
                        </Link>
                    ))
                }
            </div>
        </div>

        <div>
            <p
                className='font-semibold text-base text-grey500 mb-4'
            >
                Company
            </p>

           <div
            className='flex flex-col items-start justify-start'
           >
                {
                    linksB.map((cur:string, idx:number) => (
                        <Link
                            key={idx}
                            href={'#'}
                            className='font-semibold text-lg text-grey600 mb-4'
                        >
                            {cur}
                        </Link>
                    ))
                }
           </div>
        </div>

        <div>
            <p
                className='font-semibold text-base text-grey500 mb-4'
            >
                Resources
            </p>

            <div
                className='flex flex-col items-start justify-start'
            >
                {
                    linksC.map((cur:string, idx:number) => (
                        <Link
                            key={idx}
                            href={'#'}
                            className='font-semibold text-lg text-grey600 mb-4'
                        >
                            {cur}
                        </Link>
                    ))
                }
            </div>
        </div>

        <div>
            <p
                className='font-semibold text-base text-grey500 mb-4'
            >
                Legal
            </p>

            <div
               className='flex flex-col items-start justify-start' 
            >
                {
                    linksD.map((cur:string, idx:number) => (
                        <Link
                            key={idx}
                            href={'#'}
                            className='font-semibold text-lg text-grey600 mb-4'
                        >
                            {cur}
                        </Link>
                    ))
                }
            </div>
        </div>

        <div>
            <p 
                className='text-blueDark text-base font-semibold mb-4'
            >
                Get the app
            </p>

            <Link href={'#'}>
                <Image 
                    src={'/assets/play-store.png'}
                    alt='play store'
                    height={40}
                    width={135}
                    className='mb-4'
                />
            </Link>

            <Link href={'#'}>
                <Image 
                    src={'/assets/app-store.png'}
                    alt='app store'
                    height={40}
                    width={135}
                    className='mb-4'
                />
            </Link>
        </div>
    </div>
  )
}

export default Footer