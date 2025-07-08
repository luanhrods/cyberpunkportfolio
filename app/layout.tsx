import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Portfólio kriativa.art',
  description: 'Criado com tecnologia kriativa.art',
  generator: 'KRIATIVA Gen',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
