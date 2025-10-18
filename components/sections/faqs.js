"use client";

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { IconChevronDown } from '@tabler/icons-react'

function Faqs() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is SEO and why is it important?",
      answer: "SEO (Search Engine Optimization) is the process of optimizing your website to rank higher in search engine results pages (SERPs). It's crucial because higher rankings lead to increased visibility, more organic traffic, and ultimately more customers. Good SEO helps your business be found by people actively searching for your products or services, making it one of the most cost-effective marketing strategies."
    },
    {
      question: "How does SEO differ from PPC?",
      answer: "SEO focuses on organic search results through optimization techniques and takes time to show results, but provides long-term benefits without ongoing costs per click. PPC (Pay-Per-Click) involves paying for ad placement and delivers immediate visibility, but costs continue as long as you're running ads. SEO is like building equity, while PPC is like renting space. The best strategy often combines both approaches."
    },
    {
      question: "What is local SEO and who needs it?",
      answer: "Local SEO optimizes your online presence to attract customers from specific geographic areas. It's essential for businesses with physical locations or those serving specific regions - like restaurants, dental clinics, law firms, and retail stores. Local SEO includes optimizing Google Business Profile, local citations, location-specific keywords, and generating local reviews to appear in 'near me' searches and Google Maps results."
    },
    {
      question: "How does voice search impact SEO?",
      answer: "Voice search is changing SEO by prioritizing conversational, long-tail keywords and natural language queries. People speak differently than they type - asking complete questions rather than using short keywords. To optimize for voice search, focus on question-based content, featured snippets, local SEO, and ensuring your website loads quickly. Voice search also emphasizes mobile optimization since most voice searches occur on mobile devices."
    },
    {
      question: "What are the key components of a successful SEO strategy?",
      answer: "A comprehensive SEO strategy includes: 1) Technical SEO (site speed, mobile-friendliness, crawlability), 2) On-page SEO (quality content, keyword optimization, meta tags), 3) Off-page SEO (backlinks, social signals), 4) Local SEO (Google Business Profile, local citations), 5) Content marketing (valuable, relevant content), 6) User experience (easy navigation, fast loading), and 7) Regular monitoring and analytics to track performance and adjust strategies."
    },
    {
      question: "How can I measure the success of my digital marketing efforts?",
      answer: "Track key performance indicators (KPIs) like website traffic, conversion rates, bounce rates, time on site, and ROI. Use tools like Google Analytics for traffic insights, Google Search Console for search performance, and social media analytics for engagement metrics. Monitor lead generation, customer acquisition cost, lifetime customer value, and revenue attribution. Set specific, measurable goals aligned with your business objectives and regularly review these metrics to optimize your campaigns."
    },
    {
      question: "What are some common SEO mistakes to avoid?",
      answer: "Common SEO mistakes include: keyword stuffing, ignoring mobile optimization, slow page load speeds, duplicate content, poor quality backlinks, neglecting local SEO, not using analytics, outdated content, ignoring user experience, and focusing only on rankings instead of conversions. Also avoid black-hat techniques like hidden text, cloaking, or buying links, as these can result in penalties from search engines."
    },
    {
      question: "How long does it take to see results from digital marketing?",
      answer: "Timeline varies by strategy: PPC ads can show results immediately, social media marketing takes 3-6 months to build momentum, SEO typically requires 4-6 months for significant improvements, and content marketing shows substantial results after 6-12 months. However, digital marketing is an ongoing process - the longer you invest in quality strategies, the better and more sustainable your results become. Quick wins are possible, but long-term success requires consistent effort."
    },
    {
      question: "What platforms should I use for social media marketing?",
      answer: "Choose platforms based on where your target audience is active. LinkedIn is ideal for B2B and professional services, Instagram and TikTok work well for visual brands and younger audiences, Facebook reaches a broad demographic, YouTube is excellent for educational content and demonstrations, and Twitter (X) suits real-time updates and thought leadership. Rather than being on every platform, focus on 2-3 where your audience is most engaged and you can maintain consistent, quality content."
    },
    {
      question: "Do I need a custom website or can I use a template?",
      answer: "It depends on your business needs and goals. Templates (WordPress, Shopify, Wix) are cost-effective, quick to launch, and suitable for small businesses with standard requirements. Custom websites offer unique design, better scalability, advanced functionality, superior performance, and competitive advantage - ideal for businesses with specific needs, complex features, or those requiring a distinctive brand presence. Consider your budget, timeline, functionality requirements, and long-term growth plans when deciding."
    }
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className='py-10'>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
        
        {/* Header */}
        <div className='text-center mb-16'>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className='text-4xl md:text-5xl font-bold mb-4'
          >
            Frequently Asked <span className='text-blue-600'>Questions</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='text-lg text-gray-600 max-w-3xl mx-auto'
          >
            By investing in strategic SEO and digital marketing initiatives, businesses can unlock a myriad of benefits.
          </motion.p>
        </div>

        {/* FAQ Accordion */}
        <div className='space-y-4'>
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className='bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300'
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFaq(index)}
                className='w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors duration-300'
              >
                <h3 className='text-lg font-semibold text-gray-900 pr-4'>
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className='flex-shrink-0'
                >
                  <IconChevronDown size={24} className='text-blue-600' />
                </motion.div>
              </button>

              {/* Answer */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className='overflow-hidden'
                  >
                    <div className='px-6 pb-6'>
                      <p className='text-gray-600 leading-relaxed'>
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className='text-center mt-12 p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl'
        >
          <h3 className='text-3xl font-bold text-gray-900 mb-3'>
            Still have questions?
          </h3>
          <p className='text-gray-600 text-xl mb-6'>
            Can't find the answer you're looking for? Our team is here to help.
          </p>
          <a
            href='/contact'
            className='inline-block bg-blue-600 text-white px-8 py-3 rounded-lg text-xl font-semibold hover:bg-blue-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-1'
          >
            Get in Touch
          </a>
        </motion.div>

      </div>
    </section>
  )
}

export default Faqs