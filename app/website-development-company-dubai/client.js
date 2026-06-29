"use client";
import { useState } from "react"
import BgLayout from "@/components/layout/bgLayout";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import {
  IconHome,
  IconChevronRight,
  IconPlus,
  IconMinus,
} from "@tabler/icons-react";

export default function WebsiteDevelopmentCompanyDubai() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Which is the best website development company in Dubai for custom applications?",
      answer: "Digital Solution 360 stands out as the premier choice. We have the best and high-performance digital ecosystems that match your exact business processes and compliance needs."
    },
    {
      question: "How long does it typically take to develop a corporate website in Dubai?",
      answer: "Our work will surely reflect, but it will vary based on your business. For standard business, it will be 4 to 8 weeks, and for high-volume business may take 12 weeks or longer."
    },
    {
      question: "Will my website layout adjust correctly for mobile phone users across the UAE?",
      answer: "Yes, operators optimize your website. They use the advanced mobile-first engineering to provide smooth, responsive experiences."
    },
    {
      question: "Do you provide ongoing maintenance and security updates after the project goes live?",
      answer: "Yes, we do. We have 24/7 uptime monitoring, critical security patching, and regular performance tuning. Your website stays secure, fast, and fully optimized."
    },
    {
      question: "Why is search engine optimization integrated directly into your web development process?",
      answer: "Yes, it is necessary to integrate the SEO principles. They come with clean code, optimized metadata, and fast loading speeds. Later, it helps our brand rank higher and capture organic traffic faster."
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
          {/* Reusing existing hero image or placeholder */}
          <img
            src="/services/web-app-dev-hero.webp"
            alt="Website Development Company in Dubai"
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
            <span className="text-blue-300">Website Development Dubai</span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl md:text-4xl font-bold mb-6"
          >
            Best Website Development Company in <span className="text-blue-400">Dubai</span>
          </motion.h1>

          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            We create responsive, SEO-friendly, and custom websites that drive business growth.
          </p>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12 items-start">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-2 space-y-20">
            <div className="mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Empowering Brands: The Best Website Development Company in Dubai</h2>
              <p className='text-lg text-gray-600 mb-4 leading-relaxed'>The world of digital marketing is entering a new phase worldwide. The Dubai market is nowhere else. It is a competitive market, with many scaling enterprises requiring elite digital infrastructure.</p>
              <p className='text-lg text-gray-600 mb-4 leading-relaxed'>Competitively, many take advantage of new entrepreneurs. Then, the Website Development Services by Digital Solution 360 breaks this cycle.</p>
              <p className='text-lg text-gray-600 leading-relaxed'>As the premier website development company in Dubai, we design custom digital platforms that transform casual visitors into loyal brand advocates.</p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">The Standard of Professional Website Development Dubai</h2>
              <p className='text-lg text-gray-600 mb-4 leading-relaxed'>The opportunity is always here when you have the best team by your side. Now, Digital Solution 360 can build an impactful digital footprint. As a top-tier Web Development Company in Dubai, we perform the given activities to provide top-level web development services:</p>

              <ul className="space-y-3 text-gray-700 mb-4 list-disc ml-6">
                <li>High-availability infrastructure</li>
                <li>Implementation of advanced full-stack frameworks</li>
                <li>Production-ready architectures</li>
                <li>Seamless API integrations connecting CRM, ERP, and local payment systems.</li>
                <li>Strict data security protocols</li>
                <li>Appoint strict, dedicated, and senior-led project managers and their team</li>
              </ul>
              <p className='text-lg text-gray-600 mb-4 leading-relaxed'>That’s why choosing the finest Professional Website Development Services in Dubai becomes vital. Each of them ensures your system remains scalable, secure, and ready for long-term growth.</p>
              <p className='text-lg text-gray-600 leading-relaxed'>Partner with Dubai's elite engineering team to elevate your digital presence today!</p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Tailored Digital Scalability: Website Development Services Dubai</h2>
              <p className='text-lg text-gray-600 mb-4 leading-relaxed'>We have specialized Website Development Services Dubai that focus on creating custom web applications. Remember, specialized and Custom Website Development Services Dubai always find their way to align with your business goals.</p>
              <p className='text-lg text-gray-600 mb-4 leading-relaxed'>We prepare them with the right instinct and guidance. Our Website Development Agency in Dubai creates bespoke portals that match your brand identity perfectly.</p>
              <p className='text-lg text-gray-600 mb-4 leading-relaxed'>It’s easy for our experts to build high-performing digital environments tailored specifically to your target audience. Let’s understand the custom work we do to provide the best digital environments:</p>
              <ul className="space-y-3 text-gray-700 mb-4 list-disc ml-6">
                <li>Custom system blueprints designed around your unique business workflows.</li>
                <li>Advanced cloud integrations with AWS and Google Cloud</li>
                <li>Flexible headless CMS setups</li>
                <li>Custom-built web portals</li>
                <li>Complete freedom from restrictive templates</li>
                <li>Comprehensive testing protocols to ensure bug-free releases.</li>
              </ul>
              <p className='text-lg text-gray-600 leading-relaxed'>Turn your unique corporate vision into a powerful digital reality with our custom development services!</p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Design Excellence Meets Conversion: Website Design Company Dubai</h2>
              <p className='text-lg text-gray-600 mb-4 leading-relaxed'>As a leading Website Design Company Dubai, we combine artistic design with data-driven layouts. That’s how our professionals guide users naturally toward your call-to-action buttons.</p>

              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-6 mb-4">Creating Impact with Responsive Website Design Dubai</h3>
              <p className='text-lg text-gray-600 mb-4 leading-relaxed'>Our team of expert Website Designers in Dubai is there to deliver optimized and premium Responsive Website Design Dubai. We do the trick by combining high-end Web Design Services Dubai with optimized front-end code.</p>
              <p className='text-lg text-gray-600 leading-relaxed'>They work as a comprehensive solution. Yes, the campaign of Business Website Development Dubai strategies always succeeds with our plans and efforts. In every phase, we ensure your site satisfies both user expectations and modern technical performance metrics.</p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Targeted Solutions: Corporate & Ecommerce Website Development Dubai</h2>
              <p className='text-lg text-gray-600 mb-4 leading-relaxed'>Our Corporate Website Development services deliver secure, compliant, and multi-regional platforms. We never leave any option as it may cost our clients a lot. That’s how we deliver our Ecommerce Website Development Dubai services.</p>
              <p className='text-lg text-gray-600 mb-4 leading-relaxed'>They leverage powerful tools like Shopify, Magento, and custom headless commerce systems. That’s how we build scalable online storefronts.</p>
              <p className='text-lg text-gray-600 mb-4 leading-relaxed'>Our Dubai Web Development Services and SEO Friendly Website Development Dubai programs bring absolute certainty to your website. Our team ensures your brand ranks high on search engine results pages from day one.</p>
              <p className='text-lg text-gray-600 leading-relaxed'>As the Best Web Development Company Dubai, we build platforms focused on visibility, search authority, and revenue growth.</p>
            </div>

            <div className="mb-10">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Conclusion</h3>
              <p className='text-lg text-gray-600 mb-4 leading-relaxed'>For any type of business, online presence is important. But many run away from those facilities because of the simple financial burden. As a reliable, Affordable Website Development Company in Dubai, Digital Solution 360 offers highly transparent pricing structures.</p>
              <p className='text-lg text-gray-600 mb-4 leading-relaxed'>We encourage startups, mid-sized firms, and growing enterprises to access premium web development services.</p>
              <p className='text-lg text-gray-600 leading-relaxed'>Upgrade your digital presence with premium, budget-conscious web engineering today!</p>
            </div>

            {/* FAQs Section */}
            <div className='max-w-4xl mx-auto'>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className='text-center mb-16'
              >
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className='inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-lg text-sm font-semibold mb-4'
                >
                  FAQs
                </motion.span>

                <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6'>
                  Frequently Asked Questions
                </h2>
              </motion.div>

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
              Website Development Dubai
            </h3>

            <ul className="space-y-3 text-gray-700">
              <li className="font-medium text-blue-600">
                Website Development Dubai
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
