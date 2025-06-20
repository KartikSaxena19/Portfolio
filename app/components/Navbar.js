import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const Navbar = () => {
  return (
    <div>
      <div>
        <Link href="/">
        <Image alt='logo' src={'/logo.png'} height={100} width={100}></Image>
        </Link>

        
      </div>
    </div>
  )
}

export default Navbar
