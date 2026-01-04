"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import kobahaLogo from "../public/kobaha.png";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Footer() {
  return (
    <motion.footer
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="bg-black text-white px-6 sm:px-12 md:px-20 lg:px-40 pt-12"
    >
      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-white/20 pb-12"
      >
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center sm:items-start"
        >
          <Image src={kobahaLogo} height={150} alt="Kobaha Logo" />
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col gap-4 text-center sm:text-left"
        >
          <p className="font-bold">Quick Links</p>
          <div className="flex flex-col gap-1 text-sm">
            {["Home", "Services", "About", "Portfolio", "Contact"].map(
              (link) => (
                <motion.div
                  key={link}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link href="/">{link}</Link>
                </motion.div>
              )
            )}
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col gap-4 text-center sm:text-left"
        >
          <p className="font-bold">Services</p>
          <div className="flex flex-col gap-1 text-sm">
            <p>Live Music</p>
            <p>HomeStay</p>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col gap-4 text-center sm:text-left"
        >
          <p className="font-bold">Contacts</p>
          <div className="flex flex-col gap-1 text-sm">
            <p>+977 98XXXXXXXX</p>
            <p>XXXXXXXXXX@gmail.com</p>
            <p>Kobaha, Lalitpur</p>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="py-6 text-center text-xs sm:text-sm"
      >
        <p>&copy; 2025 Kobaha Stay N' Sip. All rights reserved.</p>
      </motion.div>
    </motion.footer>
  );
}
