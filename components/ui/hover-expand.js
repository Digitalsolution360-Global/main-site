"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
// import "swiper/css";
// import "swiper/css/effect-creative";
// import "swiper/css/pagination";
// import "swiper/css/autoplay";

import { cn } from "@/lib/utils";

const Skiper52 = () => {
  const images = [
    {
      src: "/images/x.com/13.jpeg",
      alt: "Illustrations by my fav AarzooAly",
      code: "# 23",
    },
    {
      src: "/images/x.com/32.jpeg",
      alt: "Illustrations by my fav AarzooAly",
      code: "# 23",
    },
    {
      src: "/images/x.com/20.jpeg",
      alt: "Illustrations by my fav AarzooAly",
      code: "# 23",
    },
    {
      src: "/images/x.com/21.jpeg",
      alt: "Illustrations by my fav AarzooAly",
      code: "# 23",
    },
    {
      src: "/images/x.com/19.jpeg",
      alt: "Illustrations by my fav AarzooAly",
      code: "# 23",
    },
    {
      src: "/images/x.com/1.jpeg",
      alt: "Illustrations by my fav AarzooAly",
      code: "# 23",
    },
    {
      src: "/images/x.com/2.jpeg",
      alt: "Illustrations by my fav AarzooAly",
      code: "# 23",
    },
    {
      src: "/images/x.com/3.jpeg",
      alt: "Illustrations by my fav AarzooAly",
      code: "# 23",
    },
    {
      src: "/images/x.com/4.jpeg",
      alt: "Illustrations by my fav AarzooAly",
      code: "# 23",
    },
  ];

  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden bg-[#f5f4f3]">
      <HoverExpand_001 className="" images={images} />{" "}
    </div>
  );
};

export { Skiper52 };

const HoverExpand_001 = ({
  images,
  className,
}) => {
  const [activeImage, setActiveImage] = useState(1);

  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{
        duration: 0.3,
        delay: 0.5,
      }}
      className={cn("relative hidden lg:block w-full mx-auto px-10 ", className)}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full"
      >
        <div className="flex w-full items-center justify-center gap-1">
          {images.map((image, index) => (
            <motion.div
                key={index}
                className="relative cursor-pointer overflow-hidden rounded-xl"
                initial={{ width: "2.5rem", height: "20rem" }}
                animate={{
                    width: activeImage === index ? "30rem" : "10rem",
                    height: activeImage === index ? "30rem" : "30rem",
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                onClick={() => {
                    if (image.link) {
                        window.location.href = image.link;
                    } else {
                        setActiveImage(index);
                    }
                }}
                onHoverStart={() => setActiveImage(index)}
            >
                <AnimatePresence>
                    {activeImage === index && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute h-full w-full bg-gradient-to-t from-black/40 to-transparent"
                    />
                    )}
                </AnimatePresence>
                <AnimatePresence>
                    {activeImage === index && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute flex h-full w-full flex-col items-start justify-end p-4"
                    >
                        <p className="text-left text-2xl text-white font-semibold">
                        {image.text}
                        </p>
                        <p className="mt-2 text-base text-white opacity-80">
                        {image.description}
                        </p>
                    </motion.div>
                    )}
                </AnimatePresence>
              
                <AnimatePresence>
                    {activeImage != index && (
                      <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/70"
                        />
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute flex h-full w-full items-center justify-center"
                        >
                            <p className="text-white font-semibold text-2xl tracking-widest [writing-mode:vertical-lr] rotate-180">
                            {image.text}
                            </p>
                        </motion.div>
                      </>
                    )}
                </AnimatePresence>
                <img
                    src={image.src}
                    className="size-full object-cover"
                    alt={image.alt}
                />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export { HoverExpand_001 };
