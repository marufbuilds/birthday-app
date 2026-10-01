 import Link from "next/link";
import { Playfair_Display, Poppins } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const Footer = () => {
  return (
    <footer
      className={`${poppins.className} relative overflow-hidden bg-[#160d24] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 mt-5`}
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-32 top-0 h-72 w-72 rounded-full bg-pink-500/20 blur-[100px]" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-purple-500/25 blur-[110px]" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-400/10 blur-[100px]" />

      {/* Stars */}
      <div className="pointer-events-none absolute left-[8%] top-16 text-xl text-pink-200/40">
        ✦
      </div>

      <div className="pointer-events-none absolute left-[20%] top-[35%] text-sm text-white/30">
        ✧
      </div>

      <div className="pointer-events-none absolute right-[12%] top-[25%] text-2xl text-pink-200/40">
        ✦
      </div>

      <div className="pointer-events-none absolute right-[25%] bottom-[20%] text-sm text-white/30">
        ✧
      </div>

      <div className="pointer-events-none absolute left-[35%] bottom-12 text-lg text-pink-200/30">
        ✦
      </div>

      {/* Main Content */}
      <div className="relative mx-auto w-full max-w-5xl">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.06] px-6 py-12 text-center shadow-2xl shadow-black/30 backdrop-blur-2xl sm:px-10 sm:py-16 md:px-16">

          {/* Inner Glow */}
          <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-72 -translate-x-1/2 rounded-full bg-pink-500/10 blur-3xl" />

          {/* Heart */}
          <div className="relative mx-auto mb-7 flex h-16 w-16 items-center justify-center rounded-full border border-pink-300/20 bg-pink-400/10 text-3xl shadow-lg shadow-pink-500/10">
            ❤️
          </div>

          {/* Small Heading */}
          <p className="relative text-xs font-semibold uppercase tracking-[0.35em] text-pink-300 sm:text-sm">
            A Little Ending
          </p>

          {/* Main Heading */}
          

          <h3
            className={`${playfair.className} relative mt-3 text-2xl font-medium italic text-pink-300 sm:text-3xl md:text-4xl`}
          >
             Have a Good Day, Moni ❤️
          </h3>

          {/* Divider */}
          <div className="mx-auto my-8 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-pink-300/30 sm:w-20" />
            <span className="text-sm text-pink-300">♡</span>
            <span className="h-px w-12 bg-pink-300/30 sm:w-20" />
          </div>

          {/* Message */}
          

          {/* Quote */}
           

          {/* Signature */}
          <div className="relative mt-9">
            <p className="text-sm font-medium tracking-wide text-purple-200/60">
              Made with love, just for you
            </p>

            <p
              className={`${playfair.className} mt-2 text-2xl font-semibold italic text-white sm:text-3xl`}
            >
              — Maruf ❤️
            </p>
          </div>

          {/* WhatsApp */}
          <div className="relative mt-9">
            <Link
              href="https://wa.me/8801728010748"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-bold text-white shadow-xl shadow-black/20 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/15 sm:px-8 sm:py-4 sm:text-base"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#25D366] text-base shadow-lg transition duration-300 group-hover:scale-110">
                💬
              </span>

              Talk to me on WhatsApp  

              <span className="transition duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>

          {/* Final Emojis */}
          <div className="relative mt-10 flex items-center justify-center gap-3 text-2xl">
            <span>🎂</span>
            <span className="text-pink-300">♡</span>
            <span>👑</span>
            <span className="text-pink-300">♡</span>
            <span>❤️</span>
          </div>

          {/* Bottom */}
          <div className="relative mt-8 border-t border-white/10 pt-6">
            <p className="text-xs font-medium tracking-wider text-purple-200/40 sm:text-sm">
              © 2026 • Made with love
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;