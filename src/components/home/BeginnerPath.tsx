import Link from "next/link";

const etapas = [
  {
    numero: "01",
    titulo: "Acordes",
    descricao:
      "Comece conhecendo os acordes mais usados e aprenda as primeiras posições no violão.",
    href: "/acordes-maiores-e-menores-naturais",
  },
  {
    numero: "02",
    titulo: "Formação de Acordes",
    descricao:
      "Entenda como os acordes são construídos e comece a enxergar a lógica por trás das posições.",
    href: "/formacao-de-acordes",
  },
  {
    numero: "03",
    titulo: "Batidas",
    descricao:
      "Desenvolva seu ritmo e aprenda padrões simples para começar a acompanhar músicas.",
    href: "/batidas-basicas",
  },
  {
    numero: "04",
    titulo: "Progressões",
    descricao:
      "Aprenda como os acordes se combinam em sequências e comece a entender a estrutura das músicas.",
    href: "/progressoes-de-acordes",
  },
  {
    numero: "05",
    titulo: "Todos os Tons",
    descricao:
      "Leve o que aprendeu para outras tonalidades e amplie suas possibilidades no violão.",
    href: "/aprender-tocar-em-todos-os-tons",
  },
];

export default function BeginnerPath() {
  return (
    <section
      id="beginner-path"
      className="px-6 py-20 md:px-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Cabeçalho */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="mb-3 block text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300">
            Seu caminho de evolução
          </span>

          <h2 className="mb-5 text-3xl font-extrabold text-yellow-100 sm:text-4xl md:text-5xl">
            Trilha para Iniciantes
          </h2>

          <p className="text-lg leading-relaxed text-white/75">
            Se você está começando agora, siga esta sequência para construir
            uma base sólida e evoluir gradualmente no violão.
          </p>
        </div>

        {/* Trilha */}
        <div className="relative">
          {/* Linha da trilha */}
          <div
            className="absolute left-6 top-6 hidden h-0.5 w-[calc(100%-3rem)] bg-yellow-300/20 lg:block"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-5 lg:gap-4">
            {etapas.map((etapa) => (
              <Link
                key={etapa.numero}
                href={etapa.href}
                className="group relative rounded-2xl border border-yellow-200/15 bg-black/15 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-yellow-300/50 hover:bg-black/25 hover:shadow-xl"
              >
                {/* Número */}
                <div className="relative z-10 mb-6 flex h-12 w-12 items-center justify-center rounded-full border-2 border-yellow-300/60 bg-amber-900 font-bold text-yellow-300 transition-all duration-300 group-hover:scale-110 group-hover:border-yellow-300 group-hover:bg-yellow-300 group-hover:text-amber-900">
                  {etapa.numero}
                </div>

                {/* Conteúdo */}
                <h3 className="mb-3 text-xl font-bold text-yellow-100">
                  {etapa.titulo}
                </h3>

                <p className="text-sm leading-relaxed text-white/65">
                  {etapa.descricao}
                </p>

                <span className="mt-5 block font-semibold text-yellow-300 transition-transform duration-300 group-hover:translate-x-1">
                  Começar etapa →
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Mensagem final */}
        <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-white/50">
          Você pode seguir a trilha no seu ritmo. O objetivo é construir
          conhecimento aos poucos e entender como cada etapa se conecta à
          próxima.
        </p>
      </div>
    </section>
  );
}