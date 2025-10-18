"use client";

import React from 'react'
import { motion } from 'motion/react'
import Link from 'next/link'
import { IconCheck } from '@tabler/icons-react'

function WhyUS() {
  const features = [
    {
      title: "Tailored, Scalable Strategies",
      description: "We reject one-size-fits-all solutions. Your campaign is custom-built from the ground up to meet your specific business goals and scale with your growth."
    },
    {
      title: "Transparency & Measurable Results",
      description: "Gain full visibility into your campaign's performance with our detailed analytics and clear reporting. We focus on KPIs that matter: leads, sales, and revenue."
    },
    {
      title: "A Partnership, Not Just a Service",
      description: "We integrate with your team, becoming an extension of your business. Your success is our only metric, and we're committed to achieving it together."
    }
  ];

  return (
    <section className='py-10'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className='text-4xl md:text-5xl font-bold mb-4'>
                Why Choose <span className='text-blue-600'>Us</span>
              </h2>
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className='text-2xl md:text-3xl font-semibold text-gray-700 mb-6'
            >
              Your Success, Engineered by Our Expertise
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className='text-lg text-gray-600 mb-8 leading-relaxed'
            >
              In a digital world crowded with noise, standing out requires more than just tactics—it demands a strategic partner. We blend cutting-edge technology with proven marketing fundamentals to deliver a clear competitive advantage.
            </motion.p>

            {/* Features */}
            <div className='space-y-6 mb-8'>
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.3 + (index * 0.1) }}
                  className='flex gap-4'
                >
                  <div className='flex-shrink-0'>
                    <div className='w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center'>
                      <IconCheck size={20} className='text-white' />
                    </div>
                  </div>
                  <div>
                    <h4 className='text-xl font-semibold text-gray-800 mb-2'>
                      {feature.title}
                    </h4>
                    <p className='text-gray-600 leading-relaxed'>
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Link 
                href="/about"
                className='inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-1'
              >
                Read More
              </Link>
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className='relative'
          >
            <div className='relative rounded-2xl overflow-hidden shadow-2xl'>
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
                src="/home/images/why-choose.webp"
                alt="Why Choose Digital Solution 360"
                className='w-full h-auto object-cover'
              />
              
              {/* Decorative Elements */}
              <div className='absolute -top-4 -right-4 w-24 h-24 bg-blue-600 rounded-full opacity-20 blur-2xl'></div>
              <div className='absolute -bottom-4 -left-4 w-32 h-32 bg-blue-400 rounded-full opacity-20 blur-2xl'></div>
            </div>

            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1 }}
              className='absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 hidden lg:block'
            >
              <div className='flex items-center gap-4'>
                <div className='w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl'>
                  ✓
                </div>
                <div>
                  <p className='text-2xl font-bold text-gray-800'>500+</p>
                  <p className='text-sm text-gray-600'>Happy Clients</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default WhyUS