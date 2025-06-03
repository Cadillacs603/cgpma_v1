import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface NewsCardProps {
  title: string
  date: string
  description: string
  imageUrl: string
}

export default function NewsCard({ title, date, description, imageUrl }: NewsCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-video w-full overflow-hidden">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          width={300}
          height={200}
          className="h-full w-full object-cover transition-all hover:scale-105"
        />
      </div>
      <CardHeader className="p-4">
        <div className="space-y-1">
          <p className="text-sm text-purple-600">{date}</p>
          <h3 className="font-bold text-xl">{title}</h3>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p className="text-gray-600 text-sm">{description}</p>
      </CardContent>
      <CardFooter className="p-4">
        <Button variant="link" className="px-0 text-purple-700 hover:text-purple-900">
          Leer más
        </Button>
      </CardFooter>
    </Card>
  )
}
