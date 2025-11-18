import Image from "next/image";

export const metadata = {
    title: "Capotrastes 🎸 | Loja LearningGuitar",
    description:
        "Capotrastes selecionados para violão e guitarra: praticidade, precisão e conforto. Escolha entre os melhores modelos com envio pela Shopee Brasil.",
    keywords: [
        "capotraste",
        "capo para violão",
        "capo guitar",
        "capotraste profissional",
        "acessórios para violão",
        "LearningGuitar",
        "loja musical",
        "capo guitarra",
        "capo shopee"
    ],
    alternates: {
        canonical: "https://aprenderviolaoonline.com.br/loja-musical/capotrastes",
    },
    openGraph: {
        title: "Capotrastes 🎸 | Loja LearningGuitar",
        description:
            "Escolha entre capotrastes de qualidade selecionados especialmente para músicos. Modelos confiáveis e com envio pela Shopee Brasil.",
        url: "https://aprenderviolaoonline.com.br/loja-musical/capotrastes",
        type: "website",
    },
};

export default function CapotrastesPage() {
    const produtos = [
        {
            nome: "Capotraste Braçadeira para Violão e Guitarra",
            descricao:
                "Capotraste de alta resistência para violão e guitarra — ideal para ajustar o tom.",
            imagem: "/capotraste1.png",
            link: "https://s.shopee.com.br/qbTlIJ6ub",
        },
        {
            nome: "Capotraste com Porta-Palhetas + 5 Palhetas",
            descricao:
                "Versátil e prático — acompanha 5 palhetas e suporte integrado para armazená-las.",
            imagem: "/capotraste2.png",
            link: "https://s.shopee.com.br/7V8Ni9IJVc",
        },
        {
            nome: "Capotraste NV com Porta-Palhetas + 2 Palhetas",
            descricao:
                "Capotraste ergonômico com mola de pressão e porta-palhetas embutido.",
            imagem: "/capotraste3.png",
            link: "https://s.shopee.com.br/8pdlJ1OjXW",
        },
        {
            nome: "Capotraste Capo Braçadeira Guitarra e Violão",
            descricao:
                "Modelo leve e resistente, ideal para violão de aço ou guitarra elétrica.",
            imagem: "/capotraste4.png",
            link: "https://s.shopee.com.br/12MnOh51m",
        },
        {
            nome: "Capotraste Unidão Preto – Guitarras Acústicas e Elétricas",
            descricao:
                "Design profissional com mola reforçada. Excelente durabilidade e acabamento.",
            imagem: "/capotraste5.png",
            link: "https://s.shopee.com.br/AA98uLfqFZ",
        },
    ];

    return (
        <main className="min-h-screen bg-gradient-to-br from-amber-900 via-yellow-900 to-amber-800 text-white">

            {/* 🟨 HERO SPLIT */}
            <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-20 md:py-28 gap-10">

                {/* 🎸 Imagem */}
                <div className="md:w-1/2 flex justify-center animate-fadeSlide">
                    <Image
                        src="/hero-capotraste.png"
                        alt="Capotrastes LearningGuitar"
                        width={480}
                        height={480}
                        className="rounded-2xl shadow-2xl border-4 border-yellow-400/70"
                        priority
                    />
                </div>

                {/* ✨ Texto */}
                <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left animate-fadeSlide">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-yellow-200 drop-shadow-lg mb-4">
                        🎸 Capotrastes
                    </h1>

                    <p className="text-lg sm:text-xl bg-black/30 p-4 rounded-xl shadow-md leading-relaxed mb-6 max-w-lg">
                        Altere o tom do seu violão com facilidade!
                        Selecionamos capotrastes com conforto, praticidade e afinação precisa para qualquer nível de músico.
                    </p>

                    <a
                        href="#produtos-section"
                        className="bg-yellow-300 text-amber-900 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-yellow-400 transition-all duration-300 cursor-pointer"
                    >
                        🎵 Ver Produtos
                    </a>
                </div>
            </section>

            {/* 🎶 Título */}
            <h2
                id="produtos-section"
                className="text-center text-yellow-100 text-3xl sm:text-4xl font-bold drop-shadow-md mb-12 animate-fadeSlide"
            >
                🎶 Produtos em Destaque
            </h2>

            {/* 🪶 Lista de produtos */}
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

            {/* Rodapé */}
            <p className="text-center text-sm text-amber-100 mt-16 italic pb-6 animate-fadeSlide">
                Produtos recomendados por <strong>LearningGuitar 🎸</strong> em parceria com Shopee Brasil.
            </p>
        </main>
    );
}
