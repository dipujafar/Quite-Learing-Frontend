import { cn } from "@/lib/utils";


export default function AnimatedBgFillBtn({
  text,
  isSvg = true,
  className
}: {
  text: string;
  isSvg?: boolean;
  className?: string;
}) {
  return (
    <button className={cn("flex justify-center gap-2 items-center border-primary-color  relative px-4 py-2 cursor-pointer overflow-hidden rounded-[30px] border-2 bg-transparent text-primary-color font-bold  transition-all duration-1000 ease-in-out hover:shadow-[1px_1px_200px_#584c22] hover:text-white hover:border-none after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[10px] after:w-[10px] after:rounded-[30px] after:bg-primary-color after:invisible after:transition-all after:duration-1000 after:ease-in-out hover:after:visible hover:after:scale-[100] hover:after:translate-x-[2px] after:-z-10 z-10 group", className)}>
      <span>{text}</span>
      {isSvg && (
        <svg
          className="w-8 h-8 justify-end bg-primary-color group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-500 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
          viewBox="0 0 16 19"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
            className="fill-primary-white group-hover:fill-gray-800"
          />
        </svg>
      )}
    </button>
  );
}
