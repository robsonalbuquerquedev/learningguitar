import Link from "next/link";

type NavigationItem = {
    title: string;
    href: string;
};

type LessonNavigationProps = {
    previous?: NavigationItem;
    next?: NavigationItem;
    home: NavigationItem;
};

export default function LessonNavigation({
    previous,
    next,
    home,
}: LessonNavigationProps) {
    return (
        <nav
            aria-label="Navegação entre aulas"
            className="border-t border-gray-200 py-8"
        >
            <div className="grid gap-4 md:grid-cols-3 md:items-center">
                <div>
                    {previous && (
                        <Link
                            href={previous.href}
                            className="group block rounded-2xl border border-gray-200 bg-white p-4 transition hover:border-amber-300 hover:shadow-sm"
                        >
                            <span className="text-sm text-gray-500">
                                ← Conteúdo anterior
                            </span>

                            <span className="mt-1 block font-semibold text-gray-900 group-hover:text-amber-700">
                                {previous.title}
                            </span>
                        </Link>
                    )}
                </div>

                <div className="text-center">
                    <Link
                        href={home.href}
                        className="font-semibold text-gray-700 transition hover:text-amber-700"
                    >
                        {home.title}
                    </Link>
                </div>

                <div className="md:text-right">
                    {next && (
                        <Link
                            href={next.href}
                            className="group block rounded-2xl border border-gray-200 bg-white p-4 text-left transition hover:border-amber-300 hover:shadow-sm md:text-right"
                        >
                            <span className="text-sm text-gray-500">
                                Próximo conteúdo →
                            </span>

                            <span className="mt-1 block font-semibold text-gray-900 group-hover:text-amber-700">
                                {next.title}
                            </span>
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
}