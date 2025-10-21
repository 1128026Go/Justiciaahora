import BlogCard from "@/components/BlogCard";
import type { Post } from "@/types/blog";

export const metadata = { title: "Blog | JUSTICIA AHORA ABOGADOS" };

const posts: Post[] = [
  { title: "Cómo preparar una consulta legal eficaz", slug: "consulta-legal-eficaz", date: "2025-01-10", excerpt: "Consejos prácticos para aprovechar tu primera cita con un abogado.", coverImage: "/next.svg" },
  { title: "Plazos en reclamaciones civiles", slug: "plazos-reclamaciones-civiles", date: "2025-02-02", excerpt: "Qué plazos debes vigilar y cómo no perder tus derechos.", coverImage: "/file.svg" },
  { title: "Diligencia debida en contratos", slug: "diligencia-contratos", date: "2025-02-22", excerpt: "Claves para blindar acuerdos comerciales.", coverImage: "/vercel.svg" },
];

export default function BlogListPage() {
  return (
    <div className="container py-10">
      <h1 className="text-2xl font-bold">Blog Jurídico</h1>
      <p className="mt-2 text-gray-700">Artículos y novedades legales explicadas en lenguaje claro.</p>
      <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((p) => (
          <BlogCard key={p.slug} title={p.title} slug={p.slug} excerpt={p.excerpt} date={p.date} image={p.coverImage} />
        ))}
      </div>
    </div>
  );
}
