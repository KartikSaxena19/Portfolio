'use client'

import React from 'react'
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import toast, { Toaster } from 'react-hot-toast';

const LowerHead = () => {
    const [result, setResult] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "925f1fcf-bb27-45e7-97e6-76aa20cda9a0");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      toast.success('Message sent successfully')
      event.target.reset();
    } else {
      toast.error("Error while sending the message")
      setResult(data.message);
    }
  };

  return (
    <>
    
    <div className="relative">
      {/* Blurred background overlay */}
      <div className='h-1 bg-amber-100'> </div>
      <div className="absolute inset-0  backdrop-blur-xs z-0"></div>
      
      <section className="relative z-10">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <div className="bg-white bg-opacity-80 backdrop-blur-lg rounded-xl shadow-2xl p-8 transform scale-x-[-1]">
            <div className="transform scale-x-[-1]"> {/* Mirror effect container */}
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">Contact Us</h2>
              <form onSubmit={onSubmit} className="space-y-8">
                <div>
                  <label htmlFor="name" 
                  className="block mb-2  font-medium text-gray-900 txt">Name</label>
                  <input 
                    type="name" 
                    id="name" 
                    name='name'
                    className="hover:shadow-lg text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 border border-gray-300 txt" 
                    placeholder="Enter Your Name" 
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                  <input 
                    type="email" 
                    name='email'
                    id="email" 
                    className="hover:shadow-lg text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 border border-gray-300 txt" 
                    placeholder="Enter Your Email" 
                    required
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Your message</label>
                  <textarea 
                    id="message" 
                    rows="6" 
                    name='message'
                    className="block hover:shadow-lg p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500" 
                    placeholder="Leave a comment..."
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="py-3 cursor-pointer px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-600 sm:w-fit hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300"
                >
                  Send message
                </button>

                <Toaster/>
              </form>
            </div>
          </div>
        </div>
      </section>
    
    

    <div className="logo relative z-10 flex justify-center items-center  gap-4 md:gap-8 lg:gap-10 py-4">
      {[
        { href: 'https://www.instagram.com/kartik.19__/', src: '/ig.png', color: 'hover:bg-pink-300' },
        { href: 'https://linkedin.com/in/kartik-saxena-2098b4270', src: '/linkedin.png', color: 'hover:bg-blue-300' },
        { href: 'mailto:saxenaaashu74@gmail.com', src: '/mail.png', color: 'hover:bg-emerald-200' },
        { href: 'https://github.com/KartikSaxena19', src: '/github.png', color: 'hover:bg-fuchsia-300' }
      ].map((item, index) => (
        <div 
          key={index} 
          className='bg-zinc-300 flex p-2 justify-center items-center rounded-full transition-all duration-100 hover:scale-110'
        >
          <Link href={item.href} target="_blank" rel="noopener noreferrer" >
            <Image 
              src={item.src} 
              width={40} 
              height={40} 
              alt={`social icon ${index}`}
              className='w-8 h-8 md:w-10 md:h-10'
            />
          </Link>
        </div>
      ))}
    </div>
    </div>
    </>
  )
}

export default LowerHead