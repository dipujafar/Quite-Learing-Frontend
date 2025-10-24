import Image from "next/image";
import earningImage from "@/assets/images/HowItWork/howITworkEarningWork.png";
import DetailsPart from "./DetailsPart";

export default function HowItWorksEarningContainer() {
  return (
    <div className="flex flex-col-reverse lg:flex-row   xl:gap-7 md:gap-4 gap-2">
      {/* all details part */}
      <div className="flex-1">
        <DetailsPart />
      </div>
      {/* image part */}
      <div className="relative h-fit flex-1  w-full">
        <Image
          src={earningImage}
          alt="assignment_work_image"
          className="rounded-3xl w-full "
        />
        <div className="absolute right-0 bottom-0 bg-white pt-3 pl-3 rounded-tl-xl">
          <div className="bg-primary-color py-3 px-3 rounded-xl text-center md:min-w-[200px]">
            <h4 className="text-xl font-semibold text-white">
              For <br /> Workers
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
