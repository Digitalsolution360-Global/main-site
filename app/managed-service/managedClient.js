"use client";
import BgLayout from '@/components/layout/bgLayout';
import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  IconServer,
  IconShieldCheck,
  IconEye,
  IconCloud,
  IconClock,
  IconChartLine,
  IconLock,
  IconDatabase,
  IconBell,
  IconHome,
  IconChevronRight,
  IconCheck,
  IconUser,
  IconMail,
  IconPhone,
  IconHeadset
} from '@tabler/icons-react';

function ManagedServicePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '24/7 Monitoring'
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
      // Save to database
      await fetch('/api/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          country_code: '+91',
          company: null,
          website: null,
          services: formData.service,
          message: null,
          source: 'managed_service_page',
          page_url: window.location.pathname
        })
      });

      // Send email notification
      await fetch('https://formsubmit.co/globalweb3600@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          'Name': formData.name,
          'Email': formData.email,
          'Phone': formData.phone,
          'Service Interested': formData.service,
          'Page URL': window.location.pathname,
          _captcha: false,
          _template: 'table'
        })
      });

      setFormData({ name: '', email: '', phone: '', service: '24/7 Monitoring' });
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
      title: '24/7 Monitoring & Support',
      description: 'Round-the-clock monitoring and support to ensure your systems run smoothly at all times.',
      icon: <IconHeadset size={40} stroke={1.5} className="text-blue-600" />
    },
    {
      title: 'IT Infrastructure Management',
      description: 'Comprehensive management of servers, networks, and IT systems for optimal performance.',
      icon: <IconServer size={40} stroke={1.5} className="text-purple-600" />
    },
    {
      title: 'Cloud Services & Backup',
      description: 'Secure cloud integration and automated backup solutions to protect your critical data.',
      icon: <IconCloud size={40} stroke={1.5} className="text-orange-600" />
    },
    {
      title: 'Cybersecurity & Compliance',
      description: 'Advanced security measures and compliance management to protect your business from threats.',
      icon: <IconShieldCheck size={40} stroke={1.5} className="text-red-600" />
    },
    {
      title: 'Performance Optimization',
      description: 'Continuous optimization of systems and processes for maximum efficiency and uptime.',
      icon: <IconChartLine size={40} stroke={1.5} className="text-green-600" />
    }
  ];

  const benefits = [
    {
      title: 'Infrastructure Management',
      description: 'We manage your servers, networks, and systems for optimal performance and reliability.',
      icon: <IconServer size={32} stroke={1.5} className="text-blue-600" />
    },
    {
      title: 'Cybersecurity & Compliance',
      description: 'Protect your business from threats and maintain compliance with industry standards.',
      icon: <IconLock size={32} stroke={1.5} className="text-purple-600" />
    },
    {
      title: 'Proactive Monitoring',
      description: 'Continuous monitoring to prevent issues before they impact your operations.',
      icon: <IconEye size={32} stroke={1.5} className="text-orange-600" />
    },
    {
      title: 'Cloud Services & Backup',
      description: 'Cloud integration and automated backup solutions for secure, reliable storage.',
      icon: <IconDatabase size={32} stroke={1.5} className="text-green-600" />
    },
    {
      title: '24/7 Support',
      description: 'Our team is available round-the-clock to ensure uninterrupted IT operations.',
      icon: <IconClock size={32} stroke={1.5} className="text-red-600" />
    },
    {
      title: 'Performance Optimization',
      description: 'Continuous improvement of systems and processes for higher efficiency and uptime.',
      icon: <IconChartLine size={32} stroke={1.5} className="text-indigo-600" />
    }
  ];

  const tools = [
    { name: 'Datadog', icon: <IconChartLine size={40} stroke={1.5} />, color: 'text-purple-600' },
    { name: 'ServiceNow', icon: <IconServer size={40} stroke={1.5} />, color: 'text-green-600' },
    { name: 'Splunk', icon: <IconEye size={40} stroke={1.5} />, color: 'text-green-700' },
    { name: 'SolarWinds', icon: <IconBell size={40} stroke={1.5} />, color: 'text-orange-600' },
    { name: 'Zendesk', icon: <IconHeadset size={40} stroke={1.5} />, color: 'text-green-600' },
    { name: 'Freshdesk', icon: <IconHeadset size={40} stroke={1.5} />, color: 'text-green-500' }
  ];

  return (
    <BgLayout>
      {/* Hero Section */}
      <section className='relative h-[50vh] mt-15 flex items-center justify-center overflow-hidden'>
        <div className='absolute inset-0'>
          <img
            src="/services/managed-service-hero.webp"
            alt="Managed Services"
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
            <span className='text-blue-400'>Managed Services</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className='text-3xl md:text-5xl lg:text-6xl font-bold mb-4'>
              Managed Services for <span className='text-blue-400'>Seamless IT Operations</span>
            </h1>
            <p className='text-lg md:text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-8'>
              Let us handle your IT infrastructure, monitoring, and support so you can focus on growing your business.
            </p>
            <Link href='#contact-form'>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl'
              >
                Get Your Managed Plan
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
                  Why Choose Our Managed Services?
                </h2>
                <p className='text-lg text-gray-700 leading-relaxed mb-6'>
                  We manage your IT systems proactively, ensuring uptime, security, and smooth operations across all your platforms.
                </p>
                <p className='text-lg text-gray-700 leading-relaxed'>
                  Our certified team monitors, maintains, and optimizes your IT environment, allowing you to focus on core business tasks.
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
                  src="/services/managed-service/managed-service-1.webp"
                  alt="Managed Services"
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
                className='bg-blue-50/90 rounded-2xl shadow-2xl p-8 sticky top-24'
              >
                <h3 className='text-2xl font-bold text-gray-900 mb-2'>Quick Contact</h3>
                <p className='text-gray-600 mb-6'>Get a free IT consultation!</p>
                
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
                        className='w-full pl-10 pr-4 py-3 bg-white rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:bg-gray-100'
                        placeholder='Enter your name'
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
                        className='w-full pl-10 pr-4 py-3 bg-white rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:bg-gray-100'
                        placeholder='Enter your email'
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
                        className='w-full pl-10 pr-4 py-3 bg-white rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:bg-gray-100'
                        placeholder='+1 234 567 8900'
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor='service' className='block text-sm font-semibold text-gray-700 mb-2'>
                      Service Interested *
                    </label>
                    <select
                      id='service'
                      name='service'
                      value={formData.service}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className='w-full px-4 py-3 bg-white rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:bg-gray-100'
                    >
                      <option value="24/7 Monitoring">24/7 Monitoring & Support</option>
                      <option value="IT Infrastructure">IT Infrastructure Management</option>
                      <option value="Cloud Services">Cloud Services & Backup</option>
                      <option value="Cybersecurity">Cybersecurity & Compliance</option>
                      <option value="Performance Optimization">Performance Optimization</option>
                      <option value="Full Managed Services">Full Managed Services</option>
                    </select>
                  </div>

                  <button
                    type='submit'
                    disabled={isSubmitting}
                    className='w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 hover:shadow-lg disabled:bg-gray-400 disabled:cursor-not-allowed'
                  >
                    {isSubmitting ? 'Sending...' : 'Get Free Quote'}
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
              Explore Our Services
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

      {/* Benefits */}
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
              Benefits of Our Managed Services
            </h2>
            <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
              Ensure business continuity, reduce downtime, and improve operational efficiency with our managed IT services.
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className='text-center p-6'
              >
                <div className='mb-4 flex justify-center'>
                  {benefit.icon}
                </div>
                <h3 className='text-xl font-bold text-gray-900 mb-3'>{benefit.title}</h3>
                <p className='text-gray-600 leading-relaxed'>{benefit.description}</p>
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
              src="/services/managed-service/managed-service-2.webp"
              alt="IT Operations Management"
              className='w-full h-96 object-cover'
            />
          </motion.div>
        </div>
      </section>

      {/* Managed Service Tools & Platforms */}
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
              MANAGED SERVICE TOOLS & PLATFORMS
            </h2>
            <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
              We leverage advanced platforms and tools to manage your IT environment efficiently and securely.
            </p>
          </motion.div>

          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6'>
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className='flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all border border-gray-100'
              >
                <div className={`mb-3 flex justify-center ${tool.color}`}>
                  {tool.icon}
                </div>
                <p className='text-gray-900 font-semibold text-center text-sm'>
                  {tool.name}
                </p>
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
              Focus on Your Business, We&apos;ll Manage the IT
            </h2>
            <p className='text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed'>
              With our managed services, your IT infrastructure is monitored, maintained, and optimized 24/7. Enjoy peace of mind and improved efficiency while we handle your technology.
            </p>

            {/* Benefits Grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8'>
              <div className='flex items-center justify-center gap-2 text-blue-100'>
                <IconCheck size={20} className='text-green-400' />
                <span className='font-medium'>24/7 Monitoring</span>
              </div>
              <div className='flex items-center justify-center gap-2 text-blue-100'>
                <IconCheck size={20} className='text-green-400' />
                <span className='font-medium'>Cloud Management</span>
              </div>
              <div className='flex items-center justify-center gap-2 text-blue-100'>
                <IconCheck size={20} className='text-green-400' />
                <span className='font-medium'>Security Optimization</span>
              </div>
              <div className='flex items-center justify-center gap-2 text-blue-100'>
                <IconCheck size={20} className='text-green-400' />
                <span className='font-medium'>Automated Reporting</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className='flex flex-wrap items-center justify-center gap-4'>
              <Link href='/contact'>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all'
                >
                  Get Started Today
                </motion.button>
              </Link>
              <Link href='/portfolio'>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all'
                >
                  View Case Studies
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </BgLayout>
  );
}

export default ManagedServicePage;
