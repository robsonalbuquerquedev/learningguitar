import Image from "next/image";

export const metadata = {
    title: "Capotrastes para Violão 🎸 | Loja Musical LearningGuitar",
    description:
        "Entenda como o capotraste funciona, quando ele pode ser útil e conheça opções para complementar sua prática no violão e na guitarra.",
    keywords: [
        "capotraste",
        "capotraste para violão",
        "capo para violão",
        "capotraste para guitarra",
        "como usar capotraste",
        "para que serve capotraste",
        "acessórios para violão",
        "LearningGuitar",
        "loja musical",
    ],
    alternates: {
        canonical:
            "https://aprenderviolaoonline.com.br/loja-musical/capotrastes",
    },
    openGraph: {
        title: "Capotrastes para Violão 🎸 | Loja Musical LearningGuitar",
        description:
            "Aprenda o que o capotraste faz, entenda quando ele pode ser útil e conheça opções para complementar sua prática musical.",
        url: "https://aprenderviolaoonline.com.br/loja-musical/capotrastes",
        type: "website",
    },
};

export default function CapotrastesPage() {
    const produtos = [
        {
            nome: "Capotraste Braçadeira para Violão e Guitarra",
            descricao:
                "Modelo de capotraste em formato de braçadeira para uso em violão e guitarra.",
            imagem: "/capotraste1.png",
            link: "https://s.shopee.com.br/qbTlIJ6ub",
        },
        {
            nome: "Capotraste com Porta-Palhetas + 5 Palhetas",
            descricao:
                "Capotraste acompanhado de cinco palhetas e um espaço integrado para armazená-las.",
            imagem: "/capotraste2.png",
            link: "https://s.shopee.com.br/7V8Ni9IJVc",
        },
        {
            nome: "Capotraste NV com Porta-Palhetas + 2 Palhetas",
            descricao:
                "Modelo com mecanismo de pressão e porta-palhetas integrado, acompanhado de duas palhetas.",
            imagem: "/capotraste3.png",
            link: "https://s.shopee.com.br/8pdlJ1OjXW",
        },
        {
            nome: "Capotraste Capo Braçadeira Guitarra e Violão",
            descricao:
                "Modelo de braçadeira destinado ao uso em violão e guitarra.",
            imagem: "/capotraste4.png",
            link: "https://s.shopee.com.br/12MnOh51m",
        },
        {
            nome: "Capotraste Unidão Preto – Guitarras Acústicas e Elétricas",
            descricao:
                "Modelo preto de capotraste para instrumentos acústicos e elétricos.",
            imagem: "/capotraste5.png",
            link: "https://s.shopee.com.br/AA98uLfqFZ",
        },
    ];

    return (
        <main className="min-h-screen bg-gradient-to-br from-amber-900 via-yellow-900 to-amber-800 text-white">
            {/* Hero */}
            <section className="px-6 py-20 md:px-16 md:py-28">
                <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
                    <div className="flex justify-center">
                        <Image
                            src="/hero-capotraste.png"
                            alt="Capotraste para violão"
                            width={480}
                            height={480}
                            className="rounded-3xl border-4 border-yellow-400/40 shadow-2xl"
                            priority
                        />
                    </div>

                    <div className="text-center lg:text-left">
                        <span className="mb-4 block text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300">
                            Além do aprendizado
                        </span>

                        <h1 className="mb-6 text-4xl font-extrabold text-yellow-100 sm:text-5xl md:text-6xl">
                            Capotrastes 🎸
                        </h1>

                        <p className="mb-5 max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl">
                            Um capotraste pode mudar a região em que você toca uma
                            música sem precisar alterar o formato dos acordes que
                            você já conhece.
                        </p>

                        <p className="mb-8 max-w-2xl text-base leading-relaxed text-white/60">
                            Antes de escolher um modelo, vale entender o que esse
                            acessório faz e como ele pode se encaixar na sua
                            prática.
                        </p>

                        <a
                            href="#entenda"
                            className="inline-flex items-center gap-2 rounded-full bg-yellow-300 px-6 py-3 font-semibold text-amber-900 shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-400 hover:shadow-lg"
                        >
                            Entender o capotraste
                            <span>↓</span>
                        </a>
                    </div>
                </div>
            </section>

            {/* O que é */}
            <section
                id="entenda"
                className="border-y border-yellow-300/10 bg-black/10 px-6 py-20 md:px-16 md:py-24"
            >
                <div className="mx-auto max-w-5xl">
                    <div className="mb-10 text-center">
                        <span className="mb-3 block text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300">
                            Primeiro, o conceito
                        </span>

                        <h2 className="mb-5 text-3xl font-extrabold text-yellow-100 sm:text-4xl">
                            Para que serve um capotraste?
                        </h2>

                        <p className="mx-auto max-w-3xl text-lg leading-relaxed text-white/70">
                            O capotraste é colocado sobre uma casa do braço do
                            instrumento para pressionar as cordas. Na prática,
                            isso eleva a altura das notas e permite tocar uma
                            mesma sequência de acordes em outra tonalidade.
                        </p>
                    </div>

                    <div className="rounded-3xl border border-yellow-300/15 bg-black/20 p-7 shadow-xl md:p-10">
                        <h3 className="mb-4 text-xl font-bold text-yellow-100">
                            Pense nele como uma nova referência no braço
                        </h3>

                        <p className="leading-relaxed text-white/65">
                            Imagine que você aprendeu uma música usando os
                            acordes que já conhece. Ao colocar o capotraste em
                            determinada casa, esses mesmos desenhos passam a
                            produzir sons mais agudos. Isso pode facilitar a
                            adaptação de uma música à região em que você deseja
                            cantar ou tocar.
                        </p>
                    </div>
                </div>
            </section>

            {/* Quando usar */}
            <section className="px-6 py-20 md:px-16 md:py-24">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-12 text-center">
                        <span className="mb-3 block text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300">
                            Na prática
                        </span>

                        <h2 className="mb-5 text-3xl font-extrabold text-yellow-100 sm:text-4xl">
                            Quando um capotraste pode ser útil?
                        </h2>

                        <p className="mx-auto max-w-3xl text-lg leading-relaxed text-white/65">
                            Ele não é obrigatório para aprender violão. É uma
                            ferramenta que pode ser útil em determinadas
                            situações de estudo e acompanhamento.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-3">
                        <div className="rounded-2xl border border-yellow-200/10 bg-black/15 p-6">
                            <div className="mb-4 text-3xl" aria-hidden="true">
                                🎤
                            </div>

                            <h3 className="mb-3 text-xl font-bold text-yellow-100">
                                Ajustar à voz
                            </h3>

                            <p className="text-sm leading-relaxed text-white/60">
                                O capotraste pode ajudar a transportar uma música
                                para uma região mais adequada à voz sem exigir
                                que você aprenda novos desenhos de acordes.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-yellow-200/10 bg-black/15 p-6">
                            <div className="mb-4 text-3xl" aria-hidden="true">
                                🎸
                            </div>

                            <h3 className="mb-3 text-xl font-bold text-yellow-100">
                                Explorar o braço
                            </h3>

                            <p className="text-sm leading-relaxed text-white/60">
                                Mudar a posição do capotraste também permite
                                perceber como os mesmos formatos de acordes
                                produzem outras alturas.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-yellow-200/10 bg-black/15 p-6">
                            <div className="mb-4 text-3xl" aria-hidden="true">
                                📖
                            </div>

                            <h3 className="mb-3 text-xl font-bold text-yellow-100">
                                Facilitar repertórios
                            </h3>

                            <p className="text-sm leading-relaxed text-white/60">
                                Algumas cifras usam o capotraste justamente para
                                manter formas de acordes mais simples enquanto
                                a música é tocada em outra tonalidade.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* O que observar */}
            <section className="bg-black/10 px-6 py-20 md:px-16 md:py-24">
                <div className="mx-auto max-w-6xl">
                    <div className="mb-12 text-center">
                        <span className="mb-3 block text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300">
                            Antes de escolher
                        </span>

                        <h2 className="mb-5 text-3xl font-extrabold text-yellow-100 sm:text-4xl">
                            O que observar em um capotraste?
                        </h2>

                        <p className="mx-auto max-w-3xl text-lg leading-relaxed text-white/65">
                            Modelos diferentes podem funcionar de maneiras
                            diferentes. Alguns pontos merecem atenção antes da
                            compra.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-3">
                        <div className="rounded-2xl border border-yellow-200/10 bg-amber-900/20 p-6">
                            <h3 className="mb-3 text-xl font-bold text-yellow-100">
                                Compatibilidade
                            </h3>

                            <p className="text-sm leading-relaxed text-white/60">
                                Verifique se o modelo é indicado para o tipo de
                                instrumento em que você pretende utilizá-lo.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-yellow-200/10 bg-amber-900/20 p-6">
                            <h3 className="mb-3 text-xl font-bold text-yellow-100">
                                Mecanismo de pressão
                            </h3>

                            <p className="text-sm leading-relaxed text-white/60">
                                Observe como o capotraste é preso ao braço e como
                                funciona o mecanismo responsável por pressionar
                                as cordas.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-yellow-200/10 bg-amber-900/20 p-6">
                            <h3 className="mb-3 text-xl font-bold text-yellow-100">
                                Formato e tamanho
                            </h3>

                            <p className="text-sm leading-relaxed text-white/60">
                                O formato do braço e a construção do instrumento
                                podem influenciar a escolha do modelo.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contexto de compra */}
            <section className="px-6 py-16 md:px-16 md:py-20">
                <div className="mx-auto max-w-4xl rounded-3xl border border-yellow-300/15 bg-black/15 p-8 text-center shadow-xl md:p-12">
                    <span className="mb-3 block text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300">
                        Precisa comprar agora?
                    </span>

                    <h2 className="mb-5 text-3xl font-extrabold text-yellow-100">
                        Primeiro entenda se você realmente precisa de um
                    </h2>

                    <p className="mx-auto max-w-2xl leading-relaxed text-white/65">
                        Se você ainda está começando, não precisa comprar um
                        capotraste apenas porque ele aparece em algumas cifras.
                        Aprenda primeiro os fundamentos e, quando surgir uma
                        situação em que o acessório seja útil, escolha um modelo
                        compatível com o seu instrumento.
                    </p>
                </div>
            </section>

            {/* Produtos */}
            <section
                id="produtos"
                className="px-6 pb-20 md:px-16 md:pb-24"
            >
                <div className="mx-auto max-w-7xl">
                    <div className="mb-12 text-center">
                        <span className="mb-3 block text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300">
                            Opções disponíveis
                        </span>

                        <h2 className="mb-4 text-3xl font-extrabold text-yellow-100 sm:text-4xl">
                            Capotrastes para conhecer
                        </h2>

                        <p className="mx-auto max-w-3xl text-white/60">
                            Abaixo estão algumas opções encontradas na loja
                            parceira. Compare as características e confira os
                            detalhes na página do produto antes de decidir.
                        </p>
                    </div>

                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {produtos.map((item, index) => (
                            <article
                                key={item.nome}
                                className="rounded-2xl border border-yellow-200/10 bg-white/10 p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-yellow-300/30 hover:bg-white/15"
                                style={{
                                    animationDelay: `${index * 0.1}s`,
                                }}
                            >
                                <div className="relative mb-5 h-52 overflow-hidden rounded-xl bg-black/20">
                                    <Image
                                        src={item.imagem}
                                        alt={item.nome}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        className="object-contain"
                                        priority={index === 0}
                                    />
                                </div>

                                <h3 className="mb-3 text-xl font-bold text-yellow-100">
                                    {item.nome}
                                </h3>

                                <p className="mb-6 text-sm leading-relaxed text-white/60">
                                    {item.descricao}
                                </p>

                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer sponsored"
                                    className="inline-flex items-center gap-2 rounded-full bg-yellow-400 px-5 py-2.5 font-bold text-amber-900 transition hover:bg-yellow-300"
                                >
                                    Ver na Shopee
                                    <span aria-hidden="true">→</span>
                                </a>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Ponte para aprendizado */}
            <section className="border-t border-yellow-300/10 bg-black/10 px-6 py-20 md:px-16">
                <div className="mx-auto max-w-4xl text-center">
                    <span className="mb-3 block text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300">
                        Continue aprendendo
                    </span>

                    <h2 className="mb-5 text-3xl font-extrabold text-yellow-100 sm:text-4xl">
                        O capotraste é uma ferramenta, não um fundamento
                    </h2>

                    <p className="mx-auto mb-8 max-w-2xl leading-relaxed text-white/65">
                        Entender acordes, ritmo, tonalidade e o braço do violão
                        continua sendo mais importante para construir sua base
                        musical. O capotraste entra como uma ferramenta para
                        ampliar as possibilidades do que você já aprendeu.
                    </p>

                    <a
                        href="/#beginner-path"
                        className="inline-flex items-center gap-2 rounded-full bg-yellow-300 px-6 py-3 font-semibold text-amber-900 transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-400 hover:shadow-lg"
                    >
                        Voltar para a trilha de aprendizado
                        <span aria-hidden="true">→</span>
                    </a>
                </div>
            </section>

            {/* Transparência */}
            <footer className="border-t border-yellow-300/10 px-6 py-10 md:px-16">
                <div className="mx-auto max-w-4xl text-center">
                    <p className="text-sm leading-relaxed text-amber-100/60">
                        Alguns links desta página podem ser links de afiliado.
                        Isso significa que o LearningGuitar pode receber uma
                        comissão caso você realize uma compra por meio deles,
                        sem custo adicional para você. Preços, disponibilidade
                        e características dos produtos podem mudar. Consulte
                        sempre a página da loja antes de comprar.
                    </p>
                </div>
            </footer>
        </main>
    );
}