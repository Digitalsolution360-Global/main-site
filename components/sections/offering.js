"use client";

import React from 'react'
import { motion } from 'motion/react'
import { IconCheck } from '@tabler/icons-react'

function Offering() {
  const offerings = [
    {
      heading: "WEBSITE DEVELOPMENT",
      description: "Design and build fast, responsive, and accessible websites tailored to your brand using modern frameworks and CMS platforms.",
      points: [
        "Landing Pages",
        "Corporate Websites",
        "Ecommerce Stores (Shopify/WooCommerce)",
        "Headless CMS",
        "Performance Optimization",
        "Responsive & Mobile-first Design",
        "Accessibility (WCAG)"
      ],
      image: "/home/images/ecomm.webp",
      imagePosition: "right"
    },
    {
      heading: "DIGITAL MARKETING",
      description: "Data-driven marketing to grow traffic, leads and revenue across search, social and paid channels.",
      points: [
        "Search Engine Optimization (SEO)",
        "Paid Search (Google Ads)",
        "Social Media Marketing",
        "Content Marketing",
        "Email & Automation",
        "Analytics & Conversion Optimization",
        "Local & Performance Campaigns"
      ],
      image: "/home/images/cms.webp",
      imagePosition: "left"
    },
    {
      heading: "APP & CRM DEVELOPMENT",
      description: "Custom mobile apps, PWAs and CRM systems to automate business processes and improve customer engagement.",
      points: [
        "iOS & Android Apps",
        "Progressive Web Apps (PWAs)",
        "Custom CRM & Dashboards",
        "API Integrations",
        "Admin Panels & Reporting",
        "Payments & Authentication",
        "Ongoing Maintenance"
      ],
      image: "/home/images/digital-marketing.webp",
      imagePosition: "right"
    },
    {
      heading: "SEO & GOOGLE MY BUSINESS",
      description: "Improve local visibility and search rankings with technical SEO, on-page optimization and Google Business Profile management.",
      points: [
        "GMB / Google Business Profile Setup & Optimization",
        "Local Citations & Listings",
        "On-page & Technical SEO",
        "Reputation & Review Management",
        "Structured Data & Schema",
        "Local Content Strategy",
        "SEO Audits & Monitoring"
      ],
      image: "/home/images/cms.webp",
      imagePosition: "left"
    }
  ];

  return (
    <section className='py-10'>
      <div className='max-w-7xl mx-auto px-4 '>
        
        {/* Section Header */}
        <div
          // initial={{ opacity: 0, y: 20 }}
          // whileInView={{ opacity: 1, y: 0 }}
          // viewport={{ once: true, margin: "-100px" }}
          // transition={{ duration: 0.6 }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl md:text-5xl font-bold mb-4'>
            Our <span className='text-blue-600'>Offerings</span>
          </h2>
          <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
            Comprehensive digital solutions to transform your business and drive growth in the digital age.
          </p>
        </div>

        {/* Offerings */}
        <div className='space-y-10'>
          {offerings.map((offering, index) => (
            <div key={index} className='relative'>
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                offering.imagePosition === 'left' ? 'lg:grid-flow-dense' : ''
              }`}>
                
                {/* Content Side */}
                <div
                  // initial={{ opacity: 0, x: offering.imagePosition === 'right' ? -50 : 50 }}
                  // whileInView={{ opacity: 1, x: 0 }}
                  // viewport={{ once: true, margin: "0px" }}
                  // transition={{ duration: 0.6, delay: 0.2 }}
                  className={offering.imagePosition === 'left' ? 'lg:col-start-2' : ''}
                >
                  <div className='mb-6'>
                    <h3 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
                      {offering.heading}
                    </h3>
                    <div className='w-20 h-1 bg-blue-600 mb-6'></div>
                    <p className='text-lg md:text-xl text-gray-600 leading-relaxed'>
                      {offering.description}
                    </p>
                  </div>

                  {/* Points Grid */}
                  <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
                    {offering.points.map((point, pointIndex) => (
                      <div
                        key={pointIndex}
                        // initial={{ opacity: 0, y: 10 }}
                        // whileInView={{ opacity: 1, y: 0 }}
                        // viewport={{ once: true, margin: "0px" }}
                        // transition={{ duration: 0.3, delay: 0.3 + (pointIndex * 0.05) }}
                        // whileHover={{ scale: 1.02, x: 5 }}
                        className='flex items-center gap-3 p-3 rounded-lg bg-gray-100 hover:bg-blue-100 transition-all duration-300 group cursor-default'
                      >
                        <div className='w-6 h-6 rounded-full bg-blue-100 group-hover:bg-blue-600 flex items-center justify-center transition-all duration-300 flex-shrink-0'>
                          {/* <IconCheck size={16} className='text-blue-600 group-hover:text-white transition-colors duration-300' /> */}
                          <p className='text-blue-600 group-hover:text-white transition-colors duration-300'>✓</p>
                        </div>
                        <span className='text-gray-700 group-hover:text-gray-900 text-base md:text-lg font-medium transition-colors duration-300'>
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Image Side */}
                <div
                  // initial={{ opacity: 0, x: offering.imagePosition === 'right' ? 50 : 50 }}
                  // whileInView={{ opacity: 1, x: 0 }}
                  // viewport={{ once: true, margin: "0px" }}
                  // transition={{ duration: 0.6 }}
                  className={offering.imagePosition === 'left' ? 'lg:col-start-1 lg:row-start-1' : ''}
                >
                  <div className='relative rounded-2xl overflow-hidden shadow-2xl group'>
                    <img
                      // whileHover={{ scale: 1.05 }}
                      // transition={{ duration: 0.4 }}
                      src={offering.image}
                      alt={offering.heading}
                      className='w-full h-auto object-cover'
                    />
                    
                    {/* Gradient Overlay on Hover */}
                    {/* <div className='absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div> */}
                  </div>

                  {/* Decorative Elements */}
                  {/* <div className={`absolute -z-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl ${
                    offering.imagePosition === 'right' ? '-right-20' : '-left-20'
                  } top-1/2 -translate-y-1/2`}></div> */}
                </div>

              </div>

              {/* Separator Line (except for last item) */}
              {index < offerings.length - 1 && (
                <div className='mt-24 border-b border-gray-200'></div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Offering