import type { Locale } from "@/lib/locale"
import type { ExperienceCopy } from "@/content/types"

export const experienceCopy = {
    en: {
        eyebrow: "Professional experience",
        title: "Experience",
        summary: "Work across product interfaces, data, internal operations, and applied AI research.",
        technologiesLabel: "Technologies",
        periodLabel: "Period",
        locationLabel: "Location",
        roleLabel: "Role",
        items: [
            {
                company: "HostDime Brasil",
                role: "Part-time researcher",
                location: "João Pessoa · Hybrid",
                period: "March 2026 — Present",
                focus: "HubSpot, data, and service architecture",
                description: "I work on data analysis and database migration research, as well as improving HostDime's internal service workflows in HubSpot.",
                highlights: [
                    "Redesigned HubSpot's native ticket architecture to organize internal support alongside customer tickets.",
                    "Research database migration paths and analyze data.",
                    "Use Python, APIs, and HubSpot to connect data and improve internal processes.",
                    "Develop and maintain responsive web interfaces with HTML5, CSS3, JavaScript, and React.js.",
                ],
                technologies: ["HubSpot", "Python", "APIs", "React.js", "JavaScript", "HTML5", "CSS3"],
            },
            {
                company: "TRIL Lab",
                role: "Part-time researcher",
                location: "João Pessoa · Hybrid",
                period: "July 2025 — Present",
                focus: "Applied AI and research software",
                description: "I develop software for applied AI research, from semantic information retrieval to deep-learning experiments for financial markets.",
                highlights: [
                    "Developed the RAG chatbot and semantic retrieval workflow for the ENETRIX platform.",
                    "Built interfaces, data pipelines, and predictive-model integrations for doctoral research.",
                ],
                technologies: ["RAG", "Machine learning", "Python", "Data pipelines", "Team leadership"],
            },
        ],
    },
    pt: {
        eyebrow: "Experiência profissional",
        title: "Experiência",
        summary: "Atuação em interfaces de produto, dados, operações internas e pesquisa aplicada em inteligência artificial.",
        technologiesLabel: "Tecnologias",
        periodLabel: "Período",
        locationLabel: "Localização",
        roleLabel: "Função",
        items: [
            {
                company: "HostDime Brasil",
                role: "Pesquisador em tempo parcial",
                location: "João Pessoa · Modelo híbrido",
                period: "Março de 2026 — presente",
                focus: "HubSpot, dados e arquitetura de atendimento",
                description: "Atuo com análise de dados e pesquisa de migrações de bancos de dados, além de melhorar os fluxos internos de atendimento da HostDime no HubSpot.",
                highlights: [
                    "Redesenho da arquitetura nativa de tickets do HubSpot para organizar o suporte interno junto aos tickets de clientes.",
                    "Pesquisa de caminhos para migração de bancos de dados e análise de dados.",
                    "Uso de Python, APIs e HubSpot para conectar dados e aprimorar processos internos.",
                    "Desenvolvimento e manutenção de interfaces web responsivas com HTML5, CSS3, JavaScript e React.js.",
                ],
                technologies: ["HubSpot", "Python", "APIs", "React.js", "JavaScript", "HTML5", "CSS3"],
            },
            {
                company: "TRIL Lab",
                role: "Pesquisador em tempo parcial",
                location: "João Pessoa · Modelo híbrido",
                period: "Julho de 2025 — presente",
                focus: "IA aplicada e software para pesquisa",
                description: "Desenvolvo software para pesquisa em IA aplicada, da recuperação semântica de informações a experimentos de deep learning para o mercado financeiro.",
                highlights: [
                    "Desenvolvimento do chatbot RAG e do fluxo de recuperação semântica da plataforma ENETRIX.",
                    "Criação de interfaces, pipelines de dados e integrações com modelos preditivos para pesquisa de doutorado.",
                ],
                technologies: ["RAG", "Machine learning", "Python", "Pipelines de dados", "Liderança de equipe"],
            },
        ],
    },
} satisfies Record<Locale, ExperienceCopy>
