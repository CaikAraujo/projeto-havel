"use client";

import React from 'react';
import { Phone, Facebook, Instagram, Linkedin } from 'lucide-react';

const ContentGroup = () => (
  <div className="flex items-center px-3 md:px-6">
    <div className="flex items-center gap-2 md:gap-3 whitespace-nowrap">
      <span className="text-xs md:text-sm font-medium">
        Experience premium <span className="underline decoration-1 underline-offset-2 hover:text-primary cursor-pointer transition-colors">eco-friendly cleaning</span> for your home, vehicle, and office - Swiss precision meets sustainable luxury
      </span>
      
      {/* Divider */}
      <span className="hidden md:inline-block w-1 h-1 rounded-full bg-primary/60 mx-2"></span>
      
      <div className="flex items-center gap-1.5 md:gap-2 font-semibold hover:text-primary transition-colors cursor-pointer">
        <Phone size={14} className="fill-current" />
        <span className="text-xs md:text-sm">+41 00 000 00 00</span>
      </div>
      
      {/* Social Icons */}
      <div className="flex items-center gap-2 md:gap-3 ml-3 md:ml-4">
        <a href="#" className="hover:text-primary hover:scale-110 transition-transform duration-200">
          <Facebook size={16} className="fill-current" />
        </a>
        <a href="#" className="hover:text-primary hover:scale-110 transition-transform duration-200">
          <Instagram size={16} />
        </a>
        <a href="#" className="hover:text-primary hover:scale-110 transition-transform duration-200">
          <Linkedin size={16} className="fill-current" />
        </a>
      </div>
    </div>
    
    {/* Section Separator */}
    <div className="w-px h-4 bg-white/20 mx-6"></div>
  </div>
);

export default function InfiniteTopBar() {
  return (
    <div className="fixed top-0 w-full bg-[#01FFFF]/10 backdrop-blur-sm text-text-primary overflow-hidden border-b border-[#01FFFF]/20 z-50 h-10 flex items-center shadow-md">
      {/* 
        The container moves -50% continuously.
        We render the content group multiple times to ensure no gaps on wide screens.
      */}
      <div className="animate-marquee flex items-center">
        {/* First set of content */}
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <ContentGroup key={`set1-${i}`} />
          ))}
        </div>
        
        {/* Duplicate set for the seamless loop effect */}
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <ContentGroup key={`set2-${i}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

export { InfiniteTopBar };

