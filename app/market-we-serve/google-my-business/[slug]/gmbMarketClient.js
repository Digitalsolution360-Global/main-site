"use client";

import BgLayout from '@/components/layout/bgLayout';
import React, { useState, useEffect, use } from 'react';
import { motion } from 'motion/react';
import { IconHome, IconChevronRight, IconMapPin, IconCheck, IconStar, IconPhone, IconMail, IconUser } from '@tabler/icons-react';
import Link from 'next/link';
import Clients from '@/components/sections/clients';
import LocationStructuredData from '@/components/seo/LocationStructuredData';

export default function GMBServicePage({ params }) {
  const { slug } = use(params);
  const [locationData, setLocationData] = useState(null);
  const [locationType, setLocationType] = useState(null);
  const [serviceType, setServiceType] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  useEffect(() => {
    fetchLocationData();
  }, [slug]);

  const fetchLocationData = async () => {
    try {
      const response = await fetch(`/api/locations/details/${slug}`);
      const data = await response.json();
      
      if (data.location) {
        // Store full location data including IDs for structured data
        setLocationData(data.location);
        setLocationType(data.locationType);
        setServiceType(data.serviceType);
      }
    } catch (error) {
      console.error('Error fetching location:', error);
    } finally {
      setLoading(false);
    }
  };

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
          services: `Google My Business - ${locationData?.city_name || slug}`,
          message: null,
          source: 'gmb_market_page',
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
          'Service': 'Google My Business',
          'Location': locationData?.city_name || slug,
          'Page URL': window.location.pathname,
          _captcha: false,
          _template: 'table'
        })
      });

      setFormData({ name: '', email: '', phone: '' });
      setShowThankYou(true);
      setTimeout(() => setShowThankYou(false), 5000);
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <BgLayout>
        <div className='flex items-center justify-center min-h-screen'>
          <div className='text-center'>
            <div className='inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600'></div>
            <p className='mt-4 text-gray-600'>Loading...</p>
          </div>
        </div>
      </BgLayout>
    );
  }

  // Get location name based on type
  const cityName = locationType === 'city' 
    ? (locationData?.city || locationData?.name)
    : locationType === 'state'
    ? locationData?.name
    : locationData?.name || slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  
  const stateName = locationData?.state_name || '';
  const countryName = locationData?.country_name || '';

  const industries = [
    { name: 'Healthcare', label: 'INDUSTRY' },
    { name: 'Retail & Ecommerce', label: 'INDUSTRY' },
    { name: 'Travel & Hospitality', label: 'INDUSTRY' },
    { name: 'Finance & Legal', label: 'INDUSTRY' },
    { name: 'Startups & SaaS', label: 'INDUSTRY' },
    { name: 'Real Estate', label: 'INDUSTRY' },
    { name: 'Education & Edtech', label: 'INDUSTRY' }
  ];

  const services = [
    'Claiming and Verifying Your Business Profile',
    'Consistent and Accurate NAP Data',
    'Category and Attribute Optimization',
    'High-Quality Photos and Videos Upload',
    'Regular GMB Posts and Offers',
    'Review Generation and Reputation Management',
    'Adding Products, Services, and Menus',
    'Keyword and Location Optimization in Descriptions',
    'Google Q&A Management and Optimization',
    'Advanced Messaging and Appointment Features'
  ];

  const faqs = [
    {
      question: `What is Google My Business in ${cityName}?`,
      answer: `Google My Business (GMB) is a free tool that helps businesses in ${cityName} manage their online presence on Google Search and Maps. It allows you to connect with customers, post updates, and manage your business information.`
    },
    {
      question: `Why is GMB important for businesses in ${cityName}?`,
      answer: `GMB is crucial for local visibility in ${cityName}. It helps your business appear in local searches, Google Maps, and the local 3-pack, making it easier for customers in ${cityName} to find and contact you.`
    },
    {
      question: `How long does it take to see results from GMB optimization in ${cityName}?`,
      answer: `Most businesses in ${cityName} start seeing improved visibility within 2-4 weeks of proper GMB optimization. However, building a strong presence with reviews and regular updates takes consistent effort over 3-6 months.`
    },
    {
      question: `Do you provide GMB services for all types of businesses in ${cityName}?`,
      answer: `Yes! We provide GMB services for all types of businesses in ${cityName} - from local shops and restaurants to professional services, healthcare, real estate, and more.`
    },
    {
      question: `What makes your GMB services different in ${cityName}?`,
      answer: `Our team has deep expertise in ${cityName}'s local market. We use advanced strategies, maintain transparency, provide regular reports, and focus on generating real business results, not just profile views.`
    }
  ];

  // Generate FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <BgLayout>
      {/* Structured Data for SEO */}
      <LocationStructuredData 
        locationData={locationData}
        locationType={locationType}
        serviceType={serviceType}
      />

      {/* FAQ Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className='relative h-[50vh] mt-15 flex items-center justify-center overflow-hidden'>
        <div className='absolute inset-0'>
          <img
            src="/portfolio/gmb-hero.webp"
            alt={`Google My Business in ${cityName}`}
            className='w-full h-full object-cover'
          />
          <div className='absolute inset-0 bg-black/70'></div>
        </div>

        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white'>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='flex items-center justify-center gap-2 text-sm mb-6 flex-wrap'
          >
            <Link href='/' className='flex items-center gap-1 hover:text-blue-400 transition-colors'>
              <IconHome size={18} />
              <span>Home</span>
            </Link>
            <IconChevronRight size={16} className='text-blue-400' />
            <Link href='/market-we-serve' className='hover:text-blue-400 transition-colors'>
              Markets We Serve
            </Link>
            <IconChevronRight size={16} className='text-blue-400' />
            <span className='text-blue-400'>GMB in {cityName}</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-4'>
              Google My Business Services in <span className='text-blue-400'>{cityName}</span>
            </h1>
            <p className='text-lg md:text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-6'>
              Boost local visibility, manage your Google Business Profile, and attract more customers with expert strategies in {cityName}.
            </p>
            <div className='flex flex-wrap items-center justify-center gap-6 text-sm md:text-base'>
              <div className='flex items-center gap-2'>
                <IconCheck size={20} className='text-green-400' />
                <span>253 Projects Done</span>
              </div>
              <div className='flex items-center gap-2'>
                <IconStar size={20} className='text-yellow-400' />
                <span>1640 Ratings</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section with Form */}
      <section className='py-10'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
            {/* Content Column - 2/3 */}
            <div className='lg:col-span-2'>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6'>Introduction</h2>
                
                <div className='prose prose-lg max-w-none space-y-4 text-gray-700 leading-relaxed'>
                  <p>
                    The digital world is full of competition for any business that has zero or negligible online reach. When it comes to customers, they search on Google for any of their required products and services.
                  </p>
                  
                  <p>
                    Is your business listed in Google My Business? If not, you will miss the right audience at the right time. If you want to appear to your suitable customers, go with the advanced Google My Business option.
                  </p>
                  
                  <p>
                    This is no longer optional for businesses that seek local visibility, better customer engagement, and convert their viewers into loyal or permanent customers. At Digital Solution 360, we specialize in helping businesses unlock the full potential of Google My Business.
                  </p>
                  
                  <p>
                    Here, we just don&apos;t set up profiles but unlock the power of Google My Business free ads using advanced strategies, marketing integrations, and high-quality visuals. With years of experience, our talented experts can handle all the tasks to elevate your business&apos;s online reach in {cityName} or other parts of the country.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Form Column - 1/3 */}
            <div className='lg:col-span-1'>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className='bg-blue-50/90 rounded-2xl shadow-2xl p-8 sticky top-24'
              >
                <h3 className='text-2xl font-bold text-gray-900 mb-2'>Get Started Today</h3>
                <p className='text-gray-600 mb-6'>Fill out the form and we&apos;ll get back to you shortly!</p>
                
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

                  <button
                    type='submit'
                    disabled={isSubmitting}
                    className='w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 hover:shadow-lg disabled:bg-gray-400 disabled:cursor-not-allowed'
                  >
                    {isSubmitting ? 'Sending...' : 'Get Free Consultation'}
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

      {/* Expert Procedures Section */}
      <section className='py-10 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='text-center mb-12'
          >
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
              Expert-Level Google My Business Procedures: Join Digital Solution 360
            </h2>
            <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
              Are you searching to elevate your online stature with Google My Business in {cityName}? Digital Solution 360 is the best choice for those seeking comprehensive services in Google Business Marketing.
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {[
              {
                title: 'Better Management in GMB and Local SEO',
                description: 'Customizable content and SEO strategies help your business grow online effortlessly.'
              },
              {
                title: 'Advanced Tools and Customizations',
                description: 'We use the latest methods to stay ahead of Google algorithm changes.'
              },
              {
                title: 'Maintain Transparency with Customers',
                description: 'We maintain transparency and awareness to keep every detail proper on GMB.'
              },
              {
                title: 'Client-Specific Attributes',
                description: 'Every strategy is client-focused, with tracking and analysis for performance.'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className='bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow'
              >
                <div className='flex items-start gap-4'>
                  <div className='flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center'>
                    <IconCheck size={20} className='text-blue-600' />
                  </div>
                  <div>
                    <h3 className='text-xl font-bold text-gray-900 mb-2'>{item.title}</h3>
                    <p className='text-gray-600'>{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Benefits to Choose Creating a Google Business Profile in {cityName}
            </h2>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {[
              { title: 'Better Customer Engagement', description: 'Attract more customers online.' },
              { title: 'Improved Search Engine Appearance', description: 'Show up in searches for your business category.' },
              { title: 'Gain Trust from Viewers', description: 'Build credibility with a strong online presence.' },
              { title: 'Control on Business&apos;s Growth', description: 'Analyze growth with professional insights.' }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className='bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 text-center hover:shadow-xl transition-all'
              >
                <div className='w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <IconCheck size={32} className='text-white' />
                </div>
                <h3 className='text-xl font-bold text-gray-900 mb-2'>{benefit.title}</h3>
                <p className='text-gray-600'>{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services List Section */}
      <section className='py-10 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='text-center mb-12'
          >
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
              Our GMB Services in {cityName}
            </h2>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className='bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all flex items-start gap-3'
              >
                <IconCheck size={24} className='text-green-500 flex-shrink-0 mt-1' />
                <p className='text-gray-800 font-medium'>{service}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
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
              Industries We Serve in {cityName}
            </h2>
          </motion.div>

          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className='bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-all'
              >
                <div className='text-xs text-blue-600 font-semibold mb-2'>{industry.label}</div>
                <h3 className='text-lg font-bold text-gray-900'>{industry.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className='py-10 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <Clients />
        </div>
      </section>

      {/* FAQs Section */}
      <section className='py-10'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='text-center mb-12'
          >
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className='space-y-4'>
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className='bg-white rounded-xl p-6 shadow-md'
              >
                <h3 className='text-lg font-bold text-gray-900 mb-3'>{faq.question}</h3>
                <p className='text-gray-600 leading-relaxed'>{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Conclusion & CTA */}
      <section className='py-10 bg-blue-600'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='text-white'
          >
            <h2 className='text-3xl md:text-4xl font-bold mb-6'>
              Ready to Dominate Local Search in {cityName}?
            </h2>
            <p className='text-xl text-blue-100 mb-6 leading-relaxed'>
              A budget-friendly GMB company is hard to find in {cityName}. For small or large businesses, online presence is important in 2025. If you want to reach heights in the online world, choose a reliable Google My Business company.
            </p>
            <p className='text-lg text-blue-100 mb-8'>
              Businesses can secure more with comprehensive GMB strategies. Whether you run a shop, clinic, or online venture, our team creates a roadmap ensuring your Google Business Profile becomes an asset for long-term success.
            </p>
            <Link href='/contact'>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300'
              >
                Get Started Today
              </motion.button>
            </Link>
            <p className='text-lg font-bold mt-8'>
              Don&apos;t just list—lead! Let Digital Solution 360 optimize your Google My Business today.
            </p>
          </motion.div>
        </div>
      </section>
    </BgLayout>
  );
}
