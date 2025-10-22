"use client";

import { use } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import service page components
const WebDevServicePage = dynamic(() => import('../market-we-serve/website-development/[slug]/page'), { ssr: false });
const SEOServicePage = dynamic(() => import('../market-we-serve/seo/[slug]/page'), { ssr: false });
const GMBServicePage = dynamic(() => import('../market-we-serve/google-my-business/[slug]/page'), { ssr: false });

export default function LocationPage({ params }) {
  const { slug } = use(params);
  
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
