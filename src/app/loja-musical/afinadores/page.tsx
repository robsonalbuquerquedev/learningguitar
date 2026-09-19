import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "Afinadores para Violão 🎵 | Loja Musical LearningGuitar",
    description:
        "Entenda por que usar um afinador e encontre diferentes opções de afinadores para violão, guitarra, baixo e outros instrumentos.",
    keywords: [
        "afinador de violão",
        "afinador digital",
        "afinador cromático",
        "afinador de clip",
        "afinador para guitarra",
        "afinador musical",
        "acessórios de violão",
        "LearningGuitar",
    ],
    alternates: {
        canonical:
            "https://aprenderviolaoonline.com.br/loja-musical/afinadores",
    },
    openGraph: {
        title: "Afinadores para Violão 🎵 | Loja Musical LearningGuitar",
        description:
            "Entenda como escolher um afinador e encontre diferentes opções para complementar sua prática musical.",
        url: "https://aprenderviolaoonline.com.br/loja-musical/afinadores",
        type: "website",
    },
};

const produtos = [
    {
        nome: "Afinação Eletrônica para Guitarra, Violino e Ukulele",
        descricao:
            "Afinador eletrônico com proposta multi-instrumento, indicado para quem procura uma opção versátil para diferentes instrumentos.",
        imagem: "/afinador1.png",
        link: "https://s.shopee.com.br/6KwQEHPMip",
    },
    // {
    //     nome: "Afinador Digital Cromático 360°",
    //     descricao:
    //         "Modelo com clip e visor ajustável, pensado para facilitar a visualização durante a afinação.",
    //     imagem: "/afinador2.png",
    //     link: "https://s.shopee.com.br/9AGbbu8TZw",
    // },
    {
        nome: "Afinador Cromático Clip – Multi-instrumento",
        descricao:
            "Modelo compacto com clip, compatível com instrumentos como violão, guitarra, baixo e ukulele.",
        imagem: "/afinador3.png",
        link: "https://s.shopee.com.br/AUlzChGz7G",
    },
    {
        nome: "Afinador Clip para Violão e Cavaco",
        descricao:
            "Opção compacta para quem procura praticidade no uso cotidiano com instrumentos de cordas.",
        imagem: "/afinador4.png",
        link: "https://s.shopee.com.br/1VrAUdLSeE",
    },
    {
        nome: "Afinador Miwayer LCD Universal",
        descricao:
            "Afinador eletrônico com visor LCD e proposta de utilização em diferentes instrumentos.",
        imagem: "/afinador5.png",
        link: "https://s.shopee.com.br/gI3VLrqBS",
    },
    {
        nome: "Afinador Digital Cromático Clip",
        descricao:
            "Modelo com clip e afinação cromática para quem procura uma solução prática para o instrumento.",
        imagem: "/afinador6.png",
        link: "https://s.shopee.com.br/8AO4RSqPKz",
    },
];

