import AppLayout from "@component/component/AppLayout";
import HeroSection from "../component/heroSection";
import ExploreRecipe from "@component/component/ExploreRecipe";
import PricingSection from "@component/component/PricingSection";
import FeaturesSection from "@component/component/FeaturesSection";

export default function Home() {
  return (
    <>
      <AppLayout>
        <HeroSection />
        <ExploreRecipe />
        <FeaturesSection />
        <PricingSection />
      </AppLayout>
    </>
  );
}
