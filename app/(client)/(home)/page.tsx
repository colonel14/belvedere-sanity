import "@/styles/home.css";
import HomeHero from "@/components/HomeComponents/Hero";
import Navbar from "@/components/Navbar";
import HomeHistory from "@/components/HomeComponents/HomeHistory";
import HomeLifeAndLearning from "@/components/HomeComponents/HomeLifeAndLearning";
import Footer from "@/components/Footer";
import HomeAdmissions from "@/components/HomeComponents/HomeAdmissions";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

async function Home() {
  return (
    <div id="homepage">
      <Navbar />
      <HomeHero />
      <HomeHistory />
      <HomeLifeAndLearning />
      <div className="home__apply">
        <div className="container">
          <div className="home__apply-in w-full">
            <Image
              fill
              src="/pattern.svg"
              className="object-cover object-top home__apply-pattern"
              alt="pattern"
            />

            <div className="home__apply-info">
              <div className="home__apply-heading">
                <h3 className="text-white">
                  <span>Admissions</span> <br />
                  <span>Now open</span>
                </h3>
                <span>
                  Academic year <br /> 2024/2025
                </span>
              </div>
              <Link href="https://lms.belvedereschoolcairo.com/en/applicantregister/register" className="app__button">
                Apply Now
              </Link>
            </div>

            <div className="home__apply-pattern"></div>
          </div>
        </div>
      </div>
      <HomeAdmissions />
      <Footer />
    </div>
  );
}

export default Home;
