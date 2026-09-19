import { FaBookOpen, FaGuitar, FaGraduationCap, FaMusic } from "react-icons/fa";

export const metadata = {
    title: "Recomendações de Materiais para Violão 🎸 | LearningGuitar",
    description:
        "Materiais, livros, eBooks e cursos de violão selecionados para complementar seus estudos e ajudar você a evoluir no instrumento.",
    keywords: [
        "recomendações de violão",
        "curso de violão",
        "livro de violão",
        "eBook de violão",
        "materiais para violão",
        "aulas de violão",
        "estudo de violão",
        "LearningGuitar",
    ],
    alternates: {
        canonical: "https://aprenderviolaoonline.com.br/recomendacoes",
    },
    openGraph: {
        title: "Recomendações de Materiais para Violão 🎸 | LearningGuitar",
        description:
            "Materiais, livros, eBooks e cursos de violão selecionados para complementar seus estudos.",
        url: "https://aprenderviolaoonline.com.br/recomendacoes",
        type: "website",
    },
};

const recommendations = [
    {
        icon: FaGuitar,
        category: "E-book • Iniciantes",
        title: "Domine o Violão: Aprenda a Tocar suas Músicas Favoritas",
        description:
            "Um e-book voltado para quem deseja começar a tocar violão ou desenvolver melhor suas habilidades. A proposta acompanha o aluno em uma jornada de aprendizado, desde os primeiros passos até o desenvolvimento da prática musical.",
        audience:
            "Pode ser interessante para quem está começando ou para quem deseja organizar melhor seus estudos.",
        link: "https://go.hotmart.com/G107680980G",
        button: "Conhecer o e-book",
    },
    {
        icon: FaBookOpen,
        category: "E-book • Básico ao avançado",
        title: "Violão",
        description:
            "Material que aborda conteúdos básicos e avançados do violão, podendo servir como guia de consulta para quem está iniciando e também para quem já possui alguma experiência com o instrumento.",
        audience:
            "Pode complementar os estudos de quem deseja revisar fundamentos e avançar para conteúdos mais aprofundados.",
        link: "https://go.hotmart.com/V107681022N",
        button: "Conhecer o material",
    },
    {
        icon: FaGraduationCap,
        category: "Curso • Do zero ao avançado",
        title: "Violão Sem Segredos",
        description:
            "Curso estruturado desde os primeiros contatos com o instrumento até conteúdos mais avançados. Entre os temas apresentados estão primeiros acordes, pestanas, ritmos, teoria musical e solos.",
        audience:
            "Pode ser uma opção para quem prefere acompanhar um curso estruturado e seguir uma sequência de aulas.",
        link: "https://go.hotmart.com/O107681071L?dp=1",
        button: "Conhecer o curso",
    },
    {
        icon: FaMusic,
        category: "Livro • Iniciantes",
        title: "Violão — Vandersom Cruz",
        description:
            "Livro didático do violonista e educador musical Vandersom Cruz, desenvolvido para alunos iniciantes e integrante da série de materiais didáticos dos cursos do Projeto Guri.",
        audience:
            "Pode ser útil para quem procura um material didático de apoio para os primeiros estudos do instrumento.",
        link: "https://go.hotmart.com/R107681144I",
        button: "Conhecer o livro",
    },
];

