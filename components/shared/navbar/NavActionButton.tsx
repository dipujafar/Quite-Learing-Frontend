"use client";
import AnimatedBgFillBtn from "@/components/animation/AnimatedBgFillBtn";
import GradientBtn from "@/components/animation/GradientBtn";
import { useAppSelector } from "@/redux/hooks";
import Link from "next/link";

export default function NavActionButton() {
  const user: Record<string, string> | null = useAppSelector((state) => state.auth.user);

  if (user?.role === "worker") {
    return <div className="flex items-center gap-x-2">
      <Link href={"/task-list"}>
        <GradientBtn text="All Task List" />
      </Link>
      <Link href={"/worker/profile"}>
        <AnimatedBgFillBtn text="Profile Account" />
      </Link>
    </div>
  }

  if (user?.role === "student") {
    return <div className="flex items-center gap-x-2">
      <Link href={"/submit-assignment"}>
        <GradientBtn text="Post An Assignment" />
      </Link>
      <Link href={"/student/profile"}>
        <AnimatedBgFillBtn text="Profile Account" />
      </Link>
    </div>
  }

  return (
    <div className="flex items-center gap-x-2">
      <Link href={"/sign-in?role=student"}>
        <GradientBtn text="Post an Assignment" />
      </Link>
      <Link href={"/sign-in?role=worker"}>
        <AnimatedBgFillBtn text="Become a Worker" />
      </Link>
    </div>
  );
}
