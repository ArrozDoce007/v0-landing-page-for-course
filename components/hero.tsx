'use client'

import { Button } from '@/components/ui/button'

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative py-12 sm:py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="flex flex-col gap-6 sm:gap-8">
            <div className="inline-flex items-center gap-2 w-fit">
              <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                🚀 Lançamento
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance">
              Domine as habilidades que o mercado mais valoriza — em 5 meses.
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Curso Premium com aulas práticas, projetos reais, suporte ao vivo e garantia de 7 dias. Transforme conhecimento em resultado — sem enrolação.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold shadow-lg"
                onClick={() => scrollToSection('pricing')}
              >
                Quero me inscrever
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border/60 hover:bg-secondary"
                onClick={() => scrollToSection('modules')}
              >
                Ver conteúdo
              </Button>
            </div>

            <p className="text-xs sm:text-sm text-muted-foreground font-medium">
              ✨ Vagas limitadas
            </p>
          </div>

          {/* Visual */}
          <div className="relative hidden lg:flex items-center justify-center">
            <div className="relative w-full aspect-square max-w-md">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-blue-400/5 rounded-3xl blur-3xl"></div>
              <div className="relative bg-gradient-to-br from-blue-50 to-blue-100/50 border border-blue-200/40 rounded-2xl p-8 flex flex-col items-center justify-center min-h-80 shadow-xl">
                <div className="text-center">
                  <div className="text-xl font-bold text-foreground mb-2">Aula Demo</div>
                  <div className="text-sm text-muted-foreground">Assista ao trecho grátis</div>
                  <div className="mt-6 w-20 h-20 bg-blue-600/10 rounded-full flex items-center justify-center mx-auto">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                      <div className="w-0 h-0 border-l-6 border-l-white border-t-4 border-t-transparent border-b-4 border-b-transparent ml-1"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features highlight */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12 sm:mt-16">
          <div className="bg-card border border-border rounded-xl p-4 sm:p-6">
            <h4 className="font-semibold text-foreground mb-2 text-sm sm:text-base">Conteúdo prático</h4>
            <p className="text-xs sm:text-sm text-muted-foreground">Mais de 30 aulas com exercícios e projetos aplicáveis ao mercado.</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-4 sm:p-6">
            <h4 className="font-semibold text-foreground mb-2 text-sm sm:text-base">Mentoria ao vivo</h4>
            <p className="text-xs sm:text-sm text-muted-foreground">Encontros semanais para tirar dúvidas e revisar projetos.</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-4 sm:p-6">
            <h4 className="font-semibold text-foreground mb-2 text-sm sm:text-base">Certificado reconhecido</h4>
            <p className="text-xs sm:text-sm text-muted-foreground">Com apresentação de projetos e avaliação final.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
