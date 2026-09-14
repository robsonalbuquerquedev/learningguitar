import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://aprenderviolaoonline.com.br";

    const rotas = [
        // Página inicial
        "",

        // Institucional
        "sobre",
        "feedback",
        "recomendacoes",
        "politica-de-privacidade",
        "termos-de-uso",
        "politica-de-afiliados",

        // Fundamentos dos acordes
        "acordes-maiores-e-menores-naturais",
        "formacao-de-acordes",
        "acordes-com-setimas",
        "acordes-diminutos",

        // Harmonia
        "campo-harmonico",
        "progressoes-de-acordes",
        "progressoes-harmonicas-mais-usadas",
        "progressoes-I-III-IV-V",
        "progressoes-II-V-I",
        "subdominante-menor",

        // Notas e braço
        "escalas",
        "memorizar-todas-as-notas",
        "memorizar-braco-do-violao",
        "aprender-tocar-em-todos-os-tons",

        // Técnica
        "batidas-basicas",
        "dedilhados",
        "shapes-solos",

        // Loja Musical
        "loja-musical",
        "loja-musical/afinadores",
        "loja-musical/capotrastes",
        "loja-musical/palhetas",
        "loja-musical/camisetas-musicais",
    ];

    return rotas.map((rota) => ({
        url: `${baseUrl}/${rota}`,
        lastModified: new Date(),
    }));
}