import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t mt-12 bg-white">
      <div className="container py-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="font-semibold text-[color:var(--color-brand)]">JUSTICIA AHORA ABOGADOS</div>
          <p className="mt-2 text-sm text-slate-700">Soluciones legales eficientes con tecnología y profesionalismo</p>
        </div>
        <nav aria-label="Enlaces rápidos">
          <div className="font-medium">Enlaces</div>
          <ul className="mt-2 space-y-1 text-sm">
            <li><Link href="/">Inicio</Link></li>
            <li><Link href="/nosotros">Nosotros</Link></li>
            <li><Link href="/servicios">Servicios</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/contacto">Contacto</Link></li>
          </ul>
        </nav>
        <div>
          <div className="font-medium">Contacto</div>
          <ul className="mt-2 space-y-1 text-sm">
            <li><a href="https://wa.me/573154635245" target="_blank" rel="noopener">WhatsApp: 3154635245</a></li>
            <li><a href="mailto:justiciaahoraabogados@gmail.com">justiciaahoraabogados@gmail.com</a></li>
            <li>Bogotá, Colombia</li>
          </ul>
        </div>
        <nav aria-label="Legal">
          <div className="font-medium">Legal</div>
          <ul className="mt-2 space-y-1 text-sm">
            <li><Link href="/privacidad">Política de privacidad</Link></li>
            <li><Link href="/terminos">Términos y condiciones</Link></li>
            <li><Link href="/proteccion-datos">Protección de datos</Link></li>
          </ul>
        </nav>
      </div>
      <div className="border-t">
        <div className="container py-4 text-center text-xs text-slate-600">
          © 2025 JUSTICIA AHORA ABOGADOS. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
