"use client"

import { motion } from "motion/react"

const Dashboard = () => {
  return (
    <section className="flex min-h-[600px] items-center justify-center bg-white">
      <motion.div
        initial={{
          opacity: 0,
          y: 80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
        className="text-center"
      >
        <motion.div
          animate={{
            y: [-10, 10, -10],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-5xl font-bold tracking-tight text-black"
        >
          TESTINGG
        </motion.div>

        <p className="mt-4 text-lg text-gray-500">
          TESTINGGGGGG
        </p>
      </motion.div>
    </section>
  )
}

export default Dashboard