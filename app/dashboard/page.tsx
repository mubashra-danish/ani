"use client"

import { BarChart3, Cloud, Code2, ShieldCheck, Smartphone } from "lucide-react"
import { motion, useReducedMotion } from "motion/react"

const services = [
  { name: "Cloud Solutions", icon: Cloud, angle: 0 },
  { name: "Mobile Apps", icon: Smartphone, angle: 90 },
  { name: "Secure & Reliable", icon: ShieldCheck, angle: 180 },
  { name: "Scalable Systems", icon: BarChart3, angle: 270 },
    { name: "Test Systems", icon: BarChart3, angle: 270 },
]

const Dashboard = () => {
  const reduceMotion = useReducedMotion()
  const orbitTransition = {
    duration: 30,
    repeat: Infinity,
    ease: "linear" as const,
  }

  return (
    <section className="flex min-h-[600px] flex-col items-center justify-center gap-12 overflow-hidden bg-gradient-to-br from-white via-blue-80 to-blue-200 px-6 py-12 lg:flex-row lg:gap-16">
      <div className="max-w-md text-center lg:text-left">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Welcome to your dashboard
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          A fresh day, a new idea, and plenty to explore. Keep track of your
          progress and make your next project happen.
        </p>
        <p className="mt-4 text-sm font-medium text-slate-500">
          Today&apos;s focus: small steps, big possibilities.
        </p>
      </div>

      <div className="relative my-10 h-[240px] w-[240px] shrink-0 sm:h-[420px] sm:w-[420px]">
        <div className="absolute inset-0 rounded-full border border-blue-300" />
        <div className="absolute inset-8 rounded-full border border-blue-200" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-28 w-32 flex-col items-center justify-center rounded-2xl border border-white bg-gradient-to-br from-blue-400 to-blue-700 text-white shadow-xl shadow-blue-400/40 sm:h-48 sm:w-56">
            <Code2 className="mb-2 h-8 w-8 sm:h-14 sm:w-14" aria-hidden="true" />
            <p className="text-xl font-bold sm:text-3xl">TESTINGGG</p>
            <p className="mt-2 text-[10px] sm:text-sm">Build � Automate � Grow</p>
          </div>
        </div>

        {/* Each arm completes a full orbit around the center panel. */}
        {services.map(({ name, icon: Icon, angle }) => (
          <motion.div
            key={name}
            className="pointer-events-none absolute inset-0"
            initial={{ rotate: angle }}
            animate={{ rotate: reduceMotion ? angle : angle + 360 }}
            transition={orbitTransition}
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              {/* Counter-rotation keeps the card text upright during its orbit. */}
              <motion.div
                initial={{ rotate: -angle }}
                animate={{ rotate: reduceMotion ? -angle : -angle - 360 }}
                transition={orbitTransition}
                className="flex w-20 flex-col items-center gap-2 rounded-xl border border-white bg-white/95 px-2 py-3 text-center shadow-lg shadow-blue-300/30 sm:w-36 sm:px-3"
              >
                <Icon className="h-7 w-7 text-blue-600" aria-hidden="true" />
                <p className="text-xs font-semibold text-blue-950 sm:text-sm">{name}</p>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Dashboard
