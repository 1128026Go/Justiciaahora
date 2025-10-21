import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contacto | JUSTICIA AHORA ABOGADOS",
  description: "Contáctanos: consultas presenciales y virtuales. Bogotá, Colombia.",
};

export default function ContactoPage() {
  return (
    <div className="container py-10">
      <h1 className="text-2xl font-bold">Contacto</h1>
      {/* TODO: Sustituir por texto introductorio EXACTO provisto */}
      <p className="mt-2 text-gray-700">Cuéntanos tu caso y te responderemos muy pronto.</p>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <section aria-labelledby="form-contacto">
          <h2 id="form-contacto" className="sr-only">Formulario de contacto</h2>
          <ContactForm />
        </section>

        <aside aria-labelledby="info-contacto" className="space-y-4">
          <h2 id="info-contacto" className="text-lg font-semibold">Información de contacto</h2>
          <ul className="space-y-2 text-sm text-slate-700">
            <li className="flex items-center gap-2">
              <span aria-hidden>📱</span>
              <a href="https://wa.me/573154635245" target="_blank" rel="noopener" className="text-[color:var(--color-accent)] hover:underline">WhatsApp: 3154635245</a>
            </li>
            <li className="flex items-center gap-2">
              <span aria-hidden>✉️</span>
              <a href="mailto:justiciaahoraabogados@gmail.com" className="text-[color:var(--color-accent)] hover:underline">justiciaahoraabogados@gmail.com</a>
            </li>
            <li className="flex items-center gap-2">
              <span aria-hidden>📍</span>
              <span>Bogotá, Colombia</span>
            </li>
          </ul>

          <div className="mt-4 overflow-hidden rounded-lg border">
            <iframe
              title="Mapa de Bogotá"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15906.418463516641!2d-74.0836515!3d4.6097102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9a3c89b7b9bb%3A0x7c5a5b5f3d5e!2sBogot%C3%A1%2C%20Colombia!5e0!3m2!1ses!2sco!4v1700000000000"
              width="100%"
              height="320"
            />
          </div>
        </aside>
      </div>
    </div>
  );
}

