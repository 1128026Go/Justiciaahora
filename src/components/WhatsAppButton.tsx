import Link from "next/link";

type Props = {
  phone?: string; // E.g. "573154635245"
  message?: string;
  label?: string;
  floating?: boolean;
};

export default function WhatsAppButton({
  phone = "573154635245",
  message = "Hola, quisiera más información.",
  label = "WhatsApp",
  floating = false,
}: Props) {
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  const base = "inline-flex items-center gap-2 rounded-full bg-green-600 px-4 py-3 text-white text-sm font-medium shadow-lg hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700";
  const floatingCls = floating ? "fixed bottom-6 right-6 z-50" : "";
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener"
      aria-label="Abrir chat de WhatsApp"
      className={`${base} ${floatingCls}`}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
        <path d="M20.52 3.48a11.94 11.94 0 0 0-16.9 0c-3.27 3.27-3.74 8.27-1.15 12.03L2 22l6.5-1.66a11.93 11.93 0 0 0 12.02-1.14 11.94 11.94 0 0 0 0-16.9Zm-2.09 12.71c-.3.85-1.76 1.6-2.46 1.65-.63.05-1.43.07-2.31-.14-.53-.12-1.21-.39-2.09-.81-3.68-1.8-6.08-6.2-6.26-6.49-.18-.29-1.49-1.98-1.49-3.78 0-1.8.95-2.69 1.29-3.06.34-.37.74-.46.99-.46.25 0 .49 0 .71.01.23.01.53-.09.83.63.3.72 1.02 2.51 1.12 2.69.09.18.15.4.03.65-.12.26-.18.41-.36.63-.18.21-.38.48-.54.64-.18.18-.37.38-.16.75.2.37.86 1.4 1.85 2.27 1.27 1.12 2.34 1.47 2.71 1.65.37.18.59.16.81-.09.22-.25.94-1.1 1.19-1.48.25-.37.5-.31.83-.19.34.12 2.14 1.01 2.5 1.19.37.18.61.28.7.43.08.14.08.82-.22 1.67Z" />
      </svg>
      {label}
    </Link>
  );
}
