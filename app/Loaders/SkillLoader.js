'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
const ProjectLoader = () => {
  const languages = ['english', 'hindi', 'urdu'];
  const [currentLanguage, setCurrentLanguage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const text = {
    english: {
      loading: "Skills",
      pleaseWait: ""
    },
    hindi: {
      loading: "कुशलता", 
      pleaseWait: ""
    },
    urdu: {
      loading: "مہارت", 
      pleaseWait: ""
    }
  };

  useEffect(() => {
    const languageInterval = setInterval(() => {
      setCurrentLanguage((prev) => (prev + 1) % languages.length);
    }, 500);

    const timeout = setTimeout(() => {
      setIsLoading(false);
      clearInterval(languageInterval);
    }, 1500);

    return () => {
      clearInterval(languageInterval);
      clearTimeout(timeout);
    };
  }, []);

  if (!isLoading) return null;

  const currentLang = languages[currentLanguage];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col items-center justify-center transition-all duration-500">
        <div>

      <h2 className="text-4xl font-bold text-white transition-opacity duration-300">
        {text[currentLang].loading}
      </h2>
      {/* <Image src={'/box.gif'} width={100} height={100}></Image> */}
        </div>
      {text[currentLang].pleaseWait && (
        <p className="text-gray-400 mt-4 transition-opacity duration-300">
          {text[currentLang].pleaseWait}
        </p>
      )}
    </div>
  );
}

export default ProjectLoader;