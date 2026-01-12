"use client";

import BgLayout from "@/components/layout/bgLayout";
import { motion } from "motion/react";
import Link from "next/link";
import {
  IconHome,
  IconChevronRight,
  IconBrandWhatsapp,
  IconRobot,
  IconMessages,
  IconChartLine,
  IconCheck,
  IconRocket,
} from "@tabler/icons-react";

export default function WhatsAppAutomationPage() {
  const services = [
    {
      icon: IconBrandWhatsapp,
      title: "WhatsApp Business Automation",
      desc: "Automate WhatsApp conversations for instant customer communication.",
    },
    {
      icon: IconRobot,
      title: "WhatsApp Chatbot Integration",
      desc: "AI-powered chatbots for 24/7 customer support and lead handling.",
    },
    {
      icon: IconMessages,
      title: "Broadcast & Campaign Automation",
      desc: "Send automated WhatsApp broadcasts, offers, and notifications.",
    },
    {
      icon: IconChartLine,
      title: "Analytics & Performance Tracking",
      desc: "Monitor message delivery, responses, and campaign performance.",
    },
  ];

  const process = [
    "WhatsApp Business API setup",
    "Chatbot & automation flow design",
    "Message template approval",
    "CRM & tool integrations",
    "Testing & compliance check",
    "Launch, monitoring & optimization",
  ];

  return (
    <BgLayout>
      {/* ================= HERO ================= */}
      <section className="relative h-[55vh] mt-21 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/services/whatsapp-automation-hero.webp"
            alt="WhatsApp Automation Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative z-10 max-w-5xl px-6 text-center text-white">
          <div className="flex justify-center items-center gap-2 text-sm mb-6">
            <Link href="/" className="flex items-center gap-1 hover:text-blue-400">
              <IconHome size={18} /> Home
            </Link>
             <Link href="/marketing-automation-services" className="flex items-center gap-1 hover:text-blue-400">
                         <IconChevronRight size={16} />Automation Solutions
                          </Link>
            <IconChevronRight size={16} />
            <span className="text-blue-300">WhatsApp Automation</span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            WhatsApp <span className="text-blue-400">Automation</span> Services
          </motion.h1>

          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Engage customers instantly and scale conversations with WhatsApp automation.
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
                Smart <span className="text-blue-600">WhatsApp Automation</span>
              </h2>

              <p className="text-gray-600 text-lg mb-4">
                WhatsApp is the most preferred messaging platform for customer communication.
              </p>

              <p className="text-gray-600 text-lg mb-4">
                Automation helps you respond faster, nurture leads, and close sales efficiently.
              </p>

              <p className="text-gray-600 text-lg">
                We build WhatsApp automation systems that improve engagement and customer experience.
              </p>
            </motion.div>

            {/* SERVICES */}
            <div>
              <h2 className="text-4xl font-bold mb-10">
                WhatsApp <span className="text-blue-600">Automation Services</span>
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
                Our <span className="text-blue-600">Automation Process</span>
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
                Automate Customer Conversations on WhatsApp
              </h2>
              <p className="text-blue-100 mb-8">
                Improve response time, engagement, and sales with WhatsApp automation.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold"
              >
                Start WhatsApp Automation
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
              <li>
                <Link href="/crm-automation-solutions/">CRM Automation</Link>
              </li>
              <li>
                <Link href="/lead-automation-services/">Lead Automation</Link>
              </li>
              <li>
                <Link href="/email-marketing-automation/">Email Automation</Link>
              </li>
              <li className="font-medium text-blue-600">
                WhatsApp Automation
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
