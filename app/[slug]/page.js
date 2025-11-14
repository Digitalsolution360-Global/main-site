import { notFound } from 'next/navigation';
import WebDevServicePageClient from '../market-we-serve/website-development/[slug]/webMarketClient';
import SEOServicePageClient from '../market-we-serve/seo/[slug]/seoMarketClient';
import GMBServicePageClient from '../market-we-serve/google-my-business/[slug]/gmbMarketClient';
import DigitalMarketingServicePageClient from '../market-we-serve/digital-marketing/[slug]/digitalMarketClient';
import BlogDetailPageClient from '../blogs/[slug]/blogSlugClient';

// Fetch location or blog data
async function getPageData(slug) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ;
    
    // First, check if it's a blog post
    const blogResponse = await fetch(`${baseUrl}/api/blogs/${slug}`, {
      cache: 'no-store'
    });
    
    if (blogResponse.ok) {
      const blogData = await blogResponse.json();
      if (blogData.blog) {
        return { type: 'blog', data: blogData.blog };
      }
    }

    // If not a blog, check if it's a location
    const locationResponse = await fetch(`${baseUrl}/api/locations/details/${slug}`, {
      cache: 'no-store'
    });
    const locationData = await locationResponse.json();
    
    if (locationData.error || !locationData.location) {
      return { type: 'notfound' };
    }
    
    return { type: 'location', data: locationData };
  } catch (error) {
    console.error('Error fetching page data:', error);
    return { type: 'notfound' };
  }
}

// Generate dynamic metadata
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const pageData = await getPageData(slug);
  
  if (pageData.type === 'notfound') {
    return {
      title: 'Page Not Found | Digital Solution 360',
      description: 'The page you are looking for does not exist.',
    };
  }

  if (pageData.type === 'blog') {
    const blog = pageData.data;
    return {
      title: blog.meta_title || `${blog.title} | Digital Solution 360`,
      description: blog.meta_description || blog.excerpt || blog.content?.substring(0, 160),
      keywords: blog.meta_keywords || blog.title,
      openGraph: {
        title: blog.meta_title || blog.title,
        description: blog.meta_description || blog.excerpt,
        url: `https://www.digitalsolution360.com/blogs/${slug}`,
        siteName: 'Digital Solution 360',
        images: blog.image ? [
          {
            url: blog.image,
            width: 1200,
            height: 630,
            alt: blog.title,
          },
        ] : [],
        type: 'article',
        publishedTime: blog.created_at,
        modifiedTime: blog.updated_at,
      },
      twitter: {
        card: 'summary_large_image',
        title: blog.meta_title || blog.title,
        description: blog.meta_description || blog.excerpt,
        images: blog.image ? [blog.image] : [],
      },
      alternates: {
        canonical: `https://www.digitalsolution360.com/blogs/${slug}`,
      },
    };
  }

  // For location pages
  const { location, locationType, serviceType } = pageData.data;
  const locationName = locationType === 'city' 
    ? location.city || location.name
    : location.name;

  let serviceTitle, serviceDescription, serviceKeywords;

  switch (serviceType) {
    case 'google-my-business':
      serviceTitle = `Google My Business Services in ${locationName} | Digital Solution 360`;
      serviceDescription = `Boost local visibility with expert Google My Business services in ${locationName}. Professional GMB profile management, optimization, and local SEO strategies.`;
      serviceKeywords = `google my business ${locationName}, GMB services ${locationName}, google business profile ${locationName}, local SEO ${locationName}`;
      break;
    case 'seo':
      serviceTitle = `SEO Services in ${locationName} | Best SEO Company | Digital Solution 360`;
      serviceDescription = `Boost your online visibility with expert SEO services in ${locationName}. Local SEO, technical SEO, content optimization, and link building. Get a free SEO audit today!`;
      serviceKeywords = `SEO services ${locationName}, SEO company ${locationName}, search engine optimization ${locationName}, local SEO ${locationName}`;
      break;
    case 'digital-marketing':
      serviceTitle = `Digital Marketing Services in ${locationName} | Top Agency | Digital Solution 360`;
      serviceDescription = `Grow your business with expert digital marketing services in ${locationName}. SEO, social media marketing, PPC, content marketing, and more. Get a free consultation today!`;
      serviceKeywords = `digital marketing services ${locationName}, digital marketing agency ${locationName}, online marketing ${locationName}, social media marketing ${locationName}`;
      break;
    default:
      serviceTitle = `Website Development Services in ${locationName} | Digital Solution 360`;
      serviceDescription = `Professional website development services in ${locationName}. Custom web design, e-commerce solutions, and responsive websites that drive results.`;
      serviceKeywords = `website development ${locationName}, web design ${locationName}, web development services ${locationName}, website design ${locationName}`;
  }

  return {
    title: serviceTitle,
    description: serviceDescription,
    keywords: serviceKeywords,
    openGraph: {
      title: serviceTitle,
      description: serviceDescription,
      url: `https://www.digitalsolution360.com/${slug}`,
      siteName: 'Digital Solution 360',
      images: [
        {
          url: 'https://www.digitalsolution360.com/services/services-hero.webp',
          width: 1200,
          height: 630,
          alt: serviceTitle,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: serviceTitle,
      description: serviceDescription,
      images: ['https://www.digitalsolution360.com/services/services-hero.webp'],
    },
    alternates: {
      canonical: `https://www.digitalsolution360.com/${slug}`,
    },
  };
}

export default async function DynamicPage({ params }) {
  const { slug } = await params;
  const pageData = await getPageData(slug);
  
  if (pageData.type === 'notfound') {
    notFound();
  }

  // Render blog page
  if (pageData.type === 'blog') {
    return <BlogDetailPageClient params={params} />;
  }
  
  // Render location page - determine which service page based on serviceType from API
  const { serviceType } = pageData.data;
  
  switch (serviceType) {
    case 'google-my-business':
      return <GMBServicePageClient params={params} />;
    case 'seo':
      return <SEOServicePageClient params={params} />;
    case 'digital-marketing':
      return <DigitalMarketingServicePageClient params={params} />;
    case 'website-development':
    default:
      return <WebDevServicePageClient params={params} />;
  }
}
