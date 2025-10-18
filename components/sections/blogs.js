"use client";

import React from 'react'
import { motion } from 'motion/react'
import Link from 'next/link'
import { IconArrowRight } from '@tabler/icons-react'

function Blogs() {
  const blogPosts = [
    {
      title: "Your Next-Gen Website Development Partner in Abu Dhabi & Al Ain: World-Class Quality at Affordable Prices",
      description: "Looking for professional website development services in Abu Dhabi, Al Ain, or M...",
      image: "/home/images/blogs/blog-img3.png",
      link: "/blogs"
    },
    {
      title: "Social Media Marketing That Drives Business Growth: Strategies, Trends, and Affordable Solutions",
      description: "In today's world, social media is not just about likes and followers—it's about...",
      image: "/home/images/blogs/blog-img2.png",
      link: "/blogs"
    },
    {
      title: "SEO Tools That Every Business Needs",
      description: "Discover the must-have SEO tools that can help businesses improve website rankin...",
      image: "/home/images/blogs/blog-img1.png",
      link: "/blogs"
    }
  ];

  return (
    <section className='py-10'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        
        {/* Header */}
        <div className='text-center mb-16'>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className='text-4xl md:text-5xl font-bold mb-4'
          >
            Insights & Innovations: <span className='text-blue-600'>Our Latest Blog Posts</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='text-lg text-gray-600 max-w-3xl mx-auto'
          >
            Explore our blog to discover actionable insights, success stories, and expert advice that can help drive growth for your business.
          </motion.p>
        </div>

        {/* Blog Cards Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className='bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group'
            >
              {/* Image Container */}
              <div className='relative h-64 overflow-hidden'>
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  src={post.image}
                  alt={post.title}
                  className='w-full h-full object-cover'
                />
                {/* Gradient Overlay */}
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              </div>

              {/* Content */}
              <div className='p-6'>
                <h3 className='text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300'>
                  {post.title}
                </h3>
                
                <p className='text-gray-600 mb-6 line-clamp-3'>
                  {post.description}
                </p>

                {/* Read More Button */}
                <Link
                  href={post.link}
                  className='inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all duration-300 group/link'
                >
                  Read More
                  <IconArrowRight 
                    size={20} 
                    className='transition-transform duration-300 group-hover/link:translate-x-1'
                  />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Blogs Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className='text-center mt-12'
        >
          <Link
            href="/blogs"
            className='inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-1'
          >
            View All Blog Posts
          </Link>
        </motion.div>

      </div>
    </section>
  )
}

export default Blogs