import Image from 'next/image'
import React from 'react'
import {AiOutlineCheckCircle} from 'react-icons/ai'

const Section5 = () => {
  const data = [
    '30 days free trial',
    'Cancel at any time',
    'Access to all features',
    'Peronalized onboarding'
  ]
  return (
    <div
        className='my-40 flex flex-row justify-between items-center pl-24'
    >
        <div>
            <p 
                className='font-semibold text-5xl text-grey900 mb-8'
            >
                Ready to clear the path to perfect communication?  
            </p>

            {
                data.map((cur:string, idx) => (
                    <div
                        key={idx}
                        className='flex flex-row justify-start items-center mb-4'
                    >
                        <AiOutlineCheckCircle className={'text-blue700 mr-2'} />

                        <p
                            className='font-normal text-2xl text-grey600'
                        >
                            {cur}
                        </p>
                    </div>
                ))
            }

            <div 
                className='mt-8 flex flex-row justify-between items-center w-[350px]'
            >
                <button
                className='rounded-3xl w-[144px] h-[52px] text-lg text-black font-semibold border-2 border-navBorderColor bg-white text-center'  
                >
                    Talk to sales
                </button>

                <button
                    className='rounded-3xl w-[195px] h-[52px] text-lg text-white font-semibold bg-blue700 text-center'
                >
                    Start your free trial
                </button>
            </div>
        </div>

        <Image 
            src={'/assets/section-5-img.png'}
            alt='people 5'
            width={872}
            height={609}
        />
    </div>
  )
}

export default Section5