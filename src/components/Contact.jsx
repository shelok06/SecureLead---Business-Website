import React, { useState, useEffect, useRef } from 'react';
import Navbar from './Navbar';
import MobileNav from './MobileNav';
import Footer from './Footer';
import { FaLocationDot } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";
import { MdPhoneInTalk } from "react-icons/md";
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const [form, setForm] = useState({ "name": "", "phone": "", "email": "", "message": "" });
  const [disable, setdisable] = useState(false)
  const [nameFocus, setnameFocus] = useState(false)
  const [emailFocus, setemailFocus] = useState(false)
  const [messageFocus, setmessageFocus] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const SERVICE_ID = import.meta.env.VITE_SERVICE_ID
    const TEMPELATE_ID = import.meta.env.VITE_TEMPELATE_ID
    const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY

    if (form.name.match(/[0-9\*\+\-\/\?\%\$\@\!\^]/g) || form.phone.match(/[A-Z\*\/\?\%\$\@\!\^\&]/gi) || !form.email.match(/[@]/g)) {
      toast.error("Invalid Input")
      return console.log("error")
    }

    try {
      let response = emailjs.sendForm(`${SERVICE_ID}`, `${TEMPELATE_ID}`, '#contact-form', {
        publicKey: `${PUBLIC_KEY}`,
      })
      let r = (await response).status
      setdisable(true)
      if (r === 200) {
        toast.success('Message sent!')
        setTimeout(() => {
          window.location.reload()
        }, 200);
      } else{
        console.log(r)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <>
      <Navbar />
      <MobileNav />
      <div className='section min-h-screen overflow-hidden p-5'>
        <div data-aos="fade-right" data-aos-duration="500" data-aos-easing="ease-in-out" className="heading mt-28 flex items-center gap-2">
          <img src="/line.png" alt="line" className='w-1  h-20' />
          <h1 className='text-5xl text-[#393b88] font-extrabold transition-all'>CONTACT US</h1>
        </div>

        <div data-aos="fade-right" data-aos-duration="500" data-aos-easing="ease-in-out" className="text my-5 text-xl font-semibold text-[#ffb238]">Feel Free To Contact And Reach Us For More Info !</div>

        <div className="grid justify-center lg:grid-cols-2 my-5 mx-2 sm:mx-5">
          <div data-aos="flip-right" data-aos-duration="500" data-aos-easing="ease-in-out" className='bg-[#f8f3ec] py-10 px-5 mx-2 sm:mx-5 shadow-xl'>
            <form id='contact-form' onSubmit={handleSubmit}>
              <input onBlur={() => setnameFocus(true)} type="text" value={form.name || ""} onChange={handleChange} name='name' id='name' placeholder='Full Name *' className={`w-full bg-white py-3 px-5 my-5 ${nameFocus && form.name.length < 3 ? " border border-red-600 text-red-600 outline-red-600" : ""}`} />

              <input onBlur={() => setemailFocus(true)} type="text" value={form.email || ""} onChange={handleChange} name='email' id='email' placeholder='Email Address *' className={`w-full bg-white py-3 px-5 my-5 ${emailFocus && form.email.length < 3 ? " border border-red-600 text-red-600 outline-red-600" : ""}`} />

              <input type="text" value={form.phone || ""} onChange={handleChange} name='phone' id='phone' placeholder='Phone Number (optional)' className='w-full bg-white py-3 px-5 my-5' />

              <textarea onBlur={() => setmessageFocus(true)} type="text" value={form.message || ""} onChange={handleChange} name='message' id='message' placeholder='Message *' className={`w-full bg-white py-3 px-5 my-5 ${messageFocus && form.message.length < 3 ? " border border-red-600 text-red-600 outline-red-600" : ""}`}></textarea>

              <button ><input disabled={form.name.length < 3 || form.email.length < 3 || form.message.length < 3 || disable} type="submit" value="SEND MESSAGE" className='bg-[#ffb238] px-6 py-2.5 font-semibold rounded-sm hover:text-white hover:bg-[#a7711c] transition-all text-[#393b88] disabled:bg-[#a7711c] disabled:text-white shadow-xl hover:shadow-2xl' /></button>
            </form>
          </div>

          <div className='py-10 px-5 mx-5'>
            <div data-aos="fade-left" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-offset="0" className="card bg-gray-100 rounded-xl shadow-lg hover:shadow-xl transition-all px-5 py-10 flex items-center gap-4 my-3">
              <div className="icon bg-[#ffb238] rounded-full flex justify-center items-center p-2.5 w-fit">
                <FaLocationDot className='size-8 text-[#393b88]' />
              </div>

              <div className=''>
                <h2 className='sm:text-lg font-semibold'>Location Address :</h2>
                <p className='text-shadow-slate-900 text-sm sm:text-base'>W 45th St New York, NY 10036, USA</p>
              </div>
            </div>

            <div data-aos="fade-left" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-offset="0" className="card bg-gray-100 rounded-xl shadow-lg hover:shadow-xl transition-all px-5 py-10 flex items-center gap-4 my-3">
              <div className="icon bg-[#393b88] rounded-full flex justify-center items-center p-2.5 w-fit">
                <MdPhoneInTalk className='size-8 text-[#ffb238]' />
              </div>

              <div className=''>
                <h2 className='sm:text-lg font-semibold'>Phone Number :</h2>
                <p className='text-shadow-slate-900 text-sm sm:text-base'>+1 (234) 567-8901</p>
              </div>
            </div>

            <div data-aos="fade-left" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-offset="0" className="card bg-gray-100 rounded-xl shadow-lg hover:shadow-xl transition-all px-5 py-10 flex items-center gap-4 my-3">
              <div className="icon bg-[#ffb238] rounded-full flex justify-center items-center p-2.5 w-fit">
                <IoMailSharp className='size-8 text-[#393b88]' />
              </div>

              <div className=''>
                <h2 className='sm:text-lg font-semibold'>Email Address :</h2>
                <p className='text-shadow-slate-900 text-sm sm:text-base'>info@domain.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Toaster />
    </>
  )
}

export default Contact
