"use client"

import type { NavigationCopy } from "@/content/types"
import type { Locale } from "@/lib/locale"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { ContactMenuItems } from "@/components/web/contact-menu-items"
import { 
    MoreHorizontalIcon,
    SunIcon,
    MoonIcon,
    CheckIcon,
} from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface NavbarProps {
    locale: Locale
    isDark: boolean
    onThemeChange: () => void
    onLocaleChange: (locale: Locale) => void
    labels: NavigationCopy
}

export function Navbar({ locale, isDark, labels, onThemeChange, onLocaleChange }: NavbarProps) {
    return (
        <nav aria-label={labels.primaryNavigation} className="pointer-events-auto w-full flex items-center justify-end px-6 py-4 md:px-8 text-card-foreground animate-fade-in delay-100">
            <ButtonGroup aria-label={labels.actions}>
                <Button 
                    variant="outline" 
                    size="icon" 
                    aria-label={isDark ? labels.enableLightMode : labels.enableDarkMode}
                    aria-pressed={isDark}
                    title={isDark ? labels.enableLightMode : labels.enableDarkMode}
                    onClick={onThemeChange}
                    className="border-border bg-transparent hover:bg-accent text-card-foreground"
                >
                    {isDark ? <SunIcon aria-hidden="true" className="size-4 text-card-foreground" /> : <MoonIcon aria-hidden="true" className="size-4 text-card-foreground" />}
                </Button>

                <DropdownMenu>
                    <DropdownMenuTrigger render={<Button variant="outline" size="icon" aria-label={labels.moreOptions} title={labels.moreOptions} className="border-border bg-transparent hover:bg-accent data-[state=open]:bg-accent text-card-foreground"><MoreHorizontalIcon aria-hidden="true" /></Button>}/>
                    <DropdownMenuContent aria-label={labels.contactMenu} className="bg-popover/95 backdrop-blur-md border border-border text-popover-foreground shadow-xl p-1.5 min-w-[160px]">
                        <div className="text-[0.7rem] font-semibold uppercase tracking-wider text-muted-foreground px-2 py-1 select-none">
                            {labels.language}
                        </div>
                        <DropdownMenuSeparator className="my-1 bg-border/50" />
                        <DropdownMenuItem
                            aria-label={`${labels.selectEnglish}${locale === "en" ? `, ${labels.currentLanguage}` : ""}`}
                            aria-current={locale === "en" ? "true" : undefined}
                            onClick={() => onLocaleChange("en")}
                            className="flex cursor-pointer items-center justify-between rounded-lg text-popover-foreground hover:bg-accent focus:bg-accent"
                        >
                            <span>{labels.english}</span>
                            {locale === "en" ? <CheckIcon aria-hidden="true" className="size-4" /> : null}
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            aria-label={`${labels.selectPortuguese}${locale === "pt" ? `, ${labels.currentLanguage}` : ""}`}
                            aria-current={locale === "pt" ? "true" : undefined}
                            onClick={() => onLocaleChange("pt")}
                            className="flex cursor-pointer items-center justify-between rounded-lg text-popover-foreground hover:bg-accent focus:bg-accent"
                        >
                            <span>{labels.portuguese}</span>
                            {locale === "pt" ? <CheckIcon aria-hidden="true" className="size-4" /> : null}
                        </DropdownMenuItem>
                        <DropdownMenuSeparator className="my-1 bg-border/50" />
                        <ContactMenuItems labels={labels} />
                    </DropdownMenuContent>
                </DropdownMenu>
            </ButtonGroup>
        </nav>
    )
}
