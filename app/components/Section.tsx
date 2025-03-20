interface SectionProps {
    title: string;
    children: React.ReactNode;
}

export default function Section({ title, children }: SectionProps) {
    return (
        <section>
            <div className="flex items-center gap-4 mb-6">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{title}</h2>
                <div className="flex-1 h-0.5 bg-gray-300 dark:bg-gray-700"></div>
            </div>
            <div className="space-y-4">
                {children}
            </div>
        </section>
    );
} 