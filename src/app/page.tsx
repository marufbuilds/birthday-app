 import React from 'react';
// import MemoryPage from './components/memories/page';
import HeroSection from './components/herosection/hero';
import Navbar from './components/navber/navber';
import BirthDayList from './components/birthdayList/BirthDayList';
import Card, { HeorBanner } from './components/herosection/heorBanner';
import BabuDudu from './components/herosection/babu01';
import Maruf from './components/herosection/maruf';
import Salam from './components/herosection/Salam';
import YellowRoseSection from './components/yellowROSE/YellowRoseSection';
import BirthdayCakeSection, { BubuDuduCard } from './components/BirthdayCakeSection/BirthdayCakeSection';
import { BirthdayDriveCard } from './components/herosection/drive';
import OldMemoriesSection from './components/herosection/oldmemory';
import BirthdayWishCard from './components/herosection/wishCard';
//  import MemoryPage from './components/memories/page';
 
 const page = () => {
  return (
    <div>
      
       {/* <MemoryPage /> */}
       <Salam />
       <HeroSection />
      <HeorBanner />
      <BabuDudu />
      <OldMemoriesSection />
      <BirthdayDriveCard />
      <Maruf />
      {/* <BirthdayCakeSection /> */}
       <BubuDuduCard />
       <div className="mb-3 w-full rounded-3xl bg-linear-to-r from-amber-500 to-white   border border-white/80 bg-white/70 px-5  py-6 shadow-xl backdrop-blur-xl sm:px-5 sm:py-8">
  <h1 className="text-center text-2xl font-black leading-tight tracking-tight text-purple-900 sm:text-3xl md:text-4xl lg:text-5xl">
    I know you’re tired of scrolling…
    <br />
    <span className="text-purple-950">
      But wait, what about your birthday gift?
    </span>{" "}
    <span className="whitespace-nowrap">👀🎁❤️</span>
  </h1>

  <p className="mt-4 text-center text-sm font-bold tracking-wide text-purple-600 sm:text-base">
    Something special is waiting for you… ✨
  </p>
</div>
      <YellowRoseSection />
      <BirthdayWishCard />
       {/* <BirthDayList /> */}
    </div>
  );
 };
 
 export default page;