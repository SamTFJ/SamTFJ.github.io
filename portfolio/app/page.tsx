"use client"

import { useEffect } from "react"
import { HeroCard } from "@/components/web/hero-card"
import { Navbar } from "@/components/web/navbar"
import { HeroContent } from "@/components/web/hero-content"
import { HeroNetwork } from "@/components/web/hero-network"
import { ProjectsShowcase } from "@/components/web/projects-showcase"
import { ExperienceShowcase } from "@/components/web/experience-showcase"
import { AboutShowcase } from "@/components/web/about-showcase"
import { SiteFooter } from "@/components/web/site-footer"
import { translations } from "@/content/translations"
import { usePreferences } from "@/lib/use-preferences"

export default function Home() {
  const { locale, theme, setLocale, setTheme } = usePreferences()
  const copy = translations[locale]

  useEffect(() => {
    document.documentElement.lang = copy.documentLanguage
  }, [copy.documentLanguage])

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark")
  }, [theme])

  return (
    <>
      <title>{copy.metadata.title}</title>
      <meta name="description" content={copy.metadata.description} />
      <a href="#main-content" className="sr-only fixed left-4 top-4 z-50 rounded-md bg-primary px-4 py-2 text-primary-foreground focus:not-sr-only">
        {copy.skipToContent}
      </a>
      <main id="main-content" tabIndex={-1} aria-label={copy.mainLabel} className="min-h-screen w-full bg-background text-foreground">
        <HeroCard statement={copy.hero.statement} network={<HeroNetwork />}>
          <Navbar locale={locale} isDark={theme === "dark"} labels={copy.navigation} onLocaleChange={setLocale} onThemeChange={() => setTheme(theme === "dark" ? "light" : "dark")} />
          <HeroContent role={copy.hero.role} />
        </HeroCard>
        <AboutShowcase copy={copy.about} />
        <ProjectsShowcase copy={copy.projects} />
        <ExperienceShowcase copy={copy.experience} />
      </main>
      <SiteFooter locale={locale} copy={copy.footer} contactCopy={copy.navigation} onLocaleChange={setLocale} />
    </>
  );
}
