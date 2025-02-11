import FeaturedCourses from "@/components/featuredcources";
import HeroSection from "@/components/heroSection";
import { MovingCards } from "@/components/movingCards";
import StickyScrollRevealDemo from "@/components/stickyScroll";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection/>
      <FeaturedCourses/>
      <StickyScrollRevealDemo/>
      <MovingCards/>
    </main>
  );
}
