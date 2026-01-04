"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

export default function TwoSection() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="min-h-screen bg-[#F8DDB2] flex flex-col lg:flex-row px-6 sm:px-12 md:px-20 lg:px-40 pt-16 lg:pt-24 pb-12 sm:pb-16 lg:pb-24 gap-12"
    >
      <motion.div variants={fadeLeft} className="flex flex-col gap-6 flex-1">
        <div className="flex flex-col gap-4">
          <motion.div variants={fadeUp} className="flex items-center gap-4">
            <p className="text-amber-600 font-bold text-sm sm:text-base md:text-xl">
              REFRESH YOUR TASTE BUDS
            </p>
            <span className="h-[2] w-12 sm:w-16 md:w-20 bg-amber-600"></span>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-2xl"
          >
            Enjoy An Exceptional Journey of Taste
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="text-sm sm:text-base md:text-lg max-w-xl"
          >
            We see our customers as invited guests to a party, and we are the
            hosts. It's our job every day to make every important aspect of the
            customer experience a little bit better.
          </motion.p>
        </div>

        <motion.button
          variants={fadeUp}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-amber-600 text-white py-3 px-8 text-xs sm:text-sm w-fit hover:opacity-90 cursor-pointer"
        >
          DISCOVER MORE
        </motion.button>

        <motion.div variants={fadeUp}>
          <Image
            src="/assets/images/kobahaview.jpg"
            width={1200}
            height={600}
            alt="Kobaha View"
            className="w-full sm:w-[80%] lg:w-[600] h-64 sm:h-72 object-cover"
          />
        </motion.div>
      </motion.div>

      <motion.div
        variants={fadeRight}
        className="flex-1 flex justify-center lg:justify-end"
      >
        <Image
          src="/assets/images/lunch.avif"
          width={1200}
          height={600}
          alt="Lunch"
          className="w-full sm:w-[70%] lg:w-[500] h-80 sm:h-[500] lg:h-[700] object-cover"
        />
      </motion.div>
    </motion.div>
  );
}
