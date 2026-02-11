import Link from "next/link";
import Image from "next/image";

export function GlassmorphismLoginFormRed() {
  return (
    <div className="flex flex-col items-center justify-center w-full px-4 shrink-0 min-h-screen">
      <h2 className="text-3xl font-light text-white/90 tracking-widest uppercase text-center w-full mb-8 pt-8">Glassmorphism Login</h2>
      <section className="relative w-full max-w-7xl h-[80vh] flex items-center justify-center rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/projects/glassmorphism-css-experiments/background-red-dark.png"
            alt="Smooth dark red gradient background"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/60 mix-blend-multiply" />
        </div>

        {/* Main Content Container */}
        <div className="relative isolate z-10 w-full max-w-md p-8">
          {/* Glassmorphism Card */}
          <div
            className="
              relative
              overflow-hidden
              rounded-2xl
              border-2 border-red-500/70
              bg-red-500/20
              p-8
              max-h-[700px]
              flex flex-col
              before:absolute before:inset-0 before:bg-red-500/5 before:pointer-events-none
            "
            style={{
              boxShadow: `
                0 4px 30px rgba(168, 58, 58, 0.5), 
                inset 0 0 0 1px rgba(168, 58, 58, 0.5), 
                inset 0 0 0 2px rgba(168, 58, 58, 0.5),
                inset 0 0 20px rgba(168, 58, 58, 0.5)
              `
            }}
          >
            <div
              className="
                absolute inset-0
                rounded-2xl
                backdrop-blur-md
              "
            />

            {/* Shine effect / Highlight */}
            <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-gradient-to-br from-red-500/10 via-transparent to-transparent rotate-45 pointer-events-none" />

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
                  id="email-form-red"
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
                  id="password-form-red"
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
          </div>
        </div>
      </section>
    </div>
  );
}
