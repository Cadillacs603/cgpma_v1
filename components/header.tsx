"use client"

import { useState, useOptimistic } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [optimisticMenuState, setOptimisticMenuState] = useOptimistic(
    isMenuOpen,
    (state, newState: boolean) => newState,
  )

  const toggleMenu = () => {
    setOptimisticMenuState(!optimisticMenuState)
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-centro-de-padres-colegio.jpg-Sa1y12xUfxrXTRMHx99FvdEWkehCaH.jpeg"
              alt="Logo Centro de Padres"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="hidden text-lg font-semibold text-purple-800 md:inline-block">
              Centro de Padres San Mateo
            </span>
          </Link>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link href="#inicio" className="text-sm font-medium hover:text-purple-700 transition-colors">
            Inicio
          </Link>
          <Link href="#quienes-somos" className="text-sm font-medium hover:text-purple-700 transition-colors">
            Quiénes Somos
          </Link>
          <Link href="#directorio" className="text-sm font-medium hover:text-purple-700 transition-colors">
            Directorio
          </Link>
          <Link href="#noticias" className="text-sm font-medium hover:text-purple-700 transition-colors">
            Noticias
          </Link>
          <Link href="#calendario" className="text-sm font-medium hover:text-purple-700 transition-colors">
            Calendario
          </Link>
          <Link href="#contacto" className="text-sm font-medium hover:text-purple-700 transition-colors">
            Contacto
          </Link>
        </nav>
        <div className="hidden md:flex">
          <Button className="bg-purple-700 hover:bg-purple-800 transition-colors">Área de Apoderados</Button>
        </div>
        <button
          className="block md:hidden p-2 hover:bg-purple-50 rounded-md transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {optimisticMenuState ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {optimisticMenuState && (
        <div className="container mx-auto px-4 pb-4 md:hidden border-t bg-white">
          <nav className="flex flex-col space-y-4 pt-4">
            <Link
              href="#inicio"
              className="text-sm font-medium hover:text-purple-700 transition-colors"
              onClick={toggleMenu}
            >
              Inicio
            </Link>
            <Link
              href="#quienes-somos"
              className="text-sm font-medium hover:text-purple-700 transition-colors"
              onClick={toggleMenu}
            >
              Quiénes Somos
            </Link>
            <Link
              href="#directorio"
              className="text-sm font-medium hover:text-purple-700 transition-colors"
              onClick={toggleMenu}
            >
              Directorio
            </Link>
            <Link
              href="#noticias"
              className="text-sm font-medium hover:text-purple-700 transition-colors"
              onClick={toggleMenu}
            >
              Noticias
            </Link>
            <Link
              href="#calendario"
              className="text-sm font-medium hover:text-purple-700 transition-colors"
              onClick={toggleMenu}
            >
              Calendario
            </Link>
            <Link
              href="#contacto"
              className="text-sm font-medium hover:text-purple-700 transition-colors"
              onClick={toggleMenu}
            >
              Contacto
            </Link>
            <Button className="bg-purple-700 hover:bg-purple-800 w-full transition-colors">Área de Apoderados</Button>
          </nav>
        </div>
      )}
    </header>
  )
}
