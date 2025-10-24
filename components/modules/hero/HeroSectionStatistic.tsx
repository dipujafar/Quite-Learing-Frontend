import statisticBgImage1 from "@/assets/images/heroSectionImage/statisticBgImage1.png";
import statisticBgImage2 from "@/assets/images/heroSectionImage/statisticBgImage2.png";
import statisticBgImage3 from "@/assets/images/heroSectionImage/statisticBgImage3.png";
import statisticBgImage4 from "@/assets/images/heroSectionImage/statisticBgImage4.png";
import BlurText from "@/components/ui/BlurText";
const heroSectionStatisticData = [
  {
    label: "100K+ Assignments Completed",
    bgImage: statisticBgImage1,
  },
  {
    label: "200K+ Workers Trusted",
    bgImage: statisticBgImage2,
  },
  {
    label: "100% Secure Payments",
    bgImage: statisticBgImage3,
  },
  {
    label: "24/7 Anytime You Need Help",
    bgImage: statisticBgImage4,
  },
];

export default function HeroSectionStatistic() {
  return (
    <div className="grid lg:grid-cols-4 grid-cols-2 gap-4">
      {heroSectionStatisticData.map((item, index) => (
        <div
          key={index}
          style={{
            backgroundImage: `url(${item.bgImage.src})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
          className="flex  justify-center items-center  lg:py-16 md:py-10 py-8 md:px-6 rounded-3xl"
        >
          <BlurText
            text={item.label}
            delay={150}
            animateBy="words"
            direction="top"
            className="lg:text-2xl text-xl font-bold  text-white text-center justify-center"
          />
        </div>
      ))}
    </div>
  );
}
