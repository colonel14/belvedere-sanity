import "@/styles/home.css";
import HomeHero from "@/components/HomeComponents/Hero";
import Navbar from "@/components/Navbar";
import HomeHistory from "@/components/HomeComponents/HomeHistory";
import HomeLifeAndLearning from "@/components/HomeComponents/HomeLifeAndLearning";
import School from "@/components/HomeComponents/School";
import Footer from "@/components/Footer";
import HomeAdmissions from "@/components/HomeComponents/HomeAdmissions";

async function Home() {
  return (
    <div id="homepage">
      <Navbar />
      <HomeHero />
      <HomeHistory />
      <HomeLifeAndLearning />
      <School />
      <HomeAdmissions />
      <Footer />
    </div>
  );
}

export default Home;
