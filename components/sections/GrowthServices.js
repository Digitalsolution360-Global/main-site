"use client";

import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { IconCheck } from "@tabler/icons-react";

function GrowthServices() {
  const services = [
    {
      title: "Bespoke Web Site Designing of Special Business Requirements.",
      description:
        "Every business is different. Our bespoke web development platforms are created to suit your target, objectives, and brand name.",
      points: [
        "Customized design and functionality.",
        "Scalable architecture",
        "CRM and marketing tools integration",
      ],
      cta: {
        label: "Build Your Business Website – Consult Our Experts",
        link: "/custom-website-development",
      },
    },
    {
      title: "Website Development Ecommerce: Small Business",
      description:
        "Looking to sell online? We build ecommerce websites, which are used to assist companies to open high performance online stores.",
      points: [
        "Development of ecommerce websites to small business.",
        "Integrated secure payment gateway.",
        "Product and inventory management.",
        "User experience developed to be conversion oriented",
      ],
      cta: {
        label: "Begin to sell online with Digital Solution 360 ecommerce solutions.",
        link: "/ecommerce-development",
      },
    },
    {
      title: "Lead Generation Services for Business Expansion",
      description:
        "Our lead generation service is one that is quality-driven, and not quantity-driven. We maximize our campaigns to capture high intent users who are willing to convert.",
      points: [
        "Business-to-business lead generation solutions.",
        "Marketing strategies in funnel form.",
        "Landing page optimization",
        "CRM integration",
      ],
      cta: {
        label: "Develop good quality leads - Collaborate with Digital Solution 360 now.",
        link: "/lead-generation-services",
      },
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= HEADING ================= */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900"
          >
            Scalable Digital Solutions <span className="text-blue-600">Built for Growth</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-lg text-gray-600"
          >
            From bespoke websites to ecommerce platforms and lead generation systems,
            we design solutions that drive measurable business growth.
          </motion.p>
        </div>

        {/* ================= SERVICE CARDS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-3xl shadow-xl p-8 hover:-translate-y-2 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-6">
                {service.description}
              </p>

              <ul className="space-y-3 mb-8">
                {service.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <IconCheck size={20} className="text-blue-600 mt-1" />
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={service.cta.link}
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold
                           hover:bg-blue-700 transition-all duration-300 hover:shadow-lg"
              >
                {service.cta.label}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GrowthServices;
