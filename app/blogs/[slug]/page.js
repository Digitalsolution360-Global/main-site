"use client"
import BgLayout from '@/components/layout/bgLayout'
import Link from 'next/link'
import Image from 'next/image'
import { use, useEffect, useState } from 'react'
import { notFound } from 'next/navigation'
import { motion } from 'motion/react'
import { IconHome, IconChevronRight, IconShare, IconBrandFacebook, IconBrandTwitter, IconBrandLinkedin } from '@tabler/icons-react'

function BlogDetailPage({ params }) {
  const { slug } = use(params)
  const [blog, setBlog] = useState(null)
  const [recentBlogs, setRecentBlogs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchBlogData() {
      try {
        // Fetch current blog
        const blogRes = await fetch(`/api/blogs/${slug}`)
        if (!blogRes.ok) {
          notFound()
          return
        }
        const blogData = await blogRes.json()
        setBlog(blogData.blog)

        // Fetch recent blogs
        const recentRes = await fetch('/api/blogs')
        const recentData = await recentRes.json()
        // Filter out current blog and limit to 3
        const filtered = recentData.blogs
          .filter(b => b.slug !== slug)
          .slice(0, 3)
        setRecentBlogs(filtered)
      } catch (error) {
        console.error('Error fetching blog:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchBlogData()
  }, [slug])

  // Format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(dateString).toLocaleDateString('en-US', options)
  }

  if (loading) {
    return (
      <BgLayout>
        <div className='min-h-screen flex items-center justify-center'>
          <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600'></div>
        </div>
      </BgLayout>
    )
  }

  if (!blog) {
    notFound()
  }

  return (
    <BgLayout>
      {/* Hero Section with Breadcrumb */}
      <section className='relative h-[50vh] mt-15 flex items-center justify-center overflow-hidden'>
        <div className='absolute inset-0'>
          <Image
            src={`/${blog.image}`}
            alt={blog.title}
            fill
            className='object-cover'
            priority
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
            <Link href='/blogs' className='hover:text-blue-400 transition-colors'>Blog</Link>
            <IconChevronRight size={16} className='text-blue-400' />
            <span className='text-blue-400 line-clamp-1'>{blog.title}</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className='text-sm text-blue-300 font-semibold mb-4'>
              {formatDate(blog.created_at)}
            </p>
            <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-4 max-w-4xl mx-auto'>
              {blog.title}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Blog Content */}
      <section className='py-10'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className='lg:col-span-2'
            >
              <article className='bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100'>
                {/* Article Content */}
                <div className='p-8 md:p-12'>
                  {/* Blog Content */}
                  <div 
                    className='prose text-xl prose-lg max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-p:text-gray-600 prose-p:leading-relaxed prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-ul:text-gray-600 prose-ol:text-gray-600'
                    dangerouslySetInnerHTML={{ __html: blog.description }}
                  />
                </div>
              </article>

              {/* Share Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className='mt-8 bg-white rounded-2xl shadow-lg p-6 border border-gray-100'
              >
                <div className='flex items-center gap-2 mb-4'>
                  <IconShare size={24} className='text-blue-600' />
                  <h3 className='text-xl font-bold'>Share this article</h3>
                </div>
                <div className='flex flex-col md:flex-row w-fit gap-4'>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors'
                  >
                    <IconBrandFacebook size={20} />
                    Facebook
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}&text=${encodeURIComponent(blog.title)}`}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center gap-2 px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors'
                  >
                    <IconBrandTwitter size={20} />
                    Twitter
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center gap-2 px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors'
                  >
                    <IconBrandLinkedin size={20} />
                    LinkedIn
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className='lg:col-span-1'
            >
              {/* Recent Blogs */}
              <div className='bg-white rounded-2xl shadow-lg p-6 sticky top-4 border border-gray-100'>
                <h3 className='text-2xl font-bold mb-6 text-gray-900'>Recent Posts</h3>
                <div className='space-y-6'>
                  {recentBlogs.map((recentBlog, index) => (
                    <motion.div
                      key={recentBlog.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Link
                        href={`/${recentBlog.slug}`}
                        className='block group'
                      >
                        <div className='flex gap-4'>
                          <div className='relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden'>
                            <Image
                              src={`/${recentBlog.image}`}
                              alt={recentBlog.title}
                              fill
                              className='object-cover group-hover:scale-110 transition-transform duration-300'
                            />
                          </div>
                          <div className='flex-1'>
                            <h4 className='font-semibold text-sm mb-1 line-clamp-2 group-hover:text-blue-600 transition-colors'>
                              {recentBlog.title}
                            </h4>
                            <p className='text-xs text-gray-500'>
                              {formatDate(recentBlog.created_at)}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <Link
                  href='/blogs'
                  className=' mt-6 text-center text-blue-600 font-semibold hover:underline flex items-center justify-center gap-1'
                >
                  <span>View All Posts</span>
                  <IconChevronRight size={16} />
                </Link>
              </div>

              {/* CTA Box */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className='bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl shadow-lg p-6 text-white mt-6'
              >
                <h3 className='text-2xl font-bold mb-3'>Need Our Services?</h3>
                <p className='text-sm mb-6 opacity-90 leading-relaxed'>
                  Get in touch with our experts and let&apos;s discuss how we can help grow your business.
                </p>
                <Link href='/contact'>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className='w-full text-center bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors'
                  >
                    Contact Us
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </BgLayout>
  )
}

export default BlogDetailPage
