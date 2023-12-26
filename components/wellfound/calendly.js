import React from 'react'

const Calendly = () => {
  return (
    <div className='grid grid-cols-2 justify-items-center py-12 bg-gradient-to-r from-[#FAACA8] to-[#DDD6F3] px-24'>
       <div className='flex flex-col space-y-5 w-3/4 self-center'>
        <p className='uppercase font-semibold text-rose-500'>find the right place for you</p>
        <p className='font-semibold text-5xl  '>Pricing designed to give you the best return</p>
        <p className='text-gray-600'>Our pricing is designed to be a fraction of the cost compared to traditional methods of recruiting. Whether you're just getting started, expanding your team, or on a hiring spree, we'll meet you where you're at with flexible plans that fit your needs.</p>
        <p className='text-gray-600'>Tp Provide you the best pricing, we just need a few details</p>
       </div>
    
       <iframe
        width="100%"
        height="550px"
        src="https://betterjobs.zohobookings.in/portal-embed#/customer/120166000000023017"
        frameborder="0"
        className='overflow-hidden rounded-xl'
        allowfullscreen=""
      >
        {" "}
      </iframe>
     
    </div>
  )
}

export default Calendly
