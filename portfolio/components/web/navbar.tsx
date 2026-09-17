"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { 
    FaLinkedin,
    FaGithub 
} from "react-icons/fa";
import { 
    SearchIcon,
    MoreHorizontalIcon,
    MailCheckIcon,
    SunIcon,
    MoonIcon
} from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Navbar() {
    const [isDark, setIsDark] = React.useState(false)

    React.useEffect(() => {
        setIsDark(document.documentElement.classList.contains("dark"))
    }, [])

    const toggleTheme = () => {
        const nextState = !isDark
        setIsDark(nextState)
        if (nextState) {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }
    }

    return (
        <nav className="w-full flex items-center justify-end px-6 py-4 md:px-8 text-card-foreground animate-fade-in delay-100">
            <ButtonGroup>
                <Button variant="outline" aria-label="Search" className="border-border bg-transparent hover:bg-accent text-card-foreground">
                    <SearchIcon />
                </Button>

                <Button 
                    variant="outline" 
                    size="icon" 
                    aria-label="Toggle Theme" 
                    onClick={toggleTheme}
                    className="border-border bg-transparent hover:bg-accent text-card-foreground"
                >
                    {isDark ? <SunIcon className="size-4 text-card-foreground" /> : <MoonIcon className="size-4 text-card-foreground" />}
                </Button>

                <DropdownMenu>
                    <DropdownMenuTrigger render={<Button variant="outline" size="icon" aria-label="More Options" className="border-border bg-transparent hover:bg-accent data-[state=open]:bg-accent text-card-foreground"><MoreHorizontalIcon /></Button>}/>
                    <DropdownMenuContent className="bg-popover/95 backdrop-blur-md border border-border text-popover-foreground shadow-xl p-1.5 min-w-[160px]">
                        <div className="text-[0.7rem] font-semibold uppercase tracking-wider text-muted-foreground px-2 py-1 select-none">
                            Connect with me
                        </div>
                        <DropdownMenuSeparator className="my-1 bg-border/50" />
                        <DropdownMenuItem className="hover:bg-accent focus:bg-accent cursor-pointer rounded-lg text-popover-foreground">
                            <a href="mailto:samueljjales@gmail.com" className="flex items-center gap-2 w-full text-popover-foreground">
                                <MailCheckIcon className="size-4" />
                                E-mail
                            </a>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="hover:bg-accent focus:bg-accent cursor-pointer rounded-lg text-popover-foreground">
                            <a href="https://www.linkedin.com/in/samuel-jales-88250b284" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 w-full text-popover-foreground">
                                <FaLinkedin className="size-4" />
                                LinkedIn
                            </a>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="hover:bg-accent focus:bg-accent cursor-pointer rounded-lg text-popover-foreground">
                            <a href="https://github.com/SamTFJ" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 w-full text-popover-foreground">
                                <FaGithub className="size-4" />
                                GitHub
                            </a>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </ButtonGroup>
        </nav>
    )
}