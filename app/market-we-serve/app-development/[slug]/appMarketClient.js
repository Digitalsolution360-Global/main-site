"use client";

import BgLayout from '@/components/layout/bgLayout';
import React, { useState, useEffect, use } from 'react';
import { motion } from 'motion/react';
import { IconHome, IconChevronRight, IconMapPin, IconCheck, IconStar,IconStarFilled, IconPhone, IconMail, IconUser, IconCode, IconDeviceMobile, IconShoppingCart, IconRocket, IconLock, IconBolt, IconTrendingUp, IconChevronDown,IconArrowRight, IconChecks   } from '@tabler/icons-react';
import Link from 'next/link';
import Clients from '@/components/sections/clients';
import LocationStructuredData from '@/components/seo/LocationStructuredData';

export default function AppServicePage({ params }) {
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
          services: `App Development - ${locationData?.city_name || slug}`,
          message: null,
          source: 'app_dev_market_page',
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
          'Service': 'App Development',
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
  
  // Get parent slugs - for country, we need to fetch it separately or use a mapping
  const countrySlug = locationData?.country_slug;
  const stateSlug = locationData?.state_slug;


 const faqs = [
  {
    question: `How much does app development cost in ${cityName}?`,
    answer: `Honestly, it depends — features, complexity, whether you need one platform or both, and things like payment gateway integrations all move the number. A basic app and one with custom backend logic aren't in the same price range, so it's worth getting in touch and talking through what you actually need.`
  },
  {
    question: `How long does it take to develop a mobile app?`,
    answer: `A few weeks for something simple. Longer if there are custom features, several integrations, or an admin dashboard involved. Once planning wraps up, you'll have a real timeline rather than a ballpark guess.`
  },
  {
    question: `Do you develop apps for Android and iOS?`,
    answer: `Both, native or cross-platform. Flutter and React Native cover the cases where one codebase for both platforms makes sense; otherwise it's native Android and iOS builds.`
  },
  {
    question: `Do you provide maintenance after the app is launched?`,
    answer: `Yes — bug fixes, performance checks, and keeping things working as Android and iOS push out new versions. Launch isn't really the finish line.`
  },
  {
    question: `Can you develop mobile apps for businesses across the ${cityName}?`,
    answer: `Yes. The base is in ${cityName}, but plenty of projects run for businesses in Abu Dhabi, Sharjah, and other emirates, and most of that work happens remotely anyway.`
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
  "description": `Digital Solution 360 offers professional Website Development services in ${cityName}. Get world-class quality at affordable prices. Contact us at +919990556217 for custom solutions tailored to your business needs.`,
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
<section className='relative min-h-[55vh] flex items-center px-4 md:px-8 lg:px-16 pt-24 pb-12 overflow-hidden'>
  <div className='absolute inset-0 z-0'>
    <div className='absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-800/90 to-purple-900/70 z-10' />
    <img
      src="/portfolio/web-dev-hero.webp"
      alt={`Website Development in ${cityName}`}
      className='w-full h-full object-cover'
    />
  </div>

  <div className='max-w-7xl mx-auto relative z-20 w-full'>
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Breadcrumb */}
      <nav className='py-3 pl-0 px-4 md:px-8 md:pl-0 lg:px-16 lg:pl-0 mb-4 inline-block'>
        <div className='mx-auto'>
          <ol className='flex flex-wrap items-center gap-1 text-xs'>
            <li>
              <Link
                href="/"
                className="text-white hover:text-amber-500 transition-colors"
              >
                Home
              </Link>
            </li>

            {(locationType === "city" || locationType === "state") &&
              countryName &&
              countrySlug && (
                <>
                  <li className="text-white">›</li>
                  <li>
                    <Link
                      href={`/${countrySlug}`}
                      className="text-white hover:text-amber-500 transition-colors"
                    >
                      {countryName}
                    </Link>
                  </li>
                </>
              )}

            {locationType === "city" && stateName && stateSlug && (
              <>
                <li className="text-white">›</li>
                <li>
                  <Link
                    href={`/${stateSlug}`}
                    className="text-white hover:text-amber-500 transition-colors"
                  >
                    {stateName}
                  </Link>
                </li>
              </>
            )}

            <li className="text-white">›</li>
            <li>
              <span className="text-amber-500 font-medium">
                App Development in {cityName}
              </span>
            </li>
          </ol>
        </div>
      </nav>

      {/* Heading */}
      <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 max-w-5xl'>
        Best App Development Company in <span className="text-amber-400">{cityName}</span> | Digital Solution 360
      </h1>

      {/* Description */}
      <p className='text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mb-8'>
        Digital Solution 360 - Your Trusted Partner for App Development
      </p>

      {/* CTA */}
      <div className='flex flex-wrap gap-4 mb-8'>
        <button
          onClick={() => window.dispatchEvent(new Event("openFloatPopup"))}
          className='bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl inline-flex items-center gap-2'
        >
          Get Free Consultation
          <IconArrowRight className='w-5 h-5' />
        </button>
      </div>

      {/* Stats */}
      <div className='flex flex-wrap gap-6'>
        <div className='flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg border border-white/20'>
          <div className='flex items-center gap-1'>
            {[...Array(5)].map((_, i) => (
              <IconStarFilled
                key={i}
                className='w-4 h-4 text-amber-400'
              />
            ))}
          </div>

          <div>
            <div className='text-2xl font-bold text-white'>2010</div>
            <div className='text-sm text-gray-300'>Ratings</div>
          </div>
        </div>
         <div className='flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg border border-white/20'>
          <IconChecks className='w-6 h-6 text-emerald-400' />
          <div>
            <div className='text-2xl font-bold text-white'>253+</div>
            <div className='text-sm text-gray-300'>Projects Done</div>
          </div>
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
        If you have an app idea and you're trying to figure out who can actually build it, that's what Digital Solution 360 does.
      </h2>
      <p className='text-gray-700 leading-relaxed'>
        We work as an app development company in {cityName} for founders testing a first product, established companies replacing something outdated, and teams who need a mobile app tied into systems they already run. Some clients arrive with wireframes and a clear feature list. Others just have a problem they want solved and no idea what the solution should look like technically. Both starting points work fine here.
      </p>
    </div>
    <div className='order-1 md:order-2'>
      <img
        src="/market/website/case-img9.png"
        alt="App Development"
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
        alt="App Development Services"
        className='w-full h-64 object-cover rounded-2xl shadow-lg'
      />
    </div>
    <div>
      <h3 className='text-2xl font-bold text-gray-900 mb-4'>
        What We Actually Build As App Development Company in {cityName}
      </h3>
      <p className='text-gray-700 leading-relaxed mb-4'>
        Android development still makes up a large share of the work, given how many users across the UAE are on Android devices, and getting performance right across that range of hardware matters more than people expect. iOS projects follow a different set of rules — Apple's review process and design standards are stricter, and apps need to feel native, not adapted from something else.
      </p>
      <p className='text-gray-700 leading-relaxed'>
        Flutter and React Native come up a lot with startups, mostly because paying for one codebase instead of two makes sense when the budget is tight. That said, if an app leans hard on camera features, sensors, or anything close to the hardware, native usually still wins, even at the higher price.
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
      <p className='text-gray-700 leading-relaxed mb-4'>
        Then there's the stuff that doesn't fit a template at all—a booking system that works differently from anyone else's, a workflow built around how a specific business operates, an integration into software the client's been running for years. E-commerce work brings its own headaches: carts that don't lose items on a bad connection, payment gateways that actually reconcile, inventory that stays accurate across multiple sales channels. Enterprise apps are usually tied into a CRM or ERP somewhere, with higher security expectations from day one — worth mapping out before development starts rather than patching in later.
      </p>
    </div>
    <div className='order-1 md:order-2'>
      <img
        src="/market/website/case-img11.png"
        alt="Custom App Development"
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
        alt="Why Choose Us"
        className='w-full h-64 object-cover rounded-2xl shadow-lg'
      />
    </div>
    <div>
      <h3 className='text-2xl font-bold text-gray-900 mb-4'>
        Why Companies Pick Us Over Other Options
      </h3>
      <p className='text-gray-700 leading-relaxed mb-4'>
        There's no shortage of mobile app development companies in {cityName} to choose from, so most of what separates them shows up after the contract is signed, not before. Does the team dig into how the business runs, or does every client get roughly the same app with a different logo on it? Is the interface built around how people actually tap through their phones, or does it just photograph well for a portfolio page? And when real users show up, does the backend hold, or does it start throwing errors the first busy weekend?
      </p>
    </div>
  </motion.div>

  {/* Section 5 */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className='grid grid-cols-1 md:grid-cols-2 gap-6 items-center'
  >
    <div className='order-2 md:order-1'>
      <p className='text-gray-700 leading-relaxed mb-4'>
        Security gets handled from the start rather than bolted on afterward — authentication, data storage, safe API calls. Testing happens across a range of devices before anything ships, not just once on a single phone. Communication stays direct through the project, and once the app is live, there's support available for bug fixes and updates rather than a hard stop at launch.
      </p>
      <p className='text-gray-700 leading-relaxed'>
        None of that makes for a flashy sentence, but it's the difference between an app that works six months after release and one that quietly falls apart.
      </p>
    </div>
    <div className='order-1 md:order-2'>
      <img
        src="/market/website/case-img13.png"
        alt="App Security"
        className='w-full h-64 object-cover rounded-2xl shadow-lg'
      />
    </div>
  </motion.div>

  {/* Section 6 */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className='grid grid-cols-1 md:grid-cols-2 gap-6 items-center'
  >
    <div>
      <img
        src="/market/website/case-img14.png"
        alt="App Development Process"
        className='w-full h-64 object-cover rounded-2xl shadow-lg'
      />
    </div>
    <div>
      <h3 className='text-2xl font-bold text-gray-900 mb-4'>
        How a Project Actually Moves Forward
      </h3>
      <p className='text-gray-700 leading-relaxed mb-4'>
        It starts with a conversation about what the app is supposed to do and who's going to use it — that's discovery, and it shapes everything after. Planning turns that into a scope and rough timeline. Wireframes and UI/UX design come next, mapping out screens before any code gets written. Development follows the approved design, with APIs and third-party services — payments, maps, notifications — wired in along the way.
      </p>
      <p className='text-gray-700 leading-relaxed'>
        Testing checks for bugs, but also for how the app behaves under pressure: slow networks, older devices, unexpected input. Once it passes, deployment means getting it live on the Play Store and App Store. After that, maintenance keeps things running as operating systems update and new needs come up.
      </p>
    </div>
  </motion.div>

  {/* Section 7 */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className='grid grid-cols-1 md:grid-cols-2 gap-6 items-center'
  >
    <div className='order-2 md:order-1'>
      <p className='text-gray-700 leading-relaxed'>
        You don't need to understand the technical side of any of this to get a working app out of it.
      </p>
    </div>
    <div className='order-1 md:order-2'>
      <img
        src="/market/website/case-img15.png"
        alt="App Launch"
        className='w-full h-64 object-cover rounded-2xl shadow-lg'
      />
    </div>
  </motion.div>

  {/* Section 8 - Industries */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className='grid grid-cols-1 md:grid-cols-2 gap-6 items-center'
  >
    <div>
      <img
        src="/market/website/case-img16.png"
        alt="App Industries"
        className='w-full h-64 object-cover rounded-2xl shadow-lg'
      />
    </div>
    <div>
      <h3 className='text-2xl font-bold text-gray-900 mb-4'>
        Across Different Industries
      </h3>
      <p className='text-gray-700 leading-relaxed'>
        Ecommerce and retail, healthcare booking and patient portals, real estate listings, restaurant and delivery apps, logistics tracking, education platforms, finance apps handling transactions, professional service booking — the requirements shift a lot between these, especially around security and real-time data. A restaurant chain's app and a fintech company's app aren't solving the same problems, even if both run on a phone.
      </p>
    </div>
  </motion.div>

  {/* Section 9 - Cost */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className='grid grid-cols-1 md:grid-cols-2 gap-6 items-center'
  >
    <div className='order-2 md:order-1'>
      <h3 className='text-2xl font-bold text-gray-900 mb-4'>
        What Affects the Cost
      </h3>
      <p className='text-gray-700 leading-relaxed mb-4'>
        App development cost in {cityName} isn't a fixed number, and anyone quoting one without knowing your requirements is guessing. What actually drives it: feature count, platform (Android, iOS, or both), how custom the UI/UX work is, backend complexity, API integrations, payment processing, and how much testing the project needs. Maintenance after launch adds an ongoing cost too, usually a modest one compared to the initial build.
      </p>
      <p className='text-gray-700 leading-relaxed'>
        Contact Digital Solution 360 for a quote based on what you're actually building, not a generic price list.
      </p>
    </div>
    <div className='order-1 md:order-2'>
      <img
        src="/market/website/case-img17.png"
        alt="App Cost"
        className='w-full h-64 object-cover rounded-2xl shadow-lg'
      />
    </div>
  </motion.div>

  {/* Section 10 - Getting Started */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className='grid grid-cols-1 md:grid-cols-2 gap-6 items-center'
  >
    <div>
      <img
        src="/market/website/case-img18.png"
        alt="Get Started"
        className='w-full h-64 object-cover rounded-2xl shadow-lg'
      />
    </div>
    <div>
      <h3 className='text-2xl font-bold text-gray-900 mb-4'>
        Getting Started
      </h3>
      <p className='text-gray-700 leading-relaxed'>
        If there's an app idea sitting in a notes app or a half-finished spec document somewhere, that's enough to start a conversation. Discuss your app idea, request a consultation, or ask for a quote — whichever fits where you're at right now.
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
                className='bg-white rounded-xl shadow-md overflow-hidden'
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
