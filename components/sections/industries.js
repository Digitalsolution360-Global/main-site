"use client";

import React, { useState } from "react";
import { motion, useAnimationFrame, useMotionValue } from "motion/react";

const industries = [
  { name: "Healthcare & Medical services", image: "/market/gmb/images/industries/healthcare.jpg" },
  { name: "E-commerce & D2C Brands", image: "/market/gmb/images/industries/retail.png" },
  { name: "Restaurants, Cafes & Cloud Kitchens", image: "/market/gmb/images/industries/travel.jpg" },
  { name: "Finance & Insurance", image: "/market/gmb/images/industries/finance.jpg" },
  { name: "IT, SaaS & Tech Startups", image: "/market/gmb/images/industries/startups.jpg" },
  { name: "Real Estate & Property Developers", image: "/market/gmb/images/industries/real-estate.png" },
  { name: "Education & Coaching Institutes", image: "/market/gmb/images/industries/education.jpg" },
  { name: "Professional Services: Lawyers, CA Firms, Consultants", image: "/market/gmb/images/industries/img8.webp" },
  { name: "Manufacturing & B2B Industrial Companies", image: "/market/gmb/images/industries/img9.jpeg" },
  { name: "Beauty, Wellness & Fitness", image: "/market/gmb/images/industries/img10.webp" },
  { name: "Home Services", image: "/market/gmb/images/industries/img11.png" },
 
  
  
];

// duplicate for seamless loop
const duplicatedIndustries = [...industries, ...industries, ...industries];

export default function Industries() {
  const [paused, setPaused] = useState(false);
  const x = useMotionValue(0);

  useAnimationFrame(() => {
    if (!paused) {
      const speed = 0.6; // slow & premium
      const cardWidth = 360; // approx card + gap
      const resetPoint = -(cardWidth * industries.length);

      const next = x.get() - speed;
      x.set(next <= resetPoint ? 0 : next);
    }
  });

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="md:text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold">
            Industries We Serve
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-600 leading-relaxed">
            We partner with businesses across multiple industries, delivering
            scalable digital solutions that drive growth, engagement, and results.
          </p>
        </div>

      </div>

      {/* Scroll Area */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

        <motion.div
          className="flex gap-8 px-4"
          style={{ x }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
         {duplicatedIndustries.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -6 }}
            className="
              relative flex-shrink-0
              w-[90vw] sm:w-[320px] lg:w-[360px]
              bg-white rounded-3xl
              shadow-xl overflow-hidden
              cursor-pointer
            "
          >
            {/* Image Section */}
            <div className="h-[190px] overflow-hidden rounded-t-3xl">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>
        
            {/* Title Section */}
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-slate-800">
                {item.name}
              </h3>
            </div>
          </motion.div>
        ))}

        </motion.div>
      </div>
    </section>
  );
}
