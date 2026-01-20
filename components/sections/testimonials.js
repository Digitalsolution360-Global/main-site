"use client";

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import Link from 'next/link'
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react'

function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isHovered, setIsHovered] = useState(false)
    const [direction, setDirection] = useState(0)

    const testimonials = [
        {
            name: "Dr. Poonam Brahmadeen Singh",
            role: "Clinic Owner, Andheri Dental Care",
            content: "Digital360 transformed our online presence completely. Our patient bookings increased by 150% within 3 months of launching the new website. Their team understood our needs perfectly.",
            rating: 5,
            image: "/testimonials/avatar-1.jpg",
            company: "Andheri Dental Care"
        },
        {
            name: "Rajesh Kumar",
            role: "CEO, Preesha Global",
            content: "The ecommerce platform they built is incredibly fast and user-friendly. Our conversion rates doubled, and the backend management system makes our operations so much easier.",
            rating: 5,
            image: "/testimonials/avatar-2.jpg",
            company: "Preesha Global"
        },
        {
            name: "Michael Chen",
            role: "Founder, WattGuru",
            content: "Outstanding digital marketing results! Our website traffic grew 300% and we're now ranking on the first page for all our target keywords. The ROI has been exceptional.",
            rating: 5,
            image: "/testimonials/avatar-3.jpg",
            company: "WattGuru"
        },
        {
            name: "Sarvajeet Verma",
            role: "Director, Ceilkraft",
            content: "Professional, responsive, and creative team. They delivered our website ahead of schedule and the design exceeded our expectations. Highly recommend their services!",
            rating: 5,
            image: "/testimonials/avatar-4.jpg",
            company: "Ceilkraft"
        },
        {
            name: " Dr. A. Srilatha",
            role: "Managing Partner, Sri Poly Clinic",
            content: "Digital360 built us a sophisticated CRM system that streamlined our entire client management process. The custom features they developed were exactly what we needed.",
            rating: 5,
            image: "/testimonials/avatar-5.jpg",
            company: "Sri Poly Clinic"
        },
        {
            name: " Dr. Vipin Kumar Sharma",
            role: "Owner, Raj Nursing Home",
            content: "Their SEO and Google My Business optimization helped us become the top-ranked healthcare facility in our area. Patient inquiries have increased significantly.",
            rating: 5,
            image: "/testimonials/avatar-6.jpg",
            company: "Raj Nursing Home"
        }
    ];

    const [itemsPerView, setItemsPerView] = useState(3); // Number of cards visible at once (responsive)

    // Responsive items per view
    useEffect(() => {
        const updateItems = () => {
            const w = window.innerWidth;
            if (w < 768) setItemsPerView(1);
            else if (w < 1024) setItemsPerView(2);
            else setItemsPerView(3);
        };

        updateItems();
        window.addEventListener('resize', updateItems);
        return () => window.removeEventListener('resize', updateItems);
    }, []);

    // Auto-advance slider
    useEffect(() => {
        if (!isHovered) {
            const interval = setInterval(() => {
                handleNext();
            }, 3000);
            return () => clearInterval(interval);
        }
    }, [isHovered, currentIndex]);

    const handleNext = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    // Get visible testimonials with infinite wrapping
    const getVisibleTestimonials = () => {
        const visible = [];
        for (let i = 0; i < itemsPerView; i++) {
            const index = (currentIndex + i) % testimonials.length;
            visible.push({ ...testimonials[index], key: `${currentIndex}-${i}` });
        }
        return visible;
    };

    return (
        <section className="py-10 overflow-x-hidden">
            <div className='w-full lg:max-w-[100rem] mx-auto px-4'>

                {/* Section Header */}
                <div className='text-center mb-16'>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className='text-4xl md:text-5xl font-bold mb-4'>
                            What Our <span className='text-blue-600'>Clients </span>Say
                        </h2>
                        <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
                            Don&apos;t just take our word for it. Here&apos;s what our satisfied clients have to say about working with us.
                        </p>
                    </motion.div>
                </div>

                {/* Infinite Testimonials Slider */}
                <div
                    className='relative'
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {/* Navigation Buttons */}
                    <button
                        onClick={handlePrev}
                        className='hidden md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2 md:flex z-20 bg-white/90 hover:bg-white shadow-xl rounded-full p-3 transition-all duration-300 hover:scale-110 group'
                        aria-label="Previous testimonial"
                    >
                        <IconChevronLeft className='w-6 h-6 text-gray-700 group-hover:text-blue-600' />
                    </button>

                    <button
                        onClick={handleNext}
                        className='hidden md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 md:flex z-20 bg-white/90 hover:bg-white shadow-xl rounded-full p-3 transition-all duration-300 hover:scale-110 group'
                        aria-label="Next testimonial"
                    >
                        <IconChevronRight className='w-6 h-6 text-gray-700 group-hover:text-blue-600' />
                    </button>

                       <div className='overflow-hidden px-2 sm:px-4 md:px-8 lg:px-16'>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                            <AnimatePresence mode='popLayout' initial={false}>
                                {getVisibleTestimonials().map((testimonial, index) => (
                                    <motion.div
                                        key={testimonial.key}
                                       initial={{
                                        opacity: 0,
                                        x: direction > 0 ? "100%" : "-100%"
                                        }}

                                        animate={{
                                            opacity: 1,
                                            x: 0
                                        }}
                                       exit={{
                                        opacity: 0,
                                        x: direction > 0 ? "-100%" : "100%"
                                        }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 300,
                                            damping: 30,
                                            opacity: { duration: 0.3 }
                                        }}
                                        whileHover={{
                                            y: -8,
                                            boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                                            transition: { duration: 0.2 }
                                        }}
                                        className='bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100'
                                    >
                                        {/* Rating Stars */}
                                        <div className='flex gap-1 mb-4'>
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <svg
                                                    key={i}
                                                    className='w-5 h-5 text-yellow-400 fill-current'
                                                    viewBox='0 0 20 20'
                                                >
                                                    <path d='M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z' />
                                                </svg>
                                            ))}
                                        </div>

                                      {/* Testimonial Content */}
                                    <p className='text-gray-700 mb-6 leading-relaxed text-base max-w-xl mx-auto'>
                                        &quot;{testimonial.content}&quot;
                                    </p>

                                    <div className='flex flex-col md:flex-row items-center md:items-start gap-4 pt-4 border-t border-gray-100 text-center md:text-left max-w-xl mx-auto'>
                                        <div className='w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg flex-shrink-0 mx-auto md:mx-0'>
                                            {testimonial.name.charAt(0)}
                                        </div>
                                        <div>
                                            <h4 className='font-semibold text-gray-900'>{testimonial.name}</h4>
                                            <p className='text-sm text-gray-600'>{testimonial.role}</p>
                                            <p className='text-xs text-blue-600 font-medium mt-1'>{testimonial.company}</p>
                                        </div>
                                    </div>


                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Mobile nav buttons (below cards) */}
                    <div className='flex md:hidden justify-center gap-4 mt-6'>
                        <button
                            onClick={handlePrev}
                            className='bg-white/90 hover:bg-white shadow rounded-full p-3 transition-all duration-200'
                            aria-label="Previous testimonial"
                        >
                            <IconChevronLeft className='w-5 h-5 text-gray-700' />
                        </button>

                        <button
                            onClick={handleNext}
                            className='bg-white/90 hover:bg-white shadow rounded-full p-3 transition-all duration-200'
                            aria-label="Next testimonial"
                        >
                            <IconChevronRight className='w-5 h-5 text-gray-700' />
                        </button>
                    </div>

                    {/* Pagination Dots */}
                    <div className='flex justify-center gap-2 mt-8'>
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setDirection(index > currentIndex ? 1 : -1);
                                    setCurrentIndex(index);
                                }}
                                className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                    ? 'w-8 bg-blue-600'
                                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                                    }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className='text-center mt-16'
                >
                    <p className='text-lg text-gray-600 mb-6'>
                        Join hundreds of satisfied clients who transformed their business with us
                    </p>
                    <Link href="/contact" description="Get in touch with us for your project">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className='bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-blue-700 transition-colors duration-300'
                        >
                            Start Your Project Today
                        </motion.button>
                    </Link>
                </motion.div>

            </div>
        </section>
    )
}

export default Testimonials