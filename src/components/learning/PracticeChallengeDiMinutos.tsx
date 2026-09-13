"use client";

import { useState } from "react";

type ChallengeQuestion = {
    question: string;
    options: string[];
    correctAnswer: string;
    explanation: string;
};

const questions: ChallengeQuestion[] = [
    {
        question: "Qual destes acordes é um meio-diminuto?",
        options: ["C7", "Cm7", "C°7", "Cm7♭5"],
        correctAnswer: "Cm7♭5",
        explanation:
            "O acorde meio-diminuto é representado por m7♭5 ou pelo símbolo ø. Sua fórmula é 1 – ♭3 – ♭5 – ♭7.",
    },
    {
        question: "Qual é a fórmula do acorde meio-diminuto?",
        options: [
            "1 – 3 – 5 – 7",
            "1 – ♭3 – ♭5 – ♭7",
            "1 – ♭3 – ♭5 – 𝄫7",
            "1 – 3 – ♭5 – ♭7",
        ],
        correctAnswer: "1 – ♭3 – ♭5 – ♭7",
        explanation:
            "O meio-diminuto possui tônica, terça menor, quinta diminuta e sétima menor.",
    },
    {
        question: "Qual é a principal diferença entre °7 e m7♭5?",
        options: [
            "O °7 possui terça maior.",
            "O m7♭5 não possui quinta.",
            "O °7 possui sétima diminuta, enquanto o m7♭5 possui sétima menor.",
            "Não existe diferença entre eles.",
        ],
        correctAnswer:
            "O °7 possui sétima diminuta, enquanto o m7♭5 possui sétima menor.",
        explanation:
            "Os dois acordes possuem 1, ♭3 e ♭5. A diferença está na sétima: o °7 usa 𝄫7, enquanto o m7♭5 usa ♭7.",
    },
    {
        question: "Em Lá menor, qual acorde pode aparecer depois de Bm7♭5 para preparar Am?",
        options: ["C", "D7", "E7", "F"],
        correctAnswer: "E7",
        explanation:
            "A sequência Bm7♭5 → E7 → Am cria um movimento de preparação e resolução muito importante na harmonia menor.",
    },
];

export default function PracticeChallengeDiMinutos() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [score, setScore] = useState(0);
    const [finished, setFinished] = useState(false);

    const question = questions[currentQuestion];

    function handleAnswer(answer: string) {
        if (selectedAnswer !== null) {
            return;
        }

        setSelectedAnswer(answer);

        if (answer === question.correctAnswer) {
            setScore((currentScore) => currentScore + 1);
        }
    }

    function handleNext() {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion((current) => current + 1);
            setSelectedAnswer(null);
        } else {
            setFinished(true);
        }
    }

    function handleRestart() {
        setCurrentQuestion(0);
        setSelectedAnswer(null);
        setScore(0);
        setFinished(false);
    }

    if (finished) {
        return (
            <section
                aria-labelledby="challenge-result-title"
                className="rounded-3xl border border-amber-200 bg-white p-6 text-center shadow-sm md:p-8"
            >
                <span
                    className="text-4xl"
                    aria-hidden="true"
                >
                    {score === questions.length ? "🎉" : "🎸"}
                </span>

                <h3
                    id="challenge-result-title"
                    className="mt-4 text-2xl font-bold text-gray-900"
                >
                    Desafio concluído!
                </h3>

                <p className="mt-2 text-gray-600">
                    Você acertou {score} de {questions.length} questões.
                </p>

                {score === questions.length ? (
                    <p className="mt-3 font-medium text-amber-700">
                        Excelente! Você já entendeu os principais conceitos dos
                        acordes diminutos e meio-diminutos.
                    </p>
                ) : (
                    <p className="mt-3 font-medium text-gray-700">
                        Vale a pena revisar as fórmulas e as funções harmônicas
                        antes de tentar novamente.
                    </p>
                )}

                <button
                    type="button"
                    onClick={handleRestart}
                    className="mt-6 rounded-xl bg-gray-900 px-5 py-3 font-semibold text-white transition hover:bg-gray-800"
                >
                    Tentar novamente
                </button>
            </section>
        );
    }

    const isCorrect = selectedAnswer === question.correctAnswer;

    return (
        <section
            aria-labelledby="practice-challenge-title"
            className="rounded-3xl border border-indigo-200 bg-indigo-50 p-6 md:p-8"
        >
            <div>
                <p className="text-sm font-bold uppercase tracking-wider text-indigo-700">
                    Mini desafio
                </p>

                <h3
                    id="practice-challenge-title"
                    className="mt-2 text-2xl font-bold text-gray-900"
                >
                    Vamos ver se você entendeu
                </h3>

                <p className="mt-2 text-sm text-gray-600">
                    Questão {currentQuestion + 1} de {questions.length}
                </p>
            </div>

            <div className="mt-6 rounded-2xl bg-white p-5 shadow-sm">
                <p className="font-bold leading-7 text-gray-900">
                    {question.question}
                </p>

                <div className="mt-5 space-y-3">
                    {question.options.map((option) => {
                        const isSelected = selectedAnswer === option;
                        const isAnswer = option === question.correctAnswer;

                        let optionClass =
                            "border-gray-200 bg-white hover:border-amber-300 hover:bg-amber-50";

                        if (selectedAnswer !== null && isAnswer) {
                            optionClass =
                                "border-green-300 bg-green-50";
                        } else if (isSelected && !isAnswer) {
                            optionClass =
                                "border-red-300 bg-red-50";
                        }

                        return (
                            <button
                                key={option}
                                type="button"
                                onClick={() => handleAnswer(option)}
                                disabled={selectedAnswer !== null}
                                className={`w - full rounded - xl border p - 4 text - left text - sm font - medium text - gray - 800 transition ${ optionClass } `}
                            >
                                {option}
                            </button>
                        );
                    })}
                </div>

                {selectedAnswer !== null && (
                    <div
                        className={`mt - 5 rounded - xl p - 4 ${
    isCorrect
        ? "bg-green-50 text-green-800"
        : "bg-red-50 text-red-800"
} `}
                        role="status"
                    >
                        <p className="font-bold">
                            {isCorrect ? "Resposta correta! 🎉" : "Quase!"}
                        </p>

                        <p className="mt-1 text-sm leading-6">
                            {question.explanation}
                        </p>
                    </div>
                )}

                {selectedAnswer !== null && (
                    <button
                        type="button"
                        onClick={handleNext}
                        className="mt-5 rounded-xl bg-gray-900 px-5 py-3 font-semibold text-white transition hover:bg-gray-800"
                    >
                        {currentQuestion < questions.length - 1
                            ? "Próxima questão"
                            : "Ver resultado"}
                    </button>
                )}
            </div>
        </section>
    );
}