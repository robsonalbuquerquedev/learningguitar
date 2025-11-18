import { FaMusic, FaHeadphones, FaGuitar } from "react-icons/fa";

export const metadata = {
    title: "Recomendações de Cursos e Eventos Musicais 🎶 | LearningGuitar",
    description:
        "Cursos, eventos e materiais realmente valiosos para evoluir no violão, teoria musical e composição. Recomendações selecionadas com links de afiliados.",
    keywords: [
        "cursos de violão",
        "eventos musicais",
        "teoria musical",
        "composição musical",
        "violão",
        "aulas de música",
        "cursos online de música",
        "recomendações musicais",
        "afiliados música",
        "LearningGuitar"
    ],
    alternates: {
        canonical: "https://aprenderviolaoonline.com.br/recomendacoes",
    },
    openGraph: {
        title: "Recomendações de Cursos e Eventos Musicais 🎶 | LearningGuitar",
        description:
            "Cursos, eventos e treinamentos selecionados para acelerar seu aprendizado musical. Aprenda violão, composição, trilhas sonoras e mais.",
        url: "https://aprenderviolaoonline.com.br/recomendacoes",
        type: "website",
    },
};

export default function Recomendacoes() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-amber-900 via-yellow-900 to-amber-800 text-white py-20 px-6">

            {/* 🎸 TÍTULO */}
            <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-8 text-yellow-300 drop-shadow-lg animate-fadeSlide">
                🎶 Recomendações de Cursos e Eventos Musicais
            </h1>

            {/* 📜 INTRODUÇÃO */}
            <p className="text-center max-w-3xl mx-auto mb-12 text-amber-100 bg-black/20 p-4 rounded-xl shadow-md animate-fadeSlide">
                Aqui estão cursos e materiais que realmente valem o investimento —
                todos focados em te ajudar a evoluir no violão, na teoria e na composição musical.
                <br /><br />
                Este site pode conter links de afiliado: caso você compre um curso por eles,
                posso receber uma pequena comissão (sem custo extra para você). 🙌
            </p>

            {/* 🎯 CTA — CantosJSM no Topo */}
            <div className="mt-6 mb-12 flex justify-center animate-fadeSlide">
                <a
                    href="https://cantosjsm.com.br/"
                    target="_blank"
                    className="bg-gradient-to-r from-yellow-400 to-amber-300 text-amber-900 font-bold px-7 py-3 rounded-full shadow-lg hover:brightness-110 transition-all duration-300"
                >
                    🎵 Conhecer o CantosJSM — Plataforma de Cantos Litúrgicos
                </a>
            </div>

            {/* 🧩 GRID DE CURSOS */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">

                {/* 🔸 CURSO 1 */}
                <div
                    className="bg-white/10 p-6 rounded-2xl shadow-lg hover:scale-105 hover:shadow-yellow-400/20 transition-all duration-300 flex flex-col items-start animate-popIn"
                    style={{ animationDelay: "0.1s" }}
                >
                    <div className="flex items-center gap-3 mb-4">
                        <FaMusic className="text-yellow-300 text-3xl" />
                        <h2 className="text-2xl font-semibold text-yellow-200">
                            1º Congresso Nacional de Composição e Criatividade Musical
                        </h2>
                    </div>
                    <p className="text-sm leading-relaxed mb-6">
                        Tenha acesso VIP a <strong>mais de 30 palestras</strong> com artistas como
                        Felipe Andreoli (Angra), Lucas Silveira (Fresno), Gustavo Bertoni (Scalene)
                        e outros grandes nomes da música. Um evento completo sobre criatividade,
                        composição e carreira musical.
                    </p>
                    <a
                        href="https://go.hotmart.com/E102798894A"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-auto inline-block bg-gradient-to-r from-yellow-400 to-amber-300 text-amber-900 font-bold px-6 py-3 rounded-full hover:brightness-110 transition-all duration-300 shadow-md"
                    >
                        🎧 Acessar o Evento
                    </a>
                </div>

                {/* 🔹 CURSO 2 */}
                <div
                    className="bg-white/10 p-6 rounded-2xl shadow-lg hover:scale-105 hover:shadow-yellow-400/20 transition-all duration-300 flex flex-col items-start animate-popIn"
                    style={{ animationDelay: "0.25s" }}
                >
                    <div className="flex items-center gap-3 mb-4">
                        <FaHeadphones className="text-yellow-300 text-3xl" />
                        <h2 className="text-2xl font-semibold text-yellow-200">
                            Criando Músicas Para Jogos – Do Zero ao Avançado 🎮
                        </h2>
                    </div>
                    <p className="text-sm leading-relaxed mb-6">
                        Aprenda a criar trilhas sonoras imersivas para jogos.
                        Domine mixagem, masterização e o método de{" "}
                        <em>composição por tom adaptativo</em>.
                        Perfeito para quem quer entrar na indústria musical digital.
                    </p>
                    <a
                        href="https://go.hotmart.com/N102799840H?dp=1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-auto inline-block bg-gradient-to-r from-yellow-400 to-amber-300 text-amber-900 font-bold px-6 py-3 rounded-full hover:brightness-110 transition-all duration-300 shadow-md"
                    >
                        🎵 Ver Curso
                    </a>
                </div>

                {/* 🔹 CURSO 3 */}
                <div
                    className="bg-white/10 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 flex flex-col items-start animate-popIn"
                    style={{ animationDelay: "0.4s" }}
                >
                    <div className="flex items-center gap-3 mb-4">
                        <FaGuitar className="text-yellow-300 text-3xl" />
                        <h2 className="text-2xl font-semibold text-yellow-200">
                            Comunidade de Música Acordados 🎸
                        </h2>
                    </div>
                    <p className="text-sm leading-relaxed mb-6">
                        Toque violão praticando apenas <strong>15 minutos por dia</strong>
                        com o método Acordados, criado por <strong>Patrik Correa</strong>.
                        Aprenda a tirar músicas de ouvido, tocar além das cifras
                        e dominar o violão popular de forma simples e divertida.
                    </p>
                    <a
                        href="https://go.hotmart.com/J102800016L?dp=1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-auto inline-block bg-gradient-to-r from-yellow-400 to-amber-300 text-amber-900 font-bold px-6 py-3 rounded-full hover:brightness-110 transition-all duration-300 shadow-md"
                    >
                        🎶 Entrar na Comunidade
                    </a>
                </div>
            </div>

            {/* 🎯 CTA Final — CantosJSM */}
            <div className="mt-20 flex justify-center animate-fadeSlide">
                <a
                    href="https://cantosjsm.com.br/"
                    target="_blank"
                    className="bg-gradient-to-r from-yellow-400 to-amber-300 text-amber-900 font-bold px-7 py-3 rounded-full shadow-lg hover:brightness-110 transition-all duration-300"
                >
                    🙌 Visitar o CantosJSM — Cantos para Entrada, Salmo, Comunhão e mais
                </a>
            </div>

            {/* ⚖️ AVISO LEGAL */}
            <div
                className="max-w-3xl mx-auto mt-16 text-center text-xs text-amber-200/80 leading-relaxed bg-black/20 p-4 rounded-xl animate-fadeSlide"
            >
                <p>
                    <strong>Aviso legal:</strong> As recomendações acima têm propósito educativo.
                    O LearningGuitar 🎸 não representa oficialmente a Hotmart ou os produtores dos cursos.
                    Sempre verifique as condições antes de adquirir qualquer produto.
                </p>
            </div>
        </main>
    );
}
