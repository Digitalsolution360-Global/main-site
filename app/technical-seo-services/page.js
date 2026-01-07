"use client";

import BgLayout from "@/components/layout/bgLayout";
import { motion } from "motion/react";
import Link from "next/link";
import {
  IconHome,
  IconChevronRight,
  IconSearch,
  IconTargetArrow,
  IconTrendingUp,
  IconChartLine,
  IconCheck,
  IconRocket,
} from "@tabler/icons-react";

export default function TechnicalSEOPage() {
  const services = [
    {
      icon: IconSearch,
      title: "Site Audit & Analysis",
      desc: "Comprehensive audits to identify technical SEO issues and opportunities.",
    },
    {
      icon: IconTargetArrow,
      title: "Website Speed Optimization",
      desc: "Improve page load times for better user experience and rankings.",
    },
    {
      icon: IconTrendingUp,
      title: "Mobile & Core Web Vitals",
      desc: "Optimize for mobile-friendliness, core web vitals, and Google Page Experience.",
    },
    {
      icon: IconChartLine,
      title: "Structured Data & Indexing",
      desc: "Implement schema markup, fix crawl errors, and improve search engine indexing.",
    },
  ];

  const process = [
    "Technical SEO audit & analysis",
    "Page speed & performance optimization",
    "Mobile responsiveness & Core Web Vitals",
    "URL structure & internal linking",
    "Structured data & schema implementation",
    "Continuous monitoring & optimization",
  ];

  return (
    <BgLayout>
      {/* ================= HERO ================= */}
      <section className="relative h-[55vh] mt-21 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/services/technical-seo-hero.webp"
            alt="Technical SEO Services"
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
            <span className="text-blue-300">Technical SEO</span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Technical <span className="text-blue-400">SEO</span>
          </motion.h1>

          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Improve your website’s technical performance, speed, and crawlability to boost rankings and user experience.
          </p>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12 items-start">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-2 space-y-20">

            {/* INTRO */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl font-bold mb-6">
                Optimize Your Site with <span className="text-blue-600">Technical SEO</span>
              </h2>

              <p className="text-gray-600 text-lg mb-4">
                Technical SEO ensures your website is crawlable, indexable, and fast — the foundation for all SEO success.
              </p>

              <p className="text-gray-600 text-lg mb-4">
                We focus on site architecture, performance, and technical fixes that improve search engine rankings.
              </p>

              <p className="text-gray-600 text-lg">
                Our strategies follow Google best practices, boosting visibility and user experience.
              </p>
            </motion.div>

            {/* SERVICES */}
            <div>
              <h2 className="text-4xl font-bold mb-10">
                Our <span className="text-blue-600">Technical SEO Services</span>
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                {services.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={i}
                      whileHover={{ y: -6 }}
                      className="bg-white p-8 rounded-2xl shadow-lg"
                    >
                      <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                        <Icon size={28} className="text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* PROCESS */}
            <div>
              <h2 className="text-4xl font-bold mb-10">
                Our <span className="text-blue-600">Technical SEO Process</span>
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {process.map((step, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 bg-white p-6 rounded-xl shadow"
                  >
                    <IconCheck className="text-blue-600" />
                    <span className="text-lg font-medium">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-3xl p-12 text-center">
              <IconRocket size={48} className="mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">
                Ensure Your Website is Technically Perfect
              </h2>
              <p className="text-blue-100 mb-8">
                Let our experts fix technical SEO issues to improve rankings and site performance.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold"
              >
                Get Technical SEO Consultation
              </Link>
            </div>

          </div>

          {/* RIGHT SIDEBAR */}
          <aside className="bg-white shadow-xl rounded-2xl p-6 sticky top-28">
            <h3 className="text-xl font-bold mb-4 border-b pb-2">
              SEO Services
            </h3>

            <ul className="space-y-3 text-gray-700">
              <li><Link href="/seo-services/">SEO Services</Link></li>
              <li><Link href="/local-seo-services/">Local SEO</Link></li>
              <li><Link href="/ecommerce-seo-services/">Ecommerce SEO</Link></li>
              <li className="font-medium text-blue-600">Technical SEO</li>
              <li><Link href="/on-page-seo-services/">On-Page SEO</Link></li>
              <li><Link href="/off-page-seo-services/">Off-Page SEO</Link></li>
              <li><Link href="/seo-audit-services/">SEO Audit</Link></li>
              <li><Link href="/ai-seo-services/">AI SEO</Link></li>
            </ul>
          </aside>

        </div>
      </section>
    </BgLayout>
  );
}
