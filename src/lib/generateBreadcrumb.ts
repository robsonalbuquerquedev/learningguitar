import { breadcrumbMap } from "./breadcrumb-map";

interface BreadcrumbItem {
    "@type": "ListItem";
    position: number;
    name: string;
    item?: string;
}

export function generateBreadcrumbList(pathname: string) {
    const data = breadcrumbMap[pathname];
    const baseUrl = "https://aprenderviolaoonline.com.br";

    if (!data) {
        return {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
                {
                    "@type": "ListItem",
                    position: 1,
                    name: "Início",
                    item: baseUrl,
                },
            ],
        };
    }

    const breadcrumbItems: BreadcrumbItem[] = [
        {
            "@type": "ListItem",
            position: 1,
            name: "Início",
            item: baseUrl,
        },
    ];

    data.categories.forEach((category, index) => {
        breadcrumbItems.push({
            "@type": "ListItem",
            position: index + 2,
            name: category,
        });
    });

    breadcrumbItems.push({
        "@type": "ListItem",
        position: data.categories.length + 2,
        name: data.name,
        item: `${baseUrl}${pathname}`,
    });

    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbItems,
    };
}