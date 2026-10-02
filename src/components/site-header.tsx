import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const MARQUEE_TEXT = "Madera maciza · Acabados a mano · Envío e instalación incluidos ·";

const navLinks = [
  { to: "/catalogo", label: "Catálogo", isAnchor: false },
  { to: "/sucursales", label: "Sucursales", isAnchor: false },
  { to: "#contacto", label: "Contacto", isAnchor: true },
] as const;

/** Pequeño rombo decorativo en terracota */
function LogoDiamond() {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="inline-block shrink-0"
    >
      <rect
        x="5"
        y="0.5"
        width="6.5"
        height="6.5"
        rx="0.5"
        transform="rotate(45 5 0.5)"
        fill="currentColor"
        className="text-terracotta"
      />
    </svg>
  );
}

export function SiteHeader() {
  return (
    <>
      {/* Barra marquee — NO sticky, flujo normal */}
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

      {/* Header sticky con blur */}
      <header className="sticky top-0 z-50 flex items-center justify-between border-b border-ink/10 bg-white/90 px-6 py-4 shadow-sm backdrop-blur-md md:px-10">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 font-display text-2xl font-black tracking-tight"
          aria-label="Birucho & Danny"
        >
          <LogoDiamond />
          Birucho<span className="text-terracotta">&amp;</span>Danny
        </Link>

        {/* Navegación desktop */}
        <nav className="hidden items-center gap-8 text-[15px] font-medium md:flex">
          <Link
            to="/catalogo"
            className="relative pb-0.5 transition-colors hover:text-terracotta after:absolute after:bottom-0 after:left-0 after:block after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-terracotta after:transition-transform after:duration-200 hover:after:scale-x-100 [&[data-status=active]]:text-terracotta [&[data-status=active]]:after:scale-x-100"
          >
            Catálogo
          </Link>
          <Link
            to="/sucursales"
            className="relative pb-0.5 transition-colors hover:text-terracotta after:absolute after:bottom-0 after:left-0 after:block after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-terracotta after:transition-transform after:duration-200 hover:after:scale-x-100 [&[data-status=active]]:text-terracotta [&[data-status=active]]:after:scale-x-100"
          >
            Sucursales
          </Link>
          <a
            href="#contacto"
            className="relative pb-0.5 transition-colors hover:text-terracotta after:absolute after:bottom-0 after:left-0 after:block after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-terracotta after:transition-transform after:duration-200 hover:after:scale-x-100"
          >
            Contacto
          </a>
        </nav>

        {/* CTA desktop — oculto en móvil */}
        <a
          href="https://wa.me/5214181811181?text=Hola%2C%20me%20gustar%C3%ADa%20pedir%20una%20cotizaci%C3%B3n"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full bg-terracotta px-6 py-2.5 text-[15px] font-medium text-cream transition-colors hover:bg-terracotta/90 md:inline-flex"
        >
          Pedir cotización
        </a>

        {/* Botón hamburguesa móvil */}
        <Sheet>
          <SheetTrigger
            className="flex items-center justify-center rounded-md p-2 transition-colors hover:bg-ink/10 md:hidden"
            aria-label="Abrir menú"
          >
            <Menu className="h-6 w-6" />
          </SheetTrigger>
          <SheetContent side="right" className="flex flex-col gap-0 pt-12">
            <nav className="flex flex-col gap-1">
              {navLinks.map(({ to, label, isAnchor }) =>
                isAnchor ? (
                  <a
                    key={label}
                    href={to}
                    className="rounded-md px-4 py-3 text-[17px] font-medium transition-colors hover:bg-ink/5 hover:text-terracotta"
                  >
                    {label}
                  </a>
                ) : (
                  <Link
                    key={label}
                    to={to as "/catalogo" | "/sucursales"}
                    className="rounded-md px-4 py-3 text-[17px] font-medium transition-colors hover:bg-ink/5 hover:text-terracotta [&[data-status=active]]:text-terracotta"
                  >
                    {label}
                  </Link>
                ),
              )}
            </nav>
            <div className="mt-6 px-4">
              <a
                href="https://wa.me/5214181811181?text=Hola%2C%20me%20gustar%C3%ADa%20pedir%20una%20cotizaci%C3%B3n"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center rounded-full bg-terracotta px-6 py-3 text-[15px] font-medium text-cream transition-colors hover:bg-terracotta/90"
              >
                Pedir cotización
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </header>
    </>
  );
}
