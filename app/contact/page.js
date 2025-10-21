"use client";

import BgLayout from '@/components/layout/bgLayout'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { IconHome, IconChevronRight, IconMapPin, IconPhone, IconMail, IconClock, IconCheck, IconX } from '@tabler/icons-react'
import Link from 'next/link'

function ContactPage() {
  const [showThankYou, setShowThankYou] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    website: '',
    email: '',
    phone: '',
    countryCode: '+91',
    services: [],
    budget: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleServiceChange = (service) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      company: '',
      website: '',
      email: '',
      phone: '',
      countryCode: '+91',
      services: [],
      budget: '',
      message: ''
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formsubmit.co/globalweb3600@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          'Full Name': formData.fullName,
          'Company': formData.company,
          'Website': formData.website,
          'Email': formData.email,
          'Phone': `${formData.countryCode} ${formData.phone}`,
          'Services Interested': formData.services.join(', '),
          'Monthly Budget': formData.budget,
          'Message': formData.message,
          _captcha: false,
          _template: 'table'
        })
      });

      if (response.ok) {
        resetForm();
        setShowThankYou(true);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    'SEO', 'Social Media Marketing', 'PPC', 'Web Design',
    'Content Writing', 'Conversion Rate Optimization',
    'Email Marketing', 'Video Production', 'Google My Business',
    'Amazon Marketing', 'eCommerce Marketing', 'Link Building',
    'Local SEO', 'ADA Compliance', 'Online Reputation Management'
  ];

  return (
    <BgLayout>
      {/* Hero Section - Full Screen Height */}
      <section className='relative h-[50vh] mt-21 lg:mt-15 flex items-center justify-center overflow-hidden'>
        {/* Background Image */}
        <div className='absolute inset-0'>
          <img
            src="/contact/hero-image.webp"
            alt="Contact Us"
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
            <span className='text-blue-200'>Contact</span>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold mb-6'>
              Get In <span className='text-blue-400'>Touch</span>
            </h1>
            <p className='text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed'>
              Let&apos;s discuss how we can help transform your digital presence and drive real results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className='py-10'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-5 gap-12'>
            
            {/* Form Column - 3/5 width */}
            <div className='lg:col-span-3'>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className='bg-white rounded-2xl shadow-xl p-8 md:p-12'
              >
                <h2 className='text-3xl md:text-4xl font-bold mb-2'>Experience Real Results</h2>
                <p className='text-lg text-gray-600 mb-8'>
                  Partner with Digital Solution 360 and scale your business.
                </p>

                <form onSubmit={handleFormSubmit}>
                  
                  {/* Full Name */}
                  <div className='mb-6'>
                    <label htmlFor='fullName' className='block text-sm font-semibold text-gray-700 mb-2'>
                      Full Name *
                    </label>
                    <input
                      type='text'
                      id='fullName'
                      name='fullName'
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:bg-gray-100'
                      placeholder='Nakul Jaglan'
                    />
                  </div>

                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
                  {/* Company & Website */}
                    <div>
                      <label htmlFor='company' className='block text-sm font-semibold text-gray-700 mb-2'>
                        Company *
                      </label>
                      <input
                        type='text'
                        id='company'
                        name='company'
                        value={formData.company}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                        className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:bg-gray-100'
                        placeholder='Your Company Name'
                      />
                    </div>
                    <div>
                      <label htmlFor='website' className='block text-sm font-semibold text-gray-700 mb-2'>
                        Website
                      </label>
                      <input
                        type='url'
                        id='website'
                        name='website'
                        value={formData.website}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:bg-gray-100'
                        placeholder='https://yourwebsite.com'
                      />
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
                    <div>
                      <label htmlFor='email' className='block text-sm font-semibold text-gray-700 mb-2'>
                        Email Address *
                      </label>
                      <input
                        type='email'
                        id='email'
                        name='email'
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                        className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:bg-gray-100'
                        placeholder='nakul@example.com'
                      />
                    </div>
                    <div>
                      <label htmlFor='phone' className='block text-sm font-semibold text-gray-700 mb-2'>
                        Phone Number *
                      </label>
                      <div className='flex gap-2'>
                        <select
                          name='countryCode'
                          value={formData.countryCode}
                          onChange={handleInputChange}
                          disabled={isSubmitting}
                          className='px-3 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white disabled:bg-gray-100'
                        >
                          <option value="+91">+91</option>
                          <option value="+1">+1</option>
                          <option value="+44">+44</option>
                          <option value="+61">+61</option>
                        </select>
                        <input
                          type='tel'
                          id='phone'
                          name='phone'
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          disabled={isSubmitting}
                          className='flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:bg-gray-100'
                          placeholder='9876543210'
                        />
                      </div>
                    </div>
                  </div>

                  {/* Services Checkboxes */}
                  <div className='mb-6'>
                    <label className='block text-sm font-semibold text-gray-700 mb-3'>
                      What Services Are You Interested In? *
                    </label>
                    <div className='grid grid-cols-2 md:grid-cols-3 gap-3'>
                      {services.map((service) => (
                        <label
                          key={service}
                          className='flex items-center gap-2 cursor-pointer group'
                        >
                          <input
                            type='checkbox'
                            checked={formData.services.includes(service)}
                            onChange={() => handleServiceChange(service)}
                            disabled={isSubmitting}
                            className='w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100'
                          />
                          <span className='text-sm text-gray-700 group-hover:text-blue-600 transition-colors'>
                            {service}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Budget */}
                  {/* <div className='mb-6'>
                    <label htmlFor='budget' className='block text-sm font-semibold text-gray-700 mb-2'>
                      What is your monthly digital marketing budget?
                    </label>
                    <select
                      id='budget'
                      name='budget'
                      value={formData.budget}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white disabled:bg-gray-100'
                    >
                      <option value="">Select Budget Range</option>
                      <option value="₹25,000 - ₹50,000">₹25,000 - ₹50,000</option>
                      <option value="₹50,000 - ₹1,00,000">₹50,000 - ₹1,00,000</option>
                      <option value="₹1,00,000 - ₹2,50,000">₹1,00,000 - ₹2,50,000</option>
                      <option value="₹2,50,000 - ₹5,00,000">₹2,50,000 - ₹5,00,000</option>
                      <option value="₹5,00,000+">₹5,00,000+</option>
                    </select>
                  </div> */}

                  {/* Message */}
                  <div className='mb-6'>
                    <label htmlFor='message' className='block text-sm font-semibold text-gray-700 mb-2'>
                      Tell us about your project
                    </label>
                    <textarea
                      id='message'
                      name='message'
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      disabled={isSubmitting}
                      className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:bg-gray-100'
                      placeholder='Describe your requirements, goals, and timeline...'
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type='submit'
                    disabled={isSubmitting}
                    className='w-full bg-blue-600 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:transform-none'
                  >
                    {isSubmitting ? 'Sending...' : 'Send My Free Proposal'}
                  </button>

                </form>

                {/* Quick Call */}
                <div className='mt-8 text-center pt-8 border-t border-gray-200'>
                  <p className='text-gray-600'>
                    In a hurry? Give us a call now at{' '}
                    <a href='tel:+919999056217' className='text-blue-600 font-semibold hover:underline'>
                      +91 99905 56217
                    </a>
                  </p>
                </div>

              </motion.div>
            </div>

            {/* Info Column - 2/5 width */}
            <div className='lg:col-span-2'>
              
              {/* Easy Steps */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className='bg-white rounded-2xl shadow-xl p-8 mb-8'
              >
                <h3 className='text-2xl font-bold mb-6 text-blue-600'>3 Easy Steps</h3>
                
                <div className='space-y-6'>
                  <div className='flex gap-4'>
                    <div className='flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold'>
                      1
                    </div>
                    <div>
                      <h4 className='font-bold text-gray-900 mb-1'>Fill Out The Form</h4>
                      <p className='text-sm text-gray-600'>Share your business details and goals with us</p>
                    </div>
                  </div>
                  
                  <div className='flex gap-4'>
                    <div className='flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold'>
                      2
                    </div>
                    <div>
                      <h4 className='font-bold text-gray-900 mb-1'>Consult With Our Team</h4>
                      <p className='text-sm text-gray-600'>We&apos;ll discuss strategies tailored to your needs</p>
                    </div>
                  </div>
                  
                  <div className='flex gap-4'>
                    <div className='flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold'>
                      3
                    </div>
                    <div>
                      <h4 className='font-bold text-gray-900 mb-1'>Get Your Free Proposal</h4>
                      <p className='text-sm text-gray-600'>Receive a customized action plan for success</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Office Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className='bg-white rounded-2xl shadow-xl p-8'
              >
                <h3 className='text-2xl font-bold mb-6'>Our Headquarters</h3>
                
                <div className='space-y-4'>
                  <div className='flex gap-3'>
                    <IconMapPin size={24} className='text-blue-600 flex-shrink-0' />
                    <div>
                      <p className='font-semibold text-gray-900'>Address</p>
                      <p className='text-gray-600'>B-76, Basement, Noida Sector-2, Near Noida Sector-15 Metro Station, Uttar Pradesh - 201301</p>
                    </div>
                  </div>
                  
                  <div className='flex gap-3'>
                    <IconPhone size={24} className='text-blue-600 flex-shrink-0' />
                    <div>
                      <p className='font-semibold text-gray-900'>Phone</p>
                      <a href='tel:+919999056217' className='text-blue-600 hover:underline'>
                        +91 99905 56217
                      </a>
                    </div>
                  </div>
                  
                  <div className='flex gap-3'>
                    <IconMail size={24} className='text-blue-600 flex-shrink-0' />
                    <div>
                      <p className='font-semibold text-gray-900'>Email</p>
                      <a href='mailto:info@digitalsolution360.com' className='text-blue-600 hover:underline'>
                        info@digitalsolution360.com
                      </a>
                    </div>
                  </div>
                  
                  {/* <div className='flex gap-3'>
                    <IconClock size={24} className='text-blue-600 flex-shrink-0' />
                    <div>
                      <p className='font-semibold text-gray-900'>Office Hours</p>
                      <p className='text-gray-600'>
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 4:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div> */}
                </div>
              </motion.div>

            </div>

          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className='py-0'>
        <div className='w-full h-96'>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1751.7356572147626!2d77.31275569557332!3d28.585634330560385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce458d0000001%3A0x6a67661e4ea4a53c!2sDigital%20360!5e0!3m2!1sen!2sin!4v1760877022059!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            // className='grayscale hover:grayscale-0 transition-all duration-500'
          />
        </div>
      </section>

      {/* Thank You Modal */}
      <AnimatePresence>
        {showThankYou && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60'
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className='bg-white rounded-2xl p-8 md:p-12 max-w-md w-full text-center shadow-2xl relative'
            >
              {/* Close Button */}
              <button
                onClick={() => setShowThankYou(false)}
                className='absolute top-4 right-4 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors'
              >
                <IconX size={20} />
              </button>

              {/* Success Icon */}
              <div className='w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6'>
                <IconCheck size={40} className='text-green-600' />
              </div>

              <h3 className='text-3xl font-bold text-gray-900 mb-4'>Thank You!</h3>
              <p className='text-lg text-gray-600 mb-6'>
                Your message has been received. We&apos;ll get back to you within 24 hours with your free proposal!
              </p>
              
              <div className='bg-blue-50 rounded-lg p-4'>
                <p className='text-sm text-gray-600 mb-2'>Questions in the meantime?</p>
                <a href='tel:+919876543210' className='text-blue-600 font-semibold hover:underline text-lg'>
                  Call us: +91 98765 43210
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </BgLayout>
  )
}

export default ContactPage