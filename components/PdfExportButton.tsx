"use client";

import { useRef, useState } from "react";
import { Download, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import ResumeDocument from "@/components/ResumeDocument";
import { profile } from "@/data/portfolio";

export default function PdfExportButton() {
    const [isGenerating, setIsGenerating] = useState(false);
    const resumeRef = useRef<HTMLDivElement>(null);

    const handleExport = async () => {
        const element = resumeRef.current;
        if (!element || isGenerating) return;

        setIsGenerating(true);
        try {
            const [{ default: html2canvas }, { jsPDF }] = await Promise.all([
                import("html2canvas"),
                import("jspdf"),
            ]);

            const canvas = await html2canvas(element, {
                scale: 2,
                useCORS: true,
                backgroundColor: "#ffffff",
            });

            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF("p", "mm", "a4");
            const pageWidth = pdf.internal.pageSize.getWidth();
            const pageHeight = pdf.internal.pageSize.getHeight();

            const imgWidth = pageWidth;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;

            let heightLeft = imgHeight;
            let position = 0;

            pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;

            while (heightLeft > 0) {
                position -= pageHeight;
                pdf.addPage();
                pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;
            }

            pdf.save(`${profile.name.replace(/\s+/g, "_")}_Resume.pdf`);
        } catch (error) {
            console.error("PDF export failed:", error);
        } finally {
            setIsGenerating(false);
        }
    };

    return (
        <>
            <Button variant="outline" onClick={handleExport} disabled={isGenerating}>
                {isGenerating ? (
                    <Loader2 className="h-[1.1rem] w-[1.1rem] animate-spin" />
                ) : (
                    <Download className="h-[1.1rem] w-[1.1rem]" />
                )}
                <span className="ml-2">{isGenerating ? "생성 중..." : "이력서 PDF"}</span>
            </Button>

            {/* Off-screen resume layout captured for the PDF export; not shown to page visitors. */}
            <div
                aria-hidden="true"
                className="fixed top-0 pointer-events-none"
                style={{ left: -99999, zIndex: -1 }}
            >
                <div ref={resumeRef}>
                    <ResumeDocument />
                </div>
            </div>
        </>
    );
}
