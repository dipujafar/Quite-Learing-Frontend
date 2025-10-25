import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    <div className="w-full  p-8 bg-muted rounded-lg">
      <h1 className="text-3xl font-medium text-center mb-8 text-foreground">
        Contact Info
      </h1>

      <div className="space-y-4 mb-8">
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
    </div>
  );
}
