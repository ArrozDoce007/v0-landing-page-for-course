'use client'

import Link from 'next/link'

export default function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="sticky top-0 z-40 border-b border-border/40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <nav className="flex items-center justify-between h-16 sm:h-20">
          <Link href="#" className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center text-white font-bold text-lg shadow-lg">
              CP
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-sm text-foreground">Curso Premium</div>
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
              className="text-sm font-medium text-foreground hover:text-primary transition-colors hidden sm:inline-block"
            >
              Conteúdo
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}
