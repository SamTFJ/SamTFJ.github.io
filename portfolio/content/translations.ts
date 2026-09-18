import type { Locale } from "@/lib/locale"
import { aboutCopy } from "@/content/about"
import { experienceCopy } from "@/content/experience"
import { heroCopy } from "@/content/hero"
import { projectsCopy } from "@/content/projects"
import { siteShellCopy } from "@/content/site-shell"
import type { SiteCopy } from "@/content/types"

export const translations = {
    en: {
        ...siteShellCopy.en,
        hero: heroCopy.en,
        about: aboutCopy.en,
        projects: projectsCopy.en,
        experience: experienceCopy.en,
    },
    pt: {
        ...siteShellCopy.pt,
        hero: heroCopy.pt,
        about: aboutCopy.pt,
        projects: projectsCopy.pt,
        experience: experienceCopy.pt,
    },
} satisfies Record<Locale, SiteCopy>

export type { SiteCopy } from "@/content/types"
