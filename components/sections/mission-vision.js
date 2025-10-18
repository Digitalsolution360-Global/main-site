"use client";

import React from 'react'
import { motion } from 'motion/react'
import Link from 'next/link'
import { IconTarget, IconEye, IconSparkles } from '@tabler/icons-react'

function MissionVision() {
  return (
    <section className='py-20 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        
        {/* Header */}
        <div className='text-center mb-16'>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className='text-4xl md:text-5xl font-bold mb-4'
          >
            Tailored <span className='text-blue-500'>Solutions</span>, <br/> Proven <span className='text-blue-500'>Results</span>, <br/> And Exceptional <span className='text-blue-500'>Service</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='text-lg text-gray-600 max-w-3xl mx-auto'
          >
            We pride ourselves on delivering a value proposition that goes beyond expectations. Our approach is centered on understanding your business inside
          </motion.p>
        </div>

        {/* Grid Layout */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          
          {/* Large Card - Spans 2 cols and 2 rows */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className='md:col-span-2 lg:col-span-2 md:row-span-2 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden flex flex-col justify-end min-h-[500px]'
            style={{
              backgroundImage: 'url(/home/images/our-values.webp)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {/* Dark overlay for better text readability */}
            <div className='absolute inset-0 bg-black/50'></div>
            
            <div className='relative z-10'>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <p className='text-blue-200 text-sm font-semibold mb-2 uppercase tracking-wide'>digitalsolution360</p>
                <h3 className='text-3xl md:text-4xl font-bold mb-4'>Our Value</h3>
                <div className='w-20 h-1 bg-white mb-6'></div>
              </motion.div>

              <motion.h4
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className='text-xl md:text-2xl font-semibold mb-4'
              >
                Explore Our Unique Value Proposition & How We Drive Business Growth
              </motion.h4>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className='text-blue-100 text-lg leading-relaxed mb-8'
              >
                We're committed to delivering exceptional value to our clients. We understand that every business is unique, personalized approach to every project we undertake.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Link
                  href="/about"
                  className='inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1'
                >
                  Learn More
                  <IconSparkles size={20} />
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1'
          >
            <div className='w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-6'>
              <IconTarget size={28} className='text-white' />
            </div>
            
            <h3 className='text-2xl font-bold text-gray-800 mb-4'>Our Mission</h3>
            
            <p className='text-gray-600 leading-relaxed'>
              To empower businesses of all sizes with the digital tools and strategies they need to thrive online. We are committed to demystifying digital marketing, delivering exceptional ROI, and building long-term partnerships that drive tangible success.
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className='bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1'
          >
            <div className='w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-6'>
              <IconEye size={28} className='text-white' />
            </div>
            
            <h3 className='text-2xl font-bold text-gray-800 mb-4'>Our Vision</h3>
            
            <p className='text-gray-600 leading-relaxed'>
              We envision a digital landscape where every business, from local startups in Abu Dhabi to global enterprises, can leverage technology to realize its full potential and connect authentically with its audience.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default MissionVision