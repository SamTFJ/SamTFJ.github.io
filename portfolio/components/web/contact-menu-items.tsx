import type { NavigationCopy } from "@/content/types"
import { FileDownIcon, MailCheckIcon } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import {
    DropdownMenuItem,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"

interface ContactMenuItemsProps {
    labels: NavigationCopy
}

export function ContactMenuItems({ labels }: ContactMenuItemsProps) {
    return (
        <>
            <div className="select-none px-2 py-1 text-[0.7rem] font-semibold uppercase tracking-wider text-muted-foreground">
                {labels.connect}
            </div>
            <DropdownMenuSeparator className="my-1 bg-border/50" />
            <DropdownMenuItem className="cursor-pointer rounded-lg text-popover-foreground hover:bg-accent focus:bg-accent" render={<a href="mailto:samueljjales@gmail.com" aria-label={labels.email} />}>
                <MailCheckIcon aria-hidden="true" className="size-4" />
                E-mail
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer rounded-lg text-popover-foreground hover:bg-accent focus:bg-accent" render={<a href="https://www.linkedin.com/in/samuel-jales-88250b284" target="_blank" rel="noopener noreferrer" aria-label={labels.linkedin} />}>
                <FaLinkedin aria-hidden="true" className="size-4" />
                LinkedIn
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer rounded-lg text-popover-foreground hover:bg-accent focus:bg-accent" render={<a href="https://github.com/SamTFJ" target="_blank" rel="noopener noreferrer" aria-label={labels.github} />}>
                <FaGithub aria-hidden="true" className="size-4" />
                GitHub
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer rounded-lg text-popover-foreground hover:bg-accent focus:bg-accent" render={<a
                    href="/documents/samuel-jales-curriculo.pdf"
                    download="Samuel-Jales-Curriculo.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={labels.resumeLabel}
                    />}>
                <FileDownIcon aria-hidden="true" className="size-4" />
                {labels.resume}
            </DropdownMenuItem>
        </>
    )
}
