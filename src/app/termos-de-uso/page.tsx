export default function TermosDeUso() {
    return (
        <main className="max-w-4xl mx-auto px-6 py-24 text-white">
            <section className="bg-black/40 backdrop-blur-md p-6 sm:p-10 rounded-2xl shadow-xl">
                <h1 className="text-3xl sm:text-4xl font-bold text-yellow-300 mb-6 text-center">
                    Termos de Uso
                </h1>

                <p className="mb-4">
                    Bem-vindo ao <strong>LearningGuitar 🎸</strong>! Ao acessar e utilizar este site,
                    você concorda com os termos e condições abaixo. Recomendamos a leitura
                    cuidadosa antes de continuar navegando.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3 text-yellow-200">
                    1. Uso do conteúdo
                </h2>
                <p className="mb-4">
                    O conteúdo disponível neste site é voltado para fins educacionais,
                    especialmente no aprendizado de violão. É proibida a reprodução, cópia
                    ou redistribuição de qualquer material sem autorização prévia.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3 text-yellow-200">
                    2. Responsabilidade do usuário
                </h2>
                <p className="mb-4">
                    O usuário compromete-se a utilizar o site de maneira ética, respeitosa e
                    dentro dos limites legais, não realizando ações que prejudiquem o
                    funcionamento da plataforma ou afetem a experiência de outros visitantes.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3 text-yellow-200">
                    3. Modificações
                </h2>
                <p className="mb-4">
                    O <strong>LearningGuitar 🎸</strong> reserva-se o direito de alterar ou atualizar
                    estes Termos de Uso a qualquer momento, sem aviso prévio. A versão mais
                    recente estará sempre disponível nesta página.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3 text-yellow-200">
                    4. Direitos autorais
                </h2>
                <p className="mb-4">
                    Todo o design, conteúdo e código-fonte deste site são de propriedade de
                    <strong> Robson Albuquerque</strong> e protegidos por leis de direitos autorais e
                    propriedade intelectual.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-3 text-yellow-200">
                    5. Contato
                </h2>
                <p>
                    Caso tenha dúvidas sobre estes Termos de Uso, entre em contato pelo
                    Instagram{" "}
                    <a
                        href="https://www.instagram.com/robson.albuquerque_cm"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-yellow-300 underline hover:text-yellow-200 transition-colors duration-200"
                    >
                        @robson.albuquerque_cm
                    </a>.
                </p>
            </section>
        </main>
    );
}
