import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import MobileNav from './components/MobileNav';
import Aos from 'aos';
import 'aos/dist/aos.css';
import M_Card from './components/M_Card';
import Footer from './components/Footer';
import { RiDoubleQuotesR } from "react-icons/ri";
import { NavLink } from 'react-router';

function App() {
  const [cardView, setcardView] = useState(false);
  const [Current, setCurrent] = useState(0);
  const [touchStart, settouchStart] = useState(0);
  const [touchEnd, settouchEnd] = useState(0);

  const testimonial = [
    {
      name: "James Gordon",
      role: "Sales Director at SelectQuote",
      message:
        "SecureLead completely transformed our lead pipeline. The quality of leads is unmatched, and our conversions have doubled. Professional, reliable, and truly results-driven!",
      image: "/client-1.jpg"
    },
    {
      name: "David Lee",
      role: "Founder at LifeSure Agency",
      message:
        "Working with SecureLead has been a game-changer. Our life insurance campaigns now bring in consistent, high-quality leads. We've seen a 3x increase in client inquiries.",
      image: "/client-2.jpg"
    },
    {
      name: "Jessica Rodriguez",
      role: "Senior Agent at AutoGuard Insurance",
      message:
        "Finally, a marketing team that understands the insurance market. The leads we receive are targeted and ready to convert.",
      image: "/client-3.jpg"
    },
    {
      name: "Robert Khan",
      role: "Manager at MedTrust Health Plans",
      message:
        "SecureLead helped us break through a saturated market with more qualified leads than we've ever seen. It's like having an in-house growth team.",
      image: "/client-4.jpg"
    }
  ];

  useEffect(() => {
    Aos.init({
      offset: 100
    });

    Aos.refresh();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    let cards = document.querySelector(".cards");

    const intersection = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setcardView(true);
        }
        else {
          setcardView(false);
        };
      });
    });

    intersection.observe(cards);
  }, [cardView]);

  const handleTrack = (e, index) => {
    setCurrent(index);
  };

  const handleTouch = (e, index) => {
    const minSwipeDistance = 60;
    const distance = touchStart - touchEnd;
    console.log(distance)

    if (distance < -minSwipeDistance && index - 1 > -1) {
      setCurrent(index - 1);
    };
    if (distance > minSwipeDistance && index + 1 < testimonial.length) {
      setCurrent(index + 1);
    };
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);



  return (
    <>
      <Navbar />
      <MobileNav />
      <div className="section-1 bg-[url(/hero-banner.jpg)] bg-position-[center_left_-5rem] sm:bg-left h-[100vh] mb-20 bg-cover md:rounded-b-[300px] relative grid md:grid-cols-2 overflow-hidden">
        <div></div>
        <div data-aos="slide-left" data-aos-duration="500" data-aos-easing="ease-in-out" className="heading flex flex-col md:justify-center bg-[#1f293840] px-5 h-fit md:h-full self-end">
          <h1 className='text-3xl font-bold text-[#ffb238] md:w-[70%]'>Premium Marketing for the Insurance World</h1>
          <div className="text my-2 flex justify-center items-center md:w-[70%] gap-2">
            <img src="/line.png" alt="line" className='w-1 h-20' />
            <p className='text-white'>We help insurance providers grow with precision-targeted strategies, qualified lead generation, and brand positioning that builds trust.</p>
          </div>
        </div>
      </div>

      <div>
        <div data-aos="zoom-in" data-aos-offset="0" data-aos-duration="500" data-aos-easing="ease-in-out" className="hidden xl:flex flex-col justify-center items-center gap-4 bg-gray-100 px-8 py-12 rounded-3xl absolute -bottom-[10%] left-[10%] shadow-xl w-[250px] h-[220px] hover:shadow-2xl transition-all hover:scale-105">
          <img src="/auto.png" alt="" width={70} />
          <h2 className='text-lg font-bold text-[#393b88]'>Auto Insurance Leads</h2>
        </div>
        <div data-aos="zoom-in" data-aos-offset="0" data-aos-duration="500" data-aos-easing="ease-in-out" className="hidden xl:flex flex-col justify-center items-center gap-4 bg-gray-100 px-8 py-12 rounded-3xl absolute -bottom-[20%] left-[30%] shadow-xl w-[250px] h-[220px] hover:shadow-2xl transition-all hover:scale-105">
          <img src="/life.png" alt="" width={70} />
          <h2 className='text-lg font-bold text-[#393b88]'>Final Expense Leads</h2>
        </div>
        <div data-aos="zoom-in" data-aos-offset="0" data-aos-duration="500" data-aos-easing="ease-in-out" className="hidden xl:flex flex-col justify-center items-center gap-4 bg-gray-100 px-8 py-12 rounded-3xl absolute -bottom-[20%] right-[30%] shadow-xl w-[250px] h-[220px] hover:shadow-2xl transition-all hover:scale-105">
          <img src="/solar.png" alt="" width={70} />
          <h2 className='text-lg font-bold text-[#393b88]'>Solar Leads</h2>
        </div>
        <div data-aos="zoom-in" data-aos-offset="0" data-aos-duration="500" data-aos-easing="ease-in-out" className="hidden xl:flex flex-col justify-center items-center gap-4 bg-gray-100 px-8 py-12 rounded-3xl absolute -bottom-[10%] right-[10%] shadow-xl w-[250px] h-[220px] hover:shadow-2xl transition-all hover:scale-105">
          <img src="/medicare.png" alt="" width={70} />
          <h2 className='text-lg font-bold text-[#393b88]'>Medicare Leads</h2>
        </div>
      </div>

      <div className='mx-10 bg-gray-100 px-10 rounded-xl py-10 shadow-xl xl:hidden block'>
        <div className='flex flex-col items-center justify-center gap-2 my-5'>
          <h1 className='text-2xl font-bold text-[#393b88]'>OUR SERVICES</h1>
          <img src="/h-line.png" alt="line" className='w-30' />
        </div>
        <div className='flex gap-5 flex-wrap justify-center'>
          <div data-aos="zoom-in" data-aos-offset="0" data-aos-duration="500" data-aos-easing="ease-in-out" className="flex flex-col justify-center items-center gap-4 bg-gray-100 px-8 py-12 rounded-3xl shadow-2xl w-[250px] h-[220px] hover:shadow-xl transition-all hover:scale-105">
            <img src="/auto.png" alt="" width={70} />
            <h2 className='text-lg font-bold text-[#393b88]'>Auto Insurance Leads</h2>
          </div>
          <div data-aos="zoom-in" data-aos-offset="0" data-aos-duration="500" data-aos-easing="ease-in-out" className="flex flex-col justify-center items-center gap-4 bg-gray-100 px-8 py-12 rounded-3xl shadow-2xl w-[250px] h-[220px] hover:shadow-xl transition-all hover:scale-105">
            <img src="/life.png" alt="" width={70} />
            <h2 className='text-lg font-bold text-[#393b88]'>Final Expense Leads</h2>
          </div>
          <div data-aos="zoom-in" data-aos-offset="0" data-aos-duration="500" data-aos-easing="ease-in-out" className="flex flex-col justify-center items-center gap-4 bg-gray-100 px-8 py-12 rounded-3xl shadow-2xl w-[250px] h-[220px] hover:shadow-xl transition-all hover:scale-105">
            <img src="/solar.png" alt="" width={70} />
            <h2 className='text-lg font-bold text-[#393b88]'>Solar Leads</h2>
          </div>
          <div data-aos="zoom-in" data-aos-offset="0" data-aos-duration="500" data-aos-easing="ease-in-out" className="flex flex-col justify-center items-center gap-4 bg-gray-100 px-8 py-12 rounded-3xl shadow-2xl w-[250px] h-[220px] hover:shadow-xl transition-all hover:scale-105">
            <img src="/medicare.png" alt="" width={70} />
            <h2 className='text-lg font-bold text-[#393b88]'>Medicare Leads</h2>
          </div>
        </div>
      </div>



      <div className="section-2 sm:px-10 py-36 grid grid-rows-2 grid-cols-1 xl:grid-cols-2 xl:grid-rows-1 xl:gap-x-8 overflow-hidden justify-items-center">
        <div data-aos="fade-up-right" data-aos-duration="500" data-aos-easing="ease-in-out" className="box-1 bg-gray-100 px-5 sm:px-10 py-5 md:rounded-xl rounded-lg shadow-[5px_5px_15px_5px_#dadada] w-[80%] xl:w-full h-[80%] xl:h-full">
          <div>
            <p className='text-lg text-[#ffb238] font-semibold'>INTRODUCTION ABOUT US</p>
          </div>
          <div className='my-2.5 flex items-center gap-2.5'>
            <img src="/line.png" alt="line" className='w-1  h-20' />
            <p className='md:text-4xl text-2xl font-bold text-[#393b88]'>INSURANCE LEADS THAT ACTUALLY CONVERT!</p>
          </div>
          <div className='text-sm md:text-base w-[90%]'>
            At SecureLead, we specialize in high-impact marketing tailored for the insurance industry. Our mission is simple — connect trusted insurance providers with the right clients through data-driven strategies, compelling campaigns, and lead systems that deliver real results.
          </div>

          <div className='my-3 xl:block flex justify-center'>
            <div className='relative'>
              <img src="/meeting.jpg" alt="meeting" width={600} />
              <div className="box w-[90px] h-[80px] sm:h-auto sm:w-[110px] py-2.5 px-3 bg-[#ffb238] absolute bottom-0 border-r-4 border-r-white border-t-4 border-t-white flex flex-col items-center justify-center">
                <h2 className='sm:text-3xl text-xl sm:font-extrabold font-bold'>25</h2>
                <p className='text-sm text-center sm:font-semibold'>YEARS OF EXPERIENCE</p>
              </div>
            </div>
          </div>
        </div>

        <div data-aos="fade-down-left" data-aos-duration="500" data-aos-easing="ease-in-out" className="box-2 bg-gray-100 px-5 sm:px-10 py-5 md:rounded-xl rounded-lg shadow-[5px_5px_15px_5px_#dadada] w-[80%] xl:w-full ">
          <div className='xl:justify-itesm:ms-end  text-lgjustify-items-center'>
            <div className='relative'>
              <img src="/handshake.jpg" alt="handshake" width={600} />
              <div className="box w-[80px] h-[80px] sm:h-auto sm:w-[110px] py-2.5 px-3 bg-[#ffb238] absolute bottom-0 left-0 border-r-4 border-r-white border-t-4 border-t-white flex flex-col items-center justify-center">
                <h2 className='sm:text-3xl text-xl sm:font-extrabold font-bold'>100+</h2>
                <p className='text-sm text-center sm:font-semibold'>SATISFIED CLIENTS</p>
              </div>
            </div>
          </div>

          <div className='flex flex-col xl:flex-row xl:items-center mt-15 gap-10' >
            <div className='flex flex-col xl:w-1/2 gap-5'>
              <div className='flex items-center gap-2'>
                <img src="/team.png" alt="team" className='sm:size-15 size-10' />
                <h3 className='sm:text-xl text-lg font-semibold text-[#393b88]'>Certified Team</h3>
              </div>
              <div>
                <p className='text-sm sm:text-base'>
                  We're a certified team of 200+ marketing pros, specializing in insurance campaigns. With credentials from Google, Meta, and HubSpot, we deliver results you can trust.
                </p>
              </div>
            </div>

            <div className='flex flex-col xl:w-1/2 gap-5'>
              <div className='flex items-center gap-2'>
                <img src="/offices.png" alt="team" className='sm:size-15 size-10' />
                <h3 className='sm:text-xl text-lg font-semibold text-[#393b88]'>Multiple Locations</h3>
              </div>
              <div>
                <p className='text-sm sm:text-base'>
                  With multiple office locations, we proudly serve clients across regions—bringing our expertise closer to you
                </p>
              </div>
            </div>
          </div>

          <div className='my-10'>
            <NavLink to="/about"><button className='bg-[#ffb238] px-6 py-2.5 font-semibold rounded-sm hover:text-white hover:bg-[#a7711c] transition-all text-[#393b88]'>
              MORE ABOUT US
            </button></NavLink>
          </div>
        </div>
      </div>

      <div data-aos="fade" data-aos-duration="500" data-aos-easing="ease-in-out" className="section-3 my-6 py-10 px-5 bg-gray-200 overflow-hidden">
        <div className='bg-[url(/bg.png)] bg-contain'>
          <div className="heading h-30 lg:grid lg:grid-cols-2 my-10">
            <h1 data-aos="flip-up" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-offset="300" className='text-4xl md:text-6xl font-extrabold text-slate-950 block lg:hidden'>OUR IMPACT IN NUMBERS</h1>
            <h1 data-aos="flip-up" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-offset="300" className='justify-self-end text-6xl font-extrabold text-slate-950 lg:block hidden'>OUR IMPACT</h1>
            <h1 data-aos="flip-down" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-offset="300" className='self-end text-6xl font-extrabold text-slate-950 lg:block hidden'>IN NUMBERS</h1>
          </div>
          <M_Card view={cardView} />
        </div>
      </div>

      <div className="section-4 mt-20 py-10 px-5 overflow-hidden">
        <div data-aos="fade-down" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-offset="200" className="heading flex flex-col sm:items-center gap-2">
          <h1 className='text-4xl md:text-6xl font-extrabold text-[#393b88]'>
            CLIENT'S TESTIMONIAL
          </h1>
          <img src="/h-line.png" alt="line" className='md:w-[500px] w-[420px] h-[2px]' />
        </div>

        <div data-aos="flip-down" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-offset="200" className='card-container flex items-center overflow-hidden'>
          {testimonial && testimonial.map((item, index) => {
            return <div key={index} onTouchStart={e => settouchStart(e.changedTouches[0].screenX)} onTouchEnd={e => settouchEnd(e.changedTouches[0].screenX)} className={`review-card min-w-full flex justify-center items-center transition-all duration-1000 `} style={{ transform: `translateX(-${Current * 100}%)` }}>
              <div onTouchMove={e => handleTouch(e, index)} className={`bg-gray-100 min-h-[450px] sm:min-w-[600px] sm:max-w-[600px] sm:min-h-[240px] px-5 py-2.5 my-10 mx-5 flex flex-col-reverse justify-evenly sm:grid grid-cols-2 shadow-lg hover:shadow-xl transition-all duration-1000`}>
                <div className="text-box">
                  <div className="review my-3 mx-2 font-light ">
                    {item.message}
                  </div>

                  <div className="name my-4 mx-2 text-[#393b88]">
                    <h3 className='text-lg font-semibold'>{item.name}</h3>
                    <p>
                      {item.role}
                    </p>
                  </div>
                </div>
                <div className="image-box flex justify-center items-center">
                  <div className='relative'>
                    <div className='rounded-full overflow-hidden '>
                      <img src={item.image} alt="avatar" />
                    </div>
                    <div className="icon absolute bottom-0 bg-[#ffb238] p-4 rounded-full border-4 border-gray-100">
                      <RiDoubleQuotesR className='text-[#393b88]' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          })
          }
        </div>

        <div className="tracker flex justify-center items-center gap-1">
          {testimonial && testimonial.map((item, index) => {
            return <div key={index} onClick={(e) => handleTrack(e, index)} className={`circle_1 w-3 h-3 rounded-full ${Current === index ? "bg-gray-400" : "bg-gray-200"}`}></div>
          })
          }
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
