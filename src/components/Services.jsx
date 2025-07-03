import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import MobileNav from './MobileNav';
import Footer from './Footer';
import { BsInfoCircle } from "react-icons/bs";

const Services = () => {
  const [FEview, setFEview] = useState(false)
  const [MEview, setMEview] = useState(false)
  const [AIview, setAIview] = useState(false)
  const [Sview, setSview] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      <Navbar />
      <MobileNav />
      <div className='section min-h-screen overflow-hidden'>
        <div data-aos="fade" data-aos-duration="500" data-aos-easing="ease-in-out" className="heading p-5 mt-20 xl:mt-28 flex flex-col justify-center items-center gap-2">
          <h1 className='text-5xl text-[#393b88] font-extrabold transition-all'>OUR SERVICES</h1>
          <img src="/h-line.png" alt="line" className='md:w-[500px] w-[420px] h-[2px]' />
        </div>

        <div className="campaigns mx-6 my-10 p-5 flex items-center flex-wrap gap-8 bg-gray-100 rounded-xl shadow-xl justify-center 2xl:justify-around">
          <div data-aos="zoom-in" data-aos-duration="500" data-aos-easing="ease-in-out" onClick={() => setFEview(!FEview)} className="card w-[400px] h-[250px] sm:w-[450px] sm:h-[300px] rounded-lg overflow-hidden relative bg-[url(/fe.jpg)] bg-cover shadow-[5px_5px_15px_5px_#dadada]">
            <div className='absolute bottom-0 right-0 border-t-2 border-l-2 border-gray-100 bg-[#393b88]'>
              <h2 className="text-[#e3b94b] text-2xl font-extrabold mx-2">Final Expense Leads</h2>
            </div>
            <div className='absolute top-5 right-5'>
              <BsInfoCircle className="text-gray-300 size-5 transition-all" />
            </div>
            <div className={`bg-[#6a72826e] backdrop-blur-lg min-w-full min-h-full p-4 transition-all ${FEview ? "translate-y-0" : "translate-y-[150%]"} overflow-hidden`}>
              <p className="text-white my-2.5">We provide high-intent final expense leads from individuals actively seeking affordable burial and funeral coverage. These prospects are ready to speak and convert — making your sales process faster and smoother.</p>
            </div>
          </div>

          <div data-aos="zoom-in" data-aos-duration="500" data-aos-easing="ease-in-out" onClick={() => setMEview(!MEview)} className="card w-[400px] h-[250px] sm:w-[450px] sm:h-[300px] rounded-lg overflow-hidden relative bg-[url(/md.jpg)] bg-cover shadow-[5px_5px_15px_5px_#dadada]">
            <div className='absolute bottom-0 right-0 border-t-2 border-l-2 border-gray-100 bg-[#e3b94b]'>
              <h2 className="text-[#393b88] text-2xl font-extrabold mx-2">Medicare Leads</h2>
            </div>
            <div className='absolute top-5 right-5'>
              <BsInfoCircle className="text-gray-300 size-5 transition-all" />
            </div>
            <div className={`bg-[#6a72826e] backdrop-blur-lg min-w-full min-h-full p-4 transition-all ${MEview ? "translate-y-0" : "translate-y-[150%]"} overflow-hidden`}>
              <p className="text-white my-2.5">Our Medicare leads come from seniors exploring new plans or enrollment options. Whether it's Medicare Advantage, Supplement, or Part D, we deliver qualified prospects during peak decision periods.</p>
            </div>
          </div>

          <div data-aos="zoom-in" data-aos-duration="500" data-aos-easing="ease-in-out" onClick={() => setAIview(!AIview)} className="card w-[400px] h-[250px] sm:w-[450px] sm:h-[300px] rounded-lg overflow-hidden relative bg-[url(/auto.jpg)] bg-cover shadow-[5px_5px_15px_5px_#dadada]">
            <div className='absolute bottom-0 right-0 border-t-2 border-l-2 border-gray-100 bg-[#393b88]'>
              <h2 className="text-[#e3b94b] text-2xl font-extrabold mx-2">Auto Insurance Leads</h2>
            </div>
            <div className='absolute top-5 right-5'>
              <BsInfoCircle className="text-gray-300 size-5 transition-all" />
            </div>
            <div className={`bg-[#6a72826e] backdrop-blur-lg min-w-full min-h-full p-4 transition-all ${AIview ? "translate-y-0" : "translate-y-[150%]"} overflow-hidden`}>
              <p className="text-white my-2.5">We generate real-time auto insurance leads from drivers looking to switch or renew policies. With detailed filters like vehicle type, driving history, and budget range, you get the right prospects, every time.</p>
            </div>
          </div>

          <div data-aos="zoom-in" data-aos-duration="500" data-aos-easing="ease-in-out" onClick={() => setSview(!Sview)} className="card w-[400px] h-[250px] sm:w-[450px] sm:h-[300px] rounded-lg overflow-hidden relative bg-[url(/solar.jpg)] bg-cover shadow-[5px_5px_15px_5px_#dadada]">
            <div className='absolute bottom-0 right-0 border-t-2 border-l-2 border-gray-100 bg-[#e3b94b]'>
              <h2 className="text-[#393b88] text-2xl font-extrabold mx-2">Solar Leads</h2>
            </div>
            <div className='absolute top-5 right-5'>
              <BsInfoCircle className="text-gray-300 size-5 transition-all" />
            </div>
            <div className={`bg-[#6a72826e] backdrop-blur-lg min-w-full min-h-full p-4 transition-all ${Sview ? "translate-y-0" : "translate-y-[150%]"} overflow-hidden`}>
              <p className="text-white my-2.5">Reach homeowners interested in reducing their energy bills through solar solutions. Our leads are qualified by location, homeownership, and intent — giving your sales team a bright advantage.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Services
