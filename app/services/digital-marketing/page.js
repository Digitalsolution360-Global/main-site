"use client";
import BgLayout from '@/components/layout/bgLayout';
import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  IconSeo,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandGoogle,
  IconBrandTwitter,
  IconBrandYoutube,
  IconMail,
  IconPhone,
  IconUser,
  IconChartBar,
  IconTargetArrow,
  IconUsers,
  IconTrendingUp,
  IconDeviceMobile,
  IconBulb,
  IconHome,
  IconChevronRight,
  IconCheck,
  IconMessage,
  IconBrandWhatsapp,
  IconBrandSnapchat,
  IconBrandTiktok
} from '@tabler/icons-react';

function DigitalMarketingServicesPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'SEO'
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
          'Service Interested': formData.service,
          _captcha: false,
          _template: 'table'
        })
      });

      setFormData({ name: '', email: '', phone: '', service: 'SEO' });
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
      title: 'Search Engine Optimization (SEO)',
      description: 'Improve your organic rankings and drive quality traffic with comprehensive SEO strategies.',
      icon: <IconSeo size={40} stroke={1.5} className="text-blue-600" />
    },
    {
      title: 'Social Media Marketing & Management',
      description: 'Build your brand presence and engage audiences across all major social media platforms.',
      icon: <IconBrandFacebook size={40} stroke={1.5} className="text-purple-600" />
    },
    {
      title: 'Google & Facebook Ads (PPC)',
      description: 'Drive targeted traffic and maximize ROI with strategic paid advertising campaigns.',
      icon: <IconBrandGoogle size={40} stroke={1.5} className="text-orange-600" />
    },
    {
      title: 'Email Campaigns with High Conversions',
      description: 'Create personalized email campaigns that nurture leads and drive conversions.',
      icon: <IconMail size={40} stroke={1.5} className="text-red-600" />
    },
    {
      title: 'Conversion Rate Optimization',
      description: 'Optimize your website and landing pages to convert more visitors into customers.',
      icon: <IconTrendingUp size={40} stroke={1.5} className="text-green-600" />
    }
  ];

  const expertise = [
    {
      title: 'Data-Driven Strategies',
      description: 'Every decision we make is backed by analytics and tailored insights to drive ROI and long-term growth.',
      icon: <IconChartBar size={32} stroke={1.5} className="text-blue-600" />
    },
    {
      title: 'Targeted Campaigns',
      description: 'We ensure your brand reaches the most relevant audience through precise targeting and personalization.',
      icon: <IconTargetArrow size={32} stroke={1.5} className="text-purple-600" />
    },
    {
      title: 'Client-Centric Approach',
      description: 'Your success is our priority. We maintain transparent communication and deliver on time, every time.',
      icon: <IconUsers size={32} stroke={1.5} className="text-orange-600" />
    },
    {
      title: 'High-Performance Results',
      description: 'Our team is committed to delivering measurable results that elevate your brand in the digital space.',
      icon: <IconTrendingUp size={32} stroke={1.5} className="text-green-600" />
    },
    {
      title: 'Mobile-First Thinking',
      description: 'We optimize all campaigns and websites for mobile users to ensure seamless experiences and conversions.',
      icon: <IconDeviceMobile size={32} stroke={1.5} className="text-red-600" />
    },
    {
      title: 'Creative Excellence',
      description: 'From compelling visuals to powerful copy, we bring creativity that captivates and converts.',
      icon: <IconBulb size={32} stroke={1.5} className="text-yellow-600" />
    }
  ];

  const platforms = [
    { name: 'LinkedIn', icon: <IconBrandLinkedin size={40} stroke={1.5} />, color: 'text-blue-600' },
    { name: 'Google Ads', icon: <IconBrandGoogle size={40} stroke={1.5} />, color: 'text-red-600' },
    { name: 'Instagram', icon: <IconBrandInstagram size={40} stroke={1.5} />, color: 'text-pink-500' },
    { name: 'Bing Ads', icon: <IconBrandGoogle size={40} stroke={1.5} />, color: 'text-blue-500' },
    { name: 'Facebook', icon: <IconBrandFacebook size={40} stroke={1.5} />, color: 'text-blue-600' },
    { name: 'WhatsApp', icon: <IconBrandWhatsapp size={40} stroke={1.5} />, color: 'text-green-500' },
    { name: 'Twitter', icon: <IconBrandTwitter size={40} stroke={1.5} />, color: 'text-blue-400' },
    { name: 'Messenger', icon: <IconMessage size={40} stroke={1.5} />, color: 'text-blue-600' },
    { name: 'YouTube', icon: <IconBrandYoutube size={40} stroke={1.5} />, color: 'text-red-500' },
    { name: 'SMS Marketing', icon: <IconMessage size={40} stroke={1.5} />, color: 'text-purple-600' },
    { name: 'Snapchat', icon: <IconBrandSnapchat size={40} stroke={1.5} />, color: 'text-yellow-400' },
    { name: 'Email Marketing', icon: <IconMail size={40} stroke={1.5} />, color: 'text-gray-600' },
    { name: 'TikTok', icon: <IconBrandTiktok size={40} stroke={1.5} />, color: 'text-black' },
    { name: 'SEO', icon: <IconSeo size={40} stroke={1.5} />, color: 'text-green-600' }
  ];

  return (
    <BgLayout>
      {/* Hero Section */}
      <section className='relative h-[50vh] mt-15 flex items-center justify-center overflow-hidden'>
        <div className='absolute inset-0'>
          <img
            src="/services/digital-marketing-hero.webp"
            alt="Digital Marketing"
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
            <span className='text-blue-400'>Digital Marketing</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className='text-3xl md:text-5xl lg:text-6xl font-bold mb-4'>
              Digital Marketing That Drives <span className='text-blue-400'>Real Results</span>
            </h1>
            <p className='text-lg md:text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-8'>
              From SEO and PPC to Social Media and Content – grow your business online with tailored strategies that work.
            </p>
            <Link href='#contact-form'>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl'
              >
                Get a Free Consultation
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
                  Why Choose Our Digital Marketing Services?
                </h2>
                <p className='text-lg text-gray-700 leading-relaxed mb-6'>
                  Our comprehensive digital marketing approach ensures that your business reaches the right audience at the right time. Whether you&apos;re a startup or an established brand, we tailor strategies that align with your goals.
                </p>
                <p className='text-lg text-gray-700 leading-relaxed'>
                  From SEO and social media to paid ads and email campaigns — we combine creativity and analytics to deliver measurable results and drive growth.
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
                  src="/services/digital-marketing-1.webp"
                  alt="Digital Marketing Services"
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
                <h3 className='text-2xl font-bold text-gray-900 mb-2'>Quick Contact</h3>
                <p className='text-gray-600 mb-6'>Get a free consultation today!</p>
                
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
                    <label htmlFor='service' className='block text-sm font-semibold text-gray-700 mb-2'>
                      Service Interested *
                    </label>
                    <select
                      id='service'
                      name='service'
                      value={formData.service}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:bg-gray-100'
                    >
                      <option value="SEO">SEO</option>
                      <option value="Social Media Marketing">Social Media Marketing</option>
                      <option value="PPC Advertising">PPC Advertising</option>
                      <option value="Email Marketing">Email Marketing</option>
                      <option value="Content Marketing">Content Marketing</option>
                      <option value="Full Digital Marketing">Full Digital Marketing</option>
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

      {/* What Makes Us Different */}
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
              What Makes Us Stand Out?
            </h2>
            <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
              We bring a unique blend of creativity, strategy, and technical expertise to every project. Our digital marketing services are tailored to meet your goals and deliver real results.
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
                <div className='mb-4 flex justify-center'>
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
              src="/services/digital-marketing-2.webp"
              alt="Digital Marketing Strategy"
              className='w-full h-96 object-cover'
            />
          </motion.div>
        </div>
      </section>

      {/* Digital Marketing Platforms */}
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
              DIGITAL MARKETING
            </h2>
            <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
              Promote your services or products through different online platforms to increase your customers and business. Our certified team will take your business to the next level.
            </p>
          </motion.div>

          <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6'>
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className='flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all border border-gray-100'
              >
                <div className={`mb-3 flex justify-center ${platform.color}`}>
                  {platform.icon}
                </div>
                <p className='text-gray-900 font-semibold text-center text-xs'>
                  {platform.name}
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
              Boost Your Online Presence
            </h2>
            <p className='text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed'>
              Expand your brand&apos;s reach with targeted digital marketing strategies designed for measurable growth. Our experts create customized campaigns across platforms to maximize engagement and conversions.
            </p>

            {/* Benefits Grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8'>
              <div className='flex items-center justify-center gap-2 text-blue-100'>
                <IconCheck size={20} className='text-green-400' />
                <span className='font-medium'>Social Media Campaigns</span>
              </div>
              <div className='flex items-center justify-center gap-2 text-blue-100'>
                <IconCheck size={20} className='text-green-400' />
                <span className='font-medium'>PPC Advertising</span>
              </div>
              <div className='flex items-center justify-center gap-2 text-blue-100'>
                <IconCheck size={20} className='text-green-400' />
                <span className='font-medium'>Content & SEO</span>
              </div>
              <div className='flex items-center justify-center gap-2 text-blue-100'>
                <IconCheck size={20} className='text-green-400' />
                <span className='font-medium'>Analytics & Reporting</span>
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
                  View Our Work
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </BgLayout>
  );
}

export default DigitalMarketingServicesPage;