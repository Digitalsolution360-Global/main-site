"use client";

import BgLayout from "@/components/layout/bgLayout";
import { motion } from "motion/react";
import Link from "next/link";
import {
  IconHome,
  IconChevronRight,
  IconUsers,
  IconMessageCircle,
  IconCamera, 
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandLinkedin,
  IconBrandYoutube,
  IconRocket,
  IconCheck,
} from "@tabler/icons-react";

export default function SocialMediaMarketingPage() {
  const services = [
    {
      icon: IconUsers,
      title: "Social Media Strategy",
      desc: "Tailored strategies to grow your brand presence.",
    },
    {
      icon: IconMessageCircle,
      title: "Content Creation & Planning",
      desc: "Engaging posts and visuals.",
    },
    {
      icon: IconRocket,
      title: "Campaign Management",
      desc: "End-to-end campaign management.",
    },
    {
      icon: IconCamera,
      title: "Performance Analytics",
      desc: "Track and optimize social media performance.",
    },
    
    {
      icon: IconBrandFacebook,
      title: "Facebook Marketing",
      desc: "Reach your audience effectively on Facebook.",
    },
    {
      icon: IconBrandLinkedin,
      title: "LinkedIn Marketing",
      desc: "Build a professional brand presence on LinkedIn.",
    },
    {
      icon: IconBrandYoutube,
      title: "YouTube Marketing",
      desc: "Boost your video content reach and engagement.",
    },
  ];

  const process = [
    "Audit & analyze social media presence",
    "Audience research & content planning",
    "Content creation & scheduling",
    "Campaign execution & monitoring",
    "Performance analysis & reporting",
    "Continuous optimization for growth",
  ];

  return (
    <BgLayout>
      {/* ================= HERO ================= */}
      <section className="relative h-[55vh] mt-21 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/services/social-media-marketing-hero.webp"
            alt="Social Media Marketing"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative z-10 max-w-5xl px-6 text-center text-white">
          <div className="flex justify-center items-center gap-2 text-sm mb-6">
            <Link href="/" className="flex items-center gap-1 hover:text-blue-400">
              <IconHome size={18} /> Home
            </Link>
             <Link href="/digital-marketing-managed-services" className="flex items-center gap-1 hover:text-blue-400">
                          <IconChevronRight size={16} />Managed Services
                           </Link>
            <IconChevronRight size={16} />
            <span className="text-blue-300">Social Media Marketing</span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Social Media <span className="text-blue-400">Marketing</span>
          </motion.h1>

          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Boost your brand’s reach, engagement, and conversions with expert social media marketing services.
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
                Result-Driven <span className="text-blue-600">Social Media Marketing</span>
              </h2>

              <p className="text-gray-600 text-lg mb-4">
                We help brands grow, engage, and convert audiences on all social media platforms.
              </p>

              <p className="text-gray-600 text-lg mb-4">
                From content creation to campaign management, our social media services are designed to maximize your ROI.
              </p>

              <p className="text-gray-600 text-lg">
                Every strategy is backed by data and focused on measurable results.
              </p>
            </motion.div>

            {/* SERVICES */}
            <div>
              <h2 className="text-4xl font-bold mb-10">
                Our <span className="text-blue-600">Social Media Services</span>
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

            {/* CTA */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-3xl p-12 text-center">
              <IconRocket size={48} className="mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">
                Ready to Grow Your Social Presence?
              </h2>
              <p className="text-blue-100 mb-8">
                Let our experts manage and optimize your social media campaigns for maximum impact.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold"
              >
                Get Social Media Consultation
              </Link>
            </div>

          </div>

          {/* RIGHT SIDEBAR */}
          <aside className="bg-white shadow-xl rounded-2xl p-6 sticky top-28">
            <h3 className="text-xl font-bold mb-4 border-b pb-2">
              Social Media Marketing
            </h3>

            <ul className="space-y-3 text-gray-700">
              <li className="font-medium text-blue-600">Social Media Marketing</li>
              <li><Link href="/social-media-management-services/">Social Media Management</Link></li>
              <li><Link href="/instagram-marketing-services/">Instagram Marketing</Link></li>
              <li><Link href="/facebook-marketing-services/">Facebook Marketing</Link></li>
              <li><Link href="/linkedin-marketing-services/">LinkedIn Marketing</Link></li>
              <li><Link href="/youtube-marketing-services/">YouTube Marketing</Link></li>
              <li><Link href="/influencer-marketing-services/">Influencer Marketing</Link></li>
              <li><Link href="/short-video-marketing/">Short Video Marketing</Link></li>
            </ul>
          </aside>

        </div>
      </section>
    </BgLayout>
  );
}
