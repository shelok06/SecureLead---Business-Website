import React from 'react'
import { IoMailSharp } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { NavLink } from 'react-router';

const Footer = () => {
    return (
        <>
            <footer className=' bg-black'>
                <div className='sm:grid lg:grid-cols-3 lg:grid-rows-1 grid-cols-2 px-5 py-2.5 gap-x-10 gap-y-4'>

                    <div className='flex flex-col gap-2 col-span-2 lg:col-span-1 my-10'>
                        <div className="logo flex justify-center items-center">
                            <img src="/Logo.png" alt="Logo" className='w-12' />
                            <h1 className='font-extrabold text-[#e3b94b]'>SecureLead</h1>
                        </div>
                        <div className='text-white text-sm font-light text-center'>
                            SecureLead is a results-driven marketing agency focused on the insurance industry. We help providers grow through high-quality lead generation, tailored campaigns, and proven digital strategies. Our certified team is committed to delivering measurable results and long-term growth. Partner with us and turn trust into conversions.
                        </div>
                    </div>

                    <div className='flex flex-col gap-4 px-5 sm:items-center my-10'>
                        <div className="contact flex items-center gap-2">
                            <img src="/us.png" alt="flag" className='size-6' />
                            <p className='text-white text-sm font-light'>+1 (234) 567-8901</p>
                        </div>

                        <div className="contact flex items-center gap-2">
                            <IoMailSharp className='size-4.5 text-white' />
                            <p className='text-white text-sm font-light'>info@domain.com</p>
                        </div>

                        <div className="contact flex items-center gap-2">
                            <FaLocationDot className='size-4.5 text-white' />
                            <p className='text-white text-sm font-light'>W 45th St New York, NY 10036, USA</p>
                        </div>
                    </div>

                    <div className='text-white font-light text-sm my-10 px-5'>
                        <ul className='flex flex-col gap-2 sm:items-center'>
                            <NavLink to="/"><li>Home</li></NavLink>
                            <NavLink to="/about"><li>About SecureLeads</li></NavLink>
                            <NavLink to="/contact"><li>Contact us</li></NavLink>
                        </ul>
                    </div>
                </div>

                <div className="text-sm text-white font-light text-center">
                    &copy; SecureLead LLC. All Rights Reserved.
                </div>
            </footer>
        </>
    )
}

export default Footer
