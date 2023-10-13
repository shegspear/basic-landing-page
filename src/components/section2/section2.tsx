import React from 'react'
import {HiOutlineVideoCamera, HiOutlineCalendar} from 'react-icons/hi'
import {RiVoiceprintLine} from 'react-icons/ri'
import {LiaUnlockAltSolid} from 'react-icons/lia'
import Image from 'next/image'

const Section2 = () => {
  const data = [
    {
        icon: <HiOutlineVideoCamera className={'text-2xl text-blue700'} />,
        title: 'Crystal-clear HD video',
        desc: 'No more pixelation or blurriness - just stunning, lifelike clarity that brings your team closer in meetings.'
    },
    {
        icon: <RiVoiceprintLine className={'text-2xl text-blue700'} />,
        title: 'Noise-canceling audio',
        desc: 'Say goodbye to distractions with our advanced audio tech for crisp, interruption-free conversations.',
    },
    {
        icon: <HiOutlineCalendar className={'text-2xl text-blue700'} />,
        title: 'Scheduling made easy',
        desc: 'Streamline your agenda with ClearLink\'s intuitive scheduling. Set up meetings, send invitations, and receive reminders in one place.'
    },
    {
        icon: <LiaUnlockAltSolid className={'text-2xl text-blue700'} />,
        title: 'Bank-grade security',
        desc: 'Your privacy is our priority with bank-grade security protocols safeguarding your meetings and data from unwanted intruders.'
    }
  ]
  return (
    <div
        className='my-40 flex flex-row justify-between items-center px-24'
    >
        <div
            className='w-7/12'
        >
            <p
                className='font-semibold text-lg text-blue700 mb-4'
            >
                The ClearLink Advantage 
            </p>

            <p
                className='font-semibold text-5xl text-grey800 mb-4'
            >
                Why choose ClearLink? 
            </p>

            <p
                className='font-normal text-2xl text-grey500'
            >
                In a world where connection is everything, 
                ClearLink takes the lead. Our cutting-edge 
                video conferencing app offers:
            </p>

            <div 
                className='grid grid-cols-2 grid-rows-2'
            >
                {
                    data.map((cur:any, idx:number) => (
                        <div
                            key={idx}
                            className='w-9/12 mt-20'
                        >
                            <p
                                className='flex justify-center items-center text-blue700 rounded-full h-[56px] w-[56px] bg-grey200 mb-2'
                            >
                                {cur.icon}
                            </p>

                            <p
                                className='font-semibold text-2xl text-grey900 mb-2'
                            >
                                {cur.title}
                            </p>

                            <p 
                                className='font-normal text-lg text-grey800'
                            >
                                {cur.desc}
                            </p>
                        </div>
                    ))
                }
            </div>

        </div>

        <div
            className='relative'
        >

            <Image 
                src={'/assets/arrow.png'}
                alt='arrow'
                width={238}
                height={157}
                className='absolute top-10 left-24'
            />

            <Image 
                src={'/assets/section2-img.png'}
                alt='people2'
                width={544}
                height={527}
                className='mt-56'
            />

        </div>
    </div>
  )
}

export default Section2