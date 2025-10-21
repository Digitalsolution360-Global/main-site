"use client";

import BgLayout from '@/components/layout/bgLayout';
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { IconHome, IconChevronRight, IconCheck, IconSearch, IconChartBar, IconLink, IconMapPin, IconFileText, IconTrendingUp, IconSpeedboat, IconBulb, IconShieldCheck, IconUsers, IconReportAnalytics, IconUser, IconMail, IconPhone, IconDeviceAnalytics, IconWorldSearch, IconSeo, IconExternalLink, IconRocket, IconPlugConnected, IconBrandGoogle, IconTag } from '@tabler/icons-react';
import Link from 'next/link';

function SEOServicesPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    website: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch('https://formsubmit.co/globalweb3600@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          'Name': formData.name,
          'Email': formData.email,
          'Phone': formData.phone,
          'Website': formData.website,
          'Service': 'SEO Audit Request',
          _captcha: false,
          _template: 'table'
        })
      });

      setFormData({ name: '', email: '', phone: '', website: '' });
      setShowThankYou(true);
      setTimeout(() => setShowThankYou(false), 5000);
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    {
      icon: <IconSearch size={32} />,
      title: 'Keyword Research & Competitive Analysis',
      description: 'In-depth research to find high-value keywords and analyze competitor strategies'
    },
    {
      icon: <IconTrendingUp size={32} />,
      title: 'On-Page & Technical SEO',
      description: 'Optimize website structure, content, and technical elements for better rankings'
    },
    {
      icon: <IconLink size={32} />,
      title: 'High-Quality Link Building',
      description: 'Build authoritative backlinks to boost domain authority and search rankings'
    },
    {
      icon: <IconMapPin size={32} />,
      title: 'Local SEO for Businesses',
      description: 'Optimize Google Business Profile and local citations to attract nearby customers'
    },
    {
      icon: <IconFileText size={32} />,
      title: 'SEO Content Strategy',
      description: 'Create SEO-optimized content that ranks well and engages your audience'
    }
  ];

  const expertise = [
    {
      icon: <IconSearch size={40} />,
      title: 'Keyword Research',
      description: 'We find the most valuable keywords your audience is searching for.',
      color: 'blue'
    },
    {
      icon: <IconSpeedboat size={40} />,
      title: 'Technical SEO',
      description: 'Improving site structure, crawlability, and speed for better rankings.',
      color: 'green'
    },
    {
      icon: <IconBulb size={40} />,
      title: 'Content Optimization',
      description: 'SEO-friendly content strategies that drive traffic and engagement.',
      color: 'yellow'
    },
    {
      icon: <IconLink size={40} />,
      title: 'Link Building',
      description: 'Building high-quality backlinks to increase your domain authority.',
      color: 'purple'
    },
    {
      icon: <IconMapPin size={40} />,
      title: 'Local SEO',
      description: 'Optimizing your Google Business profile to attract local customers.',
      color: 'red'
    },
    {
      icon: <IconReportAnalytics size={40} />,
      title: 'Analytics & Reporting',
      description: 'Transparent reports so you can measure traffic, rankings, and ROI.',
      color: 'indigo'
    }
  ];

  const tools = [
    {
      name: 'Google Analytics',
      icon: <IconDeviceAnalytics size={40} />,
      description: 'Track website traffic and user behavior',
      color: 'blue'
    },
    {
      name: 'Search Console',
      icon: <IconWorldSearch size={40} />,
      description: 'Monitor search performance and indexing',
      color: 'green'
    },
    {
      name: 'SEMrush',
      icon: <IconChartBar size={40} />,
      description: 'Competitive analysis and keyword research',
      color: 'purple'
    },
    {
      name: 'Ahrefs',
      icon: <IconLink size={40} />,
      description: 'Backlink analysis and content research',
      color: 'orange'
    },
    {
      name: 'Moz',
      icon: <IconTrendingUp size={40} />,
      description: 'SEO metrics and domain authority tracking',
      color: 'red'
    },
    {
      name: 'Yoast SEO',
      icon: <IconSeo size={40} />,
      description: 'On-page SEO optimization for WordPress',
      color: 'indigo'
    },
    {
      name: 'Screaming Frog',
      icon: <IconExternalLink size={40} />,
      description: 'Technical SEO audits and site crawling',
      color: 'teal'
    },
    {
      name: 'Tag Manager',
      icon: <IconTag size={40} />,
      description: 'Manage tracking codes and analytics tags',
      color: 'pink'
    }
  ];

  const benefits = [
    '100% White-Hat SEO',
    'Custom SEO Roadmap',
    'Transparent Reports',
    'Dedicated SEO Specialists'
  ];

  return (
    <BgLayout>
      {/* Hero Section */}
      <section className='relative h-[50vh] mt-15 flex items-center justify-center overflow-hidden'>
        <div className='absolute inset-0'>
          <img
            src="/services/seo-services-hero.webp"
            alt="SEO Services"
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
            <Link href='/services' className='hover:text-blue-400 transition-colors'>
              Services
            </Link>
            <IconChevronRight size={16} className='text-blue-400' />
            <span className='text-blue-400'>SEO Services</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className='text-3xl md:text-5xl lg:text-6xl font-bold mb-4'>
              SEO Services That Drive <span className='text-blue-400'>Traffic & Conversions</span>
            </h1>
            <p className='text-lg md:text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-8'>
              From keyword research to technical SEO and link building, we help your business rank higher and grow faster in search results.
            </p>
            <Link href='#contact-form'>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl'
              >
                Get a Free SEO Audit
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Introduction with Form */}
      <section className='py-10' id='contact-form'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
            
            {/* Content - 2/3 */}
            <div className='lg:col-span-2 space-y-8'>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
                  Why Choose Our SEO Services?
                </h2>
                <p className='text-lg text-gray-700 leading-relaxed mb-6'>
                  SEO is more than just rankings – it&apos;s about building visibility, trust, and long-term growth. We craft SEO strategies tailored to your industry and business goals.
                </p>
                <p className='text-lg text-gray-700 leading-relaxed'>
                  From local businesses to global enterprises, we optimize your digital presence so you can attract qualified traffic and convert visitors into customers.
                </p>
              </motion.div>

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className='rounded-2xl overflow-hidden shadow-xl'
              >
                <img
                  src="/services/seo-services-1.webp"
                  alt="SEO Services"
                  className='w-full h-80 object-cover'
                />
              </motion.div>
            </div>

            {/* Quick Contact Form - 1/3 */}
            <div className='lg:col-span-1'>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className='bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-xl p-8 sticky top-24'
              >
                <h3 className='text-2xl font-bold text-gray-900 mb-2'>Get Free SEO Audit</h3>
                <p className='text-gray-600 mb-6'>Discover optimization opportunities!</p>
                
                <form onSubmit={handleSubmit} className='space-y-4'>
                  <div>
                    <label htmlFor='name' className='block text-sm font-semibold text-gray-700 mb-2'>
                      Full Name *
                    </label>
                    <div className='relative'>
                      <IconUser size={20} className='absolute left-3 top-3 text-gray-400' />
                      <input
                        type='text'
                        id='name'
                        name='name'
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                        className='w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:bg-gray-100'
                        placeholder='Nakul Jaglan'
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor='email' className='block text-sm font-semibold text-gray-700 mb-2'>
                      Email Address *
                    </label>
                    <div className='relative'>
                      <IconMail size={20} className='absolute left-3 top-3 text-gray-400' />
                      <input
                        type='email'
                        id='email'
                        name='email'
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                        className='w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:bg-gray-100'
                        placeholder='nakul@example.com'
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor='phone' className='block text-sm font-semibold text-gray-700 mb-2'>
                      Phone Number *
                    </label>
                    <div className='relative'>
                      <IconPhone size={20} className='absolute left-3 top-3 text-gray-400' />
                      <input
                        type='tel'
                        id='phone'
                        name='phone'
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                        className='w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:bg-gray-100'
                        placeholder='+1 234 567 8900'
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor='website' className='block text-sm font-semibold text-gray-700 mb-2'>
                      Website URL *
                    </label>
                    <div className='relative'>
                      <IconSearch size={20} className='absolute left-3 top-3 text-gray-400' />
                      <input
                        type='url'
                        id='website'
                        name='website'
                        value={formData.website}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                        className='w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:bg-gray-100'
                        placeholder='https://yourwebsite.com'
                      />
                    </div>
                  </div>

                  <button
                    type='submit'
                    disabled={isSubmitting}
                    className='w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 hover:shadow-lg disabled:bg-gray-400 disabled:cursor-not-allowed'
                  >
                    {isSubmitting ? 'Sending...' : 'Request Free Audit'}
                  </button>

                  {showThankYou && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className='bg-green-50 border border-green-200 rounded-lg p-4 text-center'
                    >
                      <IconCheck size={24} className='text-green-600 mx-auto mb-2' />
                      <p className='text-green-800 font-semibold'>Thank you! We&apos;ll contact you soon.</p>
                    </motion.div>
                  )}
                </form>
              </motion.div>
            </div>

          </div>
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
              Explore SEO Services
            </h2>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className='bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all border border-gray-100'
              >
                <div className='text-blue-600 mb-4'>
                  {service.icon}
                </div>
                <h3 className='text-xl font-bold text-gray-900 mb-2'>{service.title}</h3>
                <p className='text-gray-600'>{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our SEO Expertise */}
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
              Our SEO Expertise
            </h2>
            <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
              We use the latest SEO tools and strategies to deliver measurable results – ensuring your business dominates search rankings.
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {expertise.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className='text-center p-6'
              >
                <div className={`text-${item.color}-600 mb-4 flex justify-center`}>
                  {item.icon}
                </div>
                <h3 className='text-xl font-bold text-gray-900 mb-3'>{item.title}</h3>
                <p className='text-gray-600 leading-relaxed'>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className='py-10'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='rounded-2xl overflow-hidden shadow-2xl'
          >
            <img
              src="/services/seo-services-2.webp"
              alt="SEO Tools and Analytics"
              className='w-full h-96 object-cover'
            />
          </motion.div>
        </div>
      </section>

      {/* SEO Tools & Platforms */}
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
              SEO Tools & Platforms We Use
            </h2>
            <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
              Our SEO experts leverage industry-leading platforms to deliver measurable growth and insights.
            </p>
          </motion.div>

          <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className='bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all text-center border border-gray-100'
              >
                <div className={`text-${tool.color}-600 mb-3 flex justify-center`}>{tool.icon}</div>
                <h3 className='text-lg font-bold text-gray-900 mb-2'>{tool.name}</h3>
                <p className='text-sm text-gray-600'>{tool.description}</p>
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
              Rank Higher & Grow Faster
            </h2>
            <p className='text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed'>
              Partner with us to unlock the full potential of SEO. Our strategies are data-driven, ethical, and designed to deliver long-term growth.
            </p>

            {/* Benefits Grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8'>
              {benefits.map((benefit, index) => (
                <div key={index} className='flex items-center justify-center gap-2 text-blue-100'>
                  <IconCheck size={20} className='text-green-400' />
                  <span className='font-medium'>{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className='flex flex-wrap items-center justify-center gap-4'>
              <Link href='/contact'>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all'
                >
                  Request a Free SEO Audit
                </motion.button>
              </Link>
              <Link href='tel:+919990556217'>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all'
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

export default SEOServicesPage;