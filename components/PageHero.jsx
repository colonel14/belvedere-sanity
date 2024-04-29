import Image from "next/image";

function PageHero({ imageSrc, color, title, data, query }) {
  return (
    <div className="app__hero">
      <div className="container">
        <div className="app__hero-wrapper">
          <div className="app__hero-image">
            <Image
              src={imageSrc || "/hero-1.jpg"}
              fill
              alt="hero image"
              sizes="100vw"
              className="object-cover"
              loading="eager"
              priority
            />
          </div>
          <h2
            className={`app__hero-title !bg-[${color}]`}
            style={{ backgroundColor: color }}
          >
            {title}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default PageHero;
