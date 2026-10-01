 import Image from "next/image";
import React from "react";
import logo from "@/assets/maruf.png";

const Maruf = () => {
  return (
    <section className="px-4 py-8 sm:px-6 sm:py-12 lg:px-10 lg:py-16">
      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center overflow-hidden rounded-[2rem] border border-pink-100 bg-gradient-to-br from-green-100 via-white to-pink-100 p-6 shadow-[0_20px_60px_rgba(190,24,93,0.08)] sm:rounded-[2.5rem] sm:p-8 md:flex-row md:gap-8 md:p-10 lg:gap-14 lg:p-14">

        {/* Decorative Elements */}

        <div className="pointer-events-none absolute left-5 top-5 text-2xl opacity-20 sm:left-8 sm:top-8">
          💕
        </div>

        <div className="pointer-events-none absolute right-7 top-7 text-xl opacity-25 sm:right-10 sm:top-10">
          ✨
        </div>

        <div className="pointer-events-none absolute bottom-8 left-1/4 text-xl opacity-15">
          💗
        </div>

        <div className="pointer-events-none absolute bottom-6 right-1/4 text-lg opacity-15">
          🌸
        </div>

        {/* ================= LEFT — TEXT ================= */}

        <div className="relative z-10 flex w-full flex-1 flex-col items-center text-center md:items-start md:text-left">

          {/* Small Label */}

          <span className="mb-6 rounded-full border border-pink-200 bg-pink-50/80 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-pink-700 shadow-sm">
            Just For You ❤️
          </span>

          {/* Main Heading */}

          <h1 className="max-w-2xl font-serif text-3xl font-bold leading-[1.5] tracking-tight text-[#4c0519] sm:text-4xl md:text-4xl lg:text-5xl">

            <span className="block">
              তুমি দূরে দূরে
            </span>

            <span className="mt-1 block bg-gradient-to-r from-pink-600 via-rose-500 to-red-500 bg-clip-text text-transparent">
              আর থেকো না
            </span>

            <span className="mt-4 block text-xl font-medium leading-relaxed text-[#4c0519] sm:text-2xl md:text-3xl lg:text-4xl">
              এ চোখে চেয়ে দেখো না
            </span>

            <span className="mt-3 block text-xl font-medium leading-relaxed text-[#4c0519] sm:text-2xl md:text-3xl lg:text-4xl">
              আজ তোমায় আমি এনে দেবো জোছনা
            </span>

            <span className="mt-3 block text-xl font-medium leading-relaxed text-[#4c0519] sm:text-2xl md:text-3xl lg:text-4xl">
              তুমি কাছে এসে আমার পাশে বসো না ❤️
            </span>

          </h1>

          {/* Divider */}

          <div className="my-7 flex items-center gap-3">
            <div className="h-px w-12 bg-pink-200 sm:w-16" />
            <span className="text-sm text-pink-500">♥</span>
            <div className="h-px w-12 bg-pink-200 sm:w-16" />
          </div>

          {/* English Quote */}

          <p className="max-w-xl font-serif text-sm italic leading-7 text-pink-600 sm:text-base sm:leading-8">
            “Come a little closer, and let me make this moment beautiful.”
          </p>

          {/* Bengali Quote */}

           

        </div>

        {/* ================= RIGHT — IMAGE ================= */}

        <div className="relative mt-10 flex w-full flex-1 justify-center md:mt-0">

          {/* Soft Glow */}

          <div className="absolute inset-8 rounded-full bg-pink-200/40 blur-3xl" />

          {/* Image Card */}

          <div className="relative z-10 w-full max-w-md overflow-hidden rounded-[1.75rem] border border-white/80 bg-white/60 p-2 shadow-[0_20px_50px_rgba(190,24,93,0.15)] backdrop-blur-md sm:rounded-[2rem] sm:p-3">

            <div className="overflow-hidden rounded-[1.25rem] sm:rounded-[1.5rem]">
              <Image
                src={logo}
                alt="Maruf"
                width={500}
                height={316}
                priority
                className="h-auto w-full object-cover transition duration-700 hover:scale-[1.03]"
              />
            </div>

          </div>
          

        </div>
        <div className="mt-5 max-w-xl rounded-2xl border border-pink-100 bg-white/60 px-5 py-5 shadow-sm backdrop-blur-sm sm:px-6">
            <p className="font-serif text-sm font-medium leading-7 text-purple-800 sm:text-base sm:leading-8">
              যে তোমায় ভালোবাসেনি সে অকারণে ছেড়ে যাবে,
              <br />
              যে তোমায় ভালোবাসে সে হাজারটা কারণ দেখিয়ে
              <br className="hidden sm:block" />
              তোমার কাছে থেকে যাবে। 😊🥀
            </p>
          </div>

      </div>
    </section>
  );
};

export default Maruf;