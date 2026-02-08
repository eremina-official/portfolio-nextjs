import Link from "next/link";
import Image from "next/image";

export function GlassmorphismLoginForm() {
  return (
    <div className="flex flex-col items-center justify-center w-full shrink-0 min-h-screen">
      <h2 className="text-3xl font-light text-white/90 tracking-widest uppercase text-center w-full mb-8 pt-8">Glassmorphism Login</h2>
      <section className="relative w-full max-w-7xl mx-4 h-[80vh] flex items-center justify-center rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/projects/glassmorphism-css-experiments/background-midnight-dark.png"
            alt="Frozen mountain lake at sunset"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>

        {/* Back Link */}
        <div className="absolute top-6 left-6 z-20">
            {/* Glass rim (thickness illusion) */}
            <div
              className="
                pointer-events-none absolute inset-0 rounded-3xl
                ring-1 ring-white/50
              "
            ></div>
            <div
              className="
                pointer-events-none absolute inset-[1px] rounded-[22px]
                ring-3 ring-white/30
              "
            ></div>
            <div
              className="
                pointer-events-none absolute inset-[2px] rounded-[22px]
                ring-2 ring-white/20
              "
            ></div>
            <div
              className="
                pointer-events-none absolute inset-[3px] rounded-[22px]
                ring-1 ring-white/10
              "
            ></div>

          <Link
            href="/projects"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-white transition-all duration-300 hover:scale-105 group"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="w-4 h-4 group-hover:-translate-x-1 transition-transform"
            >
              <path d="m12 19-7-7 7-7"/>
              <path d="M19 12H5"/>
            </svg>
            <span>Back to Projects</span>
          </Link>
        </div>

        <div className="relative z-10 w-full max-w-md p-8 mx-4">
          <div
            className="
              relative max-h-[700px] rounded-3xl max-w-md p-6
              bg-white/10
              backdrop-blur-md
              text-white
              shadow-[0_8px_30px_rgba(0,0,0,0.25)]
            "
          >
            {/* Glass rim (thickness illusion) */}
            <div
              className="
                pointer-events-none absolute inset-0 rounded-3xl
                ring-1 ring-white/50
              "
            ></div>
            <div
              className="
                pointer-events-none absolute inset-[1px] rounded-[22px]
                ring-3 ring-white/30
              "
            ></div>
            <div
              className="
                pointer-events-none absolute inset-[2px] rounded-[22px]
                ring-2 ring-white/20
              "
            ></div>
            <div
              className="
                pointer-events-none absolute inset-[3px] rounded-[22px]
                ring-1 ring-white/10
              "
            ></div>

              {/* Form Header */}
              <div className="relative z-10 mb-8 text-center text-white">
                <h1 className="text-3xl font-light tracking-wide mb-2">Welcome Back</h1>
                <p className="text-white/70 font-light">Enter your details to access your account</p>
              </div>

              {/* Login Form */}
              <form className="relative z-10 flex flex-col gap-5">
                <div className="group">
                  <label 
                    htmlFor="email" 
                    className="block text-sm font-medium text-white/80 mb-2 ml-1 transition-colors group-focus-within:text-white"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="
                      w-full
                      px-4 py-3
                      rounded-lg
                      bg-white/5
                      border border-white/10
                      text-white
                      placeholder-white/40
                      outline-none
                      transition-all
                      duration-300
                      focus:bg-white/10
                      focus:border-white/30
                      focus:ring-2 focus:ring-white/10
                      shadow-[inset_0_2px_4px_0_rgba(0,0,0,0.05)]
                      backdrop-blur-sm
                    "
                    placeholder="name@example.com"
                  />
                </div>

                <div className="group">
                  <label 
                    htmlFor="password" 
                    className="block text-sm font-medium text-white/80 mb-2 ml-1 transition-colors group-focus-within:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="
                      w-full
                      px-4 py-3
                      rounded-lg
                      bg-white/5
                      border border-white/10
                      text-white
                      placeholder-white/40
                      outline-none
                      transition-all
                      duration-300
                      focus:bg-white/10
                      focus:border-white/30
                      focus:ring-2 focus:ring-white/10
                      shadow-[inset_0_2px_4px_0_rgba(0,0,0,0.05)]
                      backdrop-blur-sm
                    "
                    placeholder="••••••••"
                  />
                </div>

                <div className="flex items-center justify-between text-sm text-white/70 mt-2">
                  <label className="flex items-center gap-2 cursor-pointer hover:text-white transition-colors">
                    <input type="checkbox" className="rounded bg-white/10 border-white/20 text-white focus:ring-offset-0 focus:ring-white/20" />
                    <span>Remember me</span>
                  </label>
                  <a href="#" className="hover:text-white hover:underline transition-colors">Forgot password?</a>
                </div>

                <button
                  type="button" // Prevent submission for this demo
                  className="
                    mt-6
                    w-full
                    py-3.5
                    rounded-lg
                    bg-white/20
                    hover:bg-white/30
                    text-white
                    font-medium
                    tracking-wide
                    border border-white/20
                    shadow-lg
                    transition-all
                    duration-300
                    hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]
                    hover:scale-[1.02]
                    active:scale-[0.98]
                  "
                >
                  Sign In
                </button>
              </form>

              {/* Footer */}
              <div className="relative z-10 mt-8 text-center text-sm text-white/60">
                <p>
                  Don't have an account?{" "}
                  <a href="#" className="text-white hover:underline font-medium ml-1">
                    Sign up
                  </a>
                </p>
              </div>

            {/* Inner refraction */}
            <div
              className="
                pointer-events-none absolute inset-0 rounded-3xl
                bg-gradient-to-b
                from-white/25 via-white/10 to-transparent
              "
            ></div>
          </div>
        </div>
      </section>
    </div>
  );
}
