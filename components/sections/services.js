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
        
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
        >
            <HoverExpand_001 images={images} className=""/>
        </motion.div>
    </section>
  );
}

export default Services;