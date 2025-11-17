export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-orange-600 to-orange-400 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                IA
              </div>
              <div>
                <div className="font-bold text-sm text-foreground">Informática Avançada e Automação Digital</div>
                <div className="text-xs text-muted-foreground">Aprenda. Aplique. Cresça.</div>
              </div>
            </div>
          </div>
          <div className="text-sm text-muted-foreground flex flex-col sm:flex-row gap-4 sm:justify-end">
            <a href="#" className="hover:text-foreground transition-colors">Política de privacidade</a>
            <a href="#" className="hover:text-foreground transition-colors">Termos de uso</a>
            <a href="#" className="hover:text-foreground transition-colors">Contato</a>
          </div>
        </div>
        <div className="border-t border-border pt-8 text-center text-xs text-muted-foreground">
          <p>© {currentYear} Informática Avançada e Automação Digital. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
