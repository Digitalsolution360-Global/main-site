"use client";

import BgLayout from "@/components/layout/bgLayout";
import { motion } from "motion/react";
import Link from "next/link";
import {
  IconHome,
  IconChevronRight,
  IconVideo,
  IconBrandTiktok,
  IconRocket,
  IconChartBar,
  IconCheck,
} from "@tabler/icons-react";

export default function ShortVideoMarketingPage() {
  const services = [
    {
      icon: IconVideo,
      title: "Short Video Strategy",
      desc: "Create platform-specific short video strategies for maximum reach and engagement.",
    },
    {
      icon: IconBrandTiktok,
      title: "Reels, Shorts & TikTok",
      desc: "High-performing videos for Instagram Reels, YouTube Shorts, and TikTok.",
    },
    {
      icon: IconRocket,
      title: "Viral Content Creation",
      desc: "Trend-based content designed to go viral and increase brand visibility.",
    },
    {
      icon: IconChartBar,
      title: "Performance Tracking",
      desc: "Analyze views, engagement, and conversions to improve results.",
    },
  ];

  const process = [
    "Understand brand & audience",
    "Research trends & competitors",
    "Plan short-form video content",
    "Create & publish videos",
    "Boost reach with promotions",
    "Analyze & optimize performance",
  ];

  return (
    <BgLayout>
      {/* ================= HERO ================= */}
      <section className="relative h-[55vh] mt-21 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/services/short-video-marketing-hero.webp"
            alt="Short Video Marketing Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative z-10 max-w-5xl px-6 text-center text-white">
          <div className="flex justify-center items-center gap-2 text-sm mb-6">
            <Link href="/" className="flex items-center gap-1 hover:text-blue-400">
              <IconHome size={18} /> Home
            </Link>
             <Link href="/social-media-marketing-services" className="flex items-center gap-1 hover:text-blue-400">
               <IconChevronRight size={16} />Social Media Marketing
             </Link>
            <IconChevronRight size={16} />
            <span className="text-blue-300">Short Video Marketing</span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Short Video <span className="text-blue-400">Marketing</span>
          </motion.h1>

          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Capture attention fast and grow your brand with powerful short-form video marketing.
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
                High-Impact <span className="text-blue-600">Short Video Marketing</span>
              </h2>

              <p className="text-gray-600 text-lg mb-4">
                Short videos are the most engaging content format on social media today.
              </p>

              <p className="text-gray-600 text-lg mb-4">
                We help brands grow faster with creative and conversion-focused short videos.
              </p>

              <p className="text-gray-600 text-lg">
                From Reels to Shorts, we deliver content that drives real engagement.
              </p>
            </motion.div>

            {/* SERVICES */}
            <div>
              <h2 className="text-4xl font-bold mb-10">
                Our <span className="text-blue-600">Short Video Services</span>
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
                Our <span className="text-blue-600">Process</span>
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
                Grow Faster with Short Videos
              </h2>
              <p className="text-blue-100 mb-8">
                Let our team create scroll-stopping short videos for your brand.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold"
              >
                Start Short Video Marketing
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
              <li><Link href="/youtube-marketing-services/">YouTube Marketing</Link></li>
              <li><Link href="/influencer-marketing-services/">Influencer Marketing</Link></li>
              <li className="font-medium text-blue-600">Short Video Marketing</li>
            </ul>
          </aside>

        </div>
      </section>
    </BgLayout>
  );
}
