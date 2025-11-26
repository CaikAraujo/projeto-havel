"use client";

import React from 'react';
import WhyChooseUs from '../sections/WhyChooseUs';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center">
      {/* Decorative background gradients */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-900/20 rounded-full blur-[120px]" />
      </div>

      <div className="w-full z-10">
        <WhyChooseUs />
      </div>
    </div>
  );
};

export default App;

