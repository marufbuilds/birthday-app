 
import React from "react";
import BirthDay from "../herosection/birthdsycard/BirthDayCard";
import birthdays from "@/app/data.json";

const BirthDayList = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-linear-to-r from-pink-500 to-white vercel --prod00 to-white px-4 py-12 sm:px-6 lg:px-10">

      {/* Decorative gradient glow */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-pink-300/30 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-96 w-96 rounded-full bg-purple-300/30 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-blue-300/30 blur-3xl" />

      {/* Header */}
      <div className="relative z-10 mx-auto mb-10 max-w-3xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-pink-600">
          Special Memories
        </p>

        <h1 className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-4xl md:text-5xl">
          Beautiful Birthday Moments 🎂
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-600 sm:text-base">
          Every picture holds a beautiful memory. Celebrate these special
          moments and keep them close to your heart.
        </p>
      </div>

      {/* Birthday Cards */}
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {birthdays.map((birthday) => (
          <div
            key={birthday.id}
            className="group transition duration-300 hover:-translate-y-2"
          >
            <div className="overflow-hidden rounded-3xl bg-white/75 shadow-lg ring-1 ring-white/60 backdrop-blur-md transition duration-300 group-hover:shadow-2xl">
              <BirthDay birthday={birthday} />
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Text */}
      <div className="relative z-10 mx-auto mt-14 max-w-2xl text-center">
        <p className="text-sm font-medium text-purple-600 sm:text-base">
          ✨ 15 beautiful memories • One very special birthday ✨
        </p>
      </div>

    </section>
  );
};

export default BirthDayList;

