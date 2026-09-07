import Link from "next/link";

const equipamentos = [
  {
    icon: "🎸",
    titulo: "Violões",
    descricao:
      "Encontre opções de violão para diferentes níveis, estilos e necessidades.",
  },
  {
    icon: "🎛️",
    titulo: "Acessórios",
    descricao:
      "Palhetas, afinadores, correias, capotraste e outros acessórios úteis para estudar.",
  },
  {
    icon: "🎧",
    titulo: "Equipamentos",
    descricao:
      "Conheça equipamentos que podem complementar sua prática e melhorar sua experiência.",
  },
];

export default function Equipment() {
  return (
    <section className="px-6 py-20 md:px-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Conteúdo principal */}
        <div className="rounded-3xl border border-yellow-300/20 bg-black/15 p-8 shadow-xl backdrop-blur-sm md:p-12">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Texto */}
            <div>
              <span className="mb-3 block text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300">
                Além do aprendizado
              </span>

              <h2 className="mb-5 text-3xl font-extrabold text-yellow-100 sm:text-4xl">
                Equipamentos para sua jornada
              </h2>

              <p className="mb-6 max-w-xl text-lg leading-relaxed text-white/75">
                O instrumento e os acessórios certos podem tornar sua prática
                mais confortável e ajudar você a aproveitar melhor cada
                momento de estudo.
              </p>

              <p className="mb-8 max-w-xl text-sm leading-relaxed text-white/55">
                Encontre sugestões de violões e equipamentos para diferentes
                necessidades, desde quem está começando até quem quer
                aprimorar sua experiência musical.
              </p>

              <Link
                href="/loja-musical"
                className="inline-flex items-center gap-2 rounded-full bg-yellow-300 px-6 py-3 font-semibold text-amber-900 transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-400 hover:shadow-lg"
              >
                Visitar Loja Musical
                <span>→</span>
              </Link>
            </div>

            {/* Categorias */}
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {equipamentos.map((equipamento) => (
                <div
                  key={equipamento.titulo}
                  className="group rounded-2xl border border-yellow-200/10 bg-amber-900/20 p-5 transition-all duration-300 hover:border-yellow-300/40 hover:bg-amber-800/30"
                >
                  <div className="mb-3 flex items-center gap-3">
                    <span
                      className="text-3xl transition-transform duration-300 group-hover:scale-110"
                      aria-hidden="true"
                    >
                      {equipamento.icon}
                    </span>

                    <h3 className="text-lg font-bold text-yellow-100">
                      {equipamento.titulo}
                    </h3>
                  </div>

                  <p className="text-sm leading-relaxed text-white/60">
                    {equipamento.descricao}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}