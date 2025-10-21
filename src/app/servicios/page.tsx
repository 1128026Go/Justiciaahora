export const metadata = { title: "Servicios | JUSTICIA AHORA ABOGADOS", description: "Consultas, insolvencia, penal, civil y familiar." };

export default function ServiciosPage() {
  return (
    <div className="container py-10">
      <h1 className="text-2xl font-bold">Servicios Jurídicos</h1>
      {/* TODO: Intro EXACTA */}
      <p className="mt-2 text-slate-700">Asesoría integral con tarifas claras y enfoque práctico.</p>

      <section id="consultas" className="mt-8" aria-labelledby="consultas-title">
        <h2 id="consultas-title" className="text-xl font-semibold">Consultas</h2>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <article className="rounded-lg border p-5">
            <h3 className="font-semibold">Consulta Presencial</h3>
            <p className="text-sm text-slate-600">$120.000 COP</p>
            {/* TODO: Lista EXACTA */}
            <ul className="mt-2 list-disc pl-5 text-sm text-slate-700">
              <li>Duración estimada 45-60 min</li>
              <li>Diagnóstico inicial</li>
              <li>Plan de acción</li>
            </ul>
          </article>
          <article className="rounded-lg border p-5">
            <h3 className="font-semibold">Consulta Virtual</h3>
            <p className="text-sm text-slate-600">$40.000 COP</p>
            {/* TODO: Lista EXACTA */}
            <ul className="mt-2 list-disc pl-5 text-sm text-slate-700">
              <li>Duración estimada 30 min</li>
              <li>Video llamada o teléfono</li>
              <li>Recomendaciones iniciales</li>
            </ul>
          </article>
        </div>
      </section>

      <section id="insolvencia" className="mt-10" aria-labelledby="insolvencia-title">
        <h2 id="insolvencia-title" className="text-xl font-semibold">Insolvencia Persona Natural / Pequeño Comerciante</h2>
        <p className="mt-2 text-sm text-slate-700">Incluye:</p>
        {/* TODO: Lista EXACTA */}
        <ul className="mt-2 list-disc pl-5 text-sm text-slate-700">
          <li>Revisión de requisitos</li>
          <li>Preparación de solicitud</li>
          <li>Acompañamiento en audiencias</li>
        </ul>
      </section>

      <section id="insolvencia-empresarial" className="mt-10" aria-labelledby="insolvencia-empresarial-title">
        <h2 id="insolvencia-empresarial-title" className="text-xl font-semibold">Insolvencia Empresarial</h2>
        <ul className="mt-2 list-disc pl-5 text-sm text-slate-700">
          <li>Asesoría estratégica</li>
          <li>Negociación con acreedores</li>
          <li>Trámite ante entidades competentes</li>
        </ul>
      </section>

      <section id="penal" className="mt-10" aria-labelledby="penal-title">
        <h2 id="penal-title" className="text-xl font-semibold">Derecho Penal</h2>
        <ul className="mt-2 list-disc pl-5 text-sm text-slate-700">
          <li>Defensa y acusación particular</li>
          <li>Asistencia en audiencias</li>
          <li>Estrategia de litigio</li>
        </ul>
      </section>

      <section id="civil" className="mt-10" aria-labelledby="civil-title">
        <h2 id="civil-title" className="text-xl font-semibold">Derecho Civil</h2>
        <ul className="mt-2 list-disc pl-5 text-sm text-slate-700">
          <li>Procesos de pertenencia</li>
          <li>Cobros y ejecutivos</li>
          <li>Contratos y reclamaciones</li>
        </ul>
      </section>

      <section id="familia" className="mt-10" aria-labelledby="familia-title">
        <h2 id="familia-title" className="text-xl font-semibold">Derecho Familiar y Patrimonial</h2>
        {/* TODO: 6 ítems EXACTOS */}
        <ul className="mt-2 list-disc pl-5 text-sm text-slate-700">
          <li>Alimentos</li>
          <li>Custodia</li>
          <li>Divorcio</li>
          <li>Liquidación de sociedad conyugal</li>
          <li>Sucesiones</li>
          <li>Medidas de protección</li>
        </ul>
      </section>
    </div>
  );
}
