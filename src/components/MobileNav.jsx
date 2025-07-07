import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router';
import { IoMdHome, IoIosBriefcase } from "react-icons/io";
import { FaBookOpen } from "react-icons/fa6";
import { RiContactsBook3Fill } from "react-icons/ri";

const MobileNav = () => {
  const [NavView, setNavView] = useState(false);
  const [Home, setHome] = useState(false);
  const [About, setAbout] = useState(false);
  const [Contact, setContact] = useState(false);
  const [Services, setServices] = useState(false);
  

  return (
    <>
      <nav className='block xl:hidden fixed top-12 z-20 left-2 max-h-[80px]'>
        <div onClick={() => setNavView(!NavView)} className="logo flex justify-center items-center bg-[#6a72826e] backdrop-blur-lg p-2.5 rounded-full w-fit">
          <img src="/Logo.png" alt="Logo" className='w-[54px] h-[50px]' />
          <h1 className='text-2xl font-extrabold text-[#e3b94b]'>SecureLead</h1>
        </div>

        <div className={`icon transition-all duration-800 ${NavView ? "translate-x-0" : "-translate-x-[100vw]"}`}>
          <div className='flex flex-col gap-3 px-2.5'>
            <button onClick={() => setHome(!Home)} onBlur={() => { setTimeout(() => { setHome(false) }, 100); }} 
              className='bg-[#6a72826e] backdrop-blur-lg my-2.5 rounded-full p-2.5 flex justify-center items-center gap-2 text-[#ffb238] w-fit'>
              <IoMdHome className='size-8' />
              <NavLink to="/" className={`${Home ? "block" : "hidden"}`}><p className={`font-extrabold`}>Home</p></NavLink>
            </button>



            <button onClick={() => setAbout(!About)} onBlur={() => { setTimeout(() => { setAbout(false) }, 100); }}
              className='bg-[#6a72826e] backdrop-blur-lg my-2.5 rounded-full p-2.5 flex justify-center items-center gap-2 text-[#ffb238] w-fit'>
              <FaBookOpen  className='size-8' />
              <NavLink to="/about" className={`${About ? "block" : "hidden"}`}><p className={`font-extrabold`}>Our Story</p></NavLink>
            </button>


            <button onClick={() => setContact(!Contact)} onBlur={() => { setTimeout(() => { setContact(false) }, 100); }}
              className='bg-[#6a72826e] backdrop-blur-lg my-2.5 rounded-full p-2.5 flex justify-center items-center gap-2 text-[#ffb238] w-fit'>
              <RiContactsBook3Fill className='size-8' />
              <NavLink to="/contact" className={`${Contact ? "block" : "hidden"}`}><p className={`font-extrabold`}>Contact</p></NavLink>
            </button>

            <button onClick={() => setServices(!Services)} onBlur={() => { setTimeout(() => { setServices(false) }, 100); }}
              className='bg-[#6a72826e] backdrop-blur-lg my-2.5 rounded-full p-2.5 flex justify-center items-center gap-2 text-[#ffb238] w-fit'>
              <IoIosBriefcase className='size-8' />
              <NavLink to="/services" className={`${Services ? "block" : "hidden"}`}><p className={`font-extrabold`}>Services</p> </NavLink>
            </button>

          </div>
        </div>
      </nav>
    </>
  )
}

export default MobileNav
