import { Link } from "@tanstack/react-router";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const MARQUEE_TEXT =
  "Madera maciza · Acabados a mano · Envío e instalación incluidos ·";

const navLinkClass =
  "relative inline-block transition-colors hover:text-terracotta after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-0 after:bg-terracotta after:transition-all after:duration-300 hover:after:w-full";

const mobileNavLinkClass = "transition-colors hover:text-terracotta";

function DecorativeDiamond() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="h-5 w-5 fill-terracotta"
      aria-hidden="true"
    >
      <path d="M12 2L4 9l8 13 8-13L12 2zm0 3.5L18.5 9 12 19.5 5.5 9 12 5.5z" />
      <path d="M12 5.5L5.5 9h13L12 5.5z" opacity="0.5" />
    </svg>
  );
}

function DesktopNav() {
  return (
    <nav className="hidden items-center gap-8 text-[15px] font-medium md:flex">
      <Link
        to="/catalogo"
        search={{ coleccion: "rustico" }}
        className={navLinkClass}
      >
        Rústico
      </Link>
      <Link
        to="/catalogo"
        search={{ coleccion: "lujo" }}
        className={navLinkClass}
      >
        Lujoso
      </Link>
      <Link to="/catalogo" className={navLinkClass}>
        Catálogo
      </Link>
      <Link to="/sucursales" className={navLinkClass}>
        Sucursales
      </Link>
      <a href="#contacto" className={navLinkClass}>
        Contacto
      </a>
    </nav>
  );
}

function MobileNav() {
  return (
    <nav className="flex flex-col gap-5 text-[15px] font-medium">
      <Link
        to="/catalogo"
        search={{ coleccion: "rustico" }}
        className={mobileNavLinkClass}
      >
        Rústico
      </Link>
      <Link
        to="/catalogo"
        search={{ coleccion: "lujo" }}
        className={mobileNavLinkClass}
      >
        Lujoso
      </Link>
      <Link to="/catalogo" className={mobileNavLinkClass}>
        Catálogo
      </Link>
      <Link to="/sucursales" className={mobileNavLinkClass}>
        Sucursales
      </Link>
      <a href="#contacto" className={mobileNavLinkClass}>
        Contacto
      </a>
    </nav>
  );
}

export function SiteHeader() {
  return (
    <>
      {/* Marquee – scrolls away, not sticky */}
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

      {/* Sticky header */}
      <header className="sticky top-0 z-50 flex items-center justify-between border-b border-ink/10 bg-cream/80 px-6 py-5 shadow-sm backdrop-blur-md md:px-10">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 font-display text-2xl font-black tracking-tight"
          aria-label="Birucho & Dany"
        >
          <DecorativeDiamond />
          Birucho<span className="text-terracotta">&amp;</span>Dany
        </Link>

        {/* Desktop nav */}
        <DesktopNav />

        {/* Desktop CTA */}
        <Link
          to="/sucursales"
          className="hidden rounded-full bg-terracotta px-6 py-2.5 text-[15px] font-medium text-cream shadow-sm transition-colors hover:bg-terracotta/90 md:inline-block"
        >
          Agenda taller
        </Link>

        {/* Mobile hamburger */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button
                aria-label="Abrir menú"
                className="flex h-9 w-9 items-center justify-center rounded-md transition-colors hover:bg-ink/10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="w-72 bg-cream px-6 py-8">
              <Link
                to="/"
                className="mb-8 flex items-center gap-2 font-display text-xl font-black tracking-tight"
                aria-label="Birucho & Dany"
              >
                <DecorativeDiamond />
                Birucho<span className="text-terracotta">&amp;</span>Dany
              </Link>
              <MobileNav />
              <Link
                to="/sucursales"
                className="mt-8 inline-block rounded-full bg-terracotta px-6 py-2.5 text-[15px] font-medium text-cream shadow-sm transition-colors hover:bg-terracotta/90"
              >
                Agenda taller
              </Link>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </>
  );
}
