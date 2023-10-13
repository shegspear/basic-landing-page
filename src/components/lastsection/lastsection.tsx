import React from 'react'
import {AiFillLinkedin, AiOutlineTwitter, AiOutlineInstagram, AiFillGithub, AiFillYoutube} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'

const Lastsection = () => {
  return (
    <div className='flex flex-row justify-between items-center h-[120px] bg-grey50 px-24 py-10'>
        <p
            className='font-normal text-base text-grey500'
        >
            © 2023 ClearLink. All rights reserved.   
        </p>

        <div
            className='flex flex-row justify-between items-center w-[200px]'
        >
            <AiFillLinkedin className="text-grey400" />

            <AiOutlineTwitter className="text-grey400" />

            <BsFacebook className="text-grey400" />

            <AiOutlineInstagram className="text-grey400" />

            <AiFillGithub className="text-grey400" />

            <AiFillYoutube className="text-grey400" />
        </div>
    </div>
  )
}

export default Lastsection