import AnimatedBgFillBtn from "@/components/animation/AnimatedBgFillBtn";
import DetailsCard from "./DetailsCard";

export default function DetailsPart() {
  return (
    <div className="2xl:space-y-10 xl:space-y-5 lg:space-y-4 md:space-y-7 space-y-4">
      <AnimatedBgFillBtn
        isSvg={false}
        text="How it works"
        className="cursor-default "
      />
      <h4 className="xl:text-3xl text-xl font-semibold text-[#060517]">
        From Assignment to Completion: How Quiet Lesson Helps You
      </h4>
      <div className="xl:space-y-5 space-y-2.5">
        <div className="flex xl:gap-5 gap-2.5">
          <DetailsCard
            title="Submit Your Assignment"
            description="No account needed! Simply fill out a form with the asking price, due date, subject, and optional description. Your assignment is posted anonymously."
            className="text-[#8C4500] border-[#8C4500] bg-[#FCF8F4] text-center"
          />
          <DetailsCard
            title="Pay and Get Started"
            description="Pay the assignment fee, including a 7% commission, upfront. Your payment is held securely in escrow until the job is complete."
            className="text-[#B38304] border-[#B38304] bg-[#b3830408] text-center"
          />
        </div>
        <DetailsCard
          title="Receive Completed Work"
          description="Once the job is finished, review the work and confirm completion. Funds are released to the worker, and you’re all set!"
          className="text-[#25966D] border-[#25966D] bg-[#25966d08] text-center"
        />
      </div>
    </div>
  );
}
