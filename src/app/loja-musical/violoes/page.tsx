import Image from "next/image";

export const metadata = {
    title: "Violões para Iniciantes e Estudo 🎸 | Loja Musical LearningGuitar",
    description:
        "Entenda o que observar antes de escolher um violão e conheça opções acústicas e eletroacústicas para iniciantes, estudo e prática musical.",
    keywords: [
        "violão",
        "violão para iniciantes",
        "violão acústico",
        "violão eletroacústico",
        "violão de nylon",
        "violão de aço",
        "como escolher violão",
        "melhor violão para iniciantes",
        "violão para estudar",
        "LearningGuitar",
        "loja musical",
    ],
    alternates: {
        canonical:
            "https://aprenderviolaoonline.com.br/loja-musical/violoes",
    },
    openGraph: {
        title: "Violões para Iniciantes e Estudo 🎸 | Loja Musical LearningGuitar",
        description:
            "Entenda as principais características de um violão e conheça opções para começar, estudar e desenvolver sua prática musical.",
        url: "https://aprenderviolaoonline.com.br/loja-musical/violoes",
        type: "website",
    },
};

export default function VioloesPage() {
    const produtos = [
        {
            nome: "Violão Clássico Acústico Iniciantes Destros Cordas De Aço Cor Marrom-claro",
            descricao:
                "Modelo voltado para iniciantes, com corpo 3/4, seis cordas de aço e construção pensada para uma experiência confortável durante os primeiros estudos.",
            imagem: "/violao1.png",
            link: "https://meli.la/1NLSLhb",
        },
        {
            nome: "Kit Violão Giannini Eletroacústico Corda Nylon Destro Flat Cutaway",
            descricao:
                "Violão eletroacústico com cordas de nylon, cutaway, equalizador de 3 bandas, afinador integrado e conjunto de acessórios para estudo e diferentes situações de uso.",
            imagem: "/violao2.png",
            link: "https://meli.la/1GWyxua",
        },
        {
            nome: "Violão Eletroacústico Strinberg SA200C Black Cordas Metal Fosco",
            descricao:
                "Modelo eletroacústico com tampo em abeto, corpo e laterais em sapele, cutaway e pré-amplificador para quem também pretende utilizar o instrumento conectado.",
            imagem: "/violao03.png",
            link: "https://meli.la/1HUdewa",
        },
    ];

    return (
        <main className="min-h-screen bg-gradient-to-br from-amber-900 via-yellow-900 to-amber-800 text-white">
            {/* Hero */}
            <section className="px-6 py-20 md:px-16 md:py-28">
                <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
                    <div className="flex justify-center">
                        <Image
                            src="/hero-guitar.png"
                            alt="Violão acústico para estudo e prática musical"
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
                            Violões 🎸
                        </h1>

                        <p className="mb-5 max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl">
                            Escolher um violão faz parte do começo da jornada
                            musical. O instrumento precisa combinar com o seu
                            nível, sua forma de estudar e o tipo de música que
                            você pretende tocar.
                        </p>

                        <p className="mb-8 max-w-2xl text-base leading-relaxed text-white/60">
                            Antes de olhar apenas para preço ou aparência, vale
                            entender algumas características importantes, como
                            tipo de corda, formato do corpo, conforto, captação
                            e finalidade de uso.
                        </p>

                        <a
                            href="#entenda"
                            className="inline-flex items-center gap-2 rounded-full bg-yellow-300 px-6 py-3 font-semibold text-amber-900 shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-400 hover:shadow-lg"
                        >
                            Entender o instrumento <span>↓</span>
                        </a>
                    </div>
                </div>
            </section>

            {/* Conceito */}
            <section id="entenda" className="px-6 py-20 md:px-16 md:py-24">
                <div className="mx-auto max-w-5xl">
                    <div className="mb-10 text-center">
                        <span className="mb-3 block text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300">
                            Primeiro, o conceito
                        </span>

                        <h2 className="text-3xl font-extrabold text-yellow-100 sm:text-4xl">
                            O que você precisa entender sobre um violão?
                        </h2>

                        <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-white/70 sm:text-lg">
                            Violões podem ter características bastante
                            diferentes entre si. Essas diferenças influenciam
                            o conforto, a resposta sonora, a forma de tocar e
                            até as possibilidades de utilização do instrumento.
                        </p>
                    </div>

                    <div className="rounded-3xl border border-yellow-200/10 bg-black/20 p-8 shadow-xl md:p-10">
                        <h3 className="mb-4 text-2xl font-bold text-yellow-100">
                            O instrumento deve acompanhar sua prática
                        </h3>

                        <p className="leading-relaxed text-white/70">
                            Para quem está começando, não é necessário dominar
                            todas as especificações de um violão. O mais
                            importante é entender algumas diferenças básicas e
                            escolher um instrumento que seja confortável para
                            estudar. Conforme sua prática evolui, outras
                            características passam a fazer mais sentido.
                        </p>
                    </div>
                </div>
            </section>

            {/* Quando escolher */}
            <section className="px-6 py-20 md:px-16 md:py-24">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-12 text-center">
                        <span className="mb-3 block text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300">
                            Para diferentes momentos
                        </span>

                        <h2 className="text-3xl font-extrabold text-yellow-100 sm:text-4xl">
                            Quando cada tipo de violão pode fazer sentido?
                        </h2>

                        <p className="mx-auto mt-5 max-w-3xl text-white/70">
                            Não existe apenas uma forma de utilizar um violão.
                            O contexto da sua prática pode ajudar a definir
                            quais características são mais importantes.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-3">
                        <article className="rounded-2xl border border-yellow-200/10 bg-white/10 p-7 shadow-lg">
                            <div className="mb-5 text-4xl">🎸</div>

                            <h3 className="mb-3 text-xl font-bold text-yellow-100">
                                Para começar
                            </h3>

                            <p className="leading-relaxed text-white/65">
                                Um instrumento confortável e adequado ao seu
                                nível pode facilitar os primeiros contatos com
                                acordes, ritmos e exercícios.
                            </p>
                        </article>

                        <article className="rounded-2xl border border-yellow-200/10 bg-white/10 p-7 shadow-lg">
                            <div className="mb-5 text-4xl">📚</div>

                            <h3 className="mb-3 text-xl font-bold text-yellow-100">
                                Para estudar
                            </h3>

                            <p className="leading-relaxed text-white/65">
                                Quem pretende praticar regularmente pode
                                priorizar conforto, construção e características
                                que tornem o instrumento agradável para longos
                                períodos de estudo.
                            </p>
                        </article>

                        <article className="rounded-2xl border border-yellow-200/10 bg-white/10 p-7 shadow-lg">
                            <div className="mb-5 text-4xl">🔊</div>

                            <h3 className="mb-3 text-xl font-bold text-yellow-100">
                                Para tocar conectado
                            </h3>

                            <p className="leading-relaxed text-white/65">
                                Um violão eletroacústico pode ser interessante
                                para quem pretende conectar o instrumento a uma
                                caixa, mesa de som ou outro equipamento.
                            </p>
                        </article>
                    </div>
                </div>
            </section>

            {/* O que observar */}
            <section className="px-6 py-20 md:px-16 md:py-24">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-12 text-center">
                        <span className="mb-3 block text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300">
                            Antes de escolher
                        </span>

                        <h2 className="text-3xl font-extrabold text-yellow-100 sm:text-4xl">
                            O que observar em um violão?
                        </h2>

                        <p className="mx-auto mt-5 max-w-3xl text-white/70">
                            Algumas especificações aparecem com frequência nas
                            páginas dos produtos. Entender o que elas
                            representam ajuda a comparar instrumentos com mais
                            clareza.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-3">
                        <article className="rounded-2xl border border-yellow-200/10 bg-white/10 p-7 shadow-lg">
                            <h3 className="mb-3 text-xl font-bold text-yellow-100">
                                Cordas
                            </h3>

                            <p className="leading-relaxed text-white/65">
                                Violões podem utilizar cordas de nylon ou de
                                aço. A sensação ao tocar, a resposta sonora e
                                a aplicação musical podem ser diferentes entre
                                essas opções.
                            </p>
                        </article>

                        <article className="rounded-2xl border border-yellow-200/10 bg-white/10 p-7 shadow-lg">
                            <h3 className="mb-3 text-xl font-bold text-yellow-100">
                                Formato e conforto
                            </h3>

                            <p className="leading-relaxed text-white/65">
                                Tamanho do corpo, formato, braço, escala e
                                acesso às casas influenciam diretamente a
                                experiência de tocar e estudar.
                            </p>
                        </article>

                        <article className="rounded-2xl border border-yellow-200/10 bg-white/10 p-7 shadow-lg">
                            <h3 className="mb-3 text-xl font-bold text-yellow-100">
                                Captação e acessórios
                            </h3>

                            <p className="leading-relaxed text-white/65">
                                Em modelos eletroacústicos, observe o sistema
                                de captação e as conexões disponíveis. Kits
                                também podem incluir acessórios úteis para quem
                                está começando.
                            </p>
                        </article>
                    </div>
                </div>
            </section>

            {/* Contexto de compra */}
            <section className="px-6 py-20 md:px-16 md:py-24">
                <div className="mx-auto max-w-4xl text-center">
                    <span className="mb-3 block text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300">
                        Precisa comprar agora?
                    </span>

                    <h2 className="text-3xl font-extrabold text-yellow-100 sm:text-4xl">
                        Primeiro escolha pelo que combina com sua prática
                    </h2>

                    <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-white/70 sm:text-lg">
                        Não é necessário escolher um violão apenas porque ele
                        possui mais recursos ou porque determinado modelo é
                        apresentado como profissional. Para quem está
                        começando, conforto, adequação ao uso e possibilidade
                        de estudar com regularidade podem ser mais importantes
                        do que uma grande quantidade de especificações.
                    </p>

                    <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-white/60">
                        Antes de comprar, confira sempre o tipo de corda,
                        dimensões, orientação da mão, sistema de captação,
                        materiais, acessórios incluídos e as condições
                        apresentadas na página da loja.
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

                        <h2 className="text-3xl font-extrabold text-yellow-100 sm:text-4xl">
                            Violões para conhecer
                        </h2>

                        <p className="mx-auto mt-5 max-w-3xl text-white/70">
                            Abaixo estão algumas opções encontradas em lojas
                            parceiras. Compare as características e acesse a
                            página do produto para consultar informações
                            atualizadas antes de decidir.
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {produtos.map((item, index) => (
                            <article
                                key={item.nome}
                                className="rounded-2xl border border-yellow-200/10 bg-white/10 p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-yellow-300/30 hover:bg-white/15"
                                style={{
                                    animationDelay: `${index * 0.1}s`,
                                }}
                            >
                                <div className="relative mb-5 h-64 overflow-hidden rounded-xl bg-black/20">
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

                                <p className="mb-6 text-sm leading-relaxed text-white/65">
                                    {item.descricao}
                                </p>

                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer sponsored"
                                    className="inline-flex items-center gap-2 rounded-full bg-yellow-400 px-5 py-2.5 font-bold text-amber-900 transition hover:bg-yellow-300"
                                >
                                    Ver na loja <span aria-hidden="true">→</span>
                                </a>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Ponte para aprendizado */}
            <section className="px-6 py-20 md:px-16 md:py-24">
                <div className="mx-auto max-w-4xl text-center">
                    <span className="mb-3 block text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300">
                        Continue aprendendo
                    </span>

                    <h2 className="text-3xl font-extrabold text-yellow-100 sm:text-4xl">
                        O instrumento é o começo. A prática faz a diferença.
                    </h2>

                    <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-white/70 sm:text-lg">
                        Ter um violão adequado pode tornar seus estudos mais
                        confortáveis, mas a evolução acontece com prática,
                        compreensão e continuidade. Se você está começando,
                        siga uma sequência de estudos para construir sua base
                        antes de avançar para conteúdos mais complexos.
                    </p>

                    <a
                        href="/#beginner-path"
                        className="mt-8 inline-flex items-center gap-2 rounded-full bg-yellow-300 px-6 py-3 font-semibold text-amber-900 shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-400 hover:shadow-lg"
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