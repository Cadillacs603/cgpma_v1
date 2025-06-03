import Image from "next/image"
import { Calendar, Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"
import NewsCard from "@/components/news-card"
import CalendarEvent from "@/components/calendar-event"
import ContactForm from "@/components/contact-form"
import DirectoryCard from "@/components/directory-card"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {/* Hero Section */}
      <section id="inicio" className="relative bg-gradient-to-b from-purple-100 to-white py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-purple-800">
                Centro General de Padres, Madres y Apoderados
              </h1>
              <h2 className="text-xl font-medium text-purple-600">Colegio San Mateo de Osorno</h2>
              <p className="text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Trabajando juntos por la educación y bienestar de nuestros estudiantes
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button className="bg-purple-700 hover:bg-purple-800">Contáctanos</Button>
                <Button variant="outline" className="border-purple-700 text-purple-700 hover:bg-purple-50">
                  Conoce más
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative h-[300px] w-[300px] md:h-[400px] md:w-[400px]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-centro-de-padres-colegio.jpg-Sa1y12xUfxrXTRMHx99FvdEWkehCaH.jpeg"
                  alt="Logo Centro de Padres"
                  width={400}
                  height={400}
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-[url('/wave.png')] bg-cover bg-bottom"></div>
      </section>

      {/* Quiénes Somos */}
      <section id="quienes-somos" className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-purple-800">
                Quiénes Somos
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                El Centro General de Padres, Madres y Apoderados del Colegio San Mateo de Osorno es una organización que
                representa a las familias de nuestra comunidad educativa.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold tracking-tighter text-purple-700">Nuestra Misión</h3>
                <p className="text-gray-600">
                  Promover la participación activa de padres, madres y apoderados en el proceso educativo, colaborando
                  con la dirección del colegio para mejorar la calidad de la educación y el bienestar de los
                  estudiantes.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold tracking-tighter text-purple-700">Nuestra Visión</h3>
                <p className="text-gray-600">
                  Ser una comunidad educativa integrada, participativa y comprometida con la formación integral de
                  nuestros estudiantes, promoviendo valores como el respeto, la responsabilidad y la solidaridad.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold tracking-tighter text-purple-700">Nuestros Valores</h3>
                <p className="text-gray-600">
                  Compromiso, participación, respeto, transparencia y colaboración son los pilares fundamentales que
                  guían nuestro trabajo diario.
                </p>
              </div>
            </div>
            <div className="mx-auto aspect-video overflow-hidden rounded-xl border bg-purple-100 object-cover shadow-xl">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Equipo del Centro de Padres"
                width={600}
                height={400}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Directorio */}
      <section id="directorio" className="bg-purple-50 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-purple-800">
                Directorio
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Conoce a los miembros de nuestra directiva, comprometidos con el bienestar de nuestra comunidad
                educativa.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-6xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <DirectoryCard
              name="María González Pérez"
              position="Presidente"
              email="presidente@sanmateoosorno.cl"
              phone="+56 9 8765 4321"
              description="Liderar la organización y representar a las familias ante la dirección del colegio."
              imageUrl="/placeholder.svg?height=200&width=200"
            />
            <DirectoryCard
              name="Carlos Rodríguez Silva"
              position="Vicepresidente"
              email="vicepresidente@sanmateoosorno.cl"
              phone="+56 9 8765 4322"
              description="Apoyar la gestión presidencial y coordinar actividades especiales."
              imageUrl="/placeholder.svg?height=200&width=200"
            />
            <DirectoryCard
              name="Ana Martínez López"
              position="Secretaria"
              email="secretaria@sanmateoosorno.cl"
              phone="+56 9 8765 4323"
              description="Gestionar la documentación y comunicaciones oficiales del centro."
              imageUrl="/placeholder.svg?height=200&width=200"
            />
            <DirectoryCard
              name="Roberto Fernández Castro"
              position="Tesorero"
              email="tesorero@sanmateoosorno.cl"
              phone="+56 9 8765 4324"
              description="Administrar los recursos financieros y presupuesto de la organización."
              imageUrl="/placeholder.svg?height=200&width=200"
            />
            <DirectoryCard
              name="Patricia Morales Vega"
              position="Delegado Pastoral"
              email="pastoral@sanmateoosorno.cl"
              phone="+56 9 8765 4325"
              description="Coordinar actividades espirituales y de formación en valores."
              imageUrl="/placeholder.svg?height=200&width=200"
            />
            <DirectoryCard
              name="Diego Herrera Muñoz"
              position="Delegado Deporte"
              email="deporte@sanmateoosorno.cl"
              phone="+56 9 8765 4326"
              description="Organizar actividades deportivas y promover la vida saludable."
              imageUrl="/placeholder.svg?height=200&width=200"
            />
            <DirectoryCard
              name="Claudia Soto Ramírez"
              position="Delegado Cultura"
              email="cultura@sanmateoosorno.cl"
              phone="+56 9 8765 4327"
              description="Promover actividades culturales y artísticas en la comunidad."
              imageUrl="/placeholder.svg?height=200&width=200"
            />
          </div>
        </div>
      </section>

      {/* Noticias */}
      <section id="noticias" className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-purple-800">Noticias</h2>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Mantente informado sobre las últimas actividades y novedades de nuestra comunidad educativa.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <NewsCard
              title="Reunión General de Apoderados"
              date="15 de Mayo, 2025"
              description="Se realizó con éxito la primera reunión general del año escolar con una gran participación de las familias."
              imageUrl="/placeholder.svg?height=200&width=300"
            />
            <NewsCard
              title="Campaña Solidaria"
              date="10 de Mayo, 2025"
              description="Gracias a todos por su colaboración en la campaña de recolección de útiles escolares para familias necesitadas."
              imageUrl="/placeholder.svg?height=200&width=300"
            />
            <NewsCard
              title="Taller para Padres"
              date="5 de Mayo, 2025"
              description="El próximo mes iniciaremos los talleres para padres sobre comunicación efectiva con adolescentes."
              imageUrl="/placeholder.svg?height=200&width=300"
            />
          </div>
          <div className="flex justify-center">
            <Button variant="outline" className="border-purple-700 text-purple-700 hover:bg-purple-50">
              Ver todas las noticias
            </Button>
          </div>
        </div>
      </section>

      {/* Calendario de Actividades */}
      <section id="calendario" className="bg-purple-50 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-purple-800">
                Calendario de Actividades
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Planifica tu participación en nuestras actividades y eventos programados.
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-4xl py-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-purple-800">Próximos Eventos</CardTitle>
                <CardDescription>Mayo - Junio 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <CalendarEvent
                    date="20 de Mayo"
                    title="Reunión Directiva Centro de Padres"
                    time="18:00 - 19:30"
                    location="Sala de Reuniones"
                  />
                  <CalendarEvent
                    date="5 de Junio"
                    title="Taller para Padres: Comunicación Efectiva"
                    time="17:00 - 19:00"
                    location="Auditorio Principal"
                  />
                  <CalendarEvent
                    date="15 de Junio"
                    title="Bingo Familiar"
                    time="16:00 - 20:00"
                    location="Gimnasio del Colegio"
                  />
                  <CalendarEvent
                    date="25 de Junio"
                    title="Reunión General de Apoderados"
                    time="18:30 - 20:00"
                    location="Salón Multiuso"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="flex justify-center">
            <Button className="bg-purple-700 hover:bg-purple-800">Descargar Calendario Completo</Button>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-purple-800">Contacto</h2>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Estamos aquí para escucharte. No dudes en comunicarte con nosotros.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100">
                  <Mail className="h-5 w-5 text-purple-700" />
                </div>
                <div>
                  <h3 className="font-medium">Correo Electrónico</h3>
                  <p className="text-sm text-gray-600">centropadres@sanmateoosorno.cl</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100">
                  <Phone className="h-5 w-5 text-purple-700" />
                </div>
                <div>
                  <h3 className="font-medium">Teléfono</h3>
                  <p className="text-sm text-gray-600">+56 9 1234 5678</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100">
                  <MapPin className="h-5 w-5 text-purple-700" />
                </div>
                <div>
                  <h3 className="font-medium">Dirección</h3>
                  <p className="text-sm text-gray-600">Av. República 123, Osorno, Chile</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100">
                  <Calendar className="h-5 w-5 text-purple-700" />
                </div>
                <div>
                  <h3 className="font-medium">Horario de Atención</h3>
                  <p className="text-sm text-gray-600">Lunes a Viernes: 8:00 - 13:00 y 15:00 - 17:00</p>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
