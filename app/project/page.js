'use client'
import React from 'react'
import Navbar from '../components/Navbar'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect,useState } from 'react'
import ProjectLoader from '../Loaders/ProjectLoader'


const Project = () => {
  const[isLoading,setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Simulate a 2-second loading time

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);


  return isLoading ?(
    <ProjectLoader/>
  ) : (
    <>
    <div className="fixed inset-0 -z-10 ">
      {/* Main gradient background */}
      <div className="absolute inset-0  bg-gray-900"></div>
      
      {/* Floating animated blobs */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Blob 1 */}
        <div className="absolute w-64 h-64 rounded-full bg-pink-400 opacity-20 mix-blend-screen animate-float-1"></div>
        
        {/* Blob 2 */}
        <div className="absolute w-80 h-60 rounded-full bg-purple-400 opacity-20 mix-blend-screen animate-float-2"></div>
        
        {/* Blob 3 */}
        <div className="absolute w-72 h-72 rounded-full bg-blue-400 opacity-20 mix-blend-screen animate-float-3"></div>
        
        {/* Blob 4 */}
        <div className="absolute w-60 h-80 rounded-full bg-indigo-400 opacity-20 mix-blend-screen animate-float-4"></div>
      </div>
    </div>
        <div className='w-fit'>
            
      <Navbar/>
        </div>
        <div className="conatiner ">
            <div className='font-mono text-3xl font-bold text-gray-200 flex items-center justify-center'>
                My Projects
            </div>

            <div className='flex flex-col md:flex-row justify-around items-center gap-8 my-8 p-4'>
      {/* Project 1 */}
      <div className="relative w-full max-w-lg h-auto overflow-hidden rounded-lg shadow-xl group">
        <Image 
          alt='donation' 
          src='/donation.png' 
          width={530}
          height={100}
          className="object-cover transition-all duration-300 group-hover:scale-110"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center p-4 text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <h3 className="text-3xl font-bold txt text-white mb-2">Fill My Pocket</h3>
          <p className="text-white txt mb-4 max-w-md">
            Secure donation system made with nextjs, tailwind css and mongodb, payment integration with razorpay
          </p>
          <Link href={'https://github.com/KartikSaxena19/FillMyPocket'}>
          <button className="px-6 py-2 bg-white text-black rounded-lg txt hover:bg-gray-200 transition">
            View Code
          </button>
          </Link>
        </div>
      </div>

      {/* Project 2 */}
      <div className="relative w-full max-w-lg h-auto overflow-hidden rounded-lg shadow-xl group">
        <Image 
          alt='pass' 
          src='/passwordmanager.png' 
          width={530}
          height={100}
          className="object-cover transition-all duration-300 group-hover:scale-110"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center p-4 text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <h3 className="text-3xl font-bold txt text-white mb-2">Password Manager</h3>
          <p className="text-white txt mb-4 max-w-md">
            Password manager made with vite+react, tailwind css and mongodb, used to save the password of any website
          </p>
          <Link href={'https://github.com/KartikSaxena19/PasswordManager'}>
          <button className="px-6 py-2 bg-white text-black rounded-lg txt hover:bg-gray-200 transition">
            View Code
          </button>
          </Link>
        </div>
      </div>
      
    </div>
    </div>

    </>
  )
}

export default Project
