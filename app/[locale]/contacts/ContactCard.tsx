import Link from "next/link";
import * as motion from "motion/react-client";

interface ContactCardProps {
  title: string;
  description: string;
  href: string;
  label: string;
  isExternal?: boolean;
}

export default function ContactCard({
  title,
  description,
  href,
  label,
  isExternal = false,
}: ContactCardProps) {
  const linkProps = isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <motion.article
      className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
      initial={{ opacity: 0, y: 8, scale: 0.5 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ y: -6, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3, ease: [0.22, 0.8, 0.2, 1] }}
    >
      <Link href={href} className="flex flex-col" {...linkProps}>
        <h2 className="text-sm font-semibold uppercase tracking-wide text-primary">{title}</h2>
        <p className="mt-3 text-sm text-zinc-600">{description}</p>
        <p className="mt-5 inline-flex items-center text-sm font-medium text-primary transition hover:text-primary">
          {label}
          <span aria-hidden className="ml-1">
            ↗
          </span>
        </p>
      </Link>
    </motion.article>
  );
}
