export type Locale = "en" | "pt"

export const DEFAULT_LOCALE: Locale = "en"

export function isLocale(value: string | undefined): value is Locale {
    return value === "en" || value === "pt"
}