export default function Recomendacoes() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-amber-950 via-yellow-950 to-amber-900 text-white">

            {/* HERO */}
            <section className="px-6 pt-20 pb-14">
                <div className="max-w-4xl mx-auto text-center">

                    <span className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-yellow-400/10 border border-yellow-300/20 text-yellow-200 text-sm font-medium">
                        <FaGuitar />
                        Curadoria LearningGuitar
                    </span>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-yellow-300 drop-shadow-lg">
                        Materiais para continuar sua jornada no violão 🎸
                    </h1>

                    <p className="mt-6 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed text-amber-100">
                        Aprender violão não acontece apenas em um único lugar.
                        Por isso, além dos conteúdos gratuitos do LearningGuitar,
                        reunimos aqui alguns materiais externos que podem
                        complementar seus estudos.
                    </p>
                </div>
            </section>

            {/* FILOSOFIA DA CURADORIA */}
            <section className="px-6 pb-16">
                <div className="max-w-4xl mx-auto">

                    <div className="bg-black/20 border border-yellow-300/10 rounded-3xl p-6 sm:p-8 shadow-xl">

                        <div className="flex items-start gap-4">
                            <div className="shrink-0 w-12 h-12 rounded-2xl bg-yellow-400/10 flex items-center justify-center">
                                <FaBookOpen className="text-yellow-300 text-xl" />
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-yellow-200 mb-3">
                                    Por que estas recomendações existem?
                                </h2>

                                <p className="text-amber-100/90 leading-relaxed">
                                    O LearningGuitar nasceu da necessidade de tornar o
                                    aprendizado do violão mais organizado e fácil de
                                    consultar. A mesma ideia orienta esta página:
                                    reunir materiais que possam complementar aquilo
                                    que você já encontra gratuitamente por aqui.
                                </p>

                                <p className="mt-4 text-amber-100/90 leading-relaxed">
                                    Você não precisa adquirir nenhum dos materiais
                                    abaixo para aprender no LearningGuitar. Eles são
                                    apenas opções externas para quem deseja estudar
                                    por outros formatos, como cursos, livros e
                                    e-books.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* RECOMENDAÇÕES */}
            <section className="px-6 pb-20">
                <div className="max-w-6xl mx-auto">

                    <div className="text-center mb-10">
                        <h2 className="text-3xl sm:text-4xl font-bold text-yellow-200">
                            Materiais selecionados
                        </h2>

                        <p className="mt-3 max-w-2xl mx-auto text-amber-100/80">
                            Diferentes formatos para diferentes momentos da sua
                            jornada musical.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">

                        {recommendations.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <article
                                    key={item.title}
                                    className="flex flex-col bg-white/10 border border-white/10 rounded-3xl p-6 sm:p-7 shadow-lg hover:-translate-y-1 hover:shadow-yellow-400/10 transition-all duration-300"
                                    style={{
                                        animationDelay: `${index * 0.1}s`,
                                    }}
                                >
                                    <div className="flex items-start gap-4 mb-5">

                                        <div className="shrink-0 w-12 h-12 rounded-2xl bg-yellow-400/10 flex items-center justify-center">
                                            <Icon className="text-yellow-300 text-xl" />
                                        </div>

                                        <div>
                                            <span className="text-xs uppercase tracking-wider text-yellow-300/80 font-semibold">
                                                {item.category}
                                            </span>

                                            <h3 className="mt-1 text-xl sm:text-2xl font-bold text-yellow-100 leading-snug">
                                                {item.title}
                                            </h3>
                                        </div>
                                    </div>

                                    <p className="text-amber-100/90 leading-relaxed">
                                        {item.description}
                                    </p>

                                    <div className="mt-5 rounded-2xl bg-black/20 p-4">
                                        <p className="text-sm text-amber-100/80 leading-relaxed">
                                            <strong className="text-yellow-200">
                                                Para quem pode fazer sentido:
                                            </strong>{" "}
                                            {item.audience}
                                        </p>
                                    </div>

                                    <div className="mt-6">
                                        <a
                                            href={item.link}
                                            target="_blank"
                                            rel="noopener noreferrer sponsored"
                                            className="inline-flex items-center justify-center w-full sm:w-auto bg-gradient-to-r from-yellow-400 to-amber-300 text-amber-950 font-bold px-6 py-3 rounded-full hover:brightness-110 transition-all duration-300 shadow-md"
                                        >
                                            {item.button}
                                        </a>
                                    </div>
                                </article>
                            );
                        })}

                    </div>
                </div>
            </section>

            {/* CONTINUIDADE DO APRENDIZADO */}
            <section className="px-6 pb-20">
                <div className="max-w-4xl mx-auto">

                    <div className="rounded-3xl bg-yellow-400/10 border border-yellow-300/20 p-7 sm:p-9 text-center">

                        <FaGuitar className="mx-auto text-yellow-300 text-3xl mb-4" />

                        <h2 className="text-2xl sm:text-3xl font-bold text-yellow-200">
                            Antes de comprar, continue explorando
                        </h2>

                        <p className="mt-4 text-amber-100/90 leading-relaxed max-w-2xl mx-auto">
                            O LearningGuitar foi criado justamente para reunir,
                            organizar e explicar os principais conceitos necessários
                            para quem deseja aprender violão. Explore as aulas
                            gratuitas e descubra o que faz sentido para o seu
                            momento de estudo.
                        </p>

                        <a
                            href="/#start-here"
                            className="inline-flex mt-7 bg-yellow-300 text-amber-950 font-bold px-7 py-3 rounded-full hover:bg-yellow-200 transition-colors duration-300 shadow-lg"
                        >
                            🎸 Começar a aprender
                        </a>

                    </div>
                </div>
            </section>

            {/* AVISO DE AFILIADOS */}
            <section className="px-6 pb-16">
                <div className="max-w-3xl mx-auto">

                    <div className="text-center text-xs text-amber-200/70 leading-relaxed border-t border-white/10 pt-8">
                        <p>
                            <strong className="text-amber-200">
                                Transparência:
                            </strong>{" "}
                            alguns dos links desta página podem ser links de
                            afiliado. Caso você adquira um produto por meio deles,
                            o LearningGuitar poderá receber uma comissão, sem custo
                            adicional para você.
                        </p>

                        <p className="mt-3">
                            As informações apresentadas têm finalidade informativa.
                            Antes de adquirir qualquer produto, confira na página
                            oficial as características, condições, preço e conteúdo
                            atualmente oferecidos.
                        </p>
                    </div>

                </div>
            </section>

        </main>
    );
}