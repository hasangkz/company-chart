import "./App.css";
const Area = (props) => {
  return (
    <div className="area" style={{ height: props.data.length * 50 }}>
      {props.children}
    </div>
  );
};
export default Area;
