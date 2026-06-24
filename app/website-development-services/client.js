"use client";
import { useState } from "react"
import BgLayout from "@/components/layout/bgLayout";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import {
  IconHome,
  IconChevronRight,
  IconCode,
  IconLayout,
  IconDeviceLaptop,
  IconRocket,
  IconCheck,
  IconPlus, IconMinus, IconMessageQuestion,
} from "@tabler/icons-react";

export default function WebsiteDevelopmentServicesPage() {
  const services = [
    {
      icon: IconLayout,
      title: "Custom Website Development",
      desc: "Tailor-made websites built to match your brand, goals, and audience.",
    },
    {
      icon: IconDeviceLaptop,
      title: "Responsive & Fast",
      desc: "Websites optimized for speed and seamless experience across all devices.",
    },
    {
      icon: IconCode,
      title: "SEO-Friendly Architecture",
      desc: "Clean code and structure that helps your website rank better on search engines.",
    },
    {
      icon: IconRocket,
      title: "Conversion-Focused Builds",
      desc: "Websites designed to convert visitors into leads and customers.",
    },
  ];

  const process = [
    "Requirement gathering & strategy",
    "Wireframing & UI planning",
    "Design & development",
    "Performance & SEO optimization",
    "Testing & quality assurance",
    "Launch & post-launch support",
  ];
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What makes your website development service in India unique for modern brands?",
      answer: "The skills of professionals, along with their advanced, framework-driven coding with cutting-edge asset optimization, make things easier for Indian businesses and modern brands."
    },
    {
      question: "Why should my brand invest in Custom Website Development Services over simple templates?",
      answer: "We create lightweight, scalable platforms tailored directly to your operational workflows. That’s how you level with your competitors."
    },
    {
      question: "How does your Mobile Friendly Website Development Company ensure great user experiences?",
      answer: "The professionals from Digital Solution 360 are great at implementing fully responsive fluid grids and touch-optimized elements. They provide smooth speed and perfect operation."
    },
    {
      question: "Do your Ecommerce Website Development Services support secure payment integrations?",
      answer: "Yes, we prioritize secure payment and come with PCI-compliant payment gateways along with end-to-end SSL encryption."
    },
    {
      question: "How does an SEO Friendly Website Development approach help my search visibility?",
      answer: "The professionals never fail to surprise customers as we build your website with semantic HTML, automated schema markup, and optimized performance parameters. This helps rank your business pages."
    }
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <BgLayout>
      {/* ================= HERO ================= */}
      <section className="relative h-[55vh] mt-21 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/services/website-development-hero.webp"
            alt="Website Development Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative z-10 max-w-5xl px-6 text-center text-white">
          <div className="flex justify-center items-center gap-2 text-sm mb-6">
            <Link href="/" className="flex items-center gap-1 hover:text-blue-400">
              <IconHome size={18} /> Home
            </Link>
            <IconChevronRight size={16} />
            <span className="text-blue-300">Website Development</span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Website <span className="text-blue-400">Development</span>
          </motion.h1>

          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            High-performance websites designed to engage users and grow your business.
          </p>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12 items-start">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-2 space-y-20">
            <div className="mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Best Digital Marketing Agency in India: Your 2026 Growth Partner</h2>
        <p className='text-lg text-gray-600 mb-4 leading-relaxed'>Digital marketing has become very competitive. Without proper optimization and necessary presence, your old website may not stand a chance against your competitors. There is only one player in the league of an established <a href="https://www.digitalsolution360.in/website-development"> Website Development Company in India</a>. Yes, it is <a href="https://www.digitalsolution360.in/"> Digital Solution 360</a>  that crafts cutting-edge solutions. </p>

        <p className='text-lg text-gray-600 mb-4 leading-relaxed'>The professionals know how to deliver high-performance websites that turn everyday visitors into loyal customers. Our premium <strong> website development service in India </strong> guarantees success.</p>
        <p className='text-lg text-gray-600 leading-relaxed'>It is effective as we follow a flawless technical foundation, beautiful aesthetics, and unmatched digital scalability. </p>
    </div>
    <div className="mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Why Choose Our Website Development Service in India? </h2>
       <p className='text-lg text-gray-600 mb-4 leading-relaxed'> The right <strong> Professional Web Development Company</strong> determines the issues and fixes them on time without affecting the performance of any of its clients. At Digital Solution 360, we act as an agile <strong> Website Development Agency</strong> focused on driving real commercial outcomes.</p>
        <p className='text-lg text-gray-600 mb-4 leading-relaxed'>Our development framework relies on modern tech. Ensure your platform is prepared for tomorrow's traffic demands. </p>
        <p className='text-lg text-gray-600 mb-4 leading-relaxed'>We focus on creating a perfect and seamless journey for clients through better content engagement and keyword            stuffing. It builds your brand’s reputation and gives long-term reliability in a crowded marketplace like         India. </p>
       <p className='text-lg text-gray-600 mb-4 leading-relaxed'>Let’s go through the key performance insights of Digital Solution 360: </p>
         <ul className="space-y-3 text-gray-700 mb-4">
            <li>Prevent user abandonment.</li>
            <li>Increase business conversion rates.</li>
            <li>Safeguard user data against modern security threats.</li>
            <li>Ensure seamless server-side performance.</li>
           <li>Enhance client trust and brand authority.</li>
           <li>Allow easy expansion as business operations grow.</li>
           <li>Keep platform downtime to absolute zero.</li>
        </ul>
        <p className='text-lg text-gray-600 mb-4 leading-relaxed'>Time to outshine better than your competitor – Connect with our team today and secure a free expert consultation!</p>

        
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Scalable Architecture with Our Website Development Service in India</h2>
        <p className='text-lg text-gray-600 mb-4 leading-relaxed'>A versatile <strong> Business Website Development Company</strong> always finds its way to align various strategic targets. We provide flexible <strong> Web Development Services India</strong> that scale smoothly across all corporate domains. </p>
        <p className='text-lg text-gray-600 mb-4 leading-relaxed'>Our specialized <strong> Portfolio Website Development Services</strong> and tailored <strong> Corporate Website Development Services</strong> can deliver functional art that converts. </p>
        <p className='text-lg text-gray-600 mb-4 leading-relaxed'>With Digital Solution 360, there is no going back from success and assurance of growth: </p>
        <ul className="space-y-3 text-gray-700 mb-4">
            <li>Optimized single-page landing layouts capture high-quality business leads.</li>
            <li>Secure multi-level user authentication preserves data privacy.</li>
            <li>Tailored application structures ensure maximum code reusability.</li>
            <li>Specialized media compression keeps site galleries loading instantly.</li>
            <li>Intuitive administrative dashboards simplify backend management tasks.</li>
        </ul>
      
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6"> Modern E-commerce & Custom Website Development Service in India</h3>
        <p className='text-lg text-gray-600 mb-4 leading-relaxed'>Businesses need targeted <strong> Custom Website Development Services</strong> that are meant to capture the attention of the brand. We have dedicated <strong> Custom Website Development Services in India</strong> that break free from rigid cookie-cutter limitations.  </p>
        <p className='text-lg text-gray-600 mb-4 leading-relaxed'>With our <strong> Ecommerce Website Development Services and Shopify Development Services</strong>, Indian businesses can now handle extreme transaction volumes effortlessly. We have the advanced checkout architecture that eliminates cart abandonment.       </p>
        <p className='text-lg text-gray-600 mb-4 leading-relaxed'>This is not the end; we are also known as a result-based Mobile Friendly Website Development Company. In our part of doing the <strong> Responsive Website Development</strong>, we never fail to deliver a perfect layout that adapts to any screen orientation or size. 
