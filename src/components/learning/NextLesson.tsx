import Link from "next/link";

type NextLessonProps = {
    title: string;
    description: string;
    href: string;
};

export default function NextLesson({
    title,
    description,
    href,
}: NextLessonProps) {
    return (
        <section
            aria-labelledby="next-lesson-title"
            className="overflow-hidden rounded-3xl bg-gray-900 p-6 text-white md:p-8"
        >
            <p className="text-sm font-bold uppercase tracking-wider text-amber-300">
                Próximo passo
            </p>

            <h2
                id="next-lesson-title"
                className="mt-2 text-2xl font-bold md:text-3xl"
            >
                Continue sua jornada
            </h2>

            <p className="mt-3 max-w-2xl leading-7 text-gray-300">
                {description}
            </p>

            <Link
                href={href}
                className="mt-6 inline-flex items-center rounded-xl bg-amber-400 px-5 py-3 font-bold text-gray-900 transition hover:bg-amber-300"
            >
                {title}
                <span
                    className="ml-2"
                    aria-hidden="true"
                >
                    →
                </span>
            </Link>
        </section>
    );
}