"use client"
import { AssignmentCard } from "@/components/cards/TaskCard"
import PaginationSection from "@/components/shared/PaginationSection"
import { Input } from "@/components/ui/input"
import { assignments } from "@/data/dummyData"
import { Search } from "lucide-react"

export default function TaskManagementContainer() {


    return (
        <div className="lg:space-y-8 space-y-5">
            <div className="relative">
                <Search color="#5c5656" className="absolute  top-1/2 left-2 -translate-y-1/2" />
                <Input placeholder="Send Offer Message" className="bg-slate-50 h-12 pl-9" />
            </div>
            <div className="space-y-4">
                {assignments.map((assignment, index) => (
                    <AssignmentCard
                        key={index}
                        {...assignment}
                        onReject={() => console.log("Rejected:", assignment.id)}
                        onAccept={() => console.log("Accepted:", assignment.id)}
                    />
                ))}
                <PaginationSection />
            </div>
        </div>

    )
}
