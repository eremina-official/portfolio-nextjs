import Image from "next/image";

export function PremiumProductCard() {
  return (
    <div className="flex flex-col items-center justify-center w-full shrink-0 min-h-screen">
      <h2 className="text-3xl font-light text-white/90 tracking-widest uppercase text-center w-full mb-8">Premium Product Card</h2>
      <section className="relative w-full max-w-7xl mx-4 h-[80vh] flex items-center justify-center rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/projects/glassmorphism-css-experiments/background-midnight.png"
            alt="Midnight blue mountains"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>

        <div className="relative z-10 w-full max-w-sm mx-4">
          <div
            className="
              relative
              overflow-hidden
              rounded-3xl
              border border-white/20
              bg-white/5
              backdrop-blur-xl
              shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]
              p-6
              flex flex-col
              items-center
              group
            "
          >
            {/* Glossy overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

            {/* Product Image */}
            <div className="relative w-64 h-64 mb-6 z-10 transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-2">
               {/* Floating shadow */}
               <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-40 h-8 bg-black/40 blur-xl rounded-full transition-all duration-500 group-hover:scale-75 group-hover:opacity-60" />
               <Image
                src="/projects/glassmorphism-css-experiments/perfume.png"
                alt="Luxury Perfume"
                fill
                className="object-contain drop-shadow-2xl"
              />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center w-full">
              <h2 className="text-2xl font-light text-white mb-1 tracking-[0.2em] uppercase">Ethereal</h2>
              <p className="text-white/60 text-sm mb-6 font-light">eau de parfum</p>
              
              <div className="flex items-center justify-between mb-8 px-4">
                <div className="flex flex-col items-start">
                  <span className="text-white/40 text-xs uppercase tracking-wider">Price</span>
                  <span className="text-white text-xl font-medium">$125.00</span>
                </div>
                <div className="flex flex-col items-end">
                   <span className="text-white/40 text-xs uppercase tracking-wider">Volume</span>
                   <span className="text-white text-lg">50ml</span>
                </div>
              </div>

              <button className="
                w-full
                py-4
                rounded-xl
                bg-white/10
                border border-white/20
                text-white
                font-medium
                tracking-widest
                uppercase
                text-sm
                transition-all
                duration-300
                hover:bg-white/20
                hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]
              ">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