export default function AfinadoresPage() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-amber-950 via-yellow-950 to-amber-900 text-white">

            {/* HERO */}
            <section className="px-6 pt-16 pb-20 md:px-16 md:pt-24 md:pb-28">
                <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

                    {/* IMAGEM */}
                    <div className="flex justify-center animate-fadeSlide">
                        <Image
                            src="/hero-afinador.png"
                            alt="Afinador eletrônico para instrumentos musicais"
                            width={480}
                            height={480}
                            className="rounded-3xl border border-yellow-300/30 shadow-2xl"
                            priority
                        />
                    </div>

                    {/* TEXTO */}
                    <div className="text-center lg:text-left animate-fadeSlide">

                        <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300">
                            Acessório para sua prática
                        </span>

                        <h1 className="text-4xl font-extrabold leading-tight text-yellow-200 sm:text-5xl md:text-6xl">
                            Afinadores 🎵
                        </h1>

                        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-amber-100/90 sm:text-xl">
                            Manter o instrumento afinado faz parte de uma boa
                            rotina de estudos. Um afinador pode tornar esse
                            processo mais simples, especialmente para quem
                            ainda está desenvolvendo o ouvido musical.
                        </p>

                        <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/60">
                            Abaixo você encontra diferentes modelos para
                            comparar e escolher de acordo com o instrumento,
                            formato e praticidade que procura.
                        </p>

                        <a
                            href="#produtos"
                            className="mt-8 inline-flex items-center gap-2 rounded-full bg-yellow-300 px-7 py-3 font-bold text-amber-950 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-200"
                        >
                            Ver opções
                            <span>↓</span>
                        </a>

                    </div>
                </div>
            </section>

            {/* POR QUE USAR */}
            <section className="px-6 pb-16">
                <div className="mx-auto max-w-4xl">

                    <div className="rounded-3xl border border-yellow-300/10 bg-black/20 p-7 shadow-xl sm:p-9">

                        <h2 className="text-2xl font-bold text-yellow-200 sm:text-3xl">
                            Por que usar um afinador?
                        </h2>

                        <p className="mt-4 leading-relaxed text-amber-100/85">
                            Antes de tocar uma música ou começar um exercício,
                            é importante que as cordas estejam afinadas. Isso
                            ajuda a produzir as notas esperadas e evita que
                            você pratique ouvindo o instrumento fora da
                            afinação.
                        </p>

                        <p className="mt-4 leading-relaxed text-amber-100/85">
                            Para quem está começando, um afinador também pode
                            ser uma ferramenta de apoio enquanto o ouvido
                            musical ainda está sendo desenvolvido.
                        </p>

                        <p className="mt-4 leading-relaxed text-amber-100/85">
                            Com o tempo, além de utilizar o afinador, você pode
                            começar a treinar a percepção das notas e das
                            diferenças de afinação.
                        </p>

                        <Link
                            href="/"
                            className="mt-6 inline-flex text-sm font-semibold text-yellow-300 underline decoration-yellow-300/30 underline-offset-4 hover:text-yellow-200"
                        >
                            Continuar explorando o LearningGuitar →
                        </Link>

                    </div>
                </div>
            </section>

            {/* COMO ESCOLHER */}
            <section className="px-6 pb-20">
                <div className="mx-auto max-w-6xl">

                    <div className="mb-10 text-center">
                        <h2 className="text-3xl font-extrabold text-yellow-200 sm:text-4xl">
                            O que observar em um afinador?
                        </h2>

                        <p className="mx-auto mt-3 max-w-2xl text-amber-100/70">
                            Alguns detalhes podem ajudar você a encontrar um
                            modelo adequado para sua rotina.
                        </p>
                    </div>

                    <div className="grid gap-5 md:grid-cols-3">

                        <article className="rounded-2xl border border-yellow-300/10 bg-white/10 p-6">
                            <span className="text-3xl">📎</span>

                            <h3 className="mt-4 text-xl font-bold text-yellow-100">
                                Tipo de fixação
                            </h3>

                            <p className="mt-3 text-sm leading-relaxed text-white/65">
                                Os modelos de clip podem ser presos ao
                                instrumento e são uma opção prática para
                                afinar durante os estudos.
                            </p>
                        </article>

                        <article className="rounded-2xl border border-yellow-300/10 bg-white/10 p-6">
                            <span className="text-3xl">👀</span>

                            <h3 className="mt-4 text-xl font-bold text-yellow-100">
                                Visualização
                            </h3>

                            <p className="mt-3 text-sm leading-relaxed text-white/65">
                                Um visor fácil de visualizar pode tornar a
                                leitura da afinação mais confortável,
                                principalmente durante o uso.
                            </p>
                        </article>

                        <article className="rounded-2xl border border-yellow-300/10 bg-white/10 p-6">
                            <span className="text-3xl">🎸</span>

                            <h3 className="mt-4 text-xl font-bold text-yellow-100">
                                Compatibilidade
                            </h3>

                            <p className="mt-3 text-sm leading-relaxed text-white/65">
                                Verifique se o afinador é adequado para o
                                instrumento que você utiliza e quais modos de
                                afinação ele oferece.
                            </p>
                        </article>

                    </div>
                </div>
            </section>

            {/* PRODUTOS */}
            <section
                id="produtos"
                className="scroll-mt-20 px-6 pb-24"
            >
                <div className="mx-auto max-w-6xl">

                    <div className="mb-10 text-center">
                        <h2 className="text-3xl font-extrabold text-yellow-200 sm:text-4xl">
                            Opções de afinadores
                        </h2>

                        <p className="mx-auto mt-3 max-w-2xl text-amber-100/70">
                            Confira os modelos disponíveis e compare suas
                            características antes de decidir.
                        </p>
                    </div>

                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

                        {produtos.map((produto, index) => (
                            <article
                                key={produto.nome}
                                className="flex flex-col rounded-3xl border border-yellow-300/10 bg-white/10 p-5 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-yellow-300/30 hover:bg-white/15 animate-popIn"
                                style={{
                                    animationDelay: `${index * 0.1}s`,
                                }}
                            >

                                <div className="relative mb-5 h-56 w-full overflow-hidden rounded-2xl bg-black/20">

                                    <Image
                                        src={produto.imagem}
                                        alt={produto.nome}
                                        fill
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        className="object-contain"
                                        priority={index < 2}
                                    />

                                </div>

                                <h3 className="text-xl font-bold leading-snug text-yellow-100">
                                    {produto.nome}
                                </h3>

                                <p className="mt-3 flex-1 text-sm leading-relaxed text-white/65">
                                    {produto.descricao}
                                </p>

                                <a
                                    href={produto.link}
                                    target="_blank"
                                    rel="noopener noreferrer sponsored"
                                    className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-yellow-300 px-5 py-3 font-bold text-amber-950 transition-all duration-300 hover:bg-yellow-200"
                                >
                                    Ver produto
                                    <span>↗</span>
                                </a>

                            </article>
                        ))}

                    </div>
                </div>
            </section>

            {/* CTA FINAL */}
            <section className="px-6 pb-20">
                <div className="mx-auto max-w-4xl rounded-3xl border border-yellow-300/20 bg-yellow-400/10 p-7 text-center sm:p-9">

                    <span className="text-3xl">🎸</span>

                    <h2 className="mt-4 text-2xl font-bold text-yellow-200 sm:text-3xl">
                        O afinador é uma ferramenta. A prática continua sendo o mais importante.
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-amber-100/85">
                        Se você já tem um afinador funcionando, não precisa
                        comprar outro. Use o que possui, mantenha seu violão
                        afinado e continue praticando.
                    </p>

                    <Link
                        href="/começar"
                        className="mt-7 inline-flex rounded-full bg-yellow-300 px-7 py-3 font-bold text-amber-950 transition-colors duration-300 hover:bg-yellow-200"
                    >
                        🎶 Continuar aprendendo
                    </Link>

                </div>
            </section>

            {/* TRANSPARÊNCIA */}
            <section className="px-6 pb-14">
                <div className="mx-auto max-w-3xl border-t border-white/10 pt-8 text-center">

                    <p className="text-xs leading-relaxed text-amber-200/65">
                        <strong className="text-amber-200">
                            Transparência:
                        </strong>{" "}
                        alguns links desta página podem ser links de afiliado.
                        Caso você realize uma compra por meio deles, o
                        LearningGuitar poderá receber uma comissão, sem custo
                        adicional para você.
                    </p>

                    <p className="mt-3 text-xs leading-relaxed text-amber-200/65">
                        Preços, disponibilidade, especificações e condições
                        podem mudar. Consulte sempre a página do produto antes
                        de realizar uma compra.
                    </p>

                </div>
            </section>

        </main>
    );
}
