"use client"
import { Card } from "@/components/ui/card"
import TaskCardActionBtn from "./TaskCardActionBtn"

interface TaskCardProps {
    userId: string
    title: string
    subject: string
    description: string
    dueDate: string
    id: string
    askingPrice: string
    status?: "reject" | "accept" | "completed"
    onReject?: () => void
    onAccept?: () => void
}

export function TaskCard({
    userId,
    title,
    subject,
    description,
    dueDate,
    id,
    askingPrice,
    status = "accept",
    onReject,
    onAccept,
}: TaskCardProps) {
    return (
        <Card className="p-6 border border-gray-200 rounded-2xl bg-[#d2b4500d] gap-3">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start lg:mb-4 mb-2">
                <div>
                    <p className="text-sm text-gray-500 mb-1">{userId}</p>
                    <h2 className="text-xl font-bold text-primary-color">{title}</h2>
                </div>
                <p className="font-light text-primary-color">Due Date: {dueDate}</p>
            </div>

            {/* Content Grid */}
            <div className="grid sm:grid-cols-2 lg:gap-6 gap-3.5 lg:mb-6 mb-3 font-light text-primary-color">
                {/* Left Column */}
                <div>
                    <p className=" mb-3">
                        <span >Subject:</span> {subject}
                    </p>
                    <p className="space-x-2">
                        <span >Description:</span>

                        <span> {description}</span>
                    </p>
                </div>

                {/* Right Column */}
                <div className="sm:text-right">
                    <p className=" mb-3">
                        <span >ID:</span>
                        {id}
                    </p>
                    <p className="">
                        <span >Asking Price:</span> {askingPrice}
                    </p>
                </div>
            </div>

            {/* Action Buttons */}
            <TaskCardActionBtn status={status} onReject={onReject} onAccept={onAccept} />
          
        </Card>
    )
}
