"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ContactUs() {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -40 },
    show: { opacity: 1, x: 0, transition: { duration: 0.7 } },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 40 },
    show: { opacity: 1, x: 0, transition: { duration: 0.7 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="flex flex-col bg-[url('/assets/images/contact.webp')] items-center gap-10 pt-10">
      <motion.h1
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-4xl md:text-6xl font-extrabold text-center text-white"
      >
        Contact Us
      </motion.h1>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-col lg:flex-row bg-black w-full text-white"
      >
        <motion.div
          variants={fadeLeft}
          className="w-full lg:w-1/2 px-6 md:px-16 lg:px-35 py-16"
        >
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-2 text-xs pb-4"
          >
            <span className="h-[1] w-10 bg-[#c08d35]"></span>
            <p className="text-[#c08d35] font-bold">KEEP CLOSE</p>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-3xl md:text-5xl font-bold pb-6"
          >
            Get In Touch
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="max-w-xl text-justify pb-10 text-sm md:text-base"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            expedita magni vero fuga officiis aspernatur delectus ducimus ipsam
            nostrum voluptatibus ipsum laboriosam, sequi neque nihil rem cumque
            sapiente.
          </motion.p>

          <motion.div
            variants={container}
            className="flex flex-col lg:flex-row lg:flex-wrap gap-10 pb-10"
          >
            {[
              {
                src: "/assets/icons/map.png",
                lines: ["Kobaha Stay N' Sip", "Kobaha, Lalitpur"],
              },
              {
                src: "/assets/icons/phonelogo.png",
                lines: ["+977 986-0125422", "+977 986-1356244"],
              },
              {
                src: "/assets/icons/mail.png",
                lines: ["kobahastaynsip@gmail.com", "kobahasip@gmail.com"],
              },
              {
                src: "/assets/icons/clock.png",
                lines: ["Open 9:00am", "Close 10:00pm"],
              },
            ].map(({ src, lines }) => (
              <motion.div
                key={src}
                variants={fadeUp}
                className="flex gap-3 items-center lg:w-[45%]"
              >
                <Image src={src} width={35} height={35} alt="" />
                <div>
                  {lines.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="pb-3">
            <p className="text-xs font-bold pb-3">FOLLOW US</p>
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
          variants={fadeRight}
          className="w-full lg:w-1/2 px-6 md:px-16 lg:px-35 py-16"
        >
          <motion.div variants={fadeUp} className="pb-10">
            <h1 className="text-2xl md:text-3xl font-bold">Your Details</h1>
            <p className="text-xs">Let us know how to get back to you</p>
          </motion.div>

          <motion.form variants={container} className="flex flex-col gap-6">
            <motion.div
              variants={fadeUp}
              className="flex flex-col md:flex-row gap-6"
            >
              <div className="flex flex-col gap-2 w-full">
                <label>Name *</label>
                <input
                  className="bg-[#1A1B1D] py-2 px-3 outline-none"
                  type="text"
                  placeholder="Name"
                />
              </div>

              <div className="flex flex-col gap-2 w-full">
                <label>Email Address *</label>
                <input
                  className="bg-[#1A1B1D] py-2 px-3 outline-none"
                  type="email"
                  placeholder="email@gmail.com"
                />
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col gap-2">
              <label>Subject *</label>
              <input
                className="bg-[#1A1B1D] py-2 px-3 outline-none"
                type="text"
                placeholder="Subject"
              />
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col gap-2">
              <label>Comments / Questions *</label>
              <textarea
                className="bg-[#1A1B1D] py-2 px-3 h-36 resize-none outline-none"
                placeholder="Question"
              />
            </motion.div>

            <motion.button
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-amber-700 px-6 py-2 mt-4 w-fit"
            >
              CONTACT US
            </motion.button>
          </motion.form>
        </motion.div>
      </motion.div>
    </div>
  );
}
