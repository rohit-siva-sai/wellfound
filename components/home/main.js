import Link from 'next/link'
import React from 'react'

const Main = () => {
  return (
    <div className='px-24 flex flex-col space-y-16 pt-16'>
      <p className='text-5xl font-semibold'>Learning today, leading tomorrow</p>
      <div className='grid grid-cols-2 gap-x-10'>
        <div className='border rounded flex flex-col space-y-8 pl-6 pr-28 py-8'>
            <p className='font-semibold text-gray-400 uppercase text-lg'>preparation kits</p>
            <div className='flex flex-col space-y-4 '>
                <p className='font-bold text-gray-800 text-4xl'>Interview Preparation Kit</p>
                <p className='text-gray-400 font-semibold'>Get Interview ready for top companies by solving an interview preparation kit</p>
            </div>
            <Link href={"/jobseekers"}>
                <div className='font-semibold text-white bg-emerald-600 py-2 px-6 w-fit hover:shadow hover:bg-emerald-600/80'>
                    View All Kits
                </div>
            </Link>
        </div>
        <div className='border rounded flex flex-col space-y-8 pl-6 pr-28 py-8'>
            <p className='font-semibold text-gray-400 uppercase text-lg'>new skill</p>
            <div className='flex flex-col space-y-4 '>
                <p className=' text-4xl text-gray-800 font-bold'>Add your first skill</p>
                <p className='text-gray-400 font-semibold'>Explore and add your first skill get started. Hackerrank offers a variety of skills, tracks and tutorials for you to learn and Improve</p>
            </div>
            <Link href={"/wellfound"}>
                <div className='font-semibold text-black bg-gray-200 py-2 px-6 w-fit hover:shadow hover:bg-gray-300'>
                    Explore Skills
                </div>
            </Link>
        </div>
      </div>
      <div className='flex items-center justify-between '>
        <picture>
            <img src="https://pngimg.com/uploads/amazon/amazon_PNG28.png" alt="" className='w-36' />
        </picture>
        <picture>
            <img src="https://bradthor.com/wp-content/uploads/2014/02/BT-RetailerLogos-Retina-GrayScale-WalMart-300x177.png" alt=""
            className='w-48' />
        </picture>
        <picture>
            <img src="https://www.scotlandis.com/wp-content/uploads/2019/10/accenture.png" alt=""
            className='w-48' />
        </picture>
        <picture>
            <img src="https://pngimg.com/uploads/amazon/amazon_PNG28.png" alt="" className='w-36' />
        </picture>
      </div>
    </div>
  )
}

export default Main
