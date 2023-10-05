"use client";

function Heading({ title, subtitle, titleColor, subtitleColor }) {
  return (
    <div className="section__heading">
      <h5 className="heading__subtitle" style={{ color: subtitleColor }}>
        {subtitle}
      </h5>
      <h3 className="heading__title" style={{ color: titleColor }}>
        {title}
      </h3>
    </div>
  );
}

export default Heading;
