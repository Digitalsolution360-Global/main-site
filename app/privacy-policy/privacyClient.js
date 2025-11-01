"use client";

import BgLayout from '@/components/layout/bgLayout'
import Clients from '@/components/sections/clients'
import React, { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { IconTarget, IconUsers, IconTrophy, IconHeart, IconRocket, IconBulb, IconHome, IconChevronRight } from '@tabler/icons-react'
import Link from 'next/link'

function PrivacyPage() {
  return (
    <BgLayout>
      {/* Hero Section with Background Image */}
      <section className='relative h-[50vh] mt-21 lg:mt-15 flex items-center justify-center overflow-hidden'>
        {/* Background Image */}
        <div className='absolute inset-0'>
          <img
            src="/about/hero-image.webp"
            alt="Privacy Policy"
            className='w-full h-full object-cover'
          />
          {/* Overlay */}
          <div className='absolute inset-0 bg-black/70'></div>
        </div>

        {/* Content */}
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
            <span className='text-blue-200'>Privacy Policy</span>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold mb-6'>
              Privacy <span className='text-blue-500'>Policy</span>
            </h1>
          </motion.div>
        </div>
      </section>
  <section className="bg-gray-50 py-12">
      <div className="container max-w-7xl mx-auto px-4 md:px-8 space-y-10">
        
        {/* Section 1 */}
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}>
          <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-white rounded-2xl shadow">
              <h3 className="text-xl font-semibold mb-3">a) Personal Information</h3>
              <p className="mb-2">
                We may collect information that personally identifies you, such as:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  Contact details: name, email address, phone number, company name (when voluntarily provided—for inquiries, services, or job applications).
                </li>
                <li>
                  Transactional data: details about services you request or purchases (if applicable).
                </li>
              </ul>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow">
              <h3 className="text-xl font-semibold mb-3">b) Non-Personal Information</h3>
              <p className="mb-2">
                Automatically collected when you use our Site, including:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Browser type, operating system, IP address, device type.</li>
                <li>Pages you view, time spent, referring URLs, search terms, and other clickstream data.</li>
                <li>Cookies and similar tracking technologies to enhance your browsing experience.</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Section 2 */}
        <div>
          <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Provide and manage the requested services or resources.</li>
            <li>Respond to inquiries, comments, or customer support requests.</li>
            <li>Enhance and personalize your experience on our Site.</li>
            <li>Understand usage patterns to improve our Site and offerings.</li>
            <li>Communicate important information or updates about our services.</li>
            <li>Comply with legal obligations or enforce our policies.</li>
          </ul>
        </div>

        {/* Section 3 */}
        <div>
          <h2 className="text-2xl font-bold mb-4">3. Disclosure of Your Information</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>With service providers (hosting, IT support, analytics, etc.).</li>
            <li>During legal processes, if required by law.</li>
            <li>In the event of a business transfer (merger, acquisition, sale of assets).</li>
            <li>With your explicit consent for specific purposes.</li>
          </ul>
        </div>

        {/* Section 4 */}
        <div>
          <h2 className="text-2xl font-bold mb-4">4. Cookies &amp; Tracking Technologies</h2>
          <p className="mb-2">We use cookies, web beacons, and similar methods to:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Remember your preferences.</li>
            <li>Analyze Site usage and performance.</li>
            <li>Serve relevant content and enhance functionality.</li>
          </ul>
          <p className="mt-2">
            You can manage or disable cookies via your browser settings, but this may limit access to certain features.
          </p>
        </div>

        {/* Section 5 */}
        <div>
          <h2 className="text-2xl font-bold mb-4">5. Data Security &amp; Retention</h2>
          <p>
            We implement reasonable safeguards to protect your information from unauthorized access or misuse. We retain your Personal Information only as long as necessary to fulfill purposes outlined in this Policy, unless a longer retention period is legally required.
          </p>
        </div>

        {/* Section 6 */}
        <div>
          <h2 className="text-2xl font-bold mb-4">6. International Data Transfers</h2>
          <p>
            If your data is transferred internationally, we ensure appropriate protections—such as standard contractual clauses—are in place to maintain security and compliance.
          </p>
        </div>

        {/* Section 7 */}
        <div>
          <h2 className="text-2xl font-bold mb-4">7. Your Rights</h2>
          <p className="mb-2">Depending on applicable law, you may have rights to:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Access, correct, or update your personal information.</li>
            <li>Request deletion or restrict processing.</li>
            <li>Withdraw consent or object to certain processing.</li>
            <li>Lodge a complaint with a relevant data protection authority.</li>
          </ul>
        </div>

        {/* Section 8 */}
        <div>
          <h2 className="text-2xl font-bold mb-4">8. Children’s Privacy</h2>
          <p>
            Our Site is not intended for children under 13. We do not knowingly collect their data. If we learn we have, we’ll delete it immediately.
          </p>
        </div>

        {/* Section 9 */}
        <div>
          <h2 className="text-2xl font-bold mb-4">9. Third-Party Links</h2>
          <p>
            Our Site may contain links to third-party websites. We’re not responsible for their privacy policies or content. Please review their policies before using those sites.
          </p>
        </div>

        {/* Section 10 */}
        <div>
          <h2 className="text-2xl font-bold mb-4">10. Updates to This Policy</h2>
          <p>
            We may update this Policy from time to time. The Effective Date at the top will reflect the latest revision. If we make significant changes, we’ll notify you (e.g., via Site notice or email). Please review periodically.
          </p>
        </div>

        {/* Section 11 */}
        <div>
          <h2 className="text-2xl font-bold mb-4">11. Contact Us</h2>
          <p className="mb-2">
            If you have any questions about this Policy or wish to exercise your rights, contact us:
          </p>
          <ul className="list-disc list-inside">
            <li>
              <span className="font-semibold">Company:</span> Digital Solution 360 Pvt. Ltd.
            </li>
            <li>
              <span className="font-semibold">Email:</span> info@digitalsolution360.in
            </li>
            <li>
              <span className="font-semibold">Phone:</span> +91 99905 56217
            </li>
            <li>
              <span className="font-semibold">Address:</span> B-76, Basement, Noida Sector-2, Near Noida Sector-15 Metro Station, Uttar Pradesh – 201301
            </li>
          </ul>
        </div>

      </div>
    </section>
    </BgLayout>
  )
}

export default PrivacyPage
