interface HeroContentProps {
    role: string
}

export function HeroContent({ role }: HeroContentProps) {
    return (
        <div className="flex-1 flex flex-col items-center justify-center text-center px-6 pt-12 pb-6 z-20 space-y-4 animate-fade-in delay-200">
            <h1 id="hero-title" className="font-heading text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-normal tracking-tight text-card-foreground leading-none transition-colors duration-300">
                Samuel Jales
            </h1>
            <p className="text-lg sm:text-2xl md:text-3xl text-muted-foreground font-light tracking-tight transition-colors duration-300">
                {role}
            </p>
        </div>
    )
}
