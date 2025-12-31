"use client";

import BgLayout from '@/components/layout/bgLayout';
import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { IconHome, IconChevronRight, IconCheck, IconUser, IconMail, IconPhone, IconHeadset, IconShieldCheck, IconChartLine, IconEye, IconCloud } from '@tabler/icons-react';

export default function ORMServicesClient() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Reputation Monitoring'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch('/api/contacts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          services: formData.service,
          source: 'orm_service_page',
          page_url: window.location.pathname
        })
      });
      setFormData({ name: '', email: '', phone: '', service: 'Reputation Monitoring' });
      setShowThankYou(true);
      setTimeout(() => setShowThankYou(false), 5000);
    } catch (error) {
      console.error(error);
      alert('Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    { title: 'Reputation Monitoring', description: 'Track your brand mentions, reviews, and online presence across platforms.', icon: <IconEye size={40} className="text-blue-600" /> },
    { title: 'Review Management', description: 'Respond to reviews and manage feedback effectively.', icon: <IconShieldCheck size={40} className="text-purple-600" /> },
    { title: 'Content Publishing', description: 'Publish content to improve positive brand perception.', icon: <IconCloud size={40} className="text-orange-600" /> },
    { title: 'Analytics & Reporting', description: 'Measure reputation score, sentiment, and performance.', icon: <IconChartLine size={40} className="text-green-600" /> },
  ];

  return (
    <BgLayout>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img src="/services/orm-hero.webp" alt="ORM Services" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className='flex items-center justify-center gap-2 text-sm mb-6'>
            <Link href="/" className='flex items-center gap-1 hover:text-blue-400'><IconHome size={18} /> Home</Link>
            <IconChevronRight size={16} className='text-blue-400' />
            <Link href="/services" className='hover:text-blue-400'>Services</Link>
            <IconChevronRight size={16} className='text-blue-400' />
            <span className='text-blue-400'>ORM Services</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className='text-4xl md:text-5xl font-bold mb-4'>
            ORM Services for <span className='text-blue-400'>Brand Reputation</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className='text-lg md:text-xl text-blue-100 leading-relaxed'>
            Protect and enhance your online presence to build trust, credibility, and business growth.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className='py-12'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900'>Our ORM Services</h2>
            <p className='text-gray-600 mt-2 max-w-3xl mx-auto'>Comprehensive solutions to manage and improve your online reputation effectively.</p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {services.map((service, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} className='bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all border border-gray-100 text-center'>
                <div className='mb-4 flex justify-center'>{service.icon}</div>
                <h3 className='text-xl font-bold text-gray-900 mb-2'>{service.title}</h3>
                <p className='text-gray-600'>{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Contact Form */}
      <section className='py-12'>
        <div className='max-w-4xl mx-auto px-4'>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className='bg-blue-50/90 rounded-2xl shadow-2xl p-8'>
            <h3 className='text-2xl font-bold text-gray-900 mb-2'>Get a Free Consultation</h3>
            <form onSubmit={handleSubmit} className='space-y-4'>
              <div className='relative'>
                <IconUser size={20} className='absolute left-3 top-3 text-gray-400' />
                <input type='text' name='name' value={formData.name} onChange={handleInputChange} required placeholder='Full Name' className='w-full pl-10 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 transition' />
              </div>
              <div className='relative'>
                <IconMail size={20} className='absolute left-3 top-3 text-gray-400' />
                <input type='email' name='email' value={formData.email} onChange={handleInputChange} required placeholder='Email Address' className='w-full pl-10 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 transition' />
              </div>
              <div className='relative'>
                <IconPhone size={20} className='absolute left-3 top-3 text-gray-400' />
                <input type='tel' name='phone' value={formData.phone} onChange={handleInputChange} required placeholder='Phone Number' className='w-full pl-10 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 transition' />
              </div>
              <div>
                <select name='service' value={formData.service} onChange={handleInputChange} className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 transition'>
                  <option value="Reputation Monitoring">Reputation Monitoring</option>
                  <option value="Review Management">Review Management</option>
                  <option value="Content Publishing">Content Publishing</option>
                  <option value="Analytics & Reporting">Analytics & Reporting</option>
                </select>
              </div>
              <button type='submit' disabled={isSubmitting} className='w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition'>
                {isSubmitting ? 'Sending...' : 'Request Consultation'}
              </button>

              {showThankYou && (
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className='bg-green-50 border border-green-200 rounded-lg p-4 text-center mt-4'>
                  <IconCheck size={24} className='text-green-600 mx-auto mb-2' />
                  <p className='text-green-800 font-semibold'>Thank you! We&apos;ll contact you soon.</p>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </section>
    </BgLayout>
  );
}
