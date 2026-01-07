"use client";

import BgLayout from "@/components/layout/bgLayout";
import { motion } from "motion/react";
import Link from "next/link";
import {
  IconHome,
  IconChevronRight,
  IconRocket,
  IconChartBar,
  IconBrush,
  IconPalette,
  IconCheck,
} from "@tabler/icons-react";

export default function PerformanceCreativesPage() {
  const services = [
    {
      icon: IconChartBar,
      title: "Ad Performance Optimization",
      desc: "Data-driven creatives designed to maximize campaign ROI and engagement.",
    },
    {
      icon: IconRocket,
      title: "Conversion-Focused Designs",
      desc: "Creatives that guide audiences towards taking the desired actions.",
    },
    {
      icon: IconBrush,
      title: "Visual Storytelling",
      desc: "Engaging visuals that communicate your brand message effectively.",
    },
    {
      icon: IconPalette,
      title: "Cross-Platform Creative Assets",
      desc: "Optimized creatives for social media, display, email, and web campaigns.",
    },
  ];

  const process = [
    "Analyze campaign objectives & KPIs",
    "Design creative concepts based on data insights",
    "Develop multiple creative variations",
    "A/B testing & performance evaluation",
    "Optimize creatives for maximum conversions",
    "Deliver final assets & reporting",
  ];

  return (
    <BgLayout>
      {/* ================= HERO ================= */}
      <section className="relative h-[55vh] mt-21 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/services/performance-creatives-hero.webp"
            alt="Performance Creatives"
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
            <span className="text-blue-300">Performance Creatives</span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            <span className="text-blue-400">Performance</span> Creatives
          </motion.h1>

          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Creatives designed to boost ad performance, engagement, and conversions across all digital platforms.
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
                Maximize <span className="text-blue-600">Ad Performance</span>
              </h2>

              <p className="text-gray-600 text-lg mb-4">
                Performance-driven creatives ensure your campaigns achieve measurable results.
              </p>

              <p className="text-gray-600 text-lg mb-4">
                We combine creative strategy with analytics to design visuals that drive clicks, conversions, and engagement.
              </p>

              <p className="text-gray-600 text-lg">
                Every creative is tested and optimized to maximize ROI across platforms.
              </p>
            </motion.div>

            {/* SERVICES */}
            <div>
              <h2 className="text-4xl font-bold mb-10">
                Our <span className="text-blue-600">Performance Creative Services</span>
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
                Our <span className="text-blue-600">Creative Process</span>
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
                Ready to Boost Your Campaigns?
              </h2>
              <p className="text-blue-100 mb-8">
                Let’s design performance creatives that drive conversions and maximize ROI.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold"
              >
                Get Performance Creative Consultation
              </Link>
            </div>

          </div>

          {/* RIGHT SIDEBAR */}
          <aside className="bg-white shadow-xl rounded-2xl p-6 sticky top-28">
            <h3 className="text-xl font-bold mb-4 border-b pb-2">
              Brand & Creative
            </h3>

            <ul className="space-y-3 text-gray-700">
              <li><Link href="/branding-services/">Branding Services</Link></li>
              <li><Link href="/brand-identity-design/">Brand Identity Design</Link></li>
              <li><Link href="/logo-design-services/">Logo Design</Link></li>
              <li><Link href="/graphic-design-services/">Graphic Design</Link></li>
              <li><Link href="/creative-design-for-ads/">Creative for Ads</Link></li>
              <li className="font-medium text-blue-600">Performance Creatives</li>
            </ul>
          </aside>

        </div>
      </section>
    </BgLayout>
  );
}
