import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://aprenderviolaoonline.com.br";

    // Rotas institucionais
    const institucionais = [
        "",
        "sobre",
        "feedback",
        "recomendacoes",
        "politica-de-privacidade",
        "termos-de-uso",
        "politica-de-afiliados",
    ];

    // Teoria — Fundamentos
    const fundamentos = [
        "acordes-maiores-e-menores-naturais",
        "formacao-de-acordes",
        "escalas",
        "campo-harmonico",
    ];

    // Teoria — Acordes Avançados
    const acordesAvancados = [
        "acordes-com-setimas",
        "acordes-de-minutos",
    ];

    // Teoria — Progressões
    const progressoes = [
        "progressoes-de-acordes",
        "progressoes-harmonicas-mais-usadas",
        "subdominante-menor",
        "progressoes-I-III-IV-V",
        "progressoes-II-V-I",
    ];

    // Teoria — Aplicações
    const aplicacoes = [
        "aprender-tocar-em-todos-os-tons",
        "batidas-basicas",
        "dedilhados",
    ];

    // Ferramentas
    const ferramentas = [
        "memorizar-braco-do-violao",
        "memorizar-todas-as-notas",
    ];

    // Solos
    const solos = [
        "shapes-solos",
    ];

    // Loja Musical
    const loja = [
        "loja-musical",
        "loja-musical/afinadores",
        "loja-musical/capotrastes",
        "loja-musical/palhetas",
        "loja-musical/camisetas-musicais",
    ];

    // Agrupando todas as rotas
    const todasAsRotas = [
        ...institucionais,
        ...fundamentos,
        ...acordesAvancados,
        ...progressoes,
        ...aplicacoes,
        ...ferramentas,
        ...solos,
        ...loja,
    ];

    return todasAsRotas.map((rota) => ({
        url: `${baseUrl}/${rota}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: rota === "" ? 1.0 : 0.7,
    }));
}
