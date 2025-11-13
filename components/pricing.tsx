'use client'

import { Button } from '@/components/ui/button'
import { sendWhatsAppMessage } from '@/lib/whatsapp'

export default function Pricing() {
  const handleCheckout = (plan: string) => {
    alert(`Iniciando checkout para: ${plan}`)
    // Integrar com Stripe ou processador de pagamentos
  }

  return (
    <section id="pricing" className="py-16 sm:py-24 bg-secondary/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
            Plano único, resultado garantido
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Investimento completo em sua transformação digital. Comece agora e parcele na forma que preferir.
          </p>
        </div>

        <div className="bg-gradient-to-br from-blue-600 to-blue-500 rounded-2xl p-8 sm:p-12 text-white shadow-xl">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-yellow-900 px-6 py-2 rounded-full text-sm font-bold">
            PLANO COMPLETO
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            {/* Left side - Features */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-2">Formação Profissional</h3>
              <p className="text-blue-100 mb-8">Tudo o que você precisa para dominar informática, produtividade digital e programação</p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <span className="text-xl">✓</span>
                  <span>8 módulos estruturados</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-xl">✓</span>
                  <span>37+ aulas práticas</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-xl">✓</span>
                  <span>5 meses de duração</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-xl">✓</span>
                  <span>Projeto integrador</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-xl">✓</span>
                  <span>Certificado reconhecido</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-xl">✓</span>
                  <span>Materiais completos</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-xl">✓</span>
                  <span>Suporte durante o curso</span>
                </li>
              </ul>
            </div>

            {/* Right side - Pricing and CTA */}
            <div className="flex flex-col justify-between">
              <div>
                <p className="text-blue-100 text-sm uppercase tracking-wide mb-2">Investimento total</p>
                <div className="mb-8">
                  <span className="text-5xl sm:text-6xl font-bold">R$ 2.000</span>
                  <p className="text-blue-100 mt-3">Pagamento único ou parcelado</p>
                </div>

                <div className="bg-blue-700/50 rounded-lg p-4 mb-8">
                  <p className="text-sm font-semibold mb-3">Formas de pagamento:</p>
                  <ul className="text-sm space-y-2">
                    <li>💳 À vista: R$ 2.000</li>
                    <li>💳 5x R$ 400/mês</li>
                  </ul>
                </div>
              </div>

              <Button
                className="w-full bg-white hover:bg-blue-50 text-blue-600 font-bold text-lg py-6 rounded-lg"
                onClick={() => sendWhatsAppMessage()}
              >
                Começar Agora
              </Button>

              <p className="text-center text-xs text-blue-100 mt-4">
                ✓ Garantia de 7 dias ou seu dinheiro de volta
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Dúvidas? <button onClick={() => sendWhatsAppMessage()} className="text-blue-600 hover:underline font-semibold">Entre em contato por WhatsApp</button>
          </p>
        </div>
      </div>
    </section>
  )
}
