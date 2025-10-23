"use client";

import React from 'react'
import Header from './header'
import Footer from './footer'
import { CoolHeader } from './cool-header'
import { motion } from 'motion/react'
import FloatCta from '../sections/floatCta';

function BgLayout({ children }) {
  return (
    <>
      <Header />
      {/* <CoolHeader/> */}
      
      {/* Animated Background */}
      <div className='fixed inset-0 -z-10 overflow-hidden pointer-events-none'>
        {/* Gradient Background */}
        <div className='absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-purple-50/20'></div>
        
        {/* Floating Circles */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className='absolute top-20 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl'
        />
        
        <motion.div
          animate={{
            y: [0, 40, 0],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className='absolute top-40 right-20 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl'
        />
        
        <motion.div
          animate={{
            y: [0, -40, 0],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
          className='absolute bottom-40 left-1/4 w-80 h-80 bg-pink-200/15 rounded-full blur-3xl'
        />
        
        <motion.div
          animate={{
            y: [0, 30, 0],
            x: [0, -20, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className='absolute bottom-20 right-1/3 w-64 h-64 bg-indigo-200/20 rounded-full blur-3xl'
        />

        {/* Geometric Shapes */}
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className='absolute top-1/4 right-1/4 w-32 h-32 border-2 border-blue-200/30 rounded-lg'
        />
        
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className='absolute bottom-1/4 left-1/4 w-32 h-32 border-2 border-purple-200/30 rounded-2xl'
        />

        {/* Grid Pattern Overlay */}
        <div 
          className='absolute inset-0 opacity-[0.05]'
          style={{
            backgroundImage: `
              linear-gradient(to right, #3b82f6 1px, transparent 1px),
              linear-gradient(to bottom, #3b82f6 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
        />

        {/* Dots Pattern */}
        <div 
          className='absolute inset-0 opacity-[0.04]'
          style={{
            backgroundImage: 'radial-gradient(circle, #6366f1 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <main className='relative z-0'>
        {children}
        <FloatCta/>
      </main>
      <Footer />
    </>
  )
}

export default BgLayout