import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const Container = ({
  children,
  className,
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: Record<string, string>;
}) => {
  return (
    <div
      style={style}
      className={cn(
        "mx-auto max-w-[1640px] px-2 md:px-6 lg:px-8   xl:px-16",
        className
      )}
    >
      {children}
    </div>
  );
};
export default Container;
