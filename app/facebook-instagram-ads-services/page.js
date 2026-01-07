"use client";

import BgLayout from "@/components/layout/bgLayout";
import { motion } from "motion/react";
import Link from "next/link";
import {
  IconHome,
  IconChevronRight,
  IconTarget,
  IconChartBar,
  IconTrendingUp,
  IconRocket,
  IconCheck,
} from "@tabler/icons-react";

export default function FacebookInstagramAdsPage() {
  const services = [
    {
      icon: IconTarget,
      title: "Audience Targeting",
      desc: "Reach the right people using interest, behavior, and lookalike targeting.",
    },
    {
      icon: IconChartBar,
      title: "Creative Ad Campaigns",
      desc: "High-performing creatives optimized for engagement and conversions.",
    },
    {
      icon: IconTrendingUp,
      title: "Conversion Optimization",
      desc: "Lower CPA and higher ROAS through continuous testing and optimization.",
    },
    {
      icon: IconRocket,
      title: "Scalable Social Growth",
      desc: "Scale winning ads across Facebook and Instagram seamlessly.",
    },
  ];

  const process = [
    "Audience research & segmentation",
    "Creative & copy strategy",
    "Campaign & funnel setup",
    "Pixel & conversion tracking",
    "Creative & budget optimization",
    "Scaling profitable campaigns",
  ];

  return (
    <BgLayout>
      {/* ================= HERO ================= */}
      <section className="relative h-[55vh] mt-21 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/services/facebook-instagram-ads-hero.webp"
            alt="Facebook & Instagram Ads Services"
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
            <span className="text-blue-300">Facebook & Instagram Ads</span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Facebook & Instagram <span className="text-blue-400">Ads</span>
          </motion.h1>

          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Drive awareness, leads, and sales with high-converting Facebook and
            Instagram advertising campaigns.
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
                Why Invest in <span className="text-blue-600">Social Media Ads?</span>
              </h2>

              <p className="text-gray-600 text-lg mb-4">
                Facebook and Instagram ads allow you to reach highly targeted
                audiences at scale.
              </p>

              <p className="text-gray-600 text-lg mb-4">
                From brand awareness to conversions, social ads drive measurable growth.
              </p>

              <p className="text-gray-600 text-lg">
                Our strategy ensures consistent performance and profitable scaling.
              </p>
            </motion.div>

            {/* SERVICES */}
            <div>
              <h2 className="text-4xl font-bold mb-10">
                What We <span className="text-blue-600">Deliver</span>
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
                Our <span className="text-blue-600">Ad Management Process</span>
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
                Ready to Scale with Social Ads?
              </h2>
              <p className="text-blue-100 mb-8">
                Launch high-performing Facebook & Instagram ad campaigns today.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold"
              >
                Start Social Advertising
              </Link>
            </div>

          </div>

          {/* RIGHT SIDEBAR */}
          <aside className="bg-white shadow-xl rounded-2xl p-6 sticky top-28">
            <h3 className="text-xl font-bold mb-4 border-b pb-2">
              Digital Marketing
            </h3>

            <ul className="space-y-3 text-gray-700">
              <li>
                <Link href="/digital-marketing-services/">
                  Digital Marketing Services
                </Link>
              </li>
              <li>
                <Link href="/performance-marketing-services/">
                  Performance Marketing
                </Link>
              </li>
              <li>
                <Link href="/growth-marketing-services/">
                  Growth Marketing
                </Link>
              </li>
              <li>
                <Link href="/google-ads-management-services/">
                  Google Ads Management
                </Link>
              </li>
              <li className="font-medium text-blue-600">
                Facebook & Instagram Ads
              </li>
            </ul>
          </aside>

        </div>
      </section>
    </BgLayout>
  );
}
