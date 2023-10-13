import Footer from '@/components/footer/footer'
import Header from '@/components/header/header'
import Lastsection from '@/components/lastsection/lastsection'
import Section1 from '@/components/section1/section1'
import Section2 from '@/components/section2/section2'
import Section3 from '@/components/section3/section3'
import Section4 from '@/components/section4/section4'
import Section5 from '@/components/section5/section5'

export default function Home() {
  return (
    <main className="bg-white pt-6 flex flex-col items-center">
      <div className='max-w-[1600px]'>
        <Header/>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Footer />
        <Lastsection />
      </div>
    </main>
  )
}
