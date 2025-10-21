"use client";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

const cards = [
  { id: "insolvencia", title: "Insolvencia Persona Natural", href: "/servicios#insolvencia" },
  { id: "familia", title: "Derecho de Familia", href: "/servicios#familia" },
  { id: "penal", title: "Derecho Penal", href: "/servicios#penal" },
  { id: "civil", title: "Derecho Civil", href: "/servicios#civil" },
];

export default function HomePage() {
  const reduce = useReducedMotion();
  return (
    <>
      <section className="border-b bg-gradient-to-b from-blue-50 to-white">
        <div className="container py-16 sm:py-24">
          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 10 }}
            whileInView={reduce ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-5xl font-bold tracking-tight text-[color:var(--color-brand)]"
          >
            JUSTICIA AHORA ABOGADOS
          </motion.h1>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 10 }}
            whileInView={reduce ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 max-w-3xl text-lg text-slate-700"
          >
            {/* TODO: Sustituir por el subtítulo EXACTO provisto (insolvencia… estabilidad financiera…). */}
            Defensa legal clara y cercana para proteger tu patrimonio y tu estabilidad financiera.
          </motion.p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/servicios#consultas" className="rounded-md bg-[color:var(--color-accent)] px-4 py-2 text-white hover:opacity-90">
              Consulta Presencial - $120.000 COP
            </Link>
            <Link href="/servicios#consultas" className="rounded-md border px-4 py-2 hover:bg-gray-50">
              Consulta Virtual - $40.000 COP
            </Link>
          </div>
        </div>
      </section>

      <section className="container py-12">
        <h2 className="text-xl font-semibold tracking-tight">ÁREAS PRÁCTICAS</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => (
            <motion.article
              key={c.id}
              initial={reduce ? false : { opacity: 0, y: 12 }}
              whileInView={reduce ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-lg border p-5 shadow-sm hover:shadow-md transition-shadow bg-white"
            >
              <h3 className="font-semibold text-[color:var(--color-brand)]">{c.title}</h3>
              <p className="mt-1 text-sm text-slate-600">Conoce alcance, requisitos y tiempos.</p>
              <div className="mt-3">
                <Link href={c.href} className="text-[color:var(--color-accent)] hover:underline">Ver detalle</Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </>
  );
}

