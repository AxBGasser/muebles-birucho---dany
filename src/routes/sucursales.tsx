import { createFileRoute, Link } from "@tanstack/react-router";
import { Facebook, Instagram } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

interface RedSocial {
  plataforma: "facebook" | "instagram" | "whatsapp";
  url: string;
  label: string;
}

interface Sucursal {
  nombre: string;
  direccion: string;
  horarios: string[];
  telefono: string;
  mapsUrl: string;
  redes?: RedSocial[];
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
    redes: [
      {
        plataforma: "facebook",
        url: "#",
        label: "Facebook de Muebles Rústicos Birucho",
      },
      {
        plataforma: "instagram",
        url: "#",
        label: "Instagram de Muebles Rústicos Birucho",
      },
      {
        plataforma: "whatsapp",
        url: "https://wa.me/5214181811181",
        label: "WhatsApp de Muebles Rústicos Birucho",
      },
    ],
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
    redes: [
      {
        plataforma: "facebook",
        url: "https://www.facebook.com/mueblesrusticosdanny",
        label: "Facebook de Muebles Danny",
      },
      {
        plataforma: "instagram",
        url: "#",
        label: "Instagram de Muebles Danny",
      },
      {
        plataforma: "whatsapp",
        url: "https://wa.me/5214181811181",
        label: "WhatsApp de Muebles Danny",
      },
    ],
  },
];

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function RedesSociales({ redes }: { redes: RedSocial[] }) {
  return (
    <div className="mt-5 flex items-center gap-2">
      {redes.map(({ plataforma, url, label }) => (
        <a
          key={plataforma}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-ink/10 text-ink/50 transition-colors hover:border-terracotta hover:text-terracotta"
        >
          {plataforma === "facebook" && <Facebook className="h-4 w-4" aria-hidden="true" />}
          {plataforma === "instagram" && <Instagram className="h-4 w-4" aria-hidden="true" />}
          {plataforma === "whatsapp" && <WhatsAppIcon />}
        </a>
      ))}
    </div>
  );
}

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
          Dos Sucursales.
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
            {sucursal.redes && sucursal.redes.length > 0 && (
              <RedesSociales redes={sucursal.redes} />
            )}
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
