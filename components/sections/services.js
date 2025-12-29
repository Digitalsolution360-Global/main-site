"use client";

import { motion } from "framer-motion";

function Services() {
  const services = [
    {
      src: "/home/images/offerings/digital-marketing.webp",
      title: "Digital Marketing Service",
      description:
        "Maximize your online presence with our comprehensive digital marketing strategies that drive real results.",
      link: "/digital-marketing",
      alt: "Digital Marketing Service",
      gradient: "from-green-100 to-green-200",
    },
    {
      src: "/home/images/offerings/web-development.webp",
      title: "Web Development Service",
      description:
        "Build responsive, high-performing websites tailored to your unique business needs.",
      link: "/web-app-development",
      alt: "Web Development Service",
      gradient: "from-blue-100 to-blue-200",
    },
    {
      src: "/home/images/offerings/seo.webp",
      title: "SEO Service",
      description:
        "Improve your website's visibility on search engines and attract more qualified organic traffic.",
      link: "/seo",
      alt: "SEO Service",
      gradient: "from-yellow-100 to-yellow-200",
    },
    {
      src: "/home/images/offerings/brand-creative.webp",
      title: "Brand & Creative Service",
      description:
        "Craft a unique brand identity and compelling visuals that resonate with your target audience.",
      link: "/brand-creative",
      alt: "Brand & Creative Service",
      gradient: "from-pink-100 to-pink-200",
    },
    {
      src: "/home/images/offerings/media-advertising.webp",
      title: "Media & Advertising Service",
      description:
        "Amplify your brand's reach with strategic media planning and innovative advertising solutions.",
      link: "/media-advertising",
      alt: "Media & Advertising Service",
      gradient: "from-purple-100 to-purple-200",
    },
    {
      src: "/home/images/offerings/automation-solutions.webp",
      title: "Automation Solutions",
      description:
        "Streamline your operations and dramatically improve efficiency with our automation solutions.",
      link: "/automation-solution",
      alt: "Automation Solutions",
      gradient: "from-orange-100 to-orange-200",
    },
    {
      src: "/home/images/offerings/managed-services.webp",
      title: "Managed Services",
      description:
        "Get support and management for your entire IT infrastructure and business applications.",
      link: "/managed-service",
      alt: "Managed Services",
      gradient: "from-teal-100 to-teal-200",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-center text-black mb-4"
        >
          Our Comprehensive Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-gray-700 max-w-3xl mx-auto mb-12"
        >
          We offer a full suite of services to help your business grow online. Each service is designed to deliver results and maximize ROI.
        </motion.p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group rounded-2xl overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-2xl bg-gradient-to-br ${service.gradient}`}
            >
              {/* Image */}
              <div className="relative w-full h-64 sm:h-72">
                <img
                  src={service.src}
                  alt={service.alt}
                  className="w-full h-full object-cover rounded-t-2xl transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Title & Description */}
              <div className="p-6 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">{service.title}</h3>
                  <p className="text-gray-800 text-sm mb-4">{service.description}</p>
                </div>
                <a
                  href={service.link}
                  className="inline-block mt-auto text-white bg-black hover:bg-gray-800 font-semibold py-2 px-4 rounded-full transition-colors duration-300"
                >
                  Read More
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
