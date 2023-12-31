import Link from 'next/link'
import React from 'react'

const Interview = () => {
  return (
    <div className='px-4 md:px-24'>
      <div className='md:w-1/2 flex md:mx-auto flex-col space-y-8 py-6  md:py-24 text-center'>
        <p className='font-semibold text-6xl text-gray-800'>Interview like it's <span className='text-green-500'>2023</span></p>
        <p className='font-semibold text-gray-500  text-lg'>Ditch out of reach and out of touch interview questions about golf balls and 747s - and turnoff your clunky screen share for good. Code,Create and Collabrate with an IDE built to showcase real-world skills in real-world environment</p>
      </div>
      <div className='grid grid-cols-1 gap-y-4 md:gap-y-0  md:grid-cols-2 gap-x-10'>
        <div className='border rounded flex flex-col space-y-8 pl-6 pr-8 md:pr-28 py-4'>
            <p className='font-semibold text-gray-400 uppercase text-lg'>preparation kits</p>
            <div className='flex flex-col space-y-4 '>
                <p className='font-bold text-gray-800 text-3xl'>Interview Preparation Kit</p>
                <p className='text-gray-400 font-semibold'>Get Interview ready for top companies by solving an interview preparation kit</p>
            </div>
            <Link href={"/jobseekers"}>
                <div className='font-semibold text-white bg-emerald-600 py-2 px-6 w-fit hover:shadow hover:bg-emerald-600/80'>
                    View All Kits
                </div>
            </Link>
        </div>
        <div className='border rounded flex flex-col space-y-8 pl-6 pr-8 md:pr-28 py-4'>
            <p className='font-semibold text-gray-400 uppercase text-lg'>new skill</p>
            <div className='flex flex-col space-y-4 '>
                <p className=' text-3xl text-gray-800 font-bold'>Add your first skill</p>
                <p className='text-gray-400 font-semibold'>Explore and add your first skill get started. Hackerrank offers a variety of skills, tracks and tutorials for you to learn and Improve</p>
            </div>
            <Link href={""}>
                <div className='font-semibold text-black bg-gray-200 py-2 px-6 w-fit hover:shadow hover:bg-gray-300'>
                    Explore Skills
                </div>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default Interview
