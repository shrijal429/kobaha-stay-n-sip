"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Service() {
  return (
    <div className="bg-[#F8F6F1] min-h-screen">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex items-center justify-center 
        bg-[url('/assets/images/service.jpg')] 
        h-44 sm:h-56 md:h-72 
        bg-cover bg-center 
        text-white 
        text-3xl sm:text-4xl md:text-6xl 
        font-serif"
      >
        Our Services
      </motion.div>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 md:py-24">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-orange-500 text-xs sm:text-sm uppercase tracking-widest mb-3">
            Fresh & Delicious
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-900">
            Food Services
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <motion.img
            src="/assets/images/chowmin.jpg"
            alt="Food Service"
            className="rounded-2xl shadow-lg w-full h-auto"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          />

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl sm:text-3xl font-serif mb-5 text-gray-900">
              Restaurant & Room Dining
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6 text-sm sm:text-base">
              We serve freshly prepared breakfast, lunch, and dinner using
              high-quality ingredients. Enjoy Nepali, Asian, and Continental
              cuisine in a warm and welcoming atmosphere.
            </p>
            <ul className="space-y-3 text-gray-700 text-sm sm:text-base">
              <li>✔ Breakfast, Lunch & Dinner</li>
              <li>✔ Room Service Available</li>
              <li>✔ Vegetarian & Non-Vegetarian Options</li>
              <li>✔ Freshly Cooked & Hygienic</li>
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 md:py-24">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <p className="text-orange-500 text-xs sm:text-sm uppercase tracking-widest mb-3">
              Comfortable Stay
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-900">
              Rooms Available
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-2xl sm:text-3xl font-serif mb-5 text-gray-900">
                Cozy & Peaceful Rooms
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6 text-sm sm:text-base">
                Our rooms are designed for comfort and relaxation, perfect for
                travelers, families, and business guests. Enjoy a peaceful stay
                with easy access to our restaurant.
              </p>
              <ul className="space-y-3 text-gray-700 text-sm sm:text-base">
                <li>✔ Clean & Spacious Rooms</li>
                <li>✔ Attached Bathroom</li>
                <li>✔ Free Wi-Fi</li>
                <li>✔ 24/7 Service & Security</li>
              </ul>
            </motion.div>

            <motion.img
              src="/assets/images/rooms.jpg"
              alt="Rooms"
              className="rounded-2xl shadow-lg w-full h-auto"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            />
          </div>
        </div>
      </section>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center py-14 sm:py-20 bg-[#F8F6F1] px-4"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-6 text-gray-900">
          Visit Us Today
        </h2>
        <p className="text-gray-600 mb-8 text-sm sm:text-base">
          Enjoy delicious food and a comfortable stay under one roof.
        </p>
        <Link href="/contactus">
          <button className="bg-orange-500 hover:bg-orange-600 cursor-pointer text-white px-6 sm:px-8 py-3 rounded-full transition text-sm sm:text-base">
            Book Now
          </button>
        </Link>
      </motion.div>
    </div>
  );
}
