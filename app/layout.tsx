import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Centro de Padres San Mateo de Osorno",
  description: "Centro General de Padres, Madres y Apoderados del Colegio San Mateo de Osorno",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className} style={{ margin: 0, padding: 0, backgroundColor: "#ffffff" }}>
        {children}
      </body>
    </html>
  )
}
