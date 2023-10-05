import PageHero from "../PageHero";
import CardsList from "../CardsList";
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
    name: "Our History",
    href: "/about-us/our-history",
  },
  {
    name: "Vision & Mission",
    href: "/about-us/vision-and-mission",
  },
  {
    name: "Values and Ethos",
    href: "/about-us/values-and-ethos",
  },
];

function PrimaryWelcomePage({ result }) {
  return (
    <div>
      <PageHero
        imageSrc="/primary-welcome-hero.jpg"
        title="Primary Head’s Welcome"
        color="#046A38"
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
              </div>
              <div className="col-span-4 app__section-right">
                <PageLinksList links={aboutUsLinks} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Image
        src="/primary-welcome-footer.jpg"
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

export default PrimaryWelcomePage;
