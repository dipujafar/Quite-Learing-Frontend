"use client"
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", link: "/" },
  { label: "Message", link: "/message" },
  { label: "Contact Us", link: "/contact-us" },
];

export default function NavLinks() {
    const pathName = usePathname();

  return (
    <div className="flex gap-x-2">
      {navLinks.map((link) => (
        <Link href={link?.link} key={link.link} className={cn("text-primary-color", pathName === link.link && "font-bold border-b w-[70px] flex-center" )}>
          {link?.label}
        </Link>
      ))}
    </div>
  );
}
