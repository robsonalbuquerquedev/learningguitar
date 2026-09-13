type ConceptCardProps = {
    icon: string;
    title: string;
    children: React.ReactNode;
};

export default function ConceptCard({
    icon,
    title,
    children,
}: ConceptCardProps) {
    return (
        <aside className="rounded-2xl border border-amber-200 bg-amber-50 p-5 md:p-6">
            <div className="flex items-start gap-4">
                <span
                    aria-hidden="true"
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-xl shadow-sm"
                >
                    {icon}
                </span>

                <div>
                    <h3 className="font-bold text-gray-900">
                        {title}
                    </h3>

                    <div className="mt-2 text-sm leading-6 text-gray-700">
                        {children}
                    </div>
                </div>
            </div>
        </aside>
    );
}