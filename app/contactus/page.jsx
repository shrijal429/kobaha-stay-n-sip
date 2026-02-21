"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function ContactUs() {
  // State for form data and status message
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  // Reset the status message after 3 seconds
  useEffect(() => {
    if (statusMessage) {
      const timer = setTimeout(() => {
        setStatusMessage("");
      }, 3000); // Clear message after 3 seconds
      return () => clearTimeout(timer);
    }
  }, [statusMessage]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatusMessage("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setStatusMessage("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setStatusMessage("Something went wrong!");
      }
    } catch (error) {
      setStatusMessage("Error sending message.");
    } finally {
      setIsSending(false);
    }
  };

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
        {/* LEFT SIDE - FULLY UNCHANGED */}
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
            We'd love to hear from you! Whether you're looking to book a cozy
            room, reserve a table, explore our menu, or plan a special
            gathering, our team is here to help. Reach out to us anytime and
            we'll make sure your experience with Kobaha Stay N' Sip is truly
            memorable.
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
                ),
              )}
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE - ONLY FORM CONNECTED */}
        <motion.div
          variants={fadeRight}
          className="w-full lg:w-1/2 px-6 md:px-16 lg:px-35 py-16"
        >
          <motion.div variants={fadeUp} className="pb-10">
            <h1 className="text-2xl md:text-3xl font-bold">Your Details</h1>
            <p className="text-xs">
              Fill out the form below and we'll get back to you as soon as
              possible.
            </p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            variants={container}
            className="flex flex-col gap-6"
          >
            <motion.div
              variants={fadeUp}
              className="flex flex-col md:flex-row gap-6"
            >
              <div className="flex flex-col gap-2 w-full">
                <label>Name *</label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-[#1A1B1D] py-2 px-3 outline-none"
                  type="text"
                  placeholder="Name"
                  required
                />
              </div>

              <div className="flex flex-col gap-2 w-full">
                <label>Email Address *</label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-[#1A1B1D] py-2 px-3 outline-none"
                  type="email"
                  placeholder="email@gmail.com"
                  required
                />
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col gap-2">
              <label>Subject *</label>
              <input
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="bg-[#1A1B1D] py-2 px-3 outline-none"
                type="text"
                placeholder="Subject"
                required
              />
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col gap-2">
              <label>Comments / Questions *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="bg-[#1A1B1D] py-2 px-3 h-36 resize-none outline-none"
                placeholder="Question"
                required
              />
            </motion.div>

            <motion.button
              type="submit"
              variants={fadeUp}
              whileHover={{ scale: isSending ? 1 : 1.05 }}
              whileTap={{ scale: isSending ? 1 : 0.95 }}
              disabled={isSending}
              className={`bg-amber-700 px-6 py-2 mt-4 w-fit ${isSending ? "opacity-60 cursor-not-allowed" : ""}`}
            >
              {isSending ? "SENDING..." : "CONTACT US"}
            </motion.button>
          </motion.form>

          {/* Display success or error message — fixed: uses own initial/animate instead of parent variants */}
          {statusMessage && (
            <div className="text-center text-white mt-4">
              <p
                className={`text-lg ${
                  statusMessage.includes("successfully")
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {statusMessage}
              </p>
            </div>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}
