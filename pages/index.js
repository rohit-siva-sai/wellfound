import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/home/navbar'
import Main from '@/components/home/main'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={``}
    >
  <Navbar/>
  <Main/>
    </main>
  )
}
