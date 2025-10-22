"use client";
import BlurText from "@/components/BlurText";

export default function Home() {
  return (
    <div>
      <BlurText
        text="Isn't this so cool?!"
        delay={150}
        animateBy="words"
        direction="top"
        // onAnimationComplete={handleAnimationComplete}
        className="text-2xl mb-8"
      />
    </div>
  );
}
