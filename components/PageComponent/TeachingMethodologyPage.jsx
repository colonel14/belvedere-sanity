import PageHero from "../PageHero";
import PageLinksList from "../PageLinksList";
import Heading from "../Heading";
import GridList from "../GridList";
import Image from "next/image";
import KnowMore from "../KnowMore";
import { lifeLearningLinks } from "@/data";
import React from "react";
import { PortableText } from "../portabletext";
import { PortableHeading } from "../portableHeading";
import urlFor from "@/lib/urlFor";

const linksList = [
  {
    name: "A Broad Curriculum",
    href: "/life-and-learning/broad-curriculum",
  },
  {
    name: "Academic",
    href: "/life-and-learning/academic",
  },
  {
    name: "Extra-curricular Activities",
    href: "/life-and-learning/extra-curricular-activities",
  },
];

function TeachingMethodologyPage({ result }) {
  const list = [
    {
      name: "Interdisciplinary Learning",
      bgColor: "#046A38",
    },
    {
      name: "Hands -on Experiences",
      bgColor: "#0F213F",
    },
    {
      name: "Integration of Arts",
      bgColor: "#FB491C",
    },
    {
      name: "Inquiry- Based Learning",
      bgColor: "#65D2DE",
    },
    {
      name: "Technology Integration",
      bgColor: "#44508D",
    },
    {
      name: "Collaboration & Communication",
      bgColor: "#FF9BC2",
    },
    {
      name: "Problem Solving & Critical Thinking",
      bgColor: "#C33734",
    },
    {
      name: "Adaptability & Resilience",
      bgColor: "#FFB842",
    },
  ];

  return (
    <div>
      <PageHero
        imageSrc={
          (result?.heroImg && urlFor(result?.heroImg).url()) ||
          "/teaching-methodology-hero.jpg"
        }
        title="Teaching Methodology"
        color="#046A38"
      />

      <section className="app__section">
        <div className="container">
          <div className="app__section-inner">
            <div className="flex flex-col-reverse lg:grid lg:grid-cols-12">
              <div className="col-span-9 app__section-left">
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
              </div>
              <div className="col-span-3 app__section-right">
                <PageLinksList links={lifeLearningLinks} />
                <div className="page__image-placeholder">
                  <Image
                    fill
                    src="/explore-placeholder.jpg"
                    alt="explore child potential"
                  />
                </div>
                <div className="page__info-foursquare_sec">
                  <div
                    className="page__info-foursquare_poppins"
                    style={{ color: "#65D2DE" }}
                  >
                    DIFFERENTIATION.
                  </div>
                  <div
                    className="page__info-foursquare_poppins"
                    style={{ color: "#FF9BC2" }}
                  >
                    RELEVANCE
                  </div>
                  <div
                    className="page__info-foursquare_poppins"
                    style={{ color: "#FFB842" }}
                  >
                    COHERENCE.
                  </div>
                  <div
                    className="page__info-foursquare_poppins"
                    style={{ color: "#6AC45B" }}
                  >
                    BREADTH.
                  </div>
                  <div
                    className="page__info-foursquare_poppins"
                    style={{ color: "#2B52AA" }}
                  >
                    BALANCE.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Image
        src="/teaching-methodology-footer.jpg"
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

export default TeachingMethodologyPage;
