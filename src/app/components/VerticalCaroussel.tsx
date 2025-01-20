"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const items = [
  {
    id: 1,
    title: "SpeelSlim Startpakket",
    description:
      "Een pakket met basisvaardigheden voor groep 1-2, zoals tellen, letters herkennen en vormen leren. Perfect om jonge kinderen spelenderwijs kennis te laten maken met leren.",
    color: "bg-[#C793D5]",
    indicatorColor: "bg-[#C793D5]", // Kleur voor de indicator
  },
  {
    id: 2,
    title: "Zinsbouw Kaarten",
    description: "Een set kaarten om kinderen te leren hoe ze correcte en creatieve zinnen kunnen maken.",
    color: "bg-[#BEE6F5]",
    indicatorColor: "bg-[#BEE6F5]", // Kleur voor de indicator
  },
  {
    id: 3,
    title: "Alfabet Avontuur",
    description: "Werkboek om jonge kinderen letters te leren herkennen en schrijven.",
    color: "bg-[#D66853]",
    indicatorColor: "bg-[#D66853]", // Kleur voor de indicator
  },
  {
    id: 4,
    title: "Theater & Verhaal Box",
    description: "Props en inspiratiekaarten voor het maken van toneelstukjes.",
    color: "bg-[#A6B1BA]",
    indicatorColor: "bg-[#A6B1BA]", // Kleur voor de indicator
  },
]

interface ButtonProps {
  onClick: () => void
  imageUrl: string
}

const Button: React.FC<ButtonProps> = ({ onClick, imageUrl }) => (
  <button
    className="w-10 h-10 rounded-full hover:bg-[#2E2E4F] transition-colors flex items-center justify-center overflow-hidden"
    onClick={onClick}
  >
    <Image src={imageUrl || "/placeholder.svg"} alt="Button icon" width={24} height={24} />
  </button>
)

export default function VerticalCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)

  const handleScroll = (direction: "up" | "down") => {
    setActiveIndex((prev) =>
      direction === "up" ? (prev - 1 + items.length) % items.length : (prev + 1) % items.length,
    )
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-8">
      <div className="flex flex-col justify-center mb-10"  style={{ fontFamily: 'Kalam, sans-serif' }}>
        <h2 className="text-3xl text-black font-bold text-center mb-1">Nieuwste producten</h2>
        <img 
          src="/images/image container (1).svg" 
          className="w-[70px] h-[20px] mx-auto" 
          alt="Image container" 
          />
        </div>
      <div className="flex h-[200px]">
        <div className="flex flex-col items-center justify-between h-full mr-8">
          <Button onClick={() => handleScroll("up")} imageUrl="/images/upload (3).png" />
          <div className="flex flex-col items-center justify-center flex-grow">
            {items.map((item, index) => (
              <div
                key={index}
                className={`w-4 h-4 rounded-full transition-colors mb-2 ${
                  activeIndex === index ? item.indicatorColor : "bg-gray-300"
                }`}
              />
            ))}
          </div>
          <Button onClick={() => handleScroll("down")} imageUrl="/images/upload (3) 3.png" />
        </div>
        <div className="relative w-[1200px] h-full overflow-hidden perspective-1000">
          <AnimatePresence initial={false}>
            {items.map((item, index) => {
              const isVisible = index === activeIndex

              return (
                <motion.div
                  key={item.id}
                  className={`absolute inset-0 flex items-center justify-between p-8 rounded-3xl ${item.color}`}
                  initial={{
                    y: "100%",
                    rotateX: 45,
                    scale: 0.9,
                    opacity: 0,
                  }}
                  animate={{
                    y: `${(index - activeIndex) * 8}px`,
                    rotateX: isVisible ? 0 : 45,
                    scale: isVisible ? 1 : 0.9,
                    opacity: 1,
                    zIndex: items.length - Math.abs(index - activeIndex),
                  }}
                  exit={{
                    y: "-100%",
                    rotateX: 45,
                    scale: 0.9,
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  style={{
                    transformOrigin: "50% 100%",
                    overflow: "visible",
                  }}
                >
                  <div className="flex flex-col justify-between h-full w-2/3">
                    <div>
                      <h2
                        className="text-2xl font-bold text-[#2E2E4F] mb-4"
                        style={{
                          fontFamily: "Kalam, sans-serif",
                          fontWeight: 700, // Zorg ervoor dat het bold is
                          color: "#2E2E4F",
                        }}
                      >
                        {item.title}
                      </h2>
                      {isVisible && (
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="text-base text-[#2E2E4F] mb-4"
                        >
                          {item.description}
                        </motion.p>
                      )}
                    </div>
                  </div>
                  <div className="w-1/3 h-full flex items-center justify-center">
                    <div className="w-64 h-64 bg-transparent rounded-lg flex items-center justify-center transform -rotate-10">
                      <Image
                        src="/images/PPplaceholder1.png"
                        alt="Placeholder"
                        width={1000}
                        height={1000}
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
