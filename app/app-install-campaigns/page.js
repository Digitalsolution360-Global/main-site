"use client";

import BgLayout from "@/components/layout/bgLayout";
import { motion } from "motion/react";
import Link from "next/link";
import {
  IconHome,
  IconChevronRight,
  IconDeviceMobile,
  IconBrandGooglePlay,
  IconBrandApple,
  IconTargetArrow,
  IconCheck,
  IconRocket,
  IconTrendingUp,
} from "@tabler/icons-react";

export default function AppInstallCampaignsPage() {
  const services = [
    {
      icon: IconDeviceMobile,
      title: "Mobile App Install Ads",
      desc: "Drive high-quality app installs across Android and iOS with conversion-focused ad campaigns.",
    },
    {
      icon: IconBrandGooglePlay,
      title: "Google App Campaigns",
      desc: "Automated app install campaigns across Search, Play Store, YouTube, and Display Network.",
    },
    {
      icon: IconBrandApple,
      title: "Apple Search Ads",
      desc: "Capture high-intent users actively searching for apps on the Apple App Store.",
    },
    {
      icon: IconTrendingUp,
      title: "User Acquisition & Retargeting",
      desc: "Acquire, re-engage, and retain valuable users with lifecycle-based app marketing strategies.",
    },
  ];

  const process = [
    "App audit & goal definition",
    "Audience & geo targeting strategy",
    "Ad creative & store asset optimization",
    "SDK, Firebase & event tracking setup",
    "Continuous testing, scaling & optimization",
  ];

  return (
    <BgLayout>
      {/* ================= HERO ================= */}
      <section className="relative h-[55vh] mt-21 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/services/app-install-campaigns-hero.webp"
            alt="App Install Campaigns"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative z-10 max-w-5xl px-6 text-center text-white">
          {/* Breadcrumb */}
          <div className="flex justify-center items-center gap-2 text-sm mb-6">
            <Link href="/" className="flex items-center gap-1 hover:text-blue-300">
              <IconHome size={18} /> Home
            </Link>
            <IconChevronRight size={16} />
            <span className="text-blue-300">App Install Campaigns</span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            App Install <span className="text-blue-500">Campaigns</span>
          </motion.h1>

          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Scale app installs, acquire high-value users, and boost retention
            with performance-driven mobile advertising.
          </p>
        </div>
      </section>

      {/* ================= CONTENT + SIDEBAR ================= */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12 items-start">

          {/* ================= LEFT CONTENT ================= */}
          <div className="lg:col-span-2 space-y-20">

            {/* INTRO */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl font-bold mb-6">
                Why Choose <span className="text-blue-600">App Install Campaigns?</span>
              </h2>

              <p className="text-gray-600 text-lg mb-4">
                App install campaigns are designed to acquire users who are
                most likely to install, engage, and convert inside your app.
              </p>

              <p className="text-gray-600 text-lg mb-4">
                Using advanced targeting, automation, and analytics, we help
                brands grow sustainably across Android and iOS platforms.
              </p>

              <p className="text-gray-600 text-lg">
                Our campaigns focus on quality installs, lower CPI, and higher
                lifetime value (LTV).
              </p>
            </motion.div>

            {/* SERVICES */}
            <div>
              <h2 className="text-4xl font-bold mb-10">
                Our <span className="text-blue-600">App Marketing Services</span>
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

            {/* WHO IS THIS FOR */}
            <div>
              <h2 className="text-4xl font-bold mb-10">
                Who Should Run <span className="text-blue-600">App Install Ads?</span>
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "Mobile app startups & enterprises",
                  "Ecommerce & marketplace apps",
                  "Fintech, Edtech & Healthtech apps",
                  "Gaming & utility applications",
                  "SaaS & subscription-based apps",
                  "Brands focused on user growth",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white p-6 rounded-xl shadow flex items-center gap-4"
                  >
                    <IconTargetArrow className="text-blue-600" />
                    <span className="text-lg font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-3xl p-12 text-center">
              <IconRocket size={48} className="mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">
                Scale Your App Installs Faster
              </h2>
              <p className="text-blue-100 mb-8">
                Acquire high-quality users with data-driven app install
                campaigns that deliver measurable growth.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold"
              >
                Get Free Consultation
              </Link>
            </div>

          </div>

          {/* ================= RIGHT SIDEBAR ================= */}
          <aside className="bg-white shadow-xl rounded-2xl p-6 sticky top-28">
            <h3 className="text-xl font-bold mb-4 border-b pb-2">
              Performance Marketing
            </h3>

            <ul className="space-y-3 text-gray-700">
              <li><Link href="/google-search-display-and-shopping-ads">Google Search, Display & Shopping Ads</Link></li>
              <li><Link href="/youtube-advertising">YouTube Advertising</Link></li>
              <li><Link href="/meta-ads">Meta Ads</Link></li>
              <li><Link href="/linkedin-ads">LinkedIn Ads</Link></li>
              <li><Link href="/twitter-pinterest-ads">Twitter & Pinterest Ads</Link></li>
              <li><Link href="/native-programmatic-ads">Native & Programmatic Ads</Link></li>
              <li className="font-medium text-blue-600">App Install Campaigns</li>
            </ul>
          </aside>

        </div>
      </section>
    </BgLayout>
  );
}
