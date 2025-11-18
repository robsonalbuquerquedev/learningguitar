"use client";

export default function ScrollToProjetosButton() {
    return (
        <button
            onClick={() =>
                document
                    .getElementById("projetos-section")
                    ?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-yellow-300 text-amber-900 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-yellow-400 transition-all duration-300 cursor-pointer"
        >
            🎨 Ver Projetos
        </button>
    );
}
