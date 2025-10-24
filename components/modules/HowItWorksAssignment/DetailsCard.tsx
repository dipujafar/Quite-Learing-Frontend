import { cn } from "@/lib/utils";

export default function DetailsCard({
  title,
  description,
  className,
}: {
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <div className={cn(" 2xl:p-6 xl:p-4 lg:p-2 md:p-4 p-3 rounded-3xl border xl:space-y-2.5 space-y-1", className)}>
      <h5 className="font-bold">{title}</h5>
      <p className="font-light">{description}</p>
    </div>
  );
}
