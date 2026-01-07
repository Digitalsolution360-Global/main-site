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

export default function GoogleAdsManagementPage() {
  const services = [
    {
      icon: IconTarget,
      title: "Search & Display Ads",
      desc: "High-intent search and targeted display campaigns for maximum conversions.",
    },
    {
      icon: IconChartBar,
      title: "Keyword & Bid Optimization",
      desc: "Smart keyword research and bid strategies to lower CPC and improve ROI.",
    },
    {
      icon: IconTrendingUp,
      title: "Conversion Tracking",
      desc: "Accurate tracking for leads, sales, and ROAS across all campaigns.",
    },
    {
      icon: IconRocket,
      title: "Performance Scaling",
      desc: "Scale winning campaigns while eliminating wasted ad spend.",
    },
  ];

  const process = [
    "Account & competitor analysis",
    "Keyword research & intent mapping",
    "Campaign & ad copy creation",
    "Conversion & tracking setup",
    "Ongoing optimization & A/B testing",
    "Scaling high-performing ads",
  ];

  return (
    <BgLayout>
      {/* ================= HERO ================= */}
      <section className="relative h-[55vh] mt-21 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/services/google-ads-management-hero.webp"
            alt="Google Ads Management Services"
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
            <span className="text-blue-300">Google Ads Management</span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Google Ads <span className="text-blue-400">Management</span>
          </motion.h1>

          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Drive instant traffic, high-quality leads, and measurable ROI with
            expertly managed Google Ads campaigns.
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
                Why Choose Our <span className="text-blue-600">Google Ads Services?</span>
              </h2>

              <p className="text-gray-600 text-lg mb-4">
                Google Ads is one of the fastest ways to reach customers who are
                actively searching for your products or services.
              </p>

              <p className="text-gray-600 text-lg mb-4">
                Our team focuses on quality traffic, strong conversion rates,
                and lower acquisition costs.
              </p>

              <p className="text-gray-600 text-lg">
                Every campaign is optimized to deliver consistent and scalable ROI.
              </p>
            </motion.div>

            {/* SERVICES */}
            <div>
              <h2 className="text-4xl font-bold mb-10">
                What We <span className="text-blue-600">Manage</span>
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
                Our <span className="text-blue-600">Google Ads Process</span>
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
                Ready to Launch Profitable Google Ads?
              </h2>
              <p className="text-blue-100 mb-8">
                Let our experts manage and optimize your Google Ads for maximum ROI.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold"
              >
                Start Google Ads
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
              <li className="font-medium text-blue-600">
                Google Ads Management
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
