"use client";

import BgLayout from "@/components/layout/bgLayout";
import { motion } from "motion/react";
import Link from "next/link";
import {
  IconHome,
  IconChevronRight,
  IconAd,
  IconTrendingUp,
  IconTarget,
  IconCheck,
  IconRocket,
} from "@tabler/icons-react";

export default function PPCManagedServicesPage() {
  const services = [
    {
      icon: IconAd,
      title: "PPC Campaign Setup",
      desc: "Set up high-performing PPC campaigns to drive targeted traffic and leads.",
    },
    {
      icon: IconTrendingUp,
      title: "Conversion Optimization",
      desc: "Optimize campaigns for maximum ROI and cost-effective conversions.",
    },
    {
      icon: IconTarget,
      title: "Targeted Ads Strategy",
      desc: "Reach the right audience with precise targeting and segmentation.",
    },
    {
      icon: IconCheck,
      title: "Analytics & Reporting",
      desc: "Track KPIs, generate insights, and refine campaigns for better results.",
    },
  ];

  const process = [
    "Analyze business goals & target audience",
    "Keyword & competitor research",
    "Campaign setup & targeting",
    "Ad copy & creative optimization",
    "Monitor, report & analyze performance",
    "Refine & optimize campaigns",
  ];

  return (
    <BgLayout>
      {/* ================= HERO ================= */}
      <section className="relative h-[55vh] mt-21 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/services/ppc-managed-hero.webp"
            alt="PPC Managed Services"
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
            <span className="text-blue-300">PPC Managed Services</span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            PPC <span className="text-blue-400">Managed Services</span>
          </motion.h1>

          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Maximize ROI and reach your audience effectively with our professional PPC managed services.
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
                Professional <span className="text-blue-600">PPC Services</span>
              </h2>

              <p className="text-gray-600 text-lg mb-4">
                PPC advertising is a powerful way to drive targeted traffic and increase leads quickly.
              </p>

              <p className="text-gray-600 text-lg mb-4">
                Our managed PPC services focus on creating effective campaigns that deliver measurable results.
              </p>

              <p className="text-gray-600 text-lg">
                From setup to optimization, we manage every step to ensure maximum ROI.
              </p>
            </motion.div>

            {/* SERVICES */}
            <div>
              <h2 className="text-4xl font-bold mb-10">
                Our <span className="text-blue-600">PPC Services</span>
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
                Start Your PPC Campaign Today
              </h2>
              <p className="text-blue-100 mb-8">
                Let our experts manage your PPC campaigns for maximum performance and ROI.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold"
              >
                Get PPC Managed Services
              </Link>
            </div>

          </div>

          {/* RIGHT SIDEBAR */}
          <aside className="bg-white shadow-xl rounded-2xl p-6 sticky top-28">
            <h3 className="text-xl font-bold mb-4 border-b pb-2">
              Managed Services
            </h3>

            <ul className="space-y-3 text-gray-700">
              <li>
                <Link href="/digital-marketing-managed-services/">Digital Marketing Managed</Link>
              </li>
              <li>
                <Link href="/seo-managed-services/">SEO Managed Services</Link>
              </li>
              <li className="font-medium text-blue-600">
                PPC Managed Services
              </li>
              <li>
                <Link href="/social-media-managed-services/">Social Media Managed</Link>
              </li>
              <li>
                <Link href="/startup-marketing-services/">Startup Marketing</Link>
              </li>
              <li>
                <Link href="/saas-marketing-services/">SaaS Marketing</Link>
              </li>
              <li>
                <Link href="/ecommerce-marketing-services/">Ecommerce Marketing</Link>
              </li>
              <li>
                <Link href="/b2b-digital-marketing-services/">B2B Marketing</Link>
              </li>
            </ul>
          </aside>

        </div>
      </section>
    </BgLayout>
  );
}
