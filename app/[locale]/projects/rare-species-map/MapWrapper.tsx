"use client";

import dynamic from "next/dynamic";

const MapClient = dynamic(() => import("./MapClient"), {
  ssr: false,
  loading: () => (
    <div className="h-[780px] w-full flex items-center justify-center text-gray-500">
      Loading map…
    </div>
  ),
});

export default function MapWrapper() {
  return <MapClient />;
}
