"use client"

import {useState} from "react";
import { Info } from "lucide-react"

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "./ui/dialog";

interface SectionProps {
    title: string;
    description?: string; // description 빠져있었음
    children: React.ReactNode;
}

export default function Section({ title, children, description }: SectionProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section>
            <div className="flex items-center gap-4 mb-6">
                <h2 className="text-3xl font-bold dark:text-gray-100">{title}</h2>
                {description && (
                    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                        <DialogTrigger asChild>
                            <button
                                className="flex items-center gap-2 px-4 py-2 text-sm bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-full hover:bg-blue-200 dark:hover:bg-blue-800/50 transition-all duration-200 border border-blue-200 dark:border-blue-700"
                            >
                                <Info className="w-4 h-4" />
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
                <div className="flex-1 h-0.5 bg-gray-300 dark:bg-gray-700"></div>
            </div>
            <div className="grid md:grid-cols-1 grid-cols-2 gap-5">
                {children}
            </div>
        </section>
    );
} 