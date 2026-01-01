import React from "react";

const services = [
  {
    title: "Dine-In Experience",
    description:
      "Enjoy a cozy ambiance with our carefully crafted dishes and drinks.",
    icon: "🍽️",
  },
  {
    title: "Home Delivery",
    description:
      "Get your favorite meals delivered to your doorstep quickly and safely.",
    icon: "🏍️",
  },
  {
    title: "Event Catering",
    description:
      "We cater for parties, birthdays, and corporate events with customized menus.",
    icon: "🎉",
  },
  {
    title: "Online Booking",
    description:
      "Reserve your table in advance easily through our online system.",
    icon: "📅",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-[#F8DDB2] py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-6">Our Services</h1>
        <p className="text-gray-600 mb-12">
          We offer a variety of services to make your dining experience
          memorable.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition duration-300"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
