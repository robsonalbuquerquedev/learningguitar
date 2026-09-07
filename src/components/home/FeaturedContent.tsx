import Link from "next/link";

const conteudos = [
  {
    categoria: "Para começar",
    titulo: "Acordes Maiores e Menores Naturais",
    descricao:
      "Conheça os acordes básicos que formam a base para acompanhar milhares de músicas no violão.",
    href: "/acordes-maiores-e-menores-naturais",
    destaque: true,
  },
  {
    categoria: "Teoria",
    titulo: "Campo Harmônico",
    descricao:
      "Entenda como os acordes se organizam dentro de uma tonalidade e como isso ajuda na criação e compreensão das músicas.",
    href: "/campo-harmonico",
    destaque: false,
  },
  {
    categoria: "Harmonia",
    titulo: "Progressões de Acordes",
    descricao:
      "Descubra como diferentes acordes podem ser combinados para formar sequências musicais.",
    href: "/progressoes-de-acordes",
    destaque: false,
  },
  {
    categoria: "Ritmo",
    titulo: "Batidas Básicas",
    descricao:
      "Comece a desenvolver seu ritmo com padrões simples para acompanhar suas primeiras músicas.",
    href: "/batidas-basicas",
    destaque: false,
  },
  {
    categoria: "Escalas",
    titulo: "Escalas Musicais",
    descricao:
      "Explore as escalas e comece a entender como elas podem ser utilizadas pelo braço do violão.",
    href: "/escalas",
    destaque: false,
  },
];

export default function FeaturedContent() {
  return (
    <section className="px-6 py-20 md:px-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Cabeçalho */}
        <div className="mb-12 max-w-3xl">
          <span className="mb-3 block text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300">
            Aprenda algo novo
          </span>

          <h2 className="mb-5 text-3xl font-extrabold text-yellow-100 sm:text-4xl md:text-5xl">
            Conteúdos em Destaque
          </h2>

          <p className="text-lg leading-relaxed text-white/75">
            Selecionamos alguns conteúdos para ajudar você a aprofundar seus
            conhecimentos e continuar evoluindo no violão.
          </p>
        </div>

        {/* Conteúdos */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {conteudos.map((conteudo) => (
            <article
              key={conteudo.href}
              className={
                conteudo.destaque
                  ? "group flex flex-col rounded-3xl border border-yellow-300/40 bg-yellow-300/10 p-7 shadow-xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-yellow-300/70 hover:bg-yellow-300/15 lg:col-span-2"
                  : "group flex flex-col rounded-2xl border border-yellow-200/15 bg-black/15 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-yellow-300/40 hover:bg-black/25 hover:shadow-xl"
              }
            >
              {/* Categoria */}
              <span className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-yellow-300">
                {conteudo.categoria}
              </span>

              {/* Título */}
              <h3
                className={
                  conteudo.destaque
                    ? "mb-4 text-2xl font-bold text-yellow-100 sm:text-3xl"
                    : "mb-4 text-xl font-bold text-yellow-100"
                }
              >
                {conteudo.titulo}
              </h3>

              {/* Descrição */}
              <p className="flex-1 text-sm leading-relaxed text-white/65">
                {conteudo.descricao}
              </p>

              {/* Link */}
              <Link
                href={conteudo.href}
                className="mt-6 inline-flex items-center gap-2 font-semibold text-yellow-300 transition-all duration-300 hover:text-yellow-200"
              >
                Ler conteúdo
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </article>
          ))}
        </div>

        {/* Chamada complementar */}
        <div className="mt-10 text-center">
          <Link
            href="#explore-content"
            className="inline-flex items-center gap-2 rounded-full border border-yellow-300/30 px-6 py-3 text-sm font-semibold text-yellow-300 transition-all duration-300 hover:border-yellow-300/60 hover:bg-yellow-300/10"
          >
            Explorar todos os conteúdos
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}