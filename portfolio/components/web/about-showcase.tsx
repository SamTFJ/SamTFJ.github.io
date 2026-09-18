import Image from "next/image"
import type { AboutCopy } from "@/content/types"

interface AboutShowcaseProps {
    copy: AboutCopy
}

export function AboutShowcase({ copy }: AboutShowcaseProps) {
    return (
        <section
            id="about"
            aria-labelledby="about-heading"
            className="relative z-10 w-full bg-card px-6 py-24 text-card-foreground sm:px-10 md:px-16 lg:px-24 lg:py-36"
        >
            <div className="grid gap-12 border-y border-border/60 py-12 md:grid-cols-[minmax(0,0.55fr)_minmax(0,1.45fr)] md:items-start md:gap-16 md:py-16 lg:gap-24">
                <figure className="w-full max-w-[280px] sm:max-w-[320px] md:sticky md:top-10">
                    <div className="overflow-hidden bg-muted">
                        <Image
                            src="/images/samuel-jales-profile.jpg"
                            alt={copy.imageAlt}
                            width={800}
                            height={800}
                            sizes="(min-width: 640px) 320px, 280px"
                            className="aspect-square h-auto w-full object-cover"
                            priority={false}
                        />
                    </div>
                    <figcaption className="sr-only">{copy.imageAlt}</figcaption>
                </figure>

                <div>
                    <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                        {copy.eyebrow}
                    </p>
                    <h2 id="about-heading" className="font-heading text-5xl font-normal tracking-[-0.05em] sm:text-6xl md:text-7xl">
                        {copy.title}
                    </h2>
                    <p className="mt-10 max-w-3xl font-heading text-2xl font-normal leading-tight tracking-[-0.025em] sm:text-3xl lg:text-4xl">
                        {copy.introduction}
                    </p>
                    <div className="mt-10 max-w-2xl space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                        {copy.details.map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                        ))}
                    </div>

                    <dl className="mt-12 grid gap-6 border-t border-border/60 pt-6 sm:grid-cols-2">
                        <div>
                            <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">{copy.educationLabel}</dt>
                            <dd className="mt-2 text-sm leading-relaxed">{copy.education}</dd>
                        </div>
                        <div>
                            <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">{copy.locationLabel}</dt>
                            <dd className="mt-2 text-sm leading-relaxed">{copy.location}</dd>
                        </div>
                    </dl>
                </div>
            </div>
        </section>
    )
}
