"use client";

import BgLayout from "@/components/layout/bgLayout";
import { motion } from "motion/react";
import Link from "next/link";
import {
  IconHome,
  IconChevronRight,
  IconBuilding,
  IconPalette,
  IconBrush,
  IconAd,
  IconRocket,
  IconCheck,
} from "@tabler/icons-react";

export default function BrandIdentityDesignPage() {
  const services = [
    {
      icon: IconBuilding,
      title: "Brand Identity Design",
      desc: "Create a strong and cohesive visual identity for your brand that resonates with your audience.",
    },
    {
      icon: IconPalette,
      title: "Logo & Typography",
      desc: "Design distinctive logos and typography that reflect your brand’s personality.",
    },
    {
      icon: IconBrush,
      title: "Color & Visual Style",
      desc: "Develop a unique color palette and visual style for consistent branding across all touchpoints.",
    },
    {
      icon: IconAd,
      title: "Brand Guidelines",
      desc: "Comprehensive brand manuals to maintain consistency across marketing and communication.",
    },
  ];

  const process = [
    "Brand discovery & research",
    "Concept development & sketches",
    "Logo & visual identity creation",
    "Typography & color selection",
    "Design of collateral & assets",
    "Final brand guideline documentation",
  ];

  return (
    <BgLayout>
      {/* ================= HERO ================= */}
      <section className="relative h-[55vh] mt-21 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/services/brand-identity-hero.webp"
            alt="Brand Identity Design"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative z-10 max-w-5xl px-6 text-center text-white">
          <div className="flex justify-center items-center gap-2 text-sm mb-6">
            <Link href="/" className="flex items-center gap-1 hover:text-blue-400">
              <IconHome size={18} /> Home
            </Link>
             <Link href="/branding-services" className="flex items-center gap-1 hover:text-blue-400">
               <IconChevronRight size={16} />Brand & Creative
              </Link>
            <IconChevronRight size={16} />
            <span className="text-blue-300">Brand Identity Design</span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Brand <span className="text-blue-400">Identity Design</span>
          </motion.h1>

          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Establish a strong brand identity that communicates your values and stands out in the market.
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
                Build a <span className="text-blue-600">Strong Brand Identity</span>
              </h2>

              <p className="text-gray-600 text-lg mb-4">
                A powerful brand identity differentiates you from competitors and creates a lasting impression on your audience.
              </p>

              <p className="text-gray-600 text-lg mb-4">
                Our brand identity design services cover logos, colors, typography, and visual style to give your brand a professional look.
              </p>

              <p className="text-gray-600 text-lg">
                We ensure every element is aligned with your brand values and communicates effectively across all channels.
              </p>
            </motion.div>

            {/* SERVICES */}
            <div>
              <h2 className="text-4xl font-bold mb-10">
                Our <span className="text-blue-600">Brand Identity Services</span>
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
                Ready to Craft Your Brand Identity?
              </h2>
              <p className="text-blue-100 mb-8">
                Let’s design a unique brand identity that stands out and drives results.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold"
              >
                Get Brand Identity Consultation
              </Link>
            </div>

          </div>

          {/* RIGHT SIDEBAR */}
          <aside className="bg-white shadow-xl rounded-2xl p-6 sticky top-28">
            <h3 className="text-xl font-bold mb-4 border-b pb-2">
              Brand & Creative
            </h3>

            <ul className="space-y-3 text-gray-700">
              <li><Link href="/branding-services/">Branding Services</Link></li>
              <li className="font-medium text-blue-600">Brand Identity Design</li>
              <li><Link href="/logo-design-services/">Logo Design</Link></li>
              <li><Link href="/graphic-design-services/">Graphic Design</Link></li>
              <li><Link href="/creative-design-for-ads/">Creative for Ads</Link></li>
              <li><Link href="/performance-creatives/">Performance Creatives</Link></li>
            </ul>
          </aside>

        </div>
      </section>
    </BgLayout>
  );
}
