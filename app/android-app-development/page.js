"use client";

import BgLayout from "@/components/layout/bgLayout";
import { motion } from "motion/react";
import Link from "next/link";
import {
  IconHome,
  IconChevronRight,
  IconBrandAndroid,
  IconCode,
  IconShieldCheck,
  IconGauge,
  IconCheck,
  IconRocket,
} from "@tabler/icons-react";

export default function AndroidAppDevelopmentPage() {
  const services = [
    {
      icon: IconBrandAndroid,
      title: "Custom Android App Development",
      desc: "Tailor-made Android applications designed to meet your specific business requirements.",
    },
    {
      icon: IconCode,
      title: "Kotlin & Java Development",
      desc: "Modern, secure, and scalable apps built using Kotlin and Java best practices.",
    },
    {
      icon: IconShieldCheck,
      title: "Secure & Scalable Apps",
      desc: "High-level security, data protection, and scalable architecture for long-term growth.",
    },
    {
      icon: IconGauge,
      title: "Performance Optimization",
      desc: "Fast-loading, battery-efficient, and smooth Android app experiences.",
    },
  ];

  const process = [
    "Requirement analysis & planning",
    "UI/UX design for Android",
    "App development & API integration",
    "Testing & quality assurance",
    "Play Store deployment & support",
  ];

  return (
    <BgLayout>
      {/* ================= HERO ================= */}
      <section className="relative h-[55vh] mt-21 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/services/android-app-hero.webp"
            alt="Android App Development"
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
            <span className="text-blue-300">Android App Development</span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Android <span className="text-blue-400">App Development</span>
          </motion.h1>

          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Build high-performance, secure, and scalable Android applications
            that users love.
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
                Why Choose <span className="text-blue-600">Android App Development?</span>
              </h2>

              <p className="text-gray-600 text-lg mb-4">
                Android is the world’s most widely used mobile platform, offering
                massive reach and flexibility for businesses.
              </p>

              <p className="text-gray-600 text-lg mb-4">
                We develop Android apps that deliver seamless performance,
                intuitive user experience, and enterprise-grade security.
              </p>

              <p className="text-gray-600 text-lg">
                From startups to enterprises, our Android solutions are built to
                scale with your business.
              </p>
            </motion.div>

            {/* SERVICES */}
            <div>
              <h2 className="text-4xl font-bold mb-10">
                Our <span className="text-blue-600">Android App Services</span>
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
                Start Your Android App Project
              </h2>
              <p className="text-blue-100 mb-8">
                Let’s transform your idea into a powerful Android application.
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
              Mobile App Development
            </h3>

            <ul className="space-y-3 text-gray-700">
              <li className="font-medium text-blue-600">
                Android App Development
              </li>
              <li><Link href="/ios-app-development">iOS App Development</Link></li>
              <li>
                <Link href="/cross-platform-app-development">
                  Cross-Platform Apps (Flutter / React Native)
                </Link>
              </li>
              <li><Link href="/ui-ux-app-design">UI/UX-First App Design</Link></li>
              <li><Link href="/app-performance-optimization">App Performance Optimization</Link></li>
            </ul>
          </aside>

        </div>
      </section>
    </BgLayout>
  );
}
