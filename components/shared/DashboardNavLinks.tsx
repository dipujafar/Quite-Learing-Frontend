"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    label: "Profile",
    link: "/student/profile",
  },
  {
    label: "Task Management ",
    link: "/student/task-management",
  },
  {
    label: "Settings",
    link: "/student/settings",
  },
];

export default function DashboardNavLinks() {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <div className="border-r-2 border-black/20 w-full pr-6 h-full">
      <div>
        {navLinks.map((link) => (
          <div key={link.link}>
            <div
              className={cn(
                "text-primary-color px-2 ",
                pathName === link.link && "bg-primary-color text-white py-2 rounded-md"
              )}
            >
              <p>
                <Link href={link.link}>{link.label}</Link>
              </p>
            </div>
            <hr className="border-primary-color my-3" />
          </div>
        ))}
      </div>
    </div>
  );
}
