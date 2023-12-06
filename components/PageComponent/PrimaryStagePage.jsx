import PageHero from "../PageHero";
import PageLinksList from "../PageLinksList";
import Heading from "../Heading";
import GridList from "../GridList";
import { lifeLearningLinks } from "@/data";
import React from "react";
import { PortableHeading } from "../portableHeading";
import { PortableText } from "../portabletext";
import urlFor from "@/lib/urlFor";

function PrimaryStagePage({ result }) {
  const list = [
    {
      name: "English",
      bgColor: "#65D2DE",
    },
    {
      name: "Math",
      bgColor: "#FFB842",
    },
    {
      name: "Science",
      bgColor: "#6AC45B",
    },
    {
      name: "Music",
      bgColor: "#FF9BC2",
    },
    {
      name: "History",
      bgColor: "#FB491C",
    },
    {
      name: "Computing",
      bgColor: "#FB491C",
    },
    {
      name: "Geography",
      bgColor: "#FF9BC2",
    },
    {
      name: "Foreign Language",
      bgColor: "#44508D",
    },
    {
      name: "Art & Design",
      bgColor: "#FFB842",
    },
    {
      name: "Physical Education",
      bgColor: "#65D2DE",
    },
  ];

  return (
    <div>
      <PageHero
        imageSrc={
          (result?.heroImg && urlFor(result?.heroImg).url()) ||
          "/primary-stage-hero.jpg"
        }
        title={
          <>
            Primary <br /> School
          </>
        }
        color="#65D2DE"
      />

      <section className="app__section">
        <div className="container">
          <div className="app__section-inner">
            <div className="flex flex-col-reverse lg:grid lg:grid-cols-12">
              <div className="col-span-9 app__section-left">
                {result?.components?.map((block, i) => {
                  switch (block._type) {
                    case "heading":
                      return (
                        <React.Fragment key={i}>
                          <div className="section__heading">
                            <Heading
                              title={
                                <PortableHeading value={block.headingTitle} />
                              }
                              titleColor={block.headingTitleColor.hex}
                              subtitle={block.headingSubtitle}
                              subtitleColor={block.headingSubtitleColor.hex}
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PrimaryStagePage;
