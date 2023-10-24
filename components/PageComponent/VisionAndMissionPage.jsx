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
    name: "Values and Ethos",
    href: "/about-us/values-and-ethos",
  },
];

function VisionAndMissionPage({ result }) {
  return (
    <div>
      <PageHero
        imageSrc={
          (result?.heroImg && urlFor(result?.heroImg).url()) ||
          "/vision-mission-hero.jpg"
        }
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

                    default:
                      return null;
                  }
                })}

                <div className="mt-12">
                  <h5 className="vision__heading">Our vision</h5>
                  {result?.components?.map((block, i) => {
                    switch (block._type) {
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
                </div>
                <div className="mt-12">
                  <h5 className="mission__heading">Our mission</h5>
                  {result?.components?.map((block, i) => {
                    switch (block._type) {
                      case "contentText":
                        return (
                          i == 2 && (
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
