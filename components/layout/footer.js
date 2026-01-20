"use client";

import Link from 'next/link'
import React from 'react'
import { motion } from 'motion/react'
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa6'
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";


function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-gray-900 text-white py-8 overflow-x-hidden'>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* WhatsApp Floating Chat Button */}
       <div className="hidden md:block fixed bottom-4 right-4 z-50">

          <button
            onClick={() => window.open("https://wa.me/919990556217", "_blank")}
            className="bg-green-500 p-3 rounded-full shadow-lg animate-bounce"
          >
            <FaWhatsapp size={40} />
          </button>
        </div>

        {/* Main Footer Content */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12'>
          
          {/* Company Info */}
          <div>
            <img src="/logo.png" alt="Digital Solution 360 Logo" className='w-50 mb-4 brightness-0 invert' />
            <p className='text-gray-400 text-sm mb-4'>
              Elevate your brand with expert digital marketing, SEO services, and web development. Proven strategies, expert team, results you can see.
            </p>
            {/* Social Links */}
            <div className='flex gap-4'>
              <motion.a 
                href="https://www.facebook.com/digitalsolution360india"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className='bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition-colors'
              >
                <FaFacebook size={20} />
              </motion.a>
              <motion.a 
                href="https://www.instagram.com/digitalsolution.360/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className='bg-gradient-to-br from-purple-600 via-pink-600 to-orange-600 p-2 rounded-full hover:opacity-90 transition-opacity'
              >
                <FaInstagram size={20} />
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/company/digital-solution-360-global"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className='bg-blue-700 p-2 rounded-full hover:bg-blue-800 transition-colors'
              >
                <FaLinkedin size={20} />
              </motion.a>
              <motion.a 
                href="https://www.youtube.com/@digitalsolution360"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className='bg-red-600 p-2 rounded-full hover:bg-red-700 transition-colors'
              >
                <FaYoutube size={20} />
              </motion.a>
            </div> 
            <div className='mt-4'>
              <Link href="/market-we-serve" className='text-gray-300 hover:text-white transition-colors text-lg underline hover:no-underline'>
                Markets We Serve
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='text-lg font-semibold mb-4'>Quick Links</h3>
            <ul className='space-y-2'>
              <li><Link href="/" className='text-gray-400 hover:text-white transition-colors'>Home</Link></li>
              <li><Link href="/about" className='text-gray-400 hover:text-white transition-colors'>About Us</Link></li>
              <li><Link href="/services" className='text-gray-400 hover:text-white transition-colors'>Our Services</Link></li>
              <li><Link href="/portfolio" className='text-gray-400 hover:text-white transition-colors'>Portfolio</Link></li>
              <li><Link href="/careers" className='text-gray-400 hover:text-white transition-colors'>Careers</Link></li>
              <li><Link href="/blogs" className='text-gray-400 hover:text-white transition-colors'>Blogs</Link></li>
              <li><Link href="/contact" className='text-gray-400 hover:text-white transition-colors'>Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className='text-lg font-semibold mb-4'>Our Services</h3>
            <ul className='space-y-2'>
              <li><Link href="/digital-marketing" className='text-gray-400 hover:text-white transition-colors'>Digital Marketing</Link></li>
              <li><Link href="/web-app-development" className='text-gray-400 hover:text-white transition-colors'>Website Development</Link></li>
              <li><Link href="/seo" className='text-gray-400 hover:text-white transition-colors'>SEO Services</Link></li>
              <li><Link href="/brand-creative" className='text-gray-400 hover:text-white transition-colors'>Brand & Creative</Link></li>
              <li><Link href="/media-advertising" className='text-gray-400 hover:text-white transition-colors'>Social Media Marketing</Link></li>
              <li><Link href="/automation-solution" className='text-gray-400 hover:text-white transition-colors'>Automation Solutions</Link></li>
              <li><Link href="/managed-service" className='text-gray-400 hover:text-white transition-colors'>Managed Services</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className='text-lg font-semibold mb-4'>Contact Us</h3>
            <ul className='space-y-4'>
              <li className='flex items-start gap-3'>
                <FaMapMarkerAlt size={20} className='text-blue-500 flex-shrink-0 mt-1' />
                <span className='text-gray-400 text-sm'>
                  Juma Suhail Building,<br />
                  11, 27 street,<br />
                  Port Saeed, Deira, Dubai, Dubai Municipality
                </span>
              </li>
              <li className='flex items-center gap-3'>
                <FaPhoneAlt size={20} className='text-blue-500 flex-shrink-0' />
                <a href="tel:+919990556217" className='text-gray-400 hover:text-white transition-colors'>
                  +91 99905 56217
                </a>
              </li>
              <li className='flex items-center gap-3'>
                <MdEmail size={20} className='text-blue-500 flex-shrink-0' />
                <a href="mailto:info@digitalsolution360.in" className='text-gray-400 hover:text-white transition-colors'>
                  info@digitalsolution360.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className='border-t border-gray-800 pt-8'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
            <p className='text-gray-400 text-sm text-center md:text-left'>
              © {currentYear} Digital Solution 360. All rights reserved.
            </p>
            <div className='flex gap-6 text-sm'>
              <Link href="/privacy-policy" className='text-gray-400 hover:text-white transition-colors'>
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
