"use client";

import React, { useEffect, useState, useRef, useCallback } from 'react';
import { Testimonial } from './carousel/types';

interface InfiniteMovingCardsProps {
  items: Testimonial[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}

export const InfiniteMovingCards: React.FC<InfiniteMovingCardsProps> = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  
  // Animation state
  const scrollPos = useRef(0);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startScrollPos = useRef(0);
  const requestRef = useRef<number>(0);
  const isHovering = useRef(false);

  // We render duplicates to create the infinite effect
  const duplicatedItems = [...items, ...items];

  const getSpeed = () => {
    switch (speed) {
      case "fast": return 1.5;
      case "normal": return 1.0;
      case "slow": return 0.5;
      default: return 0.5;
    }
  };

  const animate = useCallback(() => {
    if (!scrollerRef.current) return;

    // The content is duplicated, so the wrap point is half the total width
    const maxScroll = scrollerRef.current.scrollWidth / 2;
    const speedValue = getSpeed();
    
    // Only auto-scroll if not dragging and (not hovering or pauseOnHover is false)
    if (!isDragging.current && (!pauseOnHover || !isHovering.current)) {
      if (direction === "left") {
        scrollPos.current -= speedValue;
      } else {
        scrollPos.current += speedValue;
      }
    }

    // Wrap logic to maintain infinite illusion
    // Range is strictly [-maxScroll, 0]
    if (scrollPos.current > 0) {
      // If we scrolled past 0 to the right, wrap to the end
      scrollPos.current = -maxScroll + (scrollPos.current % maxScroll);
    } else if (scrollPos.current <= -maxScroll) {
      // If we scrolled past the end to the left, wrap to 0
      scrollPos.current = scrollPos.current % maxScroll;
    }

    // Apply the transform
    scrollerRef.current.style.transform = `translateX(${scrollPos.current}px)`;

    requestRef.current = requestAnimationFrame(animate);
  }, [direction, pauseOnHover, speed]);

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [animate]);

  // Drag interaction handlers
  const handleMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
    isDragging.current = true;
    const pageX = 'touches' in e ? e.touches[0].pageX : (e as React.MouseEvent).pageX;
    startX.current = pageX;
    startScrollPos.current = scrollPos.current;
    
    if (containerRef.current) {
      containerRef.current.style.cursor = 'grabbing';
      containerRef.current.style.userSelect = 'none';
    }
  };

  const handleMouseMove = (e: MouseEvent | TouchEvent) => {
    if (!isDragging.current) return;
    
    // Prevent default to avoid scrolling the page on touch devices while swiping
    // e.preventDefault(); 
    
    const pageX = 'touches' in e ? (e as TouchEvent).touches[0].pageX : (e as MouseEvent).pageX;
    const diff = pageX - startX.current;
    
    // Update scroll position immediately
    scrollPos.current = startScrollPos.current + diff;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    if (containerRef.current) {
      containerRef.current.style.cursor = 'grab';
      containerRef.current.style.userSelect = 'auto';
    }
  };

  // Bind global event listeners for drag to handle moving outside the container
  useEffect(() => {
    const onMove = (e: MouseEvent | TouchEvent) => handleMouseMove(e);
    const onUp = () => handleMouseUp();
    
    window.addEventListener('mousemove', onMove);
    window.addEventListener('touchmove', onMove, { passive: false });
    window.addEventListener('mouseup', onUp);
    window.addEventListener('touchend', onUp);
    
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('touchmove', onMove);
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('touchend', onUp);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] cursor-grab ${className}`}
      onMouseEnter={() => isHovering.current = true}
      onMouseLeave={() => isHovering.current = false}
      onMouseDown={handleMouseDown}
      onTouchStart={handleMouseDown}
    >
      <ul
        ref={scrollerRef}
        className="flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap"
      >
        {duplicatedItems.map((item, idx) => (
          <li
            className="w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-[#01FFFF]/20 px-8 py-6 md:w-[450px] bg-[#01FFFF]/5 backdrop-blur-sm"
            // Using index in key because we are duplicating items intentionally
            key={`${item.id}-${idx}`}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <span className=" relative z-20 text-sm leading-[1.6] text-gray-100 font-normal">
                {item.quote}
              </span>
              <div className="relative z-20 mt-6 flex flex-row items-center">
                <img 
                  src={item.avatarUrl} 
                  alt={item.name}
                  className="h-10 w-10 rounded-full mr-4 object-cover border border-[#01FFFF]/20"
                  draggable={false}
                />
                <span className="flex flex-col gap-1">
                  <span className=" text-sm leading-[1.6] text-gray-400 font-normal">
                    {item.name}
                  </span>
                  <span className=" text-sm leading-[1.6] text-gray-400 font-normal">
                    {item.title}
                  </span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};

