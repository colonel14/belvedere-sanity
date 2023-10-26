import PageHero from "../PageHero";
import PageLinksList from "../PageLinksList";
import { aboutUsLinks } from "@/data";
import Heading from "../Heading";
import Image from "next/image";
import KnowMore from "../KnowMore";
import GridList from "../GridList";
import React from "react";
import { PortableText } from "../portabletext";
import { PortableHeading } from "../portableHeading";
import urlFor from "@/lib/urlFor";

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
    name: "Vision & Mission",
    href: "/about-us/vision-and-mission",
  },
];

function ValuesAndEthosPage({ result }) {
  const list = [
    {
      name: "Synergy.",
      bgColor: "#FFCB47",
    },
    {
      name: "Integrity.",
      bgColor: "#FF9BC2",
    },
    {
      name: "Respect.",
      bgColor: "#8BCCCF",
    },
    {
      name: "Growth.",
      bgColor: "#041E42",
    },
  ];

  return (
    <div>
      <PageHero
        imageSrc={
          (result?.heroImg && urlFor(result?.heroImg).url()) ||
          "/values-and-ethos-hero.jpg"
        }
        title={
          <>
            Values <br /> and Ethos
          </>
        }
        color="#65D2DE"
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
                        <div className="values__ethos-heading" key={i}>
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
                      );
                    case "contentText":
                      return (
                        i == 1 && (
                          <React.Fragment key={i}>
                            <PortableText value={block.body} />
                          </React.Fragment>
                        )
                      );

                    default:
                      return null;
                  }
                })}

                <div className="keywords">
                  <span>Resilliance.</span>
                  <span>Balance.</span>
                  <span>Innovation.</span>
                </div>
                {result?.components?.map((block, i) => {
                  switch (block._type) {
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
                {result?.components?.map((block, i) => {
                  switch (block._type) {
                    case "contentText":
                      return (
                        i > 1 && (
                          <React.Fragment key={i}>
                            <PortableText value={block.body} />
                          </React.Fragment>
                        )
                      );
                    default:
                      return null;
                  }
                })}
              </div>
              <div className="col-span-4 app__section-right">
                <PageLinksList links={aboutUsLinks} />
                <div className="words__square">
                  <h4 className="words__square-title">
                    Be Bold. Be Brave. Be...
                  </h4>
                  <div className="words__square-list">
                    <p className="">Benevolent</p>
                    <p className="">Exceptional</p>
                    <p className="">Loyal</p>
                    <p className="">Visionary</p>
                    <p className="">Exemplary</p>
                    <p className="">Disciplined</p>
                    <p className="">Empowering</p>
                    <p className="">Reflective</p>
                    <p className="">Ethical</p>
                    <p className="">Learners’ Attributes</p>
                  </div>
                </div>
                <div className="sidebar__text">
                  We encourage our pupils to be the best versions of themselves,
                  not second-rate versions of others.
                </div>
                <div className="sidebar__text">
                  By giving them high quality education, they can become whoever
                  they aspire to be.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Image
        src="/values-and-ethos-footer.jpg"
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

export default ValuesAndEthosPage;
