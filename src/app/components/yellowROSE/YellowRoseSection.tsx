
"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

// Fixed positions — avoids Math.random() hydration problems
const stars = [
  { left: 8, top: 12, duration: 3, delay: 0 },
  { left: 18, top: 28, duration: 4, delay: 1 },
  { left: 31, top: 8, duration: 2.5, delay: 0.5 },
  { left: 43, top: 22, duration: 3.5, delay: 1.5 },
  { left: 57, top: 14, duration: 4, delay: 0.3 },
  { left: 68, top: 32, duration: 2.5, delay: 2 },
  { left: 79, top: 10, duration: 3, delay: 1 },
  { left: 91, top: 27, duration: 4, delay: 0 },
  { left: 13, top: 52, duration: 3.5, delay: 1.2 },
  { left: 27, top: 67, duration: 2.5, delay: 0.4 },
  { left: 44, top: 55, duration: 4, delay: 1.8 },
  { left: 62, top: 72, duration: 3, delay: 0.8 },
  { left: 76, top: 58, duration: 3.5, delay: 2 },
  { left: 88, top: 78, duration: 2.5, delay: 1 },
];

const petals = [
  { left: 8, delay: 0, duration: 6, rotate: 280 },
  { left: 18, delay: 1, duration: 7, rotate: 420 },
  { left: 29, delay: 2, duration: 5, rotate: 350 },
  { left: 40, delay: 0.5, duration: 8, rotate: 500 },
  { left: 51, delay: 1.5, duration: 6, rotate: 330 },
  { left: 62, delay: 2.5, duration: 7, rotate: 450 },
  { left: 73, delay: 1, duration: 5.5, rotate: 300 },
  { left: 84, delay: 3, duration: 8, rotate: 520 },
  { left: 94, delay: 0.5, duration: 6, rotate: 380 },
];

