"use client";
import { useState } from "react";
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
    modalContent?: {
        description?: string;
        features?: string[];
        pptUrl?: string;
        detailedImages?: string[];
    };
}

export default function Item({
                                 title,
                                 subtitle,
                                 rightContent,
                                 color,
                                 imageList,
                                 techStack,
                                 children,
                                 modalContent,
                             }: ItemProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const borderColorClass = {
        blue: "border-blue-500",
        green: "border-green-500",
        yellow: "border-yellow-500",
        purple: "border-purple-500",
        red: "border-red-300",
    }[color];

    return (
        <>
            <div
                className={`border-l-4 ${borderColorClass} pl-4 p-4 rounded-lg md:rounded-none transition-colors`}
            >
                <div className="flex justify-between items-start">
                    <div>
                        <div className="flex items-center gap-2">
                            <h3 className="text-sm md:text-lg lg:text-xl font-semibold">
                                {title}
                            </h3>
                            {modalContent && (
                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="bg-gray-400 hover:bg-gray-500 text-white px-2 py-1 rounded text-xs font-medium transition-colors"
                                >
                                    상세보기
                                </button>
                            )}
                        </div>
                        <p className="text-xs md:text-sm lg:text-base">
                            {subtitle}
                        </p>
                    </div>
                    <div className="hidden md:block md:text-right">
                        <p>{rightContent.top}</p>
                        <p className="text-sm">{rightContent.bottom}</p>
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

            {isModalOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
                    onClick={() => setIsModalOpen(false)}
                >
                    <div
                        className="bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-6 flex justify-between items-center">
                            <h2 className="text-2xl font-bold">{title}</h2>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 text-2xl"
                            >
                                ×
                            </button>
                        </div>

                        <div className="p-6">
                            <div className="mb-6">
                                <h3 className="text-lg font-semibold mb-2">프로젝트 정보</h3>
                                <p className="text-gray-600 dark:text-gray-400">{subtitle}</p>
                                <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
                                    {rightContent.top} | {rightContent.bottom}
                                </p>
                            </div>

                            {techStack && techStack.length > 0 && (
                                <div className="mb-6">
                                    <h3 className="text-lg font-semibold mb-2">기술 스택</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {techStack.map(({ name, badgeSrc }, i) => (
                                            <Image
                                                key={i}
                                                src={badgeSrc}
                                                alt={`${name} badge`}
                                                width={120}
                                                height={24}
                                                className="h-6 w-auto"
                                                unoptimized
                                            />
                                        ))}
                                    </div>
                                </div>
                            )}

                            {modalContent?.description && (
                                <div className="mb-6">
                                    <h3 className="text-lg font-semibold mb-2">프로젝트 설명</h3>
                                    <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">
                                        {modalContent.description}
                                    </p>
                                </div>
                            )}

                            {modalContent?.features && modalContent.features.length > 0 && (
                                <div className="mb-6">
                                    <h3 className="text-lg font-semibold mb-2">주요 기능</h3>
                                    <ul className="space-y-2">
                                        {modalContent.features.map((feature, index) => (
                                            <li
                                                key={index}
                                                className="text-gray-700 dark:text-gray-300 flex items-start"
                                            >
                                                <span className={`${borderColorClass} border-l-2 pl-2`}>
                                                    {feature}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {modalContent?.pptUrl && (
                                <div className="mb-6">
                                    <h3 className="text-lg font-semibold mb-2">발표 자료</h3>
                                    <iframe
                                        src={modalContent.pptUrl}
                                        className="w-full h-96 border rounded-lg"
                                        title="프로젝트 발표 자료"
                                        allowFullScreen={true}

                                    />
                                </div>
                            )}

                            {modalContent?.detailedImages && modalContent.detailedImages.length > 0 && (
                                <div className="mb-6">
                                    <h3 className="text-lg font-semibold mb-2">상세 이미지</h3>
                                    <LightGallery speed={500} plugins={[lgZoom]}>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {modalContent.detailedImages.map((src, index) => (
                                                <a
                                                    href={src}
                                                    key={index}
                                                    className="aspect-video relative rounded-lg overflow-hidden shadow-md block"
                                                >
                                                    <Image
                                                        src={src}
                                                        alt={`Detail ${index + 1}`}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                </a>
                                            ))}
                                        </div>
                                    </LightGallery>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}