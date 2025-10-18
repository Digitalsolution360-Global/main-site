"use client";

import { IconCloud } from "@/components/ui/interactive-icon-cloud"
import { motion } from "motion/react"
import { 
  SiReact, 
  SiNextdotjs, 
  SiVuedotjs, 
  SiNodedotjs, 
  SiLaravel, 
  SiPhp, 
  SiRubyonrails, 
  SiPython, 
  SiWordpress, 
  SiWebflow, 
  SiWix, 
  SiContentful, 
  SiUmbraco, 
  SiSquarespace,
  SiStrapi,
  SiShopify,
  SiPrestashop,
  SiOctobercms
} from 'react-icons/si'

const technologies = [
  { name: "React", slug: "react", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", slug: "nextdotjs", icon: SiNextdotjs, color: "#000000" },
  { name: "Vue.js", slug: "vuedotjs", icon: SiVuedotjs, color: "#4FC08D" },
  { name: "Node.js", slug: "nodedotjs", icon: SiNodedotjs, color: "#339933" },
  { name: "Laravel", slug: "laravel", icon: SiLaravel, color: "#FF2D20" },
  { name: "PHP", slug: "php", icon: SiPhp, color: "#777BB4" },
  { name: "Ruby on Rails", slug: "rubyonrails", icon: SiRubyonrails, color: "#CC0000" },
  { name: "Python", slug: "python", icon: SiPython, color: "#3776AB" },
  { name: "WordPress", slug: "wordpress", icon: SiWordpress, color: "#21759B" },
  { name: "Webflow", slug: "webflow", icon: SiWebflow, color: "#4353FF" },
  { name: "Wix", slug: "wix", icon: SiWix, color: "#0C6EFC" },
  { name: "Contentful", slug: "contentful", icon: SiContentful, color: "#2478CC" },
  { name: "Umbraco", slug: "umbraco", icon: SiUmbraco, color: "#3544B1" },
  { name: "Squarespace", slug: "squarespace", icon: SiSquarespace, color: "#000000" },
  { name: "Strapi", slug: "strapi", icon: SiStrapi, color: "#2F2E8B" },
  { name: "Shopify", slug: "shopify", icon: SiShopify, color: "#7AB55C" },
  { name: "PrestaShop", slug: "prestashop", icon: SiPrestashop, color: "#DF0067" },
  { name: "October CMS", slug: "octobercms", icon: SiOctobercms, color: "#F26D00" }
]

const slugs = technologies.map(tech => tech.slug)

export function WebDev() {
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-blue-600">Technology Stack</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We leverage cutting-edge technologies to build powerful, scalable web solutions tailored to your needs.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Technology Grid */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {technologies.map((tech, index) => {
                const Icon = tech.icon
                return (
                  <motion.div
                    key={tech.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center gap-3 cursor-pointer group"
                  >
                    <div className="relative">
                      <Icon 
                        size={40} 
                        style={{ color: tech.color }}
                        className="transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <p className="text-sm font-semibold text-gray-700 text-center">
                      {tech.name}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Right Side - 3D Icon Cloud */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-lg aspect-square">
              {/* Glow effect behind cloud */}
              <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-3xl"></div>
              
              <div className="relative">
                <IconCloud iconSlugs={slugs} />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
