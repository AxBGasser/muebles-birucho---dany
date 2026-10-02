export function SiteFooter() {
  return (
    <footer
      id="contacto"
      className="mt-8 bg-ink px-6 py-16 text-cream md:px-10"
    >
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
            href="mailto:hola@robletaller.com"
            className="inline-block rounded-full bg-terracotta px-9 py-4 text-lg font-medium text-cream"
          >
            Reservar visita →
          </a>
        </div>
      </div>
      <div className="mt-14 flex justify-between border-t border-cream/10 pt-6 text-sm text-cream/50">
        <span>© 2026 Roble Taller</span>
        <span>Hecho a mano</span>
      </div>
    </footer>
  );
}
