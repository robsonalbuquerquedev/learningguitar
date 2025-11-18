import Image from "next/image";

export const metadata = {
    title: "Afinadores 🎵 | Loja Musical LearningGuitar",
    description:
        "Afinadores digitais e práticos para violão e guitarra. Produtos selecionados com qualidade, precisão e segurança via Shopee Brasil.",
    keywords: [
        "afinador de violão",
        "afinador digital",
        "afinador para guitarra",
        "afinador musical",
        "acessórios de violão",
        "produtos musicais",
        "LearningGuitar",
        "Shopee afinadores"
    ],
    alternates: {
        canonical: "https://aprenderviolaoonline.com.br/loja-musical/afinadores"
    },
    openGraph: {
        title: "Afinadores 🎵 | Loja Musical LearningGuitar",
        description:
            "Escolha entre os melhores afinadores para violão e guitarra. Produtos confiáveis com envio pela Shopee Brasil.",
        url: "https://aprenderviolaoonline.com.br/loja-musical/afinadores",
        type: "website",
    }
};

export default function AfinadoresPage() {
    const produtos = [
        {
            nome: "Afinação Eletrônica para Guitarra, Violino e Ukulele",
            descricao: "Afinador eletrônico universal — ideal para violão, baixo, ukulele e violino.",
            imagem: "/afinador1.png",
            link: "https://s.shopee.com.br/6KwQEHPMip",
        },
        {
            nome: "Afinador Digital Cromático 360°",
            descricao: "Clip giratório com alta precisão — perfeito para músicos exigentes.",
            imagem: "/afinador2.png",
            link: "https://s.shopee.com.br/9AGbbu8TZw",
        },
        {
            nome: "Afinador Cromático Clip – Multi-instrumento",
            descricao: "Compatível com violão, guitarra, baixo e ukulele. Prático e leve.",
            imagem: "/afinador3.png",
            link: "https://s.shopee.com.br/AUlzChGz7G",
        },
        {
            nome: "Afinador Clip para Violão e Cavaco",
            descricao: "Design compacto com display nítido. Ideal para uso diário.",
            imagem: "/afinador4.png",
            link: "https://s.shopee.com.br/1VrAUdLSeE",
        },
        {
            nome: "Afinador Miwayer LCD Universal",
            descricao: "Afinador eletrônico com tela LCD — compatível com todos os instrumentos.",
            imagem: "/afinador5.png",
            link: "https://s.shopee.com.br/gI3VLrqBS",
        },
        {
            nome: "Afinador Digital Cromático Clip Premium",
            descricao: "Alta sensibilidade e resposta rápida — indicado para músicos de todos os níveis.",
            imagem: "/afinador6.png",
            link: "https://s.shopee.com.br/8AO4RSqPKz",
        },
    ];

    return (
        <main className="min-h-screen bg-gradient-to-br from-amber-900 via-yellow-900 to-amber-800 text-white">

            {/* 🟨 HERO SPLIT — agora sem motion */}
            <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-20 md:py-28 gap-10">

                {/* 🎸 Imagem do Hero */}
                <div className="md:w-1/2 flex justify-center animate-fadeSlide">
                    <Image
                        src="/hero-afinador.png"
                        alt="Afinadores LearningGuitar"
                        width={480}
                        height={480}
                        className="rounded-2xl shadow-2xl border-4 border-yellow-400/70"
                        priority
                    />
                </div>

                {/* ✨ Texto */}
                <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left animate-fadeSlide">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-yellow-200 drop-shadow-lg mb-4">
                        🎵 Afinadores
                    </h1>

                    <p className="text-lg sm:text-xl bg-black/30 p-4 rounded-xl shadow-md leading-relaxed mb-6 max-w-lg">
                        Escolha o afinador ideal para manter seu violão sempre no tom perfeito.
                        Produtos selecionados com segurança e praticidade via <strong>Shopee Brasil</strong>.
                    </p>

                    {/* Botão — agora com anchor */}
                    <a
                        href="#produtos-section"
                        className="bg-yellow-300 text-amber-900 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-yellow-400 transition-all duration-300 cursor-pointer"
                    >
                        🎸 Ver Produtos
                    </a>
                </div>
            </section>

            {/* 🎶 Título de transição */}
            <h2
                id="produtos-section"
                className="text-center text-yellow-100 text-3xl sm:text-4xl font-bold drop-shadow-md mb-12 animate-fadeSlide"
            >
                🎶 Produtos em Destaque
            </h2>

            {/* 🛒 CARDS DE PRODUTOS */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6 pb-24">
                {produtos.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white/10 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 animate-popIn"
                        style={{ animationDelay: `${index * 0.15}s` }}
                    >
                        <div className="relative w-full h-52 mb-3 bg-black/20 flex items-center justify-center rounded-lg overflow-hidden">
                            <Image
                                src={item.imagem}
                                alt={item.nome}
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                className="object-contain rounded-lg"
                                priority={index === 0}
                            />
                        </div>

                        <h2 className="text-xl font-semibold text-yellow-200 mb-2">
                            {item.nome}
                        </h2>

                        <p className="text-sm mb-4">{item.descricao}</p>

                        <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-yellow-400 text-amber-900 font-bold px-5 py-2 rounded-full hover:bg-yellow-300 transition"
                        >
                            Ver na Shopee
                        </a>
                    </div>
                ))}
            </div>

            {/* 🔖 Rodapé */}
            <p className="text-center text-sm text-amber-100 mt-16 italic pb-6 animate-fadeSlide">
                Produtos recomendados por <strong>LearningGuitar 🎸</strong> em parceria com Shopee Brasil.
            </p>
        </main>
    );
}
