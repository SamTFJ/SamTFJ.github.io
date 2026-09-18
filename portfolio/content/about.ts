import type { Locale } from "@/lib/locale"
import type { AboutCopy } from "@/content/types"

export const aboutCopy = {
    en: {
        eyebrow: "Profile",
        title: "About me",
        introduction: "I am a Computer Engineering student at the Federal University of Paraíba and work in software research and development.",
        details: [
            "My experience brings together applied AI, RAG, machine learning, automation, databases, and web development.",
            "I build products that connect AI models, data, APIs, and clear interfaces, while maintaining a strong foundation in low-level programming.",
        ],
        imageAlt: "Portrait of Samuel Jales",
        educationLabel: "Education",
        education: "B.Sc. in Computer Engineering · UFPB",
        locationLabel: "Based in",
        location: "João Pessoa, Brazil",
    },
    pt: {
        eyebrow: "Perfil",
        title: "Sobre mim",
        introduction: "Sou estudante de Engenharia da Computação na Universidade Federal da Paraíba e atuo com pesquisa e desenvolvimento de software.",
        details: [
            "Minha experiência combina inteligência artificial aplicada, RAG, machine learning, automação, bancos de dados e desenvolvimento web.",
            "Crio produtos que conectam modelos de IA, dados, APIs e interfaces claras, mantendo também uma base sólida em programação de baixo nível.",
        ],
        imageAlt: "Retrato de Samuel Jales",
        educationLabel: "Formação",
        education: "Engenharia da Computação · UFPB",
        locationLabel: "Localização",
        location: "João Pessoa, Brasil",
    },
} satisfies Record<Locale, AboutCopy>
