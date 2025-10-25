import { cn } from "@/lib/utils";
import Image from "next/image";

const UserCard = ({ user, active }: { user: any; active: boolean }) => {
  const { img, name, latestMsg } = user;
  return (
    <div
      className={`flex gap-x-4 bg-[#F8F9FA] cursor-pointer p-2 ${
        active ? "border bg-primary-color text-white   rounded-md" : ""
      }`}
    >
      <div className="w-[14%]">
        <Image src={img} alt={name} className="w-full rounded-full" />
      </div>

      <div className="flex-grow space-y-1">
        <div
          className={cn(
            "flex items-center justify-between text-black",
            active && "text-white"
          )}
        >
          <h4 className={cn("text-xl font-medium ")}>{name}</h4>
          <p className="font-semibold text-secondary-2 ">12m</p>
        </div>
        <p className="text-ellipsis">{latestMsg}</p>
      </div>
    </div>
  );
};

export default UserCard;
