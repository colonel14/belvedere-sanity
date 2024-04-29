import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function HomeHero() {
  return (
    <div className="home__hero ">
      <Image
        src="/home-hero.jpg"
        fill
        sizes="100vw"
        className="home__hero-img object-cover"
        alt="hero image"
        loading="eager"
        priority={true}
      />
      <div className="container">
        <div className="home__hero-inner">
          <div className="home__hero-content">
            <h1 className="hero__title">
              We <span className="text__underline">Prepare</span> For Life.
            </h1>
            <p className="hero__text">
              We aspire to develop a harmonious balance of the moral,
              intellectual, and extracurricular aspects of school life, through
              an affordable, premium educational system that nurtures and
              celebrates the authentic identities and diverse cultural heritages
              of all learners.
            </p>
            <div className="mt-[30px] flex flex-col md:flex-row items-center justify-center gap-5 gap-y-5">
              <Link
                href="https://lms.belvedereschoolcairo.com/en/applicantregister/register"
                className="app__button !m-0"
                aria-label="Apply Now"
              >
                Apply Now <ChevronRight />
              </Link>
              <Link
                href="/Prospectus.pdf"
                className="app__button !m-0"
                target="blank"
                aria-label="Our prospectus"
              >
                our prospectus <ChevronRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeHero;
