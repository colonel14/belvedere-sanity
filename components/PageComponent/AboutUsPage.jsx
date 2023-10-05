"use client";

import PageHero from "../PageHero";
import CardsList from "../CardsList";
import PageLinksList from "../PageLinksList";
import { aboutUsLinks } from "@/data";
import Heading from "../Heading";

function AboutUsPage() {
  const list = [
    {
      image: "/welcome-img.jpg",
      title: "A Broad Curriculum",
      description:
        "At Belvedere School, Cairo, we are eager to create an environment that produces well-rounded learners prepared for the challenges of today’s fast-paced world. Our school community is made up of and belongs to our pupils and...",
      href: "/about-us/academic",
      color: "#046A38",
    },
    {
      image: "/our-history-img.jpg",
      title: "Our History",
      description:
        "Belvedere School, Cairo is part of the leading UK-based Belvedere School. Established in 1880, the Belvedere School is an independent co-educational school that has been part of Liverpool’s educational landscape for more...",
      href: "/about-us/our-history",
      color: "#FFB842",
    },
    {
      image: "/vision-mission-img.jpg",
      title: (
        <>
          Vision & <br /> Mission
        </>
      ),
      description:
        "Our vision is to cultivate a dynamic international learning environment that fosters creativity, academic excellence, social-emotional learning, resilience, agility, and social responsibility, empowering pupils to positively contribute...",
      href: "/about-us/vision-and-mission",
      color: "#FB491C",
    },
  ];
  return (
    <div>
      <PageHero
        imageSrc="/about-us-hero.jpg"
        title="About Us"
        color="#0F213F"
      />
      <section className="app__section">
        <div className="container">
          <div className="app__section-inner">
            <div className="flex flex-col-reverse lg:grid lg:grid-cols-12">
              <div className="col-span-8 app__section-left">
                <div className="heading__bloquote">
                  <Heading
                    title="education is life itself."
                    subtitle="Education is not preparation for life;"
                    titleColor="#65D2DE"
                    subtitleColor="#65D2DE"
                  />
                  <span>- John Dewey</span>
                </div>
                <p className="page__text">
                  The Belvedere Preparatory School was originally founded in
                  1880 as the Junior Department of The Belvedere School,
                  Liverpool. Originally housed at 17 Belvidere Road, we moved to
                  our current premises at 23 Belvidere Road in 1939. It is
                  widely recognised as one of the best Independent Schools in
                  Liverpool. The Belvedere Preparatory School is an Independent
                  Co-Educational School, for pupils aged 3-11 years. Our School
                  is housed in a beautiful Victorian mansion which is located in
                  a historically rich area of Liverpool.{" "}
                </p>
                <div className="mt-20">
                  <CardsList list={list} />
                </div>
              </div>
              <div className="col-span-4 app__section-right">
                <PageLinksList links={aboutUsLinks} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUsPage;
