"use client";

export default function PoliticaDePrivacidade() {
    return (
        <main className="max-w-4xl mx-auto px-6 py-24 text-white">
            <section className="bg-black/40 backdrop-blur-md p-6 sm:p-10 rounded-2xl shadow-xl">
                <h1 className="text-3xl sm:text-4xl font-bold text-yellow-300 mb-6 text-center">
                    Política de Privacidade
                </h1>

                <p className="mb-4">
                    O <strong>LearningGuitar 🎸</strong> valoriza a sua privacidade e está
                    comprometido em proteger os dados e informações fornecidos pelos
                    visitantes deste site. Esta política explica como tratamos as
                    informações e como garantimos a transparência no uso de dados,
                    publicidade e links de afiliados.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3 text-yellow-200">
                    1. Coleta de informações
                </h2>
                <p className="mb-4">
                    Não coletamos informações pessoais identificáveis sem o seu
                    consentimento. No entanto, este site pode utilizar ferramentas de
                    análise (como <strong>Google Analytics</strong>) e scripts de
                    publicidade (como o <strong>Google AdSense</strong>) para entender o
                    comportamento dos visitantes e exibir anúncios relevantes.
                </p>
                <p className="mb-4">
                    Essas ferramentas podem coletar informações como: endereço IP, tipo de
                    dispositivo, navegador, páginas visitadas e tempo de permanência. Esses
                    dados são usados apenas de forma agregada e anônima, nunca para
                    identificar usuários individualmente.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3 text-yellow-200">
                    2. Uso de cookies
                </h2>
                <p className="mb-4">
                    Utilizamos <strong>cookies</strong> e tecnologias semelhantes para
                    melhorar sua experiência de navegação e exibir anúncios personalizados
                    por meio do <strong>Google AdSense</strong>. Os cookies permitem que o
                    Google e seus parceiros exibam anúncios com base em visitas anteriores
                    ao nosso site e a outros na Internet.
                </p>
                <p className="mb-4">
                    Você pode desativar os cookies nas configurações do seu navegador ou
                    visitar o link{" "}
                    <a
                        href="https://adssettings.google.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-yellow-300 underline hover:text-yellow-200"
                    >
                        Configurações de Anúncios do Google
                    </a>{" "}
                    para controlar o uso de dados para publicidade personalizada.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3 text-yellow-200">
                    3. Links de afiliados
                </h2>
                <p className="mb-4">
                    Algumas páginas deste site contêm <strong>links de afiliados</strong>,
                    principalmente da <strong>Shopee</strong> e da{" "}
                    <strong>Hotmart</strong>. Ao clicar nesses links e realizar uma compra,
                    o <strong>LearningGuitar 🎸</strong> pode receber uma pequena comissão,
                    sem custo adicional para você.
                </p>
                <p className="mb-4">
                    Esses links são identificados claramente e têm o objetivo de
                    recomendar produtos e cursos musicais que consideramos úteis e
                    relevantes para o aprendizado do visitante. Essa prática é comum e
                    transparente, estando em conformidade com as políticas do{" "}
                    <strong>Google AdSense</strong> e dos programas de afiliados.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3 text-yellow-200">
                    4. Links externos
                </h2>
                <p className="mb-4">
                    Este site pode conter links para páginas externas, como Shopee,
                    Hotmart ou outras plataformas. O{" "}
                    <strong>LearningGuitar 🎸</strong> não se responsabiliza pelas práticas
                    de privacidade ou pelo conteúdo de sites de terceiros. Recomendamos
                    sempre ler as políticas de privacidade desses sites antes de fornecer
                    qualquer informação.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3 text-yellow-200">
                    5. Proteção de dados
                </h2>
                <p className="mb-4">
                    Adotamos medidas técnicas e organizacionais adequadas para proteger
                    suas informações contra acesso, uso ou divulgação não autorizados. Não
                    compartilhamos dados com terceiros, exceto quando necessário para o
                    funcionamento de ferramentas como Google AdSense ou Analytics.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3 text-yellow-200">
                    6. Consentimento e controle
                </h2>
                <p className="mb-4">
                    Ao navegar neste site, você concorda com o uso de cookies e práticas
                    descritas nesta política. Caso não concorde, pode ajustar suas
                    preferências de privacidade ou interromper o uso do site a qualquer
                    momento.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3 text-yellow-200">
                    7. Atualizações
                </h2>
                <p>
                    Esta Política de Privacidade pode ser atualizada periodicamente para
                    refletir mudanças nas práticas do site ou em conformidade com novas
                    legislações. A data da última modificação será sempre informada no
                    final desta página.
                </p>

                <p className="text-sm text-amber-200 mt-8 text-center italic">
                    Última atualização: {new Date().toLocaleDateString("pt-BR")}
                </p>
            </section>
        </main>
    );
}
