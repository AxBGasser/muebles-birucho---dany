import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

export function SiteFooter() {
  return (
    <footer
      id="contacto"
      aria-label="Pie de página"
      className="bg-ink px-6 pt-20 pb-8 text-cream md:px-10"
    >
      {/* ── 1. CTA superior ─────────────────────────────────── */}
      <div className="mb-16 grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <h2 className="font-display text-4xl font-black leading-[0.95] md:text-6xl">
            Muebles que duran
            <br />
            generaciones.
          </h2>
          <p className="mt-4 max-w-md text-cream/60">
            Agenda una visita a nuestro taller en Dolores Hidalgo y toca las
            maderas antes de decidir.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4 md:justify-center">
          <Link
            to="/catalogo"
            className="rounded-full bg-terracotta px-7 py-3 text-[15px] font-medium text-cream transition-opacity hover:opacity-90"
          >
            Ver catálogo →
          </Link>
          <Link
            to="/sucursales"
            className="rounded-full border border-cream/30 px-7 py-3 text-[15px] font-medium text-cream transition-colors hover:border-terracotta hover:text-terracotta"
          >
            Reservar visita
          </Link>
        </div>
      </div>

      {/* ── 2. Línea divisora ───────────────────────────────── */}
      <div className="border-t border-cream/10" />

      {/* ── 3. Grid de 4 columnas ───────────────────────────── */}
      <div className="mt-14 grid gap-10 sm:grid-cols-2 md:grid-cols-4">
        {/* Columna 1 — Marca */}
        <div>
          <Link
            to="/"
            className="font-display text-xl font-black tracking-tight"
            aria-label="Birucho & Dany"
          >
            Birucho<span className="text-terracotta">&amp;</span>Dany
          </Link>
          <p className="mt-3 text-sm leading-relaxed text-cream/60">
            Artesanos de madera maciza desde Dolores Hidalgo.
          </p>
          <div className="mt-4 h-px w-12 bg-terracotta" />
        </div>

        {/* Columna 2 — Navegación */}
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-cream/40">
            Navegación
          </p>
          <ul className="space-y-2 text-sm text-cream/70">
            <li>
              <Link
                to="/"
                className="transition-colors hover:text-terracotta"
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                to="/catalogo"
                className="transition-colors hover:text-terracotta"
              >
                Catálogo
              </Link>
            </li>
            <li>
              <Link
                to="/sucursales"
                className="transition-colors hover:text-terracotta"
              >
                Sucursales
              </Link>
            </li>
            <li>
              <a
                href="#contacto"
                className="transition-colors hover:text-terracotta"
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>

        {/* Columna 3 — Contacto */}
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-cream/40">
            Contacto
          </p>
          <ul className="space-y-3 text-sm text-cream/70">
            <li className="flex items-start gap-2">
              <MapPin
                className="h-4 w-4 shrink-0 text-terracotta"
                aria-hidden="true"
              />
              <span>
                Av. México 42, Col. Centro,
                <br />
                Dolores Hidalgo, Gto.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Phone
                className="h-4 w-4 shrink-0 text-terracotta"
                aria-hidden="true"
              />
              <a
                href="tel:+524181820000"
                className="transition-colors hover:text-terracotta"
              >
                +52 418 182 0000
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Mail
                className="h-4 w-4 shrink-0 text-terracotta"
                aria-hidden="true"
              />
              <a
                href="mailto:hola@biruchoanddany.com"
                className="transition-colors hover:text-terracotta"
              >
                hola@biruchoanddany.com
              </a>
            </li>
          </ul>
        </div>

        {/* Columna 4 — Redes sociales */}
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-cream/40">
            Síguenos
          </p>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href="#"
                aria-label="Visítanos en Instagram"
                className="group flex items-center gap-3 text-cream/70 transition-colors hover:text-terracotta"
              >
                <Instagram className="h-5 w-5 shrink-0 transition-colors group-hover:text-terracotta" />
                <span>@biruchoydany</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/mueblesrusticosdanny"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visítanos en Facebook"
                className="group flex items-center gap-3 text-cream/70 transition-colors hover:text-terracotta"
              >
                <Facebook className="h-5 w-5 shrink-0 transition-colors group-hover:text-terracotta" />
                <span>Muebles Rústicos Danny</span>
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/5214181811181"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Escríbenos por WhatsApp"
                className="group flex items-center gap-3 text-cream/70 transition-colors hover:text-terracotta"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5 shrink-0 transition-colors group-hover:text-terracotta"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span>Escríbenos</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* ── 4. Barra de copyright ────────────────────────────── */}
      <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-cream/10 pt-6 text-sm text-cream/40">
        <span>© 2026 Birucho &amp; Dany · Dolores Hidalgo, Guanajuato, México</span>
        <span className="text-cream/30">Hecho a mano con amor</span>
      </div>
    </footer>
  );
}
