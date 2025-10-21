"use client";

import BgLayout from '@/components/layout/bgLayout';
import React from 'react';
import { motion } from 'motion/react';
import { IconHome, IconChevronRight, IconShoppingCart, IconCode, IconBrandGoogle, IconRocket, IconBulb, IconDevices, IconSettings, IconChartBar } from '@tabler/icons-react';
import Link from 'next/link';

function ServicesPage() {
  const services = [
    {
      title: 'eCommerce Website Development',
      description: 'Build your ecommerce website and grow your business online. Custom stores on Shopify, WooCommerce, Magento, and more.',
      icon: <IconShoppingCart size={48} />,
      link: '/services/web-app-development',
      color: 'blue',
      features: ['Custom ECommerce', 'Shopify', 'WooCommerce', 'Magento']
    },
    {
      title: 'CMS Website Development',
      description: 'Creative, responsive website design services expertly tailored to elevate your unique brand and drive online growth.',
      icon: <IconCode size={48} />,
      link: '/services/web-app-development',
      color: 'purple',
      features: ['WordPress', 'Laravel', 'ReactJS', 'Node.js']
    },
    {
      title: 'Digital Marketing',
      description: 'Promote your services through different online platforms to increase customers and business with our certified team.',
      icon: <IconChartBar size={48} />,
      link: '/services/digital-marketing',
      color: 'green',
      features: ['Social Media', 'Google Ads', 'Email Marketing', 'Content Strategy']
    },
    {
      title: 'SEO Services',
      description: 'Boost your search engine rankings and drive organic traffic with our comprehensive SEO strategies and optimization.',
      icon: <IconBrandGoogle size={48} />,
      link: '/services/seo',
      color: 'orange',
      features: ['Technical SEO', 'Local SEO', 'Content SEO', 'Link Building']
    },
    {
      title: 'Brand & Creative',
      description: 'Build a memorable brand identity with our creative design services including logo design, branding, and visual identity.',
      icon: <IconBulb size={48} />,
      link: '/services/brand-creative',
      color: 'pink',
      features: ['Logo Design', 'Brand Identity', 'Graphics', 'UI/UX Design']
    },
    {
      title: 'Media & Advertising',
      description: 'Reach your target audience with strategic media planning and advertising campaigns across digital and traditional channels.',
      icon: <IconDevices size={48} />,
      link: '/services/media-advertising',
      color: 'red',
      features: ['Media Planning', 'Ad Campaigns', 'PPC Advertising', 'Display Ads']
    },
    {
      title: 'Automation Solutions',
      description: 'Streamline your business processes with intelligent automation solutions that save time and reduce operational costs.',
      icon: <IconSettings size={48} />,
      link: '/services/automation-solution',
      color: 'indigo',
      features: ['Process Automation', 'Workflow Optimization', 'Integration', 'AI Solutions']
    },
    {
      title: 'Managed Services',
      description: 'Focus on your core business while we handle your IT infrastructure, maintenance, and technical support needs.',
      icon: <IconRocket size={48} />,
      link: '/services/managed-service',
      color: 'teal',
      features: ['IT Support', 'Cloud Management', 'Security', '24/7 Monitoring']
    }
  ];

  return (
    <BgLayout>
      {/* Hero Section */}
      <section className='relative h-[50vh] mt-15 flex items-center justify-center overflow-hidden'>
        <div className='absolute inset-0'>
          <img
            src="/services/services-hero.webp"
            alt="Our Services"
            className='w-full h-full object-cover'
          />
          <div className='absolute inset-0 bg-black/70'></div>
        </div>

        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white'>
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
            <span className='text-blue-400'>Services</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-4'>
              Our <span className='text-blue-500'>Services</span>
            </h1>
            <p className='text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed'>
              Comprehensive digital solutions to transform your business and drive growth in the digital age.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className='py-10'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='text-center mb-12'
          >
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
              What We <span className='text-blue-500'>Offer</span>
            </h2>
            <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
              From web development to digital marketing, we provide end-to-end solutions tailored to your business needs.
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className='group'
              >
                <Link href={service.link}>
                  <div className='flex flex-col justify-between h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 cursor-pointer'>
                    <div>
                    {/* Icon */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      className={`text-${service.color}-600 mb-6`}
                    >
                      {service.icon}
                    </motion.div>

                    {/* Title */}
                    <h3 className='text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors'>
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className='text-gray-600 leading-relaxed mb-6'>
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className='space-y-2 mb-6'>
                      {service.features.map((feature, idx) => (
                        <div key={idx} className='flex items-center gap-2 text-sm text-gray-500'>
                          <div className='w-1.5 h-1.5 bg-blue-600 rounded-full'></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    </div>

                    {/* CTA */}
                    <div className='flex flex-row justify-center items-center gap-2 bg-blue-600 rounded-lg text-white py-2 px-2 w-full text-center mx-auto font-semibold group-hover:gap-4 transition-all'>
                      <span>Learn More</span>
                      <IconChevronRight size={20} className='group-hover:translate-x-1 transition-transform' />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className='py-10'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='text-center mb-12'
          >
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
              Why Choose <span className='text-blue-500'>Digital Solution 360?</span>
            </h2>
            <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
              We combine expertise, innovation, and dedication to deliver exceptional results.
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {[
              {
                number: '250+',
                title: 'Projects Completed',
                description: 'Successfully delivered projects across industries'
              },
              {
                number: '2000+',
                title: '5-Star Ratings',
                description: 'Client satisfaction is our top priority'
              },
              {
                number: '10+',
                title: 'Years Experience',
                description: 'Proven track record in digital solutions'
              },
              {
                number: '24/7',
                title: 'Support Available',
                description: 'Round-the-clock assistance for your needs'
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className='text-center p-6'
              >
                <div className='text-5xl font-bold text-blue-600 mb-3'>{stat.number}</div>
                <h3 className='text-xl font-bold text-gray-900 mb-2'>{stat.title}</h3>
                <p className='text-gray-600'>{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-10'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-12 text-center text-white shadow-2xl'
          >
            <h2 className='text-3xl md:text-4xl font-bold mb-4'>
              Ready to Transform Your Business?
            </h2>
            <p className='text-xl text-blue-100 mb-8 max-w-2xl mx-auto'>
              Let&apos;s discuss how our services can help you achieve your business goals and drive growth.
            </p>
            <div className='flex flex-wrap items-center justify-center gap-4'>
              <Link href='/contact'>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all duration-300'
                >
                  Get Started Today
                </motion.button>
              </Link>
              <Link href='tel:+919990556217'>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-500 transition-all duration-300'
                >
                  Call: +91 99905 56217
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </BgLayout>
  );
}

export default ServicesPage;