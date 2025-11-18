'use client'

import Link from 'next/link'
import AIBadge from '@/lib//ai-badge'

export default function Header() {
  const scrollToSection = (id: string) => {
    const target = document.getElementById(id)
    if (!target) return

    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset
    const startPosition = window.pageYOffset
    const distance = targetPosition - startPosition
    const duration = 1500 // ⬅️ deixe maior para mais lento
    let start: number | null = null

    const animation = (currentTime: number) => {
      if (start === null) start = currentTime
      const progress = currentTime - start

      // Ease linear simples (pode melhorar se quiser)
      const t = Math.min(progress / duration, 1)
      window.scrollTo(0, startPosition + distance * t)

      if (progress < duration) {
        requestAnimationFrame(animation)
      }
    }

    requestAnimationFrame(animation)
  }

  return (
    <header className="sticky top-0 z-40 border-b border-border/40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <nav className="flex items-center justify-between h-16 sm:h-20">
          <Link href="#" className="flex items-center gap-3">
            <AIBadge />
            <div>
              <div className="font-bold text-sm text-foreground">Informática Avançada e Automação Digital</div>
              <div className="text-xs text-muted-foreground">Aprenda. Aplique. Cresça.</div>
            </div>
          </Link>
          <div className="flex items-center gap-4">
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Planos
            </button>
            <button
              onClick={() => scrollToSection('modules')}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Conteúdo
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}
