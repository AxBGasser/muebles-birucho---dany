import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
} from "lucide-react";

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

function WhatsAppIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.532 5.859L.044 23.956a.5.5 0 0 0 .614.614l6.097-1.488A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.944 9.944 0 0 1-5.085-1.392l-.363-.215-3.764.919.934-3.765-.234-.376A9.944 9.944 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
    </svg>
  );
}

const columnHeadingClass =
  "text-xs font-semibold uppercase tracking-widest text-stone-500 mb-4";

const navLinks = [
  { label: "Rústico", href: "/catalogo?coleccion=rustico" },
  { label: "Lujoso", href: "/catalogo?coleccion=lujo" },
  { label: "Catálogo", href: "/catalogo" },
  { label: "Sucursales", href: "/sucursales" },
  { label: "Contacto", href: "#contacto" },
];

export function SiteFooter() {
  return (
    <footer
      id="contacto"
      className="mt-8 bg-stone-900 px-6 py-16 text-cream md:px-10"
    >
      {/* CTA section */}
      <div className="border-b border-stone-800 pb-12 mb-12 max-w-7xl mx-auto">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <h2 className="font-display text-5xl leading-[0.9] font-black md:text-7xl">
            Visita
            <br />
            nuestro taller.
          </h2>
          <div className="md:text-right">
            <p className="mb-6 text-cream/60">
              Agenda una visita privada y toca las maderas antes de decidir.
            </p>
            <a
              href="mailto:hola@biruchodany.com"
              className="inline-block rounded-full bg-terracotta px-9 py-4 text-lg font-medium text-cream transition-colors hover:bg-terracotta/90"
            >
              Reservar visita →
            </a>
          </div>
        </div>
      </div>

      {/* 4-column grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 gap-10 md:grid-cols-4">
        {/* Col 1 – Brand */}
        <div>
          <div className="flex items-center gap-2 font-display font-black text-2xl text-cream">
            <DecorativeDiamond />
            Birucho<span className="text-terracotta">&amp;</span>Dany
          </div>
          <p className="text-stone-400 text-sm mt-3 leading-relaxed">
            Muebles de madera maciza hechos a mano con acabados artesanales.
          </p>
          <hr className="border-terracotta/40 mt-4 w-12" />
        </div>

        {/* Col 2 – Navegación */}
        <div>
          <p className={columnHeadingClass}>Navegación</p>
          <ul className="flex flex-col gap-2">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="text-stone-400 hover:text-cream transition-colors text-sm"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 – Contacto */}
        <div>
          <p className={columnHeadingClass}>Contacto</p>
          <ul className="flex flex-col gap-3 text-sm text-stone-400">
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-terracotta" aria-hidden="true" />
              <span>Av. Santa Fe 2847, Buenos Aires</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-terracotta" aria-hidden="true" />
              <span>+54 11 4832-1100</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-terracotta" aria-hidden="true" />
              <a
                href="mailto:hola@biruchodany.com"
                className="hover:text-cream transition-colors"
              >
                hola@biruchodany.com
              </a>
            </li>
          </ul>
        </div>

        {/* Col 4 – Redes sociales */}
        <div>
          <p className={columnHeadingClass}>Redes sociales</p>
          <div className="flex gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-stone-700 text-stone-400 hover:border-terracotta hover:text-terracotta transition-colors"
            >
              <Instagram className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-stone-700 text-stone-400 hover:border-terracotta hover:text-terracotta transition-colors"
            >
              <Facebook className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="https://wa.me/5491148321100"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-stone-700 text-stone-400 hover:border-terracotta hover:text-terracotta transition-colors"
            >
              <WhatsAppIcon />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto border-t border-stone-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-stone-500">
        <span>© 2026 Birucho &amp; Dany. Todos los derechos reservados.</span>
        <span>Muebles artesanales · Buenos Aires, Argentina</span>
      </div>
    </footer>
  );
}
