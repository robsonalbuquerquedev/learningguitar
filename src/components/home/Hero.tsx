import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 py-16 md:px-16 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2 md:gap-16">
        {/* 🎸 Imagem */}
        <div className="order-1 flex justify-center animate-fadeSlide md:order-1">
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-yellow-400/10 blur-2xl" />

            <Image
              src="/hero-guitar.png"
              alt="Violão para aprender a tocar"
              width={520}
              height={520}
              priority
              className="relative rounded-3xl border border-yellow-300/30 shadow-2xl"
            />
          </div>
        </div>

        {/* 🎯 Conteúdo */}
        <div className="order-2 flex flex-col items-center text-center animate-fadeSlide md:order-2 md:items-start md:text-left">
          {/* Identidade */}
          <span className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300">
            LearningGuitar 🎸
          </span>

          {/* Proposta de valor */}
          <h1 className="mb-6 text-4xl font-extrabold leading-tight text-yellow-100 sm:text-5xl md:text-6xl">
            Aprenda violão.
            <span className="block text-yellow-300">
              Evolua de verdade.
            </span>
          </h1>

          <p className="mb-8 max-w-xl text-lg leading-relaxed text-white/90 sm:text-xl">
            Um caminho simples e progressivo para aprender violão,
            compreender o que você está tocando e desenvolver suas habilidades
            passo a passo.
          </p>

          {/* Caminhos */}
          <div className="flex w-full max-w-xl flex-col gap-4 sm:flex-row">
            {/* Começar do zero */}
            <Link
              href="/acordes-maiores-e-menores-naturais"
              className="group flex flex-1 flex-col rounded-2xl bg-yellow-300 px-6 py-5 text-left text-amber-950 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-400 hover:shadow-xl"
            >
              <span className="mb-1 text-lg font-bold">
                🎸 Começar do Zero
              </span>

              <span className="text-sm leading-relaxed text-amber-900/80">
                Nunca tocou? Siga um caminho pensado para começar sem
                complicação.
              </span>

              <span className="mt-3 font-semibold">
                Começar minha jornada →
              </span>
            </Link>

            {/* Explorar conteúdos */}
            <Link
              href="#explore-content"
              className="group flex flex-1 flex-col rounded-2xl border border-yellow-300/40 bg-black/20 px-6 py-5 text-left backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-yellow-300/70 hover:bg-black/30"
            >
              <span className="mb-1 text-lg font-bold text-yellow-100">
                🎵 Explorar Conteúdos
              </span>

              <span className="text-sm leading-relaxed text-white/70">
                Já toca? Encontre acordes, teoria, ritmo, escalas, harmonia e
                muito mais.
              </span>

              <span className="mt-3 font-semibold text-yellow-300">
                Explorar o universo →
              </span>
            </Link>
          </div>

          {/* Indicador de evolução */}
          <div className="mt-8 flex items-center gap-3 text-sm text-white/60">
            <span className="h-px w-8 bg-yellow-300/40" />
            <span>Do primeiro acorde à evolução musical</span>
            <span className="h-px w-8 bg-yellow-300/40" />
          </div>
        </div>
      </div>
    </section>
  );
}
