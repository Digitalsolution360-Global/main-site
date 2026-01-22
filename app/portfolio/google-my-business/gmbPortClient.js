"use client";

import BgLayout from '@/components/layout/bgLayout'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { IconHome, IconChevronRight, IconMapPin, IconCheck, IconX, IconTrendingUp, IconStar } from '@tabler/icons-react'
import Link from 'next/link'
import portfolioData from './content.json'

function GoogleBusinessPage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeView, setActiveView] = useState({});

  const openImageModal = (image, title) => {
    setSelectedImage({ image, title });
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const toggleView = (projectId) => {
    setActiveView(prev => ({
      ...prev,
      [projectId]: prev[projectId] === 'after' ? 'before' : 'after'
    }));
  };

  return (
    <BgLayout>
      {/* Hero Section - Full Screen Height */}
      <section className='relative h-[50vh] mt-21 lg:mt-15 flex items-center justify-center overflow-hidden'>
        {/* Background Image */}
        <div className='absolute inset-0'>
          <img
            src="/portfolio/gmb-hero.webp"
            alt="Google My Business Portfolio"
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
            <span className='text-blue-200'>Google My Business</span>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold mb-6'>
              Google My Business <span className='text-blue-500'>Optimization</span>
            </h1>
            <p className='text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed'>
              Transform your local presence with our proven GMB strategies that drive real business results
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className='py-10'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='text-center max-w-4xl mx-auto mb-16'
          >
            <h2 className='text-4xl md:text-5xl font-bold mb-6'>
              Dominate Local <span className='text-blue-600'>Search Results</span>
            </h2>
            <p className='text-lg text-gray-600 leading-relaxed'>
              Our Google My Business optimization strategies have helped businesses increase their local visibility, 
              attract more customers, and dominate their local markets. See the dramatic transformations we&apos;ve achieved.
            </p>
          </motion.div>

          {/* Stats */}
          <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
            {[
              { number: '300%+', label: 'Avg. Profile Views Increase' },
              { number: '250%+', label: 'Boost in Customer Actions' },
              { number: '200+', label: 'GMB Profiles Optimized' },
              { number: '4.8★', label: 'Average Client Rating' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className='text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow'
              >
                <div className='text-4xl font-bold text-blue-600 mb-2'>{stat.number}</div>
                <div className='text-gray-600'>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section with Before/After */}
      <section className='py-10'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='text-center mb-16'
          >
            <h2 className='text-4xl md:text-5xl font-bold mb-4'>
              Our Success <span className='text-blue-600'>Stories</span>
            </h2>
            <p className='text-lg text-gray-600'>See the remarkable transformations we&apos;ve delivered</p>
          </motion.div>

          <div className='space-y-20'>
            {portfolioData.projects.map((project, index) => {
              const currentView = activeView[project.id] || 'before';
              const displayImage = currentView === 'after' ? project.afterImage : project.beforeImage;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start'
                >
                  {/* Image Column - Order changes for alternating layout */}
                  <motion.div
                    className={`${isEven ? 'lg:order-1' : 'lg:order-2'} relative`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Before/After Toggle Badge */}
                    <div className='absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg'>
                      <span className='font-bold text-sm text-gray-900'>
                        {currentView === 'after' ? 'After' : 'Before'} Optimization
                      </span>
                    </div>

                    {/* Image Container */}
                    <div 
                      className='relative rounded-2xl overflow-hidden shadow-2xl bg-white p-3 cursor-pointer group'
                      onClick={() => openImageModal(displayImage, `${project.title} - ${currentView === 'after' ? 'After' : 'Before'}`)}
                    >
                      <div className='relative aspect-[4/3] rounded-xl overflow-hidden'>
                        <img
                          src={displayImage}
                          alt={`${project.title} - ${currentView === 'after' ? 'After' : 'Before'}`}
                          className='w-full h-full object-cover'
                        />
                        {/* Hover Overlay */}
                        <div className='absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center'>
                          <span className='text-white opacity-0 group-hover:opacity-100 transition-opacity text-lg font-semibold'>
                            Click to Enlarge
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Toggle Button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => toggleView(project.id)}
                      className='mt-4 w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2'
                    >
                      <IconTrendingUp size={24} />
                      View {currentView === 'after' ? 'Before' : 'After'} Image
                    </motion.button>
                  </motion.div>

                  {/* Content Column */}
                  <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'} space-y-6`}>
                    {/* Title & Location */}
                    <div>
                      <h3 className='text-3xl md:text-4xl font-bold text-gray-900 mb-3'>
                        {project.title}
                      </h3>
                      <div className='flex items-center gap-2 text-blue-600'>
                        <IconMapPin size={20} />
                        <span className='text-lg font-medium'>{project.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className='text-lg text-gray-600 leading-relaxed'>
                      {project.description}
                    </p>

                    {/* Services */}
                    <div>
                      <h4 className='font-bold text-xl text-gray-900 mb-3'>Services Provided:</h4>
                      <div className='flex flex-wrap gap-2'>
                        {project.services.map((service, idx) => (
                          <span
                            key={idx}
                            className='bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium'
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Results */}
                    <div className='bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 rounded-2xl p-6'>
                      <div className='flex items-center gap-2 mb-4'>
                        <IconStar className='text-yellow-500' size={28} />
                        <h4 className='font-bold text-xl text-gray-900'>Results Achieved:</h4>
                      </div>
                      <ul className='space-y-3'>
                        {project.results.map((result, idx) => (
                          <li key={idx} className='flex items-start gap-3'>
                            <div className='flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-0.5'>
                              <IconCheck size={16} className='text-white' />
                            </div>
                            <span className='text-gray-700 font-medium'>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-10 bg-gradient-to-br from-blue-600 to-blue-800'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
              Ready to Transform Your GMB Profile?
            </h2>
            <p className='text-xl text-blue-100 mb-8'>
              Let&apos;s optimize your Google My Business presence and drive more local customers to your business.
            </p>
            <Link href='/contact'>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300'
              >
                Get Your Free GMB Audit
              </motion.button>
            </Link>
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
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className='relative max-w-3xl w-full'
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeImageModal}
                className='absolute -top-12 right-0 w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors z-10'
              >
                <IconX size={24} className='text-white' />
              </button>

              {/* Image Title */}
              <div className='absolute -top-10 left-0 text-white text-lg font-semibold'>
                {selectedImage.title}
              </div>

             <div className='bg-white rounded-2xl p-4 shadow-2xl max-h-[75vh] overflow-y-auto'>
  <img
    src={selectedImage.image}
    alt={selectedImage.title}
    className='w-full mx-auto object-contain rounded-lg'
  />
</div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </BgLayout>
  )
}

export default GoogleBusinessPage