"use client"

import { useState } from "react";
import { Info } from "lucide-react"

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "./ui/dialog";

interface SectionProps {
    id?: string;
    title: string;
    description?: string;
    children: React.ReactNode;
}

export default function Section({ id, title, children, description }: SectionProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section id={id} className="scroll-mt-8">
            <div className="flex items-center gap-3 mb-6">
                <h2 className="text-lg font-bold tracking-tight text-foreground">{title}</h2>
                {description && (
                    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                        <DialogTrigger asChild>
                            <button
                                className="flex items-center gap-2 px-3 py-1 text-xs bg-muted text-muted-foreground rounded-full hover:text-foreground transition-colors"
                            >
                                <Info className="w-3.5 h-3.5" />
                                더보기
                            </button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>{title} 정보</DialogTitle>
                            </DialogHeader>
                            {description}
                        </DialogContent>
                    </Dialog>
                )}
                <div className="flex-1 h-px bg-border"></div>
            </div>
            <div className="flex flex-col">
                {children}
            </div>
        </section>
    );
}
