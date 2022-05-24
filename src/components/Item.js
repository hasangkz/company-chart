const Item = (props) => {
  return (
    <div
      className="item-wrapper"
      style={{ top: props.top, width: props.width }}
    >
      <div className="text" style={{ backgroundColor: props.backgroundColor }}>
        {props.text}
      </div>

      <div className="count">{props.count}</div>
    </div>
  );
};
export default Item;
