import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import MobileNav from './MobileNav';
import Footer from './Footer';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { MdGroups } from "react-icons/md";
import { IoShieldCheckmark } from "react-icons/io5";
import { FaLightbulb } from "react-icons/fa6";


const About = () => {

  useEffect(() => {
    Aos.init({
      offset: 100
    });

    Aos.refresh();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <MobileNav />
      <div className='section min-h-screen overflow-hidden'>
        <div data-aos="fade" data-aos-duration="500" data-aos-easing="ease-in-out" className='hero-banner bg-[url(/about-1.jpg)] bg-bottom bg-cover h-[650px] flex justify-center items-center'>
          <div data-aos="flip-down" data-aos-duration="500" data-aos-easing="ease-in-out" className="heading  p-5 border-2 border-[#ffb238] w-fit bg-[#6a72826e] backdrop-blur-lg rounded-xl h-fit hover:scale-105">
            <h1 className='text-3xl text-[#393b88] font-extrabold transition-all'>OUR STORY</h1>
          </div>
        </div>

        <div data-aos="fade-down" data-aos-duration="500" data-aos-easing="ease-in-out" className='mx-5 my-10 sm:m-10 px-2.5 sm:px-5 py-10 bg-gray-100 rounded-xl shadow-xl'>
          <div className="text">
            <div className="heading flex items-center gap-2">
              <img src="/line.png" alt="line" className='w-1 h-15  md:h-18' />
              <h2 className='md:text-5xl text-4xl font-bold text-[#393b88]'>OUR VISION & FUTURE</h2>
            </div>

            <p className='my-7'>
              SecureLead was founded with a clear mission — to bridge the gap between insurance providers and the people who need them most.
              We saw too many agencies relying on outdated marketing tactics and low-quality leads.
              From day one, our focus has been on results: real leads, real conversions, real growth.
              Built by a team of certified professionals, we understand both the insurance industry and modern digital marketing.
              Our vision is to become the go-to growth partner for insurance agencies worldwide.
              We believe in trust, transparency, and performance — values that guide every campaign we run.
              As technology evolves, we're staying ahead with data-driven strategies and personalized lead funnels.
              We're not just a service provider — we're a growth engine.
              Looking ahead, we're expanding into new regions and insurance sectors, scaling our impact.
              At SecureLead, the story is just getting started — and you're invited to be a part of it.
            </p>
          </div>
        </div>

        <div data-aos="fade-up" data-aos-duration="500" data-aos-easing="ease-in-out" className='mx-5 my-10 sm:m-10 px-2.5 sm:px-5 py-10 bg-gray-100 rounded-xl shadow-xl'>
          <div className="heading flex flex-col justify-center items-center gap-2">
            <h2 className='md:text-5xl text-4xl font-bold text-[#393b88]'>WHY CHOOSE US</h2>
            <img src="/h-line.png" alt="line" className='md:w-[500px] w-[420px] h-[2px]' />
          </div>

          <div className="flex my-10 flex-col xl:flex-row items-center justify-center flex-wrap gap-6">
            <div data-aos="zoom-in" data-aos-duration="500" data-aos-easing="ease-in-out" className="card bg-gray-100 px-8 py-12 rounded-xl shadow-2xl w-[300px] h-[300px] sm:w-[400px] sm:h-[300px] hover:scale-105 transition-all grid grid-rows-3 justify-items-center">
              <div>
                <MdGroups className='text-[#ffb238] size-15' />
              </div>

              <div className='text-lg font-semibold text-[#393b88]'>
                Community Focus
              </div>

              <div className='text-center'>
                Deeply invested in the well-being of communities we serve.
              </div>
            </div>

            <div data-aos="zoom-in" data-aos-duration="500" data-aos-easing="ease-in-out" className="card bg-gray-100 px-8 py-12 rounded-xl shadow-2xl w-[300px] h-[300px] sm:w-[400px] sm:h-[300px] hover:scale-105 transition-all grid grid-rows-3 justify-items-center">
              <div>
                <IoShieldCheckmark className='text-[#ffb238] size-15' />
              </div>

              <div className='text-lg font-semibold text-[#393b88]'>
                Customer Trust
              </div>

              <div className='text-center'>
                Building lasting relationship based on transparency and integrity.
              </div>
            </div>

            <div data-aos="zoom-in" data-aos-duration="500" data-aos-easing="ease-in-out" className="card bg-gray-100 px-8 py-12 rounded-xl shadow-2xl w-[300px] h-[300px] sm:w-[400px] sm:h-[300px] hover:scale-105 transition-all grid grid-rows-3 justify-items-center">
              <div>
                <FaLightbulb className='text-[#ffb238] size-15' />
              </div>

              <div className='text-lg font-semibold text-[#393b88]'>
                Inovative Solutions
              </div>

              <div className='text-center'>
                Constantly seeking new ways to meet evolving customer needs.
              </div>
            </div>

          </div>
        </div>

        <div data-aos="fade" data-aos-duration="500" data-aos-easing="ease-in-out" className='mx-5 my-10 sm:m-10 px-2.5 sm:px-5 py-10 bg-gray-100 rounded-xl shadow-xl'>
          <div className="heading flex flex-col justify-center items-center gap-2">
            <h2 className='md:text-5xl text-4xl font-bold text-[#393b88]'>MEET OUR LEADERSHIP</h2>
            <img src="/h-line.png" alt="line" className='md:w-[500px] w-[420px] h-[2px]' />
          </div>

          <div className="images my-10 grid">
            <div data-aos="fade-down-left" data-aos-duration="500" data-aos-easing="ease-in-out" className='my-6 p-4 flex flex-col-reverse 2xl:justify-between sm:flex-row gap-10 items-center lg:w-[70%] justify-self-end bg-gray-100 rounded-lg shadow-[5px_5px_15px_5px_#dadada]'>
              <div className="info overflow-hidden">
                <h1 className='text-3xl md:text-6xl my-4 text-[#393b88] font-extrabold'>Harry Wilson</h1>
                <p className='text-[#ffb238] text-lg'>Founder & CEO</p>
                <p className='my-2 italic'>“I started SecureLead with one goal — to bring quality and integrity to insurance marketing. Every campaign we run is built to deliver measurable growth and long-term trust.”</p>
              </div>
              <img src="/ceo.jpg" alt="ceo" className='w-[250px] h-[300px] sm:w-[300px] sm:h-[350px] md:w-[350px] md:h-[400px] xl:w-[400px] xl:h-[450px] rounded-xl' />
            </div>

            <div data-aos="fade-down-right" data-aos-duration="500" data-aos-easing="ease-in-out" className='my-6 p-4 flex flex-col-reverse 2xl:justify-between sm:flex-row gap-10 items-center lg:w-[70%] justify-self-start bg-gray-100 rounded-lg shadow-[5px_5px_15px_5px_#dadada]'>
              <div className="info overflow-hidden">
                <h1 className='text-3xl md:text-6xl my-4 text-[#393b88] font-extrabold'>Jenny Sampson</h1>
                <p className='text-[#ffb238] text-lg'>Head of Strategy</p>
                <p className='my-2 italic'>“From campaign planning to execution, I make sure every decision aligns with our client’s goals and industry needs. Strategy should always be smart, scalable, and human-focused.”
                </p>
              </div>
              <img src="/hos.jpg" alt="hos" className='w-[250px] h-[300px] sm:w-[300px] sm:h-[350px] md:w-[350px] md:h-[400px] xl:w-[400px] xl:h-[450px] rounded-xl' />
            </div>

            <div data-aos="fade-down-left" data-aos-duration="500" data-aos-easing="ease-in-out" className='my-6 p-4 flex flex-col-reverse 2xl:justify-between sm:flex-row gap-10 items-center lg:w-[70%] justify-self-end bg-gray-100 rounded-lg shadow-[5px_5px_15px_5px_#dadada]'>
              <div className="info overflow-hidden">
                <h1 className='text-3xl md:text-6xl my-4 text-[#393b88] font-extrabold'>Miley Scotland</h1>
                <p className='text-[#ffb238] text-lg'>Director of Client Success</p>
                <p className='my-2 italic'>“Success is when our clients grow — that's my only KPI. I ensure every partnership with SecureLead feels personal, transparent, and results-driven.”</p>
              </div>
              <img src="/dos.jpg" alt="ceo" className='w-[250px] h-[300px] sm:w-[300px] sm:h-[350px] md:w-[350px] md:h-[400px] xl:w-[400px] xl:h-[450px] rounded-xl' />
            </div>

            <div data-aos="fade-down-right" data-aos-duration="500" data-aos-easing="ease-in-out" className='my-6 p-4 flex flex-col-reverse 2xl:justify-between sm:flex-row gap-10 items-center lg:w-[70%] justify-self-start bg-gray-100 rounded-lg shadow-[5px_5px_15px_5px_#dadada]'>
              <div className="info overflow-hidden">
                <h1 className='text-3xl md:text-6xl my-4 text-[#393b88] font-extrabold'>William Henderson</h1>
                <p className='text-[#ffb238] text-lg'>Marketing Technology Lead</p>
                <p className='my-2 italic'>“I bridge the gap between marketing and tech — from automation to analytics, I help our systems work smarter so our clients can grow faster.”</p>
              </div>
              <img src="/mtl.jpg" alt="ceo" className='w-[250px] h-[300px] sm:w-[300px] sm:h-[350px] md:w-[350px] md:h-[400px] xl:w-[400px] xl:h-[450px] rounded-xl' />
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </>
  )
}

export default About