import React from 'react'

const Technical = () => {
  return (
    <div className='grid grid-cols-2 gap-x-12 justify-items-center py-12 px-24'>
      <div className='w-3/4 flex flex-col space-y-11 self-center'>
        <p className='font-semibold text-4xl'>Meet top technical talent ready for a change</p>
        <div className='flex flex-col space-y-6'>
            <div className='flex items-center space-x-5'>
                <picture>
                    <img src="https://assets-global.website-files.com/64626a4a74818ca87606a29e/646d756228c11bc7c68dc0cb_checklist.svg" alt="" className='bg-rose-200 rounded-full p-2 w-16' />
                </picture>
                <div className='flex flex-col space-y-1'>
                    <p className='font-semibold'>Vetted by your experts</p>
                    <p className='text-gray-600 font-medium'>Our in-house team for recuting experts revies every candidate before featuring to you</p>
                </div>
            </div>
            <div className='flex items-center space-x-5'>
                <picture>
                    <img src="https://assets-global.website-files.com/64626a4a74818ca87606a29e/647d04daca07a115af9c05ce_send.svg" alt="" className='bg-rose-200 rounded-full p-2 w-16' />
                </picture>
                <div className='flex flex-col space-y-1'>
                    <p className='font-semibold'>Vetted by your experts</p>
                    <p className='text-gray-600 font-medium'>Our in-house team for recuting experts revies every candidate before featuring to you</p>
                </div>
            </div>
            <div className='flex items-center space-x-5'>
                <picture>
                    <img src="https://assets-global.website-files.com/64626a4a74818ca87606a29e/646d724af6ec1718221569a2_tabler-icon-world-check.svg" alt="" className='bg-rose-200 rounded-full p-2 w-16' />
                </picture>
                <div className='flex flex-col space-y-1'>
                    <p className='font-semibold'>Vetted by your experts</p>
                    <p className='text-gray-600 font-medium'>Our in-house team for recuting experts revies every candidate before featuring to you</p>
                </div>
            </div>
        </div>
      </div>
      <div>
        <picture>
            <img src="https://assets-global.website-files.com/64626a4a74818ca87606a29e/64626a4a74818ca87606a317_Frame%2520288-p-800.png" alt="" className='w-11/12' />
        </picture>
      </div>
    </div>
  )
}

export default Technical
