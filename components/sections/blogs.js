"use client";

import React, { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import Link from 'next/link'
import { IconArrowRight } from '@tabler/icons-react'

function Blogs() {
  const [blogPosts, setBlogPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const res = await fetch('/api/blogs')
        const data = await res.json()
        // Get only the 3 most recent blogs
        setBlogPosts((data.blogs || []).slice(0, 3))
      } catch (error) {
        console.error('Error fetching blogs:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchBlogs()
  }, [])

  // Helper function to strip HTML and truncate
  const getExcerpt = (html, maxLength = 100) => {
    const text = html.replace(/<[^>]*>/g, '')
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text
  }

  if (loading) {
    return (
      <section className='py-10'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto'></div>
        </div>
      </section>
    )
  }

  if (blogPosts.length === 0) {
    return null
  }

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
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={`/blogs/${post.slug}`} className='block h-full'>
                <div className='h-full bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer'>
                  {/* Image Container */}
                  <div className='relative h-64 overflow-hidden'>
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                      src={`/${post.image}`}
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
                      {getExcerpt(post.description)}
                    </p>

                    {/* Read More Button */}
                    <div className='inline-flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all duration-300'>
                      <span>Read More</span>
                      <IconArrowRight 
                        size={20} 
                        className='transition-transform duration-300 group-hover:translate-x-1'
                      />
                    </div>
                  </div>
                </div>
              </Link>
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