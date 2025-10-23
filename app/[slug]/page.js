"use client";

import { use, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { notFound } from 'next/navigation';

// Dynamically import service page components
const WebDevServicePage = dynamic(() => import('../market-we-serve/website-development/[slug]/page'), { ssr: false });
const SEOServicePage = dynamic(() => import('../market-we-serve/seo/[slug]/page'), { ssr: false });
const GMBServicePage = dynamic(() => import('../market-we-serve/google-my-business/[slug]/page'), { ssr: false });
const BlogDetailPage = dynamic(() => import('../blogs/[slug]/page'), { ssr: false });

export default function DynamicPage({ params }) {
  const { slug } = use(params);
  const [pageType, setPageType] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    determinePageType();
  }, [slug]);

  const determinePageType = async () => {
    try {
      // First, check if it's a blog post
      const blogResponse = await fetch(`/api/blogs/${slug}`);
      if (blogResponse.ok) {
        const blogData = await blogResponse.json();
        if (blogData.blog) {
          setPageType('blog');
          setLoading(false);
          return;
        }
      }

      // If not a blog, check if it's a location
      const locationResponse = await fetch(`/api/locations/details/${slug}`);
      const locationData = await locationResponse.json();
      
      if (locationData.error || !locationData.location) {
        setPageType('notfound');
      } else {
        setPageType('location');
      }
    } catch (error) {
      console.error('Error determining page type:', error);
      setPageType('notfound');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className='flex items-center justify-center min-h-screen'>
        <div className='text-center'>
          <div className='inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600'></div>
          <p className='mt-4 text-gray-600'>Loading...</p>
        </div>
      </div>
    );
  }

  if (pageType === 'notfound') {
    notFound();
  }

  // Render blog page
  if (pageType === 'blog') {
    return <BlogDetailPage params={Promise.resolve({ slug })} />;
  }
  
  // Render location page - determine which service page based on slug
  if (slug.includes('google-my-business') || slug.includes('gmb')) {
    return <GMBServicePage params={Promise.resolve({ slug })} />;
  } else if (slug.includes('seo-service')) {
    return <SEOServicePage params={Promise.resolve({ slug })} />;
  } else if (slug.includes('website-development')) {
    return <WebDevServicePage params={Promise.resolve({ slug })} />;
  }
  
  // Default to website development
  return <WebDevServicePage params={Promise.resolve({ slug })} />;
}
