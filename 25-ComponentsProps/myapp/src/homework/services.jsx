import React from "react";
import { FaShoppingCart, FaLaptop, FaLock } from "react-icons/fa";
import "../homeworkcss/services.css";

const services = [
  {
    icon: <FaShoppingCart className="text-white text-3xl" />,
    title: "E-Commerce",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."
  },
  {
    icon: <FaLaptop className="text-white text-3xl" />,
    title: "Responsive Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."
  },
  {
    icon: <FaLock className="text-white text-3xl" />,
    title: "Web Security",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."
  }
];

const Services = () => {
  return (
    <section className="text-center py-16 bg-gray-50">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">SERVICES</h2>
      <p className="text-gray-500 mb-12">
        Lorem ipsum dolor sit amet consectetur
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="bg-yellow-400 rounded-full w-20 h-20 flex items-center justify-center mb-4">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm max-w-xs">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;