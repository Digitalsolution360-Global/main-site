"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { IconCheck } from "@tabler/icons-react";

export default function WhyDS360Section() {
  const points = [
    "Online marketing company that is performance based.",
    "Result oriented services of SEO.",
    "Scalable and low cost solutions.",
    "Open disclosure of reports and communication.",
    "Senior strategists and developers."
  ];

  return (
    <section className="py-24 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Why <span className="text-blue-600">Digital Solution 360</span>?
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We are a long-term digital marketing partner offering scalable, performance-driven solutions in SEO, web development, and complete digital marketing services.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Column: Bullet Points */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {points.map((point, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center bg-blue-600 rounded-full">
                  <IconCheck size={20} className="text-white" />
                </div>
                <p className="text-gray-700 text-lg">{point}</p>
              </div>
            ))}
          </motion.div>

          {/* Right Column: Description + CTA */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center gap-6"
          >
            <p className="text-gray-700 text-lg leading-relaxed">
              Ready to scale your business? Digital Solution 360 has services to offer you in the areas of SEO, web development, and complete digital marketing. Contact us today and we will make something amazing together.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-blue-600 text-white font-bold px-8 py-4 rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300"
            >
              Contact Digital Solution 360
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
