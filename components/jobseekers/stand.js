import React from 'react'

const Stand = () => {
  return (
    <div className=' py-10 my-10 grid gap-y-5  md:gap-y-0  grid-cols-1 md:grid-cols-3 md:gap-x-6 bg-gradient-to-r from-blue-800 to-blue-500 px-4 md:px-24'>
      <div className='flex flex-col space-y-4'>
        <p className='text-lg font-semibold text-white'>Stand out from the crowd</p>
        <p className='text-white font-medium'>Get certified in technical skills by tacking the Hackerrank certification test</p>
        
      </div>
      <div className='flex flex-col space-y-4'>
        <p className='text-lg font-semibold text-white'>Standardised Assessment</p>
        <p className='text-white font-medium'>Assessments are oraganised under specific skills and are carefully curated based on years of recruiting data from 2000+ companies</p>
        
      </div>
      <div className='flex flex-col space-y-4'>
        <p className='text-lg font-semibold text-white'>Enrich your Profile</p>
        <p className='text-white font-medium'>Upon successfully clearing an assessment, you can promote yourself using Hackerrank certificate to peers and employers</p>
        
      </div>
    </div>
  )
}

export default Stand
