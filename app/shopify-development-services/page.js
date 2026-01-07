"use client";

import BgLayout from "@/components/layout/bgLayout";
import { motion } from "motion/react";
import Link from "next/link";
import {
  IconHome,
  IconChevronRight,
  IconBrandShopify,
  IconShoppingCart,
  IconSettings,
  IconTrendingUp,
  IconCheck,
  IconRocket,
} from "@tabler/icons-react";

export default function ShopifyDevelopmentServicesPage() {
  const services = [
    {
      icon: IconBrandShopify,
      title: "Custom Shopify Store Development",
      desc: "High-converting Shopify stores tailored to your brand and business goals.",
    },
    {
      icon: IconShoppingCart,
      title: "Shopify Theme Customization",
      desc: "Unique storefront designs with optimized user experience.",
    },
    {
      icon: IconSettings,
      title: "App Integration & Customization",
      desc: "Integrate and customize Shopify apps for advanced functionality.",
    },
    {
      icon: IconTrendingUp,
      title: "Conversion & Speed Optimization",
      desc: "Fast-loading, SEO-friendly and conversion-optimized stores.",
    },
  ];

  const process = [
    "Business & product analysis",
    "Store architecture & planning",
    "Theme design & customization",
    "App integration & configuration",
    "Testing, optimization & QA",
    "Store launch & ongoing support",
  ];

  return (
    <BgLayout>
      {/* ================= HERO ================= */}
      <section className="relative h-[55vh] mt-21 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/services/shopify-development-hero.webp"
            alt="Shopify Development Services"
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
            <span className="text-blue-300">Shopify Development</span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Shopify <span className="text-blue-400">Development</span>
          </motion.h1>

          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Scalable, secure and high-performing Shopify stores that sell more.
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
                Expert <span className="text-blue-600">Shopify Development</span>
              </h2>

              <p className="text-gray-600 text-lg mb-4">
                Shopify is one of the most powerful eCommerce platforms available today.
              </p>

              <p className="text-gray-600 text-lg mb-4">
                We build Shopify stores that are visually appealing and conversion-driven.
              </p>

              <p className="text-gray-600 text-lg">
                From startups to enterprises, we deliver scalable Shopify solutions.
              </p>
            </motion.div>

            {/* SERVICES */}
            <div>
              <h2 className="text-4xl font-bold mb-10">
                Our <span className="text-blue-600">Shopify Services</span>
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
                Our <span className="text-blue-600">Development Process</span>
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
                Ready to Launch Your Shopify Store?
              </h2>
              <p className="text-blue-100 mb-8">
                Let’s build a Shopify store that drives sales and growth.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold"
              >
                Start Shopify Project
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
              <li className="font-medium text-blue-600">
                Shopify Development
              </li>
              <li>
                <Link href="/landing-page-design-services/">Landing Page Design</Link>
              </li>
            </ul>
          </aside>

        </div>
      </section>
    </BgLayout>
  );
}
