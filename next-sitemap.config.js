/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://aprenderviolaoonline.com.br', // Seu domínio
    generateRobotsTxt: true, // Cria robots.txt automaticamente
    sitemapSize: 5000, // Máximo de URLs por sitemap
    changefreq: 'daily', // Frequência de alteração (opcional)
    priority: 0.7, // Prioridade (opcional)
    // opcional: rotas específicas para incluir ou excluir
    exclude: ['/admin/*'],
};
