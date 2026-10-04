 
import React from "react";
import BirthDay from "../herosection/birthdsycard/BirthDayCard";
import birthdays from "@/app/data.json";

const BirthDayList = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-linear-to-r from-blue-500 to-amber-100 px-4 py-12 sm:px-6 lg:px-10">

      {/* Decorative gradient glow */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-pink-300/30 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-96 w-96 rounded-full bg-purple-300/30 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-blue-300/30 blur-3xl" />

      {/* Header */}
     
<div className="relative z-10 mx-auto mb-12 w-full max-w-4xl px-5 text-center sm:mb-16 sm:px-6">
  {/* Small label */}
  <div className="mb-5 flex items-center justify-center gap-3">
    
  </div>

  {/* Main heading */}
  <h1 className="mx-auto max-w-3xl text-3xl font-extrabold leading-[1.2] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
    <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
      কখনো মন খারাপ হলে,
    </span>

    <br />

    <span className="text-gray-800">
      ফিরে আসি এই স্মৃতিগুলোতে
    </span>

    <span className="ml-2 inline-block text-2xl sm:text-3xl md:text-4xl">
      🥺
    </span>
  </h1>

  {/* Emotional sub-heading */}
  <p className="mx-auto mt-5 max-w-2xl text-base font-medium leading-7 text-gray-600 sm:mt-6 sm:text-lg md:text-xl md:leading-8">
    তোমার স্মৃতিগুলোই মন ভালো করার
    <span className="text-pink-500"> ছোট্ট একটা কারণ </span>
    ❤️
  </p>

  {/* Quote */}
   
  {/* Tiny decorative element */}
  
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
       

    </section>
  );
};

export default BirthDayList;

