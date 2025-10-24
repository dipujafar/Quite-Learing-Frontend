import Image from "next/image";
import assignmentImage from "@/assets/images/HowItWork/howITworkAssignmentWork.png";
import DetailsPart from "./DetailsPart";

export default function HowItWorksAssignmentContainer() {
  return (
    <div className="flex flex-col lg:flex-row   xl:gap-7 md:gap-4 gap-2">
      {/* image part */}
      <div className="relative h-fit flex-1  w-full">
        <Image
          src={assignmentImage}
          alt="assignment_work_image"
          className="rounded-3xl w-full "
        />
        <div className="absolute bottom-0 bg-white pt-3 pr-3 rounded-tr-xl">
          <div className="bg-primary-color py-3 px-3 rounded-xl text-center md:min-w-[200px]">
            <h4 className="text-xl font-semibold text-white">
              For <br /> Submitter
            </h4>
          </div>
        </div>
      </div>
      {/* all details part */}
      <div className="flex-1">
        <DetailsPart />
      </div>
    </div>
  );
}
