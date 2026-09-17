import { HeroCard } from "@/components/web/hero-card"
import { Navbar } from "@/components/web/navbar"
import { HeroContent } from "@/components/web/hero-content"
import { HeroNetwork } from "@/components/web/hero-network"

export default function Home() {
  return (
    <main className="min-h-screen w-full p-3 sm:p-4 md:p-6 bg-background text-foreground flex flex-col items-center justify-center">
      <HeroCard>
        <Navbar />
        <HeroContent />
        <HeroNetwork />
      </HeroCard>
    </main>
  );
}