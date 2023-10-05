import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function HomeHistory() {
  return (
    <section className="home__history">
      <div className="container">
        <div className="home__history-inner">
          <div className="home__history-info">
            <div className="home__history-heading">
              <span>Our History</span>
              <h3>
                143 Years of Premium <br /> British Education.
              </h3>
            </div>
            <p className="main__text">
              Belvedere School, Cairo is part of the leading UK-based Belvedere
              School. Established in 1880, the Belvedere School is an
              independent co-educational school that has been part of
              Liverpool’s educational landscape for more than 140 years.
            </p>
            <p className="main__text">
              We share their legacy of quality and core beliefs, and we are
              proud of our close ties to Belvedere. We look forward to using
              their pedagogical know- how and incorporating the best of
              independent premium British education into our school.
            </p>
            <p className="main__text">
              Belvedere School, Cairo is directly overseen by Belvedere School
              in the UK to ensure the school reflects the policies, academic
              excellence, and teaching quality that represent Belvedere UK.
              Teacher training will be conducted under the guidance of Belvedere
              School UK to maintain the same level of teaching and learning.
            </p>
            <Link href="/about-us/our-history" className="section__button">
              Learn More
              <span className={`w-11 h-11 rounded border section__button-icon`}>
                <ChevronRight />
              </span>
            </Link>
          </div>
          <div className="home__history-image">
            <Image
              src="/history-placeholder.jpg"
              className="object-cover"
              fill
              alt="history placeholder"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeHistory;
