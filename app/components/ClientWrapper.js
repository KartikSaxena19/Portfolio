'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import LoadingPage from './LoadingPage';

export default function ClientWrapper({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    // Set title immediately when component mounts
    document.title = 'Kartik Saxena';
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  // Only apply topographic background to home page
  const isHomePage = pathname === '/';

  return (
    <div 
      className={isHomePage ? "min-h-screen background" : ""}
      
    >
      {isLoading && <LoadingPage onLoadingComplete={handleLoadingComplete} />}
      {!isLoading && children}
    </div>
  );
}