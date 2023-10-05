"use client";

import PageHero from "../PageHero";
import CardsList from "../CardsList";
import PageLinksList from "../PageLinksList";
import { lifeLearningLinks } from "@/data";

function LifeAndLearningPage() {
  const list = [
    {
      image: "/card-img-1.jpg",
      title: "Academic",
      description:
        "At Belvedere School, Cairo pupils take ownership of what they learn by focusing on how the new knowledge solves a problem or adds value, instead of simply being given information and waiting for the correct answer. This preps... ",
      href: "/life-and-learning/academic",
      color: "#C33734",
    },
    {
      image: "/card-img-2.jpg",
      title: "A Broad Curriculum",
      description:
        "The British education system is founded on critical thinking, creativity, and flexibility. At Belvedere School Cairo we offer a genuinely broad curriculum following the British National Curricullum, with generous time allocated to music, sport,...",
      href: "/life-and-learning/broad-curriculum",
      color: "#44508D",
    },
    {
      image: "/card-img-3.jpg",
      title: "Teaching Methodology",
      description:
        "The Belvedere School placesemphasis on the notion thatteaching and learning areas significant as curriculumcontent in determining pupilprogress and achievement.To this end, we seek todevelop shared...",
      href: "/life-and-learning/teaching-methodology",
      color: "#046A38",
    },
    {
      image: "/card-img-4.jpg",
      title: "Extra-curricular Activities",
      description:
        "Along with enriching educational visits and events tailored to complement classroom-based learning, Belvedere School will offer extracurricular and after-school activities as far as expertise and numbers allow. It is anticipated that pupils...",
      href: "/life-and-learning/extra-curricular-activities",
      color: "#FF9BC2",
    },
  ];
  return (
    <div>
      <PageHero
        imageSrc="/life-learning-hero.jpg"
        title={
          <>
            Life &
            <br />
            Learning
          </>
        }
        color="#0F213F"
      />
      <section className="app__section">
        <div className="container">
          <div className="app__section-inner">
            <div className="flex flex-col-reverse lg:grid lg:grid-cols-12">
              <div className="col-span-9 app__section-left">
                <CardsList list={list} />
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

export default LifeAndLearningPage;
