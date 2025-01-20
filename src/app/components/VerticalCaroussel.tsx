"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const items = [
  {
    id: 1,
    title: "SpeelSlim Startpakket",
    description:
      "Een pakket met basisvaardigheden voor groep 1-2, zoals tellen, letters herkennen en vormen leren. Perfect om jonge kinderen spelenderwijs kennis te laten maken met leren.",
    color: "bg-[#C793D5]",
  },
  {
    id: 2,
    title: "Zinsbouw Kaarten",
    description: "Beschrijving van zinsbouw kaarten",
    color: "bg-[#BEE6F5]",
  },
  {
    id: 3,
    title: "Alfabet Avontuur",
    description: "Beschrijving van alfabet avontuur",
    color: "bg-[#D66853]",
  },
  {
    id: 4,
    title: "Theater & Verhaal Box",
    description: "Beschrijving van theater & verhaal box",
    color: "bg-[#A6B1BA]",
  },
]

export default function VerticalCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)

  const handleScroll = (direction: "up" | "down") => {
    setActiveIndex((prev) =>
      direction === "up" ? (prev - 1 + items.length) % items.length : (prev + 1) % items.length,
    )
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-white p-8">
      <div className="flex">
        <div className="flex flex-col items-center justify-center space-y-6 mr-8">
          <button
            className="p-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
            onClick={() => handleScroll("up")}
          >
            ↑
          </button>
          {items.map((_, index) => (
            <div
              key={index}
              className={`w-4 h-4 rounded-full transition-colors ${activeIndex === index ? "bg-black" : "bg-gray-300"}`}
            />
          ))}
          <button
            className="p-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
            onClick={() => handleScroll("down")}
          >
            ↓
          </button>
        </div>
        <div className="relative w-[1200px] h-[300px] overflow-hidden">
          <AnimatePresence>
            {items.map((item, index) => {
              const isVisible = index === activeIndex

              return (
                <motion.div
                  key={item.id}
                  className={`absolute inset-0 flex flex-col justify-end p-4 rounded-3xl ${item.color}`}
                  initial={{
                    y: isVisible ? "100%" : 0,
                    opacity: isVisible ? 0 : 1,
                    scale: isVisible ? 1.1 : 1,
                  }}
                  animate={{
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    zIndex: isVisible ? items.length - index : 0,
                  }}
                  exit={{
                    y: "-100%",
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                  style={{
                    position: "absolute",
                    top: `${index * 10}px`,
                  }}
                >
                  <div className="text-xl font-bold mb-1">{item.title}</div>
                  {isVisible && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-sm mb-2"
                    >
                      {item.description}
                    </motion.div>
                  )}
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

