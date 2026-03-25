import HeroSection from "@/components/landingpage/HeroSection";
import Navbar from "@/components/common/Navbar";
import Category from "@/components/landingpage/Category";
import Mission from "@/components/landingpage/Mission";
import Favourites from "@/components/landingpage/Favourites";

import Testimonals from "@/components/landingpage/Testimonals";
import Footer from "@/components/common/Footer";
import DiscoverAranyaGreens from "@/components/landingpage/DiscoverAranyaGreens";
import PlantOfTheWeek from "@/components/landingpage/PlantOfTheWeek";
import GodavariSplsSection from "@/components/landingpage/GodavariFlavors";
import BlogsSection from "@/components/landingpage/BlogsSection";
import About from "@/components/landingpage/About";

export default function Home() {
  return (
    <div className="pageContainer">
      <Navbar />
      <HeroSection />
      <Category />
      <Mission />
      <Favourites />
      <PlantOfTheWeek />
      <DiscoverAranyaGreens />
      <GodavariSplsSection />
      <BlogsSection />
      <About />
      <Testimonals />
      <Footer />
    </div>
  );
}