export default function YellowRoseSection() {
  const [started, setStarted] = useState(false);
  const [bloomed, setBloomed] = useState(false);

  useEffect(() => {
    if (!started) return;

    const timer = setTimeout(() => {
      setBloomed(true);
    }, 2200);

    return () => clearTimeout(timer);
  }, [started]);

  const startRose = () => {
    setStarted(true);
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050711] text-white">
      

      {/* =====================================
          STARS
      ====================================== */}
      <div className="pointer-events-none absolute inset-0">
        {stars.map((star, index) => (
          <motion.span
            key={index}
            className="absolute h-1 w-1 rounded-full bg-white"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.7, 1.3, 0.7],
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              delay: star.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* =====================================
          MOON
      ====================================== */}
      <motion.div
        className="pointer-events-none absolute right-[8%] top-[8%] h-20 w-20 rounded-full bg-yellow-50 shadow-[0_0_60px_rgba(255,255,200,0.25)] sm:h-24 sm:w-24"
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =====================================
          BOTTOM GLOW
      ====================================== */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-64 w-[600px] max-w-[150vw] -translate-x-1/2 rounded-full bg-yellow-500/5 blur-3xl" />

      {/* =====================================
          MAIN CONTENT
      ====================================== */}
      <div className="relative z-20 flex min-h-screen items-center justify-center px-6 py-20">
        <AnimatePresence mode="wait">
          {/* =================================
              INTRO SCREEN
          ================================= */}
          {!started && (
            <motion.div
              key="intro"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl text-center"
            >
              <p className="mb-5 text-xs uppercase tracking-[0.4em] text-yellow-200/60 sm:text-sm">
                  A little surprise
              </p>

              <h2 className="text-4xl font-light leading-tight sm:text-6xl">
                জন্মদিনে আপনাকে দেয়ার মতো শুধু আমার মনটাই আছে But I want to give you
                <br />
                <span className="font-serif italic text-yellow-200">
                  something special...
                </span>
              </h2>

              <p className="mx-auto mt-6 max-w-lg text-sm leading-7 text-white/50 sm:text-lg">
                Not something expensive.
                <br />
                Not something complicated.
                <br />
                Just something that reminded me of you.
              </p>

              <motion.button
                type="button"
                onClick={startRose}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(250, 204, 21, 0.15)",
                }}
                whileTap={{ scale: 0.95 }}
                className="mt-10 rounded-full border border-yellow-200/30 bg-yellow-100/10 px-8 py-4 text-sm tracking-[0.25em] text-yellow-100 backdrop-blur-md transition-colors hover:bg-yellow-100/20"
              >
                🌻 OPEN IT
              </motion.button>
            </motion.div>
          )}

          {/* =================================
              ROSE EXPERIENCE
          ================================= */}
          {started && (
            <motion.div
              key="rose"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="flex w-full flex-col items-center text-center"
            >
              {/* =================================
                  ROSE
              ================================= */}
              <div className="relative h-[390px] w-[280px] sm:h-[430px]">
                {/* Rose glow */}
                <motion.div
                  className="absolute left-1/2 top-[10%] h-40 w-40 -translate-x-1/2 rounded-full bg-yellow-300/20 blur-3xl"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{
                    opacity: bloomed ? [0.25, 0.6, 0.25] : 0,
                    scale: bloomed ? [1, 1.25, 1] : 0.5,
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* =================================
                    STEM
                ================================= */}
                <motion.div
                  className="absolute bottom-0 left-1/2 w-[5px] -translate-x-1/2 origin-bottom rounded-full bg-gradient-to-t from-green-950 via-green-700 to-green-400"
                  initial={{ height: 0 }}
                  animate={{ height: started ? 285 : 0 }}
                  transition={{
                    duration: 2,
                    ease: "easeOut",
                  }}
                />

                {/* =================================
                    LEFT LEAF
                ================================= */}
                <motion.div
                  className="absolute bottom-[125px] left-[58px] h-12 w-20 origin-right rotate-[25deg] rounded-[100%_0_100%_0] bg-gradient-to-br from-green-500 to-green-900"
                  initial={{
                    opacity: 0,
                    scale: 0,
                  }}
                  animate={{
                    opacity: started ? 1 : 0,
                    scale: started ? 1 : 0,
                  }}
                  transition={{
                    delay: 1.35,
                    duration: 0.6,
                  }}
                />

                {/* =================================
                    RIGHT LEAF
                ================================= */}
                <motion.div
                  className="absolute bottom-[185px] right-[48px] h-11 w-20 origin-left -rotate-[25deg] rounded-[0_100%_0_100%] bg-gradient-to-br from-green-500 to-green-900"
                  initial={{
                    opacity: 0,
                    scale: 0,
                  }}
                  animate={{
                    opacity: started ? 1 : 0,
                    scale: started ? 1 : 0,
                  }}
                  transition={{
                    delay: 1.65,
                    duration: 0.6,
                  }}
                />

                {/* =================================
                    ROSE BLOOM
                ================================= */}
                <AnimatePresence>
                  {bloomed && (
                    <motion.div
                      className="absolute left-1/2 top-[45px] -translate-x-1/2"
                      initial={{
                        opacity: 0,
                        scale: 0,
                        rotate: -15,
                      }}
                      animate={{
                        opacity: 1,
                        scale: [0, 1.18, 1],
                        rotate: 0,
                      }}
                      transition={{
                        duration: 1.6,
                        ease: "easeOut",
                      }}
                    >
                      <div className="relative h-32 w-32">
                        {/* Outer petal 1 */}
                        <motion.div
                          className="absolute left-1/2 top-1/2 h-28 w-20 -translate-x-1/2 -translate-y-1/2 rotate-[-30deg] rounded-[50%_50%_45%_45%] bg-gradient-to-br from-yellow-100 via-yellow-400 to-yellow-700 shadow-[0_0_35px_rgba(250,204,21,0.45)]"
                        />

                        {/* Outer petal 2 */}
                        <div className="absolute left-1/2 top-1/2 h-28 w-20 -translate-x-1/2 -translate-y-1/2 rotate-[30deg] rounded-[50%_50%_45%_45%] bg-gradient-to-br from-yellow-100 via-yellow-400 to-yellow-700" />

                        {/* Outer petal 3 */}
                        <div className="absolute left-1/2 top-1/2 h-28 w-20 -translate-x-1/2 -translate-y-1/2 rotate-90 rounded-[50%_50%_45%_45%] bg-gradient-to-br from-yellow-200 via-yellow-500 to-yellow-800" />

                        {/* Inner petal 1 */}
                        <div className="absolute left-1/2 top-1/2 h-20 w-16 -translate-x-1/2 -translate-y-1/2 rotate-[-20deg] rounded-[50%_50%_45%_45%] bg-yellow-300" />

                        {/* Inner petal 2 */}
                        <div className="absolute left-1/2 top-1/2 h-20 w-16 -translate-x-1/2 -translate-y-1/2 rotate-[20deg] rounded-[50%_50%_45%_45%] bg-yellow-400" />

                        {/* Center */}
                        <div className="absolute left-1/2 top-1/2 h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-700 shadow-inner" />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* =================================
                  MESSAGE
              ================================= */}
              <AnimatePresence>
                {bloomed && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 25,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 0.7,
                      duration: 1,
                    }}
                    className="relative z-30 max-w-2xl"
                  >
                    <p className="text-xs uppercase tracking-[0.5em] text-yellow-200/60 sm:text-sm">
                      For you
                    </p>

                    <h3 className="mt-4 font-serif text-4xl italic text-yellow-100 sm:text-5xl">
                      My beautiful Babu. আপনার পছন্দের হলুদ গোলাপ 🌻
                    </h3>

                    <p className="mt-6 text-base leading-8 text-white/70 sm:text-lg">
                      If I could give you one flower today,
                      <br />
                      I&apos;d give you a yellow rose.
                    </p>

                    <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/50 sm:text-base">
                      Because it reminds me of warmth, happiness,
                      <br className="hidden sm:block" />
                      and the little moments that make life beautiful.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* =================================
                  FALLING PETALS
              ================================= */}
              {bloomed &&
                petals.map((petal, index) => (
                  <motion.div
                    key={index}
                    className="pointer-events-none fixed top-[-20px] z-10 h-3 w-2 rounded-full bg-yellow-300/70"
                    initial={{
                      left: `${petal.left}%`,
                      y: -20,
                      rotate: 0,
                      opacity: 0,
                    }}
                    animate={{
                      y: "110vh",
                      rotate: petal.rotate,
                      opacity: [0, 1, 1, 0],
                    }}
                    transition={{
                      duration: petal.duration,
                      delay: petal.delay,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

