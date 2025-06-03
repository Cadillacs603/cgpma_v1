import { Calendar } from "lucide-react"

interface CalendarEventProps {
  date: string
  title: string
  time: string
  location: string
}

export default function CalendarEvent({ date, title, time, location }: CalendarEventProps) {
  return (
    <div className="flex items-start gap-4 rounded-lg border p-4 hover:bg-purple-50">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-700">
        <Calendar className="h-6 w-6" />
      </div>
      <div className="space-y-1">
        <p className="text-sm font-medium text-purple-700">{date}</p>
        <h4 className="font-semibold">{title}</h4>
        <div className="flex flex-col gap-1 text-sm text-gray-600">
          <p>Hora: {time}</p>
          <p>Lugar: {location}</p>
        </div>
      </div>
    </div>
  )
}
