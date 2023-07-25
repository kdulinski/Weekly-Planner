import "./Day.css";

function Day(props) {
  return (
    <div className="day">
      <h2>{props.dayName}</h2>
      {props.children}
    </div>
  );
}

export default Day;
