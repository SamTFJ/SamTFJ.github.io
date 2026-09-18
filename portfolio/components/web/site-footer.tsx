"use client"

import type { FooterCopy, NavigationCopy } from "@/content/types"
import type { Locale } from "@/lib/locale"
import { ContactMenuItems } from "@/components/web/contact-menu-items"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface SiteFooterProps {
    locale: Locale
    copy: FooterCopy
    contactCopy: NavigationCopy
    onLocaleChange: (locale: Locale) => void
}

const footerNavigationButtonClass = [
    "h-auto rounded-none px-0 py-1 text-base font-normal",
    "text-muted-foreground decoration-border decoration-2 underline-offset-8",
    "hover:text-card-foreground hover:underline",
    "focus-visible:text-card-foreground focus-visible:underline",
    "aria-expanded:text-card-foreground aria-expanded:underline",
].join(" ")

export function SiteFooter({ locale, copy, contactCopy, onLocaleChange }: SiteFooterProps) {
    return (
        <footer
            id="contact"
            aria-label={copy.landmark}
            className="bg-card px-6 pb-12 text-muted-foreground sm:px-10 lg:px-12"
        >
            <div className="mx-auto max-w-[120rem] border-t border-border pt-7">
                <div className="flex flex-col gap-10 text-sm sm:text-base lg:flex-row lg:items-center lg:justify-between">
                    <nav aria-label={copy.navigationLabel}>
                        <ul className="flex flex-wrap items-center gap-x-8 gap-y-4 sm:gap-x-12">
                            <li>
                                <Button
                                    variant="link"
                                    nativeButton={false}
                                    render={<a href="#projects" />}
                                    role="link"
                                    className={footerNavigationButtonClass}
                                >
                                    {copy.projects}
                                </Button>
                            </li>
                            <li>
                                <Button
                                    variant="link"
                                    nativeButton={false}
                                    render={<a href="#about" />}
                                    role="link"
                                    className={footerNavigationButtonClass}
                                >
                                    {copy.about}
                                </Button>
                            </li>
                            <li>
                                <Button
                                    variant="link"
                                    nativeButton={false}
                                    render={<a href="#experience" />}
                                    role="link"
                                    className={footerNavigationButtonClass}
                                >
                                    {copy.experience}
                                </Button>
                            </li>
                            <li>
                                <DropdownMenu>
                                    <DropdownMenuTrigger
                                        render={
                                            <Button
                                                variant="link"
                                                className={footerNavigationButtonClass}
                                            />
                                        }
                                        aria-label={copy.contact}
                                    >
                                        {copy.contact}
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent
                                        aria-label={contactCopy.connect}
                                        align="start"
                                        className="min-w-[160px] border border-border bg-popover/95 p-1.5 text-popover-foreground shadow-xl backdrop-blur-md"
                                    >
                                        <ContactMenuItems labels={contactCopy} />
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </li>
                        </ul>
                    </nav>

                    <div className="flex flex-wrap items-center gap-6 sm:gap-8">
                        <div role="group" aria-label={copy.languageLabel} className="flex items-center gap-3">
                            <button
                                type="button"
                                aria-label={`${copy.selectEnglish}${locale === "en" ? `, ${copy.currentLanguage}` : ""}`}
                                aria-current={locale === "en" ? "true" : undefined}
                                onClick={() => onLocaleChange("en")}
                                className="cursor-pointer transition-colors hover:text-card-foreground focus-visible:text-card-foreground aria-[current=true]:text-card-foreground"
                            >
                                {copy.english}
                            </button>
                            <span aria-hidden="true" className="text-border">·</span>
                            <button
                                type="button"
                                aria-label={`${copy.selectPortuguese}${locale === "pt" ? `, ${copy.currentLanguage}` : ""}`}
                                aria-current={locale === "pt" ? "true" : undefined}
                                onClick={() => onLocaleChange("pt")}
                                className="cursor-pointer transition-colors hover:text-card-foreground focus-visible:text-card-foreground aria-[current=true]:text-card-foreground"
                            >
                                {copy.portuguese}
                            </button>
                        </div>
                        <span aria-hidden="true" className="hidden h-9 w-px bg-border sm:block" />
                        <p>{copy.copyright}</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
