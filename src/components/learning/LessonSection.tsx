import { ReactNode } from "react";

type LessonSectionProps = {
    title: string;
    children: ReactNode;
    eyebrow?: string;
    id?: string;
};

export default function LessonSection({
    title,
    children,
    eyebrow,
    id,
}: LessonSectionProps) {
    return (
        <section
            id={id}
            className="scroll-mt-24 border-t border-amber-200 py-10 md:py-14"
        >
            {eyebrow && (
                <p className="mb-2 text-sm font-bold uppercase tracking-wider text-amber-700">
                    {eyebrow}
                </p>
            )}

            <h2 className="text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
                {title}
            </h2>

            <div className="mt-5 max-w-3xl space-y-5 text-base leading-8 text-gray-700">
                {children}
            </div>
        </section>
    );
}