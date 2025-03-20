interface ItemProps {
    title: string;
    subtitle: string;
    rightContent: {
        top: string;
        bottom: string;
    };
    color: string;
    children?: React.ReactNode;
}

export default function Item({ title, subtitle, rightContent, color, children }: ItemProps) {
    const borderColorClass = {
        blue: 'border-blue-500',
        green: 'border-green-500',
        yellow: 'border-yellow-500',
        purple: 'border-purple-500',
        red: 'border-red-500'
    }[color];

    return (
        <div className={`border-l-4 ${borderColorClass} pl-4`}>
            <div className="flex justify-between items-center">
                <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{subtitle}</p>
                </div>
                <div className="text-right">
                    <p className="text-gray-600 dark:text-gray-300">{rightContent.top}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{rightContent.bottom}</p>
                </div>
            </div>
            {children}
        </div>
    );
} 