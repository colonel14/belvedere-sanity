function GridList({ title, columnsCount = 5, list = [] }) {
  return (
    <div
      className="grid__list"
      style={{
        gridTemplateColumns: `repeat(${columnsCount}, 1fr)`,
      }}
    >
      {list?.map((item, idx) => (
        <div
          key={idx}
          className="grid__list-box"
          style={{
            backgroundColor: item.color.hex,
          }}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
}

export default GridList;
