"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import toast from "react-hot-toast";

type FormValues = {
  nombre: string;
  email: string;
  telefono?: string;
  tipo: "Insolvencia" | "Derecho de Familia" | "Derecho Penal" | "Derecho Civil" | "Otro";
  mensaje: string;
};

const schema: yup.ObjectSchema<FormValues> = yup.object({
  nombre: yup.string().required("Ingresa tu nombre"),
  email: yup.string().email("Email no válido").required("Ingresa tu email"),
  telefono: yup.string().optional(),
  tipo: yup.mixed<FormValues["tipo"]>().oneOf(["Insolvencia", "Derecho de Familia", "Derecho Penal", "Derecho Civil", "Otro"]).required("Selecciona el tipo de consulta"),
  mensaje: yup.string().min(10, "Mensaje demasiado corto").required("Ingresa tu mensaje"),
});

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: yupResolver(schema) });

  const onSubmit = async (payload: FormValues) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Error en el envío");
      toast.success("Mensaje enviado. Te contactaremos pronto.");
      reset();
    } catch {
      toast.error("No se pudo enviar. Intenta nuevamente.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Nombre</label>
        <input
          {...register("nombre")}
          className="mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Tu nombre"
        />
        {errors.nombre && (
          <p className="mt-1 text-sm text-red-600">{errors.nombre.message}</p>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            {...register("email")}
            className="mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="tu@email.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium">Teléfono (opcional)</label>
          <input
            {...register("telefono")}
            className="mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="+57 315 463 5245"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Tipo de consulta</label>
          <select
            {...register("tipo")}
            className="mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            defaultValue="Insolvencia"
          >
            <option>Insolvencia</option>
            <option>Derecho de Familia</option>
            <option>Derecho Penal</option>
            <option>Derecho Civil</option>
            <option>Otro</option>
          </select>
          {errors.tipo && (
            <p className="mt-1 text-sm text-red-600">{errors.tipo.message as string}</p>
          )}
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium">Mensaje</label>
        <textarea
          {...register("mensaje")}
          rows={5}
          className="mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Cuéntanos tu caso"
        />
        {errors.mensaje && (
          <p className="mt-1 text-sm text-red-600">{errors.mensaje.message}</p>
        )}
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:opacity-60"
      >
        {isSubmitting ? "Enviando…" : "Enviar"}
      </button>
    </form>
  );
}
