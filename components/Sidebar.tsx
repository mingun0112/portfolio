"use client"

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import PdfExportButton from "@/components/PdfExportButton";
import { profile } from "@/data/portfolio";

const navItems = [
    { id: "education", label: "Education" },
    { id: "language-license", label: "Language & License" },
    { id: "career", label: "Career" },
    { id: "certification", label: "Certification" },
    { id: "projects", label: "Projects" },
    { id: "awards", label: "Awards" },
    { id: "skills", label: "Skills" },
];

export default function Sidebar() {
    const { setTheme } = useTheme();
    const [activeId, setActiveId] = useState(navItems[0].id);

    useEffect(() => {
        const sections = navItems
            .map((item) => document.getElementById(item.id))
            .filter((el): el is HTMLElement => el !== null);

        if (sections.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries.filter((entry) => entry.isIntersecting);
                if (visible.length > 0) {
                    setActiveId(visible[0].target.id);
                }
            },
            { rootMargin: "-15% 0px -70% 0px", threshold: 0 }
        );

        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, []);

    return (
        <aside className="lg:sticky lg:top-0 lg:h-screen lg:w-64 shrink-0 flex flex-col justify-between py-10 lg:py-16">
            <div>
                <div className="flex items-center gap-4 lg:block">
                    <div className="h-16 w-16 lg:h-24 lg:w-24 rounded-full overflow-hidden relative shrink-0">
                        <Image
                            src={profile.imageSrc}
                            alt={profile.name}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                    <div className="lg:mt-6">
                        <h1 className="text-xl lg:text-2xl font-bold tracking-tight text-foreground">
                            {profile.name}
                        </h1>
                        <p className="text-sm lg:text-base text-muted-foreground mt-1">{profile.role}</p>
                    </div>
                </div>

                <nav className="hidden lg:block mt-12">
                    <ul className="space-y-3">
                        {navItems.map((item) => (
                            <li key={item.id}>
                                <a
                                    href={`#${item.id}`}
                                    className={`group flex items-center gap-3 text-xs font-semibold uppercase tracking-widest transition-colors ${
                                        activeId === item.id
                                            ? "text-foreground"
                                            : "text-muted-foreground hover:text-foreground"
                                    }`}
                                >
                                    <span
                                        className={`h-px transition-all ${
                                            activeId === item.id
                                                ? "w-8 bg-foreground"
                                                : "w-4 bg-muted-foreground group-hover:w-8 group-hover:bg-foreground"
                                        }`}
                                    />
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            <div className="mt-10 lg:mt-0 flex flex-col gap-4">
                <div className="flex gap-4 text-sm">
                    <Link href={profile.cvHref} className="text-muted-foreground hover:text-foreground transition-colors">
                        CV
                    </Link>
                    <Link href={profile.githubHref} className="text-muted-foreground hover:text-foreground transition-colors">
                        Github
                    </Link>
                    <Link href={profile.blogHref} className="text-muted-foreground hover:text-foreground transition-colors">
                        Blog
                    </Link>
                </div>
                <div className="flex items-center gap-2">
                    <PdfExportButton />
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="icon">
                                <Sun className="h-[1.1rem] w-[1.1rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                                <Moon className="absolute h-[1.1rem] w-[1.1rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                                <span className="sr-only">Toggle theme</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="start">
                            <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </aside>
    );
}
