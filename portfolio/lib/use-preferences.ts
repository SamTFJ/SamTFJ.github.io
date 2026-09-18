"use client"

import { useSyncExternalStore } from "react"
import { DEFAULT_LOCALE, isLocale, type Locale } from "@/lib/locale"

type Preferences = { locale: Locale; theme: "light" | "dark" }
const defaults: Preferences = { locale: DEFAULT_LOCALE, theme: "light" }
const listeners = new Set<() => void>()
let current: Preferences | undefined

function readPreference(key: string) {
    try {
        const saved = localStorage.getItem(key)
        if (saved !== null) return saved
    } catch {
        // Preferences still work for this visit if browser storage is disabled.
    }
    return document.cookie.split("; ").find((cookie) => cookie.startsWith(`${key}=`))?.split("=")[1]
}

function getSnapshot(): Preferences {
    if (!current) {
        const locale = readPreference("portfolio-locale")
        current = {
            locale: isLocale(locale) ? locale : DEFAULT_LOCALE,
            theme: readPreference("portfolio-theme") === "dark" ? "dark" : "light",
        }
    }
    return current
}

function notify() {
    listeners.forEach((listener) => listener())
}

function onStorage(event: StorageEvent) {
    if (event.key === null || event.key === "portfolio-locale" || event.key === "portfolio-theme") {
        current = undefined
        notify()
    }
}

function subscribe(listener: () => void) {
    if (listeners.size === 0) window.addEventListener("storage", onStorage)
    listeners.add(listener)
    return () => {
        listeners.delete(listener)
        if (listeners.size === 0) window.removeEventListener("storage", onStorage)
    }
}

function savePreference<K extends keyof Preferences>(key: K, value: Preferences[K]) {
    current = { ...getSnapshot(), [key]: value }
    try {
        localStorage.setItem(`portfolio-${key}`, value)
    } catch {
        // Keep the in-memory choice when persistence is unavailable.
    }
    notify()
}

const getServerSnapshot = () => defaults
const setLocale = (locale: Locale) => savePreference("locale", locale)
const setTheme = (theme: Preferences["theme"]) => savePreference("theme", theme)

export function usePreferences() {
    const preferences = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
    return { ...preferences, setLocale, setTheme }
}
