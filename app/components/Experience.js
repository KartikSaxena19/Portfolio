// components/EducationTimeline.js
'use client';

export default function Experience() {
  const educationEntries = [
    { year: "2024-2025", Company: "Cre8mark", place: "greater noida" },
    { year: "2024-2025", Company: "GSSOC EXTD",place: "Lucknow" },
    { year: "2024-2025", Company: "HackToBerFest",place: "Lucknow" }
  ];

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h2 
        
        className="text-3xl font-bold mb-10 text-gray-600 font-mono "
      >
        Experience
      </h2>
      
      <div className="relative">
        {/* Vertical line */}
      <div className="absolute -left-4 top-0 h-full w-0.5 bg-gray-500"></div>
        
        <div className="space-y-8">
          {educationEntries.map((entry, index) => (
            <div
              key={index}
              className="relative pl-20"
            >
              {/* Year badge */}
              <div className="absolute p-3.5 left-0 top-0 flex items-center justify-center w-16 h-16 rounded-full bg-blend-saturation shadow-lg">
                <span className="text-gray-600 font-medium text-sm txt">{entry.year}</span>
              </div>
              
              {/* Institution card */}
              <div className="p-6  rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300  ">
                <h3 className="text-xl txt font-semibold text-gray-950  ">
                  {entry.Company}
                </h3>
                <div className="flex items-center text-gray-600 txt text-sm">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {entry.place}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}