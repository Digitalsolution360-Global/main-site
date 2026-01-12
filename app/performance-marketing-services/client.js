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

export default function PerformanceMarketingPage() {
  const services = [
    {
      icon: IconTarget,
      title: "ROI-Focused Campaigns",
      desc: "Every campaign is built to maximize ROI, conversions, and revenue.",
    },
    {
      icon: IconChartBar,
      title: "Data-Driven Decisions",
      desc: "We use real-time data and analytics to optimize performance continuously.",
    },
    {
      icon: IconTrendingUp,
      title: "Conversion Optimization",
      desc: "Improve CTR, CPL, and CPA through A/B testing and funnel optimization.",
    },
    {
      icon: IconRocket,
      title: "Scalable Growth",
      desc: "Scale winning campaigns confidently without wasting ad spend.",
    },
  ];

  const process = [
    "Audience & market research",
    "Funnel & conversion mapping",
    "Campaign setup & tracking",
    "Daily performance monitoring",
    "Creative & bid optimization",
    "Scaling profitable campaigns",
  ];

  return (
    <BgLayout>
      {/* ================= HERO ================= */}
      <section className="relative h-[55vh] mt-21 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/services/performance-marketing-hero.webp"
            alt="Performance Marketing Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative z-10 max-w-5xl px-6 text-center text-white">
          <div className="flex justify-center items-center gap-2 text-sm mb-6">
            <Link href="/" className="flex items-center gap-1 hover:text-blue-400">
              <IconHome size={18} /> Home
            </Link>
              <Link href="/digital-marketing-services" className="flex items-center gap-1 hover:text-blue-400">
              <IconChevronRight size={16} /> Digital Marketing
            </Link>
            
            <IconChevronRight size={16} />
            <span className="text-blue-300">Performance Marketing</span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Performance <span className="text-blue-400">Marketing</span>
          </motion.h1>

          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Measurable, scalable, and ROI-driven marketing that delivers real
            business growth.
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
                What is <span className="text-blue-600">Performance Marketing?</span>
              </h2>

              <p className="text-gray-600 text-lg mb-4">
                Performance marketing focuses on measurable outcomes such as
                leads, sales, and revenue.
              </p>

              <p className="text-gray-600 text-lg mb-4">
                You only invest in strategies that deliver real, trackable
                results.
              </p>

              <p className="text-gray-600 text-lg">
                Our approach ensures every rupee spent contributes to business
                growth.
              </p>
            </motion.div>

            {/* SERVICES */}
            <div>
              <h2 className="text-4xl font-bold mb-10">
                Our <span className="text-blue-600">Performance Solutions</span>
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
                Our <span className="text-blue-600">Execution Process</span>
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
                Want Results-Driven Marketing?
              </h2>
              <p className="text-blue-100 mb-8">
                Let’s build high-performing campaigns that generate real ROI.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold"
              >
                Start Performance Marketing
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
              <li className="font-medium text-blue-600">
                Performance Marketing
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
              <li>
                <Link href="/facebook-instagram-ads-services/">
                  Facebook & Instagram Ads
                </Link>
              </li>
            </ul>
          </aside>

        </div>
      </section>
    </BgLayout>
  );
}
