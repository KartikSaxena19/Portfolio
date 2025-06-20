'use client'
import React from 'react'
import { useEffect,useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Experience from '../components/Experience';
import AboutLoader from '../Loaders/AboutLoader';
const About = () => {
  const[isLoading,setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Simulate a 2-second loading time

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);


  return isLoading ?(
    <AboutLoader/>
  ) :(
    <>
     <div className="fixed inset-0 -z-10 ">
      {/* Main gradient background */}
      <div className="absolute inset-0  bg-gradient-to-br from-blue-500 via-amber-100 to-pink-500 animate-gradient-flow"></div>
      
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
    <div className=' w-fit rounded-full hover:scale-110 transition-all duration-300'>
      <Link href={'/'}>
      <Image alt='logo' src={'/logo.png'} width={100} height={100}></Image>
      </Link>
    </div>


    <div className='aboutcontent flex flex-col lg:flex-row justify-around items-center px-4 py-8'>
  <div className="manimage flex justify-center items-center w-full lg:w-1/2 mb-8 lg:mb-0">
    <Image 
      className='max-w-full h-auto' 
      alt='man' 
      src={'/man.png'} 
      width={850} 
      height={100}
      priority
    />
  </div>
  
  <div className="aboutme flex flex-col w-full lg:w-2/5 my-4 lg:my-20 gap-6 lg:gap-8">
    <div className='font-mono text-gray-500 font-extrabold text-2xl md:text-3xl lg:text-4xl text-center lg:text-left'>
      <h1>LET ME INTRODUCE MYSELF</h1>
    </div>
    
    <div>
      <p className='txt font-medium text-base md:text-lg'>
        Hi, I'm Kartik Saxena, a Computer Science undergraduate at I.E.T. Lucknow, passionate about turning data into insights and ideas into interactive experiences. My academic journey in B.Tech has fueled my dual interest in Data Science and Web Development - where I enjoy both extracting meaningful patterns from complex datasets and crafting intuitive digital interfaces.
      </p>
    </div>

    <div className="logo flex justify-center lg:justify-start gap-4 md:gap-8 lg:gap-10">
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

</div>
  <section className="max-w-6xl mx-auto">
    <Experience/>
  </section>
    </>
  )
}

export default About

