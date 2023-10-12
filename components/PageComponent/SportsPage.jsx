import Image from "next/image";
import PageHero from "../PageHero";
import KnowMore from "../KnowMore";
import PageLinksList from "../PageLinksList";
import { lifeLearningLinks } from "@/data";
import React from "react";
import GridList from "../GridList";
import Heading from "../Heading";
import { PortableHeading } from "../portableHeading";
import { PortableText } from "../portabletext";
import urlFor from "@/lib/urlFor";

const linksList = [
  {
    name: "Music",
    href: "/life-and-learning/extra-curricular-activities/music",
  },
  {
    name: "Drama",
    href: "/life-and-learning/extra-curricular-activities/drama",
  },
  {
    name: "Art & Design",
    href: "/life-and-learning/extra-curricular-activities/art-and-design",
  },
  {
    name: "Trips",
    href: "/life-and-learning/extra-curricular-activities/trips",
  },
];

function SportsPage({ result }) {
  return (
    <div>
      <PageHero
        imageSrc={
          (result?.heroImg && urlFor(result?.heroImg).url()) ||
          "/sports-hero.jpg"
        }
        title="Sports"
        color="#6AC45B"
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
              </div>
            </div>
          </div>
        </div>
      </section>
      <Image
        src="/sports-footer.jpg"
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

export default SportsPage;
