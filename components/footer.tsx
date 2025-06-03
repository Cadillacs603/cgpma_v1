import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-purple-900 text-white">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-centro-de-padres-colegio.jpg-Sa1y12xUfxrXTRMHx99FvdEWkehCaH.jpeg"
                alt="Logo Centro de Padres"
                width={50}
                height={50}
                className="rounded-full bg-white p-1"
              />
              <span className="text-lg font-semibold">Centro de Padres</span>
            </div>
            <p className="text-sm text-purple-200">
              Centro General de Padres, Madres y Apoderados del Colegio San Mateo de Osorno
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm text-purple-200">
              <li>
                <Link href="#inicio" className="hover:text-white">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="#quienes-somos" className="hover:text-white">
                  Quiénes Somos
                </Link>
              </li>
              <li>
                <Link href="#directorio" className="hover:text-white">
                  Directorio
                </Link>
              </li>
              <li>
                <Link href="#noticias" className="hover:text-white">
                  Noticias
                </Link>
              </li>
              <li>
                <Link href="#calendario" className="hover:text-white">
                  Calendario de Actividades
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="hover:text-white">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contacto</h3>
            <ul className="space-y-2 text-sm text-purple-200">
              <li>Av. República 123, Osorno, Chile</li>
              <li>centropadres@sanmateoosorno.cl</li>
              <li>+56 9 1234 5678</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Síguenos</h3>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-purple-300">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-purple-300">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="hover:text-purple-300">
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-purple-800 pt-8 text-center text-sm text-purple-300">
          <p>
            © {new Date().getFullYear()} Centro General de Padres, Madres y Apoderados - Colegio San Mateo de Osorno.
            Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
