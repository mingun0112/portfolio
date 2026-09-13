import {
    awards,
    careers,
    certifications,
    education,
    licenses,
    languages,
    profile,
    projects,
    skillGroups,
    type PortfolioItem,
} from "@/data/portfolio";

function descriptionTexts(item: PortfolioItem): string[] {
    if (!item.description) return [];
    return item.description
        .map((line) => (typeof line === "string" ? line : line.text))
        .filter((text) => text && text.trim().length > 0);
}

function ResumeSectionHeading({ children }: { children: React.ReactNode }) {
    return (
        <h2 className="text-[11px] font-bold uppercase tracking-[0.15em] text-gray-900 border-b border-gray-300 pb-1 mb-3">
            {children}
        </h2>
    );
}

function ResumeItemRow({ item }: { item: PortfolioItem }) {
    const bullets = descriptionTexts(item);
    return (
        <div className="mb-3 last:mb-0">
            <div className="flex justify-between items-baseline gap-4">
                <p className="text-[12px] font-bold text-gray-900">{item.title}</p>
                <p className="text-[10px] text-gray-500 whitespace-nowrap">{item.rightContent.bottom}</p>
            </div>
            {(item.subtitle || item.rightContent.top) && (
                <div className="flex justify-between items-baseline gap-4">
                    <p className="text-[10.5px] text-gray-600">{item.subtitle}</p>
                    <p className="text-[10px] text-gray-500 whitespace-nowrap">{item.rightContent.top}</p>
                </div>
            )}
            {bullets.length > 0 && (
                <ul className="mt-1 list-disc list-outside pl-4 space-y-0.5">
                    {bullets.map((text, index) => (
                        <li key={index} className="text-[10.5px] text-gray-700 leading-snug">
                            {text}
                        </li>
                    ))}
                </ul>
            )}
            {item.techStack && item.techStack.length > 0 && (
                <p className="mt-1 text-[10px] text-gray-500">
                    <span className="font-semibold">Stack </span>
                    {item.techStack.join(", ")}
                </p>
            )}
        </div>
    );
}

export default function ResumeDocument() {
    return (
        <div className="bg-white text-gray-900" style={{ width: 794, padding: 48, fontFamily: "Arial, sans-serif" }}>
            <header className="mb-6 pb-4 border-b-2 border-gray-900">
                <h1 className="text-[26px] font-bold tracking-tight text-gray-900">{profile.name}</h1>
                <p className="text-[13px] text-gray-600 mt-1">{profile.role}</p>
                <p className="text-[10.5px] text-gray-500 mt-2">
                    {profile.siteUrl} &nbsp;|&nbsp; {profile.githubHref.replace("https://", "")} &nbsp;|&nbsp;{" "}
                    {profile.blogHref.replace("https://", "")}
                </p>
            </header>

            <section className="mb-5">
                <ResumeSectionHeading>Education</ResumeSectionHeading>
                {education.map((item) => (
                    <ResumeItemRow key={item.title} item={item} />
                ))}
            </section>

            <section className="mb-5">
                <ResumeSectionHeading>Career</ResumeSectionHeading>
                {careers.map((item) => (
                    <ResumeItemRow key={item.title} item={item} />
                ))}
            </section>

            <section className="mb-5">
                <ResumeSectionHeading>Projects</ResumeSectionHeading>
                {projects.map((item) => (
                    <ResumeItemRow key={item.title} item={item} />
                ))}
            </section>

            <section className="mb-5">
                <ResumeSectionHeading>Certification</ResumeSectionHeading>
                {certifications.map((item) => (
                    <ResumeItemRow key={item.title} item={item} />
                ))}
            </section>

            <section className="mb-5">
                <ResumeSectionHeading>Awards</ResumeSectionHeading>
                {awards.map((item) => (
                    <ResumeItemRow key={item.title} item={item} />
                ))}
            </section>

            <section className="mb-5">
                <ResumeSectionHeading>Language &amp; License</ResumeSectionHeading>
                {[...languages, ...licenses].map((item) => (
                    <ResumeItemRow key={item.title} item={item} />
                ))}
            </section>

            <section>
                <ResumeSectionHeading>Skills</ResumeSectionHeading>
                <div className="space-y-1">
                    {skillGroups.map((group) => (
                        <p key={group.category} className="text-[10.5px] text-gray-700">
                            <span className="font-bold text-gray-900">{group.category}: </span>
                            {group.skills.join(", ")}
                        </p>
                    ))}
                </div>
            </section>
        </div>
    );
}
