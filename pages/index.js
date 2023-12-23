import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/home/navbar'
import Current from '@/components/home/current'
import Technical from '@/components/home/technical'
import Sourcing from '@/components/home/sourcing'
import Candidate from '@/components/home/candidate'
import Calendly from '@/components/home/calendly'
import Faq from '@/components/home/faq'
import Footer from '@/components/home/footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={``}
    >
     <Navbar/>
     <Current/>
     <Technical/>
     <Sourcing/>
     <Candidate/>
     <Calendly/>
     <Faq/>
     <Footer/>
    </main>
  )
}
