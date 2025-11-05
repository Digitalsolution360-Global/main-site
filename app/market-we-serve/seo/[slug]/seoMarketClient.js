"use client";

import BgLayout from '@/components/layout/bgLayout';
import React, { useState, useEffect, use } from 'react';
import { motion } from 'motion/react';
import { IconHome, IconChevronRight, IconCheck, IconStar, IconPhone, IconMail, IconUser, IconSearch, IconTrendingUp, IconTarget, IconChartBar, IconChevronDown } from '@tabler/icons-react';
import Link from 'next/link';
import Clients from '@/components/sections/clients';
import LocationStructuredData from '@/components/seo/LocationStructuredData';

export default function SEOPage({ params }) {
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
          services: `SEO Services - ${locationData?.city_name || slug}`,
          message: null,
          source: 'seo_market_page',
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
          'Service': 'SEO Services',
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
  
  // Get parent slugs
  const countrySlug = locationData?.country_slug;
  const stateSlug = locationData?.state_slug;

  const seoServices = [
    {
      icon: <IconSearch size={40} />,
      title: 'Technical SEO',
      description: 'Website audits, speed optimization, mobile-friendliness, and structured data implementation.',
      color: 'blue'
    },
    {
      icon: <IconTrendingUp size={40} />,
      title: 'Local SEO',
      description: `Dominate local search results in ${cityName} with Google Business Profile optimization and local citations.`,
      color: 'green'
    },
    {
      icon: <IconTarget size={40} />,
      title: 'On-Page SEO',
      description: 'Content optimization, meta tags, keyword research, and internal linking strategies.',
      color: 'purple'
    },
    {
      icon: <IconChartBar size={40} />,
      title: 'eCommerce SEO',
      description: 'Product optimization, category pages, and conversion-focused SEO for online stores.',
      color: 'pink'
    },
    {
      icon: <IconStar size={40} />,
      title: 'Link Building',
      description: 'High-quality backlinks from authoritative websites to boost domain authority.',
      color: 'orange'
    },
    {
      icon: <IconCheck size={40} />,
      title: 'Content Marketing',
      description: 'SEO-optimized content creation that ranks well and engages your audience.',
      color: 'red'
    }
  ];

  const whyChooseUs = [
    'Proven track record with measurable results',
    'Transparent reporting and regular updates',
    'White-hat, ethical SEO techniques',
    'Customized strategies for your business',
    'Expert team with years of experience',
    'Local market knowledge and expertise'
  ];

  const faqs = [
    {
      question: `How long does SEO take to show results in ${cityName}?`,
      answer: `SEO is a long-term investment. Typically, you'll start seeing improvements in 3-6 months, with significant results in 6-12 months. The timeline varies based on competition, current website status, and industry in ${cityName}.`
    },
    {
      question: `What is the difference between organic SEO and paid advertising?`,
      answer: `Organic SEO focuses on earning rankings naturally through quality content and optimization, providing long-term sustainable traffic. Paid ads give immediate visibility but stop when you stop paying. SEO builds lasting value for your business.`
    },
    {
      question: `Do you guarantee first page rankings on Google?`,
      answer: `No reputable SEO company can guarantee specific rankings as Google's algorithm is constantly evolving. However, we use proven strategies that significantly improve your visibility and drive qualified traffic to your website in ${cityName}.`
    },
    {
      question: `What is local SEO and why is it important for ${cityName} businesses?`,
      answer: `Local SEO optimizes your online presence for location-based searches. It's crucial for businesses in ${cityName} as it helps you appear when customers search for services "near me" or in ${cityName}, driving foot traffic and local leads.`
    },
    {
      question: `How do you measure SEO success?`,
      answer: `We track multiple metrics including organic traffic growth, keyword rankings, conversion rates, bounce rates, and ROI. You'll receive detailed monthly reports showing progress and the impact on your business goals in ${cityName}.`
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
      <section className='relative h-[50vh] mt-21 lg:mt-19 flex items-center justify-center overflow-hidden'>
        <div className='absolute inset-0'>
          <img
            src="/market/seo/hero-image.webp"
            alt={`SEO Services in ${cityName}`}
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
            <span className='text-blue-400'>SEO in {cityName}</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='text-left lg:text-center'
          >
            <h1 className='text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4'>
              Grow Your Business on the Internet with Professional SEO in <span className='text-blue-400'>{cityName}</span>
            </h1>
            <p className='text-lg md:text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-6'>
              Have you ever wondered why some companies appear on top of Google but other companies are buried in the later pages? It is visible in the digital era.
            </p>
            <div className='flex flex-wrap items-center justify-center gap-6 text-sm md:text-base'>
              <div className='flex items-center gap-2'>
                <IconCheck size={20} className='text-green-400' />
                <span>253 Projects Done</span>
              </div>
              <div className='flex items-center gap-2'>
                <IconStar size={20} className='text-yellow-500 fill-yellow-500' />
                <span>1640 Ratings</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section with Form */}
      <section className='py-10' id='learn-more'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
            {/* Content Column - 2/3 */}
            <div className='lg:col-span-2 space-y-12'>
              {/* Section 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className='grid grid-cols-1 md:grid-cols-2 gap-6 items-center'
              >
                <div className='order-2 md:order-1'>
                  <p className='text-gray-700 leading-relaxed mb-4'>
                    Whether you are running a small company or a global brand, your internet success will be predetermined by the ease of finding you. It is at this point that SEO services play their role and particularly when applied by experts who know how to make search engines drivers of growth of your company.
                  </p>
                  <p className='text-gray-700 leading-relaxed'>
                    In this paper, we will examine the importance of SEO services in {cityName}, the difference between professional, local, and eCommerce SEO and how the best SEO agencies can make the online presence of your brand a success story that can successfully last.
                  </p>
                </div>
                <div className='order-1 md:order-2'>
                  <img
                    src="/market/seo/seo-1.png"
                    alt="SEO Services"
                    className='w-full h-64 object-cover rounded-2xl shadow-lg'
                  />
                </div>
              </motion.div>

              {/* Section 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className='grid grid-cols-1 md:grid-cols-2 gap-6 items-center'
              >
                <div>
                  <img
                    src="/market/seo/seo-2.png"
                    alt="Understanding SEO"
                    className='w-full h-64 object-cover rounded-2xl shadow-lg'
                  />
                </div>
                <div>
                  <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                    The Best Understanding of SEO: The Online Acumen
                  </h3>
                  <p className='text-gray-700 leading-relaxed mb-4'>
                    The technique of increasing your ranking on search engines can be referred to as Search Engine Optimization, or SEO. As prospective customers seek out the goods or services which you offer, the search engine optimization will make sure that your company is there at the right time.
                  </p>
                  <p className='text-gray-700 leading-relaxed'>
                    It is not all about keyword cramming. Effective SEO aims at gaining trust, credibility, and relevancy.
                  </p>
                </div>
              </motion.div>

              {/* Section 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className='grid grid-cols-1 md:grid-cols-2 gap-6 items-center'
              >
                <div className='order-2 md:order-1'>
                  <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                    Professional SEO in {cityName}
                  </h3>
                  <p className='text-gray-700 leading-relaxed mb-4'>
                    Why Do {cityName} Businesses require professional SEO services? {cityName} has become the place of innovations, luxury, and digital revolution. Competency is required in the face of all these businesses struggling to draw attention online.
                  </p>
                  <p className='text-gray-700 leading-relaxed'>
                    Professional SEO helps companies to come up with strategies that reach the right audience and use those keywords that are relevant to the intent of the buyer.
                  </p>
                </div>
                <div className='order-1 md:order-2'>
                  <img
                    src="/market/seo/seo-3.png"
                    alt="Professional SEO"
                    className='w-full h-64 object-cover rounded-2xl shadow-lg'
                  />
                </div>
              </motion.div>

              {/* Section 4 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className='grid grid-cols-1 md:grid-cols-2 gap-6 items-center'
              >
                <div>
                  <img
                    src="/market/seo/seo-4.png"
                    alt="Local SEO"
                    className='w-full h-64 object-cover rounded-2xl shadow-lg'
                  />
                </div>
                <div>
                  <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                    SEO Services in {cityName}: Developing Digital Roots
                  </h3>
                  <p className='text-gray-700 leading-relaxed mb-4'>
                    {cityName} is rapidly turning out to be a digital powerhouse. Internet marketing is being utilized in businesses more than ever before. The demand of SEO services in {cityName} is growing because companies understand that the position on the search results directly affects the credibility and conversions.
                  </p>
                  <p className='text-gray-700 leading-relaxed'>
                    SEO experts in {cityName} are aware of local market forces, cultural nuances and user search patterns.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Form Column - 1/3 */}
            <div className='lg:col-span-1' id='contact-form'>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className='bg-blue-50/90 rounded-2xl shadow-2xl p-8 sticky top-24'
              >
                <h3 className='text-2xl font-bold text-gray-900 mb-2'>Get Your Free SEO Audit</h3>
                <p className='text-gray-600 mb-6'>Discover how we can boost your rankings!</p>
                
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
                    {isSubmitting ? 'Sending...' : 'Get Free SEO Audit'}
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

      {/* SEO Services Overview */}
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
              Our Comprehensive SEO Services in {cityName}
            </h2>
            <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
              Professional SEO strategies designed to boost your online visibility and drive qualified traffic.
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {seoServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className='bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all'
              >
                <div className={`text-${service.color}-600 mb-4`}>
                  {service.icon}
                </div>
                <h3 className='text-xl font-bold text-gray-900 mb-3'>{service.title}</h3>
                <p className='text-gray-600 leading-relaxed'>{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className='py-10'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'
          >
            <div>
              <img
                src="/market/seo/seo-5.png"
                alt="Why Choose Us"
                className='w-full h-96 object-cover rounded-2xl shadow-lg'
              />
            </div>
            <div>
              <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6'>
                What Makes a Professional SEO Services Company Different?
              </h2>
              <p className='text-gray-700 leading-relaxed mb-6'>
                Every SEO agency does not make the cut. An effective company with SEO services focuses on transparency, planning, and performance. They are not going to deliver instant success as real SEO development takes time and patience.
              </p>
              <ul className='space-y-3'>
                {whyChooseUs.map((item, index) => (
                  <li key={index} className='flex items-start gap-3'>
                    <IconCheck size={24} className='text-green-600 flex-shrink-0 mt-0.5' />
                    <span className='text-gray-700'>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Additional Content Sections */}
      <section className='py-10'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12'>
          {/* Organic SEO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='grid grid-cols-1 md:grid-cols-2 gap-6 items-center'
          >
            <div className='order-2 md:order-1'>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                Organic SEO Services: Developing Long-Term Growth
              </h3>
              <p className='text-gray-700 leading-relaxed mb-4'>
                As much as sponsored marketing can give quick awareness, it usually disappears once you give up on it. Organic SEO, in its turn, aims at long-term expansion by default search positions.
              </p>
              <p className='text-gray-700 leading-relaxed'>
                Organic search engine optimization establishes credibility in your industry due to quality content, backlinks, and proper web optimization. The benefits are long-term, and the results may take longer to be realized.
              </p>
            </div>
            <div className='order-1 md:order-2'>
              <img
                src="/market/seo/seo-6.png"
                alt="Organic SEO"
                className='w-full h-80 object-cover rounded-2xl shadow-lg'
              />
            </div>
          </motion.div>

          {/* eCommerce SEO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='grid grid-cols-1 md:grid-cols-2 gap-6 items-center'
          >
            <div>
              <img
                src="/market/seo/seo-3.png"
                alt="eCommerce SEO"
                className='w-full h-80 object-cover rounded-2xl shadow-lg'
              />
            </div>
            <div>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                eCommerce SEO: Boost Your Online Store
              </h3>
              <p className='text-gray-700 leading-relaxed mb-4'>
                This type of search engine optimization optimizes product names, descriptions, photos and URLs. It will ensure that your store is seen when customers are looking at things online.
              </p>
              <p className='text-gray-700 leading-relaxed'>
                In contrast to sponsored advertisements that cease to work once the budget is depleted, eCommerce SEO will keep on attracting visitors day and night. It is a long term investment that will yield permanent organic revenue and returning consumers.
              </p>
            </div>
          </motion.div>

          {/* Brand Building */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='grid grid-cols-1 md:grid-cols-2 gap-6 items-center'
          >
            <div className='order-2 md:order-1'>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                The Effect of SEO in Brand Building
              </h3>
              <p className='text-gray-700 leading-relaxed mb-4'>
                SEO is not only about traffic but also trust is built. By observing your brand high on search results a number of times, visitors are likely to associate with it and regard it as credible and of high quality. Gradually, this appreciation is transferred into loyalty.
              </p>
              <p className='text-gray-700 leading-relaxed'>
                SEO enhances the authoritativeness of your brand through publication of valuable content, optimization of your website and getting back links with reputable websites.
              </p>
            </div>
            <div className='order-1 md:order-2'>
              <img
                src="/market/seo/seo-8.png"
                alt="Brand Building"
                className='w-full h-80 object-cover rounded-2xl shadow-lg'
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Clients Section */}
      <section className='py-10'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <Clients />
        </div>
      </section>

      {/* FAQs Section */}
      <section className='py-10 '>
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

      {/* CTA Section */}
      <section className='py-10 bg-blue-600 '>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left lg:text-center'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='text-white'
          >
            <h2 className='text-3xl md:text-4xl font-bold mb-6'>
              Ready to Dominate Search Results in {cityName}?
            </h2>
            <p className='text-xl text-blue-100 mb-6 leading-relaxed'>
              SEO bridges the gap by making your website more relevant and authoritative. It assists in keeping your products or services in mind of the people that are actively searching for your products or services.
            </p>
            <p className='text-lg text-blue-100 mb-8'>
              The exposure in {cityName} where the customers are digitally savvy results in more growth and revenue. Let&apos;s make your business the first choice for customers searching online!
            </p>
            <Link href='/contact'>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300'
              >
                Start Your SEO Journey Today
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </BgLayout>
  );
}
