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
        red: 'border-red-300'
    }[color];

    const bgColorClass = {
        blue: 'bg-blue-500 md:bg-white md:dark:bg-gray-900',
        green: 'bg-green-500 md:bg-white md:dark:bg-gray-900',
        yellow: 'bg-yellow-500 md:bg-white md:dark:bg-gray-900',
        purple: 'bg-purple-500 md:bg-white md:dark:bg-gray-900',
        red: 'bg-red-300 md:bg-white md:dark:bg-gray-900'
    }[color];

    return (
        <div className={`border-l-4 ${borderColorClass} ${bgColorClass} pl-4 p-4 rounded-lg md:rounded-none transition-colors`}>
            <div className={`flex justify-between items-start`}>
                <div>
                    <h3 className="text-sm md:text-lg lg:text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
                    <p className="text-xs md:text-sm lg:text-base text-gray-600 dark:text-gray-300">{subtitle}</p>
                </div>
                <div className="hidden md:block md:text-right ">
                    <p className="text-gray-600 dark:text-gray-300">{rightContent.top}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{rightContent.bottom}</p>
                </div>
            </div>
            {children}
        </div>
    );
} 