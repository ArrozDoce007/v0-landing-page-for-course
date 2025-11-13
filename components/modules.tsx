export default function Modules() {
  const modules = [
    {
      title: 'Módulo 1 — Informática Avançada e Automação Digital',
      description: 'Conceitos fundamentais de sistemas operacionais, gerenciamento de arquivos, personalização do sistema e ferramentas de diagnóstico para otimizar seu computador.',
      lessons: 5,
    },
    {
      title: 'Módulo 2 — Microsoft Office Avançado',
      description: 'Domine Word, Excel e PowerPoint em nível avançado com integração entre as ferramentas do Office para produtividade máxima.',
      lessons: 4,
    },
    {
      title: 'Módulo 3 — Internet, Nuvem e Produtividade Digital',
      description: 'Fundamentos da internet e nuvem, Google Workspace, Microsoft 365 e comunicação corporativa em ambientes digitais.',
      lessons: 5,
    },
    {
      title: 'Módulo 4 — Segurança Digital e Proteção de Dados',
      description: 'Proteção completa: segurança de senhas, navegação segura, proteção de dispositivos e legislação de privacidade de dados.',
      lessons: 5,
    },
    {
      title: 'Módulo 5 — Hardware, Manutenção e Troubleshooting',
      description: 'Conceitos de hardware, montagem de sistemas, diagnóstico de problemas e manutenção preventiva profissional.',
      lessons: 5,
    },
    {
      title: 'Módulo 6 — Design e Comunicação Visual',
      description: 'Fundamentos do design, edição de imagens com Canva, produção de apresentações visuais e construção de portfólio digital.',
      lessons: 4,
    },
    {
      title: 'Módulo 7 — Lógica de Programação e Automação com Python',
      description: 'Lógica de programação, Python, manipulação de dados, automação no Windows, integração com Office e noções de banco de dados.',
      lessons: 6,
    },
    {
      title: 'Módulo 8 — Projeto Integrador e Certificação',
      description: 'Revisão geral, planejamento e desenvolvimento de projeto integrador, apresentação de resultados e avaliação final.',
      lessons: 3,
    },
  ]

  return (
    <section id="modules" className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground text-balance">
            O que você vai aprender
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mt-4">
            8 módulos completos cobrindo desde informática básica até programação com Python
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {modules.map((module, idx) => (
            <div
              key={idx}
              className="bg-card border border-border rounded-xl p-6 sm:p-8 hover:shadow-lg hover:border-blue-300/50 transition-all group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                  Módulo {idx + 1}
                </div>
                <span className="text-xs font-medium text-muted-foreground">{module.lessons} aulas</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                {module.title}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {module.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 sm:p-8 bg-blue-50 border border-blue-200 rounded-xl">
          <p className="text-center text-sm sm:text-base text-foreground">
            <span className="font-semibold">Total:</span> 37 aulas práticas e estruturadas ao longo de 5 meses
          </p>
        </div>
      </div>
    </section>
  )
}
