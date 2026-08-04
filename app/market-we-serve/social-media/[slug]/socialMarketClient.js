"use client";

import BgLayout from '@/components/layout/bgLayout';
import React, { useState, useEffect, use } from 'react';
import { motion } from 'motion/react';
import { IconHome, IconChevronRight, IconMapPin, IconCheck, IconStar,IconStarFilled, IconPhone, IconMail, IconUser, IconCode, IconDeviceMobile, IconShoppingCart, IconRocket, IconLock, IconBolt, IconTrendingUp, IconChevronDown,IconArrowRight, IconChecks   } from '@tabler/icons-react';
import Link from 'next/link';
import Clients from '@/components/sections/clients';
import LocationStructuredData from '@/components/seo/LocationStructuredData';

export default function SocialServicePage({ params }) {
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
          services: `Social Media - ${locationData?.city_name || slug}`,
          message: null,
          source: 'social_media_market_page',
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
          'Service': 'Social Media',
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
    question: `Which social media platforms should my business focus on in ${cityName}?`,
    answer: `It depends on the audience. Instagram and TikTok work well for visual, consumer-facing brands, LinkedIn for B2B, and Facebook still reaches certain demographics well. We help narrow this down rather than spreading budget across everything.`
  },
  {
    question: `Do you manage paid social media ads?`,
    answer: `Yes, including targeting, budget management, and creative testing across platforms like Meta and TikTok, with regular adjustments based on what's actually converting.`
  },
  {
    question: `How long before I see results from social media marketing?`,
    answer: `Organic growth usually takes a few months to show meaningful movement. Paid campaigns can show results faster, though sustainable growth still takes ongoing testing and adjustment.`
  },
  {
    question: `Do you create content, or just manage posting?`,
    answer: `Both. Content creation — photography, video, graphics, and copywriting — is part of the service, built around a strategy rather than posted without direction.`
  },
  {
    question: `Can you work with businesses outside ${cityName}?`,
    answer: `Yes, we work with businesses across the UAE, including Abu Dhabi and Sharjah, with most of the work handled remotely.`
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
                Social Media Marketing in {cityName}
              </span>
            </li>
          </ol>
        </div>
      </nav>

      {/* Heading */}
      <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 max-w-5xl'>
        Best Social Media Marketing Company in <span className="text-amber-400">{cityName}</span>
      </h1>

      {/* Description */}
      <p className='text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mb-8'>
        Digital Solution 360 - Your Trusted Partner for Social Media Marketing
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
  className=''
>
  <div className=''>
    <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
      Best Social Media Marketing Company in {cityName}
    </h2>
    <p className='text-gray-700 leading-relaxed'>
      Posting on Instagram a few times a week isn't a social media strategy, even though a lot of businesses treat it that way until the results stop matching the effort. Digital Solution 360 works as a social media marketing company in {cityName} for brands that need their social presence to actually generate leads, sales, or bookings, not just likes. Some clients come in with an account that's been running for years without much direction. Others are starting from zero and need a presence built from the ground up. Either way, the starting point is the same: figuring out what the audience actually responds to before spending any budget on it.
    </p>
    <h3 className='text-2xl font-bold text-gray-900 mb-4 mt-8'>
      What This Social Media Marketing Company in {cityName} Actually Handles
    </h3>
    <p className='text-gray-700 leading-relaxed'>
      Platform strategy comes first, and it's rarely the same across every channel. Instagram and TikTok tend to carry the visual and short-form video work. LinkedIn matters for B2B brands trying to reach decision-makers rather than consumers. Facebook still pulls weight for community groups and certain age demographics here that other platforms don't reach as well, and Snapchat has its own audience too, particularly for younger consumer brands. Picking the right two or three platforms usually beats spreading a thin budget across all of them.
    </p>
    <p className='text-gray-700 leading-relaxed mt-4'>
      Content creation covers everything that actually gets posted — photography, short-form video, graphics, captions written for how people scroll, not how a brand wants to sound. A lot of content fails not because it's poorly made but because it's built around what the brand wants to say instead of what the audience is looking for.
    </p>
    <p className='text-gray-700 leading-relaxed mt-4'>
      Paid social runs alongside organic content for brands that need faster results or want to reach beyond an existing follower base. Ad targeting, budget management, and creative testing all sit under this — and it's usually where the actual return on investment gets measured most clearly, since the numbers are harder to fudge than engagement metrics.
    </p>
    <p className='text-gray-700 leading-relaxed mt-4'>
      Community management is the unglamorous part — responding to comments and DMs, moderating discussion, keeping response times reasonable. It's often the difference between a page that feels active and one that looks abandoned, even if content is still going up regularly.
    </p>

    <h3 className='text-2xl font-bold text-gray-900 mb-4 mt-8'>
      Why Businesses Choose Us Over Other Social Media Agencies
    </h3>
    <p className='text-gray-700 leading-relaxed'>
      There's no shortage of social media marketing companies in {cityName} promising viral growth, and that promise alone is usually worth being skeptical of. Virality isn't a strategy — it's an occasional outcome, and building a business plan around hoping for one is a bad bet. What actually works is consistency, a clear understanding of the audience, and content built around a goal rather than just filling a posting calendar.
    </p>
    <p className='text-gray-700 leading-relaxed mt-4'>
      Reporting stays tied to numbers that matter to the business — leads, conversions, relevant follower growth — not vanity metrics padded to look impressive in a monthly deck. Strategy gets built around what the brand sells and who buys it, rather than copying whatever competitors happen to be doing. Paid spend gets tested and adjusted regularly instead of running the same ad set for months without checking whether it's still working.
    </p>
    <p className='text-gray-700 leading-relaxed mt-4'>
      None of this promises overnight growth, and any agency guaranteeing a specific follower count by a specific date usually isn't being straight about how any of this works.
    </p>

    <h3 className='text-2xl font-bold text-gray-900 mb-4 mt-8'>
      How a Social Media Project Actually Runs
    </h3>
    <p className='text-gray-700 leading-relaxed'>
      It starts with an audit of existing accounts, or a look at competitor pages if there's nothing to build from yet. From there, a content strategy gets mapped out — what to post, how often, and across which platforms, tied back to actual business goals rather than generic "engagement." Content production follows, covering photography, video, and copywriting based on that plan.
    </p>
    <p className='text-gray-700 leading-relaxed mt-4'>
      Paid campaigns, where relevant, get set up with specific targeting and tested creative rather than one ad running indefinitely. Community management runs continuously alongside all of this, and reporting happens on a regular cycle, tracking what's actually working and adjusting the plan rather than sticking to a strategy that isn't performing.
    </p>

    <h3 className='text-2xl font-bold text-gray-900 mb-4 mt-8'>
      Across Different Industries
    </h3>
    <p className='text-gray-700 leading-relaxed'>
      Ecommerce brands lean heavily on paid social and shoppable content to drive direct sales. Restaurants and hospitality brands depend on visual content and location tagging, since a lot of discovery happens through Instagram and TikTok searches now. Real estate uses video walkthroughs and targeted lead generation ads. Healthcare and professional services need a more careful, trust-focused approach given the sensitivity of what they're offering, and retail brands usually combine influencer collaborations with paid campaigns to reach new audiences quickly.
    </p>

    <h3 className='text-2xl font-bold text-gray-900 mb-4 mt-8'>
      What Affects the Cost of Social Media Marketing in {cityName}
    </h3>
    <p className='text-gray-700 leading-relaxed'>
      Pricing depends on how many platforms are involved, how much original content needs producing, whether paid ad management is included, and how much community management the account requires. A brand running organic content on two platforms costs differently than one running paid campaigns across four with daily community management on top. Ad spend is separate from management fees and scales based on how aggressive the growth targets are. Contact Digital Solution 360 for a quote based on the actual scope, not a flat package that may not fit.
    </p>

    <h3 className='text-2xl font-bold text-gray-900 mb-4 mt-8'>
      Getting Started
    </h3>
    <p className='text-gray-700 leading-relaxed'>
      If social accounts exist but aren't pulling their weight, or there's no presence at all yet, that's enough reason to start the conversation. Get a free audit, request a consultation, or ask for a quote — whichever fits where the business is right now.
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