</p>
<p className='text-lg text-gray-600 mb-4 leading-relaxed'>With the right style, we emphasize <strong> SEO Friendly Website Development</strong> and introduce precise schema layouts and clean semantic codes. That’s how we rank your website at the absolute top of search engine results. </p>
 <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Digital Solution 360: The Face that Drives Growth Across All Market Scales</h3>

 <p className='text-lg text-gray-600 mb-4 leading-relaxed'>Digital Solution 360 provides elite Business Website Development Services. We act as an accessible <strong> Website Development Company for Small Businesses</strong> too. That’s how we are great for enterprise-grade <strong> Website Development Services for Enterprises.</strong></p>
 <p className='text-lg text-gray-600 mb-4 leading-relaxed'>The services are integrated with the complex ERP, CRM, and cloud systems. Also, we are an <strong> Affordable Website Development Company in India</strong> with experience and expertise. Our Professional Website Development Services for Businesses build the foundation for small to large businesses, too. </p>
 <p className='text-lg text-gray-600 mb-4 leading-relaxed'>Services we provide at Digital Solution 360: </p>
      <ul className="space-y-3 text-gray-700 mb-4">
            <li>Web Design Services</li>
            <li>Web Design Services</li>
            <li>UI/UX Design</li>
            <li>WordPress Development</li>
            <li>Shopify Development</li>
            <li>Landing Page Design</li>
            <li>App Development</li>
            <li>CRM Development</li>
        </ul>
        <p className='text-lg text-gray-600 leading-relaxed'>The inclusive <strong> Professional Web Design and Development Services</strong> aren’t that hard to find when you have the right one by your side. When you have Digital Solution 360, there is no issue of getting premium <strong> Website Development Services for Growing Businesses</strong> in India. 
