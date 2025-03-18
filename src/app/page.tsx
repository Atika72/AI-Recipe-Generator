import AppLayout from "@component/component/AppLayout";
import HeroSection from "../component/heroSection";
import ExploreRecipe from "@component/component/ExploreRecipe";
import PricingSection from "@component/component/PricingSection";

export default function Home() {
  return (
    <>
      <AppLayout>
        <HeroSection />
        <ExploreRecipe />
        <PricingSection />
      </AppLayout>
    </>
  );
}
