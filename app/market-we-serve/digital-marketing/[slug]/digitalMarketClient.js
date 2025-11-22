"use client";

import BgLayout from '@/components/layout/bgLayout';
import React, { useState, useEffect} from 'react';
import { motion } from 'motion/react';
import { IconHome, IconChevronRight, IconMapPin, IconCheck, IconStar, IconPhone, IconMail, IconUser, IconChevronDown } from '@tabler/icons-react';
import Link from 'next/link';
import Clients from '@/components/sections/clients';
import LocationStructuredData from '@/components/seo/LocationStructuredData';
import { useParams } from 'next/navigation';

export default function DigitalServicePage() {
  const { slug } = useParams();
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
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

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
          services: `Digital Marketing - ${locationData?.city_name || slug}`,
          message: null,
          source: 'digital_market_page',
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
          'Service': 'Digital Marketing',
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
  
  const stateName = locationData?.state_name || locationData?.state || '';
  const countryName = locationData?.country_name || locationData?.country || '';
  const locationId =
  locationType === 'city' ? locationData?.city_id || locationData?.id || 0 :
  locationType === 'state' ? locationData?.state_id || locationData?.id || 0 :
  locationType === 'country' ? locationData?.id || 0 : 0;

  const revNum = locationId + 1000;

  // Get parent slugs
  const countrySlug = locationData?.country_slug;
  const stateSlug = locationData?.state_slug;

  const industries = [
    { name: 'Healthcare', label: 'INDUSTRY', image: '/market/gmb/images/industries/healthcare.jpg' },
    { name: 'Retail & Ecommerce', label: 'INDUSTRY', image: '/market/gmb/images/industries/retail.png' },
    { name: 'Travel & Hospitality', label: 'INDUSTRY', image: '/market/gmb/images/industries/travel.jpg' },
    { name: 'Finance & Legal', label: 'INDUSTRY', image: '/market/gmb/images/industries/finance.jpg' },
    { name: 'Startups & SaaS', label: 'INDUSTRY', image: '/market/gmb/images/industries/startups.jpg' },
    { name: 'Real Estate', label: 'INDUSTRY', image: '/market/gmb/images/industries/real-estate.png' },
    { name: 'Education & Edtech', label: 'INDUSTRY', image: '/market/gmb/images/industries/education.jpg' }
  ];

  const services = [
    'Search Engine Optimization (SEO) - Technical & On-Page',
    'Strategic Social Media Marketing & Management',
    'Pay-Per-Click (PPC) Advertising & Google Ads',
    'Content Marketing & Authority Building',
    'Advanced Lead Generation & Automation',
    'Brand Promotion & Reputation Management',
    'Email Marketing & Customer Retention',
    'Conversion Rate Optimization (CRO)',
    'Analytics & Performance Tracking',
    'Marketing Strategy & Consulting'
  ];

  const faqs = [
    {
      question: `What digital marketing services do you offer in ${cityName}?`,
      answer: `We offer comprehensive digital marketing services in ${cityName} including SEO, social media marketing, PPC advertising, content marketing, lead generation, brand promotion, email marketing, and conversion optimization.`
    },
    {
      question: `Why should I outsource digital marketing in ${cityName}?`,
      answer: `Outsourcing digital marketing in ${cityName} gives you access to expert professionals, advanced tools, and proven strategies without the overhead of hiring a full in-house team. It's cost-effective and delivers better results faster.`
    },
    {
      question: `How long does it take to see results from digital marketing in ${cityName}?`,
      answer: `SEO typically shows results in 3-6 months, while PPC and social media can generate immediate visibility. We focus on both quick wins and long-term sustainable growth for businesses in ${cityName}.`
    },
    {
      question: `Is digital marketing affordable for small businesses in ${cityName}?`,
      answer: `Absolutely! We offer affordable digital marketing packages designed specifically for small businesses and startups in ${cityName}. Our goal is to make professional marketing accessible to all businesses, regardless of size.`
    },
    {
      question: `What makes Digital Solution 360 different in ${cityName}?`,
      answer: `We combine advanced AI technology with human creativity, offer transparent reporting, provide personalized strategies for the ${cityName} market, and focus on building long-term partnerships rather than just selling services.`
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
  // Generate Review Schema
const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Digital Solution 360",
  "image": "https://www.digitalsolution360.com/logo.png",
  "description": `Digital Solution 360 offers professional Digital Marketing services in ${cityName}. Get world-class quality at affordable prices. Contact us at +919990556217 for custom solutions tailored to your business needs.`,
  "brand": {
    "@type": "Brand",
    "name": "Digital Solution 360"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": 4.5,
    "reviewCount": revNum, // number of reviews
  }
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
      {/* Review Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />

      {/* Hero Section */}
      <section className='relative h-[50vh] mt-21 lg:mt-19 flex items-center justify-center overflow-hidden'>
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
            {/* Show country for both city and state */}
            {(locationType === 'city' || locationType === 'state') && countryName && countrySlug && (
              <>
                <Link href={`/${countrySlug}`} className='hover:text-blue-400 transition-colors'>
                  {countryName}
                </Link>
                <IconChevronRight size={16} className='text-blue-400' />
              </>
            )}
            {/* Show state only for city */}
            {locationType === 'city' && stateName && stateSlug && (
              <>
                <Link href={`/${stateSlug}`} className='hover:text-blue-400 transition-colors'>
                  {stateName}
                </Link>
                <IconChevronRight size={16} className='text-blue-400' />
              </>
            )}
            <span className='text-blue-400'>Digital Marketing in {cityName}</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='text-left lg:text-center'
          >
            <h1 className='text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4'>
              Digital Marketing Services in <span className='text-blue-400'>{cityName}</span>
            </h1>
            <p className='text-lg md:text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-6'>
              Transform your business with expert digital marketing strategies including SEO, social media, PPC, and content marketing in {cityName}.
            </p>
            <div className='flex flex-wrap items-center justify-center gap-6 text-sm md:text-base'>
              <div className='flex items-center gap-2'>
                <IconCheck size={20} className='text-green-400' />
                <span>253 Projects Done</span>
              </div>
              <div className='flex items-center gap-2'>
                <IconStar size={20} className='text-yellow-500 fill-yellow-500' />
                <span>1960 Ratings</span>
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
                <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6'>The Hidden Secret of Digital Growth in {cityName}</h2>
                
                <div className='prose prose-lg max-w-none space-y-4 text-gray-700 leading-relaxed'>
                  <p>
                    Have you ever thought why certain businesses in {cityName} are expanding at a greater rate than others online? In the new digital world, nothing matters more than visibility. Whether you&apos;re a startup or an established business, finding the right audience at the right time is what success is.
                  </p>
                  
                  <p>
                    That&apos;s where DigitalSolution 360, the most popular digital marketing service provider, intervenes to help make your brand shine. We don&apos;t build temporary campaigns - we create lasting digital success.
                  </p>
                  
                  <p>
                    This comprehensive guide explores how effective coordination of strategic keywords, quality content, and data-driven campaigns can create a powerful, measurable digital strategy. We assist businesses with genuine, quality digital marketing, optimization, paid searches, social media management, and sophisticated lead generation solutions.
                  </p>

                  <h3 className='text-2xl font-bold text-gray-900 mt-8 mb-4'>The Increasing Digital Marketing Requirement: An International Platform</h3>
                  
                  <p>
                    {cityName} is developing at an unprecedented pace and establishing itself as a business hub. Enterprises don&apos;t simply compete in local markets anymore, but at a global, 24/7 digital level. Whether you&apos;re an energetic e-commerce brand or a major real estate developer, all require a solid, sturdy web presence.
                  </p>
                  
                  <p>
                    That&apos;s why quality and strategic digital marketing services have gained ultimate necessity. Conventional marketing approaches are no longer accurate or measurable in terms of ROI needed in business today. Nowadays, customers browse, scroll, compare and eventually shop online.
                  </p>

                  <h3 className='text-2xl font-bold text-gray-900 mt-8 mb-4'>Digital Marketing Outsourcing: The Smart Business Action</h3>
                  
                  <p>
                    Outsourcing digital marketing has been a brilliant and strategic business decision for many developing businesses in {cityName}. Rather than shouldering the enormous overhead and recruitment expenses of managing a full-fledged in-house staff, companies turn to specialized agencies like Digital Solution 360.
                  </p>

                  <p>
                    This provides direct access to the entire range of professional competence and high-level marketing technology. Outsourcing costs very little to run, efficiency and productivity is boosted tremendously, and the results are always better since you share the experience and high level of operating that is superior to the market.
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
                        placeholder='Enter your phone'
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
            className='text-left lg:text-center mb-12'
          >
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
              Comprehensive Digital Marketing Solutions in {cityName}
            </h2>
            <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
              DigitalSolution 360 offers an entire integrated package of digital marketing services built to accommodate every facet of online expansion.
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {[
              {
                title: 'Advanced Search Engine Optimization (SEO)',
                description: 'Our certified SEO specialists develop roadmaps that make your business rise higher in rankings on Google. We embrace intelligent keyword placement, technical optimization, and ethical link building to develop authority and secure constant, high-value organic traffic.'
              },
              {
                title: 'Strategic Social Media Marketing (SMM)',
                description: 'Social media is where brand loyalty and viral growth occur. Our team designs engaging posts, conducts targeted advertising campaigns, and professionally manages your profiles to ensure your audience is hooked and loyal.'
              },
              {
                title: 'Pay-Per-Click (PPC) Advertising',
                description: 'Get immediate, laser-like visibility with PPC advertising. Our professional PPC services are aimed at high ROI, making every single click worth real value with optimized Google Ads and targeted social media efforts.'
              },
              {
                title: 'Authority-Building Content Marketing',
                description: 'Great content is the most powerful engine which generates trust. Our brilliant writers and strategists compose interesting content - blogs, web pages, case studies that not only inform but also drive action using highly targeted long-tail keywords.'
              },
              {
                title: 'Advanced Lead Generation Services',
                description: 'We offer advanced lead generation platforms enabling you to successfully transform website traffic into prospective customers with data-driven targeting, advanced automation, and custom messaging for a healthy, consistent sales pipeline.'
              },
              {
                title: 'Brand Promotion and Trust Building',
                description: 'Differentiation depends on brand promotion. We incorporate strategic keywords in all content and advertisement campaigns, solidifying your brand name and making your business a positive memory in the minds of your target audience.'
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
            className='text-left lg:text-center mb-12'
          >
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
              Why Choose Digital Marketing with Digital Solution 360 in {cityName}
            </h2>
            <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
              SEO and Social Media: The Ideal Growth Combo - When digital channels harmonize seamlessly, maximum growth potential is unleashed.
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {[
              { title: 'Client Partnership Model', description: 'Strategic partnership with transparency and mutual empowerment throughout the process.' },
              { title: 'Affordable Solutions', description: 'Professional digital marketing without straining your budget - quality for all businesses.' },
              { title: 'Personalized Strategies', description: 'Highly personalized campaigns tailored to your specific target audience and market.' },
              { title: 'Future-Ready Marketing', description: 'Blend of advanced AI technology with human-centered creativity for genuine campaigns.' }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className='bg-white shadow-xl rounded-xl p-6 text-center hover:shadow-2xl transition-all'
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
            className='text-left lg:text-center mb-12'
          >
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
              Our Digital Marketing Services in {cityName}
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
            className='text-left lg:text-center mb-12'
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
                className='bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all group'
              >
                <div className='relative h-40 overflow-hidden'>
                  <img 
                    src={industry.image} 
                    alt={industry.name}
                    className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-300'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent'></div>
                </div>
                <div className='p-4 text-center'>
                  <h3 className='text-lg font-bold text-gray-900'>{industry.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className='py-10'>
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
                className='bg-white rounded-xl shadow-xl overflow-hidden'
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? -1 : index)}
                  className='w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors'
                >
                  <h3 className='text-lg font-bold text-gray-900 pr-4'>{faq.question}</h3>
                  <IconChevronDown 
                    size={24} 
                    className={`flex-shrink-0 text-blue-600 transition-transform duration-300 ${openFaqIndex === index ? 'rotate-180' : ''}`}
                  />
                </button>
                <motion.div
                  initial={false}
                  animate={{ 
                    height: openFaqIndex === index ? 'auto' : 0,
                    opacity: openFaqIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className='overflow-hidden'
                >
                  <p className='px-6 pb-4 text-gray-600 leading-relaxed'>{faq.answer}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Conclusion & CTA */}
      <section className='py-10 bg-blue-600'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left lg:text-center'>
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
