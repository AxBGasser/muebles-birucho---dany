import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PIEZAS, LINEA_LABEL, formatPrecio } from "@/lib/pieces";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Birucho & Dany — Muebles rústicos y lujosos, hechos a mano",
      },
      {
        name: "description",
        content:
          "Dos colecciones, un solo taller: muebles rústicos de madera maciza y piezas lujosas en mármol y latón. Hecho a mano, con alma.",
      },
      {
        property: "og:title",
        content: "Birucho & Dany — Muebles rústicos y lujosos, hechos a mano",
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
      <SiteHeader />
      <Hero />
      <DosMundos />
      <PiezasDestacadas />
      <SiteFooter />
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="px-6 pt-12 pb-16 md:px-10">
      <p className="mb-5 font-display text-3xl italic text-terracotta ">Muebles con alma</p>
      <h1 className="font-display text-[12vw] leading-[0.82] font-black tracking-tighter md:text-[6rem] lg:text-[9rem]">
        Rústico
        <span className="block text-forest">Y&nbsp;Contemporáneo</span>
        {/* <span className="block text-ochre">JUNTOS.</span> */}
        <span className="block text-ochre">En un solo lugar.</span>
      </h1>
      <div className="mt-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <p className="max-w-md text-lg leading-relaxed text-ink/70">
          Cada pieza nace en nuestro taller: madera noble, texturas que cuentan historias y un
          acabado digno de las grandes casas.
        </p>
        <Link
          to="/catalogo"
          className="inline-block shrink-0 rounded-full bg-terracotta px-9 py-4 text-lg font-medium text-cream"
        >
          Ver las dos colecciones →
        </Link>
      </div>
    </section>
  );
}

function DosMundos() {
  return (
    <section id="mundos" className="mx-4 rounded-[3rem] bg-forest p-8 text-cream md:mx-8 md:p-14">
      <div className="mb-10 flex items-baseline justify-between">
        <h2 className="font-display text-4xl leading-none font-black md:text-6xl">
          Dos
          <br />
          mundos.
        </h2>
        <p className="hidden max-w-xs text-right text-cream/60 md:block">
          Toca un mundo para descubrir su carácter. Ambos comparten el mismo taller.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div id="rustico" className="scroll-mt-24 rounded-[2.5rem] bg-cream p-8 text-ink">
          <div className="mb-6 text-[11px] font-bold tracking-[0.2em] text-terracotta uppercase">
            Colección 01
          </div>
          <h3 className="mb-4 font-display text-6xl leading-none font-black">Rústico</h3>
          <p className="mb-6 leading-relaxed text-ink/70">
            Madera maciza con vetas vivas, herrajes forjados y esa calidez que solo da el tiempo.
            Para casas que abrazan lo imperfecto.
          </p>
          <Link
            to="/catalogo"
            search={{ coleccion: "rustico" }}
            className="inline-block rounded-full bg-ink px-6 py-3 font-medium text-cream"
          >
            Explorar Rústico
          </Link>
        </div>
        <div id="lujo" className="scroll-mt-24 rounded-[2.5rem] bg-ochre p-8 text-ink">
          <div className="mb-6 text-[11px] font-bold tracking-[0.2em] text-ink/60 uppercase">
            Colección 02
          </div>
          <h3 className="mb-4 font-display text-6xl leading-none font-black">
            Contemporáneo &amp; Vanity
          </h3>
          <p className="mb-6 leading-relaxed text-ink/70">
            Mármoles, latón cepillado y pieles curtidas a mano. Líneas limpias y presencia serena
            para espacios que hablan en voz baja.
          </p>
          <Link
            to="/catalogo"
            search={{ coleccion: "lujo" }}
            className="inline-block rounded-full bg-ink px-6 py-3 font-medium text-cream"
          >
            Explorar Contemporáneo &amp; Vanity
          </Link>
        </div>
      </div>
    </section>
  );
}

function PiezasDestacadas() {
  return (
    <section id="piezas" className="scroll-mt-16 px-6 py-16 md:px-10">
      <div className="mb-8 flex items-end justify-between">
        <h2 className="font-display text-4xl font-black md:text-5xl">Piezas destacadas</h2>
        <Link
          to="/catalogo"
          className="font-medium text-terracotta transition-colors hover:text-ink"
        >
          Ver todo
        </Link>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {PIEZAS.slice(0, 3).map((pieza) => (
          <article key={pieza.id}>
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
                <h3 className="font-display text-xl font-bold">{pieza.nombre}</h3>
                <p className="text-sm text-ink/50">
                  {LINEA_LABEL[pieza.linea]} · {pieza.material}
                </p>
              </div>
              <span className="font-display text-lg font-bold">{formatPrecio(pieza.precio)}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
