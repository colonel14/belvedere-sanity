import PageHero from "../PageHero";
import PageLinksList from "../PageLinksList";
import { aboutUsLinks } from "@/data";
import Heading from "../Heading";
import Image from "next/image";
import KnowMore from "../KnowMore";
import React from "react";
import GridList from "../GridList";
import { PortableHeading } from "../portableHeading";
import { PortableText } from "../portabletext";

const linksList = [
  {
    name: "Primary Head’s Welcome",
    href: "/about-us/primary-head-welcome",
  },
  {
    name: "Our History",
    href: "/about-us/our-history",
  },
  {
    name: "Values and Ethos",
    href: "/about-us/values-and-ethos",
  },
];

function VisionAndMissionPage({ result }) {
  return (
    <div>
      <PageHero
        imageSrc="/vision-mission-hero.jpg"
        title={
          <>
            Vision & <br />
            Mission
          </>
        }
        color="#FB491C"
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
                        </React.Fragment>
                      );
                    case "contentText":
                      return (
                        <React.Fragment key={i}>
                          <PortableText value={block.body} />
                        </React.Fragment>
                      );
                    case "grid":
                      return (
                        <React.Fragment key={i}>
                          <div>
                            <GridList
                              columnsCount={block.columnsCount}
                              list={block.gridList || list}
                            />
                          </div>
                        </React.Fragment>
                      );
                    default:
                      return null;
                  }
                })}

                <div className="mt-12">
                  <h5 className="vision__heading">Our vision</h5>
                  <p className="page__text">
                    Our vision is to cultivate a dynamic international learning
                    environment that fosters creativity, academic excellence,
                    social-emotional learning, resilience, agility, and social
                    responsibility, empowering pupils to positively contribute
                    to their communities while anticipating future demands and
                    preserving cultural heritage
                  </p>
                </div>
                <div className="mt-12">
                  <h5 className="mission__heading">Our mission</h5>
                  <p className="page__text">
                    Our mission is to provide a transformative education that
                    empowers pupils to excel academically, thrive personally,
                    and contribute positively to society.
                  </p>
                  <p className="page__text">
                    Through a holistic approach, we foster a love for learning,
                    nurturing their intellectual curiosity and critical thinking
                    skills. We embrace and celebrate the unique talents and
                    diverse backgrounds of our pupils, fostering an inclusive
                    and respectful community. With a future-focused mindset, we
                    equip our pupils with the knowledge, skills, and
                    adaptability required for success in an ever-changing world.
                  </p>
                  <p className="page__text">
                    Guided by strong values and a commitment to character
                    development, we instill in our pupils a sense of
                    responsibility, integrity, and compassion.
                  </p>
                </div>
              </div>
              <div className="col-span-4 app__section-right">
                <PageLinksList links={aboutUsLinks} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Image
        src="/vision-mission-footer.jpg"
        width={100}
        height={100}
        className="w-full h-[245px] lg:h-[495px] object-cover grayscale"
        unoptimized
        alt="footer image"
      />
      <KnowMore linksList={linksList} />
    </div>
  );
}

export default VisionAndMissionPage;
