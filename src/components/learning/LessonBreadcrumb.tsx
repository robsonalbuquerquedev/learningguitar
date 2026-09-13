import Link from "next/link";

type BreadcrumbItem = {
    label: string;
    href?: string;
};

type LessonBreadcrumbProps = {
    items: BreadcrumbItem[];
};

export default function LessonBreadcrumb({
    items,
}: LessonBreadcrumbProps) {
    return (
        <nav aria-label="Navegação estrutural">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-600">
                {items.map((item, index) => {
                    const isLastItem = index === items.length - 1;

                    return (
                        <li
                            key={`${item.label}-${index}`}
                            className="flex items-center gap-2"
                        >
                            {item.href && !isLastItem ? (
                                <Link
                                    href={item.href}
                                    className="transition-colors hover:text-amber-700"
                                >
                                    {item.label}
                                </Link>
                            ) : (
                                <span
                                    aria-current={
                                        isLastItem ? "page" : undefined
                                    }
                                    className={
                                        isLastItem
                                            ? "font-medium text-gray-800"
                                            : ""
                                    }
                                >
                                    {item.label}
                                </span>
                            )}

                            {!isLastItem && (
                                <span aria-hidden="true">→</span>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}