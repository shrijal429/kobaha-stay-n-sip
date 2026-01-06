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
            {["Home", "Menu", "Services", "Contact"].map((link) => (
              <motion.div
                key={link}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link href="/">{link}</Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col gap-4 text-center sm:text-left"
        >
          <p className="font-bold">Opening hours</p>
          <div className="flex flex-col gap-1 text-sm">
            <p>Open 9:00am</p>
            <p>Close 10:00pm</p>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col gap-4 text-center sm:text-left"
        >
          <p className="font-bold">Contacts</p>
          <div className="flex flex-col gap-1 text-sm">
            <p>+977 986-0125422</p>
            <p>kobahastaynsip@gmail.com</p>
            <p>Kobaha, Lalitpur</p>
          </div>
          <p className="text-xs font-bold pb-2">FOLLOW US</p>
          <div className="flex gap-5">
            {["facebook", "instagram", "twitter"].map((icon) =>
              icon === "instagram" ? (
                <a
                  key={icon}
                  href="https://www.instagram.com/_kobaha_stay_n_sip?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={`/assets/icons/${icon}.png`}
                    width={20}
                    height={20}
                    alt={icon}
                  />
                </a>
              ) : (
                <Image
                  key={icon}
                  src={`/assets/icons/${icon}.png`}
                  width={20}
                  height={20}
                  alt={icon}
                />
              )
            )}
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
