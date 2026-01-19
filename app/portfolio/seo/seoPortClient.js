"use client"

import { useState } from "react"
import BgLayout from "@/components/layout/bgLayout"
import Link from "next/link"
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"

import data from "./content.json"
import { IconHome, IconChevronRight } from "@tabler/icons-react"

export default function SEOPage() {
  const clients = data.client
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <BgLayout>

      {/* ================= HERO ================= */}
      <section className="relative h-[45vh] md:h-[50vh] mt-21 lg:mt-15 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/portfolio/web-dev-hero.webp"
            alt="Web Development Portfolio"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-2 text-sm mb-6"
          >
            <Link href="/" className="flex items-center gap-1 hover:text-blue-200">
              <IconHome size={18} /> Home
            </Link>
            <IconChevronRight size={16} />
            <Link href="/portfolio">Portfolio</Link>
            <IconChevronRight size={16} />
            <span className="text-blue-200">SEO Development</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
          >
            SEO Development <span className="text-blue-500">Portfolio</span>
          </motion.h1>

          <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto">
            Data-driven SEO strategies that deliver traffic, leads & revenue.
          </p>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-20 bg-white text-center">
        <span className="inline-flex items-center gap-2 text-orange-500 font-semibold mb-4">
          <span className="w-2 h-2 bg-blue-500 rounded-full" />
          Our Success Stories
        </span>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          Proven Results Through
          <span className="text-blue-600"> SEO Excellence</span>
        </h2>

        <p className="max-w-3xl mx-auto text-base sm:text-lg text-gray-600">
          We help brands dominate search results with measurable growth.
        </p>
      </section>

      {/* ================= SLIDER ================= */}
      <section className="md:pb-28  bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-6">

          <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            autoplay={{ delay: 5000 }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          >
            {clients.map((client, index) => (
              <SwiperSlide key={index}>
                <div className="
                  relative
                  h-[240px] sm:h-[220px] md:h-[620px]
                  rounded-[24px] md:rounded-[40px]
                  overflow-hidden shadow-lg
                ">
                  <img
                    src={client.bg}
                    alt={client.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/60" />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white rounded-full 
                                    p-3 sm:p-4 md:p-6 shadow-xl">
                      <img
                        src={client.logo}
                        alt={client.name}
                        className="max-h-12 sm:max-h-16 md:max-h-20 object-contain"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

        </div>
      </section>

      {/* ================= DYNAMIC STATS ================= */}
      <div className="relative mb-20">

        <div className="
          relative
          md:absolute md:left-1/2 md:-translate-x-1/2 md:-top-52
          w-[92%] sm:w-[80%] md:w-[75%] lg:w-[70%]
          px-4
          z-20
          mt-12 md:mt-0
        ">
          <div className="bg-white rounded-[24px] md:rounded-[32px]
                          shadow-2xl
                          px-6 sm:px-8 md:px-14
                          py-8 sm:py-10 md:py-12">

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4
                            gap-6 sm:gap-8 md:gap-10 text-center">
              {clients[activeIndex].stats.map((stat, i) => (
                <div key={i}>
                  <motion.h4
                    key={stat.value}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="text-2xl sm:text-3xl md:text-4xl
                               font-extrabold text-blue-500 mb-2"
                  >
                    {stat.value}
                  </motion.h4>

                  <p className="text-gray-700 text-sm sm:text-base">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

    </BgLayout>
  )
}
