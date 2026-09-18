import type { ExperienceCopy } from "@/content/types"

interface ExperienceShowcaseProps {
    copy: ExperienceCopy
}

export function ExperienceShowcase({ copy }: ExperienceShowcaseProps) {
    return (
        <section
            id="experience"
            aria-labelledby="experience-heading"
            className="relative z-10 w-full bg-card px-6 pb-24 pt-20 text-card-foreground sm:px-10 md:px-16 lg:px-24 lg:pb-36"
        >
            <header className="mb-12 flex items-end justify-between gap-8 border-b border-border/60 pb-8 md:mb-16">
                <div>
                    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                        {copy.eyebrow}
                    </p>
                    <h2 id="experience-heading" className="font-heading text-4xl font-normal tracking-tight sm:text-6xl md:text-7xl">
                        {copy.title}
                    </h2>
                </div>
                <p className="hidden max-w-md text-right text-sm leading-relaxed text-muted-foreground md:block">
                    {copy.summary}
                </p>
            </header>

            <ol className="border-t border-border/60">
                {copy.items.map((experience, index) => (
                    <li key={experience.company} className="border-b border-border/60 py-10 md:py-14">
                        <article className="grid gap-10 lg:grid-cols-[minmax(15rem,0.65fr)_minmax(24rem,1.35fr)] lg:gap-16">
                            <div>
                                <p className="mb-4 font-mono text-xs text-muted-foreground">/{String(index + 1).padStart(2, "0")}</p>
                                <h3 className="font-heading text-4xl font-normal tracking-[-0.04em] sm:text-5xl">
                                    {experience.company}
                                </h3>
                                <p className="mt-4 text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                                    {experience.focus}
                                </p>
                            </div>

                            <div>
                                <p className="max-w-3xl text-lg leading-relaxed sm:text-xl">{experience.description}</p>

                                <dl className="mt-8 grid gap-5 border-y border-border/60 py-6 sm:grid-cols-3">
                                    <div>
                                        <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">{copy.roleLabel}</dt>
                                        <dd className="mt-2 text-sm leading-relaxed">{experience.role}</dd>
                                    </div>
                                    <div>
                                        <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">{copy.periodLabel}</dt>
                                        <dd className="mt-2 text-sm leading-relaxed">{experience.period}</dd>
                                    </div>
                                    <div>
                                        <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">{copy.locationLabel}</dt>
                                        <dd className="mt-2 text-sm leading-relaxed">{experience.location}</dd>
                                    </div>
                                </dl>

                                <ul className="mt-8 space-y-4">
                                    {experience.highlights.map((highlight) => (
                                        <li key={highlight} className="grid grid-cols-[auto_1fr] gap-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                                            <span aria-hidden="true" className="mt-[0.7em] size-1 rounded-full bg-current" />
                                            <span>{highlight}</span>
                                        </li>
                                    ))}
                                </ul>

                                <ul className="mt-8 flex flex-wrap gap-2" aria-label={`${experience.company}: ${copy.technologiesLabel}`}>
                                    {experience.technologies.map((technology) => (
                                        <li key={technology} className="rounded-full border border-border bg-accent/30 px-3 py-1.5 font-mono text-xs text-muted-foreground">
                                            {technology}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </article>
                    </li>
                ))}
            </ol>
        </section>
    )
}
