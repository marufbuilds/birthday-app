 
"use client";

import Image from "next/image";
import Link from "next/link";

import {
  HiOutlineHeart,
  HiOutlineSparkles,
  HiOutlineGift,
  HiOutlineCake,
  HiOutlineArrowDown,
} from "react-icons/hi";

import logos from "@/assets/ChatGPT Image Sep 4, 2026, 12_39_35 AM.png";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="rounded-2xl mt-10  relative min-h-screen overflow-hidden bg-[#4c0519] text-white"
    >
      
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_35%,#fecdd3_0%,#fb7185_20%,#f43f5e_40%,#e11d48_60%,#9f1239_80%,#4c0519_100%)]" />

      {/* Main glow */}

      <div className="absolute left-[55%] top-[35%] h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-200/20 blur-[60px] sm:h-[450px] sm:w-[450px] sm:blur-[80px]" />

      {/* Side glows */}

      <div className="absolute -right-32 top-20 h-[350px] w-[350px] rounded-full bg-rose-300/15 blur-[70px]" />

      <div className="absolute -bottom-32 -left-32 h-[350px] w-[350px] rounded-full bg-red-400/15 blur-[70px]" />

      {/* =====================================================
          FLOATING SPHERES
      ====================================================== */}

      <div className="absolute left-[4%] top-[18%] h-20 w-20 rounded-full border border-white/20 bg-white/10 shadow-[0_0_40px_rgba(253,164,175,0.3)] sm:h-28 sm:w-28" />

      <div className="absolute right-[5%] top-[12%] h-28 w-28 rounded-full border border-white/20 bg-white/10 shadow-[0_0_50px_rgba(251,113,133,0.3)] sm:h-36 sm:w-36" />

      <div className="absolute bottom-[12%] left-[8%] h-16 w-16 rounded-full border border-white/20 bg-white/10 shadow-[0_0_35px_rgba(253,164,175,0.3)] sm:h-20 sm:w-20" />

      <div className="absolute bottom-[15%] right-[15%] h-14 w-14 rounded-full border border-white/20 bg-white/10 shadow-[0_0_30px_rgba(251,113,133,0.3)] sm:h-20 sm:w-20" />

      {/* =====================================================
          SMALL ORBS
      ====================================================== */}

      <div className="absolute left-[20%] top-[55%] h-7 w-7 rounded-full bg-white/20 shadow-[0_0_20px_rgba(255,255,255,0.3)] sm:h-10 sm:w-10" />

      <div className="absolute right-[35%] top-[18%] h-6 w-6 rounded-full bg-white/20 shadow-[0_0_20px_rgba(255,255,255,0.3)]" />

      <div className="absolute bottom-[25%] right-[8%] h-8 w-8 rounded-full bg-white/20 shadow-[0_0_25px_rgba(255,255,255,0.3)]" />

      {/* =====================================================
          FLOATING HEARTS
      ====================================================== */}

      <div className="absolute left-[10%] top-[40%] animate-bounce text-3xl text-pink-100/60 [animation-duration:6s] sm:text-5xl">
        ♥
      </div>

      <div className="absolute left-[30%] top-[12%] animate-bounce text-2xl text-white/60 [animation-duration:7s] sm:text-3xl">
        ♥
      </div>

      <div className="absolute right-[32%] top-[25%] animate-bounce text-3xl text-pink-100/70 [animation-duration:5s] sm:text-4xl">
        ♥
      </div>

      <div className="absolute right-[7%] top-[52%] animate-bounce text-4xl text-white/50 [animation-duration:8s] sm:text-6xl">
        ♥
      </div>

      {/* =====================================================
          SPARKLES
      ====================================================== */}

      <HiOutlineSparkles className="absolute left-[18%] top-[28%] animate-pulse text-2xl text-white/70 sm:text-3xl" />

      <HiOutlineSparkles className="absolute right-[25%] top-[40%] animate-pulse text-xl text-pink-100/70 sm:text-2xl" />

      <HiOutlineSparkles className="absolute bottom-[25%] left-[40%] animate-pulse text-lg text-white/60 sm:text-xl" />

      {/* =====================================================
          3D FLOOR
      ====================================================== */}

      <div className="absolute bottom-[-20%] left-1/2 h-[350px] w-[120%] -translate-x-1/2 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:45px_45px] opacity-20 [transform:perspective(700px)_rotateX(65deg)]" />

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div className="relative z-20 mx-auto flex min-h-screen w-full max-w-7xl items-center px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-20">

        <div className="grid w-full items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* =================================================
              LEFT CONTENT
          ================================================== */}

          <div className="min-w-0 text-center lg:text-left">

            {/* Badge */}

            <div className="mb-8 inline-flex max-w-full items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 shadow-lg backdrop-blur-sm sm:px-5 sm:py-2.5">

              <HiOutlineHeart className="shrink-0 animate-pulse text-pink-100" />

              <span className="text-xs font-medium tracking-wide text-white sm:text-sm">
                A Special Day For Someone Special
              </span>

              <HiOutlineHeart className="shrink-0 animate-pulse text-pink-100" />

            </div>

            {/* =================================================
                MODERN PREMIUM HEADING
            ================================================== */}

            <div className="relative mx-auto max-w-2xl lg:mx-0">

              {/* Soft glow */}

              <div className="pointer-events-none absolute -left-10 top-10 h-40 w-40 rounded-full bg-pink-400/10 blur-[80px]" />

              <h1 className="relative">

                {/* Eyebrow */}

                <span className="mb-5 flex items-center justify-center gap-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-pink-100/80 sm:text-xs lg:justify-start">

                  <span className="h-px w-8 bg-pink-200/60 sm:w-12" />

                  A Special Celebration

                  <span className="h-px w-8 bg-pink-200/60 sm:hidden" />

                </span>

                {/* Happy */}

                <span className="relative mt-2 block text-center text-[clamp(3.5rem,9vw,6.5rem)] font-black leading-[0.9] tracking-[-0.065em] lg:text-left">

                   <span className="bg-gradient-to-r from-pink-50 via-pink-200 to-pink-300 bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(76,5,25,0.7)]">
   Happy
