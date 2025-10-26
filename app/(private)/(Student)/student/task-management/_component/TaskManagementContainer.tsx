"use client"
import { TaskCard } from "@/components/cards/TaskCard"
import PaginationSection from "@/components/shared/PaginationSection"
import { Input } from "@/components/ui/input"
import { assignments } from "@/data/dummyData"
import { Search } from "lucide-react"
import { useRouter } from "next/navigation"

export default function TaskManagementContainer() {
    const router = useRouter()


    return (
        <div className="lg:space-y-8 space-y-5">
            <div className="relative">
                <Search color="#5c5656" className="absolute  top-1/2 left-2 -translate-y-1/2" />
                <Input placeholder="Send Offer Message" className="bg-slate-50 h-12 pl-9" />
            </div>
            <div className="space-y-4">
                {assignments.map((assignment, index) => (
                    <div key={index} className="cursor-pointer" onClick={() => router.push("/student/task-management/1")}>
                        <TaskCard
                            {...assignment}
                            onReject={() => console.log("Rejected:", assignment.id)}
                            onAccept={() => console.log("Accepted:", assignment.id)}
                        />
                    </div>
                ))}
                <PaginationSection />
            </div>
        </div>

    )
}
