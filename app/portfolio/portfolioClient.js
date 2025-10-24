"use client";

import BgLayout from '@/components/layout/bgLayout'
import React from 'react'
import { motion } from 'motion/react'
import { IconHome, IconChevronRight, IconCode, IconBrandGoogle, IconSearch, IconBrandFacebook, IconDeviceMobile, IconArrowRight } from '@tabler/icons-react'
import Link from 'next/link'

function PortfolioPage() {
  const portfolioCategories = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Custom websites, e-commerce platforms, and web applications built with modern tech.',
      icon: IconCode,
      image: '/portfolio/cards/web-development.webp',
      projectCount: '150+',
      link: '/portfolio/web-development',
      color: 'from-blue-500 to-blue-700'
    },
    {
      id: 2,
      title: 'Google My Business',
      description: 'Local SEO optimization, GMB management, and reputation building for local businesses.',
      icon: IconBrandGoogle,
      image: '/portfolio/cards/gmb.webp',
      projectCount: '200+',
      link: '/portfolio/google-my-business',
      color: 'from-red-500 to-orange-600'
    },
    {
      id: 3,
      title: 'SEO Services',
      description: 'Comprehensive SEO strategies to boost rankings, organic traffic, and online visibility.',
      icon: IconSearch,
      image: '/portfolio/cards/seo.webp',
      projectCount: '180+',
      link: '/portfolio/seo',
      color: 'from-green-500 to-emerald-700'
    },
    {
      id: 4,
      title: 'Social Media Marketing',
      description: 'Engaging campaigns across all platforms to build brand awareness and drive conversions.',
      icon: IconBrandFacebook,
      image: '/portfolio/cards/social-media.webp',
      projectCount: '220+',
      link: '/portfolio/social-media',
      color: 'from-purple-500 to-pink-600'
    },
    {
      id: 5,
      title: 'App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android devices.',
      icon: IconDeviceMobile,
      image: '/portfolio/cards/app-development.webp',
      projectCount: '80+',
      link: '/portfolio/app-development',
      color: 'from-indigo-500 to-purple-700'
    }
  ];

  return (
    <BgLayout>
      {/* Hero Section with Background Image - Full Screen Height */}
      <section className='relative h-[50vh] mt-21 lg:mt-15 flex items-center justify-center overflow-hidden'>
        {/* Background Image */}
        <div className='absolute inset-0'>
          <img
            src="/portfolio/hero-image.webp"
            alt="Our Portfolio"
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
            <span className='text-blue-200'>Portfolio</span>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold mb-6'>
              Our <span className='text-blue-500'>Portfolio</span>
            </h1>
            <p className='text-xl md:text-2xl text-gray-50 max-w-3xl mx-auto leading-relaxed'>
              Showcasing successful projects that transformed businesses and delivered exceptional results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Overview */}
      <section className='py-10'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='grid grid-cols-2 md:grid-cols-4 gap-6'
          >
            {[
              { number: '830+', label: 'Projects Completed' },
              { number: '300+', label: 'Happy Clients' },
              { number: '50+', label: 'Industries Served' },
              { number: '98%', label: 'Success Rate' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className='bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-md text-center border border-gray-100'
              >
                <div className='text-4xl md:text-5xl font-bold text-blue-600 mb-2'>{stat.number}</div>
                <div className='text-gray-600 font-medium'>{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio Categories */}
      <section className='py-10'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='text-center mb-16'
          >
            <h2 className='text-4xl md:text-5xl font-bold mb-4'>
              Explore Our <span className='text-blue-600'>Work</span>
            </h2>
            <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
              Browse through our diverse portfolio categories to see how we&apos;ve helped businesses succeed across different digital channels.
            </p>
          </motion.div>

          {/* Category Cards */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {portfolioCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link href={category.link}>
                    <div className='group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full'>
                      {/* Background Image */}
                      <div className='relative h-56 overflow-hidden'>
                        <img
                          src={category.image}
                          alt={category.title}
                          className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-700'
                        />
                        {/* Gradient Overlay */}
                        {/* <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-80 group-hover:opacity-90 transition-opacity duration-500`}></div> */}
                        
                        {/* Icon */}
                        {/* <div className='absolute top-6 left-6'>
                          <div className='w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center'>
                            <Icon size={32} className='text-white' />
                          </div>
                        </div> */}

                        {/* Project Count */}
                        {/* <div className='absolute top-6 right-6'>
                          <div className='bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg'>
                            <span className='text-white font-bold'>{category.projectCount} Projects</span>
                          </div>
                        </div> */}
                      </div>

                      {/* Content */}
                      <div className='p-6'>
                        <h3 className='text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors'>
                          {category.title}
                        </h3>
                        <p className='text-gray-600 mb-4 leading-relaxed'>
                          {category.description}
                        </p>

                        {/* View More Link */}
                        <div className='flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all duration-300'>
                          <span>View Projects</span>
                          <IconArrowRight size={20} className='group-hover:translate-x-1 transition-transform' />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-10'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-12 text-white text-center relative overflow-hidden'
          >
            {/* Background decoration */}
            <div className='absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32'></div>
            <div className='absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full -ml-24 -mb-24'></div>

            <div className='relative z-10'>
              <h2 className='text-3xl md:text-4xl font-bold mb-4'>
                Ready to Start Your Project?
              </h2>
              <p className='text-xl text-blue-100 mb-8 max-w-2xl mx-auto'>
                Let&apos;s create something amazing together. Get in touch to discuss your next project.
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <Link
                  href='/contact'
                  className='inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1'
                >
                  Start Your Project
                </Link>
                <Link
                  href='/services'
                  className='inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300'
                >
                  View Services
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </BgLayout>
  )
}

export default PortfolioPage