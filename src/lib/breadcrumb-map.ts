export interface BreadcrumbData {
    categories: string[];
    name: string;
}

export const breadcrumbMap: Record<string, BreadcrumbData> = {
    // Fundamentos dos acordes
    "/acordes-maiores-e-menores-naturais": {
        categories: ["Aprender", "Fundamentos dos acordes"],
        name: "Acordes Maiores e Menores Naturais",
    },

    "/formacao-de-acordes": {
        categories: ["Aprender", "Fundamentos dos acordes"],
        name: "Formação de Acordes",
    },

    "/acordes-com-setimas": {
        categories: ["Aprender", "Fundamentos dos acordes"],
        name: "Acordes com Sétimas",
    },

    "/acordes-diminutos": {
        categories: ["Aprender", "Fundamentos dos acordes"],
        name: "Acordes Diminutos",
    },

    // Harmonia
    "/campo-harmonico": {
        categories: ["Aprender", "Harmonia"],
        name: "Campo Harmônico",
    },

    "/progressoes-de-acordes": {
        categories: ["Aprender", "Harmonia"],
        name: "Progressões de Acordes",
    },

    "/progressoes-harmonicas-mais-usadas": {
        categories: ["Aprender", "Harmonia"],
        name: "Progressões Harmônicas Mais Usadas",
    },

    "/progressoes-I-III-IV-V": {
        categories: ["Aprender", "Harmonia"],
        name: "Progressão I–III–IV–V",
    },

    "/progressoes-II-V-I": {
        categories: ["Aprender", "Harmonia"],
        name: "Progressão II–V–I",
    },

    "/subdominante-menor": {
        categories: ["Aprender", "Harmonia"],
        name: "Subdominante Menor",
    },

    // Notas e braço
    "/escalas": {
        categories: ["Aprender", "Notas e braço"],
        name: "Escalas",
    },

    "/memorizar-todas-as-notas": {
        categories: ["Aprender", "Notas e braço"],
        name: "Memorizar Todas as Notas",
    },

    "/memorizar-braco-do-violao": {
        categories: ["Aprender", "Notas e braço"],
        name: "Memorizar o Braço do Violão",
    },

    "/aprender-tocar-em-todos-os-tons": {
        categories: ["Aprender", "Notas e braço"],
        name: "Aprender a Tocar em Todos os Tons",
    },

    // Técnica
    "/batidas-basicas": {
        categories: ["Aprender", "Técnica"],
        name: "Batidas Básicas",
    },

    "/dedilhados": {
        categories: ["Aprender", "Técnica"],
        name: "Dedilhados",
    },

    "/shapes-solos": {
        categories: ["Aprender", "Técnica"],
        name: "Shapes de Solos",
    },

    // Loja Musical
    "/loja-musical": {
        categories: ["Loja Musical"],
        name: "Loja Musical",
    },

    "/loja-musical/afinadores": {
        categories: ["Loja Musical"],
        name: "Afinadores",
    },

    "/loja-musical/capotrastes": {
        categories: ["Loja Musical"],
        name: "Capotrastes",
    },

    "/loja-musical/palhetas": {
        categories: ["Loja Musical"],
        name: "Palhetas",
    },

    "/loja-musical/camisetas-musicais": {
        categories: ["Loja Musical"],
        name: "Camisetas Musicais",
    },

    // Mais
    "/sobre": {
        categories: ["Mais"],
        name: "Sobre",
    },

    "/feedback": {
        categories: ["Mais"],
        name: "Feedback",
    },

    "/recomendacoes": {
        categories: ["Mais"],
        name: "Recomendações",
    },
};