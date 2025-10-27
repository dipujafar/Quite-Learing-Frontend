import { DownloadIcon2 } from "@/components/icons"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { ArrowUpRight } from "lucide-react"

interface Withdrawal {
  id: string
  type: string
  date: string
  time: string
  account: string
  amount: number
  status: "completed" | "pending" | "failed"
}

const withdrawalsData: Withdrawal[] = [
  {
    id: "1",
    type: "Bank Transfer",
    date: "2025-10-15",
    time: "10:30 AM",
    account: "Account — 7823",
    amount: 500.0,
    status: "completed",
  },
  {
    id: "2",
    type: "Bank Transfer",
    date: "2025-10-14",
    time: "9:15 AM",
    account: "Account — 7823",
    amount: 250.0,
    status: "completed",
  },
  {
    id: "3",
    type: "Bank Transfer",
    date: "2025-10-13",
    time: "11:45 AM",
    account: "Account — 7823",
    amount: 1200.0,
    status: "completed",
  },
  {
    id: "4",
    type: "Bank Transfer",
    date: "2025-10-12",
    time: "2:20 PM",
    account: "Account — 7823",
    amount: 750.0,
    status: "completed",
  },
  {
    id: "5",
    type: "Bank Transfer",
    date: "2025-10-11",
    time: "11:15 AM",
    account: "Account — 7823",
    amount: 450.0,
    status: "completed",
  },
]

export function WithdrawalHistory() {
  return (
    <div className="space-y-4 bg-white border p-4 rounded-2xl">
      <div className="flex items-center gap-2">
        <DownloadIcon2 className="h-4 w-4 text-muted-foreground" />
        <h2 className="text-sm font-semibold text-foreground">Withdrawal History</h2>
      </div>

      <div className="space-y-3">
        {withdrawalsData.map((withdrawal) => (
          <div
            key={withdrawal.id}
            className="flex items-center justify-between rounded-lg border-b bg-card p-4 hover:bg-muted/50 transition-colors"
          >
            <div className="flex items-center gap-3 flex-1">
              <Avatar className="h-10 w-10">
                <AvatarFallback className="bg-muted text-muted-foreground font-semibold">
                  {withdrawal.type.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>

              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground">{withdrawal.type}</p>
                <p className="text-xs text-muted-foreground">
                  {withdrawal.date} at {withdrawal.time}
                </p>
                <p className="text-xs text-muted-foreground">{withdrawal.account}</p>
              </div>
            </div>

            <div className="flex flex-col items-end gap-1 ml-4">
              <p className="text-sm font-semibold text-orange-600">-${withdrawal.amount.toFixed(2)}</p>
              <p className="text-xs text-[#0A0A0A] capitalize border px-2  rounded">{withdrawal.status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
