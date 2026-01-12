"use client";

import BgLayout from "@/components/layout/bgLayout";
import { motion } from "motion/react";
import Link from "next/link";
import {
  IconHome,
  IconChevronRight,
  IconRobot,
  IconSearch,
  IconTrendingUp,
  IconTargetArrow,
  IconChartLine,
  IconCheck,
  IconRocket,
} from "@tabler/icons-react";

export default function AISEOPage() {
  const services = [
    {
      icon: IconRobot,
      title: "AI-Powered SEO Analysis",
      desc: "Leverage artificial intelligence to identify SEO opportunities and optimize your site efficiently.",
    },
    {
      icon: IconSearch,
      title: "Smart Keyword Research",
      desc: "Use AI tools to find high-potential keywords and topics that drive traffic and conversions.",
    },
    {
      icon: IconTrendingUp,
      title: "Predictive SEO Trends",
      desc: "Stay ahead of competitors by anticipating search trends using AI insights.",
    },
    {
      icon: IconTargetArrow,
      title: "Content Optimization",
      desc: "AI-assisted content strategies to improve rankings, engagement, and relevance.",
    },
  ];

  const process = [
    "AI-based website audit",
    "Smart keyword identification",
    "Predictive trend analysis",
    "Content & meta optimization",
    "Performance tracking & suggestions",
    "Continuous AI-driven improvements",
  ];

  return (
    <BgLayout>
      {/* ================= HERO ================= */}
      <section className="relative h-[55vh] mt-21 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/services/ai-seo-hero.webp"
            alt="AI SEO Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative z-10 max-w-5xl px-6 text-center text-white">
          <div className="flex justify-center items-center gap-2 text-sm mb-6">
            <Link href="/" className="flex items-center gap-1 hover:text-blue-400">
              <IconHome size={18} /> Home
            </Link>
             <Link href="/seo-services" className="flex items-center gap-1 hover:text-blue-400">
             <IconChevronRight size={16} />SEO Services
              </Link>
            <IconChevronRight size={16} />
            <span className="text-blue-300">AI SEO</span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            AI <span className="text-blue-400">SEO Services</span>
          </motion.h1>

          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Enhance your SEO strategy with cutting-edge AI tools for keyword research, content optimization, and predictive insights.
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
                AI-Driven <span className="text-blue-600">SEO Services</span>
              </h2>

              <p className="text-gray-600 text-lg mb-4">
                Artificial Intelligence is transforming SEO by providing smarter insights, faster audits, and data-driven content optimization.
              </p>

              <p className="text-gray-600 text-lg mb-4">
                Our AI SEO services help businesses leverage technology to improve rankings, attract relevant traffic, and enhance user engagement.
              </p>

              <p className="text-gray-600 text-lg">
                Using AI tools, we provide actionable recommendations that keep your website ahead of the competition.
              </p>
            </motion.div>

            {/* SERVICES */}
            <div>
              <h2 className="text-4xl font-bold mb-10">
                Our <span className="text-blue-600">AI SEO Solutions</span>
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
                Our <span className="text-blue-600">AI SEO Process</span>
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
                Ready to Boost SEO with AI?
              </h2>
              <p className="text-blue-100 mb-8">
                Let our AI SEO experts optimize your website and strategy for maximum growth.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold"
              >
                Get AI SEO Consultation
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
              <li><Link href="/technical-seo-services/">Technical SEO</Link></li>
              <li><Link href="/on-page-seo-services/">On-Page SEO</Link></li>
              <li><Link href="/off-page-seo-services/">Off-Page SEO</Link></li>
              <li><Link href="/seo-audit-services/">SEO Audit</Link></li>
              <li className="font-medium text-blue-600">AI SEO</li>
            </ul>
          </aside>

        </div>
      </section>
    </BgLayout>
  );
}
