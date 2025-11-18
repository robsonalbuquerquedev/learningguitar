export type Dedilhado = {
    nome: string;
    padrao: string[];
    descricao?: string;
};

export const dedilhados: Dedilhado[] = [
    {
        nome: "Dedilhado de Pagode (Nível Iniciante)",
        padrao: ["P+IMA", "IMA", "P", "IMA"],
        descricao: "Clássico dedilhado de pagode. Mistura o polegar com os dedos indicador, médio e anelar (IMA).",
    },
    {
        nome: "Dedilhado 1",
        padrao: ["P", "I", "M", "A", "I"],
    },
    {
        nome: "Dedilhado 2",
        padrao: ["P e M", "I", "A", "I"],
    },
    {
        nome: "Dedilhado 3",
        padrao: ["P+IMA", "I", "A", "I"],
    },
    {
        nome: "Dedilhado 4",
        padrao: ["P", "I", "M", "A", "M", "I"],
    },
    {
        nome: "Dedilhado 5",
        padrao: ["P", "I", "M", "I", "A", "I", "M", "I"],
    },
    {
        nome: "Dedilhado 6",
        padrao: ["P", "I", "A", "M"],
    },
    {
        nome: "Dedilhado 7",
        padrao: ["P e M", "I", "M", "I", "P e A", "I", "M", "I"],
    },
    {
        nome: "Dedilhado 8",
        padrao: ["P+IMA", "A", "X", "P+IMA", "X"],
    },
];