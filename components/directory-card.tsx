import Image from "next/image"
import { Mail, Phone } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface DirectoryCardProps {
  name: string
  position: string
  email: string
  phone: string
  description: string
  imageUrl: string
}

export default function DirectoryCard({ name, position, email, phone, description, imageUrl }: DirectoryCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="text-center pb-2">
        <div className="mx-auto mb-4">
          <div className="relative h-24 w-24 mx-auto overflow-hidden rounded-full bg-purple-100">
            <Image
              src={imageUrl || "/placeholder.svg"}
              alt={name}
              width={96}
              height={96}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="space-y-1">
          <h3 className="font-bold text-lg text-purple-800">{name}</h3>
          <p className="text-purple-600 font-medium">{position}</p>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-gray-600 text-center">{description}</p>

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <Mail className="h-4 w-4 text-purple-700 flex-shrink-0" />
            <a href={`mailto:${email}`} className="text-gray-600 hover:text-purple-700 transition-colors truncate">
              {email}
            </a>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Phone className="h-4 w-4 text-purple-700 flex-shrink-0" />
            <a href={`tel:${phone}`} className="text-gray-600 hover:text-purple-700 transition-colors">
              {phone}
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
