import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Clock } from "lucide-react"

interface Payment {
  id: string
  name: string
  date: string
  time: string
  amount: number
  status: "completed" | "pending" | "failed"
}

const paymentsData: Payment[] = [
  {
    id: "1",
    name: "John's Restaurant",
    date: "2025-10-14",
    time: "2:20 PM",
    amount: 125.5,
    status: "completed",
  },
  {
    id: "2",
    name: "Green Valley Cafe",
    date: "2025-10-13",
    time: "5:45 PM",
    amount: 869.0,
    status: "completed",
  },
  {
    id: "3",
    name: "Urban Bistro",
    date: "2025-10-12",
    time: "7:15 PM",
    amount: 156.79,
    status: "completed",
  },
  {
    id: "4",
    name: "Sunset Grill",
    date: "2025-10-11",
    time: "1:20 PM",
    amount: 895.25,
    status: "completed",
  },
  {
    id: "5",
    name: "Downtown Deli",
    date: "2025-10-10",
    time: "8:00 PM",
    amount: 512.0,
    status: "completed",
  },
  {
    id: "6",
    name: "Cafe Milano",
    date: "2025-10-09",
    time: "3:30 PM",
    amount: 678.5,
    status: "completed",
  },
  {
    id: "7",
    name: "The Burger Joint",
    date: "2025-10-08",
    time: "8:45 PM",
    amount: 143.0,
    status: "completed",
  },
]

export function TransactionHistory() {
  return (
    <div className="space-y-4 bg-white border p-4 rounded-2xl">
      <div className="flex items-center gap-2">
        <Clock className="h-4 w-4 text-muted-foreground" />
        <h2 className="text-sm font-semibold text-foreground">Recent Payments</h2>
      </div>

      <div className="space-y-3">
        {paymentsData.map((payment) => (
          <div
            key={payment.id}
            className="flex items-center justify-between rounded-lg border-b bg-card p-4 hover:bg-muted/50 transition-colors"
          >
            <div className="flex items-center gap-3 flex-1">
              <Avatar className="h-10 w-10">
                <AvatarFallback className="bg-muted text-muted-foreground font-semibold">
                  {payment.name.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>

              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground truncate">{payment.name}</p>
                <p className="text-xs text-muted-foreground">
                  {payment.date} at {payment.time}
                </p>
              </div>
            </div>

            <div className="flex flex-col items-end gap-1 ml-4">
              <p className="text-sm font-semibold text-green-600">+${payment.amount.toFixed(2)}</p>
              <p className="text-xs text-[#0A0A0A] capitalize border px-2  rounded">{payment.status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
