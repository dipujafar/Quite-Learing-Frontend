"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Download, Clock } from "lucide-react"
import { useState } from "react"
import { Textarea } from "../ui/textarea"
import { Button } from "../ui/button"

interface Attachment {
    name: string
    url: string
}

interface SubmissionReviewCardProps {
    username: string
    initials: string
    status?: "Accepted" | "Rejected" | "Pending"
    timestamp: string
    description: string
    attachments: Attachment[]
    reviewNotes?: string
    onReviewNotesChange?: (notes: string) => void
    onReject?: () => void
    onAccept?: () => void
}

export function SubmissionReviewCard({
    username,
    initials,
    status,
    timestamp,
    description,
    attachments,
    reviewNotes = "",
    onReviewNotesChange,
    onReject,
    onAccept,
}: SubmissionReviewCardProps) {
    const [notes, setNotes] = useState(reviewNotes)

    const statusColors = {
        Accepted: "bg-green-100 text-green-800",
        Rejected: "bg-red-100 text-red-800",
        Pending: "bg-yellow-100 text-yellow-800",
    }

    const handleNotesChange = (value: string) => {
        setNotes(value)
        onReviewNotesChange?.(value)
    }

    const handleDownload = (attachment: Attachment) => {
        const link = document.createElement("a")
        link.href = attachment.url
        link.download = attachment.name
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    return (
        <Card className="w-full bg-[#d2b4500d]">
            <CardHeader className="pb-4 border-b">
                <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                        <Avatar className="h-10 w-10">
                            <AvatarFallback className="bg-primary-color text-white font-semibold">{initials}</AvatarFallback>
                        </Avatar>
                        <div>
                            <div className="flex items-center gap-2">
                                <p className="font-semibold">{username}</p>
                                {status !== "Pending" && <Badge className={statusColors[status!]}>{status}</Badge>}
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span>{timestamp}</span>
                    </div>
                </div>
            </CardHeader>

            <CardContent className="space-y-4">
                {/* Description Section */}
                <div className="flex gap-3">
                    <div>
                        <h4 className="text-sm text-[#2C2420] font-semibold mb-2">Description</h4>

                        <p className="text-sm text-[#364153] leading-relaxed">{description}</p>
                    </div>

                    {/* Attachments - Right Side (1 column) */}
                    <div>
                        <h4 className="text-sm text-[#6A7282] font-semibold mb-1">Attachments</h4>
                        <div className="space-y-2 bg-white w-fit rounded-md border-2">
                            {attachments.map((attachment, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleDownload(attachment)}
                                    className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-muted transition-colors w-full text-left cursor-pointer"
                                >
                                    <Download className="w-4 h-4 text-muted-foreground shrink-0" />
                                    <span className="text-sm text-muted-foreground truncate hover:text-foreground">
                                        {attachment.name}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>



                {/* Review Notes - Left Side (2 columns) */}
                <div className="col-span-2">
                    <label className="text-sm font-semibold mb-2 block">Review Notes</label>
                    <Textarea
                        placeholder="Write here...."
                        value={notes}
                        onChange={(e) => handleNotesChange(e.target.value)}
                        className="resize-none bg-[#FFFFFF]"
                    />
                </div>

                {/* Action Buttons */}
              { status === "Pending" &&  <div className="flex gap-4">

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

                </div>}



            </CardContent>
        </Card>
    )
}
