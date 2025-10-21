import Link from "next/link";

type Props = {
  title: string;
  excerpt?: string;
  slug: string;
  date?: string;
  image?: string;
};

export default function BlogCard({ title, excerpt, slug, date, image }: Props) {
  return (
    <article className="overflow-hidden rounded-lg border bg-white shadow-sm hover:shadow transition-shadow">
      {image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={image} alt="" className="h-40 w-full object-cover" />
      ) : null}
      <div className="p-4">
        {date ? <div className="text-xs text-slate-500">{date}</div> : null}
        <h3 className="text-lg font-semibold">
          <Link href={`/blog/${slug}`} className="hover:underline">
            {title}
          </Link>
        </h3>
        {excerpt ? <p className="mt-2 text-gray-700 text-sm">{excerpt}</p> : null}
        <div className="mt-3">
          <Link href={`/blog/${slug}`} className="text-[color:var(--color-accent)] text-sm hover:underline">
            Leer más
          </Link>
        </div>
      </div>
    </article>
  );
}
