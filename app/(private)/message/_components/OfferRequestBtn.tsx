"use client"
import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/redux/hooks";


export default function OfferRequestBtn() {
  const user: Record<string, string> | null = useAppSelector((state) => state.auth.user);
  if (user?.role === "worker") {
    return (
      <div
        style={{
          background:
            "linear-gradient(0deg, rgba(210, 180, 80, 0.18) 0%, rgba(210, 180, 80, 0.00) 97.12%)",
        }}
        className="rounded-2xl p-5 flex gap-x-3"
      >
        <Button className="flex-1 text-[#165940] bg-[#1659400a] hover:bg-[#2c70570a] cursor-pointer ">Accept Offer</Button>
        <Button className="flex-1 text-[#5F1011] bg-[#5f10110a] hover:bg-[#7721230a] cursor-pointer">Decline Offer</Button>
      </div>
    );
  }

  return null

}
