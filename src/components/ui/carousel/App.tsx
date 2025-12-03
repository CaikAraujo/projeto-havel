"use client";

import React from 'react';
import { InfiniteMovingCards } from '../InfiniteMovingCards';
import { TESTIMONIALS } from './constants';

export default function App() {
  return (
    <div className="w-full py-16 md:py-24 bg-background flex flex-col items-center justify-center px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center">
        <h2 className="text-center text-3xl md:text-5xl font-bold font-sans bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-12">
          Ce que disent nos clients
        </h2>
        <InfiniteMovingCards
          items={TESTIMONIALS}
          direction="left"
          speed="slow"
        />
      </div>
    </div>
  );
}

