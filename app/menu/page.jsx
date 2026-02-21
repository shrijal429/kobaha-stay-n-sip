"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const MENU = {
  Breakfast: [
    ["Toast With Your Choice of Spread", 130],
    ["Eggs On Toast", 250],
    ["Smashed Avocado On Toast", 340],
    ["Pancakes w/t Maple & Fruits", 350],
    ["The Hangover Burger", 480],
    ["Little Brekkie", 495],
    ["Big Brekkie", 895],
    ["French Toast w/t Fruit Bowl", 370],
  ],
  "Lunch / Dinner": [
    ["Crispy Chicken Burger", 450],
    ["Pad Thai (Chicken / Veg)", 520],
    ["Spaghetti (Carbonara / Bolognese)", 550],
    ["MO: MO (Chicken / Veg)", 260],
    ["Grilled Fish w/t Mashed Potatoes", 495],
    ["American Choupsey", 430],
    ["Stir Fried Veg w/t Rice on Teriyaki Sauce", 390],
    ["Hot Basil Chicken w/t Rice & Egg", 480],
    ["Nepalese Dal Bhat (Chicken / Veg)", 550],
    ["Korean Stirred Fried Pork w/t Rice", 590],
  ],
  Dessert: [
    ["Cheese Cake", 350],
    ["Black Forest", 150],
    ["Butter Croissant", 150],
    ["Chicken Patties", 200],
    ["Fudgy Brownies", 220],
    ["Brownies Sizzler", 350],
    ["Latte Cookies", 500],
    ["Chocochip Cookies", 50],
  ],
};

function MenuItems({ items, cart, addToCart, removeFromCart }) {
  return items.map(([name, price], i) => {
    const qty = cart[name] || 0;
    return (
      <motion.div key={i} variants={fadeUp} className="pb-4">
        <div className="flex justify-between items-center">
          <div className="text-lg sm:text-xl font-serif text-gray-900 pr-4">
            {name}
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="text-lg sm:text-xl font-serif text-gray-900 whitespace-nowrap">
              Rs. {price}
            </div>
            {qty > 0 ? (
              <div className="flex items-center border border-orange-400 rounded-full overflow-hidden">
                <button
                  onClick={() => removeFromCart(name)}
                  className="w-7 h-7 flex items-center justify-center text-orange-500 hover:bg-orange-50 transition-colors font-bold text-lg"
                >
                  −
                </button>
                <span className="w-6 text-center text-sm font-semibold text-gray-800">
                  {qty}
                </span>
                <button
                  onClick={() => addToCart(name)}
                  className="w-7 h-7 flex items-center justify-center text-orange-500 hover:bg-orange-50 transition-colors font-bold text-lg"
                >
                  +
                </button>
              </div>
            ) : (
              <button
                onClick={() => addToCart(name)}
                className="w-7 h-7 rounded-full border border-orange-400 text-orange-500 hover:bg-orange-50 transition-colors flex items-center justify-center font-bold text-xl flex-shrink-0"
              >
                +
              </button>
            )}
          </div>
        </div>
      </motion.div>
    );
  });
}

