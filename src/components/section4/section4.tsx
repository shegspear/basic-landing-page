import React from 'react'
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'

const Section4 = () => {
  const data = [
    {
        ques: 'How many participants can join a ClearLink video conference?',
        ans: 'ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.',
    },
    {
        ques: 'Can I use ClearLink on multiple devices?',
        ans: ''
    },
    {
        ques: 'Is ClearLink compatible with other video conferencing platforms?',
        ans: ''
    },
    {
        ques: 'How does ClearLink ensure the security of my video conferences?',
        ans: ''
    },
    {
        ques: 'Do I need to download any software to use ClearLink?',
        ans: ''
    },
    {
        ques: 'What kind of customer support does ClearLink provide?',
        ans: ''
    }
  ]
  return (
    <div className='my-40 flex flex-row justify-between px-24'>
        <div>
            <p
                className='font-semibold text-lg text-blue700 mb-4'
            >
                Support
            </p>

            <p
                className='font-semibold text-5xl text-grey800 mb-4'
            >
                FAQs
            </p>

            <p
                className='font-normal text-2xl text-grey500'
            >
                Everything you need to know about the product and billing. 
                Can't find the answer you're looking for? 
                Please <span className='underline'>chat to our friendly team.</span>
            </p>
        </div>

        <div>
            {
                data.map((cur:any, idx:number) => (
                    <div
                        key={idx}
                        className={`flex flex-row justify-between p-6 mb-2 ${cur.ans !== '' ? 'bg-grey200 rounded-xl' : 'bg-transparent h-[94px] border-b-2 border-grey200'}`}
                    >
                        <div>
                            <p
                                className='font-semibold text-xl text-grey900 mb-2'
                            >
                                {cur.ques}
                            </p>
                            <p
                                className='font-normal text-lg text-grey800 '
                            >
                                {cur.ans}
                            </p>
                        </div>

                        <p
                            className='rounded-full w-[20px] h-[20px] border-2 border-grey400'
                        >
                            {cur.ans !== '' ? (<AiOutlineMinus className='text-grey400' />) : (<AiOutlinePlus className='text-grey400' />)}
                        </p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Section4