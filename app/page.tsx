"use client"

import Sidebar from "@/components/Sidebar";
import Section from "@/components/Section";
import Item from "@/components/Item";
import {
    awards,
    careers,
    certifications,
    education,
    licenses,
    languages,
    projects,
    skillGroups,
} from "@/data/portfolio";

export default function Home() {
    return (
        <div className="min-h-screen">
            <div className="mx-auto max-w-6xl px-6 lg:px-10 lg:flex lg:gap-16">
                <Sidebar />

                <main className="flex-1 min-w-0 py-10 lg:py-16 space-y-16">
                    <Section id="education" title="Education">
                        {education.map((item) => (
                            <Item key={item.title} {...item} />
                        ))}
                    </Section>

                    <Section id="language-license" title="Language & License">
                        <div className="grid gap-10 sm:grid-cols-2">
                            <div>
                                <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-3">
                                    Language
                                </h3>
                                <div className="flex flex-col">
                                    {languages.map((item) => (
                                        <Item key={item.title} {...item} />
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-3">
                                    License
                                </h3>
                                <div className="flex flex-col">
                                    {licenses.map((item) => (
                                        <Item key={item.title} {...item} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Section>

                    <Section id="career" title="Career">
                        {careers.map((item) => (
                            <Item key={item.title} {...item} />
                        ))}
                    </Section>

                    <Section id="certification" title="Certification">
                        {certifications.map((item) => (
                            <Item key={item.title} {...item} />
                        ))}
                    </Section>

                    <Section id="projects" title="Projects">
                        {projects.map((item) => (
                            <Item key={item.title} {...item} />
                        ))}
                    </Section>

                    <Section id="awards" title="Awards">
                        {awards.map((item) => (
                            <Item key={item.title} {...item} />
                        ))}
                    </Section>

                    <Section id="skills" title="Skills">
                        <div className="flex flex-col gap-6 py-2">
                            {skillGroups.map((group) => (
                                <div key={group.category}>
                                    <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-3">
                                        {group.category}
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {group.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="rounded-full border border-border px-3 py-1 text-xs font-medium text-foreground/80"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Section>
                </main>
            </div>

            <footer className="text-center text-sm text-muted-foreground py-10">
                <p>© 2025 Mingyun Jeong. All rights reserved.</p>
            </footer>
        </div>
    );
}
