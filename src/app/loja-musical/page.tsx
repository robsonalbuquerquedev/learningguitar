import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "Loja Musical 🎸 | LearningGuitar",
    description:
        "Acessórios e produtos musicais selecionados pelo LearningGuitar. Encontre capotrastes, palhetas, afinadores, camisetas musicais e muito mais. Qualidade e segurança em parceria com Shopee Brasil.",
    alternates: {
        canonical: "https://aprenderviolaoonline.com.br/loja-musical"
    },
    keywords: [
        "loja musical",
        "acessórios de violão",
        "produtos musicais",
        "capotraste",
        "palhetas",
        "afinadores",
        "camisetas musicais",
        "LearningGuitar",
        "acessórios para músicos",
        "Shopee instrumentos"
    ],
    openGraph: {
        title: "Loja Musical 🎸 | LearningGuitar",
        description:
            "Produtos musicais selecionados: palhetas, capotrastes, camisetas, afinadores e muito mais. Qualidade garantida com curadoria LearningGuitar.",
        url: "https://aprenderviolaoonline.com.br/loja-musical",
        type: "website",
    }
};

// 🔸 Categorias disponíveis (iguais ao seu código original)
const categorias = [
    {
        nome: "Afinadores",
        descricao: "Afinadores digitais precisos para violão e guitarra.",
        href: "/loja-musical/afinadores",
        icone: "🎼",
    },
    {
        nome: "Palhetas",
        descricao: "Diversos modelos com diferentes espessuras.",
        href: "/loja-musical/palhetas",
        icone: "🎵",
    },
    {
        nome: "Capotrastes",
        descricao: "Capotrastes de alta qualidade e fácil uso.",
        href: "/loja-musical/capotrastes",
        icone: "🎶",
    },
    {
        nome: "Camisetas",
        descricao: "Estilosas e confortáveis para músicos.",
        href: "/loja-musical/camisetas-musicais",
        icone: "👕",
    },
];

export default function LojaMusicalPage() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-amber-900 via-yellow-900 to-amber-800 text-white">

            {/* 🟨 HERO SPLIT — versão totalmente server-side */}
            <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-20 md:py-28 gap-10">

                {/* 🎸 Imagem principal */}
                <div className="md:w-1/2 flex justify-center animate-fadeSlide">
                    <Image
                        src="/hero-loja.png"
                        alt="Loja Musical LearningGuitar"
                        width={480}
                        height={480}
                        className="rounded-2xl shadow-2xl border-4 border-yellow-400/70"
                        priority
                    />
                </div>

                {/* ✨ Texto + botão */}
                <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left animate-fadeSlide">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-yellow-200 drop-shadow-lg mb-4">
                        Loja Musical 🎸
                    </h1>

                    <p className="text-lg sm:text-xl bg-black/30 p-4 rounded-xl shadow-md leading-relaxed mb-6 max-w-lg">
                        Encontre os melhores acessórios e produtos musicais selecionados com carinho por{" "}
                        <strong>LearningGuitar 🎶</strong>.
                        Qualidade, praticidade e segurança em parceria com{" "}
                        <strong>Shopee Brasil</strong>.
                    </p>

                    {/* 🔗 Botão para rolar até os cards sem client-side */}
                    <a
                        href="#cards-section"
                        className="bg-yellow-300 text-amber-900 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-yellow-400 transition-all duration-300 cursor-pointer"
                    >
                        🎵 Ver Produtos
                    </a>
                </div>
            </section>

            {/* 🎶 TÍTULO DE TRANSIÇÃO */}
            <h2
                id="cards-section"
                className="text-center text-yellow-100 text-3xl sm:text-4xl font-bold drop-shadow-md mb-12 animate-fadeSlide"
            >
                🎶 Categorias em Destaque
            </h2>

            {/* 🎵 GRID DE CATEGORIAS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-6 pb-24">
                {categorias.map((cat, index) => (
                    <div
                        key={index}
                        className="bg-white/10 backdrop-blur-sm border border-yellow-400/10 p-6 rounded-2xl shadow-lg hover:scale-105 hover:shadow-yellow-200/10 transition-transform duration-300 animate-popIn"
                        style={{ animationDelay: `${index * 0.15}s` }}
                    >
                        <div className="text-5xl text-center mb-3">{cat.icone}</div>

                        <h2 className="text-2xl font-semibold text-yellow-300 text-center mb-2">
                            {cat.nome}
                        </h2>

                        <p className="text-sm text-center mb-4 text-amber-100/90">
                            {cat.descricao}
                        </p>

                        <div className="text-center">
                            <Link
                                href={cat.href}
                                className="inline-block bg-yellow-400 text-amber-900 font-bold px-5 py-2 rounded-full hover:bg-yellow-300 transition"
                            >
                                Explorar
                            </Link>
                        </div>
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
