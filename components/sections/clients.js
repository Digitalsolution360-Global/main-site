"use client";

import React, { useRef, useState } from 'react'
import { motion, useAnimationFrame, useMotionValue, useTransform } from 'motion/react'

function Clients() {
  const clients = [
    { name: 'Bliss 32 Dental', logo: '/clients/Bliss-32-Dental.webp' },
    { name: 'BD Services', logo: '/clients/bd-services.webp' },
    { name: 'Client 12', logo: '/clients/client12.webp' },
    { name: 'Client 8', logo: '/clients/client8.webp' },
    { name: 'Client 9', logo: '/clients/client9.webp' },
    { name: 'Master Dinesh', logo: '/clients/master-dinesh.webp' },
    { name: 'Maxalign Dental', logo: '/clients/maxalign-dental.webp' },
    { name: 'Preesha Global', logo: '/clients/preesha-global.webp' },
    { name: 'Prime Holidays', logo: '/clients/prime-holidays.webp' },
    { name: 'Prudent BV', logo: '/clients/prudentbv.webp' },
    { name: 'Raj Nursing Home', logo: '/clients/raj-nursing-home.webp' },
    { name: 'The Great Herbal', logo: '/clients/the-great-herbal.webp' },
    { name: 'The Tickle Toe', logo: '/clients/the-tickle-toe.webp' },
  ];

  // Duplicate clients array multiple times for seamless infinite scroll
  const duplicatedClients = [...clients, ...clients];

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
      <div className='relative'>
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
              className='flex-shrink-0 w-48 h-32 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center p-6 group cursor-pointer'
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
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16'
      >
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
          <div className='text-center'>
            <p className='text-4xl md:text-5xl font-bold text-blue-600 mb-2'>500+</p>
            <p className='text-gray-600 font-medium'>Happy Clients</p>
          </div>
          <div className='text-center'>
            <p className='text-4xl md:text-5xl font-bold text-blue-600 mb-2'>1000+</p>
            <p className='text-gray-600 font-medium'>Projects Completed</p>
          </div>
          <div className='text-center'>
            <p className='text-4xl md:text-5xl font-bold text-blue-600 mb-2'>15+</p>
            <p className='text-gray-600 font-medium'>Years Experience</p>
          </div>
          <div className='text-center'>
            <p className='text-4xl md:text-5xl font-bold text-blue-600 mb-2'>98%</p>
            <p className='text-gray-600 font-medium'>Client Satisfaction</p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Clients
