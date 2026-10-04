 import Image from "next/image";

const OldMemoriesSection = () => {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20 bg-linear-to-r from-purple-400 to-purple-200  mt-5 rounded-2xl">
      
      {/* Heading */}
      <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
        <h1 className="text-3xl font-black tracking-tight text-purple-950 sm:text-4xl md:text-5xl">
          Our Old Memories ❤️
        </h1>

        {/* Bengali Lines */}
        <div className="mt-6">
          <p className="text-xl font-bold leading-relaxed text-pink-600 sm:text-2xl md:text-3xl">
            পড়েছে~
            <br />
            যেই নজর একবার তোর দিকে
            <br />
            দিয়েছি~
            <br />
            যা ছিল তোকে সবটা লিখে
          </p>
        </div>

        {/* English Subtitle */}
        <h2 className="mt-6 text-xl font-extrabold text-purple-800 sm:text-2xl md:text-3xl">
          Some Moments I’ll Always Remember
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm font-medium leading-relaxed text-purple-700 sm:text-base md:text-lg">
          Every picture holds a little memory, and every memory reminds me of
          the beautiful moments we shared together. 🥹❤️
        </p>
      </div>

      {/* Image 1 — Full Width */}
      <div className="mb-6 overflow-hidden rounded-[2rem] border border-white/80 bg-white/70 p-2 shadow-xl shadow-pink-200/30 backdrop-blur-md sm:mb-8 sm:p-3">
        <div className="overflow-hidden rounded-[1.5rem]">
          <Image
            src="/images/memory-1.jpg"
            width={1200}
            height={800}
            alt="Our old memory"
            className="h-auto w-full object-cover transition duration-700 hover:scale-[1.02]"
          />
        </div>
      </div>

      {/* Image 2 — Full Width */}
      <div className="mb-6 overflow-hidden rounded-[2rem] border border-white/80 bg-white/70 p-2 shadow-xl shadow-purple-200/30 backdrop-blur-md sm:mb-8 sm:p-3">
        <div className="overflow-hidden rounded-[1.5rem]">
          <Image
            src="/images/memory-8.jpg"
            width={1200}
            height={800}
            alt="Our old memory"
            className="h-auto w-full object-cover transition duration-700 hover:scale-[1.02]"
          />
        </div>
      </div>

      {/* Image 3 + Image 4 — 2 Columns */}
      <div className="mb-6 grid grid-cols-2 gap-3 sm:mb-8 sm:gap-5">

        {/* Image 3 */}
        <div className="group overflow-hidden rounded-[1.5rem] border border-white/80 bg-white/70 p-2 shadow-lg shadow-pink-200/30 backdrop-blur-md sm:rounded-[2rem] sm:p-3">
          <div className="overflow-hidden rounded-xl sm:rounded-2xl">
            <Image
              src="/images/memory-3.jpg"
              width={700}
              height={700}
              alt="Our old memory"
              className="aspect-square w-full object-cover transition duration-700 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Image 4 */}
        <div className="group overflow-hidden rounded-[1.5rem] border border-white/80 bg-white/70 p-2 shadow-lg shadow-purple-200/30 backdrop-blur-md sm:rounded-[2rem] sm:p-3">
          <div className="overflow-hidden rounded-xl sm:rounded-2xl">
            <Image
              src="/images/memory-4.jpg"
              width={700}
              height={700}
              alt="Our old memory"
              className="aspect-square w-full object-cover transition duration-700 group-hover:scale-105"
            />
          </div>
        </div>

      </div>

      {/* Image 6 + Image 7 — 2 Columns */}
      <div className="mb-6 grid grid-cols-2 gap-3 sm:mb-8 sm:gap-5">

        {/* Image 6 */}
        <div className="group overflow-hidden rounded-[1.5rem] border border-white/80 bg-white/70 p-2 shadow-lg shadow-pink-200/30 backdrop-blur-md sm:rounded-[2rem] sm:p-3">
          <div className="overflow-hidden rounded-xl sm:rounded-2xl">
            <Image
              src="/images/memory-6.jpg"
              width={700}
              height={700}
              alt="Our special memory"
              className="aspect-square w-full object-cover transition duration-700 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Image 7 */}
        <div className="group overflow-hidden rounded-[1.5rem] border border-white/80 bg-white/70 p-2 shadow-lg shadow-purple-200/30 backdrop-blur-md sm:rounded-[2rem] sm:p-3">
          <div className="overflow-hidden rounded-xl sm:rounded-2xl">
            <Image
              src="/images/memory-7.jpg"
              width={700}
              height={700}
              alt="Our special memory"
              className="aspect-square w-full object-cover transition duration-700 group-hover:scale-105"
            />
          </div>
        </div>

      </div>

      {/* Image 5 — Full Width */}
      <div className="overflow-hidden rounded-[2rem] border border-white/80 bg-white/70 p-2 shadow-xl shadow-rose-200/30 backdrop-blur-md sm:p-3">
        <div className="overflow-hidden rounded-[1.5rem]">
          <Image
            src="/images/memory-5.jpg"
            width={1200}
            height={800}
            alt="Our special old memory"
            className="h-auto w-full object-cover transition duration-700 hover:scale-[1.02]"
          />
        </div>
      </div>

    </section>
  );
};

export default OldMemoriesSection;