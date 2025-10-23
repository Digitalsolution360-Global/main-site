"use client"
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { FaPhone, FaWhatsapp, FaTimes } from 'react-icons/fa'

function FloatCta() {
  const [isVisible, setIsVisible] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [showThankYou, setShowThankYou] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector('footer')
      if (footer) {
        const footerRect = footer.getBoundingClientRect()
        const windowHeight = window.innerHeight
        
        // Hide CTA when footer comes into view with some buffer (100px before footer)
        if (footerRect.top <= windowHeight) {
          setIsVisible(false)
        } else {
          setIsVisible(true)
        }
      }
    }

    // Throttle scroll events for better performance
    let ticking = false
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', throttledHandleScroll, { passive: true })
    // Check initial state
    handleScroll()
    
    return () => window.removeEventListener('scroll', throttledHandleScroll)
  }, [])

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

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const formData = new FormData(form)

    // Submit form data using fetch
    fetch('https://formsubmit.co/globalweb3600@gmail.com', {
      method: 'POST',
      body: formData
    })
    .then(() => {
      setShowForm(false)
      setShowThankYou(true)
      form.reset()
    })
    .catch((error) => {
      console.error('Error:', error)
      alert('Something went wrong. Please try again.')
    })
  }

  if (!isVisible) return null

  return (
    <>
      <section className='fixed bottom-0 sm:hidden left-0 right-0 flex justify-center z-35'>
        <div className='w-full flex shadow-2xl'>
          {/* Left Half - Blue - Get Free Support */}
          <button
            onClick={() => setShowForm(true)}
            className='w-1/2 text-lg bg-blue-600 text-white py-3 font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center'
          >
            Get Free Support
          </button>

          {/* Right Half - White - Contact Icons */}
          <div className='w-1/2 bg-white flex'>
            <Link 
              href="https://wa.me/919990556217" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-1/2 flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <FaWhatsapp className="text-3xl text-green-500" />
            </Link>

            <Link 
              href="tel:+919990556217" 
              className="w-1/2 flex items-center justify-center hover:bg-gray-100 transition-colors border-l border-gray-200"
            >
              <FaPhone className="text-3xl text-blue-600 rotate-90" />
            </Link>
          </div>
        </div>
      </section>

      {/* Popup Form */}
      {showForm && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4'>
          <div className='bg-white rounded-lg shadow-2xl w-full max-w-md relative animate-fadeIn'>
            {/* Close Button */}
            <button
              onClick={() => setShowForm(false)}
              className='absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors'
            >
              <FaTimes className="text-2xl" />
            </button>

            {/* Form Content */}
            <div className='p-6'>
              <h2 className='text-2xl font-bold text-gray-900 mb-2'>Get Free Support</h2>
              <p className='text-gray-600 mb-6'>Fill in your details and we&apos;ll get back to you shortly.</p>

              <form 
                onSubmit={handleSubmit}
                className='space-y-4'
              >
                {/* FormSubmit Configuration */}
                <input type="hidden" name="_subject" value="New Free Support Request - Digital Solution 360" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />

                {/* Name Field */}
                <div>
                  <label htmlFor="name" className='block text-sm font-medium text-gray-700 mb-1'>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all'
                    placeholder='Enter your name'
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className='block text-sm font-medium text-gray-700 mb-1'>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all'
                    placeholder='Enter your email'
                  />
                </div>

                {/* Phone Field */}
                <div>
                  <label htmlFor="phone" className='block text-sm font-medium text-gray-700 mb-1'>
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    pattern="[0-9]{10,15}"
                    className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all'
                    placeholder='Enter your phone number'
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className='w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors mt-6'
                >
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Thank You Modal */}
      {showThankYou && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4'>
          <div className='bg-white rounded-lg shadow-2xl w-full max-w-md relative animate-fadeIn p-8 text-center'>
            {/* Close Button */}
            <button
              onClick={() => setShowThankYou(false)}
              className='absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors'
            >
              <FaTimes className="text-2xl" />
            </button>

            {/* Success Icon */}
            <div className='w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4'>
              <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>

            <h2 className='text-3xl font-bold text-gray-900 mb-3'>Thank You!</h2>
            <p className='text-gray-600 text-lg mb-2'>Your request has been submitted successfully.</p>
            <p className='text-gray-500 text-sm'>We&apos;ll get back to you shortly.</p>
            
            {/* Auto-close indicator */}
            <p className='text-gray-400 text-xs mt-6'>This window will close automatically in 5 seconds</p>
          </div>
        </div>
      )}
    </>
  )
}

export default FloatCta;