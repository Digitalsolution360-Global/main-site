"use client";

import BgLayout from "@/components/layout/bgLayout";
import { motion } from "motion/react";
import Link from "next/link";
import {
  IconHome,
  IconChevronRight,
  IconSearch,
  IconChartBar,
  IconTarget,
  IconCheck,
  IconRocket,
} from "@tabler/icons-react";

export default function SEOManagedServicesPage() {
  const services = [
    {
      icon: IconSearch,
      title: "Technical SEO Audits",
      desc: "Comprehensive audits to fix website issues and improve rankings.",
    },
    {
      icon: IconChartBar,
      title: "On-Page SEO Optimization",
      desc: "Optimize pages, meta tags, and content for search engines.",
    },
    {
      icon: IconTarget,
      title: "Keyword Strategy",
      desc: "Research & implement high-impact keywords for organic growth.",
    },
    {
      icon: IconRocket,
      title: "SEO Growth & Reporting",
      desc: "Track performance and continuously optimize for higher visibility.",
    },
  ];

  const process = [
    "Website audit & analysis",
    "Keyword research & targeting",
    "On-page & technical optimization",
    "Content optimization",
    "Performance tracking & reporting",
    "Continuous SEO improvements",
  ];

  return (
    <BgLayout>
      {/* HERO */}
      <section className="relative h-[55vh] mt-21 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/services/seo-managed-hero.webp"
            alt="SEO Managed Services"
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
            <span className="text-blue-300">SEO Managed Services</span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            SEO <span className="text-blue-400">Managed Services</span>
          </motion.h1>

          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Complete SEO management to boost your website rankings, traffic, and leads.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12 items-start">

          {/* LEFT */}
          <div className="lg:col-span-2 space-y-20">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <h2 className="text-4xl font-bold mb-6">
                Expert <span className="text-blue-600">SEO Managed Services</span>
              </h2>
              <p className="text-gray-600 text-lg mb-4">
                Our team handles all aspects of SEO to improve your website's visibility and search performance.
              </p>
              <p className="text-gray-600 text-lg mb-4">
                From technical audits to keyword optimization and content strategy, we cover everything for measurable results.
              </p>
              <p className="text-gray-600 text-lg">
                Let us manage your SEO campaigns while you focus on your business growth.
              </p>
            </motion.div>

            {/* SERVICES */}
            <div>
              <h2 className="text-4xl font-bold mb-10">
                Our <span className="text-blue-600">SEO Services</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {services.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div key={i} whileHover={{ y: -6 }} className="bg-white p-8 rounded-2xl shadow-lg">
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
                Our <span className="text-blue-600">SEO Process</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {process.map((step, i) => (
                  <div key={i} className="flex items-center gap-4 bg-white p-6 rounded-xl shadow">
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
                Let Us Manage Your SEO
              </h2>
              <p className="text-blue-100 mb-8">
                Focus on your business while we handle all aspects of SEO to grow your online presence.
              </p>
              <Link href="/contact" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold">
                Get SEO Managed Services
              </Link>
            </div>

          </div>

          {/* RIGHT SIDEBAR */}
          <aside className="bg-white shadow-xl rounded-2xl p-6 sticky top-28">
            <h3 className="text-xl font-bold mb-4 border-b pb-2">
              Managed Services
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li><Link href="/digital-marketing-managed-services/">Digital Marketing Managed</Link></li>
              <li className="font-medium text-blue-600">SEO Managed Services</li>
              <li><Link href="/ppc-managed-services/">PPC Managed Services</Link></li>
              <li><Link href="/social-media-managed-services/">Social Media Managed</Link></li>
              <li><Link href="/startup-marketing-services/">Startup Marketing</Link></li>
              <li><Link href="/saas-marketing-services/">SaaS Marketing</Link></li>
              <li><Link href="/ecommerce-marketing-services/">Ecommerce Marketing</Link></li>
              <li><Link href="/b2b-digital-marketing-services/">B2B Marketing</Link></li>
            </ul>
          </aside>

        </div>
      </section>
    </BgLayout>
  );
}
