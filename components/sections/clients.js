"use client";

import React, { useRef, useState, useEffect } from 'react'
import { motion, useAnimationFrame, useMotionValue, useTransform, useInView } from 'motion/react'
import { IconUsers, IconBriefcase, IconCalendar, IconThumbUp } from '@tabler/icons-react'

function Clients() {
  const statsRef = useRef(null);
  const isInView = useInView(statsRef, { once: true, margin: "-100px" });

  const [counts, setCounts] = useState({
    clients: 0,
    projects: 0,
    years: 0,
    satisfaction: 0
  });

  useEffect(() => {
    if (isInView) {
      const duration = 2000; // 2 seconds
      const frameRate = 1000 / 60; // 60fps
      const totalFrames = duration / frameRate;

      const targets = {
        clients: 500,
        projects: 1000,
        years: 11,
        satisfaction: 98
      };

      let frame = 0;
      const counter = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);

        setCounts({
          clients: Math.floor(easeOutQuart * targets.clients),
          projects: Math.floor(easeOutQuart * targets.projects),
          years: Math.floor(easeOutQuart * targets.years),
          satisfaction: Math.floor(easeOutQuart * targets.satisfaction)
        });

        if (frame >= totalFrames) {
          clearInterval(counter);
          setCounts(targets);
        }
      }, frameRate);

      return () => clearInterval(counter);
    }
  }, [isInView]);

  const clients = [
   
    { name: 'Bliss 32 Dental', logo: '/clients/Bliss-32-Dental.webp' },
    { name: 'Atithi Home', logo: '/clients/atithi.png' },
    { name: 'French club', logo: '/clients/French-club.png' },
    { name: 'Ceilkraft', logo: '/clients/ceilkraft.png' },
    { name: 'Sri Poly Clinic', logo: '/clients/sri-poly-clinic.png' },
    { name: 'Maxalign Dental', logo: '/clients/maxalign-dental.webp' },
    { name: 'Preesha Global', logo: '/clients/preesha-global.webp' },
    { name: 'Prudent BV', logo: '/clients/prudentbv.webp' },
    { name: 'Raj Nursing Home', logo: '/clients/raj-nursing-home.webp' },
    { name: 'The Great Herbal', logo: '/clients/the-great-herbal.webp' },
    
   
    
  ];

  // Duplicate clients array multiple times for seamless infinite scroll
  const duplicatedClients = [...clients, ...clients, ...clients, ...clients];

  const [isPaused, setIsPaused] = useState(false);
  const xPos = useMotionValue(0);

  useAnimationFrame((time, delta) => {
    if (!isPaused) {
      // Move left by 1 pixel per frame
      const newValue = xPos.get() - 1;

      // Card width (192px) + gap (32px) = 224px per item
      const resetPoint = -(224 * clients.length);

      if (newValue <= resetPoint) {
        xPos.set(0);
      } else {
        xPos.set(newValue);
      }
    }
  });

  return (
    <section className='py-10 overflow-hidden'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className='text-center'
        >
          <h2 className='text-4xl md:text-5xl font-bold mb-4'>
            Trusted by <span className='text-blue-600'>Leading Brands</span>
          </h2>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
            We&apos;re proud to partner with incredible businesses across industries, helping them achieve their digital goals.
          </p>
        </motion.div>
      </div>

      {/* Infinite Scrolling Container */}
      <div className='relative overflow-hidden'>
        {/* Gradient overlays for fade effect */}
        <div className='absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none'></div>
        <div className='absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none'></div>

        <motion.div
          className='flex gap-8'
          style={{ x: xPos }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {duplicatedClients.map((client, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className='flex-shrink-0 w-69 h-40 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center p-6 group cursor-pointer'
            >
              <img
                src={client.logo}
                alt={client.name}
                className='max-w-full max-h-full object-contain transition-all duration-300'
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Stats Section */}
      <motion.div
        ref={statsRef}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16'
      >
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
          <motion.div 
            whileHover={{ y: -8 }}
            className='relative text-center bg-white hover:bg-blue-600 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 pt-16 pb-8 px-6 group'
          >
            <div className='absolute -top-8 left-1/2 -translate-x-1/2'>
              <div className='w-16 h-16 bg-blue-600 group-hover:bg-blue-700 rounded-full flex items-center justify-center shadow-lg transition-colors duration-300'>
                <IconUsers className='w-8 h-8 text-white' stroke={2} />
              </div>
            </div>
            <p className='text-4xl md:text-5xl font-bold text-blue-600 group-hover:text-white mb-2 transition-colors duration-300'>{counts.clients}+</p>
            <p className='text-gray-600 group-hover:text-white font-medium transition-colors duration-300'>Happy Clients</p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -8 }}
            className='relative text-center bg-white hover:bg-blue-600 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 pt-16 pb-8 px-6 group'
          >
            <div className='absolute -top-8 left-1/2 -translate-x-1/2'>
              <div className='w-16 h-16 bg-blue-600 group-hover:bg-blue-700 rounded-full flex items-center justify-center shadow-lg transition-colors duration-300'>
                <IconBriefcase className='w-8 h-8 text-white' stroke={2} />
              </div>
            </div>
            <p className='text-4xl md:text-5xl font-bold text-blue-600 group-hover:text-white mb-2 transition-colors duration-300'>{counts.projects}+</p>
            <p className='text-gray-600 group-hover:text-white font-medium transition-colors duration-300'>Projects Completed</p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -8 }}
            className='relative text-center bg-white hover:bg-blue-600 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 pt-16 pb-8 px-6 group'
          >
            <div className='absolute -top-8 left-1/2 -translate-x-1/2'>
              <div className='w-16 h-16 bg-blue-600 group-hover:bg-blue-700 rounded-full flex items-center justify-center shadow-lg transition-colors duration-300'>
                <IconCalendar className='w-8 h-8 text-white' stroke={2} />
              </div>
            </div>
            <p className='text-4xl md:text-5xl font-bold text-blue-600 group-hover:text-white mb-2 transition-colors duration-300'>{counts.years}+</p>
            <p className='text-gray-600 group-hover:text-white font-medium transition-colors duration-300'>Years Experience</p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -8 }}
            className='relative text-center bg-white hover:bg-blue-600 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 pt-16 pb-8 px-6 group'
          >
            <div className='absolute -top-8 left-1/2 -translate-x-1/2'>
              <div className='w-16 h-16 bg-blue-600 group-hover:bg-blue-700 rounded-full flex items-center justify-center shadow-lg transition-colors duration-300'>
                <IconThumbUp className='w-8 h-8 text-white' stroke={2} />
              </div>
            </div>
            <p className='text-4xl md:text-5xl font-bold text-blue-600 group-hover:text-white mb-2 transition-colors duration-300'>{counts.satisfaction}%</p>
            <p className='text-gray-600 group-hover:text-white font-medium transition-colors duration-300'>Client Satisfaction</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Clients
