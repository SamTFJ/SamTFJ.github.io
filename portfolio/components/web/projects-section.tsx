"use client"

import * as React from "react"
import { ArrowUpRightIcon } from "lucide-react"

interface Project {
    id: string
    number: string
    title: string
    description: string
    category: string
    link?: string
}

const projects: Project[] = [
    {
        id: "aip",
        number: "/0.1",
        title: "AIP Studio",
        description: "Automate complex enterprise workflows, multi-agent AI execution, and real-time decision loops.",
        category: "AI Platform",
        link: "#",
    },
    {
        id: "gotham",
        number: "/0.2",
        title: "Graph Vision",
        description: "High-throughput graph visualization, real-time spatial intelligence, and neural search.",
        category: "Intelligence",
        link: "#",
    },
    {
        id: "foundry",
        number: "/0.3",
        title: "Nexus Engine",
        description: "Build and manage ontology-powered data pipelines with complete developer orchestration.",
        category: "Data Platform",
        link: "#",
    },
    {
        id: "ontology",
        number: "/0.4",
        title: "Ontology AI",
        description: "The central system for orchestrating decisions across Human + AI collaborative teams.",
        category: "Core Architecture",
        link: "#",
    },
]

export function ProjectsSection() {
    return (
        <section className="w-full px-6 md:px-16 py-20 bg-card text-card-foreground border-t border-border/40 transition-colors duration-300">
            {/* Header Quote & Subtitle */}
            <div className="max-w-4xl mb-16 space-y-6">
                <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight leading-[1.1] text-card-foreground">
                    Engineering software for real-time, <span className="text-muted-foreground">AI-driven decisions</span> in critical applications.
                </h2>
                <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground pt-4">
                    Selected Projects
                </p>
            </div>

            {/* Palantir-style Project Rows */}
            <div className="w-full border-t border-border/60">
                {projects.map((project) => (
                    <a
                        key={project.id}
                        href={project.link || "#"}
                        className="group relative flex flex-col md:flex-row items-start md:items-center justify-between py-10 md:py-12 border-b border-border/60 transition-colors duration-300 hover:bg-accent/30 px-4 -mx-4 rounded-xl"
                    >
                        {/* Left Column: Description & Index */}
                        <div className="flex flex-col justify-between space-y-4 max-w-sm mb-6 md:mb-0">
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {project.description}
                            </p>
                            <span className="text-xs font-mono text-muted-foreground/70">
                                {project.number}
                            </span>
                        </div>

                        {/* Right Column: Title & Arrow */}
                        <div className="flex items-center gap-6">
                            <h3 className="font-heading text-5xl sm:text-7xl md:text-8xl font-normal tracking-tight text-card-foreground group-hover:translate-x-2 transition-transform duration-300">
                                {project.title}
                            </h3>
                            <ArrowUpRightIcon className="size-8 sm:size-10 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 shrink-0" />
                        </div>
                    </a>
                ))}
            </div>
        </section>
    )
}
