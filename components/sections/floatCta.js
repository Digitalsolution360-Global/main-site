"use client"
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { FaPhone, FaWhatsapp } from 'react-icons/fa'

function FloatCta() {
  const [isVisible, setIsVisible] = useState(true)

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

  if (!isVisible) return null

  return (
    <section className='fixed bottom-0 sm:hidden left-0 right-0 flex justify-center z-35'>
      <div className='bg-blue-600 text-white p-4 rounded-t-lg shadow-2xl w-full text-center grid grid-cols-2'>
        <div className='bg-white text-blue-500 px-2 py-2 text-lg rounded-lg mr-2 cursor-pointer hover:bg-gray-100 transition-colors'>  
          <Link href="/contact" className="text-blue-500 font-semibold">
            <button className='w-full h-full'>Get Free Support</button>
          </Link>
        </div>

        <div className='flex justify-between items-center gap-2 w-full h-full'>
          <Link href="https://wa.me/919990556217" target="_blank" rel="noopener noreferrer" className="flex-1 h-full">
            <button className='bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors w-full h-full flex items-center justify-center gap-2'>
              <FaWhatsapp className="text-2xl" />
            </button>
          </Link>

          <Link href="tel:+919990556217" className="flex-1 h-full">
            <button className='text-blue-500 bg-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors w-full h-full flex items-center justify-center gap-2'>
              <FaPhone className="text-2xl rotate-90" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FloatCta;