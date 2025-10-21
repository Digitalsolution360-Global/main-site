"use client";

import BgLayout from '@/components/layout/bgLayout'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { IconHome, IconChevronRight, IconDeviceMobile, IconCheck, IconStar, IconDownload, IconUsers, IconExternalLink, IconX, IconBrandApple, IconBrandAndroid, IconWorld } from '@tabler/icons-react'
import Link from 'next/link'
import portfolioData from './content.json'

function AppDevPage() {
  const [selectedApp, setSelectedApp] = useState(null);

  const openAppModal = (app) => {
    setSelectedApp(app);
  };

  const closeAppModal = () => {
    setSelectedApp(null);
  };

  const getPlatformIcon = (platform) => {
    switch(platform) {
      case 'iOS':
        return <IconBrandApple size={20} />;
      case 'Android':
        return <IconBrandAndroid size={20} />;
      case 'Web':
        return <IconWorld size={20} />;
      default:
        return <IconDeviceMobile size={20} />;
    }
  };

  return (
    <BgLayout>
      {/* Hero Section - Full Screen Height */}
      <section className='relative h-[50vh] mt-21 lg:mt-15 flex items-center justify-center overflow-hidden'>
        {/* Background Image */}
        <div className='absolute inset-0'>
          <img
            src="/portfolio/app-dev-hero.webp"
            alt="App Development Portfolio"
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
            <Link href='/' className='flex items-center gap-1 hover:text-blue-400 transition-colors'>
              <IconHome size={18} />
              <span>Home</span>
            </Link>
            <IconChevronRight size={16} className='text-blue-400' />
            <Link href='/portfolio' className='hover:text-blue-400 transition-colors'>
              Portfolio
            </Link>
            <IconChevronRight size={16} className='text-blue-400' />
            <span className='text-blue-400'>App Development</span>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className='flex items-center justify-center gap-4 mb-6'>
              <IconDeviceMobile size={80} className='text-indigo-400' />
            </div>
            <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold mb-6'>
              Mobile App <span className='text-transparent bg-clip-text bg-blue-500'>Development</span>
            </h1>
            <p className='text-xl md:text-2xl text-pink-100 max-w-4xl mx-auto leading-relaxed'>
              Building innovative mobile applications that users love and businesses rely on
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
              Transforming Ideas Into <span className='text-transparent bg-clip-text bg-blue-500'>Powerful Apps</span>
            </h2>
            <p className='text-lg text-gray-600 leading-relaxed'>
              We specialize in creating high-performance, user-friendly mobile applications for iOS and Android. 
              From concept to launch and beyond, we deliver apps that drive engagement and business growth.
            </p>
          </motion.div>

          {/* Overall Stats */}
          <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mb-16'>
            {[
              { number: '160K+', label: 'Total Downloads', icon: IconDownload },
              { number: '90K+', label: 'Active Users', icon: IconUsers },
              { number: '4.7', label: 'Average Rating', icon: IconStar },
              { number: '3', label: 'Apps Launched', icon: IconDeviceMobile }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className='bg-white rounded-2xl text-center p-6 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2'
              >
                <stat.icon size={36} className='text-indigo-600 mb-3 mx-auto' />
                <div className='text-3xl font-bold text-gray-900 mb-1'>{stat.number}</div>
                <div className='text-sm text-gray-600'>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Apps Showcase Section */}
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
              Our Mobile <span className='text-transparent bg-clip-text bg-blue-500'>Applications</span>
            </h2>
            <p className='text-lg text-gray-600'>Innovative solutions across different industries</p>
          </motion.div>

          <div className='space-y-20'>
            {portfolioData.apps.map((app, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={app.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center'
                >
                  {/* App Image Column */}
                  <motion.div
                    className={`${isEven ? 'lg:order-1' : 'lg:order-2'} relative`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div 
                      className='relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br ${app.color} p-8 cursor-pointer group'
                      onClick={() => openAppModal(app)}
                    >
                      <div className='bg-white rounded-2xl p-4 shadow-xl'>
                        <img
                          src={app.image}
                          alt={app.name}
                          className='w-full h-auto rounded-xl'
                        />
                      </div>
                      {/* Hover Overlay */}
                      <div className='absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center'>
                        <span className='text-white opacity-0 group-hover:opacity-100 transition-opacity text-lg font-semibold'>
                          Click to View Details
                        </span>
                      </div>
                    </div>

                    {/* Platforms */}
                    <div className='mt-6 flex items-center justify-center gap-3'>
                      {app.platforms.map((platform, idx) => (
                        <div
                          key={idx}
                          className='flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md'
                        >
                          {getPlatformIcon(platform)}
                          <span className='font-semibold text-gray-700'>{platform}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Content Column */}
                  <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'} space-y-6`}>
                    {/* Category Badge */}
                    <div>
                      <span className='bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold'>
                        {app.category}
                      </span>
                    </div>

                    {/* Title & Tagline */}
                    <div>
                      <h3 className='text-3xl md:text-4xl font-bold text-gray-900 mb-2'>
                        {app.name}
                      </h3>
                      <p className='text-xl text-gray-600 font-medium'>{app.tagline}</p>
                    </div>

                    {/* Description */}
                    <p className='text-lg text-gray-600 leading-relaxed'>
                      {app.description}
                    </p>

                    {/* Stats */}
                    <div className='grid grid-cols-2 gap-4'>
                      <div className='bg-gradient-to-br from-indigo-50 to-white border border-indigo-200 rounded-xl p-4'>
                        <div className='text-2xl font-bold text-indigo-600'>{app.stats.downloads}</div>
                        <div className='text-sm text-gray-600'>Downloads</div>
                      </div>
                      <div className='bg-gradient-to-br from-purple-50 to-white border border-purple-200 rounded-xl p-4'>
                        <div className='text-2xl font-bold text-purple-600'>{app.stats.rating}★</div>
                        <div className='text-sm text-gray-600'>Rating</div>
                      </div>
                      <div className='bg-gradient-to-br from-pink-50 to-white border border-pink-200 rounded-xl p-4'>
                        <div className='text-2xl font-bold text-pink-600'>{app.stats.users}</div>
                        <div className='text-sm text-gray-600'>Active Users</div>
                      </div>
                      <div className='bg-gradient-to-br from-cyan-50 to-white border border-cyan-200 rounded-xl p-4'>
                        <div className='text-2xl font-bold text-cyan-600'>{app.stats[Object.keys(app.stats)[3]]}</div>
                        <div className='text-sm text-gray-600'>{Object.keys(app.stats)[3].charAt(0).toUpperCase() + Object.keys(app.stats)[3].slice(1)}</div>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className='font-bold text-lg text-gray-900 mb-3'>Technologies Used:</h4>
                      <div className='flex flex-wrap gap-2'>
                        {app.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className='bg-gray-100 text-gray-700 px-3 py-1.5 rounded-lg text-sm font-medium'
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* App Link Button */}
                    <div className='flex gap-4'>
                      <motion.a
                        href={app.appLink}
                        target='_blank'
                        rel='noopener noreferrer'
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex-1 bg-gradient-to-r ${app.color} text-white py-4 px-6 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2`}
                      >
                        <IconExternalLink size={24} />
                        View App
                      </motion.a>
                      <motion.button
                        onClick={() => openAppModal(app)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className='bg-gray-200 text-gray-700 py-4 px-6 rounded-xl font-semibold text-lg hover:bg-gray-300 transition-all duration-300'
                      >
                        More Details
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
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
              Our Tech <span className='text-transparent bg-clip-text bg-blue-500'>Stack</span>
            </h2>
            <p className='text-lg text-gray-600'>Cutting-edge technologies for modern mobile apps</p>
          </motion.div>

          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {[
              'React Native', 'Flutter', 'Node.js', 'Express.js',
              'MongoDB', 'PostgreSQL', 'Firebase', 'AWS',
              'Redux', 'Socket.io', 'Payment Gateways', 'Push Notifications'
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className='bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 text-center'
              >
                <div className='text-lg font-bold text-gray-900'>{tech}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-10 bg-blue-600'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <IconDeviceMobile size={80} className='text-white mx-auto mb-6' />
            <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
              Have an App Idea?
            </h2>
            <p className='text-xl text-pink-100 mb-8'>
              Let&apos;s bring your vision to life with a mobile app that users will love and your business will thrive on.
            </p>
            <Link href='/contact'>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300'
              >
                Start Your App Project
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* App Details Modal */}
      <AnimatePresence>
        {selectedApp && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80'
            onClick={closeAppModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className='bg-white rounded-3xl p-8 md:p-12 max-w-4xl w-full max-h-[70vh] overflow-y-auto shadow-2xl relative'
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeAppModal}
                className='absolute top-4 right-4 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors'
              >
                <IconX size={24} />
              </button>

              {/* App Image */}
              <div className='mb-6'>
                <img
                  src={selectedApp.image}
                  alt={selectedApp.name}
                  className='w-full max-w-xs mx-auto h-auto rounded-2xl shadow-xl'
                />
              </div>

              {/* App Info */}
              <div className='text-center mb-6'>
                <span className='bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold'>
                  {selectedApp.category}
                </span>
                <h3 className='text-4xl font-bold text-gray-900 mt-4 mb-2'>{selectedApp.name}</h3>
                <p className='text-xl text-gray-600 mb-4'>{selectedApp.tagline}</p>
                <p className='text-lg text-gray-600 leading-relaxed'>{selectedApp.description}</p>
              </div>

              {/* Platforms */}
              <div className='flex items-center justify-center gap-3 mb-6'>
                {selectedApp.platforms.map((platform, idx) => (
                  <div
                    key={idx}
                    className='flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full'
                  >
                    {getPlatformIcon(platform)}
                    <span className='font-semibold text-gray-700'>{platform}</span>
                  </div>
                ))}
              </div>

              {/* Key Features */}
              <div className='mb-6'>
                <h4 className='text-2xl font-bold text-gray-900 mb-4 text-center'>Key Features</h4>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                  {selectedApp.features.map((feature, idx) => (
                    <div key={idx} className='flex items-start gap-2 bg-gray-50 rounded-lg p-3'>
                      <IconCheck size={20} className='text-green-500 flex-shrink-0 mt-0.5' />
                      <span className='text-gray-700'>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className='mb-6'>
                <h4 className='text-2xl font-bold text-gray-900 mb-4 text-center'>Technologies Used</h4>
                <div className='flex flex-wrap gap-2 justify-center'>
                  {selectedApp.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className='bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* View App Button */}
              <motion.a
                href={selectedApp.appLink}
                target='_blank'
                rel='noopener noreferrer'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full bg-gradient-to-r ${selectedApp.color} text-white py-4 px-8 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2`}
              >
                <IconExternalLink size={24} />
                View App on Store
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </BgLayout>
  )
}

export default AppDevPage