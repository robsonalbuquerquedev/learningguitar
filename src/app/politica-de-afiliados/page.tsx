"use client";

export default function PoliticaDeAfiliados() {
    return (
        <main className="max-w-4xl mx-auto px-6 py-24 text-white">
            <section className="bg-black/40 backdrop-blur-md p-6 sm:p-10 rounded-2xl shadow-xl">
                <h1 className="text-3xl sm:text-4xl font-bold text-yellow-300 mb-6 text-center">
                    Política de Afiliados
                </h1>

                <p className="mb-4">
                    O <strong>LearningGuitar 🎸</strong> participa de programas de afiliados,
                    incluindo <strong>Shopee Brasil</strong> e <strong>Hotmart</strong>, que
                    permitem que o site receba comissões por recomendações de produtos ou
                    cursos musicais. Essa prática é comum e visa manter o projeto gratuito e
                    sustentável, sem custo adicional para o usuário.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3 text-yellow-200">
                    1. O que são links de afiliados?
                </h2>
                <p className="mb-4">
                    Links de afiliados são URLs especiais que contêm um código de
                    identificação. Quando o usuário clica em um desses links e realiza uma
                    compra, o <strong>LearningGuitar 🎸</strong> pode receber uma pequena
                    comissão pela indicação, sem alterar o preço final do produto.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3 text-yellow-200">
                    2. Transparência e integridade
                </h2>
                <p className="mb-4">
                    Todos os produtos e cursos recomendados neste site foram escolhidos com
                    base em sua relevância e qualidade para o aprendizado musical. Nenhum
                    item é promovido apenas com fins comerciais. A recomendação é feita de
                    forma ética e com o objetivo de contribuir para o desenvolvimento dos
                    alunos e leitores.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3 text-yellow-200">
                    3. Plataformas parceiras
                </h2>
                <p className="mb-4">
                    Atualmente, o <strong>LearningGuitar 🎸</strong> atua em parceria com:
                </p>
                <ul className="list-disc list-inside mb-4 space-y-2 text-yellow-100">
                    <li>
                        <strong>Shopee Brasil</strong> — comercializa produtos musicais e
                        acessórios.
                    </li>
                    <li>
                        <strong>Hotmart</strong> — plataforma de cursos e infoprodutos
                        digitais.
                    </li>
                    <li>
                        <strong>Google AdSense</strong> — exibição de anúncios relevantes e
                        monetização do tráfego orgânico.
                    </li>
                </ul>

                <h2 className="text-2xl font-semibold mt-8 mb-3 text-yellow-200">
                    4. Isenção de responsabilidade
                </h2>
                <p className="mb-4">
                    O <strong>LearningGuitar 🎸</strong> não é o vendedor direto dos produtos
                    e cursos indicados. A responsabilidade pela entrega, suporte e
                    qualidade dos produtos é inteiramente das plataformas parceiras
                    (Shopee, Hotmart, etc.) e dos respectivos produtores.
                </p>
                <p className="mb-4">
                    Recomendamos sempre que o usuário leia atentamente as informações dos
                    produtos, políticas de troca, prazos e termos de uso das plataformas
                    antes de efetuar uma compra.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3 text-yellow-200">
                    5. Privacidade e dados
                </h2>
                <p className="mb-4">
                    O uso de links afiliados não implica na coleta de informações pessoais
                    pelo <strong>LearningGuitar 🎸</strong>. Eventuais dados de compra,
                    pagamento ou entrega são processados diretamente pelas plataformas
                    parceiras, em conformidade com a{" "}
                    <strong>Lei Geral de Proteção de Dados (Lei nº 13.709/2018)</strong>.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3 text-yellow-200">
                    6. Transparência com o visitante
                </h2>
                <p className="mb-4">
                    O <strong>LearningGuitar 🎸</strong> compromete-se a informar sempre que
                    um link for de afiliado, seja por meio de ícones, descrições ou textos
                    informativos. Essa prática garante transparência total com nossos
                    visitantes e mantém o compromisso ético do projeto.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3 text-yellow-200">
                    7. Atualizações desta política
                </h2>
                <p className="mb-4">
                    Esta política pode ser atualizada periodicamente para refletir novas
                    parcerias ou mudanças na legislação. A versão mais recente estará sempre
                    disponível nesta página.
                </p>

                <p className="text-sm text-amber-200 mt-8 text-center italic">
                    Última atualização: {new Date().toLocaleDateString("pt-BR")}
                </p>
            </section>
        </main>
    );
}
