import { Link } from "@tanstack/react-router";

const MARQUEE_TEXT =
  "Madera maciza · Acabados a mano · Envío e instalación incluidos ·";

export function SiteHeader() {
  return (
    <>
      <div className="overflow-hidden bg-ink py-2 text-cream">
        <div className="marquee flex whitespace-nowrap font-display text-[15px] italic tracking-tight">
          <span className="px-6">
            {MARQUEE_TEXT} {MARQUEE_TEXT} {MARQUEE_TEXT}
          </span>
          <span className="px-6">
            {MARQUEE_TEXT} {MARQUEE_TEXT} {MARQUEE_TEXT}
          </span>
        </div>
      </div>
      <header className="flex items-center justify-between border-b border-ink/10 px-6 py-5 md:px-10">
        <Link
          to="/"
          className="font-display text-2xl font-black tracking-tight"
          aria-label="Birucho & Dany"
        >
          Birucho<span className="text-terracotta">&amp;</span>Dany
        </Link>
        <nav className="hidden items-center gap-8 text-[15px] font-medium md:flex">
          <Link
            to="/catalogo"
            search={{ coleccion: "rustico" }}
            className="transition-colors hover:text-terracotta"
          >
            Rústico
          </Link>
          <Link
            to="/catalogo"
            search={{ coleccion: "lujo" }}
            className="transition-colors hover:text-terracotta"
          >
            Lujoso
          </Link>
          <Link
            to="/catalogo"
            className="transition-colors hover:text-terracotta"
          >
            Catálogo
          </Link>
          <Link
            to="/sucursales"
            className="transition-colors hover:text-terracotta"
          >
            Sucursales
          </Link>
          <a href="#contacto" className="transition-colors hover:text-terracotta">
            Contacto
          </a>
        </nav>
        <Link
          to="/sucursales"
          className="rounded-full bg-ink px-6 py-2.5 text-[15px] font-medium text-cream"
        >
          Agenda taller
        </Link>
      </header>
    </>
  );
}
