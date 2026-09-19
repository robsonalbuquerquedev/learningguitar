import Image from "next/image";

export const metadata = {
    title: "Camisetas Musicais 👕 | Loja Musical LearningGuitar",
    description:
        "Conheça camisetas musicais inspiradas em bandas, instrumentos, símbolos e diferentes estilos para quem gosta de levar a música também para o seu visual.",
    keywords: [
        "camisetas musicais",
        "camisetas de música",
        "camisetas para músicos",
        "camisetas de bandas",
        "camisetas rock",
        "camisetas de guitarra",
        "roupas para músicos",
        "camisetas personalizadas",
        "LearningGuitar",
        "loja musical",
    ],
    alternates: {
        canonical:
            "https://aprenderviolaoonline.com.br/loja-musical/camisetas-musicais",
    },
    openGraph: {
        title: "Camisetas Musicais 👕 | Loja Musical LearningGuitar",
        description:
            "Conheça camisetas inspiradas em bandas, instrumentos, símbolos e diferentes estilos para quem gosta de levar a música também para o seu visual.",
        url: "https://aprenderviolaoonline.com.br/loja-musical/camisetas-musicais",
        type: "website",
    },
};

export default function CamisetasMusicaisPage() {
    const produtos = [
        {
            nome: "Camiseta Gorillaz Punk Rock Vintage",
            descricao:
                "Blusa musical inspirada na banda Gorillaz, com estilo retrô e visual urbano.",
            imagem: "/camiseta1.png",
            link: "https://s.shopee.com.br/1BEKN9kyfo",
        },
        {
            nome: "Camiseta Clave de Sol – Nota Musical Personalizada",
            descricao:
                "Camiseta com símbolo de clave de sol, ideal para quem gosta de referências musicais no visual.",
            imagem: "/camiseta2.png",
            link: "https://s.shopee.com.br/9fCsV0HlLU",
        },
        {
            nome: "Camiseta Lady Gaga Mayhem Streetwear",
            descricao:
                "Modelo oversized inspirado na estética musical contemporânea de Lady Gaga.",
            imagem: "/camiseta3.png",
            link: "https://s.shopee.com.br/3LIoxbmwc8",
        },
        {
            nome: "Camiseta Melanie Martinez Portals Pop",
            descricao:
                "T-shirt unissex inspirada no álbum Portals, com proposta visual artística e pop alternativo.",
            imagem: "/camiseta4.png",
            link: "https://s.shopee.com.br/2qMYMydFIX",
        },
        {
            nome: "Camiseta Retrô 3D Notas Musicais",
            descricao:
                "Design criativo com notas musicais em estilo 3D para quem procura uma estampa diferente.",
            imagem: "/camiseta5.png",
            link: "https://s.shopee.com.br/7KoxjWsmBg",
        },
        // {
        //     nome: "Camiseta Estampa Guitarra – Preto e Branco",
        //     descricao:
        //         "Modelo casual com estampa de guitarra, tecido leve e visual versátil para o dia a dia.",
        //     imagem: "/camiseta6.png",
        //     link: "https://s.shopee.com.br/6VFqkGxshE",
        // },
    ];

    return (
        <main className="min-h-screen bg-gradient-to-br from-amber-900 via-yellow-900 to-amber-800 text-white">
            {/* Hero */}
            <section className="px-6 py-20 md:px-16 md:py-28">
                <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
                    <div className="flex justify-center">
                        <Image
                            src="/hero-camiseta.png"
                            alt="Camisetas musicais"
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
                            Camisetas Musicais 👕
                        </h1>

                        <p className="mb-5 max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl">
                            Vista sua paixão pela música com camisetas
                            inspiradas em bandas, instrumentos, símbolos
                            musicais e diferentes estilos.
                        </p>

                        <p className="mb-8 max-w-2xl text-base leading-relaxed text-white/60">
                            Antes de escolher um modelo, vale conhecer os
                            diferentes estilos e observar alguns detalhes que
                            podem fazer diferença na hora da compra.
                        </p>

                        <a
                            href="#entenda"
                            className="inline-flex items-center gap-2 rounded-full bg-yellow-300 px-6 py-3 font-semibold text-amber-900 shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-400 hover:shadow-lg"
                        >
                            Conhecer os estilos
                            <span aria-hidden="true">↓</span>
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
                            O que torna uma camiseta musical?
                        </h2>

                        <p className="mx-auto max-w-3xl text-lg leading-relaxed text-white/70">
                            Uma camiseta musical pode trazer referências a
                            bandas, artistas, instrumentos, símbolos ou outros
                            elementos ligados à cultura musical.
                        </p>
                    </div>

                    <div className="rounded-3xl border border-yellow-300/15 bg-black/20 p-7 shadow-xl md:p-10">
                        <h3 className="mb-4 text-xl font-bold text-yellow-100">
                            Música também pode fazer parte do seu estilo
                        </h3>

                        <p className="leading-relaxed text-white/65">
                            Assim como um instrumento ou acessório pode
                            representar aquilo que você gosta de tocar, uma
                            camiseta pode carregar referências aos artistas,
                            gêneros e elementos musicais que fazem parte da
                            sua relação com a música.
                        </p>
                    </div>
                </div>
            </section>

            {/* Estilos */}
            <section className="px-6 py-20 md:px-16 md:py-24">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-12 text-center">
                        <span className="mb-3 block text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300">
                            Na prática
                        </span>

                        <h2 className="mb-5 text-3xl font-extrabold text-yellow-100 sm:text-4xl">
                            Diferentes formas de expressar seu gosto musical
                        </h2>

                        <p className="mx-auto max-w-3xl text-lg leading-relaxed text-white/65">
                            As estampas podem seguir propostas diferentes,
                            permitindo que você escolha uma referência que
                            combine com seu gosto e personalidade.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-3">
                        <div className="rounded-2xl border border-yellow-200/10 bg-black/15 p-6">
                            <div
                                className="mb-4 text-3xl"
                                aria-hidden="true"
                            >
                                🎤
                            </div>

                            <h3 className="mb-3 text-xl font-bold text-yellow-100">
                                Bandas e artistas
                            </h3>

                            <p className="text-sm leading-relaxed text-white/60">
                                Estampas inspiradas em bandas, cantores e
                                diferentes momentos da história da música.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-yellow-200/10 bg-black/15 p-6">
                            <div
                                className="mb-4 text-3xl"
                                aria-hidden="true"
                            >
                                🎸
                            </div>

                            <h3 className="mb-3 text-xl font-bold text-yellow-100">
                                Instrumentos
                            </h3>

                            <p className="text-sm leading-relaxed text-white/60">
                                Guitarras, violões, notas e outros elementos
                                ligados ao universo dos instrumentos musicais.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-yellow-200/10 bg-black/15 p-6">
                            <div
                                className="mb-4 text-3xl"
                                aria-hidden="true"
                            >
                                🎵
                            </div>

                            <h3 className="mb-3 text-xl font-bold text-yellow-100">
                                Símbolos musicais
                            </h3>

                            <p className="text-sm leading-relaxed text-white/60">
                                Claves, notas e outros símbolos que transformam
                                elementos da linguagem musical em referências
                                visuais.
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
                            O que observar em uma camiseta?
                        </h2>

                        <p className="mx-auto max-w-3xl text-lg leading-relaxed text-white/65">
                            Além da estampa, alguns detalhes podem ajudar na
                            escolha de uma peça para o seu estilo e uso no
                            dia a dia.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-3">
                        <div className="rounded-2xl border border-yellow-200/10 bg-amber-900/20 p-6">
                            <h3 className="mb-3 text-xl font-bold text-yellow-100">
                                Estampa
                            </h3>

                            <p className="text-sm leading-relaxed text-white/60">
                                Observe o tema, a arte e os elementos presentes
                                na estampa para encontrar uma referência que
                                combine com seu gosto musical.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-yellow-200/10 bg-amber-900/20 p-6">
                            <h3 className="mb-3 text-xl font-bold text-yellow-100">
                                Tamanho e modelagem
                            </h3>

                            <p className="text-sm leading-relaxed text-white/60">
                                Confira a tabela de medidas e a modelagem
                                informada pelo vendedor antes de realizar
                                a compra.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-yellow-200/10 bg-amber-900/20 p-6">
                            <h3 className="mb-3 text-xl font-bold text-yellow-100">
                                Material
                            </h3>

                            <p className="text-sm leading-relaxed text-white/60">
                                Verifique o tecido, as informações de
                                fabricação e os cuidados indicados para
                                a peça.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contexto de compra */}
            <section className="px-6 py-16 md:px-16 md:py-20">
                <div className="mx-auto max-w-4xl rounded-3xl border border-yellow-300/15 bg-black/15 p-8 text-center shadow-xl md:p-12">
                    <span className="mb-3 block text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300">
                        Antes de comprar
                    </span>

                    <h2 className="mb-5 text-3xl font-extrabold text-yellow-100">
                        Escolha uma camiseta que tenha a ver com você
                    </h2>

                    <p className="mx-auto max-w-2xl leading-relaxed text-white/65">
                        Uma camiseta musical pode ser escolhida pela banda que
                        você gosta, pelo instrumento que toca, por uma
                        referência visual ou simplesmente porque você gostou
                        da estampa. O mais importante é encontrar uma peça
                        que faça sentido para o seu estilo.
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
                            Camisetas para conhecer
                        </h2>

                        <p className="mx-auto max-w-3xl text-white/60">
                            Abaixo estão algumas opções encontradas na loja
                            parceira. Confira a estampa, as medidas, o material
                            e os detalhes informados pelo vendedor antes de
                            realizar a compra.
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
                        A música também faz parte do seu estilo
                    </h2>

                    <p className="mx-auto mb-8 max-w-2xl leading-relaxed text-white/65">
                        Aprender a tocar é apenas uma parte da experiência
                        musical. Instrumentos, acessórios, referências e
                        diferentes formas de expressão também fazem parte desse
                        universo.
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