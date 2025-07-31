// components/ClientWrapper.js
'use client';

import { useState } from 'react';
import LoadingPage from './LoadingPage';

export default function ClientWrapper({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <div 
      className="min-h-screen background"
      
    >
      {isLoading && <LoadingPage onLoadingComplete={handleLoadingComplete} />}
      {!isLoading && children}
    </div>
  );
}