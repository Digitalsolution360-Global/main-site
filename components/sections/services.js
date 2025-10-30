"use client";

import { HoverExpand_001 } from "../ui/hover-expand";
import { motion } from "motion/react";

function Services() {
    const images = [
        {
            src: "/home/images/offerings/digital-marketing.webp",
            text: "Digital Marketing Service",
            description: "Maximize your online presence with our comprehensive digital marketing strategies that drive real results.",
            link: "/digital-marketing",
            alt: "Digital Marketing Service",
            code: "# 01",
        },
        {
            src: "/home/images/offerings/web-development.webp",
            text: "Web Development Service",
            description: "Build responsive, high-performing websites tailored to your unique business needs.",
            link: "/web-app-development",
            alt: "Web App Development Service",
            code: "# 02",
        },
        {
            src: "/home/images/offerings/seo.webp",
            text: "SEO Service",
            description: "Improve your website's visibility on search engines and attract more qualified organic traffic.",
            link: "/seo",
            alt: "SEO Service",
            code: "# 03",
        },
        {
            src: "/home/images/offerings/brand-creative.webp",
            text: "Brand & Creative Service",
            description: "Craft a unique brand identity and compelling visuals that truly resonate with your target audience.",
            link: "/brand-creative",
            alt: "Brand & Creative Service",
            code: "# 04",
        },
        {
            src: "/home/images/offerings/media-advertising.webp",
            text: "Media & Advertising Service",
            description: "Amplify your brand's reach with our strategic media planning and innovative advertising solutions.",
            link: "/media-advertising",
            alt: "Media & Advertising Service",
            code: "# 05",
        },
        {
            src: "/home/images/offerings/automation-solutions.webp",
            text: "Automation Solutions",
            description: "Streamline your operations and dramatically improve efficiency with our automation solutions.",
            link: "/automation-solution",
            alt: "Automation Solutions Service",
            code: "# 06",
        },
        {
            src: "/home/images/offerings/managed-services.webp",
            text: "Managed Services",
            description: "Get support and management for your entire IT infrastructure and business applications.",
            link: "/managed-service",
            alt: "Managed Services",
            code: "# 07",
        }
    ];

  return(
    <section className="py-10 mt-20 sm:mt-0">
        <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold text-center mx-auto mb-4"
        >
            Comprehensive <span className="text-blue-500">Digital Marketing</span> Services
        </motion.h2>
        
        <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-center mx-auto max-w-3xl mb-4"
        >
            We offer a full suite of services to build, optimize, and promote your digital footprint. From crafting your online storefront to ensuring customers find it, we handle every aspect of your digital journey.
        </motion.p>
        
        {/* Desktop Version - Hidden below lg */}
        <div className="hidden lg:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Featured First Service - Large Hero Card */}
            <motion.a
                href={images[0].link}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="group relative block mb-8 overflow-hidden rounded-3xl shadow-2xl hover:shadow-blue-500/30 transition-all duration-700"
            >
                <div className="relative h-[500px] overflow-hidden">
                    <img
                        src={images[0].src}
                        alt={images[0].alt}
                        loading="eager"
                        fetchPriority="high"
                        width={1200}
                        height={500}
                        className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 group-hover:blur-sm"
                    />
                    {/* Animated Gradient Overlay */}
                    <div className="absolute inset-0  bg-black/40 transition-all duration-700"></div>
                    
                    {/* Animated Border */}
                    <div className="absolute inset-0 border-4 border-transparent group-hover:border-white/30 rounded-3xl transition-all duration-500"></div>
                    
                    {/* Content Container */}
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-12">
                        {/* Badge */}
                        {/* <motion.div 
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                            className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-full mb-6 border border-white/30"
                        >
                            <span className="text-white font-bold text-lg">{images[0].code} • Featured Service</span>
                        </motion.div> */}
                        
                        {/* Title */}
                        <h3 className="text-6xl font-black text-white mb-6 group-hover:scale-110 transition-transform duration-500">
                            {images[0].text}
                        </h3>
                        
                        {/* Description */}
                        <p className="text-2xl text-white/90 mb-8 max-w-3xl leading-relaxed">
                            {images[0].description}
                        </p>
                        
                        {/* CTA Button */}
                        <div className="relative">
                            <div className="absolute inset-0 bg-white/30 blur-xl rounded-full group-hover:blur-2xl transition-all duration-500"></div>
                            <button className="relative bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-xl hover:bg-blue-50 transition-all duration-300 flex items-center gap-3 group-hover:scale-110">
                                Explore This Service
                                <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    
                    {/* Floating Particles Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                        {[...Array(20)].map((_, i) => (
                            <div
                                key={i}
                                className="absolute w-2 h-2 bg-white rounded-full animate-float"
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                    animationDelay: `${Math.random() * 3}s`,
                                    animationDuration: `${3 + Math.random() * 4}s`
                                }}
                            ></div>
                        ))}
                    </div>
                </div>
            </motion.a>

            {/* Grid of Remaining Services - 3 Columns */}
            <div className="grid grid-cols-3 gap-6">
                {images.slice(1).map((service, index) => (
                    <motion.a
                        key={index}
                        href={service.link}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
                        className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500"
                    >
                        <div className="relative h-96 overflow-hidden">
                            <img
                                src={service.src}
                                alt={service.alt}
                                loading="lazy"
                                width={600}
                                height={384}
                                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                            />
                            
                            {/* Dynamic Color Overlay */}
                            {/* <div className={`absolute inset-0 bg-gradient-to-b transition-all duration-500 ${
                                index === 0 ? 'from-orange-600/80 to-red-600/90 group-hover:from-orange-700/90 group-hover:to-red-700/95' :
                                index === 1 ? 'from-green-600/80 to-emerald-600/90 group-hover:from-green-700/90 group-hover:to-emerald-700/95' :
                                index === 2 ? 'from-pink-600/80 to-purple-600/90 group-hover:from-pink-700/90 group-hover:to-purple-700/95' :
                                index === 3 ? 'from-red-600/80 to-orange-600/90 group-hover:from-red-700/90 group-hover:to-orange-700/95' :
                                index === 4 ? 'from-indigo-600/80 to-purple-600/90 group-hover:from-indigo-700/90 group-hover:to-purple-700/95' :
                                'from-teal-600/80 to-cyan-600/90 group-hover:from-teal-700/90 group-hover:to-cyan-700/95'
                            }`}></div> */}

                            <div className={`absolute inset-0 bg-black/40 transition-all duration-500 `}></div>
                            
                            {/* Number Badge - Animated */}
                            {/* <div className="absolute top-6 right-6 transform group-hover:rotate-12 transition-transform duration-300">
                                <div className="bg-white/90 backdrop-blur-sm text-gray-900 px-5 py-2 rounded-full font-black text-base shadow-lg">
                                    {service.code}
                                </div>
                            </div> */}

                            {/* Content */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                {/* Title with Underline Effect */}
                                <div className="relative mb-4">
                                    <h3 className="text-white text-2xl font-black mb-2 group-hover:mb-3 transition-all duration-300">
                                        {service.text}
                                    </h3>
                                    <div className="h-1 bg-white w-0 group-hover:w-20 transition-all duration-500 rounded-full"></div>
                                </div>
                                
                                {/* Description - Slides Up */}
                                <p className="text-white/90 text-sm leading-relaxed transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 mb-4">
                                    {service.description}
                                </p>
                                
                                {/* Arrow Icon - Animated */}
                                <div className="flex items-center gap-2 text-white font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2">
                                    <span className="text-sm">View Details</span>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </div>

                            {/* Shine Effect on Hover */}
                            <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                        </div>
                    </motion.a>
                ))}
            </div>
        </div>

        {/* Add Floating Animation CSS */}
        <style jsx>{`
            @keyframes float {
                0%, 100% {
                    transform: translateY(0) translateX(0);
                    opacity: 0;
                }
                50% {
                    opacity: 1;
                }
                100% {
                    transform: translateY(-100px) translateX(20px);
                    opacity: 0;
                }
            }
            .animate-float {
                animation: float linear infinite;
            }
        `}</style>

        {/* Mobile/Tablet Version - Visible below lg */}
        <div className="lg:hidden px-4 sm:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {images.map((image, index) => (
                    <motion.a
                        key={index}
                        href={image.link}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                    >
                        <div className="relative h-64 sm:h-72 overflow-hidden">
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                            
                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                {/* <div className="flex items-center justify-between mb-2">
                                    <span className="text-blue-400 text-sm font-semibold">{image.code}</span>
                                    <svg
                                        className="w-6 h-6 text-white transform transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                                        />
                                    </svg>
                                </div> */}
                                <h3 className="text-white text-xl font-bold mb-2">
                                    {image.text}
                                </h3>
                                <p className="text-gray-200 text-sm leading-relaxed">
                                    {image.description}
                                </p>
                            </div>
                        </div>
                    </motion.a>
                ))}
            </div>
        </div>
    </section>
  );
}

export default Services;