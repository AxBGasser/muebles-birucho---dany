import { createFileRoute } from "@tanstack/react-router";
import mesaRoble from "@/assets/mesa-roble.jpg";
import consolaLatón from "@/assets/consola-laton.jpg";
import sillaRattan from "@/assets/silla-rattan.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Roble Taller — Muebles rústicos y lujosos, hechos a mano",
      },
      {
        name: "description",
        content:
          "Dos colecciones, un solo taller: muebles rústicos de madera maciza y piezas lujosas en mármol y latón. Hecho a mano, con alma.",
      },
      {
        property: "og:title",
        content: "Roble Taller — Muebles rústicos y lujosos, hechos a mano",
      },
      {
        property: "og:description",
        content:
          "Dos colecciones, un solo taller: madera noble con texturas que cuentan historias y acabados dignos de las grandes casas.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="overflow-hidden bg-cream font-sans text-ink antialiased">
      <MarqueeStrip />
      <Header />
      <Hero />
      <DosMundos />
      <PiezasDestacadas />
      <Footer />
    </div>
  );
}

function MarqueeStrip() {
  const text =
    "Madera maciza · Acabados a mano · Envío e instalación incluidos ·";
  return (
    <div className="overflow-hidden bg-ink py-2 text-cream">
      <div className="marquee flex whitespace-nowrap font-display text-[15px] italic tracking-tight">
        <span className="px-6">
          {text} {text} {text}
        </span>
        <span className="px-6">
          {text} {text} {text}
        </span>
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="flex items-center justify-between border-b border-ink/10 px-6 py-5 md:px-10">
      <a href="#top" className="font-display text-2xl font-black tracking-tight">
        Roble<span className="text-terracotta">.</span>
      </a>
      <nav className="hidden gap-8 text-[15px] font-medium md:flex">
        <a href="#rustico" className="transition-colors hover:text-terracotta">
          Rústico
        </a>
        <a href="#lujo" className="transition-colors hover:text-terracotta">
          Lujoso
        </a>
        <a href="#piezas" className="transition-colors hover:text-terracotta">
          Piezas
        </a>
        <a href="#contacto" className="transition-colors hover:text-terracotta">
          Contacto
        </a>
      </nav>
      <a
        href="#contacto"
        className="rounded-full bg-ink px-6 py-2.5 text-[15px] font-medium text-cream"
      >
        Agenda taller
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="px-6 pt-12 pb-16 md:px-10">
      <p className="mb-3 font-display text-xl italic text-terracotta">
        Muebles con alma
      </p>
      <h1 className="font-display text-[15vw] leading-[0.82] font-black tracking-tighter md:text-[10rem]">
        RÚSTICO
        <span className="block text-forest">Y&nbsp;LÚXO</span>
        <span className="block text-ochre">JUNTOS.</span>
      </h1>
      <div className="mt-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <p className="max-w-md text-lg leading-relaxed text-ink/70">
          Cada pieza nace en nuestro taller: madera noble, texturas que cuentan
          historias y un acabado digno de las grandes casas.
        </p>
        <a
          href="#mundos"
          className="inline-block shrink-0 rounded-full bg-terracotta px-9 py-4 text-lg font-medium text-cream"
        >
          Ver las dos colecciones →
        </a>
      </div>
    </section>
  );
}

function DosMundos() {
  return (
    <section
      id="mundos"
      className="mx-4 rounded-[3rem] bg-forest p-8 text-cream md:mx-8 md:p-14"
    >
      <div className="mb-10 flex items-baseline justify-between">
        <h2 className="font-display text-4xl leading-none font-black md:text-6xl">
          Dos
          <br />
          mundos.
        </h2>
        <p className="hidden max-w-xs text-right text-cream/60 md:block">
          Toca un mundo para descubrir su carácter. Ambos comparten el mismo
          taller.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div
          id="rustico"
          className="scroll-mt-24 rounded-[2.5rem] bg-cream p-8 text-ink"
        >
          <div className="mb-6 text-[11px] font-bold tracking-[0.2em] text-terracotta uppercase">
            Colección 01
          </div>
          <h3 className="mb-4 font-display text-6xl leading-none font-black">
            Rústico
          </h3>
          <p className="mb-6 leading-relaxed text-ink/70">
            Madera maciza con vetas vivas, herrajes forjados y esa calidez que
            solo da el tiempo. Para casas que abrazan lo imperfecto.
          </p>
          <a
            href="#piezas"
            className="inline-block rounded-full bg-ink px-6 py-3 font-medium text-cream"
          >
            Explorar rústico
          </a>
        </div>
        <div
          id="lujo"
          className="scroll-mt-24 rounded-[2.5rem] bg-ochre p-8 text-ink"
        >
          <div className="mb-6 text-[11px] font-bold tracking-[0.2em] text-ink/60 uppercase">
            Colección 02
          </div>
          <h3 className="mb-4 font-display text-6xl leading-none font-black">
            Lujoso
          </h3>
          <p className="mb-6 leading-relaxed text-ink/70">
            Mármoles, latón cepillado y pieles curtidas a mano. Líneas limpias
            y presencia serena para espacios que hablan en voz baja.
          </p>
          <a
            href="#piezas"
            className="inline-block rounded-full bg-ink px-6 py-3 font-medium text-cream"
          >
            Explorar lujo
          </a>
        </div>
      </div>
    </section>
  );
}

const PIEZAS = [
  {
    img: mesaRoble,
    nombre: "Mesa Roble Vivo",
    linea: "Rústico · 2.40 m",
    precio: "$4.900",
  },
  {
    img: consolaLatón,
    nombre: "Consola Latón",
    linea: "Lujoso · mármol Calacatta",
    precio: "$6.200",
  },
  {
    img: sillaRattan,
    nombre: "Silla Rattan",
    linea: "Rústico · cuero curtido",
    precio: "$1.850",
  },
];

function PiezasDestacadas() {
  return (
    <section id="piezas" className="scroll-mt-16 px-6 py-16 md:px-10">
      <div className="mb-8 flex items-end justify-between">
        <h2 className="font-display text-4xl font-black md:text-5xl">
          Piezas destacadas
        </h2>
        <a
          href="#contacto"
          className="font-medium text-terracotta transition-colors hover:text-ink"
        >
          Ver todo
        </a>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {PIEZAS.map((pieza) => (
          <article key={pieza.nombre}>
            <div className="w-full overflow-hidden rounded-[1.75rem] bg-moss outline-1 -outline-offset-1 outline-black/5">
              <img
                src={pieza.img}
                alt={pieza.nombre}
                loading="lazy"
                width={800}
                height={1008}
                className="aspect-[4/5] w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
              />
            </div>
            <div className="mt-4 flex items-start justify-between">
              <div>
                <h3 className="font-display text-xl font-bold">
                  {pieza.nombre}
                </h3>
                <p className="text-sm text-ink/50">{pieza.linea}</p>
              </div>
              <span className="font-display text-lg font-bold">
                {pieza.precio}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Footer() {
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
