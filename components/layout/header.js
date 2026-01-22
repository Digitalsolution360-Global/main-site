"use client";

import Link from 'next/link'
import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'motion/react'
import { IconMenu2, IconX, IconChevronDown } from '@tabler/icons-react'
import { FaTimes } from 'react-icons/fa'

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hovered, setHovered] = useState(null);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const ref = useRef(null);
const [activeService, setActiveService] = useState(null);
const [mobileActiveService, setMobileActiveService] = useState(null);





  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  const servicesMenu = [
  {
    title: "Digital Marketing Services",
    slug: "/digital-marketing-services",
    children: [
      { title: "Performance Marketing", slug: "/performance-marketing-services" },
      { title: "Growth Marketing", slug: "/growth-marketing-services" },
      { title: "Google Ads Management", slug: "/google-ads-management-services" },
      { title: "Facebook & Instagram Ads", slug: "/facebook-instagram-ads-services" },
    ],
  },
  {
    title: "Website Development",
    slug: "/website-development-services",
    children: [
      { title: "Web Design Services", slug: "/web-design-services" },
      { title: "UI/UX Design", slug: "/ui-ux-design-services" },
      { title: "WordPress Development", slug: "/wordpress-development-services" },
      { title: "Shopify Development", slug: "/shopify-development-services" },
      { title: "Landing Page Design", slug: "/landing-page-design-services" },
    ],
  },
  {
    title: "SEO Services",
    slug: "/seo-services",
    children: [
      { title: "Local SEO", slug: "/local-seo-services" },
      { title: "Ecommerce SEO", slug: "/ecommerce-seo-services" },
      { title: "Technical SEO", slug: "/technical-seo-services" },
      { title: "On-Page SEO", slug: "/on-page-seo-services" },
      { title: "Off-Page SEO", slug: "/off-page-seo-services" },
      { title: "SEO Audit", slug: "/seo-audit-services" },
      { title: "AI SEO", slug: "/ai-seo-services" },
    ],
  },
  {
    title: "Branding Services",
    slug: "/branding-services",
    children: [
      { title: "Brand Identity Design", slug: "/brand-identity-design" },
      { title: "Logo Design", slug: "/logo-design-services" },
      { title: "Graphic Design", slug: "/graphic-design-services" },
      { title: "Creative for Ads", slug: "/creative-design-for-ads" },
      { title: "Performance Creatives", slug: "/performance-creatives" },
    ],
  },
  {
    title: "Social Media Marketing",
    slug: "/social-media-marketing-services",
    children: [
      { title: "Social Media Management", slug: "/social-media-management-services" },
      { title: "Instagram Marketing", slug: "/instagram-marketing-services" },
      { title: "Facebook Marketing", slug: "/facebook-marketing-services" },
      { title: "LinkedIn Marketing", slug: "/linkedin-marketing-services" },
      { title: "YouTube Marketing", slug: "/youtube-marketing-services" },
      { title: "Influencer Marketing", slug: "/influencer-marketing-services" },
      { title: "Short Video Marketing", slug: "/short-video-marketing" },
    ],
  },
  {
    title: "Automation Solutions",
    slug: "/marketing-automation-services",
    children: [
    { title: "Marketing Automation", slug: "/marketing-automation-services" },
      { title: "CRM Automation", slug: "/crm-automation-solutions" },
      { title: "Lead Automation", slug: "/lead-automation-services" },
      { title: "Email Automation", slug: "/email-marketing-automation" },
      { title: "WhatsApp Automation", slug: "/whatsapp-automation-services" },
      { title: "Sales Funnel Automation", slug: "/sales-funnel-automation" },
      { title: "AI Marketing Automation", slug: "/ai-marketing-automation" },
    ],
  },
  {
    title: "Managed Services",
    slug: "/digital-marketing-managed-services",
    children: [
      { title: "Digital Marketing Managed", slug: "/digital-marketing-managed-services" },
      { title: "SEO Managed Services", slug: "/seo-managed-services" },
      { title: "PPC Managed Services", slug: "/ppc-managed-services" },
      { title: "Social Media Managed", slug: "/social-media-managed-services" },
      { title: "Startup Marketing", slug: "/startup-marketing-services" },
      { title: "SaaS Marketing", slug: "/saas-marketing-services" },
      { title: "Ecommerce Marketing", slug: "/ecommerce-marketing-services" },
      { title: "B2B Marketing", slug: "/b2b-digital-marketing-services" },
    ],
  },
];


  // Prevent body scroll when form is open
  useEffect(() => {
    if (showForm || showThankYou) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [showForm, showThankYou])

  // Auto close thank you modal after 5 seconds
  useEffect(() => {
    if (showThankYou) {
      const timer = setTimeout(() => {
        setShowThankYou(false)
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [showThankYou])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.target
    const formData = new FormData(form)

    try {
      // Save to database
      await fetch('/api/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          phone: formData.get('phone'),
          country_code: '+91',
          company: null,
          website: null,
          services: null,
          message: null,
          source: 'header_quote',
          page_url: window.location.pathname
        })
      })

      // Send email notification
      await fetch('https://formsubmit.co/globalweb3600@gmail.com', {
        method: 'POST',
        body: formData
      })

      setShowForm(false)
      setShowThankYou(true)
      form.reset()
    } catch (error) {
      console.error('Error:', error)
      alert('Something went wrong. Please try again.')
    }
  }

  return (
    
  )
}

export default Header
