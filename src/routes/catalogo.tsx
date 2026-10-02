import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PIEZAS, LINEA_LABEL, formatPrecio, type Linea } from "@/lib/pieces";

interface CatalogoSearch {
  coleccion?: Linea;
}

export const Route = createFileRoute("/catalogo")({
  validateSearch: (search: Record<string, unknown>): CatalogoSearch => {
    const c = search["coleccion"];
    return c === "rustico" || c === "lujo" ? { coleccion: c } : {};
  },
  head: () => ({
    meta: [
      { title: "Catálogo — Birucho & Dany" },
      {
        name: "description",
        content:
          "Explora las dos colecciones de Birucho & Dany: piezas rústicas de madera maciza y piezas lujosas en mármol y latón.",
      },
      { property: "og:title", content: "Catálogo — Birucho & Dany" },
      {
        property: "og:description",
        content:
          "Explora las dos colecciones de Birucho & Dany: piezas rústicas de madera maciza y piezas lujosas en mármol y latón.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CatalogoPage,
});

function CatalogoPage() {
  const { coleccion } = Route.useSearch();
  const piezas = coleccion
    ? PIEZAS.filter((p) => p.linea === coleccion)
    : PIEZAS;

  return (
    <div className="min-h-screen bg-cream font-sans text-ink antialiased">
      <SiteHeader />
      <section className="px-6 pt-10 pb-8 md:px-10">
        <p className="mb-2 font-display text-lg italic text-terracotta">
          Todo sale del mismo taller
        </p>
        <h1 className="font-display text-5xl leading-none font-black tracking-tight md:text-7xl">
          Catálogo.
        </h1>
      </section>
      <section className="px-6 md:px-10">
        <div className="mb-10 flex flex-wrap gap-3">
          <FiltroChip activo={!coleccion} to="/catalogo" search={{}}>
            Todos
          </FiltroChip>
          <FiltroChip
            activo={coleccion === "rustico"}
            to="/catalogo"
            search={{ coleccion: "rustico" }}
          >
            Rústico
          </FiltroChip>
          <FiltroChip
            activo={coleccion === "lujo"}
            to="/catalogo"
            search={{ coleccion: "lujo" }}
          >
            Contemporáneo &amp; Vanity
          </FiltroChip>
        </div>
        <div className="grid gap-8 pb-16 sm:grid-cols-2 lg:grid-cols-3">
          {piezas.map((pieza) => (
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
              <div className="mt-4 flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-xl font-bold">
                    {pieza.nombre}
                  </h3>
                  <p className="text-sm text-ink/50">{pieza.material}</p>
                  {pieza.dimensiones ? (
                    <p className="text-sm text-ink/50">{pieza.dimensiones}</p>
                  ) : null}
                </div>
                <span className="font-display text-lg font-bold whitespace-nowrap">
                  {formatPrecio(pieza.precio)}
                </span>
              </div>
              <div className="mt-3">
                <span
                  className={`inline-block rounded-full px-3 py-1 text-[11px] font-bold tracking-[0.15em] uppercase ${
                    pieza.linea === "rustico"
                      ? "bg-terracotta/10 text-terracotta"
                      : "bg-ochre/25 text-ink/70"
                  }`}
                >
                  {LINEA_LABEL[pieza.linea]}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}

function FiltroChip({
  activo,
  to,
  search,
  children,
}: {
  activo: boolean;
  to: "/catalogo";
  search: { coleccion?: Linea };
  children: React.ReactNode;
}) {
  return (
    <Link
      to={to}
      search={search}
      className={`rounded-full px-5 py-2.5 text-[15px] font-medium transition-colors ${
        activo
          ? "bg-ink text-cream"
          : "bg-ink/5 text-ink hover:bg-ink/10"
      }`}
    >
      {children}
    </Link>
  );
}
