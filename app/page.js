import BgLayout from "@/components/layout/bgLayout";
import Services from "@/components/sections/services";
import WhyUS from "@/components/sections/why-us";
import dynamic from "next/dynamic";
import { Suspense } from "react";

// Lazy load below-the-fold sections
const Clients = dynamic(() => import("@/components/sections/clients"), {
  loading: () => <div className="h-48" />,
});
const MissionVision = dynamic(() => import("@/components/sections/mission-vision"), {
  loading: () => <div className="h-48" />,
});
const WebDev = dynamic(() => import("@/components/sections/web-dev").then(mod => mod.WebDev), {
  loading: () => <div className="h-48" />,
});
const ContactForm = dynamic(() => import("@/components/sections/form"), {
  loading: () => <div className="h-48" />,
});
const Offering = dynamic(() => import("@/components/sections/offering"), {
  loading: () => <div className="h-48" />,
});
const Blogs = dynamic(() => import("@/components/sections/blogs"), {
  loading: () => <div className="h-48" />,
});
const Faqs = dynamic(() => import("@/components/sections/faqs"), {
  loading: () => <div className="h-48" />,
});

export const metadata = {
  title: 'Digital Solution 360 - Digital Marketing & Web Development Services',
  description: 'Digital Solution 360 offers professional digital marketing, web development, SEO, Google My Business, and automation services. Transform your business with our expert team. Call +91 99905 56217',
  keywords: 'digital marketing, web development, SEO services, Google My Business, automation solutions, digital agency, website design, social media marketing, Digital Solution 360',
  openGraph: {
    title: 'Digital Solution 360 - Digital Marketing & Web Development Services',
    description: 'Digital Solution 360 offers professional digital marketing, web development, SEO, Google My Business, and automation services. Transform your business with our expert team.',
    url: 'https://www.digitalsolution360.com',
    siteName: 'Digital Solution 360',
    images: [
      {
        url: 'https://www.digitalsolution360.com/services/services-hero.webp',
        width: 1200,
        height: 630,
        alt: 'Digital Solution 360',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Solution 360 - Digital Marketing & Web Development Services',
    description: 'Digital Solution 360 offers professional digital marketing, web development, SEO, Google My Business, and automation services.',
    images: ['https://www.digitalsolution360.com/services/services-hero.webp'],
  },
  alternates: {
    canonical: 'https://www.digitalsolution360.com',
  },
}

export default function Home() {
  return (
    <BgLayout>
      <video
        src="/home/videos/hero-video.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        fetchPriority="high"
        className="hidden sm:block sm:pt-22 lg:pt-18 w-full h-auto max-h-screen object-cover"
      />

      <Services/>
        <WhyUS/>
      <Suspense fallback={<div className="h-48" />}>
        <Clients/>
      </Suspense>
      <Suspense fallback={<div className="h-48" />}>
        <MissionVision/>
      </Suspense>
      <Suspense fallback={<div className="h-48" />}>
        <WebDev/>
      </Suspense>
      <Suspense fallback={<div className="h-48" />}>
        <ContactForm/>
      </Suspense>
      <Suspense fallback={<div className="h-48" />}>
        <Offering/>
      </Suspense>
      <Suspense fallback={<div className="h-48" />}>
        <Blogs/>
      </Suspense>
      <Suspense fallback={<div className="h-48" />}>
        <Faqs/>
      </Suspense>
    </BgLayout>
  );
}
