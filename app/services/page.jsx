"use client";
import { motion } from "framer-motion";

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
        className="flex items-center justify-center bg-[url('/assets/images/service.jpg')] h-72 bg-cover bg-center text-white text-6xl font-serif"
      >
        Our Services
      </motion.div>

      <section className="max-w-6xl mx-auto py-24 px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-orange-500 text-sm uppercase tracking-widest mb-3">
            Fresh & Delicious
          </p>
          <h2 className="text-5xl font-serif text-gray-900">Food Services</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.img
            src="/assets/images/chowmin.jpg"
            alt="Food Service"
            className="rounded-2xl shadow-lg"
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
            <h3 className="text-3xl font-serif mb-6 text-gray-900">
              Restaurant & Room Dining
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              We serve freshly prepared breakfast, lunch, and dinner using
              high-quality ingredients. Enjoy Nepali, Asian, and Continental
              cuisine in a warm and welcoming atmosphere.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li>✔ Breakfast, Lunch & Dinner</li>
              <li>✔ Room Service Available</li>
              <li>✔ Vegetarian & Non-Vegetarian Options</li>
              <li>✔ Freshly Cooked & Hygienic</li>
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-6xl mx-auto py-24 px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-orange-500 text-sm uppercase tracking-widest mb-3">
              Comfortable Stay
            </p>
            <h2 className="text-5xl font-serif text-gray-900">
              Rooms Available
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-serif mb-6 text-gray-900">
                Cozy & Peaceful Rooms
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our rooms are designed for comfort and relaxation, perfect for
                travelers, families, and business guests. Enjoy a peaceful stay
                with easy access to our restaurant.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li>✔ Clean & Spacious Rooms</li>
                <li>✔ Attached Bathroom</li>
                <li>✔ Free Wi-Fi</li>
                <li>✔ 24/7 Service & Security</li>
              </ul>
            </motion.div>

            <motion.img
              src="/assets/images/rooms.jpg"
              alt="Rooms"
              className="rounded-2xl shadow-lg"
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
        className="text-center py-20 bg-[#F8F6F1]"
      >
        <h2 className="text-4xl font-serif mb-6 text-gray-900">
          Visit Us Today
        </h2>
        <p className="text-gray-600 mb-8">
          Enjoy delicious food and a comfortable stay under one roof.
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full transition">
          Book Now
        </button>
      </motion.div>
    </div>
  );
}
