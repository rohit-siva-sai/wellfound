import Navbar from '@/components/home/navbar'
import Footer from '@/components/jobseekers/footer'
import Interview from '@/components/jobseekers/interview'
import Resources from '@/components/jobseekers/resources'
import Roles from '@/components/jobseekers/roles'
import Stand from '@/components/jobseekers/stand'
import React from 'react'

const Jobseekers = () => {
  return (
    <div>
      <Navbar/>
      <Interview/>
      <Stand/>
      <Roles/>
      <Resources/>
      <Footer/>
    </div>
  )
}

export default Jobseekers
