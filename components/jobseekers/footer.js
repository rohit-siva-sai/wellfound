import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='grid grid-cols-5 py-12 px-24 '>
      <div className='flex flex-col space-y-3'>
        <Link href={""}>
          <p className='hover:text-gray-600 text-gray-500 -outline-offset-4 font-semibold hover:underline'>Plagiarism Detection</p>
        </Link>
        <Link href={""}>
          <p className='hover:text-gray-600 text-gray-500 -outline-offset-4 font-semibold hover:underline'>Real world Questions</p>
        </Link>
      </div>
      <div className='flex flex-col space-y-3'>
        <Link href={""}>
          <p className='hover:text-gray-600 text-gray-500 -outline-offset-4 font-semibold hover:underline'>Mobilize your Internet Talent</p>
        </Link>
        <Link href={""}>
          <p className='hover:text-gray-600 text-gray-500 -outline-offset-4 font-semibold hover:underline'>Embrace Ai</p>
        </Link>
      </div>
      <div className='flex flex-col space-y-3'>
        <Link href={""}>
          <p className='hover:text-gray-600 text-gray-500 -outline-offset-4 font-semibold hover:underline'>Partners</p>
        </Link>
        <Link href={""}>
          <p className='hover:text-gray-600 text-gray-500 -outline-offset-4 font-semibold hover:underline'>Integrations</p>
        </Link>
        <Link href={""}>
          <p className='hover:text-gray-600 text-gray-500 -outline-offset-4 font-semibold hover:underline'>What's New</p>
        </Link>
      </div>
      <div className='flex flex-col space-y-3'>
        <Link href={""}>
          <p className='hover:text-gray-600 text-gray-500 -outline-offset-4 font-semibold hover:underline'>Status</p>
        </Link>
        <Link href={""}>
          <p className='hover:text-gray-600 text-gray-500 -outline-offset-4 font-semibold hover:underline'>Trust</p>
        </Link>
        
      </div>
      <div className='flex flex-col space-y-3'>
        <Link href={""}>
          <p className='hover:text-gray-600 text-gray-500 -outline-offset-4 font-semibold hover:underline'>Request Demo</p>
        </Link>
        <Link href={""}>
          <p className='hover:text-gray-600 text-gray-500 -outline-offset-4 font-semibold hover:underline'>Product Support</p>
        </Link>
        <Link href={""}>
          <p className='hover:text-gray-600 text-gray-500 -outline-offset-4 font-semibold hover:underline'>For Developers</p>
        </Link>
      </div>
    </div>
  )
}

export default Footer
