"use client";

import BgLayout from "@/components/layout/bgLayout";
import { motion } from "motion/react";
import Link from "next/link";
import {
  IconHome,
  IconChevronRight,
  IconBrush,       // representing Logo
  IconPalette,
  IconAd,
  IconRocket,
  IconCheck,
} from "@tabler/icons-react";

export default function LogoDesignPage() {
  const services = [
    {
      icon: IconBrush,
      title: "Custom Logo Design",
      desc: "Create unique, memorable logos that reflect your brand identity.",
    },
    {
      icon: IconPalette,
      title: "Typography & Color",
      desc: "Design fonts and color schemes that match your brand personality.",
    },
    {
      icon: IconAd,
      title: "Versatile Logo Versions",
      desc: "Logos optimized for web, print, and social media use.",
    },
    {
      icon: IconCheck,
      title: "Brand Integration",
      desc: "Ensure your logo aligns seamlessly with your overall brand identity.",
    },
  ];

  const process = [
    "Client briefing & brand research",
    "Concept sketches & ideation",
    "Digital design & refinement",
    "Typography & color selection",
    "Multiple logo versions & formats",
    "Final delivery & brand guideline integration",
  ];

  return (
    <BgLayout>
      {/* ================= HERO ================= */}
      <section className="relative h-[55vh] mt-21 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/services/logo-design-hero.webp"
            alt="Logo Design Services"
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
            <span className="text-blue-300">Logo Design</span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Logo <span className="text-blue-400">Design</span>
          </motion.h1>

          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Craft unique logos that capture your brand essence and leave a lasting impression.
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
                Professional <span className="text-blue-600">Logo Design</span>
              </h2>

              <p className="text-gray-600 text-lg mb-4">
                Logos are the face of your brand. We design logos that are creative, versatile, and memorable.
              </p>

              <p className="text-gray-600 text-lg mb-4">
                Our team ensures each logo reflects your brand’s personality and values effectively.
              </p>

              <p className="text-gray-600 text-lg">
                We deliver logos ready for all digital and print formats with full branding consistency.
              </p>
            </motion.div>

            {/* SERVICES */}
            <div>
              <h2 className="text-4xl font-bold mb-10">
                Our <span className="text-blue-600">Logo Design Services</span>
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
                Our <span className="text-blue-600">Logo Design Process</span>
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
                Ready to Get Your Logo Designed?
              </h2>
              <p className="text-blue-100 mb-8">
                Let’s create a professional logo that represents your brand and captures attention.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold"
              >
                Get Logo Design Consultation
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
              <li><Link href="/brand-identity-design/">Brand Identity Design</Link></li>
              <li className="font-medium text-blue-600">Logo Design</li>
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
