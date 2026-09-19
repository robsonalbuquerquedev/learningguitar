import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "Palhetas para Violão 🎶 | Loja Musical LearningGuitar",
    description:
        "Entenda como as palhetas funcionam, conheça diferenças de espessura e encontre opções para complementar sua prática no violão e em outros instrumentos.",
    keywords: [
        "palhetas",
        "palheta para violão",
        "palheta para guitarra",
        "espessura de palheta",
        "como escolher palheta",
        "acessórios para violão",
        "acessórios musicais",
        "LearningGuitar",
    ],
    alternates: {
        canonical:
            "https://aprenderviolaoonline.com.br/loja-musical/palhetas",
    },
    openGraph: {
        title: "Palhetas para Violão 🎶 | Loja Musical LearningGuitar",
        description:
            "Conheça as diferenças entre palhetas e encontre opções para complementar sua prática musical.",
        url: "https://aprenderviolaoonline.com.br/loja-musical/palhetas",
        type: "website",
    },
};

const produtos = [
    // {
    //     nome: "Kit Palhetas Celuloide",
    //     descricao:
    //         "Conjunto de palhetas de celuloide acompanhado de capotraste e estojo.",
    //     imagem: "/palheta1.png",
    //     link: "https://s.shopee.com.br/60Ja1brICE",
    // },
    {
        nome: "Kit 4 Palhetas Fender",
        descricao:
            "Kit com quatro palhetas Fender apresentadas em diferentes espessuras.",
        imagem: "/palheta2.png",
        link: "https://s.shopee.com.br/AKSZCET27E",
    },
    {
        nome: "Kit 5 Palhetas + Porta Palheta",
        descricao:
            "Conjunto com cinco palhetas e um acessório para armazená-las.",
        imagem: "/palheta3.png",
        link: "https://s.shopee.com.br/gI3grc8V3",
    },
    {
        nome: "Porta Palhetas + 6 Palhetas",
        descricao:
            "Conjunto com porta-palhetas e seis palhetas para manter diferentes opções organizadas.",
        imagem: "/palheta4.png",
        link: "https://s.shopee.com.br/9Ka21ADWGl",
    },
    {
        nome: "Suporte Porta Palhetas",
        descricao:
            "Suporte adesivo para guardar palhetas e deixá-las acessíveis durante a prática.",
        imagem: "/palheta5.png",
        link: "https://s.shopee.com.br/8AO4dI6cq4",
    },
    {
        nome: "Kit 50 Palhetas com Estojo",
        descricao:
            "Kit com 50 palhetas acompanhado de estojo para armazenamento.",
        imagem: "/palheta6.png",
        link: "https://s.shopee.com.br/12MvPZpxa",
    },
    {
        nome: "Chaveiro + Palheta Fender",
        descricao:
            "Conjunto que combina uma palheta Fender com acessórios para transporte e armazenamento.",
        imagem: "/palheta7.png",
        link: "https://s.shopee.com.br/4VUmJCc03S",
    },
    {
        nome: "Porta Palhetas + 2 Palhetas",
        descricao:
            "Porta-palhetas compacto acompanhado de duas palhetas.",
        imagem: "/palheta8.png",
        link: "https://s.shopee.com.br/30fyXB33rh",
    },
    {
        nome: "Porta Palhetas + Palheta VIP",
        descricao:
            "Conjunto com porta-palhetas e uma palheta inclusa.",
        imagem: "/palheta9.png",
        link: "https://s.shopee.com.br/3qF5X4zSyR",
    },
];

