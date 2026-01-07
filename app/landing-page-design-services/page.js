"use client";

import BgLayout from "@/components/layout/bgLayout";
import { motion } from "motion/react";
import Link from "next/link";
import {
  IconHome,
  IconChevronRight,
  IconTrendingUp,
  IconTarget,
  IconChartBar,
  IconRocket,
  IconChartLine,
  IconCheck,
} from "@tabler/icons-react";


export default function LandingPageDesignServicesPage() {
  const services = [
    {
    icon: IconChartBar, // IconLayoutBoard replace
    title: "High-Converting Layouts",
    desc: "Strategic layouts designed to guide users toward conversion.",
  },
  {
    icon: IconTarget, // IconTargetArrow replace
    title: "Conversion-Focused Copy",
    desc: "Persuasive design combined with clear CTAs for better results.",
  },
  {
    icon: IconTrendingUp,
    title: "Speed & Performance Optimization",
    desc: "Fast-loading landing pages that reduce bounce rates.",
  },
  {
    icon: IconChartLine,
    title: "A/B Testing Ready",
    desc: "Pages designed for easy testing and continuous improvement.",
  },
  ];

  const process = [
    "Campaign & goal analysis",
    "Audience & funnel mapping",
    "Wireframe & content structure",
    "Visual design & CTA placement",
    "Performance & responsiveness testing",
    "Launch & optimization support",
  ];

  return (
    <BgLayout>
      {/* ================= HERO ================= */}
      <section className="relative h-[55vh] mt-21 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/services/landing-page-design-hero.webp"
            alt="Landing Page Design Services"
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
            <span className="text-blue-300">Landing Page Design</span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Landing Page <span className="text-blue-400">Design</span>
          </motion.h1>

          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Design landing pages that convert visitors into leads and customers.
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
                Conversion-Driven <span className="text-blue-600">Landing Pages</span>
              </h2>

              <p className="text-gray-600 text-lg mb-4">
                Landing pages play a critical role in digital marketing success.
              </p>

              <p className="text-gray-600 text-lg mb-4">
                We design landing pages focused on speed, clarity and conversions.
              </p>

              <p className="text-gray-600 text-lg">
                Every element is optimized to guide users toward action.
              </p>
            </motion.div>

            {/* SERVICES */}
            <div>
              <h2 className="text-4xl font-bold mb-10">
                Our <span className="text-blue-600">Landing Page Services</span>
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
                Our <span className="text-blue-600">Design Process</span>
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
                Need a High-Converting Landing Page?
              </h2>
              <p className="text-blue-100 mb-8">
                Let’s design a landing page that maximizes your campaign ROI.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold"
              >
                Design My Landing Page
              </Link>
            </div>

          </div>

          {/* RIGHT SIDEBAR */}
          <aside className="bg-white shadow-xl rounded-2xl p-6 sticky top-28">
            <h3 className="text-xl font-bold mb-4 border-b pb-2">
              Website Development
            </h3>

            <ul className="space-y-3 text-gray-700">
              <li>
                <Link href="/website-development-services/">Website Development</Link>
              </li>
              <li>
                <Link href="/web-design-services/">Web Design Services</Link>
              </li>
              <li>
                <Link href="/ui-ux-design-services/">UI / UX Design</Link>
              </li>
              <li>
                <Link href="/wordpress-development-services/">WordPress Development</Link>
              </li>
              <li>
                <Link href="/shopify-development-services/">Shopify Development</Link>
              </li>
              <li className="font-medium text-blue-600">
                Landing Page Design
              </li>
            </ul>
          </aside>

        </div>
      </section>
    </BgLayout>
  );
}
