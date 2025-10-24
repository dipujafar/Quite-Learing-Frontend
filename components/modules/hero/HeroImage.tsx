"use client";
import heroImage from "@/assets/images/heroSectionImage/heroImage.png";
import Image from "next/image";
import { motion } from "motion/react";

export default function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: "5%" }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: 3.5,
        ease: "easeInOut",
        type: "spring",
        stiffness: 80,
        damping: 15,
      }}
      viewport={{ once: true }}
      className="overflow-y-hidden"
    >
      <Image
        src={heroImage}
        alt="hero_image"
        className="h-full w-full object-cover "
      />
    </motion.div>
  );
}
