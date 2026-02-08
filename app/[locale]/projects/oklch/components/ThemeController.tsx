import { Dispatch, SetStateAction } from "react";

interface ThemeControllerProps {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
}

export function ThemeController({ darkMode, setDarkMode }: ThemeControllerProps) {
  return (
    <div className="sticky top-4 z-50 mt-16">
      <div className="bg-white/80 border border-gray-200/50 rounded-2xl p-4 shadow-lg flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-base font-semibold text-gray-900">Theme</h2>
          <p className="text-gray-500 text-xs hidden md:block">
            Switching modes only affects <b>L</b> (lightness). Hue/Chroma stay constant.
          </p>
        </div>

        <div className="flex items-center gap-2 bg-gray-100/80 p-1 rounded-xl border border-gray-200/50">
          <button
            onClick={() => setDarkMode(false)}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
              !darkMode
                ? "bg-white text-gray-900 shadow-sm ring-1 ring-black/5"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
            Light
          </button>
          <button
            onClick={() => setDarkMode(true)}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
              darkMode
                ? "bg-gray-800 text-white shadow-sm ring-1 ring-black/5"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
            Dark
          </button>
        </div>
      </div>
    </div>
  );
}
