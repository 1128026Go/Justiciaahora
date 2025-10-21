"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Disclosure } from "@headlessui/react";

const nav = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/servicios#insolvencia", label: "Áreas Prácticas" },
  { href: "/servicios", label: "Servicios Jurídicos" },
  { href: "/blog", label: "Blog Jurídico" },
  { href: "/contacto", label: "Contacto" },
];

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-40 border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex items-center justify-between py-3">
        <Link href="/" className="font-semibold text-lg tracking-tight text-[color:var(--color-brand)]">
          <span aria-label="JUSTICIA AHORA ABOGADOS">JUSTICIA AHORA ABOGADOS</span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <nav className="flex gap-4 text-sm" aria-label="Principal">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-2 py-1 rounded hover:bg-gray-100 transition ${
                  pathname === item.href ? "text-[color:var(--color-accent)]" : "text-gray-800"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/servicios#consultas"
            className="rounded-md bg-[color:var(--color-accent)] px-3 py-2 text-white text-sm font-medium hover:opacity-90"
          >
            Agenda tu Consulta
          </Link>
        </div>

        <Disclosure>
          {({ open }) => (
            <div className="md:hidden">
              <Disclosure.Button aria-label="Abrir menú" className="rounded p-2 hover:bg-gray-100">
                {open ? (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12"/></svg>
                ) : (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16"/></svg>
                )}
              </Disclosure.Button>
              <Disclosure.Panel className="mt-2 rounded-md border bg-white p-2" as="nav" aria-label="Principal móvil">
                <ul className="flex flex-col">
                  {nav.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={`block rounded px-2 py-2 hover:bg-gray-50 ${pathname === item.href ? "text-[color:var(--color-accent)]" : "text-gray-800"}`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                  <li className="pt-2">
                    <Link href="/servicios#consultas" className="block rounded bg-[color:var(--color-accent)] px-2 py-2 text-center text-white">Agenda tu Consulta</Link>
                  </li>
                </ul>
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
      </div>
    </header>
  );
}
