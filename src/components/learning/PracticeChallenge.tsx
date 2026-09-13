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
        question: "Qual destes acordes é menor?",
        options: ["C", "G", "Am", "E"],
        correctAnswer: "Am",
        explanation: "O m indica que o acorde é menor.",
    },
    {
        question: "Qual é a diferença básica entre C e Cm?",
        options: [
            "C é maior e Cm é menor.",
            "C é menor e Cm é maior.",
            "Eles são exatamente o mesmo acorde.",
            "Cm não é um acorde.",
        ],
        correctAnswer: "C é maior e Cm é menor.",
        explanation:
            "C representa Dó maior, enquanto Cm representa Dó menor.",
    },
];

export default function PracticeChallenge() {
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
                        Excelente! Você já entendeu os conceitos principais.
                    </p>
                ) : (
                    <p className="mt-3 font-medium text-gray-700">
                        Vale a pena revisar a aula e tentar novamente.
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
                                className={`w-full rounded-xl border p-4 text-left text-sm font-medium text-gray-800 transition ${optionClass}`}
                            >
                                {option}
                            </button>
                        );
                    })}
                </div>

                {selectedAnswer !== null && (
                    <div
                        className={`mt-5 rounded-xl p-4 ${
                            isCorrect
                                ? "bg-green-50 text-green-800"
                                : "bg-red-50 text-red-800"
                        }`}
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