"use client";
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
        <div key={link.link} className="flex-center flex-col  w-[104px] group">
          <Link
            href={link?.link}
            className={cn(
              "text-primary-color p-2 flex-center ",
              pathName === link.link && "font-bold "
            )}
          >
            {link?.label}
          </Link>

          <span className={cn(" border border-primary-color w-full scale-x-0 group-hover:scale-x-100 origin-center duration-500", pathName === link.link && "scale-x-100")}></span>
        </div>
      ))}
    </div>
  );
}
