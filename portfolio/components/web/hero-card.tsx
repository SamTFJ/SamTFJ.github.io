"use client"

import * as React from "react"

interface HeroCardProps {
    children?: React.ReactNode
}

export function HeroCard({ children }: HeroCardProps) {
    return (
        <div className="relative w-full h-[calc(100vh-2rem)] sm:h-[calc(100vh-3rem)] rounded-3xl border border-border/80 bg-card text-card-foreground overflow-hidden flex flex-col justify-between shadow-2xl transition-colors duration-300 animate-fade-in">
            {children}
        </div>
    )
}
