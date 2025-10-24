"use client";
import BgLayout from '@/components/layout/bgLayout';
import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  IconPalette, 
  IconBrandFigma, 
  IconBrandAdobe, 
  IconSparkles,
  IconTarget,
  IconHeart,
  IconTrendingUp,
  IconUsers,
  IconBulb,
  IconRocket,
  IconHome,
  IconChevronRight,
  IconCheck,
  IconUser,
  IconMail,
  IconPhone
} from '@tabler/icons-react';

function BrandCreativePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Logo Design'
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

      setFormData({ name: '', email: '', phone: '', service: 'Logo Design' });
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
      title: 'Logo Design & Visual Identity',
      description: 'Create memorable logos and cohesive visual identities that reflect your brand essence and values.',
      icon: <IconPalette size={40} stroke={1.5} className="text-blue-600" />
    },
    {
      title: 'Brand Guidelines & Strategy',
      description: 'Develop comprehensive brand guidelines and strategic frameworks to maintain consistency across all touchpoints.',
      icon: <IconTarget size={40} stroke={1.5} className="text-purple-600" />
    },
    {
      title: 'Creative Campaigns & Storytelling',
      description: 'Craft compelling campaigns and narratives that engage your audience and build emotional connections.',
      icon: <IconSparkles size={40} stroke={1.5} className="text-orange-600" />
    },
    {
      title: 'Packaging & Print Design',
      description: 'Design eye-catching packaging and print materials that enhance brand recognition and shelf appeal.',
      icon: <IconBrandAdobe size={40} stroke={1.5} className="text-red-600" />
    },
    {
      title: 'Social Media Creative Assets',
      description: 'Create scroll-stopping social media graphics, templates, and content that drives engagement and shares.',
      icon: <IconBrandFigma size={40} stroke={1.5} className="text-green-600" />
    }
  ];

  const expertise = [
    {
      title: 'Creative Identity',
      description: 'We craft unique brand identities that reflect your story, values, and vision.',
      icon: <IconPalette size={32} stroke={1.5} className="text-blue-600" />
    },
    {
      title: 'Impactful Campaigns',
      description: 'Our creative campaigns engage, inspire, and build stronger connections with your audience.',
      icon: <IconRocket size={32} stroke={1.5} className="text-purple-600" />
    },
    {
      title: 'Design Excellence',
      description: 'From minimal to bold, our designs ensure your brand stands out across all platforms.',
      icon: <IconSparkles size={32} stroke={1.5} className="text-orange-600" />
    },
    {
      title: 'Innovative Thinking',
      description: 'We bring fresh ideas that transform concepts into captivating brand experiences.',
      icon: <IconBulb size={32} stroke={1.5} className="text-yellow-600" />
    },
    {
      title: 'Audience Connection',
      description: 'Building strong emotional connections between your brand and its audience.',
      icon: <IconHeart size={32} stroke={1.5} className="text-red-600" />
    },
    {
      title: 'Brand Growth',
      description: 'Helping your business evolve with designs and strategies that fuel growth.',
      icon: <IconTrendingUp size={32} stroke={1.5} className="text-green-600" />
    }
  ];

  const tools = [
    { name: 'Canva', icon: <IconPalette size={40} stroke={1.5} />, color: 'text-cyan-500' },
    { name: 'Photoshop', icon: <IconBrandAdobe size={40} stroke={1.5} />, color: 'text-blue-600' },
    { name: 'Illustrator', icon: <IconBrandAdobe size={40} stroke={1.5} />, color: 'text-orange-600' },
    { name: 'Figma', icon: <IconBrandFigma size={40} stroke={1.5} />, color: 'text-purple-600' },
    { name: 'Behance', icon: <IconSparkles size={40} stroke={1.5} />, color: 'text-blue-500' },
    { name: 'Dribbble', icon: <IconHeart size={40} stroke={1.5} />, color: 'text-pink-500' },
    { name: 'Sketch', icon: <IconPalette size={40} stroke={1.5} />, color: 'text-yellow-600' },
    { name: 'InDesign', icon: <IconBrandAdobe size={40} stroke={1.5} />, color: 'text-red-600' }
  ];

  return (
    <BgLayout>
      {/* Hero Section */}
      <section className='relative h-[50vh] mt-15 flex items-center justify-center overflow-hidden'>
        <div className='absolute inset-0'>
          <img
            src="/services/brand-creative-hero.webp"
            alt="Brand & Creative"
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
            <span className='text-blue-400'>Brand & Creative</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className='text-3xl md:text-5xl lg:text-6xl font-bold mb-4'>
              Creative Branding That <span className='text-blue-400'>Inspires & Engages</span>
            </h1>
            <p className='text-lg md:text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-8'>
              From logo design and brand identity to campaigns and storytelling — we craft brands that leave a lasting impression.
            </p>
            <Link href='#contact-form'>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl'
              >
                Start Your Branding Journey
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
                  Why Choose Our Brand & Creative Services?
                </h2>
                <p className='text-lg text-gray-700 leading-relaxed mb-6'>
                  A strong brand is more than a logo — it&apos;s an experience. We create brand identities that connect emotionally with your audience and communicate your values clearly.
                </p>
                <p className='text-lg text-gray-700 leading-relaxed'>
                  From visual identity and messaging to creative campaigns, we deliver designs that inspire trust and loyalty.
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
                  src="/services/brand-creative/brand-creative-1.webp"
                  alt="Brand & Creative Services"
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
                <p className='text-gray-600 mb-6'>Get a free brand consultation!</p>
                
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
                        className='w-full pl-10 pr-4 py-3 bg-white rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:bg-gray-100'
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
                      <option value="Logo Design">Logo Design</option>
                      <option value="Brand Identity">Brand Identity</option>
                      <option value="Brand Guidelines">Brand Guidelines</option>
                      <option value="Creative Campaign">Creative Campaign</option>
                      <option value="Packaging Design">Packaging Design</option>
                      <option value="Social Media Creative">Social Media Creative</option>
                      <option value="Complete Branding">Complete Branding</option>
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
              What Makes Us Different?
            </h2>
            <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
              We blend strategy with creativity, delivering designs and campaigns that not only look great but also drive meaningful engagement.
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
              src="/services/brand-creative/brand-creative-2.webp"
              alt="Creative Branding Process"
              className='w-full h-96 object-cover'
            />
          </motion.div>
        </div>
      </section>

      {/* Brand & Creative Platforms */}
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
              BRAND & CREATIVE PLATFORMS
            </h2>
            <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
              We use world-class tools and creative platforms to design stunning visuals, build brand identities, and deliver exceptional creative experiences.
            </p>
          </motion.div>

          <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
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
              Let&apos;s Build Your Brand Story
            </h2>
            <p className='text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed'>
              We help businesses create a strong brand identity that resonates with their audience. Our creative team ensures your brand not only looks stunning but also communicates effectively.
            </p>

            {/* Benefits Grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8'>
              <div className='flex items-center justify-center gap-2 text-blue-100'>
                <IconCheck size={20} className='text-green-400' />
                <span className='font-medium'>Memorable Logo & Identity</span>
              </div>
              <div className='flex items-center justify-center gap-2 text-blue-100'>
                <IconCheck size={20} className='text-green-400' />
                <span className='font-medium'>Creative Storytelling</span>
              </div>
              <div className='flex items-center justify-center gap-2 text-blue-100'>
                <IconCheck size={20} className='text-green-400' />
                <span className='font-medium'>Brand Consistency</span>
              </div>
              <div className='flex items-center justify-center gap-2 text-blue-100'>
                <IconCheck size={20} className='text-green-400' />
                <span className='font-medium'>Strategic Communication</span>
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

export default BrandCreativePage;