</p>

         
    </div>
    <div className="mb-10">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Conclusion</h3>
       <p className='text-lg text-gray-600 leading-relaxed'>
           Digital Solution 360 builds fast, secure, and conversion-optimized platforms for Indian businesses. Small or large, your business gets the best treatment here. Turn your bold vision into digital reality by initiating your project with our top-rated specialists today!
        </p>
    </div>
                 <div className='max-w-4xl mx-auto'>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className='text-center mb-16'
        >
          {/* Icon */}
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6'
          >
            <IconMessageQuestion className='w-8 h-8 text-blue-600' stroke={1.5} />
          </motion.div> */}

          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className='inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-lg text-sm font-semibold mb-4'
          >
            FAQs
          </motion.span>

          <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6'>
            Frequently Asked Questions
          </h2>

          <p className='text-lg md:text-xl text-gray-600 max-w-3xl mx-auto'>
            Got questions? We've got answers. Find everything you need to know about our services and digital marketing.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='space-y-4'
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className='bg-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden'
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFaq(index)}
                className='w-full px-6 md:px-8 py-6 flex items-start justify-between gap-4 text-left hover:bg-gray-50 transition-colors duration-300'
              >
                <span className='text-lg md:text-xl font-semibold text-gray-900 pr-4'>
                  {faq.question}
                </span>
                <div className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${openIndex === index
                    ? 'bg-blue-600 rotate-180'
                    : 'bg-blue-100'
                  }`}>
                  {openIndex === index ? (
                    <IconMinus className='w-5 h-5 text-white' stroke={2.5} />
                  ) : (
                    <IconPlus className='w-5 h-5 text-blue-600' stroke={2.5} />
                  )}
                </div>
              </button>

              {/* Answer */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className='overflow-hidden'
                  >
                    <div className='px-6 md:px-8 pb-6 pt-2'>
                      <motion.p
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className='text-gray-600 leading-relaxed'
                      >
                        {faq.answer}
                      </motion.p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

      </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <aside className="bg-white shadow-xl rounded-2xl p-6 sticky top-28">
            <h3 className="text-xl font-bold mb-4 border-b pb-2">
              Website Development
            </h3>

            <ul className="space-y-3 text-gray-700">
              <li className="font-medium text-blue-600">
                Website Development
              </li>
              <li>
                <Link href="/web-design-services/">
                  Web Design Services
                </Link>
              </li>
              <li>
                <Link href="/ui-ux-design-services/">
                  UI / UX Design
                </Link>
              </li>
              <li>
                <Link href="/wordpress-development-services/">
                  WordPress Development
                </Link>
              </li>
              <li>
                <Link href="/shopify-development-services/">
                  Shopify Development
                </Link>
              </li>
              <li>
                <Link href="/landing-page-design-services/">
                  Landing Page Design
                </Link>
              </li>
            </ul>
          </aside>

        </div>
      </section>
    </BgLayout>
  );
}
