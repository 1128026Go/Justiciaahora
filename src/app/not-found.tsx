import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 text-center">
      <h1 className="text-3xl font-bold">Página no encontrada</h1>
      <p className="mt-2 text-gray-700">La página que buscas no existe.</p>
      <div className="mt-6">
        <Link href="/" className="text-blue-600 hover:underline">
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}

