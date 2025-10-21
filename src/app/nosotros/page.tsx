export const metadata = {
  title: "Nosotros | JUSTICIA AHORA ABOGADOS",
  description: "Quiénes somos, visión, misión, valores y metodología de trabajo.",
};

export default function NosotrosPage() {
  return (
    <div className="container py-10">
      <h1 className="text-2xl font-bold">Nosotros</h1>

      <section className="mt-6" aria-labelledby="quienes">
        <h2 id="quienes" className="text-xl font-semibold">¿Quiénes somos?</h2>
        {/* TODO: Sustituir por texto EXACTO provisto */}
        <p className="mt-2 text-slate-700">Somos un despacho de abogados orientado a resultados, con atención clara y cercana.</p>
      </section>

      <section className="mt-8 grid gap-6 md:grid-cols-2" aria-labelledby="vision-mision">
        <h2 id="vision-mision" className="sr-only">Visión y Misión</h2>
        <div>
          <h3 className="font-semibold">Visión</h3>
          {/* TODO: Texto EXACTO */}
          <p className="mt-1 text-slate-700">Ser un referente en soluciones legales accesibles y efectivas.</p>
        </div>
        <div>
          <h3 className="font-semibold">Misión</h3>
          {/* TODO: Texto EXACTO */}
          <p className="mt-1 text-slate-700">Acompañar a nuestros clientes con estrategia, ética y tecnología.</p>
        </div>
      </section>

      <section className="mt-8" aria-labelledby="valores">
        <h2 id="valores" className="text-xl font-semibold">Valores</h2>
        <ul className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 text-sm text-slate-700">
          <li>✅ Ética profesional</li>
          <li>✅ Transparencia</li>
          <li>✅ Empatía</li>
          <li>✅ Confidencialidad</li>
          <li>✅ Excelencia</li>
          <li>✅ Innovación</li>
        </ul>
      </section>

      <section className="mt-8" aria-labelledby="diferencia">
        <h2 id="diferencia" className="text-xl font-semibold">¿Qué nos diferencia?</h2>
        <ul className="mt-3 space-y-2 text-slate-700">
          <li>✔ Comunicación clara y tiempos definidos</li>
          <li>✔ Presupuestos cerrados y por etapas</li>
          <li>✔ Uso de tecnología para seguimiento</li>
        </ul>
      </section>

      <section className="mt-8" aria-labelledby="metodologia">
        <h2 id="metodologia" className="text-xl font-semibold">Metodología</h2>
        <ol className="mt-3 space-y-2 text-slate-700">
          <li>1. Diagnóstico del caso</li>
          <li>2. Estrategia y presupuesto</li>
          <li>3. Ejecución y seguimiento</li>
          <li>4. Reportes periódicos</li>
          <li>5. Cierre y recomendaciones</li>
        </ol>
      </section>
    </div>
  );
}
