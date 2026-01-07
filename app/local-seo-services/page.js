"use client";

import BgLayout from "@/components/layout/bgLayout";
import { motion } from "motion/react";
import Link from "next/link";
import {
  IconHome,
  IconChevronRight,
  IconSearch,
  IconTargetArrow,
  IconTrendingUp,
  IconChartLine,
  IconCheck,
  IconRocket,
} from "@tabler/icons-react";

export default function LocalSEOPage() {
  const services = [
    {
      icon: IconSearch,
      title: "Google My Business Optimization",
      desc: "Optimize your GMB profile to rank higher in local searches.",
    },
    {
      icon: IconTargetArrow,
      title: "Local Keyword Research",
      desc: "Find keywords that bring customers near your business location.",
    },
    {
      icon: IconTrendingUp,
      title: "Local Ranking Growth",
      desc: "Improve your visibility in local search results consistently.",
    },
    {
      icon: IconChartLine,
      title: "Reviews & Reputation Management",
      desc: "Boost your local reputation with positive reviews and engagement.",
    },
  ];

  const process = [
    "Local business & competitor analysis",
    "Keyword & location targeting",
    "GMB & local profile optimization",
    "On-page local SEO improvements",
    "Citation & link building",
    "Monitoring, reporting & optimization",
  ];

  return (
    <BgLayout>
      {/* ================= HERO ================= */}
      <section className="relative h-[55vh] mt-21 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/services/local-seo-hero.webp"
            alt="Local SEO Services"
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
            <span className="text-blue-300">Local SEO</span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Local <span className="text-blue-400">SEO</span>
          </motion.h1>

          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Grow your business locally with targeted SEO strategies that bring nearby customers to your door.
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
                Result-Oriented <span className="text-blue-600">Local SEO</span>
              </h2>

              <p className="text-gray-600 text-lg mb-4">
                Local SEO helps your business appear in search results for people nearby, driving more foot traffic and leads.
              </p>

              <p className="text-gray-600 text-lg mb-4">
                Our local SEO services focus on optimizing your online presence to target local customers effectively.
              </p>

              <p className="text-gray-600 text-lg">
                We ensure your business ranks in maps, local listings, and organic search results for maximum visibility.
              </p>
            </motion.div>

            {/* SERVICES */}
            <div>
              <h2 className="text-4xl font-bold mb-10">
                Our <span className="text-blue-600">Local SEO Services</span>
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
                Our <span className="text-blue-600">Local SEO Process</span>
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
                Want More Local Customers?
              </h2>
              <p className="text-blue-100 mb-8">
                Let our Local SEO experts grow your visibility and leads in your area.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold"
              >
                Get Local SEO Consultation
              </Link>
            </div>

          </div>

          {/* RIGHT SIDEBAR */}
          <aside className="bg-white shadow-xl rounded-2xl p-6 sticky top-28">
            <h3 className="text-xl font-bold mb-4 border-b pb-2">
              SEO Services
            </h3>

            <ul className="space-y-3 text-gray-700">
              <li><Link href="/seo-services/">SEO Services</Link></li>
              <li className="font-medium text-blue-600">Local SEO</li>
              <li><Link href="/ecommerce-seo-services/">Ecommerce SEO</Link></li>
              <li><Link href="/technical-seo-services/">Technical SEO</Link></li>
              <li><Link href="/on-page-seo-services/">On-Page SEO</Link></li>
              <li><Link href="/off-page-seo-services/">Off-Page SEO</Link></li>
              <li><Link href="/seo-audit-services/">SEO Audit</Link></li>
              <li><Link href="/ai-seo-services/">AI SEO</Link></li>
            </ul>
          </aside>

        </div>
      </section>
    </BgLayout>
  );
}
