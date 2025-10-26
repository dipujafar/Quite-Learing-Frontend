import { FacebookIcon2, InstagramIcon2, XIcon2 } from "@/components/icons";
import Link from "next/link";

const quickLink = [
  {
    icon: <FacebookIcon2 />,
    href: "https://facebook.com",
  },
  {
    icon: <InstagramIcon2 />,
    href: "https://instagram.com",
  },
  {
    icon: <XIcon2 />,
    href: "https://x.com",
  },
];

interface ContactInfo {
  label: string;
  value: string;
}

export function ContactInfo() {
  const contactInfo: ContactInfo[] = [
    { label: "Email", value: "support@marketile.com" },
    { label: "Phone Number", value: "+8801523649" },
    { label: "Location", value: "Dhaka" },
  ];

  return (
    <div
      style={{
        background:
          "linear-gradient(180deg, rgba(88, 76, 34, 0.00) 0%, rgba(88, 76, 34, 0.09) 135.54%)",
      }}
      className="w-full min-h-[400px]   lg:p-8 p-5  rounded-xl"
    >
      <h1 className="text-3xl font-medium text-center mb-8 text-foreground">
        Contact Info
      </h1>

      <div className="space-y-4 mb-4">
        {contactInfo.map((info) => (
          <div
            key={info.label}
            className="flex items-center justify-between px-4 py-3 bg-background rounded border border-border"
          >
            <span className="text-muted-foreground font-medium">
              {info.label}
            </span>
            <span className="text-foreground font-medium">{info.value}</span>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center gap-x-4">
        {quickLink.map((link, index) => (
          <Link key={index} href={link.href}>
            <div className="bg-primary-white/10 p-2.5 rounded-full hover:shadow-[1px_1px_100px_#584c22] shadow-sm">
              {link.icon}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
