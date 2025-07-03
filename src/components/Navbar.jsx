import { useState, useEffect } from 'react';
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter, FaLocationDot } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { NavLink } from 'react-router';



const Navbar = () => {
    useEffect(() => {
        Aos.init();
        Aos.refresh();
    }, []);

    return (
        <>
            <nav data-aos="fade-in" data-aos-duration="500" data-aos-easing="ease-in-out" className='bg-[#6a72826e] backdrop-blur-lg fixed top-0 w-full z-10'>
                <div className='py-1.5 px-10 flex justify-between items-center'>
                    <div className="social-media hidden sm:block">
                        <ul className='flex justify-center items-center gap-2 text-white'>
                            <li><FaFacebook className='size-5' /></li>
                            <li><FaLinkedin className='size-5' /></li>
                            <li><FaSquareXTwitter className='size-5' /></li>
                        </ul>
                    </div>
                    <div className='info flex items-center gap-5'>
                        <div className="address flex items-center gap-2">
                            <FaLocationDot className='text-[#e3b94b]' />
                            <p className='text-white sm:text-sm text-xs'>W 45th St New York, NY 10036, USA</p>
                        </div>
                        <div className="message flex items-center gap-2">
                            <IoMailSharp className='text-[#e3b94b]' />
                            <p className='text-white sm:text-sm text-xs'>info@domain.com</p>
                        </div>
                    </div>
                </div>

                <div className='bg-gray-300 w-[95vw] h-[1px] mx-auto hidden xl:block'></div>
                <div className='hidden xl:flex justify-between items-center px-10 py-1'>
                    <div className="logo flex justify-center items-center">
                        <img src="/Logo.png" alt="Logo" className='w-[100px]' />
                        <h1 className='text-2xl font-extrabold text-[#e3b94b]'>SecureLead</h1>
                    </div>
                    <div className="options">
                        <ul className='flex items-center gap-6 text-white font-semibold text-lg'>
                            <NavLink className={(e)=> e.isActive ? "text-[#e3b94b]" :""} to="/"><li>Home</li></NavLink>
                            <NavLink className={(e)=> e.isActive ? "text-[#e3b94b]" :""} to="/about"><li>Our Story</li></NavLink>
                            <NavLink className={(e)=> e.isActive ? "text-[#e3b94b]" :""} to="/contact"><li>Contact</li></NavLink>
                            <NavLink className={(e)=> e.isActive ? "text-[#e3b94b]" :""} to="/services"><li>Services</li></NavLink>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
