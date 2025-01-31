import React from 'react';

const companyLogos = [
  'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=200&h=100&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1611162616305-c69b3037c7bb?w=200&h=100&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=200&h=100&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=200&h=100&fit=crop&auto=format',
];

export function CompanyLogos() {
  return (
    <div className="mt-20">
      <p className="text-sm text-gray-500 text-center mb-6">
        Trusted by leading companies worldwide
      </p>
      <div className="flex flex-wrap justify-center items-center gap-8 opacity-75">
        {companyLogos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Company ${index + 1}`}
            className="h-8 object-contain grayscale hover:grayscale-0 transition-all duration-300"
          />
        ))}
      </div>
    </div>
  );
}