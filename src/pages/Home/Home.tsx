import FeaturedProducts from "@/components/FeaturedProducts/FeaturedProducts";
import { HeroSection } from "@/components/HeroSection/HeroSection";
export default function Home() {
  return (
    <div className="mx-auto container">
      <HeroSection />
      <FeaturedProducts/>
    </div>
  );
}
