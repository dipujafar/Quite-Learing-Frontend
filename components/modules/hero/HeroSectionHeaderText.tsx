"use client";
import SplitText from "@/components/ui/SplitText";
import image1 from "@/assets/images/heroSectionImage/image1.png";
import image2 from "@/assets/images/heroSectionImage/image2.png";
import Image from "next/image";
import { motion } from "motion/react";

export default function HeroSectionHeaderText() {
  return (
    <div className=" space-y-2 lg:space-y-3">
      <h1 className="flex justify-center items-center gap-x-4 ">
        <SplitText
          text="Your Assignment"
          className="lg:text-5xl xl:text-[70px] 2xl:text-[80px] text-[#06051799]  font-medium  text-center"
          delay={80}
          duration={0.3}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />
        <motion.span
          initial={{ opacity: 0, y: "5%" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 1.3,
            ease: "easeInOut",
            type: "spring",
            stiffness: 80,
            damping: 15,
          }}
          viewport={{ once: true }}
          className="overflow-y-hidden"
        >
          <Image
            src={image1}
            alt="image1"
            className="rounded-full xl:max-h-[74px] lg:max-h-[55px] object-cover"
          />
        </motion.span>

        <SplitText
          text="Our Work"
          className="lg:text-5xl xl:text-[70px] 2xl:text-[80px] text-[#06051799] font-medium  text-center"
          delay={80}
          delayBefore={1300}
          duration={0.3}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />
      </h1>
      <h1 className="flex justify-center items-center gap-x-4">
        <motion.span
          initial={{ opacity: 0, y: "5%" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 1.8,
            ease: "easeInOut",
            type: "spring",
            stiffness: 80,
            damping: 15,
          }}
          viewport={{ once: true }}
          className="overflow-y-hidden"
        >
          <Image
            src={image2}
            alt="image2"
            className="rounded-full xl:max-h-[74px] lg:max-h-[55px] object-cover"
          />
        </motion.span>
        <SplitText
          text="Confidential and Secure"
          className="lg:text-5xl xl:text-[70px] 2xl:text-[80px] text-primary-color  font-medium  text-center"
          delay={80}
          delayBefore={1800}
          duration={0.3}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />
      </h1>
    </div>
  );
}
