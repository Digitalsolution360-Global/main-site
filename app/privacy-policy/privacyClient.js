"use client";

import BgLayout from '@/components/layout/bgLayout'
import Clients from '@/components/sections/clients'
import React, { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { IconTarget, IconUsers, IconTrophy, IconHeart, IconRocket, IconBulb, IconHome, IconChevronRight } from '@tabler/icons-react'
import Link from 'next/link'

function PrivacyPage() {
  return (
    <BgLayout>
      {/* Hero Section with Background Image */}
      <section className='relative h-[50vh] mt-21 lg:mt-15 flex items-center justify-center overflow-hidden'>
        {/* Background Image */}
        <div className='absolute inset-0'>
          <img
            src="/about/hero-image.webp"
            alt="Privacy Policy"
            className='w-full h-full object-cover'
          />
          {/* Overlay */}
          <div className='absolute inset-0 bg-black/70'></div>
        </div>

        {/* Content */}
        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white'>
          {/* Breadcrumbs */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='flex items-center justify-center gap-2 text-sm mb-6'
          >
            <Link href='/' className='flex items-center gap-1 hover:text-blue-200 transition-colors'>
              <IconHome size={18} />
              <span>Home</span>
            </Link>
            <IconChevronRight size={16} className='text-blue-300' />
            <span className='text-blue-200'>Privacy Policy</span>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold mb-6'>
              Privacy <span className='text-blue-500'>Policy</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className='py-10'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4 }}
            >
              <h2 className='text-4xl md:text-5xl font-bold mb-6'>
                Our <span className='text-blue-600'>Story</span>
              </h2>
              <div className='w-20 h-1 bg-blue-600 mb-6'></div>
              <p className='text-lg text-gray-600 mb-4 leading-relaxed'>
                Digital Solution 360 was founded with a simple yet powerful vision: to help businesses of all sizes harness the full potential of digital marketing and technology. What started as a small team of passionate digital enthusiasts has grown into a full-service digital agency serving clients across the globe.
              </p>
              <p className='text-lg text-gray-600 mb-4 leading-relaxed'>
                Over the years, we&apos;ve evolved with the digital landscape, continuously adapting our strategies and expanding our expertise to stay ahead of industry trends. From SEO and social media marketing to custom web development and e-commerce solutions, we&apos;ve helped hundreds of businesses transform their digital presence and achieve measurable results.
              </p>
              <p className='text-lg text-gray-600 leading-relaxed'>
                Today, we&apos;re proud to be recognized as trusted partners who not only deliver exceptional results but also genuinely care about our clients&apos; success. Every project we undertake is an opportunity to make a real difference in someone&apos;s business journey.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className='relative'
            >
              <img
                src="/about/about-us.webp"
                alt="Our Story"
                className='rounded-2xl shadow-2xl w-full'
              />
              <div className='absolute -bottom-6 -right-6 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -z-10'></div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Mission & Vision from mission-vision component */}
      <section className='py-10 '>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            // viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className='text-center mb-12'
          >
            <h2 className='text-4xl md:text-5xl font-bold mb-4'>
              Our <span className='text-blue-600'>Mission & Vision</span>
            </h2>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              // viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className='bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300'
            >
              <div className='w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6'>
                <IconTarget size={32} className='text-white' />
              </div>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>Our Mission</h3>
              <p className='text-gray-600 leading-relaxed'>
                To empower businesses of all sizes with the digital tools and strategies they need to thrive online. We are committed to demystifying digital marketing, delivering exceptional ROI, and building long-term partnerships that drive tangible success.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              // viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className='bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300'
            >
              <div className='w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6'>
                <IconRocket size={32} className='text-white' />
              </div>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>Our Vision</h3>
              <p className='text-gray-600 leading-relaxed'>
                We envision a digital landscape where every business, from local startups to global enterprises, can leverage technology to realize its full potential and connect authentically with its audience. We strive to be the catalyst for digital transformation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </BgLayout>
  )
}

export default PrivacyPage
