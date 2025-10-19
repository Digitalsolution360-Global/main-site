"use client";

import BgLayout from '@/components/layout/bgLayout'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { IconHome, IconChevronRight, IconBrandInstagram, IconCheck, IconTrendingUp, IconUsers, IconHeart, IconPhoto, IconExternalLink, IconX, IconStar } from '@tabler/icons-react'
import Link from 'next/link'
import portfolioData from './content.json'

function SocialMediaPage() {
  const [selectedClient, setSelectedClient] = useState(null);

  return (
    <BgLayout>
      {/* Hero Section - Full Screen Height */}
      <section className='relative h-[50vh] mt-21 lg:mt-15 flex items-center justify-center overflow-hidden'>
        {/* Background Image */}
        <div className='absolute inset-0'>
          <img
            src="/portfolio/social-media-hero.webp"
            alt="Social Media Portfolio"
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
            <span className='text-blue-400'>Social Media</span>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className='flex items-center justify-center gap-4 mb-6'>
              <IconBrandInstagram size={80} className='text-pink-400' />
            </div>
            <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold mb-6'>
              Social Media <span className='text-transparent bg-clip-text bg-blue-500'>Marketing</span>
            </h1>
            <p className='text-xl md:text-2xl text-pink-100 max-w-4xl mx-auto leading-relaxed'>
              Creating viral content and building engaged communities that drive real business growth
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
              Transform Your <span className='text-transparent bg-clip-text bg-blue-500'>Social Presence</span>
            </h2>
            <p className='text-lg text-gray-600 leading-relaxed'>
              We specialize in creating scroll-stopping content that not only gets likes but drives real business results. 
              From strategy to execution, we handle everything to make your brand stand out in the crowded social media landscape.
            </p>
          </motion.div>

          {/* Overall Stats */}
          <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mb-16'>
            {[
              { icon: IconUsers, number: '25K+', label: 'Total Followers Grown', color: 'text-pink-600' },
              { icon: IconHeart, number: '500K+', label: 'Total Engagement', color: 'text-red-600' },
              { icon: IconPhoto, number: '800+', label: 'Content Pieces Created', color: 'text-purple-600' },
              { icon: IconTrendingUp, number: '400%', label: 'Avg. Growth Rate', color: 'text-blue-600' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className='bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2'
              >
                <stat.icon size={36} className={`${stat.color} mb-3`} />
                <div className='text-3xl font-bold text-gray-900 mb-1'>{stat.number}</div>
                <div className='text-sm text-gray-600'>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Showcase Section */}
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
              Our Success <span className='text-transparent bg-clip-text bg-blue-500'>Stories</span>
            </h2>
            <p className='text-lg text-gray-600'>Brands we&apos;ve helped dominate social media</p>
          </motion.div>

          <div className='space-y-16'>
            {portfolioData.clients.map((client, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={client.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className='bg-white rounded-3xl shadow-2xl overflow-hidden'
                >
                  <div className='grid grid-cols-1 lg:grid-cols-2 gap-0'>
                    
                    {/* Instagram Embed Column */}
                    <div className={`${isEven ? 'lg:order-1' : 'lg:order-2'} bg-gradient-to-br ${client.color} p-8 flex flex-col justify-center items-center`}>
                      <div className='w-full max-w-md'>
                        {/* Instagram Preview Card */}
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className='bg-white rounded-2xl p-6 shadow-2xl'
                        >
                          <div className='flex items-center gap-3 mb-4'>
                            <div className='w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center'>
                              <IconBrandInstagram size={28} className='text-white' />
                            </div>
                            <div>
                              <div className='font-bold text-gray-900'>{client.name}</div>
                              <div className='text-sm text-gray-500'>{client.handle}</div>
                            </div>
                          </div>

                          {/* Stats Grid */}
                          <div className='grid grid-cols-2 gap-3 mb-4'>
                            <div className='text-center bg-gray-50 rounded-lg p-3'>
                              <div className='text-2xl font-bold text-gray-900'>{client.stats.followers}</div>
                              <div className='text-xs text-gray-600'>Followers</div>
                            </div>
                            <div className='text-center bg-gray-50 rounded-lg p-3'>
                              <div className='text-2xl font-bold text-gray-900'>{client.stats.engagement}</div>
                              <div className='text-xs text-gray-600'>Engagement</div>
                            </div>
                            <div className='text-center bg-gray-50 rounded-lg p-3'>
                              <div className='text-2xl font-bold text-gray-900'>{client.stats.reach}</div>
                              <div className='text-xs text-gray-600'>Monthly Reach</div>
                            </div>
                            <div className='text-center bg-gray-50 rounded-lg p-3'>
                              <div className='text-2xl font-bold text-gray-900'>{client.stats.posts}</div>
                              <div className='text-xs text-gray-600'>Posts</div>
                            </div>
                          </div>

                          {/* Visit Profile Button */}
                          <a
                            href={client.instagramUrl}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 px-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all'
                          >
                            <IconBrandInstagram size={20} />
                            Visit Instagram Profile
                            <IconExternalLink size={18} />
                          </a>
                        </motion.div>

                        {/* Niche Badge */}
                        <div className='mt-6 text-center'>
                          <span className='bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full font-semibold text-lg'>
                            {client.niche}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Content Column */}
                    <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'} p-8 md:p-12 flex flex-col justify-center`}>
                      {/* Title */}
                      <div className='mb-6'>
                        <h3 className='text-3xl md:text-4xl font-bold text-gray-900 mb-2'>
                          {client.name}
                        </h3>
                        <p className='text-xl text-gray-600 font-medium'>{client.handle}</p>
                      </div>

                      {/* Description */}
                      <p className='text-lg text-gray-600 leading-relaxed mb-6'>
                        {client.description}
                      </p>

                      {/* Services */}
                      <div className='mb-6'>
                        <h4 className='font-bold text-lg text-gray-900 mb-3'>Services Provided:</h4>
                        <div className='flex flex-wrap gap-2'>
                          {client.services.map((service, idx) => (
                            <span
                              key={idx}
                              className='bg-blue-500 text-white px-3 py-1.5 rounded-full text-sm font-medium'
                            >
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Results */}
                      <div className='bg-gradient-to-br from-gray-50 to-pink-50 border-2 border-pink-200 rounded-2xl p-6 mb-6'>
                        <div className='flex items-center gap-2 mb-4'>
                          <IconTrendingUp className='text-pink-600' size={24} />
                          <h4 className='font-bold text-lg text-gray-900'>Results Achieved:</h4>
                        </div>
                        <ul className='space-y-2'>
                          {client.results.map((result, idx) => (
                            <li key={idx} className='flex items-start gap-2'>
                              <IconCheck size={20} className='text-green-500 flex-shrink-0 mt-0.5' />
                              <span className='text-gray-700'>{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Testimonial */}
                      <div className='bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl p-6 text-white'>
                        <div className='flex items-center gap-2 mb-3'>
                          <IconStar size={20} className='text-yellow-300' />
                          <IconStar size={20} className='text-yellow-300' />
                          <IconStar size={20} className='text-yellow-300' />
                          <IconStar size={20} className='text-yellow-300' />
                          <IconStar size={20} className='text-yellow-300' />
                        </div>
                        <p className='text-lg italic leading-relaxed'>
                          &quot;{client.testimonial}&quot;
                        </p>
                      </div>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Overview */}
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
              What We <span className='text-transparent bg-clip-text bg-blue-500'>Offer</span>
            </h2>
            <p className='text-lg text-gray-600'>Comprehensive social media services to grow your brand</p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {[
              {
                title: 'Content Strategy',
                description: 'Data-driven content plans tailored to your audience and business goals',
              },
              {
                title: 'Graphic Design',
                description: 'Eye-catching visuals that stop the scroll and boost engagement',
              },
              {
                title: 'Reels & Video',
                description: 'Viral-worthy short-form videos that maximize reach and visibility',
              },
              {
                title: 'Community Management',
                description: 'Active engagement with your audience to build loyal communities',
              },
              {
                title: 'Influencer Marketing',
                description: 'Strategic collaborations with influencers to expand your reach',
              },
              {
                title: 'Analytics & Reporting',
                description: 'Detailed insights and reports to track growth and optimize strategy',
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className='bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2'
              >
                <h3 className='text-2xl font-bold text-gray-900 mb-3'>{service.title}</h3>
                <p className='text-gray-600 leading-relaxed'>{service.description}</p>
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
            <IconBrandInstagram size={80} className='text-white mx-auto mb-6' />
            <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
              Ready to Go Viral?
            </h2>
            <p className='text-xl text-pink-100 mb-8'>
              Let&apos;s create a social media strategy that turns followers into customers and posts into profits.
            </p>
            <Link href='/contact'>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300'
              >
                Get Your Free Social Media Audit
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </BgLayout>
  )
}

export default SocialMediaPage