import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "Sobre o Aprender Violão Online | LearningGuitar",
    },
    description:
        "Conheça a história do Aprender Violão Online, um projeto criado a partir da experiência de um estudante de violão que decidiu reunir conhecimentos, conceitos e caminhos de aprendizado em um só lugar.",
    keywords: [
        "Aprender Violão Online",
        "LearningGuitar",
        "sobre o site",
        "aprender violão",
        "violão para iniciantes",
        "trilha de aprendizado de violão",
        "estudo de violão",
        "Robson Albuquerque",
        "teoria musical",
        "aprendizado de violão",
    ],
    alternates: {
        canonical: "https://aprenderviolaoonline.com.br/sobre",
    },
    openGraph: {
        title: "Sobre o Aprender Violão Online | LearningGuitar",
        description:
            "Conheça a história por trás do Aprender Violão Online e descubra como uma necessidade de estudo se transformou em uma plataforma de aprendizado de violão.",
        url: "https://aprenderviolaoonline.com.br/sobre",
        siteName: "LearningGuitar",
        images: [
            {
                url: "https://aprenderviolaoonline.com.br/og-sobre.png",
                width: 1200,
                height: 630,
                alt: "Sobre o Aprender Violão Online",
            },
        ],
        locale: "pt_BR",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Sobre o Aprender Violão Online | LearningGuitar",
        description:
            "Conheça a história do projeto criado para transformar pesquisas repetitivas em um caminho de aprendizado de violão mais organizado.",
        images: ["https://aprenderviolaoonline.com.br/og-sobre.png"],
    },
};

type Projeto = {
    nome: string;
    descricao: string;
    link: string;
    tecnologias?: string[];
};

const projetos: Projeto[] = [
    {
        nome: "CantosJSM",
        descricao:
            "Plataforma moderna e organizada para consultar cantos litúrgicos com rapidez e simplicidade.",
        link: "https://cantosjsm.com.br/",
        tecnologias: [
            "Next.js",
            "Tailwind CSS",
            "React",
            "TypeScript",
        ],
    },
    {
        nome: "Windly",
        descricao:
            "Plataforma educacional focada em desenvolvimento web, Tailwind CSS, Next.js, SEO e HTML semântico.",
        link: "https://windly.com.br/",
        tecnologias: [
            "Next.js",
            "Tailwind CSS",
            "React",
            "TypeScript",
        ],
    },
    {
        nome: "ArtevivaQ",
        descricao:
            "Portal de expressão artística e visual voltado para design, criatividade e cultura digital.",
        link: "https://artevivaq.vercel.app/",
        tecnologias: [
            "Next.js",
            "Tailwind CSS",
            "React",
            "TypeScript",
        ],
    },
    {
        nome: "Portfólio Robson Dev",
        descricao:
            "Meu portfólio pessoal, reunindo projetos, estudos e experiências contínuas em desenvolvimento.",
        link: "https://robson-next-portfolio.vercel.app/",
        tecnologias: [
            "Next.js",
            "Tailwind CSS",
            "React",
            "TypeScript",
        ],
    },
    {
        nome: "Learning Basic Computing",
        descricao:
            "Ambiente de estudos com conteúdos básicos de informática para iniciantes e estudantes.",
        link: "https://learningbasiccomputing.vercel.app/",
        tecnologias: [
            "Next.js",
            "Tailwind CSS",
            "React",
            "TypeScript",
        ],
    },
    {
        nome: "DevShowcase",
        descricao:
            "Showcase de projetos e estudos relacionados ao desenvolvimento web.",
        link: "https://devshowcase-bice.vercel.app/",
        tecnologias: [
            "HTML",
            "CSS",
            "Sass",
            "JavaScript",
        ],
    },
];

