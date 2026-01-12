"use client";

import BgLayout from "@/components/layout/bgLayout";
import { motion } from "motion/react";
import Link from "next/link";
import {
  IconHome,
  IconChevronRight,
  IconBuildingStore,
  IconTrendingUp,
  IconUsers,
  IconCheck,
  IconRocket,
} from "@tabler/icons-react";

export default function B2BMarketingPage() {
  const services = [
    {
      icon: IconBuildingStore,
      title: "B2B Lead Generation",
      desc: "Targeted strategies to generate high-quality leads for your B2B business.",
    },
    {
      icon: IconTrendingUp,
      title: "Account-Based Marketing",
      desc: "Personalized campaigns for high-value accounts to drive engagement and conversions.",
    },
    {
      icon: IconUsers,
      title: "Customer Acquisition & Retention",
      desc: "Engage the right decision-makers and nurture long-term relationships.",
    },
    {
      icon: IconCheck,
      title: "Analytics & Optimization",
      desc: "Measure performance and continuously improve your B2B marketing ROI.",
    },
  ];

  const process = [
    "Understand your B2B business & target audience",
    "Develop account-based marketing strategies",
    "Launch campaigns to generate qualified leads",
    "Engage decision-makers & nurture relationships",
    "Track KPIs and analyze campaign performance",
    "Optimize marketing efforts for higher ROI",
  ];

  return (
    <BgLayout>
      {/* ================= HERO ================= */}
      <section className="relative h-[55vh] mt-21 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/services/b2b-marketing-hero.webp"
            alt="B2B Marketing Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative z-10 max-w-5xl px-6 text-center text-white">
          <div className="flex justify-center items-center gap-2 text-sm mb-6">
            <Link href="/" className="flex items-center gap-1 hover:text-blue-400">
              <IconHome size={18} /> Home
            </Link>
             <Link href="/digital-marketing-managed-services" className="flex items-center gap-1 hover:text-blue-400">
                          <IconChevronRight size={16} />Managed Services
                           </Link>
            <IconChevronRight size={16} />
            <span className="text-blue-300">B2B Marketing</span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            B2B <span className="text-blue-400">Marketing</span>
          </motion.h1>

          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Drive growth, acquire leads, and build strong relationships with decision-makers using expert B2B marketing strategies.
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
                Expert <span className="text-blue-600">B2B Marketing</span>
              </h2>

              <p className="text-gray-600 text-lg mb-4">
                We specialize in marketing solutions for B2B businesses that help you generate leads and grow revenue.
              </p>

              <p className="text-gray-600 text-lg mb-4">
                From account-based campaigns to lead nurturing, we create strategies that connect with decision-makers and convert them into customers.
              </p>

              <p className="text-gray-600 text-lg">
                Our B2B marketing services are designed to maximize ROI and long-term business growth.
              </p>
            </motion.div>

            {/* SERVICES */}
            <div>
              <h2 className="text-4xl font-bold mb-10">
                Our <span className="text-blue-600">Services</span>
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
                Boost Your B2B Growth
              </h2>
              <p className="text-blue-100 mb-8">
                Let our experts manage your B2B marketing campaigns to generate qualified leads and drive business growth.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold"
              >
                Start B2B Marketing
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
              <li>
                <Link href="/ppc-managed-services/">PPC Managed Services</Link>
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
              <li className="font-medium text-blue-600">
                B2B Marketing
              </li>
            </ul>
          </aside>

        </div>
      </section>
    </BgLayout>
  );
}
