import Link from "next/link";

export default function FinalCta() {
  return (
    <section className="px-6 py-20 md:px-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-3xl border border-yellow-300/30 bg-yellow-300/10 px-8 py-14 text-center shadow-2xl backdrop-blur-sm md:px-16 md:py-20">
          {/* Brilho decorativo */}
          <div
            className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-yellow-300/10 blur-3xl"
            aria-hidden="true"
          />

          <div
            className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-yellow-400/10 blur-3xl"
            aria-hidden="true"
          />

          {/* Conteúdo */}
          <div className="relative z-10">
            <span
              className="mb-5 block text-5xl"
              aria-hidden="true"
            >
              🎸
            </span>

            <span className="mb-3 block text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300">
              Seu próximo passo
            </span>

            <h2 className="mx-auto mb-6 max-w-3xl text-3xl font-extrabold leading-tight text-yellow-100 sm:text-4xl md:text-5xl">
              O melhor momento para começar a aprender é agora.
            </h2>

            <p className="mx-auto mb-9 max-w-2xl text-lg leading-relaxed text-white/75">
              Escolha um caminho, pratique no seu ritmo e continue evoluindo.
              Não precisa aprender tudo de uma vez. Cada acorde, cada batida e
              cada nova descoberta fazem parte da sua evolução.
            </p>

            {/* Ação principal */}
            <Link
              href="#start-here"
              className="inline-flex items-center gap-2 rounded-full bg-yellow-300 px-8 py-4 text-base font-bold text-amber-950 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-400 hover:shadow-xl"
            >
              Escolher meu próximo passo
              <span>→</span>
            </Link>

            {/* Mensagem complementar */}
            <p className="mt-6 text-sm text-white/45">
              Aprenda. Pratique. Evolua. 🎶
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}