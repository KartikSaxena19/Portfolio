'use client'
import React, { useRef, useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Link from 'next/link'
import SkillLoader from '../Loaders/SkillLoader'

const Skill = () => {
    const [background, setBackground] = useState(20)
    const [isLoading,setIsLoading]= useState(true)
    const parallaxRef = useRef(null)
    const loaderRef=useRef(null)


    const ht = useRef(null)
    const css = useRef(null)
    const js = useRef(null)
    const no = useRef(null)
    const sql = useRef(null)
    const mongo = useRef(null)
    const nex = useRef(null)
    const tailwind = useRef(null)
    const cpp = useRef(null)
    const py = useRef(null)

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)


         const loaderTimeline = gsap.timeline({
            onComplete: () => setIsLoading(false)
        })
        
        loaderTimeline.to(loaderRef.current, {
            opacity: 0,
            duration: 1.5,
            ease: 'power2.inOut'
        })


        let ctx = gsap.context(() => {
            var t1 = gsap.timeline({
                defaults: { duration: 1 },
                scrollTrigger: {
                    trigger: parallaxRef.current,
                    start: 'top top',
                    end: '4000 bottom',
                    scrub: true,
                    pin: true,
                    onUpdate: (self) => {
                        setBackground(Math.ceil(self.progress * 100 + 20))
                    },
                },
            })

            t1.to(ht.current, { transform: 'translate(200%, -100%) ' }, 0)
            t1.to(css.current, { transform: 'translate(210%, -250%)' }, 0)
            t1.to(js.current, { transform: 'translate(100%, -200%)' }, 0)
            t1.to(no.current, { transform: 'translate(-10%, -270%)' }, 0)
            t1.to(sql.current, { transform: 'translate(-100%, -200%)' }, 0)
            t1.to(mongo.current, { transform: 'translate(-210%, -250%)' }, 0)
            t1.to(nex.current, { transform: 'translate(-200%, -100%) ' }, 0)
            t1.to(tailwind.current, { transform: 'translate(-200%, 200%) ' }, 0)
            t1.to(cpp.current, { transform: 'translate(-10%, 270%)' }, 0)
            t1.to(py.current, { transform: 'translate(200%, 200%) ' }, 0)

        }, parallaxRef)

        return () => {
            // Proper cleanup
            ctx.revert()
            ScrollTrigger.getAll().forEach(trigger => trigger.kill())
        }
    }, [])

    const handleLogoClick = (e) => {
        e.preventDefault()
        // Kill all ScrollTriggers before navigating
        ScrollTrigger.getAll().forEach(trigger => trigger.kill())
        window.location.href = '/'
    }



return (
        <>
        {isLoading&&(
          
          <SkillLoader/>
        )}
            <div ref={parallaxRef} className='skillbg relative flex justify-center'>
                {/* Logo with proper Link implementation */}
                <div className='w-fit absolute top-0 left-0'>
                    <Link href="/" onClick={handleLogoClick}>
                        <Image 
                            alt='logo' 
                            src={'/logo.png'} 
                            height={100} 
                            width={100} 
                            className="cursor-pointer"
                        />
                    </Link>
                </div>

                <div ref={py} className='absolute bottom-2/5'>
                    <Image alt='python' src={'/python.png'} width={70} height={100} />
                </div>
                <div ref={cpp} className='absolute bottom-2/5'>
                    <Image alt='cpp' src={'/c++.png'} width={70} height={100} />
                </div>
                <div ref={tailwind} className='absolute bottom-2/5'>
                    <Image alt='tailwind' src={'/tailwind.png'} width={70} height={100} />
                </div>
                <div ref={nex} className='absolute bottom-2/5'>
                    <Image alt='next' src={'/next.png'} width={70} height={100} />
                </div>
                <div ref={mongo} className='absolute bottom-2/5'>
                    <Image alt='mongo' src={'/mongo.png'} width={70} height={100} />
                </div>
                <div ref={sql} className='absolute bottom-2/5'>
                    <Image alt='sql' src={'/sql.png'} width={70} height={100} />
                </div>
                <div ref={no} className='absolute bottom-2/5'>
                    <Image alt='no' src={'/nodejs.png'} width={70} height={100} />
                </div>
                <div ref={js} className='absolute bottom-2/5'>
                    <Image alt='js' src={'/js.png'} width={70} height={100} />
                </div>
                <div ref={css} className='absolute bottom-2/5'>
                    <Image alt='css' src={'/css.png'} width={70} height={100} />
                </div>
                <div ref={ht} className='absolute bottom-2/5'>
                    <Image alt='html' src={'/html.png'} width={70} height={100} />
                </div>
            </div>
        </>
    )
}

export default Skill
