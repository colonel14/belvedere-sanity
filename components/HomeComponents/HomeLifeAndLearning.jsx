import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function HomeLifeAndLearning() {
  return (
    <section className="home__life">
      <div className="container">
        <div className="home__life-inner">
          <div className="home__life-info">
            <div className="home__life-heading">
              <span>Life & learning</span>
              <h3>
                Academic and <br /> Extra Curriculum
              </h3>
            </div>
            <p className="main__text">
              At Belvedere School, Cairo pupils take ownership of what they
              learn by focusing on how the new knowledge solves a problem or
              adds value, instead of simply being given information and waiting
              for the correct answer. This preps them for their ever-changing
              future. Many of the jobs which our young people will be applying
              for in years to come have not even been invented yet. We believe
              the ability to develop critical thinking skills and thinking
              flexibility, is vital.
            </p>

            <Link href="/life-and-learning" className="section__button">
              Learn More
              <span className={`w-11 h-11 rounded border section__button-icon`}>
                <ChevronRight />
              </span>
            </Link>
          </div>
          <div className="home__life-image">
            <Image
              src="/life-placeholder.jpg"
              className="object-cover"
              fill
              alt="life placeholder"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeLifeAndLearning;
