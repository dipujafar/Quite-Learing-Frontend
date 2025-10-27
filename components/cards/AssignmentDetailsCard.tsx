import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Calendar } from "lucide-react"

interface AssignmentCardProps {
    title: string
    status: "Active" | "Inactive" | "Completed"
    id: string
    subject: string
    dueDate: string
    points: number
    description: string
}

export function AssignmentCard({ title, status, id, subject, dueDate, points, description }: AssignmentCardProps) {
    const statusColors = {
        Active: "bg-green-100 text-green-800",
        Inactive: "bg-gray-100 text-gray-800",
        Completed: "bg-blue-100 text-blue-800",
    }

    return (
        <Card className="bg-[#d2b4500d]">
            <CardHeader className="pb-3">
                <div className="flex flex-col sm:flex-row items-start justify-between">
                    <div className="flex items-center gap-3 mb-2">
                        <h2 className="text-xl font-semibold">{title}</h2>
                        <Badge className={statusColors[status]}>{status}</Badge>
                    </div>
                    <p className="text-[#070707]">ID:{id}</p>
                </div>
                {/* Meta Information */}
                <div className="flex flex-wrap gap-4 text-sm text-[#4A5565]">
                    <div className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4 " />
                        <span className="">Subject:</span>
                        <span className="font-medium">{subject}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 " />
                        <span className="">Due:</span>
                        <span className="font-medium">{dueDate}</span>
                    </div>
                    <div className="flex items-center gap-2">

                        <span className="font-medium">${points}</span>
                    </div>
                </div>
            </CardHeader>

            <CardContent className="space-y-4">


                {/* Divider */}
                <div className="border-t" />

                {/* Description */}
                <div>
                    <h3 className="font-semibold mb-2">Assignment Description</h3>
                    <p className="text-sm text-[#364153] leading-relaxed">{description}</p>
                </div>
            </CardContent>
        </Card>
    )
}
