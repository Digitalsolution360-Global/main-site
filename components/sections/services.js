"use client";

import { HoverExpand_001 } from "../ui/hover-expand";
import { motion } from "motion/react";

function Services() {
    const images = [
        {
            src: "/home/images/offerings/digital-marketing.webp",
            text: "Digital Marketing Service",
            description: "Maximize your online presence with our targeted digital marketing strategies.",
            link: "/digital-marketing",
            alt: "Digital Marketing Service",
            code: "# 01",
        },
        {
            src: "/home/images/offerings/web-development.webp",
            text: "Web Development Service",
            description: "Build responsive and high-performing websites tailored to your business needs.",
            link: "/web-app-development",
            alt: "Web App Development Service",
            code: "# 02",
        },
        {
            src: "/home/images/offerings/seo.webp",
            text: "SEO Service",
            description: "Improve your website's visibility on search engines and attract more organic traffic.",
            link: "/seo",
            alt: "SEO Service",
            code: "# 03",
        },
        {
            src: "/home/images/offerings/brand-creative.webp",
            text: "Brand & Creative Service",
            description: "Craft a unique brand identity and compelling visuals that resonate with your audience.",
            link: "/brand-creative",
            alt: "Brand & Creative Service",
            code: "# 04",
        },
        {
            src: "/home/images/offerings/media-advertising.webp",
            text: "Media & Advertising Service",
            description: "Amplify your brand's reach with our strategic media planning and advertising solutions.",
            link: "/media-advertising",
            alt: "Media & Advertising Service",
            code: "# 05",
        },
        {
            src: "/home/images/offerings/automation-solutions.webp",
            text: "Automation Solutions Service",
            description: "Streamline your operations and improve efficiency with our automation solutions.",
            link: "/automation-solution",
            alt: "Automation Solutions Service",
            code: "# 06",
        },
        {
            src: "/home/images/offerings/managed-services.webp",
            text: "Managed Services",
            description: "Get comprehensive support and management for your IT infrastructure and applications.",
            link: "/managed-service",
            alt: "Managed Services",
            code: "# 07",
        }
    ];

  return(
    <section className="py-10">
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
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
        >
            <HoverExpand_001 images={images} className=""/>
        </motion.div>

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