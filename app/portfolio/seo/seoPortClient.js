"use client"

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

  return (
    <BgLayout>

      {/* ================= HERO ================= */}
      <section className='relative h-[50vh] mt-21 lg:mt-15 flex items-center justify-center overflow-hidden'>
        <div className='absolute inset-0'>
          <img
            src="/portfolio/web-dev-hero.webp"
            alt="Web Development Portfolio"
            className='w-full h-full object-cover'
          />
          <div className='absolute inset-0 bg-black/70'></div>
        </div>

        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white'>
          {/* Breadcrumbs */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='flex items-center justify-center gap-2 text-sm mb-6'
          >
            <Link href='/' className='flex items-center gap-1 hover:text-blue-200 transition-colors'>
              <IconHome size={18} />
              <span>Home</span>
            </Link>
            <IconChevronRight size={16} className='text-blue-300' />
            <Link href='/portfolio' className='hover:text-blue-200 transition-colors'>
              Portfolio
            </Link>
            <IconChevronRight size={16} className='text-blue-300' />
            <span className='text-blue-200'>Web Development</span>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold mb-6'>
              SEO Development <span className='text-blue-500'>Portfolio</span>
            </h1>
            <p className='text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed'>
              Custom websites, e-commerce platforms, and web applications built with modern technologies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <span className="inline-flex items-center gap-2 text-orange-500 font-semibold mb-4">
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
            Our Success Stories
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Proven Results Through
            <span className="text-blue-600"> SEO Excellence</span>
          </h2>

          <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
            We help brands dominate search results with data-driven SEO strategies
            that deliver consistent traffic, leads, and revenue growth.
          </p>

        </div>
      </section>

      {/* ================= SUCCESS STORIES SWIPER ================= */}
      <section className="pb-32 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-6 relative">

          <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            autoplay={{ delay: 5000 }}
            className="relative"
          >
            {clients.map((client, index) => (
              <SwiperSlide key={index}>
                <div className="relative h-[620px] shadow-lg rounded-[40px] overflow-hidden">

                  {/* Background Image */}
                  <img
                    src={client.bg}
                    alt={client.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black/60"></div>

                {/* Logo Centered */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* White rounded background for logo */}
                  <div className="bg-white rounded-full p-4 md:p-6 shadow-lg">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="max-h-20  object-contain"
                    />
                  </div>
                </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>

        
        </div>
      </section>

      {/* ================= STATS CARD ================= */}
      <div className="relative">
        <div className="absolute left-1/2 -translate-x-1/2 -top-52 w-[90%] md:w-[85%] lg:w-[75%] z-60">
          <div className="bg-white rounded-[32px] shadow-2xl px-8 md:px-14 py-10 md:py-12 transform transition-transform hover:-translate-y-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
              {clients[0].stats.map((stat, i) => (
                <div key={i}>
                  <h4 className="text-3xl md:text-4xl font-extrabold text-blue-500 mb-2">
                    {stat.value}
                  </h4>
                  <p className="text-gray-700 text-sm md:text-base leading-snug">
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
