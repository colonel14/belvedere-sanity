import PageHero from "../PageHero";
import CardsList from "../CardsList";
import PageLinksList from "../PageLinksList";
import { aboutUsLinks } from "@/data";
import Heading from "../Heading";
import React from "react";
import { PortableText } from "../portabletext";
import { PortableHeading } from "../portableHeading";

function AboutUsPage({ result }) {
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
                {result?.components?.map((block, i) => {
                  switch (block._type) {
                    case "heading":
                      return i > 0 ? (
                        <div className="secondary__heading" key={i}>
                          <div className="section__heading">
                            <Heading
                              title={
                                <PortableHeading value={block.headingTitle} />
                              }
                              titleColor={block.headingTitleColor.hex}
                              subtitle={block.headingSubtitle}
                              subtitleColor={block?.headingSubtitleColor?.hex}
                            />
                          </div>
                        </div>
                      ) : (
                        <React.Fragment key={i}>
                          <div className="heading__bloquote">
                            <Heading
                              title={
                                <PortableHeading value={block.headingTitle} />
                              }
                              titleColor={block.headingTitleColor.hex}
                              subtitle={block.headingSubtitle}
                              subtitleColor={block?.headingSubtitleColor?.hex}
                            />
                            <span>- John Dewey</span>
                          </div>
                        </React.Fragment>
                      );
                    case "contentText":
                      return (
                        <React.Fragment key={i}>
                          <PortableText value={block.body} />
                        </React.Fragment>
                      );

                    default:
                      return null;
                  }
                })}

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
