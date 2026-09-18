"use client"

import { Accordion } from "@base-ui/react/accordion"
import { Dialog } from "@base-ui/react/dialog"
import { ChevronDownIcon, ExternalLinkIcon, Maximize2Icon, XIcon } from "lucide-react"
import Image from "next/image"
import type { ProjectsCopy } from "@/content/types"

interface ProjectsShowcaseProps {
    copy: ProjectsCopy
}

export function ProjectsShowcase({ copy }: ProjectsShowcaseProps) {
    return (
        <section
            id="projects"
            aria-labelledby="projects-heading"
            className="relative z-10 w-full bg-card px-6 pb-24 pt-20 text-card-foreground shadow-[0_-24px_60px_-32px_rgba(15,23,42,0.5)] sm:px-10 md:px-16 lg:px-24 lg:pb-36 dark:shadow-[0_-24px_60px_-32px_rgba(0,0,0,0.7)]"
        >
            <div className="mb-12 flex items-end justify-between gap-8 border-b border-[#2563EB]/35 pb-8 md:mb-16">
                <div>
                    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#1D4ED8] dark:text-[#60A5FA]">
                        {copy.eyebrow}
                    </p>
                    <h2 id="projects-heading" className="font-heading text-4xl font-normal tracking-tight sm:text-6xl md:text-7xl">
                        {copy.title}
                    </h2>
                </div>
                <p className="hidden max-w-md text-right text-sm leading-relaxed text-muted-foreground md:block">
                    {copy.summary}
                </p>
            </div>

            <Accordion.Root hiddenUntilFound className="border-t border-[#2563EB]/35">
                {copy.items.map((project) => (
                    <Accordion.Item
                        key={project.number}
                        value={project.number}
                        render={<article />}
                        className="border-b border-[#2563EB]/25"
                    >
                        <Accordion.Header>
                            <Accordion.Trigger
                                aria-label={`${copy.viewDetails}: ${project.title}`}
                                className="group grid w-full cursor-pointer gap-7 py-9 text-left transition-colors duration-300 hover:bg-[#2563EB]/10 focus-visible:bg-[#DBEAFE]/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-inset data-[panel-open]:bg-[#DBEAFE]/70 dark:hover:bg-[#2563EB]/15 dark:focus-visible:bg-[#2563EB]/15 dark:data-[panel-open]:bg-[#2563EB]/15 sm:px-4 md:grid-cols-[minmax(12rem,0.7fr)_minmax(18rem,1.3fr)_auto] md:items-center md:py-12"
                            >
                                <span className="space-y-3">
                                    <span className="block font-mono text-xs font-semibold text-[#1D4ED8] dark:text-[#60A5FA]">{project.number}</span>
                                    <span className="inline-flex rounded-full bg-[#2563EB] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-white">
                                        {project.category}
                                    </span>
                                </span>

                                <span>
                                    <span className="block font-heading text-[clamp(2.25rem,7vw,6.5rem)] break-words font-normal leading-[0.92] tracking-[-0.05em] transition-transform duration-300 group-hover:translate-x-2">
                                        {project.title}
                                    </span>
                                    <span className="mt-5 block max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                                        {project.description}
                                    </span>
                                </span>

                                <ChevronDownIcon
                                    aria-hidden="true"
                                    className="size-7 text-[#0284C7] transition-transform duration-300 group-data-[panel-open]:rotate-180 group-hover:text-[#38BDF8] dark:text-[#38BDF8]"
                                />
                            </Accordion.Trigger>
                        </Accordion.Header>

                        <Accordion.Panel className="h-[var(--accordion-panel-height)] overflow-hidden transition-[height] duration-500 ease-out data-[ending-style]:h-0 data-[starting-style]:h-0 motion-reduce:transition-none">
                            <div className="border-l-4 border-[#2563EB] bg-[#202225] px-6 py-10 text-[#f5f5f3] sm:px-8 md:px-12 md:py-14">
                                <div className={project.image ? "grid gap-12 xl:grid-cols-[minmax(0,1.35fr)_minmax(18rem,0.65fr)] lg:items-start lg:gap-14" : ""}>
                                    <div className="grid gap-10 md:grid-cols-[minmax(0,0.65fr)_minmax(0,1.35fr)] md:gap-12">
                                        <dl className="grid content-start gap-7 sm:grid-cols-2 md:grid-cols-1">
                                            <div className="border-t border-[#2563EB]/35 pt-4">
                                                <dt className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#60A5FA]">
                                                    {copy.contextLabel}
                                                </dt>
                                                <dd className="text-base leading-relaxed text-white/90">{project.context}</dd>
                                            </div>
                                            <div className="border-t border-[#2563EB]/35 pt-4">
                                                <dt className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#60A5FA]">
                                                    {copy.roleLabel}
                                                </dt>
                                                <dd className="text-base leading-relaxed text-white/90">{project.role}</dd>
                                            </div>
                                            {project.link ? (
                                                <div className="border-t border-[#2563EB]/35 pt-4">
                                                    <dt className="sr-only">{project.link.label}</dt>
                                                    <dd>
                                                        <a
                                                            href={project.link.href}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="inline-flex items-center gap-2 text-sm font-semibold text-[#38BDF8] underline decoration-[#38BDF8]/40 underline-offset-4 transition-colors hover:text-[#7DD3FC] hover:decoration-[#7DD3FC] focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]"
                                                        >
                                                            {project.link.label}
                                                            <ExternalLinkIcon aria-hidden="true" className="size-4" />
                                                        </a>
                                                    </dd>
                                                </div>
                                            ) : null}
                                        </dl>

                                        <div className="space-y-10">
                                            <div>
                                                <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-[#60A5FA]">
                                                    {copy.specificationsLabel}
                                                </h4>
                                                <ul className="space-y-4">
                                                    {project.specifications.map((specification) => (
                                                        <li key={specification} className="grid grid-cols-[auto_1fr] gap-3 text-sm leading-relaxed text-white/85 sm:text-base">
                                                            <span aria-hidden="true" className="mt-[0.7em] size-1.5 rounded-full bg-[#38BDF8]" />
                                                            <span>{specification}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div>
                                                <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-[#60A5FA]">
                                                    {copy.technologiesLabel}
                                                </h4>
                                                <ul className="flex flex-wrap gap-2" aria-label={copy.technologiesLabel}>
                                                    {project.technologies.map((technology) => (
                                                        <li key={technology} className="rounded-full border border-[#2563EB]/45 bg-[#DBEAFE] px-3 py-1.5 font-mono text-xs font-medium text-[#1E3A8A]">
                                                            {technology}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {project.image ? (
                                        <figure className="w-full max-w-md justify-self-end overflow-hidden border border-[#2563EB]/50 bg-black/20 lg:sticky lg:top-8">
                                            <Dialog.Root>
                                                <Dialog.Trigger
                                                    aria-label={`${copy.imageZoomLabel}: ${project.title}`}
                                                    className="group/image relative block w-full cursor-zoom-in overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-inset"
                                                >
                                                    <Image
                                                        src={project.image.src}
                                                        alt={project.image.alt}
                                                        width={project.image.width}
                                                        height={project.image.height}
                                                        sizes="(min-width: 1024px) 32vw, 100vw"
                                                        className="h-auto w-full transition duration-300 group-hover/image:scale-[1.025] group-focus-visible/image:scale-[1.025] motion-reduce:transition-none"
                                                    />
                                                    <span className="absolute bottom-3 right-3 inline-flex size-10 items-center justify-center rounded-full bg-[#202225]/90 text-[#38BDF8] shadow-lg transition-transform group-hover/image:scale-110 group-focus-visible/image:scale-110">
                                                        <Maximize2Icon aria-hidden="true" className="size-4" />
                                                    </span>
                                                </Dialog.Trigger>

                                                <Dialog.Portal>
                                                    <Dialog.Backdrop className="fixed inset-0 z-[90] bg-black/85 backdrop-blur-sm transition-opacity duration-200 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0 motion-reduce:transition-none" />
                                                    <Dialog.Viewport className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8">
                                                        <Dialog.Popup className="relative max-h-[94vh] w-[96vw] max-w-[1600px] overflow-hidden border border-[#2563EB]/60 bg-[#202225] text-[#F5F5F3] shadow-2xl transition duration-300 data-[ending-style]:scale-95 data-[ending-style]:opacity-0 data-[starting-style]:scale-95 data-[starting-style]:opacity-0 motion-reduce:transition-none">
                                                            <Dialog.Title className="sr-only">{project.title}</Dialog.Title>
                                                            <Dialog.Description className="sr-only">{project.image.alt}</Dialog.Description>
                                                            <Dialog.Close
                                                                aria-label={copy.closeImageLabel}
                                                                className="absolute right-3 top-3 z-10 inline-flex size-11 items-center justify-center rounded-full bg-[#202225]/90 text-[#38BDF8] shadow-lg transition-colors hover:bg-[#2563EB] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]"
                                                            >
                                                                <XIcon aria-hidden="true" className="size-5" />
                                                            </Dialog.Close>
                                                            <Image
                                                                src={project.image.src}
                                                                alt=""
                                                                width={project.image.width}
                                                                height={project.image.height}
                                                                sizes="96vw"
                                                                className="h-auto max-h-[84vh] w-full object-contain"
                                                            />
                                                            <p className="border-t border-[#2563EB]/35 px-4 py-3 font-mono text-xs text-[#DBEAFE]/75">
                                                                {project.image.caption}
                                                            </p>
                                                        </Dialog.Popup>
                                                    </Dialog.Viewport>
                                                </Dialog.Portal>
                                            </Dialog.Root>
                                            <figcaption className="border-t border-[#2563EB]/35 px-4 py-3 font-mono text-xs text-[#DBEAFE]/75">
                                                {project.image.caption}
                                            </figcaption>
                                        </figure>
                                    ) : null}
                                </div>
                            </div>
                        </Accordion.Panel>
                    </Accordion.Item>
                ))}
            </Accordion.Root>
        </section>
    )
}
