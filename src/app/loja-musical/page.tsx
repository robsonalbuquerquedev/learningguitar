import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "Loja Musical 🎸 | Instrumentos e Acessórios | LearningGuitar",
    description:
        "Encontre violões, acessórios e equipamentos que podem complementar sua prática musical. Uma seleção organizada para diferentes necessidades de quem aprende violão.",
    alternates: {
        canonical: "https://aprenderviolaoonline.com.br/loja-musical",
    },
    keywords: [
        "loja musical",
        "violão",
        "acessórios para violão",
        "equipamentos musicais",
        "palhetas",
        "afinadores",
        "capotraste",
        "acessórios de violão",
        "LearningGuitar",
    ],
    openGraph: {
        title: "Loja Musical 🎸 | Instrumentos e Acessórios | LearningGuitar",
        description:
            "Instrumentos, acessórios e equipamentos para complementar sua jornada de aprendizado e prática musical.",
        url: "https://aprenderviolaoonline.com.br/loja-musical",
        type: "website",
    },
};

const categorias = [
    {
        nome: "Violões",
        descricao:
            "Opções para diferentes momentos da jornada, desde quem está começando até quem deseja investir em outro instrumento.",
        href: "/loja-musical/violoes",
        icone: "🎸",
    },
    {
        nome: "Afinadores",
        descricao:
            "Equipamentos para ajudar você a manter o instrumento afinado e desenvolver uma prática mais consistente.",
        href: "/loja-musical/afinadores",
        icone: "🎼",
    },
    {
        nome: "Palhetas",
        descricao:
            "Diferentes formatos e espessuras para experimentar novas formas de tocar e encontrar o que funciona para você.",
        href: "/loja-musical/palhetas",
        icone: "🎵",
    },
    {
        nome: "Capotrastes",
        descricao:
            "Acessórios que facilitam a mudança de tonalidade e podem ampliar as possibilidades de algumas músicas.",
        href: "/loja-musical/capotrastes",
        icone: "🎶",
    },
    {
        nome: "Camisetas Musicais",
        descricao:
            "Produtos para quem também gosta de levar a música para além dos momentos de estudo.",
        href: "/loja-musical/camisetas-musicais",
        icone: "👕",
    },
];

