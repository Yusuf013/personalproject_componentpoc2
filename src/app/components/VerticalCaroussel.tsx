"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Product 1",
    description: "Beschrijving van product 1",
    image: "/images/product1.png",
    color: "bg-[#C793D5]",
  },
  {
    id: 2,
    title: "Product 2",
    description: "Beschrijving van product 2",
    image: "/images/product2.png",
    color: "bg-[#BEE6F5]",
  },
  {
    id: 3,
    title: "Product 3",
    description: "Beschrijving van product 3",
    image: "/images/product3.png",
    color: "bg-[#D66853]",
  },
  {
    id: 4,
    title: "Product 4",
    description: "Beschrijving van product 4",
    image: "/images/product4.png",
    color: "bg-[#A6B1BA]",
  },
];

export default function VerticalCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (direction: "up" | "down") => {
    setActiveIndex((prev) =>
      direction === "up"
        ? (prev - 1 + items.length) % items.length
        : (prev + 1) % items.length
    );
  };

  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="flex space-x-4">
        {/* Paneel met indicatoren */}
        <div className="flex flex-col items-center space-y-4">
          <button
            className="p-2 bg-black rounded-full hover:bg-gray-300"
            onClick={() => handleScroll("up")}
          >
            ↑
          </button>
          {items.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${
                activeIndex === index ? "bg-black" : "bg-gray-300"
              }`}
            ></div>
          ))}
          <button
            className="p-2 bg-black rounded-full hover:bg-gray-300"
            onClick={() => handleScroll("down")}
          >
            ↓
          </button>
        </div>

        {/* Verticale carrousel */}
        <div className="relative w-[1200px] h-[400px] overflow-hidden">
          <AnimatePresence>
            {items.map((item, index) => {
              const isVisible = index === activeIndex;

              return (
                <motion.div
                  key={item.id}
                  className={`absolute inset-0 flex flex-col p-4 rounded-lg shadow-lg ${
                    isVisible ? item.color : "bg-black"
                  }`}
                  initial={{
                    y: isVisible ? "100%" : 0,
                    opacity: isVisible ? 1 : 0.5,
                  }}
                  animate={{
                    y: isVisible ? 0 : 100,
                    opacity: isVisible ? 1 : 0.5,
                  }}
                  exit={{
                    y: "-100%",
                    opacity: 0,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {isVisible ? (
                    <>
                      <div className="text-lg font-bold">{item.title}</div>
                      <div className="text-sm text-gray-600 mt-2">
                        {item.description}
                      </div>
                      <img
                        src={item.image}
                        alt={item.title}
                        className="mt-auto w-full h-[150px] object-cover rounded-lg"
                      />
                    </>
                  ) : (
                    <div className="text-lg font-bold">{item.title}</div>
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
