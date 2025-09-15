"use client";
import Image from "next/image";
import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";

interface ItemProps {
    title: string;
    subtitle: string;
    rightContent: {
        top: string;
        bottom: string;
    };
    color: "blue" | "green" | "yellow" | "purple" | "red";
    imageList?: string[];
    techStack?: {
        name: string;
        badgeSrc: string;
    }[];
    children?: React.ReactNode;
}

export default function Item({
                                 title,
                                 subtitle,
                                 rightContent,
                                 color,
                                 imageList,
                                 techStack,
                                 children,
                             }: ItemProps) {
    const borderColorClass = {
        blue: "border-blue-500",
        green: "border-green-500",
        yellow: "border-yellow-500",
        purple: "border-purple-500",
        red: "border-red-300",
    }[color];

    // const bgColorClass = {
    //     blue: "bg-blue-500 md:bg-white md:dark:bg-gray-900",
    //     green: "bg-green-500 md:bg-white md:dark:bg-gray-900",
    //     yellow: "bg-yellow-500 md:bg-white md:dark:bg-gray-900",
    //     purple: "bg-purple-500 md:bg-white md:dark:bg-gray-900",
    //     red: "bg-red-300 md:bg-white md:dark:bg-gray-900",
    // }[color];

    return (
        <div
            className={`border-l-4 ${borderColorClass}  pl-4 p-4 rounded-lg md:rounded-none transition-colors`}
        >
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="text-sm md:text-lg lg:text-xl font-semibold ">
                        {title}
                    </h3>
                    <p className="text-xs md:text-sm lg:text-base ">
                        {subtitle}
                    </p>
                </div>
                <div className="hidden md:block md:text-right">
                    <p className="">{rightContent.top}</p>
                    <p className="text-sm ">
                        {rightContent.bottom}
                    </p>
                    {techStack && techStack.length > 0 && (
                        <div className="mt-2 flex flex-wrap justify-end gap-2">
                            {techStack.map(({ name, badgeSrc }, i) => (
                                <Image
                                    key={i}
                                    src={badgeSrc}
                                    alt={`${name} badge`}
                                    width={100}
                                    height={20}
                                    className="h-5 w-auto"
                                    unoptimized
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {children && <div className="mt-4">{children}</div>}

            {imageList && imageList.length > 0 && (
                <div className="mt-4">
                    <LightGallery
                        speed={500}
                        plugins={[lgZoom]}
                        elementClassNames="flex gap-4 overflow-x-auto"
                    >
                        {imageList.map((src, index) => (
                            <a
                                href={src}
                                key={index}
                                className="min-w-[300px] aspect-video relative rounded-lg overflow-hidden shadow-md block"
                            >
                                <Image
                                    src={src}
                                    alt={`Preview ${index + 1}`}
                                    fill
                                    className="object-cover"
                                />
                            </a>
                        ))}
                    </LightGallery>
                </div>
            )}
        </div>
    );
}
