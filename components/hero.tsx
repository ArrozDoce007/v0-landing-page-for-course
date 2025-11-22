"use client"

import { Button } from "@/components/ui/button"

export default function Hero() {
  const scrollToSection = (id: string) => {
    const target = document.getElementById(id)
    if (!target) return

    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset
    const startPosition = window.pageYOffset
    const distance = targetPosition - startPosition
    const duration = 1500
    let start: number | null = null

    const animation = (currentTime: number) => {
      if (start === null) start = currentTime
      const progress = currentTime - start

      const t = Math.min(progress / duration, 1)
      window.scrollTo(0, startPosition + distance * t)

      if (progress < duration) {
        requestAnimationFrame(animation)
      }
    }

    requestAnimationFrame(animation)
  }

  return (
    <section className="relative py-12 sm:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 via-transparent to-orange-600/5 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="flex flex-col gap-6 sm:gap-8 order-1 lg:order-1">
            <div className="inline-flex items-center gap-2 w-fit">
              <div className="bg-orange-600/20 text-orange-400 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold border border-orange-600/30">
                🚀 Lançamento
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance">
              Domine as habilidades que o mercado mais valoriza — em 5 meses.
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Curso Premium com aulas práticas, projetos reais, suporte ao vivo e garantia de 7 dias. Transforme
              conhecimento em resultado — sem enrolação.
            </p>


            <div className="flex flex-col sm:flex-row gap-3 pt-2 order-3 lg:order-2">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white font-semibold shadow-lg"
                onClick={() => scrollToSection("pricing")}
              >
                Quero me inscrever
              </Button>
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white font-semibold shadow-lg"
                onClick={() => scrollToSection("modules")}
              >
                Ver conteúdo
              </Button>
            </div>

            <p className="text-xs sm:text-sm text-muted-foreground font-medium order-4 lg:order-3">
              ✨ Vagas limitadas
            </p>
          </div>
        </div>

        {/* Features highlight */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12 sm:mt-16">
          <div className="bg-card border border-border rounded-xl p-4 sm:p-6 hover:border-orange-600/30 hover:bg-card/80 transition-colors group cursor-pointer">
            <h4 className="font-semibold text-foreground mb-2 text-sm sm:text-base group-hover:text-orange-600 transition-colors">
              Conteúdo prático
            </h4>
            <p className="text-xs sm:text-sm text-muted-foreground group-hover:text-orange-600 transition-colors">
              Mais de 30 aulas com exercícios e projetos aplicáveis ao mercado.
            </p>
          </div>
          <div className="bg-card border border-border rounded-xl p-4 sm:p-6 hover:border-orange-600/30 hover:bg-card/80 transition-colors group cursor-pointer">
            <h4 className="font-semibold text-foreground mb-2 text-sm sm:text-base group-hover:text-orange-600 transition-colors">
              Mentoria ao vivo
            </h4>
            <p className="text-xs sm:text-sm text-muted-foreground group-hover:text-orange-600 transition-colors">
              Encontros semanais para tirar dúvidas e revisar projetos.
            </p>
          </div>
          <div className="bg-card border border-border rounded-xl p-4 sm:p-6 hover:border-orange-600/30 hover:bg-card/80 transition-colors group cursor-pointer">
            <h4 className="font-semibold text-foreground mb-2 text-sm sm:text-base group-hover:text-orange-600 transition-colors">
              Certificado reconhecido
            </h4>
            <p className="text-xs sm:text-sm text-muted-foreground group-hover:text-orange-600 transition-colors">
              Com apresentação de projetos e avaliação final.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
