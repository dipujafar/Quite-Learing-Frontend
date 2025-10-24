import AnimatedBgFillBtn from "@/components/animation/AnimatedBgFillBtn";
import DetailsCard from "../HowItWorksAssignment/DetailsCard";


export default function DetailsPart() {
  return (
    <div className="2xl:space-y-10 xl:space-y-5 lg:space-y-4 md:space-y-7 space-y-4">
      <AnimatedBgFillBtn
        isSvg={false}
        text="How it works"
        className="cursor-default "
      />
      <h4 className="xl:text-3xl text-xl font-semibold text-[#060517]">
        FStart Earning with Quiet Lesson: A Worker’s Guide
      </h4>
      <div className="xl:space-y-5 space-y-2.5">
        <div className="flex xl:gap-5 gap-2.5">
          <DetailsCard
            title="Sign Up and Browse Jobs"
            description="Create an account and browse a variety of tasks waiting for your skills. You can find jobs in subjects you're good at."
            className="text-[#8C4500] border-[#8C4500] bg-[#FCF8F4] text-center"
          />
          <DetailsCard
            title="Negotiate and Agree"
            description="Once you find a job, reach out to the submitter through our secure chat. Agree on a fair price and start working."
            className="text-[#B38304] border-[#B38304] bg-[#b3830408] text-center"
          />
        </div>
        <DetailsCard
          title="Get Paid Securely"
          description="Once the submitter approves, your payment is released from escrow, minus the 7% commission and the $20 monthly fee (if applicable). You’ll receive your payout via PayPal, ensuring a secure and hassle-free transaction."
          className="text-[#25966D] border-[#25966D] bg-[#25966d08] text-center"
        />
      </div>
    </div>
  );
}
