"use client";

export default function TermosDeUso() {
    return (
        <main className="max-w-4xl mx-auto px-6 py-24 text-white">
            <section className="bg-black/40 backdrop-blur-md p-6 sm:p-10 rounded-2xl shadow-xl">
                <h1 className="text-3xl sm:text-4xl font-bold text-yellow-300 mb-6 text-center">
                    Termos de Uso
                </h1>

                <p className="mb-4">
                    Bem-vindo ao <strong>LearningGuitar 🎸</strong>! Ao acessar e utilizar este site,
                    você concorda com os termos e condições descritos abaixo. Recomendamos a leitura
                    cuidadosa antes de continuar navegando.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3 text-yellow-200">
                    1. Finalidade do site
                </h2>
                <p className="mb-4">
                    O <strong>LearningGuitar 🎸</strong> é um projeto educativo criado por{" "}
                    <strong>Robson Albuquerque</strong>, com o objetivo de disponibilizar conteúdos
                    didáticos sobre teoria musical, violão e práticas musicais, de forma gratuita e
                    acessível.
                </p>
                <p className="mb-4">
                    Além do conteúdo educacional, o site pode conter links de afiliados e anúncios
                    de terceiros, sempre de maneira transparente e em conformidade com as políticas
                    do <strong>Google AdSense</strong> e programas de afiliados como{" "}
                    <strong>Shopee</strong> e <strong>Hotmart</strong>.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3 text-yellow-200">
                    2. Uso do conteúdo
                </h2>
                <p className="mb-4">
                    Todo o conteúdo disponível neste site — incluindo textos, imagens, vídeos,
                    códigos e demais recursos — é oferecido para fins educacionais. É proibida a
                    reprodução, cópia, modificação ou redistribuição de qualquer material sem
                    autorização prévia e por escrito do autor.
                </p>
                <p className="mb-4">
                    O usuário pode compartilhar trechos do conteúdo, desde que cite
                    claramente a fonte (<strong>https://aprenderviolaoonline.com.br</strong>) e não
                    faça uso comercial indevido do material.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3 text-yellow-200">
                    3. Publicidade e programas de afiliados
                </h2>
                <p className="mb-4">
                    Este site exibe anúncios através do <strong>Google AdSense</strong> e participa
                    de programas de afiliados, como <strong>Shopee</strong> e{" "}
                    <strong>Hotmart</strong>. Isso significa que podemos receber uma pequena
                    comissão quando o usuário realiza uma compra por meio de links de afiliados,
                    sem custo adicional para o visitante.
                </p>
                <p className="mb-4">
                    Todos os anúncios e links são exibidos de forma transparente e seguem as
                    políticas de conteúdo do Google. O <strong>LearningGuitar 🎸</strong> não vende
                    produtos diretamente nem coleta informações de pagamento dos usuários.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3 text-yellow-200">
                    4. Responsabilidade do usuário
                </h2>
                <p className="mb-4">
                    O usuário compromete-se a utilizar o site de maneira ética, respeitosa e dentro
                    dos limites legais, não realizando ações que prejudiquem o funcionamento da
                    plataforma ou comprometam a segurança de outros visitantes.
                </p>
                <p className="mb-4">
                    É de responsabilidade do usuário verificar as políticas e termos dos sites
                    externos para os quais o <strong>LearningGuitar 🎸</strong> possa redirecionar,
                    como Shopee, Hotmart ou outros parceiros.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3 text-yellow-200">
                    5. Direitos autorais
                </h2>
                <p className="mb-4">
                    Todo o design, conteúdo e código-fonte deste site são de propriedade de{" "}
                    <strong>Robson Albuquerque</strong> e estão protegidos por leis de direitos
                    autorais e de propriedade intelectual. O uso não autorizado desses materiais
                    pode resultar em penalidades previstas na legislação vigente.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3 text-yellow-200">
                    6. Modificações e atualizações
                </h2>
                <p className="mb-4">
                    O <strong>LearningGuitar 🎸</strong> reserva-se o direito de modificar ou
                    atualizar estes Termos de Uso a qualquer momento, sem aviso prévio. A versão
                    mais recente estará sempre disponível nesta página, com a data da última
                    atualização informada ao final.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3 text-yellow-200">
                    7. Limitação de responsabilidade
                </h2>
                <p className="mb-4">
                    O <strong>LearningGuitar 🎸</strong> não se responsabiliza por eventuais perdas,
                    danos ou prejuízos resultantes do uso indevido das informações aqui
                    apresentadas ou das interações com sites externos de terceiros.
                </p>
                <p className="mb-4">
                    Todo o conteúdo é oferecido “como está”, sem garantias explícitas ou implícitas,
                    e o uso é de inteira responsabilidade do visitante.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3 text-yellow-200">
                    8. Contato
                </h2>
                <p>
                    Caso tenha dúvidas sobre estes Termos de Uso, entre em contato através do
                    Instagram{" "}
                    <a
                        href="https://www.instagram.com/robson.albuquerque_cm"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-yellow-300 underline hover:text-yellow-200 transition-colors duration-200"
                    >
                        @robson.albuquerque_cm
                    </a>{" "}
                    ou pela página de{" "}
                    <a
                        href="/feedback"
                        className="text-yellow-300 underline hover:text-yellow-200 transition-colors duration-200"
                    >
                        Feedback
                    </a>
                    .
                </p>

                <p className="text-sm text-amber-200 mt-8 text-center italic">
                    Última atualização: {new Date().toLocaleDateString("pt-BR")}
                </p>
            </section>
        </main>
    );
}