export default function LojaMusicalPage() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-amber-950 via-yellow-950 to-amber-900 text-white">

            {/* HERO */}
            <section className="px-6 pt-16 pb-20 md:px-16 md:pt-24 md:pb-28">
                <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

                    {/* IMAGEM */}
                    <div className="flex justify-center animate-fadeSlide">
                        <Image
                            src="/hero-loja.png"
                            alt="Instrumentos e acessórios musicais"
                            width={480}
                            height={480}
                            className="rounded-3xl border border-yellow-300/30 shadow-2xl"
                            priority
                        />
                    </div>

                    {/* TEXTO */}
                    <div className="text-center lg:text-left animate-fadeSlide">

                        <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300">
                            Além do aprendizado
                        </span>

                        <h1 className="text-4xl font-extrabold leading-tight text-yellow-200 sm:text-5xl md:text-6xl">
                            Ferramentas para sua jornada musical 🎸
                        </h1>

                        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-amber-100/90 sm:text-xl">
                            O aprendizado acontece principalmente na prática.
                            Mas alguns instrumentos e acessórios podem tornar
                            esse processo mais confortável, organizado e
                            agradável.
                        </p>

                        <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/60">
                            Por isso, reunimos nesta área diferentes categorias
                            de produtos que podem complementar sua experiência
                            com o violão e com a música.
                        </p>

                        <a
                            href="#categorias"
                            className="mt-8 inline-flex items-center gap-2 rounded-full bg-yellow-300 px-7 py-3 font-bold text-amber-950 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-200"
                        >
                            Explorar categorias
                            <span>↓</span>
                        </a>

                    </div>
                </div>
            </section>

            {/* CONTEXTO */}
            <section className="px-6 pb-16">
                <div className="mx-auto max-w-4xl">

                    <div className="rounded-3xl border border-yellow-300/10 bg-black/20 p-7 shadow-xl sm:p-9">

                        <h2 className="text-2xl font-bold text-yellow-200 sm:text-3xl">
                            Comprar faz parte do aprendizado?
                        </h2>

                        <p className="mt-4 leading-relaxed text-amber-100/85">
                            Não necessariamente. Você não precisa de muitos
                            equipamentos para começar a aprender violão.
                            Na verdade, o mais importante é ter um instrumento
                            adequado, mantê-lo em boas condições e praticar
                            com frequência.
                        </p>

                        <p className="mt-4 leading-relaxed text-amber-100/85">
                            Esta área existe para quando você precisar de algo
                            específico: um afinador, uma palheta, um capotraste,
                            um novo violão ou outro acessório que possa fazer
                            sentido para sua prática.
                        </p>

                    </div>
                </div>
            </section>

            {/* CATEGORIAS */}
            <section
                id="categorias"
                className="scroll-mt-20 px-6 pb-24"
            >
                <div className="mx-auto max-w-7xl">

                    <div className="mb-10 text-center">
                        <h2 className="text-3xl font-extrabold text-yellow-200 sm:text-4xl">
                            Encontre o que você procura
                        </h2>

                        <p className="mx-auto mt-3 max-w-2xl text-amber-100/70">
                            Explore as categorias e veja produtos que podem
                            atender diferentes necessidades da sua prática.
                        </p>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

                        {categorias.map((categoria, index) => (
                            <article
                                key={categoria.nome}
                                className="group flex flex-col rounded-3xl border border-yellow-300/10 bg-white/10 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-yellow-300/30 hover:bg-white/15"
                                style={{
                                    animationDelay: `${index * 0.1}s`,
                                }}
                            >

                                <div className="mb-5 flex items-center gap-4">

                                    <span
                                        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-yellow-400/10 text-3xl transition-transform duration-300 group-hover:scale-110"
                                        aria-hidden="true"
                                    >
                                        {categoria.icone}
                                    </span>

                                    <h3 className="text-xl font-bold text-yellow-100">
                                        {categoria.nome}
                                    </h3>

                                </div>

                                <p className="flex-1 text-sm leading-relaxed text-white/65">
                                    {categoria.descricao}
                                </p>

                                <Link
                                    href={categoria.href}
                                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-yellow-300 px-5 py-3 font-bold text-amber-950 transition-all duration-300 hover:bg-yellow-200"
                                >
                                    Explorar
                                    <span>→</span>
                                </Link>

                            </article>
                        ))}

                    </div>
                </div>
            </section>

            {/* RELAÇÃO COM O APRENDIZADO */}
            <section className="px-6 pb-20">
                <div className="mx-auto max-w-4xl">

                    <div className="rounded-3xl border border-yellow-300/20 bg-yellow-400/10 p-7 text-center sm:p-9">

                        <span className="text-3xl">🎸</span>

                        <h2 className="mt-4 text-2xl font-bold text-yellow-200 sm:text-3xl">
                            Primeiro aprenda. Depois, equipe sua jornada.
                        </h2>

                        <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-amber-100/85">
                            O LearningGuitar existe para ajudar você a entender
                            o violão, praticar e evoluir. Os produtos desta área
                            são apenas recursos complementares para quando você
                            sentir que precisa deles.
                        </p>

                        <Link
                            href="/#start-here"
                            className="mt-7 inline-flex rounded-full bg-yellow-300 px-7 py-3 font-bold text-amber-950 transition-colors duration-300 hover:bg-yellow-200"
                        >
                            🎶 Continuar aprendendo
                        </Link>

                    </div>

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
                        Os preços, condições, disponibilidade e características
                        dos produtos podem mudar. Consulte sempre a página do
                        produto antes de realizar uma compra.
                    </p>

                </div>
            </section>

        </main>
    );
}