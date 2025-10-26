import { AssignmentCard } from "@/components/cards/AssignmentDetailsCard"
import { SubmissionReviewCard } from "@/components/cards/SubmissionReviewCard"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"


export default function TaskManagementDetails() {
    return (
        <div className="space-y-4">
            <Link href="/student/task-management" className="flex items-center  gap-1.5 font-medium"> <ArrowLeft size={20} /> <p>Back to Task Management</p></Link>

            <AssignmentCard
                title="History Essay Assignment"
                status="Active"
                id="568498845"
                subject="History"
                dueDate="December 5th, 2025"
                points={2500}
                description="This assignment requires students to write a detailed essay analyzing the causes, major events, and consequences of World War II."
            />

            <div className="space-y-4">
                {/* Accepted Submission */}
                <SubmissionReviewCard
                    username="Alex089"
                    initials="AL"
                   
                    timestamp="10/17/2025, 1:20:00 PM"
                    description="This assignment requires students to write a detailed essay analyzing the causes, major events, and consequences of World War II."
                    attachments={[{ name: "word_essay_final.pdf", url: "#" }]}
                    reviewNotes="Will be here..."
                />

                {/* Rejected Submission */}
                <SubmissionReviewCard
                    username="Alex089"
                    initials="AL"
                    status="Rejected"
                    timestamp="10/17/2025, 1:20:00 PM"
                    description="This assignment requires students to write a detailed essay analyzing the causes, major events, and consequences of World War II."
                    attachments={[{ name: "word_essay_final.pdf", url: "#" }]}
                    reviewNotes="I want more better"
                />
            </div>
        </div>
    )
}
