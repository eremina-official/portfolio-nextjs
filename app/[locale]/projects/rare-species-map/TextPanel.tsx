export default function TextPanel() {
  return (
    <div className="w-full lg:w-96 bg-white border-t-2 lg:border-t-0 lg:border-l-2 border-gray-200 overflow-y-auto">
      <div className="p-6 space-y-5">
        {/* Key Takeaway */}
        <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded-lg">
          <h3 className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-2">
            Key Takeaway
          </h3>
          <p className="text-sm text-gray-800 leading-relaxed">
            Gray Wolf populations in Europe are <strong>recovering and expanding</strong>. Data
            shows significantly more sightings in 2015–2025 compared to 2000–2015, indicating
            successful conservation efforts.
          </p>
        </div>

        {/* What the Data Shows */}
        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
            <span className="text-emerald-500">📊</span>
            What the Data Shows
          </h2>
          <ul className="space-y-2.5 text-sm text-gray-700">
            <li className="flex gap-2">
              <span className="text-emerald-500 font-bold mt-0.5">•</span>
              <span>
                <strong>2000–2015:</strong> Wolf sightings were sparse and fragmented, mostly in
                Eastern Europe and protected areas.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-emerald-500 font-bold mt-0.5">•</span>
              <span>
                <strong>2015–2025:</strong> Sightings are more widespread and frequent, showing
                wolves returning to Central and Western Europe.
              </span>
            </li>
          </ul>
        </div>

        {/* Why It Matters */}
        <div className="border-t border-gray-200 pt-5">
          <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
            <span className="text-emerald-500">🌿</span>
            Why It Matters
          </h2>
          <ul className="space-y-2.5 text-sm text-gray-700">
            <li className="flex gap-2">
              <span className="text-emerald-500 font-bold mt-0.5">•</span>
              <span>
                <strong>Conservation success:</strong> Recovery confirms that protection laws and
                habitat management are working.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-emerald-500 font-bold mt-0.5">•</span>
              <span>
                <strong>Ecosystem health:</strong> As top predators, wolves control deer and boar
                populations, preventing overgrazing and supporting plant diversity.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-emerald-500 font-bold mt-0.5">•</span>
              <span>
                <strong>Biodiversity indicator:</strong> Wolf recovery signals improving habitat
                quality and wildlife corridors across Europe.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-emerald-500 font-bold mt-0.5">•</span>
              <span>
                <strong>Broader impact:</strong> Success with wolves informs conservation strategies
                for other large carnivores like bears and lynx.
              </span>
            </li>
          </ul>
        </div>

        {/* Important Notes */}
        <div className="border-t border-gray-200 pt-5">
          <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
            <span className="text-amber-500">⚠️</span>
            Important Notes
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            This data reflects <em>recorded sightings</em>, which can increase due to better
            monitoring and citizen science participation. However, the trend matches independent
            ecological surveys confirming actual population growth and range expansion.
          </p>
        </div>

        {/* Data Source & Context */}
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <p className="text-xs text-gray-600 mb-2">
            <strong>Data Source:</strong> Global Biodiversity Information Facility (GBIF) •{" "}
            <em>Canis lupus</em> occurrence records
          </p>
          <div className="border-t border-gray-200 pt-2">
            <p className="text-xs text-gray-500">
              Prepared for the{" "}
              <a
                href="https://30daymapchallenge.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-emerald-600 hover:text-emerald-500 hover:underline transition-colors"
              >
                #30DayMapChallenge
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
