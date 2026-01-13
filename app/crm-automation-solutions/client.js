"use client";

import BgLayout from "@/components/layout/bgLayout";
import { motion } from "motion/react";
import Link from "next/link";
import {
  IconHome,
  IconChevronRight,
  IconUsers,
  IconSettingsAutomation,
  IconChartLine,
  IconDatabase,
  IconCheck,
  IconRocket,
} from "@tabler/icons-react";

export default function CRMAutomationPage() {
  const services = [
    {
      icon: IconUsers,
      title: "Customer Data Automation",
      desc: "Automatically capture, organize, and update customer information in one place.",
    },
    {
      icon: IconSettingsAutomation,
      title: "Workflow & Task Automation",
      desc: "Automate follow-ups, task assignments, and reminders for your sales team.",
    },
    {
      icon: IconChartLine,
      title: "Sales Pipeline Automation",
      desc: "Track deals, automate pipeline stages, and close more sales faster.",
    },
    {
      icon: IconDatabase,
      title: "CRM Integration & Reporting",
      desc: "Integrate CRM with marketing tools and get real-time actionable insights.",
    },
  ];

  const process = [
    "Business & CRM requirement analysis",
    "Customer journey & pipeline mapping",
    "CRM platform configuration",
    "Workflow & trigger automation",
    "Testing & optimization",
    "Training & ongoing support",
  ];

  return (
    <BgLayout>
      {/* ================= HERO ================= */}
      <section className="relative h-[55vh] mt-21 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/services/crm-automation-hero.webp"
            alt="CRM Automation Solutions"
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
            <span className="text-blue-300">CRM Automation</span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            CRM <span className="text-blue-400">Automation</span> Solutions
          </motion.h1>

          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Automate customer management, sales workflows, and CRM operations.
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
                Powerful <span className="text-blue-600">CRM Automation</span>
              </h2>

              <p className="text-gray-600 text-lg mb-4">
                CRM automation helps businesses manage customer relationships
                efficiently while reducing manual work.
              </p>

              <p className="text-gray-600 text-lg mb-4">
                Our CRM automation solutions streamline sales, support, and
                customer communication.
              </p>

              <p className="text-gray-600 text-lg">
                Gain better visibility, faster follow-ups, and improved conversions.
              </p>
            </motion.div>

            {/* SERVICES */}
            <div>
              <h2 className="text-4xl font-bold mb-10">
                CRM <span className="text-blue-600">Automation Services</span>
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
                Our <span className="text-blue-600">CRM Automation Process</span>
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
                Upgrade Your CRM with Automation
              </h2>
              <p className="text-blue-100 mb-8">
                Improve productivity, close more deals, and retain customers.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold"
              >
                Automate CRM Now
              </Link>
            </div>

          </div>

          {/* RIGHT SIDEBAR */}
          <aside className="bg-white shadow-xl rounded-2xl p-6 sticky top-28">
            <h3 className="text-xl font-bold mb-4 border-b pb-2">
              Automation Solutions
            </h3>

            <ul className="space-y-3 text-gray-700">
              <li>
                <Link href="/marketing-automation-services/">Marketing Automation</Link>
              </li>
              <li className="font-medium text-blue-600">
                CRM Automation
              </li>
              <li>
                <Link href="/lead-automation-services/">Lead Automation</Link>
              </li>
              <li>
                <Link href="/email-marketing-automation/">Email Automation</Link>
              </li>
              <li>
                <Link href="/whatsapp-automation-services/">WhatsApp Automation</Link>
              </li>
              <li>
                <Link href="/sales-funnel-automation/">Sales Funnel Automation</Link>
              </li>
              <li>
                <Link href="/ai-marketing-automation/">AI Marketing Automation</Link>
              </li>
            </ul>
          </aside>

        </div>
      </section>
    </BgLayout>
  );
}
