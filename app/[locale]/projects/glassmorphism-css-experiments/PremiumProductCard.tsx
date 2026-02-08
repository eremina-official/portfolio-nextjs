import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Ethereal",
    type: "eau de parfum",
    price: "$125.00",
    volume: "50ml",
    image: "/projects/glassmorphism-css-experiments/perfume.png",
  },
  {
    id: 2,
    name: "Midnight",
    type: "eau de toilette",
    price: "$95.00",
    volume: "75ml",
    image: "/projects/glassmorphism-css-experiments/perfume.png",
  },
  {
    id: 3,
    name: "Serenity",
    type: "parfum intense",
    price: "$180.00",
    volume: "100ml",
    image: "/projects/glassmorphism-css-experiments/perfume.png",
  }
];

export function PremiumProductCard() {
  return (
    <div className="flex flex-col items-center justify-center w-full shrink-0 min-h-screen py-12">
      <h2 className="text-3xl font-light text-white/90 tracking-widest uppercase text-center w-full mb-12">Premium Collection</h2>
      <section className="relative w-full max-w-7xl mx-4 min-h-[80vh] flex flex-col xl:flex-row items-center justify-center rounded-3xl overflow-hidden border border-white/20 shadow-2xl p-8 gap-16">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/projects/glassmorphism-css-experiments/background-midnight.png"
            alt="Luxury background"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>

        {/* Product List */}
        {products.map((product) => (
          <div key={product.id} className="relative isolate z-10 w-full max-w-xs">
            <div
              className="
                relative
                overflow-hidden
                rounded-3xl
                border border-black/20
                bg-black/30
                backdrop-blur-md
                shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]
                p-6
                flex flex-col
                items-center
                group
                transition-all duration-300 hover:bg-black/50
              "
            >
              {/* Glossy overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent pointer-events-none" />

              {/* Black glass rim (thickness illusion) */}
              <div
                className="
                  pointer-events-none absolute inset-0 rounded-3xl
                  ring-5 ring-white/50
                "
              ></div>

              <div
                className="
                  pointer-events-none absolute inset-[1px] rounded-[22px]
                  ring-3 ring-neutral-400/50
                "
              ></div>

              <div
                className="
                  pointer-events-none absolute inset-[2px] rounded-[22px]
                  ring-2 ring-neutral-400/30
                "
              ></div>

              <div
                className="
                  pointer-events-none absolute inset-[3px] rounded-[22px]
                  ring-1 ring-neutral-400/20
                "
              ></div>


              {/* Product Image */}
              <div className="relative w-64 h-64 mb-6 z-10 transition-transform duration-500 group-hover:scale-105">
                 {/* Floating shadow */}
                 <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-40 h-8 bg-black/40 blur-xl rounded-full transition-all duration-500 group-hover:scale-75 group-hover:opacity-60" />
                 <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain drop-shadow-2xl rounded-2xl"
                />
              </div>

              {/* Content */}
              <div className="relative z-10 text-center w-full">
                <h2 className="text-2xl font-light text-white mb-1 tracking-[0.2em] uppercase">{product.name}</h2>
                <p className="text-white/60 text-sm mb-6 font-light">{product.type}</p>
                
                <div className="flex items-center justify-between mb-8 px-4">
                  <div className="flex flex-col items-start">
                    <span className="text-white/40 text-xs uppercase tracking-wider">Price</span>
                    <span className="text-white text-xl font-medium">{product.price}</span>
                  </div>
                  <div className="flex flex-col items-end">
                     <span className="text-white/40 text-xs uppercase tracking-wider">Volume</span>
                     <span className="text-white text-lg">{product.volume}</span>
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
        ))}
      </section>
    </div>
  );
}
