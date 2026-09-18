"use client"

import * as React from "react"

interface HeroCardProps {
    children?: React.ReactNode
    network?: React.ReactNode
    statement: string
}

export function HeroCard({ children, network, statement }: HeroCardProps) {
    const sectionRef = React.useRef<HTMLElement>(null)
    const [progress, setProgress] = React.useState(0)

    React.useLayoutEffect(() => {
        const previousScrollRestoration = window.history.scrollRestoration
        window.history.scrollRestoration = "manual"
        window.scrollTo(0, 0)

        return () => {
            window.history.scrollRestoration = previousScrollRestoration
        }
    }, [])

    React.useEffect(() => {
        let frameId = 0

        const updateProgress = () => {
            frameId = 0
            const section = sectionRef.current
            if (!section) return

            const rect = section.getBoundingClientRect()
            const scrollableDistance = Math.max(1, rect.height - window.innerHeight)
            const nextProgress = Math.min(1, Math.max(0, -rect.top / scrollableDistance))
            setProgress(nextProgress)
        }

        const handleScroll = () => {
            if (!frameId) frameId = window.requestAnimationFrame(updateProgress)
        }

        updateProgress()
        window.addEventListener("scroll", handleScroll, { passive: true })
        window.addEventListener("resize", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
            window.removeEventListener("resize", handleScroll)
            if (frameId) window.cancelAnimationFrame(frameId)
        }
    }, [])

    const expansionProgress = Math.min(1, progress / 0.32)
    const easedExpansion = 1 - Math.pow(1 - expansionProgress, 3)
    const inset = 24 * (1 - easedExpansion)
    const radius = 24 * (1 - easedExpansion)
    const heroOpacity = Math.max(0, 1 - Math.max(0, progress - 0.2) / 0.2)
    const networkOpacity = Math.max(0, 1 - progress / 0.58)
    const statementProgress = Math.min(1, Math.max(0, (progress - 0.38) / 0.5))
    const words = statement.split(" ")

    return (
        <section ref={sectionRef} aria-labelledby="hero-title" className="relative h-[260vh] bg-background">
            <div className="sticky top-0 h-screen w-full" style={{ padding: inset }}>
                <div
                    className="relative size-full overflow-hidden border border-border/80 bg-card text-card-foreground shadow-2xl transition-colors duration-300 motion-reduce:rounded-none motion-reduce:border-x-0"
                    style={{ borderRadius: radius }}
                >
                    <div
                        className="absolute bottom-0 left-1/2 z-10 w-screen -translate-x-1/2 will-change-[opacity]"
                        style={{
                            opacity: networkOpacity,
                            pointerEvents: networkOpacity > 0.1 ? "auto" : "none",
                        }}
                    >
                        {network}
                    </div>

                    <div
                        className="pointer-events-none absolute inset-0 z-20 flex flex-col justify-between pb-[max(45vh,300px)]"
                        style={{
                            opacity: heroOpacity,
                            transform: `scale(${1 + progress * 0.035})`,
                        }}
                    >
                        {children}
                    </div>

                    <div
                        className="absolute inset-0 z-30 flex items-center justify-center px-6 py-20 sm:px-10 md:px-16 lg:px-24"
                        style={{
                            opacity: Math.min(1, statementProgress * 4),
                            pointerEvents: "none",
                        }}
                    >
                        <p className="max-w-[1500px] text-center font-heading text-[clamp(2.45rem,6.2vw,7.5rem)] font-normal leading-[0.98] tracking-[-0.055em]">
                            <span className="sr-only">{statement}</span>
                            {words.map((word, index) => {
                                const wordProgress = Math.min(
                                    1,
                                    Math.max(0, statementProgress * (words.length + 4) - index),
                                )

                                return (
                                    <span
                                        key={`${word}-${index}`}
                                        aria-hidden="true"
                                        className="inline-block transition-colors duration-150 motion-reduce:transition-none"
                                        style={{
                                            color: `color-mix(in srgb, var(--card-foreground) ${18 + wordProgress * 82}%, transparent)`,
                                        }}
                                    >
                                        {word}{index < words.length - 1 ? "\u00a0" : ""}
                                    </span>
                                )
                            })}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
