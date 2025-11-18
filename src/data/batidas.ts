export type Batida = {
    nome: string;
    padrao: ("down" | "up" | "mute")[];
    descricao?: string;
};

export const batidas: Batida[] = [
    { nome: "Batida 1", padrao: ["down", "up", "mute"], descricao: "Batida de reggae." },
    { nome: "Batida 2", padrao: ["down", "down", "up", "up", "down"], descricao: "Batida de rock." },
    { nome: "Batida 3", padrao: ["down", "mute", "up", "up", "mute", "up"] },
    { nome: "Batida 4", padrao: ["down", "down", "up", "up", "down", "up"] },
    { nome: "Batida 5", padrao: ["down", "down", "up", "up", "down", "down"], descricao: "Ideal para louvores suaves e lentos." },
    { nome: "Batida 6", padrao: ["down", "down", "up", "up", "down", "down", "up", "down", "up"] },
    { nome: "Batida 7", padrao: ["down", "mute", "up", "up", "down", "mute", "up", "down", "up"] },
    { nome: "Batida 8", padrao: ["down", "down", "up"] },
    { nome: "Batida 9", padrao: ["down", "mute", "up", "mute", "up"] },
    { nome: "Batida 10", padrao: ["down", "up", "up"], descricao: "Batida de sertanejo." },
    { nome: "Batida 11", padrao: ["down", "up", "up", "down"] },
    { nome: "Batida 12", padrao: ["down", "down", "up", "down", "up", "down"] },
    { nome: "Batida 13", padrao: ["down", "up", "up", "down", "up", "up", "down"], descricao: "Perfeita para músicas mais animadas." },
    { nome: "Batida 14", padrao: ["down", "down", "up", "down", "up", "down", "down"], descricao: "Muito usada em músicas pop e adoração." },
    { nome: "Batida 15", padrao: ["down", "down", "up", "up", "down", "down", "down", "up"] },
    { nome: "Batida 16", padrao: ["down", "up", "up", "down", "up", "up", "down", "up", "down", "up"] },
];