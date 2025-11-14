import Header from '@/components/header'
import Hero from '@/components/hero'
import Features from '@/components/features'
import Modules from '@/components/modules'
import Pricing from '@/components/pricing'
import Footer from '@/components/footer'

export const metadata = {
  title: 'Informática Avançada e Automação Digital — Domine as Habilidades Mais Procuradas',
  description: 'Aprenda habilidades práticas com aulas ao vivo, projetos reais e certificado reconhecido. Inscreva-se agora e transforme sua carreira em 5 meses.',
}

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-background via-background to-secondary/5">
      <Header />
      <Hero />
      <Features />
      <Modules />
      <Pricing />
      <Footer />
    </main>
  )
}
