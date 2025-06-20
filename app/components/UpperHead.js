import React from 'react'
import Link from "next/link";
import Image from "next/image";

const UpperHead = () => {
  
  return (
    <>
    <div className="flex flex-col md:flex-row justify-center p-19 h-100 md:my-0 my-10">

        <div
         className="about">
          <Link href={'/about'}>
          <Image alt='about' className="-rotate-12 hover:-rotate-45 " src={'/aboutpng.png'} width={300} height={100}>
          </Image>
          </Link>
        </div>
        <div className="skills ">
          <Link href={'/skill'}>
          <Image alt='skills' className="rotate-12 hover:rotate-45 " src={'/skillspng.png'} width={300} height={100}>
          </Image>
          </Link>
        </div>
        <div className="projects">
          <Link href={'/project'}>
          <Image   alt="projects" className="-rotate-12  hover:-rotate-55" src={'/projectspng.png'} width={300} height={100}>
          </Image>
          </Link>
        </div>
        </div>
    </>
  )
}

export default UpperHead
