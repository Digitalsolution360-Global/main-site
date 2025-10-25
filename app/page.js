import BgLayout from "@/components/layout/bgLayout";
import Blogs from "@/components/sections/blogs";
import Clients from "@/components/sections/clients";
import Faqs from "@/components/sections/faqs";
import ContactForm from "@/components/sections/form";
import MissionVision from "@/components/sections/mission-vision";
import Offering from "@/components/sections/offering";
import Services from "@/components/sections/services";
import { WebDev } from "@/components/sections/web-dev";
import WhyUS from "@/components/sections/why-us";

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
          className="hidden sm:block sm:pt-22 lg:pt-18 w-full h-auto max-h-screen object-cover"
        />

        <Services/>
        <WhyUS/>
        <Clients/>
        <MissionVision/>
        <WebDev/>
        <ContactForm/>
        <Offering/>
        <Blogs/>
        <Faqs/>
    </BgLayout>
  );
}
