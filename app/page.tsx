import Hero from '@/components/Hero';
import LogoBar from '@/components/LogoBar';
import Works from '@/components/Works';
import Services from '@/components/Services';
import Process from '@/components/Process';
import Tools from '@/components/Tools';
import Timeline from '@/components/Timeline';
import Advantages from '@/components/Advantages';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import Banner from '@/components/Banner';
import Journal from '@/components/Journal';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-[550px] mx-auto px-4">
        <Hero />
        <LogoBar />
        <Works />
        <Services />
        <Process />
        {/* <Tools /> */}
        {/* <Timeline /> */}
        <Advantages />
        <Testimonials />
        {/* <Pricing /> */}
        <FAQ />
        {/* <Banner /> */}
        {/* <Journal /> */}
        {/* <Newsletter /> */}
        <Footer />
      </div>
    </main>
  );
}
