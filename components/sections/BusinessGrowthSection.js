"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { IconCheck } from "@tabler/icons-react";

export default function BusinessGrowthSection() {
  const services = [
    {
      title: "Google My Business Optimization towards Responding to Local Business Success.",
      description:
        "Local visibility matters. We optimize your Google My Business profile to dominatLocal visibility matters. We optimize Google My Business to make businesses to control the local search results and acquire nearby clients.",
      points: [
        "Optimization and updates of profile.",
        "Local keyword targeting",
        "Check and recommendation management.",
      ],
      cta: "Get more local leads - Optimize your Google My Business with us.",
      link: "/google-my-business-optimization",
      gradient: "from-blue-500 to-blue-300",
    },
    {
      title: "Branding and Innovative Design Services That Stand out.",
      description:
        "Your brand identity matters. Through our branding and creative services, businesses are able to establish a powerful and memorable presence over the digital world.",
      points: [
        "Design of logo and brand identity.",
        "Creative ad visuals",
        "Consistent brand messagings",
      ],
      cta: "Develop a strong brand name with Digital Solution 360.",
      link: "/branding-services",
      gradient: "from-purple-500 to-purple-300",
    },
    {
      title: "Smarter Growth Marketing Automation Services.",
      description:
        "Claimed time and enhanced efficiency with our marketing automation services. We assist companies in automating routine processes and properly nurturing leads.",
      points: [
        "Email marketing automation",
        "Customer journey mapping",
        "Analytics and reporting",
      ],
      cta: "Automate your marketing - Book a demo with Digital Solution 360.",
      link: "/marketing-automation",
      gradient: "from-green-500 to-green-300",
    },
    {
      title: "Business Automation CRM Development Services.",
      description:
        "By means of our CRM development services, businesses are able to deal with leads, customers and sales more effectively.",
      points: [
        "Business automation Custom CRM development.",
        "Workflow automation",
        "Website and marketing integration.",
      ],
      cta: "Automate your business operations using Digital Solution 360 CRM solutions.",
      link: "/crm-development",
      gradient: "from-yellow-400 to-yellow-200",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* ===== Heading + Subheading ===== */}
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4"
          >
            Smart Digital Solutions <span className="text-blue-600">Designed to Scale</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-gray-600"
          >
            From local business visibility to branding, automation, and CRM solutions — we help businesses grow faster, smarter, and sustainably.
          </motion.p>
        </div>

        {/* ===== Services in 2-column grid ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`p-10 rounded-3xl text-white shadow-2xl bg-gradient-to-br ${service.gradient} hover:scale-105 transition-transform duration-300 relative overflow-hidden`}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-4">{service.title}</h3>
              <p className="text-white/90 mb-6">{service.description}</p>

              <ul className="space-y-2 mb-6">
                {service.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 flex items-center justify-center bg-white/20 rounded-full">
                      <IconCheck size={16} className="text-white" />
                    </div>
                    <span className="text-white">{point}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={service.link}
                className="inline-block font-semibold underline decoration-white/50 hover:decoration-white"
              >
                {service.cta} →
              </Link>

              {/* Decorative Blur Elements */}
              <div className="absolute -top-16 -right-16 w-52 h-52 bg-white/20 rounded-full blur-3xl pointer-events-none"></div>
              <div className="absolute -bottom-16 -left-16 w-52 h-52 bg-white/20 rounded-full blur-3xl pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
