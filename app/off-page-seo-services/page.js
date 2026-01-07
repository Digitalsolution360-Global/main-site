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

export default function OffPageSEOPage() {
  const services = [
    {
      icon: IconTrendingUp,
      title: "Link Building",
      desc: "High-quality backlinks from authoritative websites to boost your domain authority.",
    },
    {
      icon: IconTargetArrow,
      title: "Social Media Signals",
      desc: "Leveraging social media engagement to enhance SEO performance.",
    },
    {
      icon: IconChartLine,
      title: "Guest Blogging",
      desc: "Publish relevant content on external blogs to drive traffic and backlinks.",
    },
    {
      icon: IconSearch,
      title: "Online Reputation Management",
      desc: "Improve your brand visibility and trustworthiness across the web.",
    },
  ];

  const process = [
    "Off-page audit & competitor analysis",
    "Backlink strategy planning",
    "Guest posting & content outreach",
    "Social media engagement",
    "Reputation management",
    "Tracking & reporting results",
  ];

  return (
    <BgLayout>
      {/* ================= HERO ================= */}
      <section className="relative h-[55vh] mt-21 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/services/off-page-seo-hero.webp"
            alt="Off-Page SEO Services"
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
            <span className="text-blue-300">Off-Page SEO</span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Off-Page <span className="text-blue-400">SEO</span>
          </motion.h1>

          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Enhance your website authority, traffic, and rankings through effective off-page SEO strategies.
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
                Strengthen Your Website with <span className="text-blue-600">Off-Page SEO</span>
              </h2>

              <p className="text-gray-600 text-lg mb-4">
                Off-Page SEO focuses on building your website’s authority, trust, and reach across the web.
              </p>

              <p className="text-gray-600 text-lg mb-4">
                Our off-page strategies include backlinks, guest posts, social signals, and reputation management.
              </p>

              <p className="text-gray-600 text-lg">
                These tactics work hand-in-hand with on-page SEO to improve your rankings and visibility.
              </p>
            </motion.div>

            {/* SERVICES */}
            <div>
              <h2 className="text-4xl font-bold mb-10">
                Our <span className="text-blue-600">Off-Page SEO Services</span>
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
                Our <span className="text-blue-600">Off-Page SEO Process</span>
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
                Want More Authority & Traffic?
              </h2>
              <p className="text-blue-100 mb-8">
                Let our off-page SEO experts help you build links, brand trust, and organic traffic.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold"
              >
                Get Off-Page SEO Consultation
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
              <li><Link href="/local-seo-services/">Local SEO</Link></li>
              <li><Link href="/ecommerce-seo-services/">Ecommerce SEO</Link></li>
              <li><Link href="/technical-seo-services/">Technical SEO</Link></li>
              <li><Link href="/on-page-seo-services/">On-Page SEO</Link></li>
              <li className="font-medium text-blue-600">Off-Page SEO</li>
              <li><Link href="/seo-audit-services/">SEO Audit</Link></li>
              <li><Link href="/ai-seo-services/">AI SEO</Link></li>
            </ul>
          </aside>

        </div>
      </section>
    </BgLayout>
  );
}
