import Link from "next/link";

const caminhos = [
  {
    icon: "🎸",
    titulo: "Sou iniciante",
    descricao:
      "Nunca tocou violão ou está começando agora? Encontre um caminho simples para dar os primeiros passos.",
    href: "#beginner-path",
  },
  {
    icon: "🎵",
    titulo: "Quero aprender acordes",
    descricao:
      "Aprenda os acordes que formam a base de milhares de músicas e descubra como utilizá-los.",
    href: "/acordes-maiores-e-menores-naturais",
  },
  {
    icon: "🎼",
    titulo: "Quero entender teoria",
    descricao:
      "Entenda como notas, escalas, acordes e tonalidades se relacionam no universo musical.",
    href: "/campo-harmonico",
  },
  {
    icon: "🥁",
    titulo: "Quero tocar melhor",
    descricao:
      "Melhore seu ritmo, suas transições e sua segurança para tocar músicas com mais fluidez.",
    href: "/batidas-basicas",
  },
  {
    icon: "🎸",
    titulo: "Quero aprender solos",
    descricao:
      "Conheça escalas, posições e conceitos que ajudam você a começar a explorar os solos.",
    href: "/escalas",
  },
];

export default function StartHere() {
  return (
    <section
      id="start-here"
      className="px-6 py-20 md:px-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Cabeçalho */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="mb-3 block text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300">
            Encontre seu caminho
          </span>

          <h2 className="mb-4 text-3xl font-extrabold text-yellow-100 sm:text-4xl md:text-5xl">
            Por onde começar?
          </h2>

          <p className="text-lg leading-relaxed text-white/75">
            Cada pessoa chega ao violão em um momento diferente. Escolha o
            caminho que mais combina com o que você quer aprender agora.
          </p>
        </div>

        {/* Caminhos */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {caminhos.map((caminho) => (
            <Link
              key={caminho.titulo}
              href={caminho.href}
              className="group flex flex-col rounded-2xl border border-yellow-200/15 bg-black/15 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-yellow-300/50 hover:bg-black/25 hover:shadow-xl"
            >
              {/* Ícone */}
              <span
                className="mb-5 text-4xl transition-transform duration-300 group-hover:scale-110"
                aria-hidden="true"
              >
                {caminho.icon}
              </span>

              {/* Título */}
              <h3 className="mb-3 text-xl font-bold text-yellow-100">
                {caminho.titulo}
              </h3>

              {/* Descrição */}
              <p className="flex-1 text-sm leading-relaxed text-white/65">
                {caminho.descricao}
              </p>

              {/* Ação */}
              <span className="mt-5 font-semibold text-yellow-300 transition-transform duration-300 group-hover:translate-x-1">
                Começar →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}