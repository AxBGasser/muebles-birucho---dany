import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

interface Sucursal {
  nombre: string;
  direccion: string;
  horarios: string[];
  telefono: string;
  mapsUrl: string;
}

const SUCURSALES: Sucursal[] = [
  {
    nombre: "Muebles Rústicos Birucho",
    direccion:
      "Muebles Rústicos Birucho, 37800 Dolores Hidalgo Cuna de la Independencia Nacional, Gto.",
    horarios: [
      "Lunes, Martes, Miércoles, Sábado · 09:00–18:00",
      "Domingo · 09:00–15:00",
      "Jueves · Cerrado",
    ],
    telefono: "+52 418 181 1181",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Muebles+R%C3%BAsticos+Birucho&query_place_id=ChIJCbfXtdc_K4QRtDfU2JFeT40",
  },
  {
    nombre: "Muebles Danny",
    direccion:
      "Mariano Balleza 34, Centro, 37800 Dolores Hidalgo Cuna de la Independencia Nacional, Gto.",
    horarios: [
      "Lunes, Martes, Miércoles, Jueves, Viernes · 09:00–18:00",
      "Sábado · 09:00–17:00",
      "Domingo · Cerrado",
    ],
    telefono: "+52 418 181 1181",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Muebles+Danny+%2C+37800+Dolores+Hidalgo+Cuna+de+la+Independencia+Nacional%2C+Gto.",
  },
];

export const Route = createFileRoute("/sucursales")({
  head: () => ({
    meta: [
      { title: "Sucursales — Birucho & Danny" },
      {
        name: "description",
        content:
          "Visita nuestras dos sucursales en Ciudad de México: Taller Roma y Galería Polanco. Conoce las piezas en persona.",
      },
      { property: "og:title", content: "Sucursales — Birucho & Danny" },
      {
        property: "og:description",
        content:
          "Visita nuestras dos sucursales en Ciudad de México: Taller Roma y Galería Polanco.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SucursalesPage,
});

function SucursalesPage() {
  return (
    <div className="min-h-screen bg-cream font-sans text-ink antialiased">
      <SiteHeader />
      <section className="px-6 pt-10 pb-8 md:px-10">
        <p className="mb-2 font-display text-lg italic text-terracotta">Dos estilos</p>
        <h1 className="font-display text-5xl leading-none font-black tracking-tight md:text-7xl">
          Sucursales.
        </h1>
      </section>
      <section className="grid gap-8 px-6 pb-16 md:grid-cols-2 md:px-10">
        {SUCURSALES.map((sucursal) => (
          <article
            key={sucursal.nombre}
            className="rounded-[2.5rem] bg-card p-6 outline-1 -outline-offset-1 outline-black/5 md:p-8"
          >
            <h2 className="mb-1 font-display text-3xl font-black">{sucursal.nombre}</h2>
            <p className="mb-6 text-ink/60">{sucursal.direccion}</p>
            <iframe
              title={`Mapa de ${sucursal.nombre}`}
              loading="lazy"
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                sucursal.direccion,
              )}&output=embed`}
              className="aspect-[4/3] w-full rounded-[1.75rem] border-0 bg-moss"
            />
            <div className="mt-6 space-y-1 text-[15px]">
              {sucursal.horarios.map((horario, index) => (
                <p key={index} className="text-ink/70">
                  {horario}
                </p>
              ))}
              <p>
                <a
                  href={`tel:${sucursal.telefono.replace(/\s/g, "")}`}
                  className="font-medium text-terracotta hover:text-ink"
                >
                  {sucursal.telefono}
                </a>
              </p>
            </div>
            <a
              href={sucursal.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-block rounded-full bg-ink px-6 py-3 font-medium text-cream transition-colors hover:bg-terracotta"
            >
              Cómo llegar →
            </a>
          </article>
        ))}
      </section>
      <section className="px-6 pb-4 md:px-10">
        <p className="max-w-2xl text-lg leading-relaxed text-ink/70">
          ¿Prefieres hablar antes de venir?{" "}
          <Link to="/catalogo" className="font-medium text-terracotta hover:text-ink">
            Explora el catálogo
          </Link>{" "}
          y agenda una visita a tu sucursal más cercana.
        </p>
      </section>
      <SiteFooter />
    </div>
  );
}
