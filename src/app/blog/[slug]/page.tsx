export function generateStaticParams() {
  // Cuando esté integrado Sanity, generar slugs desde el CMS.
  return [{ slug: "consulta-legal-eficaz" }, { slug: "plazos-reclamaciones-civiles" }];
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return (
    <article className="container py-10 prose">
      <h1>Artículo: {slug}</h1>
      <p className="text-sm text-slate-500">Publicado el 2025-01-10</p>
      <p>Contenido de ejemplo en formato de párrafos. Próximamente se conectará a Sanity CMS.</p>
      <h2>Subtítulo de ejemplo</h2>
      <p>Este es un segundo párrafo de demostración para la plantilla del artículo.</p>
    </article>
  );
}
