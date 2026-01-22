// pages/projects/coffee-market.tsx
import Image from "next/image";
import Link from "next/link";

export default function CoffeeMarketProject() {
  return (
    <main className="max-w-5xl mx-auto p-6 space-y-8">
      {/* Title */}
      <h1 className="text-4xl font-bold text-primary">Polish Independent Coffee Market – ETL & BI Pipeline</h1>
      <p className="text-lg text-gray-700">
        End-to-end data pipeline that extracts coffee market data from the Allegro API, transforms it into a clean analytical model, stores it in MySQL, and visualizes insights in Power BI.
      </p>

      {/* Overview */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-secondary">Project Overview</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li>Collects data about independent coffee roasters in Poland, excluding mass-market brands.</li>
          <li>Focuses on product characteristics: brands, origin, roast level, caffeine content, packaging, and more.</li>
          <li>Creates a normalized relational schema for analytical purposes (snowflake-style).</li>
          <li>Provides clean datasets for BI and dashboards.</li>
        </ul>
      </section>

      {/* Tech Stack */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-secondary">Tech Stack</h2>
        <p className="text-gray-700">
          Python (Poetry, Pydantic, SQLAlchemy), MySQL, DBeaver, Power BI
        </p>
        <p className="text-gray-700">
          The pipeline uses Python for ETL: extracting JSON data from the Allegro REST API, validating and transforming it, and loading it into a relational database. Power BI visualizes the data for insights.
        </p>
      </section>

      {/* Architecture */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-secondary">Architecture</h2>
        <p className="text-gray-700">
          The project follows an end-to-end ETL workflow:
        </p>
        <ol className="list-decimal list-inside space-y-1 text-gray-700">
          <li><strong>Extract:</strong> Fetch product data from Allegro API and save raw JSON for traceability.</li>
          <li><strong>Transform:</strong> Normalize products, parameters, and parameter values into relational tables. Clean and validate data using Pydantic models.</li>
          <li><strong>Load:</strong> Insert processed data into MySQL tables using idempotent Python functions.</li>
          <li><strong>Analyze:</strong> Create BI dashboards in Power BI using the cleaned relational model. Key metrics include brand distribution, origin, roast levels, caffeine content, and package sizes.</li>
        </ol>
        {/* Optional: add architecture image */}
        <div className="mt-4">
          <Image
            src="/images/coffee-market-architecture.png"
            alt="Coffee Market ETL Architecture"
            width={800}
            height={400}
            className="rounded-lg shadow"
          />
        </div>
      </section>

      {/* Key Insights */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-secondary">Key Insights</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li>Top package sizes: 1000g, 250g, 500g, with rare sizes grouped as “Other”.</li>
          <li>Most products are Arabica, with light and medium roast dominating independent roasters.</li>
          <li>Brazil, Ethiopia, and Colombia are the most common origins for Polish independent coffees.</li>
          <li>Decaf products are a small fraction, showing niche market presence.</li>
        </ul>
      </section>

      {/* Screenshots */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-secondary">Screenshots</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Image
            src="/images/powerbi-dashboard1.png"
            alt="Power BI Dashboard Overview"
            width={600}
            height={400}
            className="rounded-lg shadow"
          />
          <Image
            src="/images/powerbi-dashboard2.png"
            alt="Power BI Charts"
            width={600}
            height={400}
            className="rounded-lg shadow"
          />
        </div>
      </section>

      {/* GitHub / Links */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-secondary">Code & Documentation</h2>
        <p className="text-gray-700">
          Full code, database schema, and Power BI files are available on GitHub:
          <Link href="https://github.com/yourusername/data-coffee-market" className="text-primary font-medium ml-1" target="_blank">
            github.com/yourusername/data-coffee-market
          </Link>
        </p>
      </section>

      {/* Conclusion */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-secondary">What I Learned</h2>
        <p className="text-gray-700">
          This project demonstrates end-to-end ETL design, data modeling, Python validation with Pydantic, relational schema design, and interactive dashboards in Power BI. I improved skills in API integration, data cleaning, idempotent database operations, and dashboard storytelling.
        </p>
      </section>
    </main>
  );
}
