"use client";

import BgLayout from "@/components/layout/bgLayout";
import { motion } from "motion/react";
import Link from "next/link";
import {
  IconHome,
  IconChevronRight,
  IconBriefcase,
  IconTargetArrow,
  IconSettings,
  IconChartBar,
  IconCheck,
  IconRocket,
} from "@tabler/icons-react";

export default function CampaignOwnershipPage() {
  const services = [
    {
      icon: IconBriefcase,
      title: "End-to-End Campaign Management",
      desc: "We take full responsibility for planning, executing, and managing your campaigns.",
    },
    {
      icon: IconTargetArrow,
      title: "Goal-Oriented Campaign Strategy",
      desc: "Every campaign is aligned with clear business goals, KPIs, and growth targets.",
    },
    {
      icon: IconSettings,
      title: "Multi-Channel Execution",
      desc: "Seamless execution across paid ads, organic channels, and performance platforms.",
    },
    {
      icon: IconChartBar,
      title: "Continuous Optimization",
      desc: "Real-time monitoring and optimization to maximize conversions and ROI.",
    },
  ];

  const process = [
    "Campaign requirement & objective analysis",
    "Strategy, messaging & channel planning",
    "Campaign setup & execution",
    "Monitoring, testing & optimization",
    "Reporting & performance scaling",
  ];

  return (
    <BgLayout>
      {/* ================= HERO ================= */}
      <section className="relative h-[55vh] mt-21 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/services/campaign-ownership-hero.webp"
            alt="Campaign Ownership"
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
            <span className="text-blue-300">Campaign Ownership</span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Campaign <span className="text-blue-400">Ownership</span>
          </motion.h1>

          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            One team. One owner. Complete accountability for your campaign success.
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
                What is <span className="text-blue-600">Campaign Ownership?</span>
              </h2>

              <p className="text-gray-600 text-lg mb-4">
                Campaign ownership means we manage your campaigns as if they were our own.
              </p>

              <p className="text-gray-600 text-lg mb-4">
                From strategy to execution and optimization, we take full accountability.
              </p>

              <p className="text-gray-600 text-lg">
                You get clarity, transparency, and results—without managing multiple vendors.
              </p>
            </motion.div>

            {/* SERVICES */}
            <div>
              <h2 className="text-4xl font-bold mb-10">
                Our <span className="text-blue-600">Campaign Services</span>
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
                Our <span className="text-blue-600">Campaign Process</span>
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
                Want Us to Own Your Campaigns?
              </h2>
              <p className="text-blue-100 mb-8">
                Focus on your business while we manage and scale your campaigns.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold"
              >
                Get Free Consultation
              </Link>
            </div>

          </div>

          {/* RIGHT SIDEBAR */}
          <aside className="bg-white shadow-xl rounded-2xl p-6 sticky top-28">
            <h3 className="text-xl font-bold mb-4 border-b pb-2">
              Marketing & Growth Management
            </h3>

            <ul className="space-y-3 text-gray-700">
              <li>
                <Link href="/full-funnel-growth-management">
                  Full-Funnel Growth Management
                </Link>
              </li>
              <li className="font-medium text-blue-600">
                Campaign Ownership
              </li>
              <li>
                <Link href="/roi-kpi-tracking">ROI & KPI Tracking</Link>
              </li>
              <li>
                <Link href="/quarterly-growth-planning">
                  Quarterly Growth Planning
                </Link>
              </li>
            </ul>
          </aside>

        </div>
      </section>
    </BgLayout>
  );
}
