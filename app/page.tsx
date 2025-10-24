// import BlurText from "@/components/BlurText";

import BecomeAUser from "@/components/modules/BecomeAUser";
import HeroContainer from "@/components/modules/hero/HeroContainer";
import HowItWorksAssignmentContainer from "@/components/modules/HowItWorksAssignment/HowItWorksAssignmentContainer";
import HowItWorksEarningContainer from "@/components/modules/HowItWorksEarning/HowItWorksEarningContainer";

export default function Home() {
  return (
    <div className="xl:py-16 md:py-10 py-8 xl:space-y-16 md:space-y-10 space-y-6">
      <HeroContainer />
      <div className="xl:space-y-10 space-y-6 ">
        <HowItWorksAssignmentContainer />
        <HowItWorksEarningContainer />
      </div>
      <BecomeAUser />

      {/* <BlurText
        text="Isn't this so cool?!"
        delay={150}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="text-2xl mb-8"
      /> */}
    </div>
  );
}
