import type { Metadata } from "next";
import EscalasContent from "@/components/escalas/EscalasContent";

export const metadata: Metadata = {
    title: { absolute: "Escalas Musicais no Violão | Guia Definitivo" },

    description:
        "Aprenda todas as escalas musicais essenciais para violão: escala maior, menor natural, harmônica, melódica, modos gregos e aplicações práticas. Explicação simples, visual e intuitiva.",

    keywords: [
        "escalas musicais",
        "escala maior",
        "escala menor natural",
        "escala menor harmônica",
        "escala menor melódica",
        "escalas para violão",
        "como estudar escalas no violão",
        "modos gregos",
        "escalas para iniciantes",
        "como montar escalas",
        "escala cromática",
        "escala diatônica",
        "notas musicais no violão"
    ],

    alternates: {
        canonical: "https://aprenderviolaoonline.com.br/escalas",
    },

    openGraph: {
        title: "Escalas Musicais no Violão | Guia Completo",
        description:
            "Aprenda as escalas essenciais para violão com exemplos práticos, visualização clara e teoria musical simplificada.",
        url: "https://aprenderviolaoonline.com.br/escalas",
        images: ["/og-image.png"],
    },
};
