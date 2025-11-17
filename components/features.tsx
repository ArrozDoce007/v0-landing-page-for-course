export default function Features() {
  return (
    <section className="py-16 sm:py-24 bg-card/30 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground text-balance">
            Por que escolher nosso curso?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          <div className="bg-card border border-border rounded-xl p-6 sm:p-8 hover:border-orange-600/30 hover:bg-card/80 transition-colors group cursor-pointer">
            <div className="w-12 h-12 bg-orange-600/15 rounded-lg flex items-center justify-center mb-4 text-xl">
              📚
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 group-hover:text-orange-600 transition-colors">Conteúdo estruturado</h3>
            <p className="text-sm sm:text-base text-muted-foreground group-hover:text-orange-600 transition-colors">Metodologia testada com mais de 1000 alunos satisfeitos. Cada lição é prática e aplicável no dia a dia.</p>
          </div>

          <div className="bg-card border border-border rounded-xl p-6 sm:p-8 hover:border-orange-600/30 hover:bg-card/80 transition-colors group cursor-pointer">
            <div className="w-12 h-12 bg-orange-600/15 rounded-lg flex items-center justify-center mb-4 text-xl">
              👨‍🏫
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 group-hover:text-orange-600 transition-colors">Mentores experientes</h3>
            <p className="text-sm sm:text-base text-muted-foreground group-hover:text-orange-600 transition-colors">Professores com experiência no mercado.</p>
          </div>

          <div className="bg-card border border-border rounded-xl p-6 sm:p-8 hover:border-orange-600/30 hover:bg-card/80 transition-colors group cursor-pointer">
            <div className="w-12 h-12 bg-orange-600/15 rounded-lg flex items-center justify-center mb-4 text-xl">
              💼
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 group-hover:text-orange-600 transition-colors">Projetos reais</h3>
            <p className="text-sm sm:text-base text-muted-foreground group-hover:text-orange-600 transition-colors">Portfolio pronto para mostrar a recrutadores. Construa projetos que valem a pena no currículo.</p>
          </div>

          <div className="bg-card border border-border rounded-xl p-6 sm:p-8 hover:border-orange-600/30 hover:bg-card/80 transition-colors group cursor-pointer">
            <div className="w-12 h-12 bg-orange-600/15 rounded-lg flex items-center justify-center mb-4 text-xl">
              ✅
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 group-hover:text-orange-600 transition-colors">Certificado valioso</h3>
            <p className="text-sm sm:text-base text-muted-foreground group-hover:text-orange-600 transition-colors">Reconhecido por empresas líderes. Seu certificado abre portas no mercado de trabalho.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
