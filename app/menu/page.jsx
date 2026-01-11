"use client";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export default function Menu() {
  return (
    <div className="min-h-screen bg-[#F8F6F1]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex bg-[url('/assets/images/momo.jpg')] items-center justify-center text-white h-60 bg-cover bg-center text-6xl font-serif py-10"
      >
        Our Menu
      </motion.div>

      <div className="max-w-6xl mx-auto pt-20 pb-20">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="text-orange-500 text-sm tracking-widest uppercase mb-3 font-medium">
            Fresh Taste Buds
          </div>
          <div className="text-5xl font-serif text-gray-900 tracking-wide">
            Breakfast
          </div>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-x-20 gap-y-5"
        >
          {[
            ["Toast With Your Choice of Spread", "Rs. 130"],
            ["Eggs On Toast", "Rs. 250"],
            ["Smashed Avovado On Toast", "Rs. 340"],
            ["Pancakes w/t Maple & Fruits", "Rs. 350"],
            ["The Hangover Burger", "Rs. 480"],
            ["Little Brekkie", "Rs. 495"],
            ["Big Brekkie", "Rs. 895"],
            ["French Toast w/t Fruit Bowl", "Rs. 370"],
          ].map(([name, price], i) => (
            <motion.div key={i} variants={fadeUp} className="pb-6">
              <div className="flex justify-between">
                <div className="text-xl font-serif text-gray-900 pr-4">
                  {name}
                </div>
                <div className="text-xl font-serif text-gray-900 whitespace-nowrap">
                  {price}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ scale: 1.05, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex bg-[url('/assets/images/chicken.jpg')] items-center justify-center h-70 bg-cover bg-center py-10"
      />

      <div className="max-w-6xl mx-auto pt-20 pb-20">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="text-orange-500 text-sm tracking-widest uppercase mb-3 font-medium">
            Fresh Taste Buds
          </div>
          <div className="text-5xl font-serif text-gray-900 tracking-wide">
            Lunch / Dinner
          </div>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-x-20 gap-y-5"
        >
          {[
            ["Crispy Chicken Burger", "Rs. 450"],
            ["Pad Thai (Chicken / Veg)", "Rs. 520 / 450"],
            ["Spaghetti (Carbonara / Bolognese)", "Rs. 550 / 520"],
            ["MO: MO (Chicken / Veg)", "Rs. 260 / 220"],
            ["Grilled Fish w/t Mashed Potatoes", "Rs. 495"],
            ["American Choupsey", "Rs. 430"],
            ["Stir Fried Veg w/t Rice on Teriyaki Sauce", "Rs. 390"],
            ["Hot Basil Chicken w/t Rice & Egg", "Rs. 480"],
            ["Nepalese Dal Bhat (Chicken / Veg)", "Rs. 550 / 450"],
            ["Korean Stirred Fried Pork w/t Rice", "Rs. 590"],
          ].map(([name, price], i) => (
            <motion.div key={i} variants={fadeUp} className="pb-6">
              <div className="flex justify-between">
                <div className="text-xl font-serif text-gray-900 pr-4">
                  {name}
                </div>
                <div className="text-xl font-serif text-gray-900 whitespace-nowrap">
                  {price}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ scale: 1.05, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex bg-[url('/assets/images/dessert.jpg')] items-center justify-center h-70 bg-cover bg-center py-10"
      />

      <div className="max-w-6xl mx-auto pt-20 pb-20">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="text-orange-500 text-sm tracking-widest uppercase mb-3 font-medium">
            Fresh Taste Buds
          </div>
          <div className="text-5xl font-serif text-gray-900 tracking-wide">
            Dessert
          </div>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-x-20 gap-y-5"
        >
          {[
            ["Cheese Cake", "Rs. 350"],
            ["Black Forest", "Rs. 150"],
            ["Butter Croissant", "Rs. 150"],
            ["Chicken Patties", "Rs. 200"],
            ["Fudgy Brownies", "Rs. 220"],
            ["Brownies Sizzler", "Rs. 350"],
            ["Latte Cookies", "Rs. 500"],
            ["Chocochip Cookies", "Rs. 50"],
          ].map(([name, price], i) => (
            <motion.div key={i} variants={fadeUp} className="pb-6">
              <div className="flex justify-between">
                <div className="text-xl font-serif text-gray-900 pr-4">
                  {name}
                </div>
                <div className="text-xl font-serif text-gray-900 whitespace-nowrap">
                  {price}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