export default function SobrePage() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-yellow-50 text-stone-800">

            {/* =====================================================
                HERO
            ====================================================== */}
            <section className="relative overflow-hidden border-b border-amber-200/60">
                <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 sm:px-8 md:py-28 lg:grid-cols-[1.05fr_0.95fr] lg:px-12">

                    {/* Texto */}
                    <div className="order-2 lg:order-1">
                        <span className="mb-5 inline-flex rounded-full border border-amber-300 bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-800">
                            🎸 Sobre o projeto
                        </span>

                        <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-amber-950 sm:text-5xl lg:text-6xl">
                            Mais do que aprender acordes.
                            <span className="mt-2 block text-amber-600">
                                Aprender a entender o violão.
                            </span>
                        </h1>

                        <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600 sm:text-xl">
                            O Aprender Violão Online nasceu de uma
                            necessidade real: encontrar uma forma mais
                            simples de organizar aquilo que eu mesmo
                            precisava estudar para evoluir no violão.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3">
                            <Link
                                href="/#start-here"
                                className="inline-flex min-h-12 items-center justify-center rounded-full bg-amber-600 px-6 py-3 font-bold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-amber-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                            >
                                Começar minha jornada 🎸
                            </Link>

                            <Link
                                href="#historia"
                                className="inline-flex min-h-12 items-center justify-center rounded-full border border-amber-300 bg-white px-6 py-3 font-semibold text-amber-800 transition-colors hover:bg-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                            >
                                Conhecer a história
                            </Link>
                        </div>
                    </div>

                    {/* Imagem */}
                    <div className="order-1 flex justify-center lg:order-2">
                        <div className="relative">
                            <div className="absolute -inset-4 rounded-[2rem] bg-amber-200/50 blur-2xl" />

                            <Image
                                src="/hero-sobre.png"
                                alt="Robson Albuquerque, criador do Aprender Violão Online"
                                width={480}
                                height={480}
                                priority
                                className="relative w-full max-w-md rounded-[2rem] border border-amber-200 bg-white object-cover shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* =====================================================
                HISTÓRIA
            ====================================================== */}
            <section
                id="historia"
                className="mx-auto max-w-5xl px-6 py-20 sm:px-8 md:py-24"
            >
                <div className="mx-auto max-w-3xl text-center">
                    <span className="text-sm font-bold uppercase tracking-[0.18em] text-amber-600">
                        A origem
                    </span>

                    <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-amber-950 sm:text-4xl">
                        O site nasceu dos meus próprios estudos
                    </h2>
                </div>

                <div className="mt-10 space-y-6 text-lg leading-8 text-stone-600">
                    <p>
                        Aprender violão envolve encontrar acordes,
                        entender conceitos, descobrir novas formas de
                        tocar e, principalmente, revisar aquilo que já
                        foi estudado.
                    </p>

                    <p>
                        Durante meus próprios estudos, percebi que
                        frequentemente precisava voltar para a internet
                        para pesquisar novamente conceitos que já havia
                        estudado. Uma vez era um acorde. Depois, uma
                        progressão. Em outro momento, uma escala ou
                        alguma explicação de harmonia.
                    </p>

                    <p>
                        Aos poucos, percebi que o problema não era apenas
                        encontrar informação. Era ter que <strong className="font-bold text-stone-800">
                            procurar a mesma informação repetidas vezes
                        </strong>, em lugares diferentes, sem necessariamente
                        encontrar uma conexão clara entre os assuntos.
                    </p>

                    <div className="my-10 rounded-3xl border border-amber-200 bg-amber-50 p-6 shadow-sm sm:p-8">
                        <p className="text-center text-xl font-bold leading-8 text-amber-950 sm:text-2xl">
                            Se esse conteúdo é útil para mim durante o
                            aprendizado, talvez também possa ser útil para
                            outras pessoas que estão começando.
                        </p>
                    </div>

                    <p>
                        Foi assim que comecei a juntar as peças, como quem
                        monta um quebra-cabeça. Cada conceito passou a
                        representar uma peça. Aos poucos, essas peças
                        foram sendo organizadas e conectadas em um só
                        lugar.
                    </p>

                    <p>
                        Dessa ideia surgiu o{" "}
                        <strong className="font-bold text-amber-700">
                            Aprender Violão Online
                        </strong>
                        .
                    </p>
                </div>
            </section>

            {/* =====================================================
                PROPÓSITO
            ====================================================== */}
            <section className="border-y border-amber-200/60 bg-white">
                <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 md:py-24 lg:px-12">

                    <div className="mx-auto max-w-3xl text-center">
                        <span className="text-sm font-bold uppercase tracking-[0.18em] text-amber-600">
                            Nosso propósito
                        </span>

                        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-amber-950 sm:text-4xl">
                            Uma trilha, não uma coleção de páginas
                        </h2>

                        <p className="mt-5 text-lg leading-8 text-stone-600">
                            O objetivo não é simplesmente reunir o máximo
                            de conteúdo possível. É fazer com que os
                            conteúdos façam sentido juntos.
                        </p>
                    </div>

                    <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

                        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
                            <span className="text-3xl">🧩</span>

                            <h3 className="mt-4 text-lg font-bold text-amber-950">
                                Conectar
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-stone-600">
                                Mostrar como um conceito se relaciona
                                com outro.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
                            <span className="text-3xl">🧭</span>

                            <h3 className="mt-4 text-lg font-bold text-amber-950">
                                Orientar
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-stone-600">
                                Ajudar o estudante a entender qual pode
                                ser seu próximo passo.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
                            <span className="text-3xl">📚</span>

                            <h3 className="mt-4 text-lg font-bold text-amber-950">
                                Organizar
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-stone-600">
                                Reunir conhecimentos que normalmente
                                ficam espalhados.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
                            <span className="text-3xl">🎸</span>

                            <h3 className="mt-4 text-lg font-bold text-amber-950">
                                Praticar
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-stone-600">
                                Transformar conhecimento em algo que
                                possa ser aplicado no instrumento.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* =====================================================
                TRILHA
            ====================================================== */}
            <section className="mx-auto max-w-6xl px-6 py-20 sm:px-8 md:py-24">

                <div className="mx-auto max-w-3xl text-center">
                    <span className="text-sm font-bold uppercase tracking-[0.18em] text-amber-600">
                        Como pensamos o aprendizado
                    </span>

                    <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-amber-950 sm:text-4xl">
                        As peças começam a se encaixar
                    </h2>

                    <p className="mt-5 text-lg leading-8 text-stone-600">
                        O aprendizado pode começar por diferentes pontos,
                        mas os conhecimentos ficam mais úteis quando
                        conseguimos perceber suas conexões.
                    </p>
                </div>

                <div className="mt-14 grid gap-4 md:grid-cols-5">
                    {[
                        {
                            number: "01",
                            title: "Fundamentos",
                            text: "Construir uma base sólida.",
                        },
                        {
                            number: "02",
                            title: "Harmonia",
                            text: "Entender como os acordes se relacionam.",
                        },
                        {
                            number: "03",
                            title: "Notas e braço",
                            text: "Conhecer melhor o instrumento.",
                        },
                        {
                            number: "04",
                            title: "Técnica",
                            text: "Desenvolver controle e prática.",
                        },
                        {
                            number: "05",
                            title: "Aplicação",
                            text: "Levar o conhecimento para a música.",
                        },
                    ].map((item) => (
                        <div
                            key={item.number}
                            className="relative rounded-2xl border border-amber-200 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md"
                        >
                            <span className="text-sm font-extrabold text-amber-500">
                                {item.number}
                            </span>

                            <h3 className="mt-3 text-lg font-bold text-amber-950">
                                {item.title}
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-stone-600">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* =====================================================
                SOBRE O CRIADOR
            ====================================================== */}
            <section className="border-y border-amber-200/60 bg-gradient-to-br from-amber-950 via-amber-900 to-stone-900 text-white">
                <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 sm:px-8 md:py-24 lg:grid-cols-[0.8fr_1.2fr]">

                    <div className="flex justify-center">
                        <Image
                            src="/hero-sobre.png"
                            alt="Robson Albuquerque"
                            width={360}
                            height={360}
                            className="rounded-3xl border border-yellow-300/30 shadow-2xl"
                        />
                    </div>

                    <div>
                        <span className="text-sm font-bold uppercase tracking-[0.18em] text-yellow-300">
                            Por trás do projeto
                        </span>

                        <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
                            Quem está construindo tudo isso?
                        </h2>

                        <div className="mt-6 space-y-5 text-base leading-7 text-amber-100/80 sm:text-lg">
                            <p>
                                Sou{" "}
                                <strong className="text-white">
                                    Robson Albuquerque
                                </strong>
                                , formado em Análise e Desenvolvimento de
                                Sistemas e apaixonado por tecnologia,
                                música e aprendizado contínuo.
                            </p>

                            <p>
                                O Aprender Violão Online surgiu justamente
                                do encontro dessas duas áreas. Enquanto
                                estudava violão, comecei a perceber uma
                                necessidade que também poderia existir
                                para outras pessoas: ter um lugar onde
                                conceitos importantes pudessem ser
                                encontrados, revisados e conectados.
                            </p>

                            <p>
                                Como desenvolvedor, transformei essa
                                necessidade em um projeto digital que
                                pudesse crescer junto com meus próprios
                                estudos e, ao mesmo tempo, ajudar outros
                                estudantes.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* =====================================================
                TECNOLOGIA + MÚSICA
            ====================================================== */}
            <section className="mx-auto max-w-5xl px-6 py-20 sm:px-8 md:py-24">

                <div className="text-center">
                    <span className="text-4xl">🎸 + 💻</span>

                    <h2 className="mt-5 text-3xl font-extrabold text-amber-950 sm:text-4xl">
                        Música e tecnologia no mesmo projeto
                    </h2>

                    <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-stone-600">
                        A tecnologia é a ferramenta. O aprendizado é o
                        propósito.
                    </p>
                </div>

                <div className="mx-auto mt-10 max-w-3xl space-y-5 text-lg leading-8 text-stone-600">
                    <p>
                        O site é desenvolvido pensando não apenas em
                        apresentar conteúdo, mas em proporcionar uma
                        experiência de aprendizado agradável, rápida,
                        acessível e organizada.
                    </p>

                    <p>
                        Por isso, desenvolvimento, design, desempenho,
                        acessibilidade, SEO e organização editorial fazem
                        parte do mesmo processo.
                    </p>
                </div>
            </section>

            {/* =====================================================
                OUTROS PROJETOS
            ====================================================== */}
            <section className="border-t border-amber-200/60 bg-white">
                <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 md:py-24 lg:px-12">

                    <div className="mx-auto max-w-3xl text-center">
                        <span className="text-sm font-bold uppercase tracking-[0.18em] text-amber-600">
                            Além do LearningGuitar
                        </span>

                        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-amber-950 sm:text-4xl">
                            Outros projetos
                        </h2>

                        <p className="mt-5 text-lg leading-8 text-stone-600">
                            O LearningGuitar faz parte de uma trajetória
                            contínua de projetos envolvendo tecnologia,
                            educação, música, design e experiências
                            digitais.
                        </p>
                    </div>

                    <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {projetos.map((projeto) => (
                            <a
                                key={projeto.nome}
                                href={projeto.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex flex-col rounded-2xl border border-stone-200 bg-stone-50 p-6 transition-all duration-200 hover:-translate-y-1 hover:border-amber-300 hover:bg-amber-50 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                            >
                                <h3 className="text-lg font-bold text-amber-950 transition-colors group-hover:text-amber-700">
                                    {projeto.nome}
                                </h3>

                                <p className="mt-3 flex-1 text-sm leading-6 text-stone-600">
                                    {projeto.descricao}
                                </p>

                                {projeto.tecnologias && (
                                    <div className="mt-5 flex flex-wrap gap-2">
                                        {projeto.tecnologias.map(
                                            (tech) => (
                                                <span
                                                    key={tech}
                                                    className="rounded-full bg-amber-100 px-2.5 py-1 text-xs font-semibold text-amber-800"
                                                >
                                                    {tech}
                                                </span>
                                            )
                                        )}
                                    </div>
                                )}

                                <span className="mt-6 text-sm font-bold text-amber-700">
                                    Visitar projeto →
                                </span>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* =====================================================
                CTA FINAL
            ====================================================== */}
            <section className="bg-gradient-to-r from-amber-600 to-yellow-500">
                <div className="mx-auto max-w-4xl px-6 py-16 text-center sm:px-8 md:py-20">

                    <span className="text-4xl">🎸</span>

                    <h2 className="mt-5 text-3xl font-extrabold text-white sm:text-4xl">
                        Agora é a sua vez de começar
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-lg leading-7 text-amber-950/80">
                        Explore a trilha, encontre o ponto em que você
                        está e descubra qual pode ser o próximo passo da
                        sua jornada no violão.
                    </p>

                    <Link
                        href="/#start-here"
                        className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-amber-950 px-7 py-3 font-bold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-stone-900 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-amber-950 focus:ring-offset-2 focus:ring-offset-yellow-500"
                    >
                        Começar a aprender 🎸
                    </Link>
                </div>
            </section>
        </main>
    );
}