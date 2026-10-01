 import Image from "next/image";

export const BubuDuduCard = () => {
  return (
    <section className="flex min-h-screen items-center justify-center bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 px-4 py-10 sm:px-6 lg:px-8">
      <div className="w-full max-w-3xl overflow-hidden rounded-[2rem] border border-white/70 bg-white/75 p-5 shadow-2xl backdrop-blur-xl sm:p-8 md:p-10">

        {/* Heading */}
        <div className="mb-8 text-center">
            

          

          <p className="mx-auto mt-3 max-w-xl text-sm font-medium leading-relaxed text-gray-600 sm:text-base md:text-lg">
            A very serious conversation about Birthday Cake...
          </p>
        </div>

        {/* Conversation */}
        <div className="space-y-4">

          {/* Maruf */}
          <div className="flex justify-start">
            <div className="max-w-[85%] rounded-3xl rounded-bl-md bg-pink-100 px-5 py-4 shadow-sm sm:max-w-[70%]">
              <p className="text-sm leading-relaxed text-pink-900 sm:text-base">
                <strong className="font-extrabold text-pink-700">
                  Maruf:
                </strong>{" "}
                “Are you hungry?”
              </p>
            </div>
          </div>

          {/* Rubat */}
          <div className="flex justify-end">
            <div className="max-w-[85%] rounded-3xl rounded-br-md bg-blue-100 px-5 py-4 shadow-sm sm:max-w-[70%]">
              <p className="text-sm leading-relaxed text-blue-900 sm:text-base">
                <strong className="font-extrabold text-blue-700">
                  Rubat:
                </strong>{" "}
                “No.”
              </p>
            </div>
          </div>

          {/* Maruf */}
          <div className="flex justify-start">
            <div className="max-w-[85%] rounded-3xl rounded-bl-md bg-pink-100 px-5 py-4 shadow-sm sm:max-w-[70%]">
              <p className="text-sm leading-relaxed text-pink-900 sm:text-base">
                <strong className="font-extrabold text-pink-700">
                  Maruf:
                </strong>{" "}
                “Sure?”
              </p>
            </div>
          </div>

          {/* Rubat */}
          <div className="flex justify-end">
            <div className="max-w-[85%] rounded-3xl rounded-br-md bg-blue-100 px-5 py-4 shadow-sm sm:max-w-[70%]">
              <p className="text-sm leading-relaxed text-blue-900 sm:text-base">
                <strong className="font-extrabold text-blue-700">
                  Rubat:
                </strong>{" "}
                “...Maybe.” 😂
              </p>
            </div>
          </div>

        </div>

        {/* Birthday Message */}
        <div className="my-8 flex justify-center">
          <div className="rounded-2xl    px-6  text-center shadow-lg">
            <p className="text-base font-extrabold   sm:text-lg">
                “Enjoy Your Birthday Cake!” 🎂❤️
            </p>
          </div>
        </div>

        {/* GIFs */}
      {/* GIFs */}
<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-6">

  {/* Dudu */}
  <div className="group flex flex-col items-center">
    <div className="w-full max-w-md overflow-hidden rounded-3xl bg-pink-50 p-2 shadow-lg transition duration-300 group-hover:-translate-y-1 group-hover:shadow-xl sm:max-w-none sm:p-3">
      <Image
        src="/gifs/dudu.gif"
        width={500}
        height={500}
        alt="Dudu"
        className="h-auto w-full rounded-2xl object-cover"
      />
    </div>

    <p className="mt-3 text-sm font-extrabold text-pink-700 sm:text-base">
       rubat😁
    </p>
  </div>

  {/* Babu */}
  <div className="group flex flex-col items-center">
    <div className="w-full max-w-md overflow-hidden rounded-3xl bg-blue-50 p-2 shadow-lg transition duration-300 group-hover:-translate-y-1 group-hover:shadow-xl sm:max-w-none sm:p-3">
      <Image
        src="/gifs/babu.gif"
        width={500}
        height={500}
        alt="Babu"
        className="h-auto w-full rounded-2xl object-cover"
      />
    </div>

    <p className="mt-3 text-sm font-extrabold text-blue-700 sm:text-base">
      Hook?😁
    </p>
  </div>

</div>

        {/* Bottom Message */}
        <div className="mt-8 text-center">
          <p className="text-sm font-medium text-gray-500 sm:text-base">
            One cake, two people, and absolutely no sharing. 😂🎂
          </p>
        </div>

      </div>
    </section>
  );
};

export default BubuDuduCard;