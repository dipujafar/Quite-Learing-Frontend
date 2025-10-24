import HeroImage from "./HeroImage";
import HeroSectionHeaderText from "./HeroSectionHeaderText";
import HeroSectionStatistic from "./HeroSectionStatistic";

export default function HeroContainer() {
  return (
    <div className="xl:space-y-10 md:space-y-6 space-y-4">
      <HeroSectionHeaderText />
      {/* hero image */}
      <HeroImage />
      {/* hero statistic */}
      <HeroSectionStatistic />
    </div>
  );
}
