"use client";
import becomeUserImage1 from "@/assets/images/becomeUserImage/becomeUserImage1.png";
import becomeUserImage2 from "@/assets/images/becomeUserImage/becomeUserImage2.png";
import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";
import AnimatedBgFillBtn from "../animation/AnimatedBgFillBtn";

export default function BecomeAUser() {
  return (
    <div className="flex">
      <motion.div
        initial={{ opacity: 0, x: "10%" }}
        whileInView={{ opacity: 1, x: "0" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        exit={{ opacity: 0, x: "10%" }}
        viewport={{ once: true }}
        className="relative group"
      >
        <Image
          src={becomeUserImage1}
          alt="ecoFriendly_store"
          className=" rounded-l-3xl   object-cover"
        ></Image>
        <div className="absolute flex-center bottom-0 w-full bg-[#0d0d0d17] text-white py-6 px-2 backdrop-blur-[15.5px] transition-all duration-1000 ease-in-out xl:h-[180px] h-[100px] group-hover:h-full  origin-bottom overflow-hidden">
          <div className="space-y-2">
            <p className="xl:text-3xl lg:text-xl md:text-sm text-base font-semibold group-hover:rounded-2xl md:group-hover:text-4xl group-hover:text-xl duration-1000">
              Too Many Assignments, Not Enough Time? Let Us Help!
            </p>
            <Link href={"/"}>
              <AnimatedBgFillBtn text="Post an Assignment" />
            </Link>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: "-10%" }}
        whileInView={{ opacity: 1, x: "0" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        exit={{ opacity: 0, x: "-10%" }}
        viewport={{ once: true }}
        className="relative group"
      >
        <Image
          src={becomeUserImage2}
          alt="ecoFriendly_store"
          className=" rounded-r-3xl   object-cover"
        ></Image>
        <div className="absolute flex-center bottom-0 w-full bg-[#0d0d0d17] text-white py-6 px-2 backdrop-blur-[15.5px] transition-all duration-1000 ease-in-out xl:h-[180px] h-[100px] group-hover:h-full  origin-bottom overflow-hidden">
          <div className="space-y-2">
            <p className="xl:text-3xl lg:text-xl md:text-sm text-base font-semibold group-hover:rounded-2xl md:group-hover:text-4xl group-hover:text-xl duration-1000 text-right">
             Get Paid to Do What You’re Good At—No Bosses, No Drama!
            </p>
            <div className="flex justify-end">
            <Link href={"/"}>
              <AnimatedBgFillBtn text="Become a Worker" />
            </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
