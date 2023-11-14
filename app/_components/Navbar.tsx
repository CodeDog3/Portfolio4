import React from 'react'
import Image from 'next/image'
import { Socials } from '../constants'

const Navbar = () => {
  return (
    <div className='fixed top-0 bg-transparent z-[20] w-full flex flex-col md:flex-row gap-5 md:justify-between px-60 p-5'>
        <h1 className='text-white text-[45px]'>
            Jon <span className='font-thin'>Brennan</span>
            <span className='text-red-500'>.</span>
        </h1>
        <div className='flex flex-row gap-5'>
            {Socials.map((social) =>(
                <Image
                    key={social.name}
                    src={social.src}
                    alt={social.name}
                    height={24}
                    width={24}
                    />
                ))
            }
        </div>
    </div>
  )
}

export default Navbar