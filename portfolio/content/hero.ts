import type { Locale } from "@/lib/locale"
import type { HeroCopy } from "@/content/types"

export const heroCopy = {
    en: {
        role: "Software & AI engineer",
        statement: "I build applied AI, RAG, machine learning, data, and web systems that connect models, APIs, and clear interfaces to real problems.",
    },
    pt: {
        role: "Engenheiro de Software e IA",
        statement: "Desenvolvo sistemas de IA aplicada, RAG, machine learning, dados e web que conectam modelos, APIs e interfaces claras a problemas reais.",
    },
} satisfies Record<Locale, HeroCopy>
