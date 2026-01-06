"use client";

import BgLayout from "@/components/layout/bgLayout";
import { motion } from "motion/react";
import Link from "next/link";
import {
  IconHome,
  IconChevronRight,
  IconBrandYoutube,
  IconVideo,
  IconTargetArrow,
  IconCheck,
  IconRocket,
} from "@tabler/icons-react";

export default function YouTubeAdvertisingPage() {
  const services = [
    {
      icon: IconBrandYoutube,
      title: "In-Stream Video Ads",
      desc: "Skippable and non-skippable video ads that play before, during, or after YouTube videos to maximize brand reach.",
    },
    {
      icon: IconVideo,
      title: "In-Feed Video Ads",
      desc: "Appear in YouTube search results and recommended feeds to attract users actively exploring content.",
    },
    {
      icon: IconTargetArrow,
      title: "YouTube Remarketing",
      desc: "Reconnect with users who have interacted with your brand, website, or videos for higher conversions.",
    },
  ];

  const process = [
    "Audience & intent analysis",
    "Creative strategy & video planning",
    "Campaign setup & targeting",
    "Conversion & event tracking",
    "Performance optimization & scaling",
  ];

  return (
    <BgLayout>
      {/* ================= HERO ================= */}
      <section className="relative h-[55vh] mt-21 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/services/youtube-ads-hero.webp"
            alt="YouTube Advertising Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative z-10 max-w-5xl px-6 text-center text-white">
          <div className="flex justify-center items-center gap-2 text-sm mb-6">
            <Link href="/" className="flex items-center gap-1 hover:text-blue-600">
              <IconHome size={18} /> Home
            </Link>
            <IconChevronRight size={16} />
            <span className="text-blue-300">YouTube Advertising</span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            YouTube <span className="text-blue-400">Advertising</span> That Drives
            Results
          </motion.h1>

          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Reach, engage, and convert your audience with powerful video
            advertising on the world’s largest video platform.
          </p>
        </div>
      </section>

      {/* ================= CONTENT + SIDEBAR ================= */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12 items-start">

          {/* ================= LEFT CONTENT ================= */}
          <div className="lg:col-span-2 space-y-20">

            {/* INTRO */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl font-bold mb-6">
                Why <span className="text-blue-600">YouTube Advertising?</span>
              </h2>

              <p className="text-gray-600 text-lg mb-4">
                YouTube advertising allows brands to tell powerful stories using
                video while reaching users based on intent, interests, and
                behavior.
              </p>

              <p className="text-gray-600 text-lg mb-4">
                With advanced targeting options and measurable performance,
                YouTube Ads help you build awareness, drive traffic, and generate
                conversions at scale.
              </p>

              <p className="text-gray-600 text-lg">
                Our team creates data-driven YouTube ad strategies that combine
                creativity with performance marketing expertise.
              </p>
            </motion.div>

            {/* SERVICES */}
            <div>
              <h2 className="text-4xl font-bold mb-10">
                Our <span className="text-blue-600">YouTube Ad Services</span>
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

            {/* WHO IS THIS FOR */}
            <div>
              <h2 className="text-4xl font-bold mb-10">
                Who Should Use <span className="text-blue-600">YouTube Ads?</span>
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "Brands building video-first marketing",
                  "Businesses launching new products",
                  "Ecommerce brands boosting awareness",
                  "Startups increasing brand recall",
                  "Enterprises scaling reach globally",
                  "Companies focused on engagement & ROI",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white p-6 rounded-xl shadow flex items-center gap-4"
                  >
                    <IconTargetArrow className="text-blue-600" />
                    <span className="text-lg font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-3xl p-12 text-center">
              <IconRocket size={48} className="mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">
                Ready to Grow with YouTube Advertising?
              </h2>
              <p className="text-blue-100 mb-8">
                Let us build video campaigns that engage, convert, and scale
                your brand.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold"
              >
                Get Free Consultation
              </Link>
            </div>

          </div>

          {/* ================= RIGHT SIDEBAR ================= */}
          <aside className="bg-white shadow-xl rounded-2xl p-6 sticky top-28">
            <h3 className="text-xl font-bold mb-4 border-b pb-2">
              Performance Marketing
            </h3>

            <ul className="space-y-3 text-gray-700">
              <li>
                <Link href="/google-search-display-and-shopping-ads">
                  Google Search, Display & Shopping Ads
                </Link>
              </li>
              <li className="font-medium text-blue-600">
                YouTube Advertising
              </li>
              <li><Link href="/meta-ads">Meta Ads</Link></li>
              <li><Link href="/linkedin-ads">LinkedIn Ads</Link></li>
              <li><Link href="/twitter-pinterest-ads">Twitter & Pinterest Ads</Link></li>
              <li><Link href="/native-programmatic-ads">Native & Programmatic Ads</Link></li>
              <li><Link href="/app-install-campaigns">App Install Campaigns</Link></li>
            </ul>
          </aside>

        </div>
      </section>
    </BgLayout>
  );
}
