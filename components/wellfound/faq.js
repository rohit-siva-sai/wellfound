import React from 'react'

const Faq = () => {
  return (
    <div className='md:px-48 px-4 py-6 md:py-12 flex flex-col space-y-6'>
      <p className='text-4xl font-bold'>FAQ</p>
      <div className='w-10/12 flex flex-col space-y-8'>
      <div className='flex flex-col space-y-3'>
        <p className='font-semibold text-lg'>Do candidates come from Weel found?</p>
        <p className='text-gray-600 font-semibold leading-6'>We source from our pool of 10M+ startup-minded candidates as well as a wider network of 500M+ to find you the absolute best matches for your roles.</p>
      </div>
      <div className='flex flex-col space-y-3'>
        <p className='font-semibold text-lg'>What types of roles do you source for?</p>
        <p className='text-gray-600 font-semibold leading-6'>Right now, we're rolling out the beta for tech product, engineering and growth roles. We plan to expand to other roles in the near future.</p>
      </div>
      <div className='flex flex-col space-y-3'>
        <p className='font-semibold text-lg'>How do I get started?</p>
        <p className='text-gray-600 font-semibold leading-6'>Reach out to our team and we'll help you get everything set up (fully optimized and personalized to your needs).</p>
      </div>
      <div className='flex flex-col space-y-3'>
        <p className='font-semibold text-lg'>Have more questions?</p>
        <p className='text-gray-600 font-semibold leading-6'>Schedule a call with our team and we'll be happy to help</p>
      </div>
      </div>
    </div>
  )
}

export default Faq
