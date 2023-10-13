import Image from 'next/image'
import React from 'react'
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai'

const Section3 = () => {
  return (
    <div
        className='my-40 flex flex-row justify-between items-center bg-grey50 py-10 px-24'
    >
        <div>
            <Image 
                src={'/assets/shopify.png'}
                alt='shopify'
                height={32}
                width={112}
                className='mb-14'
            />

            <Image 
                src={'/assets/Stars.png'}
                alt='stars'
                height={20}
                width={116}
                className='mb-14'
            />

            <p
                className='font-medium text-5xl text-grey900 w-full mb-20'
            >
                ClearLink has upgraded our remote meetings. 
                High-quality video, screen sharing, andtop-notch 
                security make it essential for our team. 
            </p>

            <div
                className='flex flex-row justify-between items-center'
            >
                <div
                    className='flex flex-row justify-between items-center'
                >
                    <Image 
                        src={'/assets/Avatar.png'}
                        alt='avatar'
                        height={56}
                        width={56}
                        className='mr-4'
                    />

                    <div>
                        <p
                            className='font-semibold text-xl text-grey900'
                        >
                            Sarah Thompson
                        </p>

                        <p
                            className='font-medium text-lg text-grey600'
                        >
                            Project Manager, Shopify   
                        </p>
                    </div>
                </div>

                <div
                    className='w-[150px] flex flex-row justify-between items-center'
                >
                    <button
                        className='bg-white w-[56px] h-[56px] rounded-full border-2 border-blue100 flex justify-center items-center'
                    >
                        <AiOutlineArrowLeft className={'text-blue700 text-2xl'} />
                    </button>

                    <button
                        className='bg-white w-[56px] h-[56px] rounded-full border-2 border-blue100 flex justify-center items-center'
                    >
                        <AiOutlineArrowRight className={'text-blue700 text-2xl'} />
                    </button>
                </div>
            </div>
        </div>

        <Image 
            src={'/assets/Contents.png'}
            alt='people 2'
            width={640}
            height={496}
        />
    </div>
  )
}

export default Section3