export default function Menu() {
  const [cart, setCart] = useState({});
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const addToCart = (name) =>
    setCart((c) => ({ ...c, [name]: (c[name] || 0) + 1 }));
  const removeFromCart = (name) =>
    setCart((c) => {
      const next = { ...c };
      if (next[name] > 1) next[name]--;
      else delete next[name];
      return next;
    });
  const deleteItem = (name) =>
    setCart((c) => {
      const next = { ...c };
      delete next[name];
      return next;
    });

  const getPrice = (name) => {
    for (const items of Object.values(MENU)) {
      const found = items.find(([n]) => n === name);
      if (found) return found[1];
    }
    return 0;
  };

  const cartItems = Object.entries(cart);
  const cartCount = cartItems.reduce((a, [, q]) => a + q, 0);
  const cartTotal = cartItems.reduce(
    (sum, [name, qty]) => sum + getPrice(name) * qty,
    0,
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setCart({});
    setForm({ name: "", phone: "", address: "", notes: "" });
    setSubmitted(false);
    setCheckoutOpen(false);
    setCartOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#F8F6F1] overflow-x-hidden">
      {/* Floating cart button — only visible when cart has items */}
      {cartCount > 0 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
          <button
            onClick={() => setCartOpen(true)}
            className="flex items-center gap-3 bg-gray-900 text-white px-6 py-3 rounded-full shadow-2xl hover:bg-gray-800 transition-colors font-serif text-base"
          >
            <span className="bg-orange-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
              {cartCount}
            </span>
            View Order · Rs. {cartTotal}
          </button>
        </div>
      )}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex w-full items-center justify-center text-white
          h-40 sm:h-52 md:h-60
          bg-[url('/assets/images/momo.jpg')] bg-cover bg-center
          text-3xl sm:text-4xl md:text-6xl font-serif"
      >
        Our Menu
      </motion.div>

      {/* Breakfast */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 box-border">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="text-orange-500 text-xs sm:text-sm tracking-widest uppercase mb-3 font-medium">
            Fresh Taste Buds
          </div>
          <div className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-900 tracking-wide">
            Breakfast
          </div>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-16 gap-y-6 box-border"
        >
          <MenuItems
            items={MENU["Breakfast"]}
            cart={cart}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ scale: 1.05, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full h-40 sm:h-52 md:h-64 bg-[url('/assets/images/chicken.jpg')] bg-cover bg-center"
      />

      {/* Lunch / Dinner */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 box-border">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="text-orange-500 text-xs sm:text-sm tracking-widest uppercase mb-3 font-medium">
            Fresh Taste Buds
          </div>
          <div className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-900 tracking-wide">
            Lunch / Dinner
          </div>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-16 gap-y-6 box-border"
        >
          <MenuItems
            items={MENU["Lunch / Dinner"]}
            cart={cart}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ scale: 1.05, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full h-40 sm:h-52 md:h-64 bg-[url('/assets/images/dessert.jpg')] bg-cover bg-center"
      />

      {/* Dessert */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 box-border">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="text-orange-500 text-xs sm:text-sm tracking-widest uppercase mb-3 font-medium">
            Fresh Taste Buds
          </div>
          <div className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-900 tracking-wide">
            Dessert
          </div>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-16 gap-y-6 box-border"
        >
          <MenuItems
            items={MENU["Dessert"]}
            cart={cart}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        </motion.div>
      </div>

      {/* Cart Drawer */}
      <AnimatePresence>
        {cartOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setCartOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm bg-[#F8F6F1] shadow-2xl flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
            >
              <div className="flex justify-between items-center px-6 py-5 border-b border-gray-200">
                <h2 className="font-serif text-2xl text-gray-900">
                  Your Order
                </h2>
                <button
                  onClick={() => setCartOpen(false)}
                  className="text-gray-400 hover:text-gray-700 text-3xl leading-none"
                >
                  ×
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-6 py-4">
                {cartItems.length === 0 ? (
                  <p className="text-center text-gray-400 mt-16 font-serif">
                    Your cart is empty.
                  </p>
                ) : (
                  cartItems.map(([name, qty]) => (
                    <div
                      key={name}
                      className="flex items-center gap-3 py-3 border-b border-gray-100"
                    >
                      <div className="flex items-center border border-orange-400 rounded-full overflow-hidden flex-shrink-0">
                        <button
                          onClick={() => removeFromCart(name)}
                          className="w-7 h-7 flex items-center justify-center text-orange-500 hover:bg-orange-50 font-bold text-lg"
                        >
                          −
                        </button>
                        <span className="w-6 text-center text-sm font-semibold text-gray-800">
                          {qty}
                        </span>
                        <button
                          onClick={() => addToCart(name)}
                          className="w-7 h-7 flex items-center justify-center text-orange-500 hover:bg-orange-50 font-bold text-lg"
                        >
                          +
                        </button>
                      </div>
                      <span className="flex-1 font-serif text-gray-900 text-sm">
                        {name}
                      </span>
                      <span className="text-gray-700 font-serif text-sm whitespace-nowrap">
                        Rs. {getPrice(name) * qty}
                      </span>
                      <button
                        onClick={() => deleteItem(name)}
                        className="text-gray-300 hover:text-gray-500 text-sm ml-1"
                      >
                        ✕
                      </button>
                    </div>
                  ))
                )}
              </div>

              <div className="px-6 py-5 border-t border-gray-200">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs tracking-widest uppercase text-gray-400 font-medium">
                    Total
                  </span>
                  <span className="font-serif text-2xl text-gray-900">
                    Rs. {cartTotal}
                  </span>
                </div>
                <button
                  disabled={cartItems.length === 0}
                  onClick={() => {
                    setCartOpen(false);
                    setCheckoutOpen(true);
                  }}
                  className="w-full py-3 bg-gray-900 text-white font-serif text-lg rounded-full hover:bg-gray-800 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Checkout
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Checkout Modal */}
      <AnimatePresence>
        {checkoutOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-[#F8F6F1] rounded-2xl w-full max-w-md max-h-[90vh] overflow-y-auto p-8"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.25 }}
            >
              {submitted ? (
                <div className="text-center">
                  <div className="w-14 h-14 rounded-full border-2 border-orange-400 flex items-center justify-center mx-auto mb-4 text-2xl text-orange-500">
                    ✓
                  </div>
                  <h2 className="font-serif text-3xl text-gray-900 mb-2">
                    Order Placed!
                  </h2>
                  <p className="text-gray-500 mb-6 text-sm">
                    Thanks, <strong>{form.name}</strong>! We'll call you at{" "}
                    <strong>{form.phone}</strong> to confirm.
                  </p>
                  <div className="text-left bg-white rounded-xl p-4 mb-6 border border-gray-100">
                    <p className="text-xs tracking-widest uppercase text-orange-500 font-medium mb-3">
                      Order Summary
                    </p>
                    {cartItems.map(([name, qty]) => (
                      <div
                        key={name}
                        className="flex justify-between text-sm font-serif text-gray-800 py-1"
                      >
                        <span>
                          {name} × {qty}
                        </span>
                        <span>Rs. {getPrice(name) * qty}</span>
                      </div>
                    ))}
                    <div className="flex justify-between font-serif text-gray-900 font-semibold pt-3 border-t border-gray-100 mt-2">
                      <span>Total</span>
                      <span>Rs. {cartTotal}</span>
                    </div>
                  </div>
                  <button
                    onClick={handleReset}
                    className="w-full py-3 bg-gray-900 text-white font-serif text-lg rounded-full hover:bg-gray-800 transition-colors"
                  >
                    Back to Menu
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="font-serif text-3xl text-gray-900 mb-1">
                    Checkout
                  </h2>
                  <p className="text-xs tracking-widest uppercase text-orange-500 font-medium mb-6">
                    Complete your order
                  </p>

                  <div className="bg-white rounded-xl p-4 mb-6 border border-gray-100">
                    <p className="text-xs tracking-widest uppercase text-orange-500 font-medium mb-3">
                      Your Order
                    </p>
                    {cartItems.map(([name, qty]) => (
                      <div
                        key={name}
                        className="flex justify-between text-sm font-serif text-gray-800 py-1"
                      >
                        <span>
                          {name} × {qty}
                        </span>
                        <span>Rs. {getPrice(name) * qty}</span>
                      </div>
                    ))}
                    <div className="flex justify-between font-serif text-gray-900 font-semibold pt-3 border-t border-gray-100 mt-2">
                      <span>Total</span>
                      <span>Rs. {cartTotal}</span>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {[
                      ["Full Name", "name", "text", "Your name"],
                      ["Phone Number", "phone", "tel", "+977 98XXXXXXXX"],
                      [
                        "Delivery Address",
                        "address",
                        "text",
                        "Your full address",
                      ],
                    ].map(([label, key, type, placeholder]) => (
                      <div key={key}>
                        <label className="block text-xs tracking-widest uppercase text-gray-400 font-medium mb-1">
                          {label} *
                        </label>
                        <input
                          required
                          type={type}
                          placeholder={placeholder}
                          value={form[key]}
                          onChange={(e) =>
                            setForm((f) => ({ ...f, [key]: e.target.value }))
                          }
                          className="w-full border border-gray-200 rounded-lg px-4 py-2.5 bg-white font-serif text-gray-900 text-sm focus:outline-none focus:border-orange-400 placeholder:text-gray-300"
                        />
                      </div>
                    ))}
                    <div>
                      <label className="block text-xs tracking-widest uppercase text-gray-400 font-medium mb-1">
                        Special Instructions
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Allergies, preferences…"
                        value={form.notes}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, notes: e.target.value }))
                        }
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 bg-white font-serif text-gray-900 text-sm focus:outline-none focus:border-orange-400 placeholder:text-gray-300 resize-none"
                      />
                    </div>
                    <div className="flex gap-3 pt-2">
                      <button
                        type="button"
                        onClick={() => {
                          setCheckoutOpen(false);
                          setCartOpen(true);
                        }}
                        className="flex-1 py-3 border border-gray-300 text-gray-700 font-serif text-base rounded-full hover:bg-gray-100 transition-colors"
                      >
                        ← Back
                      </button>
                      <button
                        type="submit"
                        className="flex-[2] py-3 bg-gray-900 text-white font-serif text-base rounded-full hover:bg-gray-800 transition-colors"
                      >
                        Place Order · Rs. {cartTotal}
                      </button>
                    </div>
                  </form>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
