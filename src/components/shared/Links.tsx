import { NaviagtionLinks } from '@/lib/constants'
import Link from 'next/link'
import React from 'react'

function Links() {
  return (
    <div className='w-[90%] h-40 mx-auto my-[2.5rem] flex justify-between max-lg:grid max-lg:grid-cols-2 max-lg:gap-10 max-lg:h-60 max-lg:w-[90%]'>
        {NaviagtionLinks.map((link)=>(
            <Link href={link.link}>
            <button className={`w-[12.5rem] h-full rounded-xl flex justify-evenly items-center text-sm ${link.disabled ? "cursor-not-allowed bg-[#e9e9e9] dark:bg-[#1a1919]": "cursor-pointer"} bg-[#ffff] dark:bg-[#313338] max-lg:w-full`} disabled={link.disabled}>
                {link.title}
                <br />
                {link.disabled ? "coming soon":""}
            </button>
            </Link>
        ))}
    </div>
  )
}

export default Links