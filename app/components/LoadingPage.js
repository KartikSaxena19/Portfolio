// components/LoadingPage.js
'use client';

import Head from 'next/head';
import { useEffect, useRef } from 'react';

const LoadingPage = ({ onLoadingComplete }) => {
  const loadingRef = useRef(null);
  const logoNameRef = useRef(null);

  useEffect(() => {
    // Dynamically import GSAP to avoid SSR issues
    const loadGSAP = async () => {
      const { gsap } = await import('gsap');

      // Logo name animation
      gsap.fromTo(
        logoNameRef.current,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 2,
          delay: 0.5,
        }
      );

      // Loading page fade out animation
      gsap.fromTo(
        loadingRef.current,
        { opacity: 1 },
        {
          opacity: 0,
          duration: 1.5,
          delay: 3,
          onComplete: () => {
            if (onLoadingComplete) {
              onLoadingComplete();
            }
          }
        }
      );
    };

    loadGSAP();
  }, [onLoadingComplete]);

  return (
    <>
    <Head>
        <title>Kartik Saxena</title>
    </Head>
    <div 
      ref={loadingRef}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden"
      style={{
        backgroundColor: '#F5F2E8',
        backgroundImage: `
          radial-gradient(circle at 20% 80%, rgba(212, 200, 176, 0.3) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(212, 200, 176, 0.3) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, rgba(212, 200, 176, 0.2) 0%, transparent 50%),
          conic-gradient(from 0deg at 15% 15%, transparent 0deg, rgba(212, 200, 176, 0.1) 90deg, transparent 180deg),
          conic-gradient(from 180deg at 85% 85%, transparent 0deg, rgba(212, 200, 176, 0.1) 90deg, transparent 180deg),
          repeating-conic-gradient(from 0deg at 30% 30%, transparent 0deg, rgba(212, 200, 176, 0.2) 2deg, transparent 4deg),
          repeating-conic-gradient(from 90deg at 70% 70%, transparent 0deg, rgba(212, 200, 176, 0.15) 2deg, transparent 4deg)
        `,
        backgroundSize: '800px 800px, 600px 600px, 400px 400px, 300px 300px, 300px 300px, 500px 500px, 400px 400px',
        backgroundPosition: '0% 0%, 100% 100%, 50% 50%, 0% 0%, 100% 100%, 0% 0%, 100% 100%'
      }}
    >
      {/* Logo */}
      <div className="mb-8">
        <img 
          src="/logo.png" 
          alt="Kartik Logo"
          className="w-64 h-auto"
        />
      </div>
      
      {/* Name */}
      <div className="name-container">
        <div 
          ref={logoNameRef}
          className="text-4xl font-bold text-gray-800 tracking-wide font-sans"
        >
          Kartik Saxena
        </div>
      </div>
    </div>
    </>
  );
};

export default LoadingPage;