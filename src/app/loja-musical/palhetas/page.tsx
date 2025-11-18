import Image from "next/image";

export const metadata = {
    title: "Palhetas 🎶 | Loja LearningGuitar",
    description:
        "Kits de palhetas para violão, guitarra e baixo. Conforto, precisão e durabilidade — produtos selecionados pela LearningGuitar com envio pela Shopee Brasil.",
    keywords: [
        "palhetas",
        "palheta para violão",
        "palheta guitarra",
        "kits de palhetas",
        "acessórios musicais",
        "LearningGuitar",
        "loja musical",
        "acessórios para violão",
        "Shopee"
    ],
    alternates: {
        canonical: "https://aprenderviolaoonline.com.br/loja-musical/palhetas",
    },
    openGraph: {
        title: "Palhetas 🎶 | Loja LearningGuitar",
        description:
            "Escolha o kit de palhetas ideal para o seu estilo musical. Produtos selecionados especialmente para conforto, durabilidade e precisão.",
        url: "https://aprenderviolaoonline.com.br/loja-musical/palhetas",
        type: "website",
    },
};

export default function PalhetasPage() {
    const produtos = [
        {
            nome: "Kit Palhetas Celuloide",
            descricao:
                "Conjunto completo de palhetas de celuloide premium com capotraste e estojo prático.",
            imagem: "/palheta1.png",
            link: "https://s.shopee.com.br/60Ja1brICE",
        },
        {
            nome: "Kit 4 Palhetas Fender",
            descricao:
                "Palhetas Fender originais, com diferentes espessuras para variados estilos musicais.",
            imagem: "/palheta2.png",
            link: "https://s.shopee.com.br/AKSZCET27E",
        },
        {
            nome: "Kit 5 Palhetas + Porta Palheta",
            descricao:
                "Kit com 5 palhetas de alta qualidade e 1 suporte prático — perfeito para músicos.",
            imagem: "/palheta3.png",
            link: "https://s.shopee.com.br/gI3grc8V3",
        },
        {
            nome: "Porta Palhetas + 6 Palhetas",
            descricao:
                "Estojo compacto com 6 palhetas Alice, ideal para quem busca conforto e versatilidade.",
            imagem: "/palheta4.png",
            link: "https://s.shopee.com.br/9Ka21ADWGl",
        },
        {
            nome: "Suporte Porta Palhetas",
            descricao:
                "Suporte adesivo para violão, guitarra e baixo — mantenha suas palhetas sempre à mão.",
            imagem: "/palheta5.png",
            link: "https://s.shopee.com.br/8AO4dI6cq4",
        },
        {
            nome: "Kit 50 Palhetas com Estojo",
            descricao:
                "Kit econômico com 50 palhetas coloridas em caixinha transparente. Ideal para estudos.",
            imagem: "/palheta6.png",
            link: "https://s.shopee.com.br/12MvPZpxa",
        },
        {
            nome: "Chaveiro + Palheta Fender",
            descricao:
                "Combo de acessórios premium: porta-palhetas Marshall, chaveiro e palheta Fender 0.96mm.",
            imagem: "/palheta7.png",
            link: "https://s.shopee.com.br/4VUmJCc03S",
        },
        {
            nome: "Porta Palhetas + 2 Palhetas",
            descricao:
                "Porta-palhetas colorido com 2 palhetas inclusas — compacto, leve e funcional.",
            imagem: "/palheta8.png",
            link: "https://s.shopee.com.br/30fyXB33rh",
        },
        {
            nome: "Porta Palhetas + Palheta VIP",
            descricao:
                "Conjunto elegante de porta-palhetas com palheta VIP — ideal para presentear músicos.",
            imagem: "/palheta9.png",
            link: "https://s.shopee.com.br/3qF5X4zSyR",
        },
    ];

    return (
        <main className="min-h-screen bg-gradient-to-br from-amber-900 via-yellow-900 to-amber-800 text-white">

            {/* 🟨 HERO SPLIT */}
            <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-20 md:py-28 gap-10">

                {/* 🎸 Imagem */}
                <div className="md:w-1/2 flex justify-center animate-fadeSlide">
                    <Image
                        src="/hero-palheta.png"
                        alt="Palhetas LearningGuitar"
                        width={480}
                        height={480}
                        className="rounded-2xl shadow-2xl border-4 border-yellow-400/70"
                        priority
                    />
                </div>

                {/* ✨ Texto */}
                <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left animate-fadeSlide">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-yellow-200 drop-shadow-lg mb-4">
                        🎶 Palhetas
                    </h1>

                    <p className="text-lg sm:text-xl bg-black/30 p-4 rounded-xl shadow-md leading-relaxed mb-6 max-w-lg">
                        Encontre o kit de palhetas perfeito para o seu estilo de toque!
                        Opções para violão, guitarra e baixo escolhidas para oferecer conforto,
                        precisão e durabilidade — com envio garantido pela <strong>Shopee Brasil</strong>.
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

            {/* 🪶 Grid de produtos */}
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
