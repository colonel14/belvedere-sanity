function LearningArea({ title, list = [] }) {
  return (
    <div className="learning__area">
      <h4 className="learning__area-title">{title}</h4>
      <div className="learning__area-list">
        {list?.map((item, idx) => (
          <div
            key={idx}
            className="learning__area-box"
            style={{ backgroundColor: item.color.hex }}
          >
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
}

export default LearningArea;