</span>

                </span>

                {/* Birthday */}

                <span className="relative mb-3 mt-2 block text-center text-[clamp(3.5rem,9vw,6.5rem)] font-black leading-[0.9] tracking-[-0.065em] lg:text-left">

                   <span className="bg-gradient-to-r from-pink-50 via-pink-200 to-pink-300 bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(76,5,25,0.7)]">
  Birthday
</span>

                </span>

                

                <div className="relative inline-block    ">
                 <span className="   block text-center font-serif text-[clamp(3.5rem,9vw,6.5rem)] font-bold italic leading-[0.9] tracking-[-0.04em] text-white drop-shadow-[0_5px_25px_rgba(76,5,25,0.3)] lg:text-left">

                   Dear Rubat

                </span>

  <span className="absolute -right-5 -top-3 text-sm text-pink-100/80 sm:-right-7 sm:-top-4 sm:text-lg">
    ✦
  </span>
</div>
              </h1>

            </div>

            {/* =================================================
                BANGLA MESSAGE
            ================================================== */}

            <p className="mx-auto mt-7 max-w-xl text-base font-semibold leading-relaxed text-white drop-shadow-[0_2px_10px_rgba(76,5,25,0.4)] sm:text-xl lg:mx-0 lg:text-2xl">

              আজকের দিনটা শুধু আপনার জন্মদিন নয়,

              <br />

              <span className="text-pink-50">
                আজকের দিনটি আপনাকে মনে করিয়ে দিচ্ছি যে, আপনি কতটা বিশেষ 💗😁
              </span>

            </p>

            {/* =================================================
                BUTTONS
            ================================================== */}

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">

              

             

            </div>

            {/* =================================================
                STATS
            ================================================== */}

            <div className="mt-8 flex justify-center gap-2 sm:gap-3 lg:justify-start">

              <div className="rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 shadow-lg backdrop-blur-sm sm:rounded-2xl sm:px-5 sm:py-3">

                <p className="text-lg font-bold sm:text-xl">
                  ∞
                </p>

                <p className="text-[10px] text-rose-100/70 sm:text-xs">
                  Love
                </p>

              </div>

              <div className="rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 shadow-lg backdrop-blur-sm sm:rounded-2xl sm:px-5 sm:py-3">

                <p className="text-lg font-bold sm:text-xl">
                  365
                </p>

                <p className="text-[10px] text-rose-100/70 sm:text-xs">
                  Memories
                </p>

              </div>

              <div className="rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 shadow-lg backdrop-blur-sm sm:rounded-2xl sm:px-5 sm:py-3">

                <p className="text-lg font-bold sm:text-xl">
                  ♥
                </p>

                <p className="text-[10px] text-rose-100/70 sm:text-xs">
                  Forever
                </p>

              </div>

            </div>

          </div>

          {/* =================================================
              RIGHT — IMAGE CARD
          ================================================== */}

          <div className="relative flex min-w-0 items-center justify-center">

            {/* Image glow */}

            <div className="absolute h-[300px] w-[300px] rounded-full bg-pink-300/20 blur-[60px] sm:h-[400px] sm:w-[400px] sm:blur-[80px]" />

            {/* Glass circle */}

            <div className="absolute h-[300px] w-[300px] rounded-full border border-white/10 bg-white/5 shadow-[0_0_60px_rgba(251,113,133,0.25)] sm:h-[400px] sm:w-[400px]" />

            {/* Floating hearts */}

            <div className="absolute left-[2%] top-[15%] z-30 animate-bounce text-4xl text-white [animation-duration:5s] sm:text-5xl">
              ♥
            </div>

            <div className="absolute right-[5%] top-[20%] z-30 animate-bounce text-3xl text-pink-100 [animation-duration:7s] sm:text-4xl">
              ♥
            </div>

            {/* =================================================
                IMAGE CARD
            ================================================== */}

            <div className="relative z-20 w-full max-w-[430px]">

              {/* Back layers */}

              <div className="absolute inset-3 rotate-6 rounded-[2rem] border border-white/10 bg-white/10" />

              <div className="absolute inset-3 -rotate-6 rounded-[2rem] border border-white/10 bg-pink-200/10" />

              {/* Main card */}

              <div className="relative overflow-hidden rounded-[2rem] border border-white/30 bg-white/10 p-2.5 shadow-[0_25px_70px_rgba(76,5,25,0.4)] backdrop-blur-sm sm:rounded-[2.5rem] sm:p-3">

                <div className="relative overflow-hidden rounded-[1.5rem] sm:rounded-[2rem]">

                  <Image
                    src={logos}
                    alt="Birthday memory"
                    width={700}
                    height={850}
                    priority
                    className="h-[380px] w-full object-cover transition duration-500 sm:h-[500px]"
                  />

                  {/* Image overlay */}

                  <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-rose-950/35" />

                  {/* Bottom message */}

                  <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/20 bg-black/20 p-3 backdrop-blur-sm sm:bottom-5 sm:left-5 sm:right-5 sm:rounded-2xl sm:p-4">

                    <div className="flex items-center gap-3">

                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/20 sm:h-11 sm:w-11">

                        <HiOutlineHeart className="animate-pulse text-xl text-pink-100 sm:text-2xl" />

                      </div>

                      <div className="min-w-0">

                        <p className="truncate text-sm font-bold text-white sm:text-base">
                          You are truly special
                        </p>

                        <p className="text-[10px] text-white/70 sm:text-xs">
                          Wishing you a wonderful year ahead💕
                        </p>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

              {/* Birthday badge */}

              <div className="absolute -right-2 top-5 z-30 rounded-xl border border-white/25 bg-white/15 px-3 py-2 shadow-lg backdrop-blur-sm sm:-right-5 sm:top-8 sm:rounded-2xl sm:px-4 sm:py-3">

                <div className="flex items-center gap-2">

                  <span className="text-lg sm:text-xl">
                    🍓
                  </span>

                  <div>

                    <p className="text-[9px] text-white/60 sm:text-xs">
                      Today is
                    </p>

                    <p className="text-xs font-bold text-white sm:text-sm">
                      Your Day!
                    </p>

                  </div>

                </div>

              </div>

              {/* Sparkle badge */}

              <div className="absolute -bottom-3 -left-2 z-30 flex h-11 w-11 items-center justify-center rounded-xl border border-white/25 bg-white/15 shadow-lg backdrop-blur-sm sm:-bottom-4 sm:-left-4 sm:h-14 sm:w-14 sm:rounded-2xl">

                <HiOutlineSparkles className="animate-pulse text-xl text-pink-100 sm:text-2xl" />

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* =====================================================
          BOTTOM GLOW
      ====================================================== */}

      <div className="absolute bottom-0 left-1/2 h-24 w-[70%] -translate-x-1/2 rounded-full bg-pink-300/15 blur-[60px]" />

      {/* =====================================================
          SCROLL
      ====================================================== */}

      <div className="absolute bottom-4 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center gap-1 text-white/60">

        <span className="text-[9px] font-medium uppercase tracking-[0.25em]">
          Scroll
        </span>

        <HiOutlineArrowDown className="animate-bounce text-base" />

      </div>

    </section>
  );
};

export default HeroSection;