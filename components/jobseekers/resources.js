import Link from 'next/link'
import React from 'react'
const array = [
    {
        image: "https://www.hackerrank.com/wp-content/uploads/2022/11/Resource-Thumbnail.png",
        heading: "2023 Developer Skills Report",
        link: ""
    },
    {
        image: "https://www.hackerrank.com/wp-content/uploads/2023/02/5-Changes-Devs-Want-Ebook_-Resources-1-1024x698.png",
        heading: "5 changes Developers want to see in your Interview Process",
        link: ""
    },
    {
        image: "https://www.hackerrank.com/wp-content/uploads/2022/12/Hiring-Guide-Library-1.png",
        heading: "Hiring Guide Library",
        link: ""
    },
    {
        image: "https://www.hackerrank.com/wp-content/uploads/2019/02/HackerRank_Candidate-Engagement-Blog.png",
        heading: "How to make Technical interviews more Inclusive",
        link: ""
    },
]


const Resources = () => {
  return (
    <div className='py-10 px-24 flex flex-col space-y-8'>
      <p className='font-semibold text-2xl text-gray-400 text-center'>Resources</p>
      <div className='flex justify-center space-x-10'>
        {array.map((item)=>{
            return (
                <div className='w-56 border flex flex-col justify-between space-y-4 pb-4 shadow  transition-all duration-300 hover:scale-105 cursor-pointer'>
                    <picture>
                        <img src={item.image} alt="" className='w-56' />
                    </picture>
                    <p className='font-semibold px-2 text-gray-600'>{item.heading}</p>
                   <p className='px-3 font-semibold text-green-600'>Read More</p>
                </div>
            )
        })}
      </div>
    </div>
  )
}

export default Resources