export default function PalhetasPage() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-amber-950 via-yellow-950 to-amber-900 text-white">

            {/* HERO */}
            <section className="px-6 pt-16 pb-20 md:px-16 md:pt-24 md:pb-28">
                <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

                    {/* IMAGEM */}
                    <div className="flex justify-center animate-fadeSlide">
                        <Image
                            src="/hero-palheta.png"
                            alt="Palhetas para instrumentos musicais"
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
                            Palhetas 🎶
                        </h1>

                        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-amber-100/90 sm:text-xl">
                            A palheta é um acessório simples, mas pode mudar
                            a forma como você ataca as cordas e percebe a
                            execução de determinadas técnicas.
                        </p>

                        <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/60">
                            Conheça algumas diferenças entre as palhetas e
                            depois explore as opções disponíveis para encontrar
                            um modelo que faça sentido para sua prática.
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

            {/* PALHETA E APRENDIZADO */}
            <section className="px-6 pb-16">
                <div className="mx-auto max-w-4xl">

                    <div className="rounded-3xl border border-yellow-300/10 bg-black/20 p-7 shadow-xl sm:p-9">

                        <h2 className="text-2xl font-bold text-yellow-200 sm:text-3xl">
                            Preciso usar uma palheta para aprender violão?
                        </h2>

                        <p className="mt-4 leading-relaxed text-amber-100/85">
                            Não. Existem diferentes formas de tocar violão,
                            incluindo técnicas que utilizam os dedos. A
                            palheta é uma ferramenta que pode ser útil em
                            determinados estilos, músicas e formas de execução.
                        </p>

                        <p className="mt-4 leading-relaxed text-amber-100/85">
                            Para quem está começando, vale experimentar e
                            descobrir qual maneira de tocar proporciona mais
                            controle e conforto. Não existe uma única forma
                            obrigatória de utilizar o instrumento.
                        </p>

                        <Link
                            href="/#beginner-path"
                            className="mt-6 inline-flex text-sm font-semibold text-yellow-300 underline decoration-yellow-300/30 underline-offset-4 hover:text-yellow-200"
                        >
                            Conhecer a jornada para iniciantes →
                        </Link>

                    </div>

                </div>
            </section>

            {/* ESPESSURA */}
            <section className="px-6 pb-20">
                <div className="mx-auto max-w-6xl">

                    <div className="mb-10 text-center">
                        <h2 className="text-3xl font-extrabold text-yellow-200 sm:text-4xl">
                            O que observar em uma palheta?
                        </h2>

                        <p className="mx-auto mt-3 max-w-2xl text-amber-100/70">
                            Formato, material e espessura são alguns dos
                            detalhes que podem variar entre os modelos.
                        </p>
                    </div>

                    <div className="grid gap-5 md:grid-cols-3">

                        <article className="rounded-2xl border border-yellow-300/10 bg-white/10 p-6">

                            <span className="text-3xl">📏</span>

                            <h3 className="mt-4 text-xl font-bold text-yellow-100">
                                Espessura
                            </h3>

                            <p className="mt-3 text-sm leading-relaxed text-white/65">
                                Palhetas podem ter diferentes espessuras.
                                Modelos mais finos costumam oferecer uma
                                sensação diferente durante o ataque das
                                cordas em comparação com modelos mais rígidos.
                            </p>

                        </article>

                        <article className="rounded-2xl border border-yellow-300/10 bg-white/10 p-6">

                            <span className="text-3xl">✋</span>

                            <h3 className="mt-4 text-xl font-bold text-yellow-100">
                                Pegada
                            </h3>

                            <p className="mt-3 text-sm leading-relaxed text-white/65">
                                O formato e a superfície podem influenciar a
                                sensação de segurança ao segurar a palheta
                                durante a execução.
                            </p>

                        </article>

                        <article className="rounded-2xl border border-yellow-300/10 bg-white/10 p-6">

                            <span className="text-3xl">🎵</span>

                            <h3 className="mt-4 text-xl font-bold text-yellow-100">
                                Forma de tocar
                            </h3>

                            <p className="mt-3 text-sm leading-relaxed text-white/65">
                                A escolha também pode depender da técnica que
                                você está praticando, como batidas, dedilhados
                                adaptados para palheta ou solos.
                            </p>

                        </article>

                    </div>
                </div>
            </section>

            {/* EXPERIMENTAÇÃO */}
            <section className="px-6 pb-20">
                <div className="mx-auto max-w-4xl">

                    <div className="rounded-3xl border border-yellow-300/20 bg-yellow-400/10 p-7 sm:p-9">

                        <h2 className="text-2xl font-bold text-yellow-200 sm:text-3xl">
                            Está começando? Experimente antes de decidir.
                        </h2>

                        <p className="mt-4 leading-relaxed text-amber-100/85">
                            Se você ainda não sabe qual espessura ou formato
                            prefere, não precisa começar comprando um kit
                            grande. Testar modelos diferentes pode ajudar a
                            perceber quais características combinam melhor com
                            sua maneira de tocar.
                        </p>

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
                            Opções de palhetas
                        </h2>

                        <p className="mx-auto mt-3 max-w-2xl text-amber-100/70">
                            Confira os modelos disponíveis e observe suas
                            características antes de escolher.
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
                        A palheta é apenas uma ferramenta
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-amber-100/85">
                        Você não precisa ter vários modelos para aprender
                        violão. Escolha uma opção que faça sentido para sua
                        prática e concentre sua energia no que realmente
                        desenvolve sua habilidade: tocar.
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
