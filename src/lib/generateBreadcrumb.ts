import { breadcrumbMap } from "./breadcrumb-map";

export function generateBreadcrumbList(pathname: string) {
    const segments: string[] = breadcrumbMap[pathname] || [];
    const baseUrl = "https://aprenderviolaoonline.com.br";

    const breadcrumbItems = [
        {
            "@type": "ListItem",
            position: 1,
            name: "Início",
            item: baseUrl,
        },
    ];

    segments.forEach((segment: string, index: number) => {
        breadcrumbItems.push({
            "@type": "ListItem",
            position: index + 2,
            name: segment,
            item: baseUrl + pathname,
        });
    });

    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbItems,
    };
}
