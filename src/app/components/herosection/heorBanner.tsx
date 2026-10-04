 import React from "react";
import Image from "next/image";
import logo from "@/assets/profile.png";
import { HiOutlineSparkles } from "react-icons/hi";

export const HeorBanner = () => {
  return (
    <section className=" rounded-2xl mt-5  relative overflow-hidden bg-[#4c0519] px-4 py-10 text-white sm:px-6 sm:py-20 lg:px-10 lg:py-24">

      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="absolute inset-0  bg-[radial-gradient(circle_at_70%_30%,#fecdd3_0%,#fb7185_18%,#f43f5e_38%,#e11d48_58%,#9f1239_78%,#4c0519_100%)]" />

      {/* Soft glows */}

      <div className="absolute -left-32 top-1/3 h-72 w-72 rounded-full bg-pink-300/10 blur-[90px] sm:h-96 sm:w-96" />

      <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-rose-300/10 blur-[90px] sm:h-[450px] sm:w-[450px]" />

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="relative mx-auto w-full max-w-6xl rounded-4xl bg-gradient-to-r from-red-600 to-pink">

        {/* Decorative sparkle */}

        <HiOutlineSparkles className="absolute -right-2 -top-8 z-20 text-2xl text-pink-100/50 sm:-right-4 sm:-top-10 sm:text-3xl" />

        {/* =====================================================
            MAIN CARD
        ====================================================== */}

        <div className="relative  overflow-hidden rounded-[2rem] border border-white/20 bg-white/[0.08] backdrop-blur-xl sm:rounded-[2.5rem]">

          {/* Inner highlight */}

          <div className="pointer-events-none absolute inset-0 rounded-[2rem] border border-white/5 sm:rounded-[2.5rem]" />

          {/* =====================================================
              CONTENT
          ====================================================== */}

          <div className="relative flex flex-col lg:flex-row">

            {/* =================================================
                LEFT — MESSAGE
            ================================================== */}

            <div className="flex w-full flex-1 flex-col justify-center p-7 sm:p-10 lg:p-14 xl:p-16">

              {/* Heading */}

              <h1 className="max-w-2xl text-center text-2xl font-black leading-[1.2] tracking-tight text-white sm:text-3xl md:text-5xl lg:text-left lg:text-5xl xl:text-6xl">

                ❝ যখন আপনাকে দেখি,
                <br />

                তখন মনে হয়

                <span className="mt-2 block bg-gradient-to-r from-pink-100 via-pink-200 to-rose-100 bg-clip-text text-transparent">
                </span>

                <span className="mt-2 block">
                  জগতের সব সৌন্দর্য এক জায়গায় জমা হয়েছে ❝ ♥
                </span>

              </h1>

              {/* Divider */}

              <div className="mx-auto my-6 h-px w-20 bg-gradient-to-r from-transparent via-pink-200/70 to-transparent lg:mx-0" />

              {/* Paragraph */}

              <p className="mx-auto max-w-xl text-center text-base leading-7 text-white/70 sm:text-lg sm:leading-8 lg:mx-0 lg:text-left">
                “When I look at you, I do not just see someone I love. I see
                the person who made my world a little brighter, my days a
                little happier, and my heart feel a little more at home.”
              </p>

            </div>

            {/* =================================================
                RIGHT — IMAGE
            ================================================== */}

            <div className="w-full flex-1 p-0 sm:p-6 lg:p-7">

              <div className="relative h-[700px] w-full overflow-hidden rounded-none border-y sm:h-[450px] sm:rounded-[2rem] sm:border">

                {/* Image */}

                <Image
                  src={logo}
                  alt="Birthday memory"
                  fill
                  priority
                  className="object-cover"
                />

                {/* Top badge */}

                <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/20 px-4 py-2 backdrop-blur-md sm:left-5 sm:top-5">
                  <p className="text-xs font-medium text-white">
                    A beautiful memory ✨
                  </p>
                </div>

              </div>

            </div>

          </div>
        </div>
      </div>

      {/* =====================================================
          BUBU & DUDU SECTION
      ====================================================== */}

      <div className="relative mx-auto w-full max-w-6xl">

        <section className=" mt-10 border-none relative flex min-h-[350px] items-center justify-center overflow-hidden overflow-hidden rounded-[2rem]   bg-[radial-gradient(circle_at_70%_30%,#fecdd3_0%,#fb7185_18%,#f43f5e_38%,#e11d48_58%,#9f1239_78%,#4c0519_100%)] backdrop-blur-xl sm:rounded-[2.5rem] " >
          {/* Soft hearts */}

          <div className="absolute left-8 top-8 text-2xl opacity-40">
            💗
          </div>

          <div className="absolute right-8 top-12 text-xl opacity-40">
            💕
          </div>

          <div className="absolute bottom-8 left-16 text-xl opacity-40">
            💖
          </div>

          <div className="absolute bottom-8 right-16 text-2xl opacity-40">
            💗
          </div>

          {/* Bubu & Dudu */}

          <div className="animate-bounce">
            <Image
              src="/bubu-birthday.gif"
              alt="Bubu and Dudu birthday"
              width={500}
              height={316}
              className="w-56 sm:w-64 md:w-72"
            />
          </div>

        </section>

      </div>

    </section>
  );
};

export default HeorBanner;