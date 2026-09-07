import Link from "next/link";

const categorias = [
  {
    icon: "🎸",
    titulo: "Acordes",
    descricao:
      "Aprenda acordes, suas formações e como utilizá-los para acompanhar músicas.",
    conteudos: [
      {
        nome: "Acordes Maiores e Menores",
        href: "/acordes-maiores-e-menores-naturais",
      },
      {
        nome: "Formação de Acordes",
        href: "/formacao-de-acordes",
      },
    ],
  },
  {
    icon: "🎼",
    titulo: "Teoria",
    descricao:
      "Entenda os conceitos musicais que ajudam você a compreender o que está tocando.",
    conteudos: [
      {
        nome: "Campo Harmônico",
        href: "/campo-harmonico",
      },
      {
        nome: "Todos os Tons",
        href: "/aprender-tocar-em-todos-os-tons",
      },
    ],
  },
  {
    icon: "🥁",
    titulo: "Ritmo",
    descricao:
      "Desenvolva sua percepção rítmica e aprenda diferentes formas de acompanhar músicas.",
    conteudos: [
      {
        nome: "Batidas Básicas",
        href: "/batidas-basicas",
      },
    ],
  },
  {
    icon: "🎵",
    titulo: "Escalas",
    descricao:
      "Conheça as escalas musicais e explore novas possibilidades pelo braço do violão.",
    conteudos: [
      {
        nome: "Escalas",
        href: "/escalas",
      },
      {
        nome: "Memorizar o Braço",
        href: "/memorizar-braco-do-violao",
      },
      {
        nome: "Memorizar Todas as Notas",
        href: "/memorizar-todas-as-notas",
      },
    ],
  },
  {
    icon: "🎹",
    titulo: "Harmonia",
    descricao:
      "Descubra como acordes, tonalidades e progressões se relacionam para formar músicas.",
    conteudos: [
      {
        nome: "Progressões de Acordes",
        href: "/progressoes-de-acordes",
      },
      {
        nome: "Campo Harmônico",
        href: "/campo-harmonico",
      },
    ],
  },
  {
    icon: "🎸",
    titulo: "Solos",
    descricao:
      "Comece a explorar escalas, notas e conceitos importantes para desenvolver seus primeiros solos.",
    conteudos: [
      {
        nome: "Escalas",
        href: "/escalas",
      },
      {
        nome: "Memorizar Todas as Notas",
        href: "/memorizar-todas-as-notas",
      },
    ],
  },
];

export default function ExploreUniverse() {
  return (
    <section
      id="explore-content"
      className="px-6 py-20 md:px-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Cabeçalho */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="mb-3 block text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300">
            Explore e descubra
          </span>

          <h2 className="mb-5 text-3xl font-extrabold text-yellow-100 sm:text-4xl md:text-5xl">
            Explore o Universo do Violão
          </h2>

          <p className="text-lg leading-relaxed text-white/75">
            Já sabe o que quer aprender? Explore as principais áreas do
            violão e encontre conteúdos para desenvolver suas habilidades.
          </p>
        </div>

        {/* Categorias */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categorias.map((categoria) => (
            <div
              key={categoria.titulo}
              className="group flex flex-col rounded-2xl border border-yellow-200/15 bg-black/15 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-yellow-300/50 hover:bg-black/25 hover:shadow-xl"
            >
              {/* Ícone e título */}
              <div className="mb-5 flex items-center gap-4">
                <span
                  className="text-4xl transition-transform duration-300 group-hover:scale-110"
                  aria-hidden="true"
                >
                  {categoria.icon}
                </span>

                <h3 className="text-2xl font-bold text-yellow-100">
                  {categoria.titulo}
                </h3>
              </div>

              {/* Descrição */}
              <p className="mb-6 text-sm leading-relaxed text-white/65">
                {categoria.descricao}
              </p>

              {/* Conteúdos */}
              <div className="flex flex-1 flex-col gap-3">
                {categoria.conteudos.map((conteudo) => (
                  <Link
                    key={conteudo.href}
                    href={conteudo.href}
                    className="group/link flex items-center justify-between rounded-xl border border-yellow-200/10 bg-amber-900/20 px-4 py-3 text-sm text-white/80 transition-all duration-300 hover:border-yellow-300/30 hover:bg-amber-800/40 hover:text-yellow-100"
                  >
                    <span>{conteudo.nome}</span>

                    <span className="text-yellow-300 transition-transform duration-300 group-hover/link:translate-x-1">
                      →
                    </span>
                  </Link>
                ))}
              </div>

              {/* Ação */}
              <div className="mt-6 border-t border-yellow-200/10 pt-5">
                <span className="text-sm font-semibold text-yellow-300">
                  Explorar {categoria.titulo} →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}