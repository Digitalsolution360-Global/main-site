"use client";

import BgLayout from '@/components/layout/bgLayout'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { IconHome, IconChevronRight, IconExternalLink, IconX, IconCheck } from '@tabler/icons-react'
import Link from 'next/link'
import portfolioData from './content.json'

function WebDevPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImageModal = (image, title) => {
    setSelectedImage({ image, title });
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <BgLayout>
      {/* Hero Section - Full Screen Height */}
      <section className='relative h-screen flex items-center justify-center overflow-hidden'>
        {/* Background Image */}
        <div className='absolute inset-0'>
          <img
            src="/portfolio/web-dev-hero.webp"
            alt="Web Development Portfolio"
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
            <Link href='/portfolio' className='hover:text-blue-200 transition-colors'>
              Portfolio
            </Link>
            <IconChevronRight size={16} className='text-blue-300' />
            <span className='text-blue-200'>Web Development</span>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold mb-6'>
              Web Development <span className='text-blue-500'>Portfolio</span>
            </h1>
            <p className='text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed'>
              Custom websites, e-commerce platforms, and web applications built with modern technologies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className='py-20 bg-gradient-to-br from-gray-50 to-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          
          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='grid grid-cols-2 md:grid-cols-4 gap-6 mb-16'
          >
            {[
              { number: '150+', label: 'Websites Built' },
              { number: '100%', label: 'Client Satisfaction' },
              { number: '50+', label: 'Active Projects' },
              { number: '5+ Years', label: 'Experience' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className='bg-white p-6 rounded-xl shadow-md text-center'
              >
                <div className='text-3xl md:text-4xl font-bold text-blue-600 mb-2'>{stat.number}</div>
                <div className='text-gray-600 font-medium'>{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Projects List */}
          <div className='space-y-16'>
            {portfolioData.projects.map((project, index) => {
              // Alternate layout: even index = image left, odd index = image right
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className='bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-500'
                >
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${!isEven ? 'lg:grid-flow-dense' : ''}`}>
                    
                    {/* Image Section */}
                    <div 
                      className={`relative h-[200px] lg:h-full overflow-hidden group cursor-pointer ${!isEven ? 'lg:col-start-2' : ''}`}
                      onClick={() => openImageModal(project.image, project.title)}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className='w-full h-full object-top object-cover group-hover:scale-105 transition-transform duration-700'
                      />
                      {/* Overlay */}
                      {/* <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center pointer-events-none'>
                        <div className='text-white text-lg font-semibold bg-blue-600 px-6 py-3 rounded-lg'>
                          Click to Enlarge
                        </div>
                      </div> */}
                    </div>

                    {/* Content Section */}
                    <div className={`p-8 lg:p-10 ${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                      <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-2'>
                        {project.title}
                      </h2>
                      <p className='text-lg text-blue-600 font-semibold mb-4'>
                        {project.subtitle}
                      </p>
                      <p className='text-gray-600 mb-6 leading-relaxed'>
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className='flex flex-wrap gap-2 mb-6'>
                        {project.tags.map((tag, i) => (
                          <span
                            key={i}
                            className='px-4 py-2 bg-blue-50 text-blue-600 rounded-lg text-sm font-semibold'
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Highlights */}
                      <div className='mb-6'>
                        <h3 className='text-lg font-bold text-gray-900 mb-3'>Key Highlights:</h3>
                        <div className='space-y-2 pr-2'>
                          {project.highlights.map((highlight, i) => (
                            <div key={i} className='flex items-start gap-2'>
                              <IconCheck size={20} className='text-green-600 flex-shrink-0 mt-0.5' />
                              <span className='text-gray-600 text-sm leading-relaxed'>{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Visit Website Button */}
                      {project.isLink && (
                        <a
                          href={project.link}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-1'
                        >
                          Visit Website
                          <IconExternalLink size={20} />
                        </a>
                      )}
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 bg-white'>
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
                Ready to Build Your Dream Website?
              </h2>
              <p className='text-xl text-blue-100 mb-8 max-w-2xl mx-auto'>
                Let&apos;s create a stunning, high-performance website that drives results for your business.
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <Link
                  href='/contact'
                  className='inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1'
                >
                  Get Started Today
                </Link>
                <Link
                  href='/portfolio'
                  className='inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300'
                >
                  View More Projects
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/90'
            onClick={closeImageModal}
          >
            {/* Close Button */}
            <button
              onClick={closeImageModal}
              className='absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-[10000]'
            >
              <IconX size={28} />
            </button>

            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className='relative max-w-7xl w-full max-h-[90vh] flex flex-col'
              onClick={(e) => e.stopPropagation()}
            >
              {/* Title */}
              <div className='text-white text-center mb-4'>
                <h3 className='text-2xl font-bold'>{selectedImage.title}</h3>
              </div>

              {/* Image Container */}
              <div className='relative flex-1 flex items-center justify-center overflow-hidden rounded-xl'>
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className='max-w-full max-h-[85vh] w-auto h-auto object-contain rounded-xl shadow-2xl'
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </BgLayout>
  )
}

export default WebDevPage