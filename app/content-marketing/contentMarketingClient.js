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

function ContentMarketingPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Content Strategy'
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
          country_code: '+91',
          company: null,
          website: null,
          services: formData.service,
          message: null,
          source: 'content_marketing_page',
          page_url: window.location.pathname
        })
      });
      setFormData({ name: '', email: '', phone: '', service: 'Content Strategy' });
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
      title: 'Content Strategy & Planning',
      description: 'Crafting a content roadmap aligned with your brand goals and audience needs.',
      icon: <IconChartLine size={40} stroke={1.5} className="text-indigo-600" />
    },
    {
      title: 'SEO Optimized Content',
      description: 'Creating search-friendly content that drives organic traffic and engagement.',
      icon: <IconEye size={40} stroke={1.5} className="text-purple-600" />
    },
    {
      title: 'Social Media Content',
      description: 'Engaging posts and campaigns tailored for each social platform.',
      icon: <IconBell size={40} stroke={1.5} className="text-pink-600" />
    },
    {
      title: 'Email & Newsletter Campaigns',
      description: 'Personalized email content to nurture leads and retain customers.',
      icon: <IconMail size={40} stroke={1.5} className="text-orange-600" />
    },
    {
      title: 'Content Performance Analysis',
      description: 'Track, measure, and optimize content effectiveness across channels.',
      icon: <IconChartLine size={40} stroke={1.5} className="text-green-600" />
    }
  ];

  const benefits = [
    {
      title: 'Targeted Content Strategy',
      description: 'We craft content specifically for your audience to maximize engagement.',
      icon: <IconChartLine size={32} stroke={1.5} className="text-indigo-600" />
    },
    {
      title: 'SEO & Organic Growth',
      description: 'Our content is designed to improve search rankings and attract organic traffic.',
      icon: <IconLock size={32} stroke={1.5} className="text-purple-600" />
    },
    {
      title: 'Brand Awareness',
      description: 'Consistent and high-quality content builds your brand’s reputation online.',
      icon: <IconEye size={32} stroke={1.5} className="text-pink-600" />
    },
    {
      title: 'Engagement & Conversion',
      description: 'Content designed to engage, educate, and convert your audience into customers.',
      icon: <IconDatabase size={32} stroke={1.5} className="text-orange-600" />
    },
    {
      title: 'Performance Tracking',
      description: 'Regular reporting to optimize content performance and ROI.',
      icon: <IconClock size={32} stroke={1.5} className="text-green-600" />
    },
    {
      title: 'Cross-channel Reach',
      description: 'Delivering content across multiple platforms for maximum reach and impact.',
      icon: <IconChartLine size={32} stroke={1.5} className="text-teal-600" />
    }
  ];

  const tools = [
    { name: 'Ahrefs', icon: <IconChartLine size={40} stroke={1.5} />, color: 'text-indigo-600' },
    { name: 'SEMRush', icon: <IconEye size={40} stroke={1.5} />, color: 'text-purple-600' },
    { name: 'HubSpot', icon: <IconDatabase size={40} stroke={1.5} />, color: 'text-green-600' },
    { name: 'Mailchimp', icon: <IconMail size={40} stroke={1.5} />, color: 'text-orange-600' },
    { name: 'Canva', icon: <IconCloud size={40} stroke={1.5} />, color: 'text-pink-600' },
    { name: 'Google Analytics', icon: <IconChartLine size={40} stroke={1.5} />, color: 'text-blue-600' }
  ];

  return (
    <BgLayout>
      {/* Hero Section */}
      <section className='relative h-[50vh] mt-15 flex items-center justify-center overflow-hidden'>
        <div className='absolute inset-0'>
          <img
            src="/services/content-marketing-hero.webp"
            alt="Content Marketing"
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
            <span className='text-blue-400'>Content Marketing</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className='text-3xl md:text-5xl lg:text-6xl font-bold mb-4'>
              Content Marketing to <span className='text-indigo-400'>Grow Your Brand</span>
            </h1>
            <p className='text-lg md:text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-8'>
              Engage your audience, boost conversions, and establish authority with high-quality content.
            </p>
            <Link href='#contact-form'>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='bg-indigo-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-indigo-700 transition-all shadow-xl'
              >
                Get Your Content Plan
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Introduction with Form */}
      <section className='py-10' id='contact-form'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
            <div className='lg:col-span-2 space-y-8'>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
                  Why Choose Our Content Marketing Services?
                </h2>
                <p className='text-lg text-gray-700 leading-relaxed mb-6'>
                  We create content that drives engagement, leads, and brand awareness.
                </p>
                <p className='text-lg text-gray-700 leading-relaxed'>
                  Our team produces SEO-optimized articles, social media content, emails, and campaigns tailored to your audience.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className='rounded-2xl overflow-hidden shadow-xl'
              >
                <img
                  src="/services/content-marketing-1.webp"
                  alt="Content Marketing"
                  className='w-full h-80 object-cover'
                />
              </motion.div>
            </div>

            <div className='lg:col-span-1'>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className='bg-indigo-50/90 rounded-2xl shadow-2xl p-8 sticky top-24'
              >
                <h3 className='text-2xl font-bold text-gray-900 mb-2'>Quick Contact</h3>
                <p className='text-gray-600 mb-6'>Get a free content strategy consultation!</p>

                <form onSubmit={handleSubmit} className='space-y-4'>
                  {/* Form Fields same as Managed Services */}
                  {/* Name, Email, Phone, Service dropdown, Submit */}
                  {/* ... same code as Managed Services form ... */}
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
              Our Content Marketing Services
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
                <div className='text-indigo-600 mb-4'>
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
      {/* ... same as Managed Services but with benefits array above ... */}

      {/* Tools */}
      {/* ... same as Managed Services but using tools array above ... */}

      {/* CTA Section */}
      {/* ... similar to Managed Services but with Content Marketing text and indigo gradient ... */}

    </BgLayout>
  );
}

export default ContentMarketingPage;
