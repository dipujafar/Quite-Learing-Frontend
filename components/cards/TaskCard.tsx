"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

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
                        <span >Description (Optional):</span>

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
            <div className="flex gap-4">
                {status === "completed" ? (
                    <div className="w-full text-center md:py-2 py-1 bg-[#6b350017] rounded-lg">
                        <p className="text-[#6B3500] font-medium">Completed</p>
                    </div>
                ) : (
                    <>
                        <Button
                            onClick={onReject}
                            variant="outline"
                            className="flex-1 bg-[#e2000017] text-[#E20000] border-red-200 hover:bg-red-100 cursor-pointer"
                        >
                            Reject
                        </Button>
                        <Button
                            onClick={onAccept}
                            variant="outline"
                            className="flex-1 bg-[#6b350017] text-[#6B3500] border-[#6b350017] hover:bg-[#673a0d17] cursor-pointer"
                        >
                            Accept Delivery
                        </Button>
                    </>
                )}
            </div>
        </Card>
    )
}
