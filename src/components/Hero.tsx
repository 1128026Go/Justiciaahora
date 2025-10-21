import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white border-b">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-gray-900">
          Defensa legal clara y cercana
        </h1>
        <p className="mt-4 max-w-2xl text-gray-700">
          Abogados especializados comprometidos con tus derechos. Consultas rápidas, atención profesional y resultados.
        </p>
        <div className="mt-8 flex gap-3">
          <Link href="/contacto" className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
            Solicitar consulta
          </Link>
          <Link href="/servicios" className="rounded-md border px-4 py-2 hover:bg-gray-50">
            Ver servicios
          </Link>
        </div>
      </div>
    </section>
  );
}

