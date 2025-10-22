"use client";

import { use, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { notFound } from 'next/navigation';

// Dynamically import service page components
const WebDevServicePage = dynamic(() => import('../market-we-serve/website-development/[slug]/page'), { ssr: false });
const SEOServicePage = dynamic(() => import('../market-we-serve/seo/[slug]/page'), { ssr: false });
const GMBServicePage = dynamic(() => import('../market-we-serve/google-my-business/[slug]/page'), { ssr: false });

export default function LocationPage({ params }) {
  const { slug } = use(params);
  const [isValid, setIsValid] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    validateSlug();
  }, [slug]);

  const validateSlug = async () => {
    try {
      const response = await fetch(`/api/locations/details/${slug}`);
      const data = await response.json();
      
      if (data.error || !data.location) {
        setIsValid(false);
      } else {
        setIsValid(true);
      }
    } catch (error) {
      console.error('Error validating slug:', error);
      setIsValid(false);
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

  if (isValid === false) {
    notFound();
  }
  
  // Determine which service page to render based on slug
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
