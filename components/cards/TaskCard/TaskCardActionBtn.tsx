"use client"
import { Button } from '@/components/ui/button'
import { useAppSelector } from '@/redux/hooks'


export default function TaskCardActionBtn({ status, onReject, onAccept }: { status: string, onReject?: () => void, onAccept?: () => void }) {
    const user = useAppSelector((state) => state.auth.user);

    if (user?.role === "worker") {
        return <div className="flex gap-4">
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
                        Cancel
                    </Button>
                    <Button
                        onClick={onAccept}
                        variant="outline"
                        className="flex-1 bg-[#6b350017] text-[#6B3500] border-[#6b350017] hover:bg-[#673a0d17] cursor-pointer"
                    >
                        Delivery
                    </Button>
                </>
            )}
        </div>
    }
    return (
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
    )
}
