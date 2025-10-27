"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";


type TNavLinks = {
  label: string;
  link: string;
}


export default function DashboardNavLinks({ data }: { data: TNavLinks[] }) {
  const pathName = usePathname();

  return (
    <div className="border-r-2 border-black/20 w-full pr-6 h-full">
      <div>
        {data.map((link) => (
          <div key={link.link}>
            <div
              className={cn(
                "text-primary-color px-2 ",
                pathName.includes(link?.link) && "bg-primary-color text-white py-2 rounded-md"
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
