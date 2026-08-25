"use client"
import BgLayout from '@/components/layout/bgLayout'
import Link from 'next/link'
import Image from 'next/image'
import { use, useEffect, useState } from 'react'
import { notFound } from 'next/navigation'
import { motion } from 'motion/react'
import { IconHome, IconChevronRight, IconShare, IconBrandFacebook, IconBrandTwitter, IconBrandLinkedin, IconCalendar, IconClock } from '@tabler/icons-react'

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
 const estimateReadTime = (html) => {
    if (!html) return '3 min read';
    const text = html.replace(/<[^>]*>/g, '');
    const words = text.split(/\s+/).length;
    const mins = Math.max(2, Math.ceil(words / 200));
    return `${mins} min read`;
  };
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
     {/* ── Hero Banner ── */}
        <section className="relative overflow-hidden bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 pt-32 pb-16">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 left-20 w-64 h-64 bg-teal-500 rounded-full filter blur-3xl" />
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500 rounded-full filter blur-3xl" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
                <Link href="/" className="hover:text-teal-400 transition-colors">Home</Link>
                <span>/</span>
                {blog.category_name ? (
                  <>
                    <Link href={`/blog?category=${post.category_id}`} className="hover:text-teal-400 transition-colors">{post.category_name}</Link>
                    <span>/</span>
                  </>
                ):(
                  <>
                    <Link href={`/blogs`} className="hover:text-teal-400 transition-colors">Blog</Link>
                    <span>/</span>
                  </>
                )}
                <span className="text-gray-500 truncate max-w-[200px]">{blog.title}</span>
              </div>

              {blog.category_name && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-medium mb-4">
                  <IconCategory size={14} /> {blog.category_name}
                </span>
              )}

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
                {blog.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                <span className="flex items-center gap-1.5">
                  <IconCalendar size={16} /> {formatDate(blog.created_at)}
                </span>
                <span className="flex items-center gap-1.5">
                  <IconClock size={16} /> {estimateReadTime(blog.description)}
                </span>
              </div>
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
              {blog.image && (
                <div className="rounded-2xl overflow-hidden shadow-xl mb-10 border border-gray-100">
                  <img
                    src={`/${blog.image}`}
                    alt={blog.title}
                    className="w-full h-auto max-h-[480px] object-cover"
                  />
                </div>
              )}

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
