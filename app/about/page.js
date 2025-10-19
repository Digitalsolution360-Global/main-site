"use client";

import BgLayout from '@/components/layout/bgLayout'
import Clients from '@/components/sections/clients'
import React from 'react'
import { motion } from 'motion/react'
import { IconTarget, IconUsers, IconTrophy, IconHeart, IconRocket, IconBulb, IconHome, IconChevronRight } from '@tabler/icons-react'
import Link from 'next/link'

function AboutPage() {
  const values = [
    {
      icon: IconTarget,
      title: "Results-Driven",
      description: "We focus on delivering measurable outcomes that directly impact your bottom line and business growth."
    },
    {
      icon: IconUsers,
      title: "Client-Centric",
      description: "Your success is our success. We work as an extension of your team, fully committed to your goals."
    },
    {
      icon: IconTrophy,
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, from strategy to execution."
    },
    {
      icon: IconHeart,
      title: "Integrity",
      description: "Transparency, honesty, and ethical practices form the foundation of our client relationships."
    },
    {
      icon: IconRocket,
      title: "Innovation",
      description: "We stay ahead of digital trends, constantly evolving our strategies to keep you competitive."
    },
    {
      icon: IconBulb,
      title: "Creativity",
      description: "We combine data-driven insights with creative thinking to craft unique solutions for your brand."
    }
  ];

  const team = [
    {
      expertise: "10+ Years",
      description: "Combined Industry Experience"
    },
    {
      expertise: "50+",
      description: "Expert Team Members"
    },
    {
      expertise: "500+",
      description: "Successful Projects Delivered"
    },
    {
      expertise: "98%",
      description: "Client Retention Rate"
    }
  ];

  return (
    <BgLayout>
      {/* Hero Section with Background Image */}
      <section className='relative h-screen flex items-center justify-center overflow-hidden'>
        {/* Background Image */}
        <div className='absolute inset-0'>
          <img
            src="/about/hero-image.webp"
            alt="About Us"
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
            <span className='text-blue-200'>About Us</span>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold mb-6'>
              About <span className='text-blue-500'>Us</span>
            </h1>
            <p className='text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed'>
              Empowering businesses with innovative digital solutions that drive growth and success.
            </p>
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
              transition={{ duration: 0.6 }}
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
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
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
            viewport={{ once: true, margin: "-100px" }}
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
              viewport={{ once: true, margin: "-100px" }}
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
              viewport={{ once: true, margin: "-100px" }}
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

      {/* Our Values */}
      <section className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className='text-center mb-16'
          >
            <h2 className='text-4xl md:text-5xl font-bold mb-4'>
              Our Core <span className='text-blue-600'>Values</span>
            </h2>
            <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
              These principles guide everything we do and shape how we work with our clients.
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className='bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1'
                >
                  <div className='w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-4'>
                    <Icon size={28} className='text-white' />
                  </div>
                  <h3 className='text-xl font-bold text-gray-900 mb-3'>{value.title}</h3>
                  <p className='text-gray-600 leading-relaxed'>{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Clients Component */}
      <Clients />

      {/* Team Stats */}
      <section className='py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className='text-center mb-16'
          >
            <h2 className='text-4xl md:text-5xl font-bold mb-4'>
              Our Team <span className='text-blue-200'>by Numbers</span>
            </h2>
            <p className='text-xl text-blue-100 max-w-3xl mx-auto'>
              A dedicated team of experts committed to your success
            </p>
          </motion.div>

          <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
            {team.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className='text-center'
              >
                <div className='text-5xl md:text-6xl font-bold mb-2'>{stat.expertise}</div>
                <div className='text-blue-200 font-medium'>{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 bg-gradient-to-br from-gray-50 to-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className='bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-12 text-white text-center relative overflow-hidden'
          >
            {/* Background decoration */}
            <div className='absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32'></div>
            <div className='absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full -ml-24 -mb-24'></div>

            <div className='relative z-10'>
              <h2 className='text-3xl md:text-4xl font-bold mb-4'>
                Ready to Transform Your Digital Presence?
              </h2>
              <p className='text-xl text-blue-100 mb-8 max-w-2xl mx-auto'>
                Let&apos;s work together to create digital solutions that drive real results for your business.
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <Link
                  href='/contact'
                  className='inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1'
                >
                  Get Started Today
                </Link>
                <Link
                  href='/services'
                  className='inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300'
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </BgLayout>
  )
}

export default AboutPage