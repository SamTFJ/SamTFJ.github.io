export interface NavigationCopy {
    primaryNavigation: string
    actions: string
    search: string
    enableDarkMode: string
    enableLightMode: string
    moreOptions: string
    contactMenu: string
    language: string
    english: string
    portuguese: string
    selectEnglish: string
    selectPortuguese: string
    currentLanguage: string
    connect: string
    email: string
    linkedin: string
    github: string
    resume: string
    resumeLabel: string
}

export interface SiteShellCopy {
    documentLanguage: string
    skipToContent: string
    mainLabel: string
    metadata: {
        title: string
        description: string
    }
    navigation: NavigationCopy
    footer: FooterCopy
}

export interface FooterCopy {
    landmark: string
    navigationLabel: string
    languageLabel: string
    projects: string
    about: string
    experience: string
    contact: string
    english: string
    portuguese: string
    selectEnglish: string
    selectPortuguese: string
    currentLanguage: string
    copyright: string
}

export interface HeroCopy {
    role: string
    statement: string
}

export interface AboutCopy {
    eyebrow: string
    title: string
    introduction: string
    details: readonly string[]
    imageAlt: string
    educationLabel: string
    education: string
    locationLabel: string
    location: string
}

export interface ProjectImageCopy {
    src: string
    alt: string
    caption: string
    width: number
    height: number
}

export interface ProjectCopy {
    number: string
    title: string
    description: string
    category: string
    context: string
    role: string
    specifications: readonly string[]
    technologies: readonly string[]
    link: {
        href: string
        label: string
    } | null
    image: ProjectImageCopy | null
}

export interface ProjectsCopy {
    eyebrow: string
    title: string
    summary: string
    viewDetails: string
    contextLabel: string
    roleLabel: string
    specificationsLabel: string
    technologiesLabel: string
    imageZoomLabel: string
    closeImageLabel: string
    items: readonly ProjectCopy[]
}

export interface ExperienceCopy {
    eyebrow: string
    title: string
    summary: string
    technologiesLabel: string
    periodLabel: string
    locationLabel: string
    roleLabel: string
    items: readonly {
        company: string
        role: string
        location: string
        period: string
        focus: string
        description: string
        highlights: readonly string[]
        technologies: readonly string[]
    }[]
}

export interface SiteCopy extends SiteShellCopy {
    hero: HeroCopy
    about: AboutCopy
    projects: ProjectsCopy
    experience: ExperienceCopy
}
