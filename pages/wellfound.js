import Calendly from '@/components/wellfound/calendly'
import Candidate from '@/components/wellfound/candidate'
import Current from '@/components/wellfound/current'
import Faq from '@/components/wellfound/faq'
import Footer from '@/components/wellfound/footer'
import Navbar from '@/components/wellfound/navbar'
import Sourcing from '@/components/wellfound/sourcing'
import Technical from '@/components/wellfound/technical'
import React from 'react'

const Wellfound = () => {
  return (
    <div>
      <Navbar/>
     <Current/>
     <Technical/>
     <Sourcing/>
     <Candidate/>
     <Calendly/>
     <Faq/>
     <Footer/>
    </div>
  )
}

export default Wellfound
