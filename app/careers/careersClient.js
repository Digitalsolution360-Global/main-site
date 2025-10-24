"use client";

import BgLayout from '@/components/layout/bgLayout'
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { IconHome, IconChevronRight, IconBriefcase, IconMapPin, IconUsers, IconTrophy, IconHeart, IconRocket, IconCheck, IconClock, IconMessageCircle, IconTarget, IconX } from '@tabler/icons-react'
import Link from 'next/link'
import careersData from './content.json'

function CareersPage() {
  const [showThankYou, setShowThankYou] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    expectedSalary: '',
    applyFor: '',
    resume: null
  });

  useEffect(() => {
    if (showThankYou) {
      const timer = setTimeout(() => {
        setShowThankYou(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showThankYou]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData(prev => ({
      ...prev,
      resume: file
    }));
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      city: '',
      expectedSalary: '',
      applyFor: '',
      resume: null
    });
    // Reset file input
    const fileInput = document.getElementById('resume');
    if (fileInput) fileInput.value = '';
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // First, save to database
      const dbResponse = await fetch('/api/careers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          city: formData.city,
          expected_salary: formData.expectedSalary || null,
          apply_for: formData.applyFor,
          resume_filename: formData.resume ? formData.resume.name : null
        })
      });

      if (!dbResponse.ok) {
        throw new Error('Failed to save to database');
      }

      // Create FormData to handle file upload for email
      const submitData = new FormData();
      submitData.append('name', formData.name);
      submitData.append('email', formData.email);
      submitData.append('phone', formData.phone);
      submitData.append('city', formData.city);
      submitData.append('Expected Salary', formData.expectedSalary);
      submitData.append('Apply For', formData.applyFor);
      
      // Append file if exists
      if (formData.resume) {
        submitData.append('attachment', formData.resume);
      }
      
      // Add hidden fields
      submitData.append('_captcha', 'false');
      submitData.append('_template', 'table');

      // Send email with resume attachment
      const emailResponse = await fetch('https://formsubmit.co/globalweb3600@gmail.com', {
        method: 'POST',
        body: submitData
      });

      console.log('Email submission status:', emailResponse.status);

      // Show success even if email fails (data is saved in DB)
      resetForm();
      setShowThankYou(true);
      
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Failed to submit application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <BgLayout>
      {/* Hero Section - Full Screen Height */}
      <section className='relative h-[50vh] mt-21 lg:mt-15 flex items-center justify-center overflow-hidden'>
        {/* Background Image */}
        <div className='absolute inset-0'>
          <img
            src="/careers/hero-image.webp"
            alt="Careers"
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
            <span className='text-blue-200'>Careers</span>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold mb-6'>
              Join Our <span className='text-blue-500'>Team</span>
            </h1>
            <p className='text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed'>
              Build your career with a team that values innovation, creativity, and growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Join With Us Section */}
      <section className='py-10'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className='text-4xl md:text-5xl font-bold mb-6'>
                Join With <span className='text-blue-600'>Us</span>
              </h2>
              <div className='w-20 h-1 bg-blue-600 mb-6'></div>
              <p className='text-lg text-gray-600 mb-6 leading-relaxed'>
                We are a team of dreamers and doers. When you join us, you&apos;re not just getting a job — you&apos;re becoming part of a family that values creativity, curiosity, and contribution.
              </p>
              
              <div className='space-y-4'>
                <div className='flex items-start gap-3'>
                  <IconCheck size={24} className='text-green-600 flex-shrink-0 mt-1' />
                  <div>
                    <h3 className='text-lg font-bold text-gray-900 mb-1'>Friendly Work Culture</h3>
                    <p className='text-gray-600'>Experience a supportive environment where collaboration and respect thrive.</p>
                  </div>
                </div>
                <div className='flex items-start gap-3'>
                  <IconCheck size={24} className='text-green-600 flex-shrink-0 mt-1' />
                  <div>
                    <h3 className='text-lg font-bold text-gray-900 mb-1'>Flexible Hours & Remote Options</h3>
                    <p className='text-gray-600'>Work-life balance matters. Enjoy flexible schedules and remote work possibilities.</p>
                  </div>
                </div>
                <div className='flex items-start gap-3'>
                  <IconCheck size={24} className='text-green-600 flex-shrink-0 mt-1' />
                  <div>
                    <h3 className='text-lg font-bold text-gray-900 mb-1'>Mentorship and Training Programs</h3>
                    <p className='text-gray-600'>Learn from industry experts with structured training and mentorship.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className='relative'
            >
              <img
                src="/careers/team-culture.webp"
                alt="Team Culture"
                className='rounded-2xl shadow-2xl w-full'
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* Open Positions */}
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
              Open <span className='text-blue-600'>Positions</span>
            </h2>
            <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
              Join our growing team and help shape the future of digital solutions.
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {careersData.jobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className='bg-white p-6 rounded-xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1'
              >
                {/* <div className='flex items-start justify-between mb-4'>
                  <IconBriefcase size={32} className='text-blue-600' />
                  <span className='bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold'>Open</span>
                </div> */}
                <h3 className='text-xl font-bold text-gray-900 hover:text-blue-500 mb-3'>{job.title}</h3>
                <div className='flex items-center gap-2 text-gray-600 mb-4'>
                  <IconMapPin size={18} />
                  <span className='text-sm'>{job.location}</span>
                </div>
                <p className='text-gray-600 text-sm mb-4 leading-relaxed'>
                  {job.description}
                </p>
                <a
                  href='#apply'
                  className='inline-block bg-blue-600 text-white font-semibold hover:bg-blue-700 py-2 px-4 rounded-md hover:rounded-lg transition-colors duration-300'
                >
                  Apply Now →
                </a>
              </motion.div>
            ))}
          </div>

        </div>
      </section>


      {/* Why Choose Our Company */}
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
              Why Choose <span className='text-blue-600'>Our Company</span>
            </h2>
            <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
              Discover what makes our workplace culture unique and why talented individuals choose to build their careers with us.
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            
            {/* Efficient Collaboration */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className='bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1'
            >
              <div className='w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6'>
                <IconMessageCircle size={32} className='text-white' />
              </div>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>Efficient Collaboration</h3>
              <p className='text-gray-600 mb-4 leading-relaxed'>
                We foster a collaborative environment where open communication, mutual respect, and teamwork drive us forward. Together, we achieve more.
              </p>
              <p className='text-sm text-gray-500'>
                Tools like Slack, Trello, and Zoom keep us connected and productive across time zones.
              </p>
            </motion.div>

            {/* Inclusive Culture */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className='bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1'
            >
              <div className='w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6'>
                <IconHeart size={32} className='text-white' />
              </div>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>Inclusive Culture</h3>
              <p className='text-gray-600 mb-4 leading-relaxed'>
                Diversity and inclusion are at the heart of our workplace. We celebrate different voices and ensure every team member feels valued and empowered.
              </p>
              <p className='text-sm text-gray-500'>
                Monthly team activities, open forums, and cultural events help build a truly inclusive environment.
              </p>
            </motion.div>

            {/* Growth Opportunities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className='bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1'
            >
              <div className='w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6'>
                <IconRocket size={32} className='text-white' />
              </div>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>Growth Opportunities</h3>
              <p className='text-gray-600 mb-4 leading-relaxed'>
                We invest in your development. From skill training to leadership programs, we ensure every employee has a clear path to grow and thrive.
              </p>
              <div className='space-y-2 text-sm text-gray-600'>
                <div className='flex items-center gap-2'>
                  <IconCheck size={16} className='text-green-600' />
                  <span>Workshops & Certifications</span>
                </div>
                <div className='flex items-center gap-2'>
                  <IconCheck size={16} className='text-green-600' />
                  <span>1-on-1 Coaching</span>
                </div>
                <div className='flex items-center gap-2'>
                  <IconCheck size={16} className='text-green-600' />
                  <span>Annual Growth Reviews</span>
                </div>
              </div>
            </motion.div>

            {/* Make an Impact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className='bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 lg:col-span-3'
            >
              <div className='max-w-4xl mx-auto text-center'>
                <div className='w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6 mx-auto'>
                  <IconTarget size={32} className='text-white' />
                </div>
                <h3 className='text-2xl font-bold text-gray-900 mb-4'>Make an Impact</h3>
                <p className='text-gray-600 mb-4 leading-relaxed text-lg'>
                  Be part of something bigger. Your ideas, your work, and your contributions have a real impact — on our customers, our industry, and our future.
                </p>
                <p className='text-sm text-gray-500'>
                  From launching new products to volunteering locally, we support every way you want to make a difference.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id='apply' className='py-10'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='text-center mb-12'
          >
            <h2 className='text-4xl md:text-5xl font-bold mb-4'>
              Apply <span className='text-blue-600'>Now</span>
            </h2>
            <p className='text-lg text-gray-600'>
              Fill out the form below and we&apos;ll get back to you soon.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='bg-blue-50/90 rounded-2xl shadow-2xl p-8 md:p-12'
          >
            <form onSubmit={handleFormSubmit}>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
                
                {/* Name */}
                <div>
                  <label htmlFor='name' className='block text-sm font-semibold text-gray-700 mb-2'>
                    Full Name *
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className='w-full px-4 py-3 bg-white rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:bg-gray-100'
                    placeholder='Nakul Jaglan'
                  />
                </div>

                {/* Email */}
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
                    className='w-full px-4 py-3 bg-white rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:bg-gray-100'
                    placeholder='nakul@example.com'
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor='phone' className='block text-sm font-semibold text-gray-700 mb-2'>
                    Phone Number *
                  </label>
                  <input
                    type='tel'
                    id='phone'
                    name='phone'
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className='w-full px-4 py-3 bg-white rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:bg-gray-100'
                    placeholder='+91 98765 43210'
                  />
                </div>

                {/* City */}
                <div>
                  <label htmlFor='city' className='block text-sm font-semibold text-gray-700 mb-2'>
                    City *
                  </label>
                  <input
                    type='text'
                    id='city'
                    name='city'
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className='w-full px-4 py-3 bg-white rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:bg-gray-100'
                    placeholder='Noida'
                  />
                </div>

                {/* Expected Salary */}
                <div>
                  <label htmlFor='expectedSalary' className='block text-sm font-semibold text-gray-700 mb-2'>
                    Expected Salary (per month) *
                  </label>
                  <input
                    type='text'
                    id='expectedSalary'
                    name='expectedSalary'
                    value={formData.expectedSalary}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className='w-full px-4 py-3 bg-white rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:bg-gray-100'
                    placeholder='₹25,000'
                  />
                </div>

                {/* Apply For */}
                <div>
                  <label htmlFor='applyFor' className='block text-sm font-semibold text-gray-700 mb-2'>
                    Apply For *
                  </label>
                  <select
                    id='applyFor'
                    name='applyFor'
                    value={formData.applyFor}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white disabled:bg-gray-100'
                  >
                    <option value="">Select Position</option>
                    <option value="Backend Developer">Backend Developer</option>
                    <option value="Graphic Designer">Graphic Designer</option>
                    <option value="Video Editor">Video Editor</option>
                    <option value="Social Media">Social Media</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="Frontend Developer">Frontend Developer</option>
                    <option value="Google My Business">Google My Business</option>
                    <option value="Laravel Developer">Laravel Developer</option>
                    <option value="SEO">SEO</option>
                    <option value="UI/UX Designer">UI/UX Designer</option>
                    <option value="WordPress Developer">WordPress Developer</option>
                    <option value="Content Writing">Content Writing</option>
                  </select>
                </div>

              </div>

              {/* Resume Upload */}
              <div className='mb-6'>
                <label htmlFor='resume' className='block text-sm font-semibold text-gray-700 mb-2'>
                  Upload Resume (PDF, DOC, DOCX) *
                </label>
                <input
                  type='file'
                  id='resume'
                  name='resume'
                  onChange={handleFileChange}
                  accept='.pdf,.doc,.docx'
                  required
                  disabled={isSubmitting}
                  className='w-full px-4 py-3 bg-white rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:bg-gray-100'
                />
                {formData.resume && (
                  <p className='mt-2 text-sm text-gray-600'>
                    Selected: {formData.resume.name}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type='submit'
                disabled={isSubmitting}
                className='w-full bg-blue-600 text-white py-4 px-8 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:transform-none'
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </button>

            </form>
          </motion.div>

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
                Your application has been submitted successfully. We&apos;ll review it and get back to you soon.
              </p>
              
              <div className='bg-blue-50 rounded-lg p-4 mb-6'>
                <p className='text-sm text-gray-600 mb-2'>Our HR team will contact you at:</p>
                <a href='mailto:hr@digitalsolution.in' className='text-blue-600 font-semibold hover:underline'>
                  hr@digitalsolution.in
                </a>
              </div>

              <p className='text-sm text-gray-500'>
                This message will close automatically in 5 seconds
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </BgLayout>
  )
}

export default CareersPage