"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    try {
      const ok = localStorage.getItem("cookies.accepted");
      if (!ok) setVisible(true);
    } catch {}
  }, []);
  const accept = () => {
    try { localStorage.setItem("cookies.accepted", "1"); } catch {}
    setVisible(false);
  };
  if (!visible) return null;
  return (
    <div className="fixed inset-x-0 bottom-0 z-50">
      <div className="container py-3">
        <div className="rounded-md border bg-white p-4 shadow-lg flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-700">
            Usamos cookies para mejorar tu experiencia. Consulta nuestra {" "}
            <Link href="/privacidad" className="text-[color:var(--color-accent)] hover:underline">Política de privacidad</Link>.
          </p>
          <div className="flex gap-2">
            <button onClick={accept} className="rounded-md bg-[color:var(--color-accent)] px-3 py-2 text-white text-sm">Aceptar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

