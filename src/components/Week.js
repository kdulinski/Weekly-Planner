import "./Week.css";

function Week(props) {
  return (
    <div>
      <div className="header">
        <h1>Weekly Planner</h1>
      </div>
      <div className="days">{props.children}</div>
    </div>
  );
}

export default Week;
