"use client"
import BgLayout from '@/components/layout/bgLayout'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'motion/react'
import { IconHome, IconChevronRight } from '@tabler/icons-react'
import { useEffect, useState } from 'react'

export default function BlogsPage() {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const res = await fetch('/api/blogs')
        const data = await res.json()
        setBlogs(data.blogs || [])
      } catch (error) {
        console.error('Error fetching blogs:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchBlogs()
  }, [])

  // Helper function to strip HTML and truncate
  const getExcerpt = (html, maxLength = 150) => {
    const text = html.replace(/<[^>]*>/g, '')
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text
  }

  // Format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(dateString).toLocaleDateString('en-US', options)
  }

  return (
    <BgLayout>
      {/* Hero Section */}
      <section className='relative h-[50vh] mt-15 flex items-center justify-center overflow-hidden'>
        <div className='absolute inset-0'>
          <img
            src="/services/services-hero.webp"
            alt="Our Blog"
            className='w-full h-full object-cover'
          />
          <div className='absolute inset-0 bg-black/70'></div>
        </div>

        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white'>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='flex items-center justify-center gap-2 text-sm mb-6'
          >
            <Link href='/' className='flex items-center gap-1 hover:text-blue-400 transition-colors'>
              <IconHome size={18} />
              <span>Home</span>
            </Link>
            <IconChevronRight size={16} className='text-blue-400' />
            <span className='text-blue-400'>Blog</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-4'>
              Our <span className='text-blue-500'>Blog</span>
            </h1>
            <p className='text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed'>
              Stay updated with the latest trends, tips, and insights in digital marketing, web development, SEO, and more.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blogs Grid */}
      <section className='py-10'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          {loading ? (
            <div className='flex items-center justify-center py-20'>
              <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600'></div>
            </div>
          ) : blogs.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className='text-center py-20'
            >
              <p className='text-xl text-gray-600'>No blogs available at the moment.</p>
            </motion.div>
          ) : (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {blogs.map((blog, index) => (
                <motion.div
                  key={blog.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className='group'
                >
                  <Link href={`/blogs/${blog.slug}`}>
                    <motion.div
                      whileHover={{ y: -8 }}
                      transition={{ duration: 0.3 }}
                      className='h-full bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200'
                    >
                      {/* Blog Image */}
                      <div className='relative h-56 w-full overflow-hidden'>
                        <Image
                          src={`/${blog.image}`}
                          alt={blog.title}
                          fill
                          className='object-cover group-hover:scale-110 transition-transform duration-300'
                        />
                      </div>

                      {/* Blog Content */}
                      <div className='p-6'>
                        {/* Date */}
                        <p className='text-sm text-blue-600 font-semibold mb-2'>
                          {formatDate(blog.created_at)}
                        </p>

                        {/* Title */}
                        <h2 className='text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors'>
                          {blog.title}
                        </h2>

                        {/* Excerpt */}
                        <p className='text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed'>
                          {getExcerpt(blog.description)}
                        </p>

                        {/* Read More */}
                        <div className='flex items-center text-blue-600 font-semibold group-hover:gap-2 transition-all'>
                          <span>Read More</span>
                          <IconChevronRight size={20} className='group-hover:translate-x-1 transition-transform' />
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-10'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-12 text-center text-white shadow-2xl'
          >
            <h2 className='text-3xl md:text-4xl font-bold mb-4'>
              Ready to Grow Your Business?
            </h2>
            <p className='text-xl text-blue-100 mb-8 max-w-2xl mx-auto'>
              Get in touch with our experts and let&apos;s discuss how we can help you achieve your digital goals.
            </p>
            <div className='flex flex-wrap items-center justify-center gap-4'>
              <Link href='/contact'>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all duration-300'
                >
                  Contact Us Today
                </motion.button>
              </Link>
              <Link href='tel:+919990556217'>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300'
                >
                  Call: +91 99905 56217
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </BgLayout>
  )
}