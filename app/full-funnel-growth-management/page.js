"use client";

import BgLayout from "@/components/layout/bgLayout";
import { motion } from "motion/react";
import Link from "next/link";
import {
  IconHome,
  IconChevronRight,
  IconChartFunnel,
  IconTargetArrow,
  IconTrendingUp,
  IconChartBar,
  IconCheck,
  IconRocket,
} from "@tabler/icons-react";

export default function FullFunnelGrowthManagementPage() {
  const services = [
    {
      icon: IconChartFunnel,
      title: "End-to-End Funnel Strategy",
      desc: "Complete growth strategy covering awareness, acquisition, activation, retention, and revenue.",
    },
    {
      icon: IconTargetArrow,
      title: "Audience Targeting & Acquisition",
      desc: "Right audience targeting using data-driven paid & organic acquisition strategies.",
    },
    {
      icon: IconTrendingUp,
      title: "Conversion & Retention Optimization",
      desc: "Improve conversions and customer retention through funnel optimization techniques.",
    },
    {
      icon: IconChartBar,
      title: "Performance & Revenue Growth",
      desc: "Continuous optimization focused on sustainable revenue and business growth.",
    },
  ];

  const process = [
    "Business & funnel audit",
    "Growth strategy & KPI definition",
    "Multi-channel execution",
    "Conversion & retention optimization",
    "Performance tracking & scaling",
  ];

  return (
    <BgLayout>
      {/* ================= HERO ================= */}
      <section className="relative h-[55vh] mt-21 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/services/full-funnel-growth-hero.webp"
            alt="Full Funnel Growth Management"
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
            <span className="text-blue-300">Full-Funnel Growth Management</span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Full-Funnel <span className="text-blue-400">Growth Management</span>
          </motion.h1>

          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Scale your business with a complete, data-driven growth strategy across the entire funnel.
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
                What is <span className="text-blue-600">Full-Funnel Growth?</span>
              </h2>

              <p className="text-gray-600 text-lg mb-4">
                Full-funnel growth management focuses on optimizing every stage of the customer journey.
              </p>

              <p className="text-gray-600 text-lg mb-4">
                From brand awareness to conversions and long-term retention, we manage it all.
              </p>

              <p className="text-gray-600 text-lg">
                Our approach ensures sustainable growth, measurable ROI, and predictable scaling.
              </p>
            </motion.div>

            {/* SERVICES */}
            <div>
              <h2 className="text-4xl font-bold mb-10">
                Our <span className="text-blue-600">Growth Services</span>
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
                Our <span className="text-blue-600">Growth Process</span>
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
                Ready to Scale Your Growth?
              </h2>
              <p className="text-blue-100 mb-8">
                Let’s build a complete growth engine for your business.
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
              <li className="font-medium text-blue-600">
                Full-Funnel Growth Management
              </li>
              <li>
                <Link href="/campaign-ownership">Campaign Ownership</Link>
              </li>
              <li>
                <Link href="/roi-kpi-tracking">ROI & KPI Tracking</Link>
              </li>
              <li>
                <Link href="/quarterly-growth-planning">Quarterly Growth Planning</Link>
              </li>
            </ul>
          </aside>

        </div>
      </section>
    </BgLayout>
  );
}

