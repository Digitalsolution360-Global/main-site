"use client";

import BgLayout from "@/components/layout/bgLayout";
import { motion } from "motion/react";
import Link from "next/link";
import {
  IconHome,
  IconChevronRight,
  IconAd,
  IconBrush,
  IconPalette,
  IconRocket,
  IconCheck,
} from "@tabler/icons-react";

export default function CreativeDesignForAdsPage() {
  const services = [
    {
      icon: IconAd,
      title: "Social Media Creatives",
      desc: "Eye-catching visuals optimized for Facebook, Instagram, LinkedIn, and other platforms.",
    },
    {
      icon: IconBrush,
      title: "Display & Banner Ads",
      desc: "High-converting display banners for web campaigns and retargeting ads.",
    },
    {
      icon: IconPalette,
      title: "Video & Motion Graphics",
      desc: "Engaging animated creatives that grab attention and improve campaign results.",
    },
    {
      icon: IconCheck,
      title: "Ad Consistency & Branding",
      desc: "Ensure all ad creatives align with your brand identity and messaging.",
    },
  ];

  const process = [
    "Campaign briefing & objectives",
    "Concept ideation & creative direction",
    "Design & production of ad assets",
    "Internal review & client feedback",
    "Optimization for platforms & formats",
    "Delivery & campaign integration",
  ];

  return (
    <BgLayout>
      {/* ================= HERO ================= */}
      <section className="relative h-[55vh] mt-21 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/services/creative-for-ads-hero.webp"
            alt="Creative Design for Ads"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative z-10 max-w-5xl px-6 text-center text-white">
          <div className="flex justify-center items-center gap-2 text-sm mb-6">
            <Link href="/" className="flex items-center gap-1 hover:text-blue-400">
              <IconHome size={18} /> Home
            </Link>
             <Link href="/branding-services" className="flex items-center gap-1 hover:text-blue-400">
                           <IconChevronRight size={16} />Brand & Creative
                          </Link>
            <IconChevronRight size={16} />
            <span className="text-blue-300">Creative for Ads</span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Creative <span className="text-blue-400">for Ads</span>
          </motion.h1>

          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Engaging ad creatives designed to capture attention, communicate your message, and drive results.
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
                High-Impact <span className="text-blue-600">Ad Creatives</span>
              </h2>

              <p className="text-gray-600 text-lg mb-4">
                Well-designed ad creatives are key to driving clicks, conversions, and ROI.
              </p>

              <p className="text-gray-600 text-lg mb-4">
                Our creative team produces visuals for social media, display ads, and video campaigns that captivate your audience.
              </p>

              <p className="text-gray-600 text-lg">
                Every creative is tailored to your brand, target audience, and campaign objectives.
              </p>
            </motion.div>

            {/* SERVICES */}
            <div>
              <h2 className="text-4xl font-bold mb-10">
                Our <span className="text-blue-600">Ad Creative Services</span>
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
                Ready to Boost Your Ad Performance?
              </h2>
              <p className="text-blue-100 mb-8">
                Let’s create engaging ad creatives that convert your audience into customers.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold"
              >
                Get Ad Creative Consultation
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
              <li className="font-medium text-blue-600">Creative for Ads</li>
              <li><Link href="/performance-creatives/">Performance Creatives</Link></li>
            </ul>
          </aside>

        </div>
      </section>
    </BgLayout>
  );
}
