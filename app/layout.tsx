import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Informática Avançada e Automação Digital',
  description: 'Aprenda. Aplique. Cresça.',
  openGraph: {
    title: "Informática Avançada e Automação Digital",
    description: "Aprenda. Aplique. Cresça.",
    url: "https://informatica-avancada-slz.com.br",
    type: "website",
    images: [
      {
        url: "/icon-dark-32x32.png",
        width: 1200,
        height: 630,
        alt: "imagem",
      },
    ],
  },
  icons: {
    icon: [
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/favicon-16x16.png',
        type: 'image/png',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
