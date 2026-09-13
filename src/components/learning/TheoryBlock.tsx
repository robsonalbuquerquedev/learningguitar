type TheoryBlockProps = {
    title: string;
    children: React.ReactNode;
    icon?: string;
};

export default function TheoryBlock({
    title,
    children,
    icon = "💡",
}: TheoryBlockProps) {
    return (
        <aside className="rounded-2xl border border-indigo-200 bg-indigo-50 p-6 md:p-7">
            <div className="flex items-start gap-4">
                <span
                    aria-hidden="true"
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-xl shadow-sm"
                >
                    {icon}
                </span>

                <div className="min-w-0">
                    <h3 className="text-lg font-bold text-gray-900">
                        {title}
                    </h3>

                    <div className="mt-3 text-sm leading-7 text-gray-700">
                        {children}
                    </div>
                </div>
            </div>
        </aside>
    );
}