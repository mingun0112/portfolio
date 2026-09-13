"use client";
import { useState } from "react";
import Image from "next/image";
import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import type { DescriptionLine, ItemColor, ModalContent, RightContent } from "@/data/portfolio";

interface ItemProps {
    title: string;
    subtitle: string;
    rightContent: RightContent;
    color: ItemColor;
    imageList?: string[];
    techStack?: string[];
    description?: (string | DescriptionLine)[];
    children?: React.ReactNode;
    modalContent?: ModalContent;
}

const dotColorClass: Record<ItemColor, string> = {
    blue: "bg-blue-500",
    green: "bg-green-500",
    yellow: "bg-yellow-500",
    purple: "bg-purple-500",
    red: "bg-red-400",
};

const descriptionVisibilityClass: Record<NonNullable<DescriptionLine["visibility"]>, string> = {
    all: "",
    "mobile-only": "md:hidden block",
    "desktop-only": "md:block hidden",
};

export default function Item({
    title,
    subtitle,
    rightContent,
    color,
    imageList,
    techStack,
    description,
    children,
    modalContent,
}: ItemProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div className="py-6 first:pt-0 border-b border-border last:border-0 md:grid md:grid-cols-[130px_1fr] md:gap-6">
                <div className="mb-2 md:mb-0 md:pt-1">
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        {rightContent.bottom}
                    </p>
                    {rightContent.top && (
                        <p className="text-xs text-muted-foreground/70 mt-0.5">{rightContent.top}</p>
                    )}
                </div>

                <div className="flex items-start gap-3">
                    <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${dotColorClass[color]}`} />
                    <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                            <h3 className="font-semibold text-foreground leading-snug">{title}</h3>
                            {modalContent && (
                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="text-xs font-medium text-muted-foreground underline underline-offset-4 decoration-muted-foreground/50 transition-colors hover:text-foreground"
                                >
                                    자세히 보기
                                </button>
                            )}
                        </div>
                        {subtitle && <p className="text-sm text-muted-foreground mt-0.5">{subtitle}</p>}

                        {description && description.length > 0 && (
                            <div className="mt-3 space-y-1.5">
                                {description.map((line, index) => {
                                    const { text, visibility = "all" } =
                                        typeof line === "string" ? { text: line } : line;
                                    if (!text) return null;
                                    return (
                                        <p
                                            key={index}
                                            className={`text-sm text-foreground/80 leading-relaxed ${descriptionVisibilityClass[visibility]}`}
                                        >
                                            {text}
                                        </p>
                                    );
                                })}
                            </div>
                        )}

                        {children && <div className="mt-3">{children}</div>}

                        {techStack && techStack.length > 0 && (
                            <div className="mt-3 flex flex-wrap gap-1.5">
                                {techStack.map((name) => (
                                    <span
                                        key={name}
                                        className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground"
                                    >
                                        {name}
                                    </span>
                                ))}
                            </div>
                        )}

                        {imageList && imageList.length > 0 && (
                            <div className="mt-4">
                                <LightGallery
                                    speed={500}
                                    plugins={[lgZoom]}
                                    elementClassNames="flex gap-3 overflow-x-auto"
                                >
                                    {imageList.map((src, index) => (
                                        <a
                                            href={src}
                                            data-src={src}
                                            key={index}
                                            className="block min-w-[260px] aspect-video relative overflow-hidden rounded-lg shadow-sm"
                                        >
                                            <Image
                                                src={src}
                                                alt={`Preview ${index + 1}`}
                                                fill
                                                className="object-cover"
                                                sizes="260px"
                                            />
                                        </a>
                                    ))}
                                </LightGallery>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {isModalOpen && (
                <div
                    className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
                    onClick={() => setIsModalOpen(false)}
                >
                    <div
                        className="bg-card text-card-foreground rounded-xl border border-border max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="sticky top-0 bg-card border-b border-border p-6 flex justify-between items-center">
                            <h2 className="text-xl font-bold">{title}</h2>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="text-muted-foreground hover:text-foreground text-2xl leading-none"
                            >
                                ×
                            </button>
                        </div>

                        <div className="p-6">
                            <div className="mb-6">
                                <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-2">
                                    프로젝트 정보
                                </h3>
                                <p className="text-foreground/80">{subtitle}</p>
                                <p className="text-sm text-muted-foreground mt-1">
                                    {rightContent.top} {rightContent.top && "|"} {rightContent.bottom}
                                </p>
                            </div>

                            {techStack && techStack.length > 0 && (
                                <div className="mb-6">
                                    <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-2">
                                        기술 스택
                                    </h3>
                                    <div className="flex flex-wrap gap-1.5">
                                        {techStack.map((name) => (
                                            <span
                                                key={name}
                                                className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground"
                                            >
                                                {name}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {modalContent?.description && (
                                <div className="mb-6">
                                    <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-2">
                                        프로젝트 설명
                                    </h3>
                                    <p className="text-foreground/80 whitespace-pre-line leading-relaxed">
                                        {modalContent.description}
                                    </p>
                                </div>
                            )}

                            {modalContent?.features && modalContent.features.length > 0 && (
                                <div className="mb-6">
                                    <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-2">
                                        주요 기능
                                    </h3>
                                    <ul className="space-y-2">
                                        {modalContent.features.map((feature, index) => (
                                            <li key={index} className="text-foreground/80 flex items-start gap-2">
                                                <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${dotColorClass[color]}`} />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {modalContent?.pptUrl && (
                                <div className="mb-6">
                                    <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-2">
                                        발표 자료
                                    </h3>
                                    <iframe
                                        src={modalContent.pptUrl}
                                        className="w-full h-96 border border-border rounded-lg"
                                        title="프로젝트 발표 자료"
                                        allowFullScreen={true}
                                    />
                                </div>
                            )}

                            {modalContent?.detailedImages && modalContent.detailedImages.length > 0 && (
                                <div className="mb-6">
                                    <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-2">
                                        상세 이미지
                                    </h3>
                                    <LightGallery
                                        speed={500}
                                        plugins={[lgZoom]}
                                        elementClassNames="grid grid-cols-1 md:grid-cols-2 gap-4"
                                    >
                                        {modalContent.detailedImages.map((src, index) => (
                                            <a
                                                href={src}
                                                data-src={src}
                                                key={index}
                                                className="aspect-video relative rounded-lg overflow-hidden shadow-sm block"
                                            >
                                                <Image
                                                    src={src}
                                                    alt={`Detail ${index + 1}`}
                                                    fill
                                                    className="object-cover"
                                                    sizes="(min-width: 768px) 50vw, 100vw"
                                                />
                                            </a>
                                        ))}
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
