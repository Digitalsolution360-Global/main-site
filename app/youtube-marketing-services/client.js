"use client";

import BgLayout from "@/components/layout/bgLayout";
import { motion } from "motion/react";
import Link from "next/link";
import {
  IconHome,
  IconChevronRight,
  IconBrandYoutube,
  IconPlayerPlay,
  IconRocket,
  IconChartBar,
  IconCheck,
} from "@tabler/icons-react";

export default function YouTubeMarketingPage() {
  const services = [
    {
      icon: IconBrandYoutube,
      title: "YouTube Channel Optimization",
      desc: "Optimize your YouTube channel for branding, SEO, and higher discoverability.",
    },
    {
      icon: IconPlayerPlay,
      title: "Video Content Strategy",
      desc: "Create engaging video strategies that increase watch time and subscribers.",
    },
    {
      icon: IconRocket,
      title: "YouTube Ads Campaigns",
      desc: "Run targeted YouTube ads for brand awareness, leads, and conversions.",
    },
    {
      icon: IconChartBar,
      title: "Analytics & Growth Tracking",
      desc: "Track views, engagement, conversions, and continuously optimize performance.",
    },
  ];

  const process = [
    "Understand business & video goals",
    "Optimize YouTube channel & branding",
    "Plan content & video strategy",
    "Launch YouTube ads & promotions",
    "Track views, leads & engagement",
    "Optimize for better reach & ROI",
  ];

  return (
    <BgLayout>
      {/* ================= HERO ================= */}
      <section className="relative h-[55vh] mt-21 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/services/youtube-marketing-hero.webp"
            alt="YouTube Marketing Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative z-10 max-w-5xl px-6 text-center text-white">
          <div className="flex justify-center items-center gap-2 text-sm mb-6">
            <Link href="/" className="flex items-center gap-1 hover:text-red-400">
              <IconHome size={18} /> Home
            </Link>
            <IconChevronRight size={16} />
            <span className="text-red-400">YouTube Marketing</span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            YouTube <span className="text-red-500">Marketing</span>
          </motion.h1>

          <p className="text-xl text-red-100 max-w-3xl mx-auto">
            Grow your brand with powerful video marketing and result-driven YouTube strategies.
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
                Result-Driven <span className="text-red-600">YouTube Marketing</span>
              </h2>

              <p className="text-gray-600 text-lg mb-4">
                YouTube is the world’s second largest search engine and the most powerful video platform.
              </p>

              <p className="text-gray-600 text-lg mb-4">
                We help brands grow subscribers, engagement, and conversions through strategic video marketing.
              </p>

              <p className="text-gray-600 text-lg">
                Our YouTube marketing solutions focus on long-term growth and measurable results.
              </p>
            </motion.div>

            {/* SERVICES */}
            <div>
              <h2 className="text-4xl font-bold mb-10">
                Our <span className="text-red-600">YouTube Services</span>
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
                      <div className="w-14 h-14 bg-red-600 rounded-xl flex items-center justify-center mb-4">
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
                Our <span className="text-red-600">Process</span>
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {process.map((step, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 bg-white p-6 rounded-xl shadow"
                  >
                    <IconCheck className="text-red-600" />
                    <span className="text-lg font-medium">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-red-600 to-red-800 text-white rounded-3xl p-12 text-center">
              <IconRocket size={48} className="mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">
                Grow Faster on YouTube
              </h2>
              <p className="text-red-100 mb-8">
                Let our experts manage your YouTube marketing and video growth strategy.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-white text-red-600 px-8 py-4 rounded-lg font-semibold"
              >
                Start YouTube Marketing
              </Link>
            </div>

          </div>

          {/* RIGHT SIDEBAR */}
          <aside className="bg-white shadow-xl rounded-2xl p-6 sticky top-28">
            <h3 className="text-xl font-bold mb-4 border-b pb-2">
              Social Media Marketing
            </h3>

            <ul className="space-y-3 text-gray-700">
              <li><Link href="/social-media-marketing-services/">Social Media Marketing</Link></li>
              <li><Link href="/social-media-management-services/">Social Media Management</Link></li>
              <li><Link href="/instagram-marketing-services/">Instagram Marketing</Link></li>
              <li><Link href="/facebook-marketing-services/">Facebook Marketing</Link></li>
              <li><Link href="/linkedin-marketing-services/">LinkedIn Marketing</Link></li>
              <li className="font-medium text-red-600">YouTube Marketing</li>
              <li><Link href="/influencer-marketing-services/">Influencer Marketing</Link></li>
              <li><Link href="/short-video-marketing/">Short Video Marketing</Link></li>
            </ul>
          </aside>

        </div>
      </section>
    </BgLayout>
  );
}
