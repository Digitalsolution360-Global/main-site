"use client";

import BgLayout from '@/components/layout/bgLayout';
import React, { useState, useEffect, use } from 'react';
import { motion } from 'motion/react';
import { IconHome, IconChevronRight, IconMapPin, IconCheck, IconStar, IconPhone, IconMail, IconUser, IconCode, IconDeviceMobile, IconShoppingCart, IconRocket } from '@tabler/icons-react';
import Link from 'next/link';
import Clients from '@/components/sections/clients';

export default function WebDevServicePage({ params }) {
  const { slug } = use(params);
  const [locationData, setLocationData] = useState(null);
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
        // Map the location data to the expected format
        const mappedData = {
          city_name: data.location.city || data.location.name || data.location.state || data.location.country,
          state_name: data.location.state_name || data.location.name,
          country_name: data.location.country_name
        };
        setLocationData(mappedData);
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
      await fetch('https://formsubmit.co/globalweb3600@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          'Name': formData.name,
          'Email': formData.email,
          'Phone': formData.phone,
          'Service': 'Website Development',
          'Location': locationData?.city_name || slug,
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

  const cityName = locationData?.city_name || slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

  const processSteps = [
    {
      number: '1',
      title: 'Discovery and Strategy',
      description: 'Find out what you want to achieve, who you are aiming at, and what your competitors are doing.'
    },
    {
      number: '2',
      title: 'Design and Prototyping',
      description: 'Develop wireframes and prototypes of your approval of the UI/UX.'
    },
    {
      number: '3',
      title: 'Development',
      description: 'Writing your site in modern technologies and best practices.'
    },
    {
      number: '4',
      title: 'Test and Fine Tune',
      description: 'This is to make sure that your site works with all browsers and all devices.'
    },
    {
      number: '5',
      title: 'Launch and Support',
      description: 'Get total technical support and training as you launch your site online.'
    }
  ];

  const coreValues = [
    {
      title: 'Security',
      description: 'Modern encryption, firewalls, and secure methods of payment are some of our measures against vulnerabilities to your site.',
      icon: '🔒'
    },
    {
      title: 'Speed',
      description: 'Our search engine optimization techniques ensure faster page loading, which will increase user experience and search position.',
      icon: '⚡'
    },
    {
      title: 'Scalability',
      description: 'Your site can easily take more visitors, merchandise, and services as your company grows.',
      icon: '📈'
    }
  ];

  const faqs = [
    {
      question: `How long does it take to build a website in ${cityName}?`,
      answer: `The timeline varies based on complexity. A basic website takes 2-4 weeks, while custom e-commerce or enterprise solutions can take 8-12 weeks. We provide detailed timelines during our initial consultation in ${cityName}.`
    },
    {
      question: `Do you provide website maintenance services in ${cityName}?`,
      answer: `Yes! We offer ongoing maintenance, security updates, content updates, and technical support to ensure your website runs smoothly in ${cityName} and beyond.`
    },
    {
      question: `Will my website be mobile-friendly?`,
      answer: `Absolutely! All our websites are fully responsive and optimized for mobile devices, tablets, and desktops. Mobile-first design is a core part of our development process in ${cityName}.`
    },
    {
      question: `Can you help with SEO for my website in ${cityName}?`,
      answer: `Yes! We integrate SEO best practices into every website we build, including optimized code, fast loading times, proper meta tags, and local SEO strategies for businesses in ${cityName}.`
    },
    {
      question: `What platform do you recommend for e-commerce in ${cityName}?`,
      answer: `We recommend platforms based on your specific needs. Shopify for quick setup, WooCommerce for WordPress users, Magento for large catalogs, or custom solutions for unique requirements in ${cityName}.`
    }
  ];

  return (
    <BgLayout>
      {/* Hero Section */}
      <section className='relative h-[50vh] mt-15 flex items-center justify-center overflow-hidden'>
        <div className='absolute inset-0'>
          <img
            src="/portfolio/web-dev-hero.webp"
            alt={`Website Development in ${cityName}`}
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
            <span className='text-blue-400'>Website Development in {cityName}</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className='text-lg sm:text-xl md:text-3xl lg:text-6xl font-bold mb-4'>
              Online Presence Empowerment through Professional Website Development Services in <span className='text-blue-400'>{cityName}</span>
            </h1>
            <p className='text-lg md:text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-6'>
              Digital Solution 360 - Your Trusted Partner for Web Development
            </p>
            <div className='flex flex-wrap items-center justify-center gap-6 text-sm md:text-base'>
              <div className='flex items-center gap-2'>
                <IconCheck size={20} className='text-green-400' />
                <span>253 Projects Done</span>
              </div>
              <div className='flex items-center gap-2'>
                <IconStar size={20} className='text-yellow-400' />
                <span>2010 Ratings</span>
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
                  <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
                    Do you wish to develop a website that really looks like your brand?
                  </h2>
                  <p className='text-gray-700 leading-relaxed'>
                    In the modern digital era when time is important, the need to have a professional site is not a choice but a necessity. Regardless, of whether you are running a small business, opening an online shop, or a large company, your site is often the first thing that anyone thinks when they see your company.
                  </p>
                </div>
                <div className='order-1 md:order-2'>
                  <img
                    src="/market/website/case-img9.png"
                    alt="Professional Website Design"
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
                    src="/market/website/case-img10.png"
                    alt="Digital Solution 360"
                    className='w-full h-64 object-cover rounded-2xl shadow-lg'
                  />
                </div>
                <div>
                  <p className='text-gray-700 leading-relaxed'>
                    At Digital Solution 360 we understand that your Website is not just a virtual storefront, but is actually the voice, personality and promise of your brand to your consumers. We are that special it comes to the development of websites in {cityName} and the UAE at large that we are creative, functional, and technological enough to deliver websites that engage, convert, and inspire.
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
                    The reason why to go to Digital Solution 360 to develop a website in {cityName}?
                  </h3>
                  <p className='text-gray-700 leading-relaxed mb-4'>
                    In the case of creating websites, it can be revealed that Digital Solution 360 is a reputable service provider of web development that values perfection when creating websites. We do not just come up with websites, but we also come up with digital experiences to enable the companies to prosper.
                  </p>
                  <p className='text-gray-700 leading-relaxed'>
                    Our professional developers, designers, and digital strategists can make websites based on the particular needs of yours with years of experience and using the latest technology.
                  </p>
                </div>
                <div className='order-1 md:order-2'>
                  <img
                    src="/market/website/case-img11.png"
                    alt="Why Choose Us"
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
                    src="/market/website/case-img12.png"
                    alt="Bespoke Design"
                    className='w-full h-64 object-cover rounded-2xl shadow-lg'
                  />
                </div>
                <div>
                  <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                    Bespoke Website Design Solutions Built to Your Brand
                  </h3>
                  <p className='text-gray-700 leading-relaxed mb-4'>
                    Every company is different and your site must indicate it. The services of our custom website development are aimed at the development of websites on a custom basis to suit your brand, beauty, and the technological requirements.
                  </p>
                  <p className='text-gray-700 leading-relaxed'>
                    Since the first wireframing, design, and deployment, we ensure that all elements of your web do portray the identity of your brand.
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

      {/* Services Overview */}
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
              Website Development Services in {cityName}
            </h2>
            <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
              At Digital Solution 360, we deliver responsive, scalable, and SEO-friendly websites that grow your brand in {cityName}, and beyond.
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {[
              {
                icon: <IconDeviceMobile size={40} />,
                title: 'Responsive Web Development',
                description: `A responsive site is a necessity. Our services ensure your site will appear and work on any screen size in ${cityName}.`,
                color: 'blue'
              },
              {
                icon: <IconShoppingCart size={40} />,
                title: 'Ecommerce Development',
                description: `Advanced e-commerce systems using Shopify, WooCommerce, Magento for businesses in ${cityName}.`,
                color: 'green'
              },
              {
                icon: <IconCode size={40} />,
                title: 'WordPress Development',
                description: `Easy-to-use, content-oriented WordPress websites with custom themes and plugins in ${cityName}.`,
                color: 'purple'
              },
              {
                icon: <IconRocket size={40} />,
                title: 'Dynamic Website Development',
                description: `Interactive platforms using React, Angular, and Laravel for engaging user experiences in ${cityName}.`,
                color: 'pink'
              },
              {
                icon: <IconCheck size={40} />,
                title: 'Affordable Web Development',
                description: `Quality websites at affordable prices for startups and small businesses in ${cityName}.`,
                color: 'orange'
              },
              {
                icon: <IconStar size={40} />,
                title: 'Magento Development',
                description: `Expert Magento solutions for large product collections and complex integrations in ${cityName}.`,
                color: 'red'
              }
            ].map((service, index) => (
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

      {/* Development Process */}
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
              How We Work – The Process of Our Development
            </h2>
            <p className='text-lg text-gray-600'>
              We employ an open and cooperative approach that has you in charge at all phases.
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-5 gap-6'>
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className='text-center'
              >
                <div className='w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4'>
                  {step.number}
                </div>
                <h3 className='text-lg font-bold text-gray-900 mb-2'>{step.title}</h3>
                <p className='text-sm text-gray-600'>{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
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
              Our Three Core Values: Security, Speed, and Scalability
            </h2>
            <p className='text-lg text-gray-600'>
              All successful web pages have three features that form the basis of our development philosophy.
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className='bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-all'
              >
                <div className='text-6xl mb-4'>{value.icon}</div>
                <h3 className='text-2xl font-bold text-gray-900 mb-4'>{value.title}</h3>
                <p className='text-gray-600 leading-relaxed'>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Content Sections with Images */}
      <section className='py-10'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12'>
          {/* Digital Trust */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='grid grid-cols-1 md:grid-cols-2 gap-6 items-center'
          >
            <div>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                Creating Digital Trust through Excellence and Innovation
              </h3>
              <p className='text-gray-700 leading-relaxed mb-4'>
                The goal of Digital Solution 360 is not restricted to websites creation of websites. Our interest is in achieving digital trust: the key to connecting your brand and your customers. In the current world, trust is developed based on consistency, openness, and flawless technology.
              </p>
              <p className='text-gray-700 leading-relaxed'>
                The visitors evaluate your business by the way it looks and feels by just clicking on it. A slow, disheveled, or old-fashioned Website will soon send away potential customers.
              </p>
            </div>
            <div>
              <img
                src="/market/website/case-img13.png"
                alt="Digital Trust"
                className='w-full h-80 object-cover rounded-2xl shadow-lg'
              />
            </div>
          </motion.div>

          {/* Digital Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='grid grid-cols-1 md:grid-cols-2 gap-6 items-center'
          >
            <div className='order-2 md:order-1'>
              <img
                src="/market/website/case-img14.png"
                alt="Digital Experience"
                className='w-full h-80 object-cover rounded-2xl shadow-lg'
              />
            </div>
            <div className='order-1 md:order-2'>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                Making Your Vision a Digital Experience
              </h3>
              <p className='text-gray-700 leading-relaxed mb-4'>
                Any major project has a great idea behind it. You give the fantasy and we have the talent to bring it into life. Our team collaborates with you in order to transform your ideas into an amazing digital platform.
              </p>
              <p className='text-gray-700 leading-relaxed'>
                It starts with a comprehensive consultation to better know what you want to achieve, your audience, and market. We will then develop a designer plan to describe how your website will be designed.
              </p>
            </div>
          </motion.div>

          {/* Ecommerce Solutions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='grid grid-cols-1 md:grid-cols-2 gap-6 items-center'
          >
            <div>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                Ecommerce and Beyond: Increasing the Possibility to All Businesses
              </h3>
              <p className='text-gray-700 leading-relaxed mb-4'>
                The future of commerce is digital, and we would like to assist you to accept it. Our services regarding the creation of ecommerce websites are aimed at ambitious entrepreneurships that would like to sell better, enter new markets, and satisfy the consumer at each level.
              </p>
              <p className='text-gray-700 leading-relaxed'>
                We integrate safe payment gateways, user friendly data-based dashboards to make it simple to manage your business, and product management systems.
              </p>
            </div>
            <div>
              <img
                src="/market/website/case-img15.png"
                alt="Ecommerce Solutions"
                className='w-full h-80 object-cover rounded-2xl shadow-lg'
              />
            </div>
          </motion.div>

          {/* Support and Maintenance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='grid grid-cols-1 md:grid-cols-2 gap-6 items-center'
          >
            <div className='order-2 md:order-1'>
              <img
                src="/market/website/case-img4.png"
                alt="Support and Maintenance"
                className='w-full h-80 object-cover rounded-2xl shadow-lg'
              />
            </div>
            <div className='order-1 md:order-2'>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                Customer-oriented Support and Maintenance
              </h3>
              <p className='text-gray-700 leading-relaxed mb-4'>
                The relationship between us does not end with launch as it is the beginning. We offer reliable after sales support, performance checks and regular upgrades in order to ensure the safety of your site and its updatedness.
              </p>
              <p className='text-gray-700 leading-relaxed'>
                Have to make new features or change the layout of your site? Not an issue. Our dedicated support team will ensure that your website is moving in line with your business.
              </p>
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

      {/* CTA Section */}
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
              Ready to Transform Your Online Presence in {cityName}?
            </h2>
            <p className='text-xl text-blue-100 mb-6 leading-relaxed'>
              Your success is our mission. At Digital Solution 360, we evaluate our success not by the number of sites that we generate, but rather how they affect our clients. All our projects are designed heartedly, precisely and intentionally.
            </p>
            <p className='text-lg text-blue-100 mb-8'>
              We aim at ensuring that your online experience is as smooth as possible, starting with the first consultation, up to the help after the launch. Let&apos;s create something extraordinary together!
            </p>
            <Link href='/contact'>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300'
              >
                Start Your Web Project Today
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </BgLayout>
  );
}
